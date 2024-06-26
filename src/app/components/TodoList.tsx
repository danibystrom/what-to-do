import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Todo } from "@prisma/client";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onToggle,
  onEdit,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              edge="start"
              checked={todo.completed}
              onChange={() => onToggle(todo.id, !todo.completed)}
              inputProps={{ "data-cy": "todo-checkbox" } as React.InputHTMLAttributes<HTMLInputElement>}
            />
            <ListItemText primary={todo.title} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="end"
              aria-label="edit"
              data-cy="edit-button"
              onClick={() => onEdit(todo)}
              sx={{
                fontSize: 15,
                marginRight: 1,
                ":hover": {
                  color: "inherit",
                  backgroundColor: "transparent",
                },
              }}
            >
              edit
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              data-cy="delete-button"
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
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
