import axios from "axios";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const handleOpen = (todo: IToDo) => {
    setModalOpen(true);
    setEditData({
      id: todo.id,
      todoName: todo.todoName,
      description: todo.description,
    });
  };
  const [error, setError] = useState<boolean | null>(false);
  const [postData, setPostData] = useState({
    todoName: "",
    description: "",
  });

  const [editData, setEditData] = useState<IToDo>({
    id: 0,
    todoName: "",
    description: "",
    isCompleted: false,
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
      console.error(err);
    }
  };

  const addTodo = async (e: FormEvent) => {
    e.preventDefault();
    if (postData.todoName !== "" && postData.description !== "") {
      try {
        await axios.post(API, postData);
        setPostData({
          todoName: "",
          description: ""
        });
        toast.success('Todo added successfully!');
        getTodos();
      } catch (err) {
        console.error("Error posting data:", err);
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const editTodo = async (e: FormEvent) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
    try {
      await axios.put(`${API}`, editData);
      toast.success('Todo updated successfully!');
      getTodos();
    } catch (err) {
      console.error(err);
      toast.error('Failed to update todo.');
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${API}/?id=${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.success('Todo deleted successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete todo.');
    }
  };

  const editComplete = async (id: number, currentStatus: boolean) => {
    try {
      await axios.put(`${API}/${id}`, { isCompleted: !currentStatus });
      getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const editHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    todos,
    error,
    postData,
    addTodo,
    editTodo,
    modalOpen,
    deleteTodo,
    handleChange,
    handleClose,
    editHandler,
    handleOpen,
    editData,
    editComplete,
  };
}
