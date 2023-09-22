import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentModule } from './modules/Apartment/Apartment.module';
import { UsersModule } from './modules/users/User.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const { BD_PASSWORD, BD_PORT, BD_USERNAME, BD_NAME, BD_HOST } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: BD_HOST,
      port: Number(BD_PORT),
      username: BD_USERNAME,
      password: BD_PASSWORD,
      database: BD_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ApartmentModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
