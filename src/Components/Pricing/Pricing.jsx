import { BsToggleOff } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

function Button({ text }) {
  return (
    <div className="flex font-Jost items-center justify-center">
      <button className="px-6 mt-10 py-3 border bg-[#9A7AF1] text-white hover:text-[#9A7AF1] hover:bg-white rounded-xl hover:border-[#9A7AF1]">
        {text}
      </button>
    </div>
  );
}

function TopLine() {
  return (
    <>
      <h1 className="text-5xl mb-2 font-Jost font-semibold text-center mt-20">
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
    <div id="pricing">
      <TopLine />

      {/* toggle */}
      <div className="flex flex-row items-center justify-center gap-4 my-6">
        <h1 className="text-2xl font-semibold font-Jost">Monthly </h1>
        <div className="flex items-center gap-4">
          <BsToggleOff className="text-4xl cursor-pointer text-[#9A7AF1]" />
        </div>
        <h1 className="text-2xl font-semibold font-Jost">Yearly</h1>
      </div>

      {/* package */}
      <div className="flex gap-16 max-w-6xl mx-auto mt-10">
        <div className="py-20 px-6 border shadow-xl  hover:shadow-2xl rounded-3xl">
          <h1 className="text-2xl  text-center mb-6 font-bold">Start</h1>
          <p className="text-sm font-Jost text-center">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <h1 className="font-Jost text-5xl text-center font-semibold text-[#9A7AF1] my-6">
            $50<sub className="text-sm font-Jost text-black">/month</sub>
          </h1>
          <ul className="font-Jost">
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Video of lessons</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Homework check</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-red-400" />
              <h1>Additional practical tasks</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-red-400" />
              <h1>Monthly conferences </h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-red-400" />
              <h1>Personal advice from teachers</h1>
            </li>
          </ul>

          <Button text={"Get Started"} />
        </div>
        <div className="py-20 px-6 border hover:shadow-2xl shadow-xl rounded-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">Advance</h1>
          <p className="text-sm font-Jost text-center">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <h1 className="font-Jost text-5xl text-center font-semibold text-[#9A7AF1] my-6">
            $85<sub className="text-sm font-Jost text-black">/month</sub>
          </h1>
          <ul className="font-Jost">
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Video of lessons</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Homework check</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Additional practical tasks</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Monthly conferences </h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-red-400" />
              <h1>Personal advice from teachers</h1>
            </li>
          </ul>
          <Button text={"Get Started"} />
        </div>
        <div className="py-20 px-6 hover:shadow-2xl border shadow-xl rounded-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">Premium</h1>
          <p className="text-sm font-Jost text-center">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <h1 className="font-Jost text-5xl text-center font-semibold text-[#9A7AF1] my-6">
            $100<sub className="text-sm font-Jost text-black">/month</sub>
          </h1>
          <ul className="font-Jost">
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Video of lessons</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Homework check</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Additional practical tasks</h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Monthly conferences </h1>
            </li>
            <li className="flex gap-4 my-2">
              <FaCircle className="text-green-400" />
              <h1>Personal advice from teachers</h1>
            </li>
          </ul>

          <Button text={"Get Started"} />
        </div>
      </div>
    </div>
  );
}
