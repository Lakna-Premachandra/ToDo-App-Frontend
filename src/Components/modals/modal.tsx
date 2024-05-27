import { IToDo } from "../hooks/useToDo";
import { ChangeEvent, FormEvent } from "react";

export const Modal = ({
  handleClose,
  editHandler,
  editTodo,
  editData,
}: {
  handleClose: () => void;
  editHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  editTodo: (e:FormEvent) => void;
  editData: IToDo;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 shadow-lg"></div>
      <form
        onSubmit={editTodo}
        className="max-w-xl h-[400px] bg-slate-200 p-6 w-full flex flex-col gap-3 z-20 relative rounded-lg shadow-lg focus:outline-none"
      >
        <h1 className="text-slate-900 text-lg font-bold">Edit My Todo </h1>
        <input
          className="p-2 rounded-md border border-slate-300"
          type="text"
          placeholder="Edit task"
          name="todoName"
          onChange={editHandler}
          value={editData.todoName}
        />
        <textarea
          className="p-2 rounded-md border border-slate-300 h-full"
          placeholder="Edit description"
          name="description"
          onChange={editHandler}
          value={editData.description}
        ></textarea>
        <button className="mt-3 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Save Changes
        </button>
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-4 text-2xl bg-slate-100 font-semibold rounded px-2"
        >
          x
        </button>
      </form>
    </div>
  );
};

