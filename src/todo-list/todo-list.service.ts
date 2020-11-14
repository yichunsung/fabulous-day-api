import { Injectable } from '@nestjs/common';
import { TodoList, ResponseFormat } from './interfaces/todo-list.interface';

@Injectable()
export class TodoListService {

	private readonly todoList: TodoList[] = [];

	create(newTodoList: TodoList) {
		this.todoList.push(newTodoList);
	}

	findAll(): TodoList[] {
		return this.todoList;
	}

	findInformation(id: number) {
		console.log(this.todoList);
		console.log(this.todoList.filter(e=>e.id === Number(id)));
		return this.todoList.filter(e=>e.id === Number(id)).length > 0 ? this.todoList.filter(e=>e.id === Number(id))[0] : [];
	}

	/**
	 * [response description]
	 * @param {number=200}            status     [description]
	 * @param {string='successfully'} message    [description]
	 * @param {any}                   returnData [description]
	 */
	response(status: number=200, message: string='successfully', returnData: any) {
		const rsponse: ResponseFormat = {
			status: 200,
			message: 'successfully',
			data: returnData
		}
		return rsponse;
	}

}
