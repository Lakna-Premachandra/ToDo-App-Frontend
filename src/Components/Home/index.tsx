import Inputs from "./inputs";
import Todos from "./todos";

export default function Home() {
  return (
    
    <div className="main__wrapper w-full">
        <div className="main__container max-w-5xl py-20 m-auto grid grid-c">
          <div className='flex justify-center items-center flex-col gap-14'>
            <h1 className='text-3xl font-semibold tracking-wide '>ToDo</h1>
            <Inputs/>
            <Todos/>
          </div>
        </div>
      </div>
  )
}



