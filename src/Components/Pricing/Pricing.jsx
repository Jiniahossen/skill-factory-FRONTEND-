import { BsToggleOff } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa6";

function TopLine() {
  return (
    <>
      <h1 className="text-4xl mb-2 font-Jost font-semibold text-center">
        Here are all our plans
      </h1>
      <p className="text-base font-Jost text-center">
        A simple paragraph is comprised of three major components. The which is
        often a declarative sentence.
      </p>
    </>
  );
}

export default function Pricing() {
    return (
      <>
        <TopLine />
  
        {/* toggle */}
        <div className="flex flex-row items-center justify-center gap-4 my-6">
          <h1 className="text-2xl font-semibold font-Jost">Monthly </h1>
          <div className="flex items-center gap-4">
            <BsToggleOff className="text-4xl cursor-pointer" />
          </div>
          <h1 className="text-2xl font-semibold font-Jost">Yearly</h1>
        </div>

        {/* package */}
        <div>
            <div>
                 
            </div>
        </div>
      </>
    );
  }
  
  
