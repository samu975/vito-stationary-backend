import { Column, Table, Model, Default, Unique } from 'sequelize-typescript';

@Table
export class Usuario extends Model {
  @Column
  nombre: string;

  @Column
  apellido: string;

  @Column({ unique: true })
  email: string;

  @Column
  contrasena: string;

  @Default(2)
  @Column
  rol: number;

  @Column
  telefono: string;
}
