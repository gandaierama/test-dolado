import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProdutosM extends Model {
  @Column
  preco: string;
  @Column
  titulo: string;
  @Column
  descricao: string;
  @Column
  fabricante: string;
  @Column
  quantidade: string;
  @Column
  foto: string;
}