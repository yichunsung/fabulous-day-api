import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';

@Module({
  providers: [TodoListService],
  controllers: [TodoListController]
})
export class TodoListModule {}
