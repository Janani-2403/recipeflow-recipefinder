import HeroSection from "../components/Herosection.js";
import ImproveSkills from "../components/ImproveSkills.js";
import QuoteSection from "../components/QuoteSection.js";


export default function Home(){
    return(
        <div>
             <HeroSection/>
             <ImproveSkills/>
             <QuoteSection/>
        </div>
    )
}