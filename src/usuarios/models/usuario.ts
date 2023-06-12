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

  @Default(1)
  @Column
  rol: number;
}
