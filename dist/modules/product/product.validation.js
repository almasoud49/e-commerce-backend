"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidation = void 0;
const zod_1 = require("zod");
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().int().min(0),
    inStock: zod_1.z.boolean(),
});
const createProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
    }),
    description: zod_1.z.string(),
    price: zod_1.z
        .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a number',
    })
        .positive(),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(variantValidationSchema),
    inventory: inventoryValidationSchema,
});
exports.ZodValidation = {
    createProductValidationSchema,
};
