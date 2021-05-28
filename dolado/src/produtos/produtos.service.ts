import { Injectable, Body, Logger,  Inject } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosM } from './produto.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProdutosService {
  
  constructor(
    @InjectModel(ProdutosM)
    private produtosModel: typeof ProdutosM
    ) {}

  private readonly logger = new Logger(ProdutosService.name);

  ///////Criar Prroduto
  create(createProdutoDto: CreateProdutoDto) {
    this.logger.log(createProdutoDto);
    return this.produtosModel.create(createProdutoDto);
  }

  ///////Listar Produtos
  findAll() {
    return this.produtosModel.findAll();
  }

  ///////Localizar Produto
  findOne(id) {
    this.logger.log(id);
    return this.produtosModel.findOne(id);
  }

  ///////Alterar Produto
  update(id, updateProdutoDto: UpdateProdutoDto) {
    this.logger.log(id);
    this.logger.log(updateProdutoDto);
    return this.produtosModel.update(updateProdutoDto, {
      where: {
        id: id
      }
    });
  }

  ///////Remover Produto
  remove(id) {
    this.logger.log(id);
    return  this.produtosModel.destroy({
      where: {
        id: id
      }
    });
  }

}
