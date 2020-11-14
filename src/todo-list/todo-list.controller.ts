import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoList } from './interfaces/todo-list.interface';
import { CreateTodoListDto } from './dto/create-todo-list.dto';

@Controller('todo-list')
export class TodoListController {

	constructor(private todoListService: TodoListService ) {}

	@Post()
	async create(@Body() createTodoList: CreateTodoListDto ) {
		this.todoListService.create(createTodoList);
		return this.todoListService.response(200, 'Updated successfully', this.todoListService.findAll());
	}

	@Get()
	async findAll() {
		return this.todoListService.findAll();
	}

	@Get(':id')
	findInformation(@Param('id') id) {
		return this.todoListService.response(200, 'Searched successfully', this.todoListService.findInformation(id));
	}

}
