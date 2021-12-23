import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { ITodos } from 'src/todos.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Get()
  getAllTodos(): ITodos[] {
    return this.todoService.findAllTodos();
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto): void {
    this.todoService.createTodo(newTodo);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
    return this.todoService.updateTodo(id, todo);
  }
}
