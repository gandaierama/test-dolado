import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
	  SequelizeModule.forRoot({
	      dialect: 'mysql',
	      host: process.env.PORT,
	      port: 3306,
	      username: 'root',
	      password: process.env.MYSQL_ROOT_PASSWORD,
	      database: process.env.MYSQL_DATABASE,
	      models: [],
	    }),
  		ProdutosModule, 
  		PedidosModule
  	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
