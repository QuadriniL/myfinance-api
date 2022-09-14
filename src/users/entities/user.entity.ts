import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column({
    primaryKey: true,
  })
  id: string;

  @Column
  username: string;

  @Column
  document: string;

  @Column
  password: string;
}
