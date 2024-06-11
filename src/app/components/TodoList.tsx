import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Todo } from "@prisma/client";
import React from "react";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} dense>
          <Checkbox
            edge="start"
            checked={todo.completed}
            onChange={() => onToggle(todo.id, !todo.completed)}
          />
          <ListItemText primary={todo.title} />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDelete(todo.id)}
            sx={{
              fontSize: 15,
              ":hover": {
                color: "inherit",
                backgroundColor: "transparent",
              },
            }}
          >
            delete
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
