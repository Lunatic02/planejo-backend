import { MaxLength, IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateClientDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  email?: string | null;

  @IsString()
  @IsNotEmpty()
  cellphone: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  // Geralmente o que a cliente está comprando.
  interests: string;
}
