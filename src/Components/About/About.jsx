//about section
export function About() {
    return (
      <>
        <div id="about" className="font-Jost flex justify-between items-center gap-10 p-10 mt-20 rounded-s-2xl rounded-se-2xl rounded-ee-[150px] bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] ">
          <div>
            <h1 className="text-7xl font-Jost font-semibold text-white">
              Each student an share their discount code for friends
            </h1>
            <p className="text-white font-Jost text-base mt-4">
              A simple paragraph is comprised of three major components. The first
              sentence, which is often a declarative sentence, is called the
              “topic sentence.”
            </p>
            <button className="px-6 border-[#9A7AF1] mt-10 py-3 font-Jost border bg-[#9A7AF1] text-white hover:text-[#9A7AF1] hover:bg-white rounded-xl hover:border-[#9A7AF1]">
              I have a code
            </button>
          </div>
          <div className="w-2/4">
            <img
              src="https://i.ibb.co/pXX85QJ/undraw-feeling-happy-jymo-1-removebg-preview.png"
              alt=""
              className="w-[429px] h-[486px]"
            />
          </div>
        </div>
      </>
    );
  }