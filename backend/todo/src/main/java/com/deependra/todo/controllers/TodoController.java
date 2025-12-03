package com.deependra.todo.controllers;

import com.deependra.todo.model.Todo;
import com.deependra.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TodoController {
    @Autowired
    TodoService service;

//    Todo todo= new Todo(0,"test","testing add todo","difficult",false);
    @GetMapping()
    public String home(){
        return "This is the Home Page of Todo Application";
    }

    @GetMapping("/todos")
    public List<Todo> getTodos(){
        return service.getTodo();
    }

    @PostMapping("/add")
    public Todo addTodo(@RequestBody Todo todo){
        return  service.addTodo(todo);
    }

    @PutMapping("/todos/{id}/complete")
    public void updateTodo(@PathVariable int id){
        service.updateTodo(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTodo(@PathVariable int id){
        service.deleteTodo(id);
    }
}
