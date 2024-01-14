import { BsToggleOff } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa6";

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

//about section
export function About() {
  return (
    <>
      <div className="font-Jost flex justify-between items-center gap-10 p-20 rounded-s-2xl rounded-se-2xl rounded-ee-[150px] bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] ">
        <div>
          <h1 className="text-7xl font-Jost font-semibold text-white">
            Each student an share their discount code for friends
          </h1>
          <p className="text-white font-Jost text-base mt-6">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.”
          </p>
          <button className="px-6 mt-10 py-3 font-Jost border bg-[#9A7AF1] text-white hover:text-[#9A7AF1] hover:bg-white rounded-xl hover:border-[#9A7AF1]">
            I have a code
          </button>
        </div>
        <div className="w-2/4">
          <img
            src="https://i.ibb.co/vxnt2rf/undraw-fashion-blogging-re-fhi5-1.png"
            alt=""
            className="w-[429px]"
          />
        </div>
      </div>
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
          <BsToggleOff className="text-4xl cursor-pointer text-[#9A7AF1]" />
        </div>
        <h1 className="text-2xl font-semibold font-Jost">Yearly</h1>
      </div>

      {/* package */}
      <div className="flex gap-16 max-w-6xl mx-auto mt-10">
        <div className="py-20 px-6 shadow-slate-300 shadow-xl rounded-3xl">
          <h1 className="text-2xl  text-center mb-6 font-bold">Start</h1>
          <p className="text-sm font-Jost text-center">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <h1 className="font-Jost text-5xl text-center font-semibold text-[#9A7AF1] my-6">
            $50<sub className="text-sm font-Jost text-black">/month</sub>
          </h1>
          <ul className="font-Jost">
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Video of lessons</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Homework check</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-red-400" />
              <h1>Additional practical tasks</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-red-400" />
              <h1>Monthly conferences </h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-red-400" />
              <h1>Personal advice from teachers</h1>
            </li>
          </ul>

          <Button text={"Get Started"} />
        </div>
        <div className="py-20 px-6 shadow-slate-300 shadow-xl rounded-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">Advance</h1>
          <p className="text-sm font-Jost text-center">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <h1 className="font-Jost text-5xl text-center font-semibold text-[#9A7AF1] my-6">
            $85<sub className="text-sm font-Jost text-black">/month</sub>
          </h1>
          <ul>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Video of lessons</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Homework check</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Additional practical tasks</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Monthly conferences </h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-red-400" />
              <h1>Personal advice from teachers</h1>
            </li>
          </ul>
          <Button text={"Get Started"} />
        </div>
        <div className="py-20 px-6 shadow-slate-300 shadow-xl rounded-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">Premium</h1>
          <p className="text-sm font-Jost text-center">
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <h1 className="font-Jost text-5xl text-center font-semibold text-[#9A7AF1] my-6">
            $100<sub className="text-sm font-Jost text-black">/month</sub>
          </h1>
          <ul>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Video of lessons</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Homework check</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Additional practical tasks</h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Monthly conferences </h1>
            </li>
            <li className="flex gap-4">
              <FaRegCircle className="text-green-400" />
              <h1>Personal advice from teachers</h1>
            </li>
          </ul>

          <Button text={"Get Started"} />
        </div>
      </div>
    </>
  );
}
