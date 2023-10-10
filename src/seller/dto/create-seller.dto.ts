import { MaxLength, IsString, IsNotEmpty } from 'class-validator';

export class CreateSellerDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  email: string;
  cellphone: string;
  cep: string;
}
