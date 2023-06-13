import { Column, Table, Model, Default } from 'sequelize-typescript';

@Table
export class Usuario extends Model {
  @Column
  nombre: string;

  @Column
  apellido: string;

  @Column
  email: string;

  @Column
  contrasena: string;

  @Default(2)
  @Column
  rol: number;
}
