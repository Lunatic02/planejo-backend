import { MaxLength, IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateSellerDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  cellphone: string;

  @IsNotEmpty()
  @IsString()
  cep: string;
}
