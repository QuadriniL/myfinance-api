import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { join } from 'path';

@Module({
  imports: [
    TransactionsModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, '..', '__tmp__', 'database.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
