import { Injectable } from '@nestjs/common';
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
  findOne(id: string) {
    return this.data.find((todo) => todo.id === Number(id));
  }
}
