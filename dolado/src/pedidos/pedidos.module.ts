import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PedidosM } from './pedido.model';

@Module({
	imports: [SequelizeModule.forFeature([PedidosM])],
	controllers: [PedidosController],
	providers: [PedidosService]
})
export class PedidosModule {}
  