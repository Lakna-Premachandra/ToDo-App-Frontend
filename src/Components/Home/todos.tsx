import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IToDo } from "../hooks/useToDo";

export default function Todos({
  todos,
  deleteTodo,
  editTodo,
  handleOpen,
}: {
  todos: IToDo[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number) => void;
  handleOpen: () => void;
}) {
  return (
    <>
      <div className="todo-list grid grid-cols-2 gap-8 w-full max-sm:grid-cols-1 p-4">
        {todos.map((todo: any) => {
          return (
            <div className="todo-item flex  flex-col  w-full shadow  border-2 border-slate-200 max-w-[500px] p-6 rounded-xl max-sm:flex-col gap-4">
              <div key={todo.id} className=" w-full">
                <div className="flex gap-3 justify-between">
                  <h2 className="text-xl font-bold tracking-wide">
                    {todo.todoName}
                  </h2>
                  <button>
                    <CheckBoxOutlineBlankIcon />
                  </button>
                </div>
                <div className="w-full  break-words whitespace-normal">
                  {todo.description}
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleOpen}
                  type="submit"
                  className="bg-[#27739f] text-3xl hover:bg-[#406d88] rounded-md text-[whitesmoke] p-2 active:scale-90 max-sm:w-full flex justify-center"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  type="submit"
                  className="bg-[#da3434] text-3xl hover:bg-[#ba4141] rounded-md text-[whitesmoke] p-2 active:scale-90 max-sm:w-full flex justify-center"
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
