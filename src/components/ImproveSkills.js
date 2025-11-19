import { useNavigate } from "react-router-dom"


export default function ImproveSkills(){
const navigate = useNavigate();

const list = [
    "Practice recipes regularly with patience.",
    "Taste dishes at every step.",
    "Use fresh, high-quality ingredients.",
    "Learn proper cutting and chopping.",
    "Experiment with flavors and spices.",
    "Follow recipe measurements with accuracy.",
    "Learn to balance flavors like sweet, spicy, salty, and sour."
]

    return(
         <div className="section improve-skills">
            <div className="col img">
                   <img src="/images/gallery/img_10.jpg" alt="" />
        
                   </div>
                   <div className="col typography">
                    <h1 className="title">Improve your Culinary Skills </h1>
                     {list.map((item,index) => (
                        <p className="skill-item" key={index}>{item}</p>
                     ))}
                   </div>
                   
                </div>
    )
}