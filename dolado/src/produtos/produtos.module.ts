import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdutosM } from './produto.model';


@Module({
	imports: [SequelizeModule.forFeature([ProdutosM])],
	controllers: [ProdutosController],
	providers: [ProdutosService]
})
export class ProdutosModule {}
