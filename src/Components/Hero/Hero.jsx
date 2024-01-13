export function Button({ text }) {
  return (
    <>
      <button className="font-Jost bg-[#9A7AF1] text-white text-sm w-28 rounded-sm py-2 text-center">
        {text}
      </button>
    </>
  );
}

export default function Hero() {
  return (
    <div className="font-Jost flex justify-between items-center gap-10 p-20 rounded-s-2xl rounded-se-2xl rounded-ee-[150px] bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] ">
      <div>
        <h1 className="text-7xl font-Jost font-semibold text-white">
          Develop your skills without diligence
        </h1>
        <p className="text-white font-Jost text-base mt-6">
          A good example of a paragraph contains a topic sentence, details and a
          conclusion. There are many different kinds of animals that live in
          China.
        </p>
        <div className="flex gap-6 mt-6">
          <Button text={"Get Started"} />
          <Button text={"Discount"} />
        </div>
      </div>
      <div className="w-2/4">
        <img
          src="https://i.ibb.co/vxnt2rf/undraw-fashion-blogging-re-fhi5-1.png"
          alt=""
          className="w-[429px]"
        />
      </div>
    </div>
  );
}
