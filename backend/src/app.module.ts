import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosRecabadosModule } from './datos_recabados/datos_recabados.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345678',
        database: 'pagina_web_zuriel',
        autoLoadEntities: true,
        synchronize: true, // ← solo en desarrollo
      }),
    }),
    DatosRecabadosModule,
  ],
})
export class AppModule {}
