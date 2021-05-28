import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as env from 'dotenv';

env.config();

@Module({
  imports: [

  	 SequelizeModule.forRoot({
		dialect: 'mysql',
		host: process.env.MYSQL_HOST,
		port: Number.parseInt(process.env.MYSQL_PORT, 10),
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_ROOT_PASSWORD,
		database: process.env.MYSQL_DATABASE,
		synchronize: true,
		logging: true,
		autoLoadModels: true,
		retryAttempts: 2,
		retryDelay: 1000,
    }),
	  
  		ProdutosModule, 
  		PedidosModule
  	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
