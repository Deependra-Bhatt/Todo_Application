package com.deependra.todo.model;
import jakarta.persistence.*;

@Entity
@Table
public class Todo {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private int id;
    private String title;
    private String description;
    private String level;

    private boolean completed;

    public Todo() {
    }

    public Todo(String title, String description, String level, boolean completed) {
        this.title = title;
        this.description = description;
        this.level = level;
        this.completed = completed;
    }

    public Todo(int id, String title, String description, String level, boolean completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.level = level;
        this.completed = completed;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public boolean getCompleted() {
        return completed;
    }

    public void setCompleted(boolean isCompleted) {
        completed = isCompleted;
    }
}
