"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //checking the available quantity in inventory
    const product = yield product_model_1.Product.findById(order.productId);
    if (!product) {
        throw Error('Product Not Found');
    }
    if (product.inventory.quantity <= 0 ||
        !product.inventory.inStock ||
        order.quantity > product.inventory.quantity) {
        throw Error('Insufficient Stock');
    }
    //Updating the inventory quantity and inStock status
    const updatedProduct = yield product_model_1.Product.findOneAndUpdate({ _id: order.productId, 'inventory.quantity': { $gt: 0 } }, {
        $inc: { 'inventory.quantity': -order.quantity },
        'inventory.inStock': true,
    }, { new: true });
    if (((_a = updatedProduct === null || updatedProduct === void 0 ? void 0 : updatedProduct.inventory) === null || _a === void 0 ? void 0 : _a.quantity) === 0) {
        yield product_model_1.Product.updateOne({ _id: order.productId }, { 'inventory.inStock': false });
    }
    const result = yield order_model_1.Order.create(order);
    return result;
});
const getOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const result = yield order_model_1.Order.find({ email: email });
        return result;
    }
    else {
        const result = yield order_model_1.Order.find();
        return result;
    }
});
exports.OrderServices = {
    createOrder,
    getOrders,
};
