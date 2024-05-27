import { Alert } from "@mui/material";
import UseToDo from "../hooks/useToDo";
import { Modal } from "../modals/modal";
import Inputs from "./inputs";
import Todos from "./todos";
export default function Home() {
  const {
    addTodo,
    handleChange,
    todos,
    deleteTodo,
    postData,
    modalOpen,
    editTodo,
    handleClose,
    editHandler,
    handleOpen,
    editData,
    editComplete,
    error,
  } = UseToDo();
  return (
    <div className="main__wrapper w-full">
      <div className="main__container max-w-5xl py-20 m-auto grid grid-c">
        <div className="flex justify-center items-center flex-col gap-14">
          {error && <Alert severity="error">All inputs fields are required</Alert>}
          <h1 className="text-5xl font-bold tracking-wide text-zinc-600">ToDo List</h1>
          <Inputs
            addTodo={addTodo}
            handleChange={handleChange}
            postData={postData}
          />
          <Todos
            todos={todos}
            deleteTodo={deleteTodo}
            handleOpen={handleOpen}
            editComplete={editComplete}
          />
          {modalOpen && (
            <Modal
              handleClose={handleClose}
              editHandler={editHandler}
              editTodo={editTodo}
              editData={editData}
            />
          )}
        </div>
      </div>
    </div>
  );
}
