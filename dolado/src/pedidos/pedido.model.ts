import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class PedidosM extends Model {
  @Column
  produtos: string;
  @Column
  total: string;
}