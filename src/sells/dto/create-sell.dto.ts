import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSellDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  paymentType: string;
  @IsObject()
  @IsNotEmpty()
  products: object;
  @IsBoolean()
  @IsNotEmpty()
  order: boolean;
  @IsString()
  supplier?: string;
  @IsString()
  deliveryDate?: string;
  @IsNumber()
  @IsNotEmpty()
  clientId: number;
  @IsNumber()
  @IsNotEmpty()
  sellerId: number;
  done: boolean;
}
