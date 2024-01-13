import { Button } from "../Hero/Hero";

function Description({ title, subtitle, parag }) {
  return (
    <>
      <h1 className="text-4xl font-Jost font-semibold text-black">
        {title} 
        <span className="text-4xl font-Jost font-semibold text-[#9A7AF1]">
         {" "} {subtitle}
        </span>
      </h1>
      <p className="text-base font-Jost text-gray-400 my-6">{parag}</p>
      <Button text={"Get Startted"} />
    </>
  );
}

export default function Feature() {
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-10">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/SQhy2bT/undraw-Reading-time-re-phf7-2.png"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <Description
            title={"We have been improving our product"}
            subtitle={"for many years."}
            parag={
              "A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China."
            }
          />
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center gap-10">
        <div className="w-1/2">
          <Description
            title={"You can Practice at any"}
            subtitle={"time convinent for you."}
            parag={
              "A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China."
            }
          />
        </div>
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/zxD4gdL/undraw-My-universe-803e-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
