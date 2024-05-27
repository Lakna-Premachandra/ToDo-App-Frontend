import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IToDo } from "../hooks/useToDo";

const colors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
];

export default function Todos({
  todos,
  deleteTodo,
  handleOpen,
  editComplete,
}: {
  todos: IToDo[];
  deleteTodo: (id: number) => void;
  handleOpen: (todo: IToDo) => void;
  editComplete: (id: number, currentStatus: boolean) => void;
}) {
  return (
    <>
      <div className="todo-list grid grid-cols-2 gap-8 w-full max-sm:grid-cols-1 max-sm:m-auto p-4">
        {todos.map((todo: any, index: number) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              className={`todo-item flex flex-col shadow-md border-slate-200 p-6 rounded-xl max-sm:flex-col gap-4 ${colorClass}`}
            >
              <div key={todo.id} className=" w-full">
                <div className="flex gap-3 justify-between">
                  <h2
                    className={`${
                      todo.isCompleted ? "line-through" : ""
                    } w-full  break-words whitespace-normal text-lg font-semibold tracking-wide leading-8`}
                  >
                    {todo.todoName}
                  </h2>

                  <button
                    onClick={() => {
                      editComplete(todo.id, todo.isCompleted);
                    }}
                  >
                    {todo.isCompleted ? (
                      <CheckBoxIcon className="text-2xl" />
                    ) : (
                      <CheckBoxOutlineBlankIcon className="text-2xl" />
                    )}
                  </button>
                </div>
                <div className="w-full tracking-wide leading-8  break-words whitespace-normal">
                  {todo.description}
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    handleOpen(todo);
                  }}
                  type="submit"
                  className="bg-[#27739f]  hover:bg-[#406d88] rounded-md text-[whitesmoke] p-2 active:scale-90 max-sm:w-full flex justify-center"
                >
                  <EditIcon/>
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  type="submit"
                  className="bg-[#da3434]  hover:bg-[#ba4141] rounded-md text-[whitesmoke] p-2 active:scale-90 max-sm:w-full flex justify-center"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
