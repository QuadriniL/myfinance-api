import { Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'transactions',
})
export class Transaction extends Model {
  @Column({
    primaryKey: true,
  })
  id: string;

  @Column
  amount: number;

  @Column
  description: string;
}
