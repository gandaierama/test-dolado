import { Injectable, Body, Logger,  Inject } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PedidosM } from './pedido.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PedidosService {
  constructor(
    @InjectModel(PedidosM)
    private pedidosModel: typeof PedidosM,
  ) {}

  private readonly logger = new Logger(PedidosService.name);

  ///////Criar Pedido
  create(createPedidoDto: CreatePedidoDto) {
    this.logger.log(createPedidoDto);
    return this.pedidosModel.create(createPedidoDto);
  }

  ///////Listar Pedidos
  findAll() {
    return this.pedidosModel.findAll();
  }

  ///////Localizar Pedido
  findOne(id){
    this.logger.log(id);
    return this.pedidosModel.findOne(id);
  }

  ///////Alterar Pedido
  update(id, updatePedidoDto: UpdatePedidoDto) {
    this.logger.log(id);
    this.logger.log(updatePedidoDto);
    return this.pedidosModel.update(updatePedidoDto, {
      where: {
        id: id
      }
    });
  }

  ///////Deletar Pedido
  remove(id) {
    this.logger.log(id);
    return  this.pedidosModel.destroy({
      where: {
        id: id
      }
    });
  }
}
