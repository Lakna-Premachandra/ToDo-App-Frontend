function Todos() {
  return (
    <>
      <div className="list-none w-full  border border-red-500
      grid grid-cols-2 gap-10
      px-8 py-4">
        {/* {todos.map((todo) => ( */}
        <div>
          <div className="bg-slate-100 p-4  flex justify-between items-center border-red-500
          ">
            <div className="mb-3">
              <h1>hi</h1>
              <p>hihi</p>
            </div>
            <div className="flex gap-3">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
        {/* ))} */}

        <div>
          <div className="flex justify-between items-center">
            <div className="mb-3">
              <h1>hi</h1>
              <p>hihi</p>
            </div>
            <div className="flex gap-3">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
