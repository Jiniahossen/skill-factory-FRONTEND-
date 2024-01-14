function Card({ title }) {
  return (
    <>
      <div className="bg-white py-16 px-4 rounded-2xl shadow-lg shadow-gray-400">
        <img
          src="https://i.ibb.co/C1kbr6N/undraw-road-to-knowledge-m8s0-1.png"
          alt=""
          
        />
        <h1 className="text-2xl font-medium font-Jost text-black mt-10 ">
          {title}
        </h1>
      </div>
    </>
  );
}

export default function Overview() {
  return (
    <div id="overview" className="flex gap-6 items-center mt-20 py-10">
      <div className="w-1/3 p-6">
        <h1 className="font-Jost font-semibold text-black text-4xl">
          Why we are better than others
        </h1>
        <p className="text-base font-Jost mt-6">
          A simple paragraph is comprised of three major components. The first
          sentence, which is often a declarative sentence, is called the “topic
          sentence.”
        </p>
      </div>
      <div className="flex gap-10 w-2/3">
        <Card title={" Conventient study schedule"} />
        <Card title={" Conventient study schedule"} />
        <Card title={" Conventient study schedule"} />
      </div>
    </div>
  );
}
