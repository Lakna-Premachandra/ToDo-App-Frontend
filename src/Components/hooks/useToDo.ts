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
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(!modalOpen);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState({
    todoName: "",
    description: "",
  });
  
  const [editData, setEditData] = useState({
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

  const editTodo = async () => {
    // e.preventDefault();
    setModalOpen(!modalOpen);
    try {
      await axios.put(`${API}`, editData);
      getTodos();
    } catch (err) {
      setError("Failed to edit todo");
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${API}/?id=${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("Failed to delete todo");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const editHandler = (e: any) => {
    const { value, name } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    todos,
    error,
    postData,
    setPostData,
    addTodo,
    editTodo,
    modalOpen,
    deleteTodo,
    handleChange,
    setModalOpen,
    handleClose,
    editHandler,
    handleOpen
  };
}
