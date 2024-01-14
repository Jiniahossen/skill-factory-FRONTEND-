import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Form() {
  return (
    <>
      <form className="">
        <div className="form-control mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="py-2.5 text-white text-lg w-full font-Jost rounded-lg bg-gradient-to-r from-[#EE9AE5] to-[#5961F9]">
            Create Account
          </button>
        </div>
          <h1 className="text-black font-Jost text-sm mt-4">
            Already have an account?{" "}
            <span>
              <Link to={"/login"} className="text-blue-500 font-Jost text-sm">Login</Link>
            </span>
          </h1>
      </form>
    </>
  );
}

export default function SignIn() {
    return (
      <div className="bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] min-h-screen w-full flex justify-between">
        <Link to={'/'} className="mt-10">
            <div className="flex gap-2 ps-6 items-center">
          <div className="bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] w-8 h-8 rounded-md"></div>
          <a className=" text-xl font-Jost font-semibold">Skill Factory</a>
        </div></Link>
        {/* Form div */}
        <div className="bg-white justify-end rounded-s-[100px] min-h-screen w-[900px] p-20">
          <h1 className="text-3xl font-Jost font-bold">Create Your Account</h1>
          <div className="flex justify-start mt-6 gap-10">
            <button className="px-4 w-64 py-2.5 items-center flex gap-6 rounded-xl border border-black shadow-lg shadow-slate-300">
              <FaGoogle className="text-xl text-black" />
              <h1 className="text-base text-black font-Jost font-semibold">
                Sign up with google
              </h1>
            </button>
            <button className="px-4 w-64 py-2.5 items-center flex gap-6 rounded-xl border border-black shadow-lg shadow-slate-300">
              <FaFacebook className="text-xl text-black" />
              <h1 className="text-base text-black font-Jost font-semibold">
                Sign up with facebook
              </h1>
            </button>
          </div>
          <div className="divider text-black font-Jost mt-10 mb-6">OR</div>
          {/* Your Form component */}
          <Form />
        </div>
      </div>
    );
  }
  
