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

  
  create(createPedidoDto: CreatePedidoDto) {
    this.logger.log(createPedidoDto);
    return 'This action adds a new pedido';
  }

  findAll() {
    return this.pedidosModel.findAll();
  }

  findOne(id: number) {
    this.logger.log(id);
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    this.logger.log(id);
    this.logger.log(updatePedidoDto);
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    this.logger.log(id);
    return `This action removes a #${id} pedido`;
  }
}
