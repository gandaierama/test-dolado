import { Injectable, Body, Logger,  Inject } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosService {
  
  private readonly logger = new Logger(ProdutosService.name);

  
  create(createProdutoDto: CreateProdutoDto) {

    this.logger.log(createProdutoDto);
    return 'This action adds a new produto';
  }

  findAll() {
    return `This action returns all produtos`;
  }

  findOne(id: number) {
    this.logger.log(id);
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    this.logger.log(id);
    this.logger.log(updateProdutoDto);
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    this.logger.log(id);
    return `This action removes a #${id} produto`;
  }
}
