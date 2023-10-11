export class CreateSellDto {
  amount: number;
  paymentType: string;
  products: JSON;
  order: boolean;
  supplier?: string
  deliveryDate DateTime?
  clientId Int
  sellerId Int
}
