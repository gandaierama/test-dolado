import { ApiProperty } from "@nestjs/swagger";

export class CreatePedidoDto {

	///////
  @ApiProperty({
    example: "{1,2,3}",
    description: 'ID\'s dos Produtos do pedido'
  })
  readonly produtos: string;

///////
  @ApiProperty({
    example: "155.00",
    description: 'Valor total do pedido'
  })
  readonly total: string;


}
