import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {

	///////
  @ApiProperty({
    example: "15.00",
    description: 'Valor do Produto'
  })
  readonly preco: string;

///////
  @ApiProperty({
    example: "Televisor",
    description: 'Nome do Produto'
  })
  readonly titulo: string;

///////
  @ApiProperty({
    example: "Aparelho em boas condições",
    description: 'Descrição textual do Produto'
  })
  readonly descricao: string;

///////
  @ApiProperty({
    example: "LG",
    description: 'Fabricante do Produto'
  })
  readonly fabricante: string;

///////
  @ApiProperty({
    example: "15",
    description: 'Quantidade em Estoque'
  })
  readonly quantidade: string;

///////
  @ApiProperty({
    example: "https://example.com/image.jpg",
    description: 'Foto do produto'
  })
  readonly foto: string;

}
