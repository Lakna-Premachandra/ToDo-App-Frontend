// import { IoIosAddCircle } from "react-icons/io";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IToDo } from "../hooks/useToDo";

export default function Inputs({
  addTodo,
  handleChange,
  postData,
}: {
  addTodo: (e: any) => void;
  handleChange: (e: any) => void;
  postData: IToDo;
}) {
  return (
    <>
      <form
        onSubmit={addTodo}
        className="flex justify-center items-center gap-5 max-sm:flex-col max-w-5xl w-full p-4"
      >
        <input
          onChange={handleChange}
          className="text-lg p-3 border rounded-full w-full shadow-inner focus:outline-none focus:shadow-md"
          type="text"
          placeholder="Enter a task"
          name="todoName"
          value={postData.todoName}
        />
        <input
          onChange={handleChange}
          className="text-lg p-3 border rounded-full w-full shadow-inner focus:outline-none focus:shadow-md"
          type="text"
          placeholder="Enter Description"
          name="description"
          value={postData.description}
        />
        <button
          type="submit"
          className="bg-green-600 text-3xl hover:bg-green-800 rounded-md text-[whitesmoke] p-2 active:scale-90 max-sm:w-full flex justify-center"
        >
          <AddCircleIcon />
        </button>
      </form>
    </>
  );
}
