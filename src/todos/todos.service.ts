import { Injectable, NotFoundException } from '@nestjs/common';
import { ITodos } from 'src/todos.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  data: ITodos[] = [
    {
      id: 1,
      title: 'faire à manger',
      isDone: true,
    },
    {
      id: 2,
      title: 'aller se coucher',
      isDone: false,
    },
  ];
  findAllTodos(): ITodos[] {
    return this.data;
  }
  createTodo(todo: CreateTodoDto): void {
    this.data = [...this.data, todo];
  }
  findOne(id: string): ITodos {
    return this.data.find((todo) => todo.id === Number(id));
  }
  updateTodo(id: string, todo: CreateTodoDto) {
    const todoToUpdate = this.data.find((todo) => todo.id === Number(id));
    console.log(todoToUpdate);
    if (!todoToUpdate) return new NotFoundException('Todo not found !');
    if (todo.hasOwnProperty('isDone')) {
      todoToUpdate.isDone = todo.isDone;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    const updateTodos = this.data.map((t) => (t.id !== +id ? t : todoToUpdate));
    this.data = [...updateTodos];
    return { updateTodos: 1, todo: todoToUpdate };
  }
}
