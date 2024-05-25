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
    handleOpen
  } = UseToDo();
  return (
    <div className="main__wrapper w-full">
      <div className="main__container max-w-5xl py-20 m-auto grid grid-c">
        <div className="flex justify-center items-center flex-col gap-14">
          <h1 className="text-3xl font-semibold tracking-wide ">ToDo List</h1>
          <Inputs
            addTodo={addTodo}
            handleChange={handleChange}
            postData={postData}
          />
          <Todos
            editTodo={editTodo}
            todos={todos}
            deleteTodo={deleteTodo}
            handleOpen={handleOpen}
          />
          {modalOpen && <Modal modalOpen={modalOpen}
            handleClose={handleClose}
            editHandler={editHandler}
             />}
        </div>
      </div>
    </div>
  );
}
