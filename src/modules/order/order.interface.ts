
export type TEmail = {
  email: string | undefined;
}

export type TOrder = {
  email: TEmail;
  productId: string;
  price: number;
  quantity: number;
};

