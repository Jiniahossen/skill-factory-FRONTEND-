import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";

export default function Home(){

    return (
        <div className="max-w-[1400px] mx-auto">
            <Navbar/>
            <Hero/>

        </div>
    )
}