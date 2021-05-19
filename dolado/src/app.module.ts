import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { PedidosM } from './pedidos/pedido.model';
import { ProdutosM } from './produtos/produto.model';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
	  SequelizeModule.forRoot({
		  useFactory: () => ({
		    dialect: 'mysql',
				host: process.env.MYSQL_HOST,
				port: Number.parseInt(process.env.MYSQL_PORT, 10),
				username: process.env.MYSQL_USER,
				password: process.env.MYSQL_USER_PASS,
				database: process.env.MYSQL_DB_NAME,
				models: [PedidosM, ProdutosM],
		  })

		}),
  		ProdutosModule, 
  		PedidosModule
  	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
