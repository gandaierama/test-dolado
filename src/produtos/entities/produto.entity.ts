import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produtos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  preco: string;
  @Column({ nullable: true })
  titulo: string;
  @Column({ nullable: true })
  descricao: string;
  @Column({ nullable: true })
  fabricante: string;
  @Column({ nullable: true })
  quantidade: string;
  @Column({ nullable: true })
  foto: string;
  @Column({type: "datetime",
 default: () => "CURRENT_TIMESTAMP"}) date: Date
}