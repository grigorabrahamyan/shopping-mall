import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsAlphanumeric,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(8, 8)
  sku: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  categoryId: number;
}
