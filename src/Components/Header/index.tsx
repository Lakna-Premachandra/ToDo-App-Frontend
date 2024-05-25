function Header() {
  return (
    <>
      <div className=" w-full bg-blue-900" >
        <div className="logo__wrapper flex justify-between max-sm:flex">
          <img className="w-[110px] h-[100px] p-5" src="/images/logo.png "alt="" />
          <h1 className="font-semibold text-3xl text-white p-8 tracking-wider">ToDo App</h1>
        </div>
      </div>
    </>
  )
}

export default Header
