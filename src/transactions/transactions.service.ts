import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  async create(createTransactionDto: CreateTransactionDto) {
    return Transaction.create({
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createTransactionDto,
    });
  }

  findAll() {
    return Transaction.findAll();
  }

  findOne(id: string) {
    return `This action returns a #${id} transaction`;
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: string) {
    return `This action removes a #${id} transaction`;
  }
}
