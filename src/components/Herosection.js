import CustomImage from "./Customimage"
import { Link } from "react-router-dom"

export default function HeroSection(){
    const images = [
       "/images/gallery/img_1.jpg",
       "/images/gallery/img_2.jpg", 
       "/images/gallery/img_3.jpg", 
       "/images/gallery/img_4.jpg", 
       "/images/gallery/img_5.jpg", 
       "/images/gallery/img_6.jpg", 
       "/images/gallery/img_7.jpg", 
       "/images/gallery/img_8.jpg", 
       "/images/gallery/img_9.jpg"
]
    return(
        <div className="section hero">
           <div className="col typography">
            <h1 className="title">What Are We About </h1>
            <p className="info">RecipeFlow is built for anyone who wants to cook without overthinking. 
                Instead of scrolling through endless recipes, we help you find dishes based on what you already have at home. 
                Just type your ingredients and instantly explore meals that match your kitchen. 
                No more complicated cooking steps. 
                RecipeFlow keeps things simple, practical, and enjoyable.
               </p>
           <Link to="/recipes" className="btn">Explore Recipes</Link>
           </div>
           <div className="col gallery">
            { images.map((src, index) => (         
                 <CustomImage key={index} img={src} pt={"90%"}/>
            ))}

           </div>
        </div>
    )
}