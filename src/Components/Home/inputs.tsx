// import { IoIosAddCircle } from "react-icons/io";

export default function Inputs() {

  return (
    <>
      <form className="flex justify-center items-center gap-5 max-sm:flex-col max-w-5xl w-full p-4">
        <input
          className="text-lg p-3 border rounded-full w-full shadow-inner focus:outline-none focus:shadow-md"
          type="text"
          placeholder="Enter a task"
          name="todo"
        />
        <input
          className="text-lg p-3 border rounded-full w-full shadow-inner focus:outline-none focus:sadow-md"
          type="text"
          placeholder="Enter Description"
          name="description"
        />
        <button
          type="submit"
          className="bg-green-600 text-3xl hover:bg-green-800 rounded-md text-[whitesmoke] p-2 active:scale-90 max-sm:w-full flex justify-center"
        >
          {/* <IoIosAddCircle /> */}
        </button>
      </form>
    </>
  );
}
