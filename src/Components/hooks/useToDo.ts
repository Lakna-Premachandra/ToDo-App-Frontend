import axios from "axios";
import { useEffect, useState } from "react";

export interface IToDo {
  id?: number;
  todoName: string;
  description: string;
  isCompleted?: boolean;
}
export default function UseToDo() {
  const [todos, setTodos] = useState<IToDo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState({
    todoName: "",
    description: "",
  });

  const API = "https://localhost:7065/api/Todos";


  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const { data } = await axios.get(API);
      setTodos(data);
    } catch (err) {
      setError("Failed to get todos");
    }
  };

  const addTodo = async (e: any) => {
    e.preventDefault();
    try {
       await axios.post(API, postData);
       console.log(postData);
    } catch (err) {
      setError("Failed to add todo");
    }
    setPostData({
      todoName: "",
      description: "",
    });
    getTodos();
    
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };


  return {
    todos,
    error,
    postData,
    setPostData,
    addTodo,
    handleChange,
  };
}
