import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IToDo } from "../hooks/useToDo";
import { ChangeEvent, FormEvent } from "react";

export default function Inputs({
  addTodo,
  handleChange,
  postData,
}: {
  addTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  postData: IToDo;
}) {
  return (
    <>
      <form
        onSubmit={addTodo}
        className="flex rounded-md justify-center items-center gap-5 max-sm:flex-col relative  max-w-5xl w-full bg-slate-50 border shadow p-6"
      >
        <input
          onChange={handleChange}
          className="text-lg p-3 border  w-full shadow-inner focus:outline-none focus:shadow-md"
          type="text"
          placeholder="Enter a task"
          name="todoName"
          value={postData.todoName}
        />
        <input
          onChange={handleChange}
          className="text-lg p-3 border  w-full shadow-inner focus:outline-none focus:shadow-md"
          type="text"
          placeholder="Enter Description"
          name="description"
          value={postData.description}
        />
        <button
          type="submit"
          className="bg-green-600 text-3xl h-10  hover:bg-green-800  text-[whitesmoke] p-2 active:scale-90 max-sm:w-full flex justify-center rounded-xl"
        >
          <AddCircleIcon/>
        </button>
      </form>
    </>
  );
}
