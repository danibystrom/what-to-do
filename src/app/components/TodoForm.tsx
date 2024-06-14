import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";

interface TodoFormProps {
  onSubmit: (title: string) => void;
  defaultTitle?: string;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, defaultTitle = "" }) => {
  const [title, setTitle] = useState(defaultTitle);

  useEffect(() => {
    setTitle(defaultTitle);
  }, [defaultTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <TextField
        label="you gotta  ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {defaultTitle ? "Update do" : "Add do"}
      </Button>
    </Box>
  );
};

export default TodoForm;
