package com.deependra.todo.service;

import java.util.List;

import com.deependra.todo.model.Todo;
import com.deependra.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    TodoRepository repo;

    public List<Todo> getTodo() {
        //return todos;
        return repo.findAll();
    }

    public Todo getTodoById(int todoId) {
        return repo.findById(todoId).orElse(new Todo());
    }

    public Todo addTodo(Todo todo) {
       return repo.save(todo);
    }

    public void updateTodo(int todoId) {
        Todo todo= getTodoById(todoId);
        todo.setCompleted(true);
        repo.save(todo);
    }

    public void deleteTodo(int todoId) {
        repo.deleteById(todoId);
    }

}
