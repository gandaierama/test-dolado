import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pedidos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  produtos: string;
  @Column({ nullable: true })
  total: string;
  @Column({type: "datetime",
 default: () => "CURRENT_TIMESTAMP"}) date: Date
}
