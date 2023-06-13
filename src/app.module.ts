import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { OrdenModule } from './orden/orden.module';
import { PagoModule } from './pago/pago.module';
import { EnvioModule } from './envio/envio.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vito-stationary',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule,
    CategoriaModule,
    ProductoModule,
    RolesModule,
    AuthModule,
    OrdenModule,
    PagoModule,
    EnvioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
