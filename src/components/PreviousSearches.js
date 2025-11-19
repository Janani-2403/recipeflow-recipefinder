import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from  "@fortawesome/free-solid-svg-icons";


export default function PreviousSearches(){
    const searches = ["pizza", "burger", "cookies", "juice", "biriyani", "Salad", "ice cream", "pudding", "soup"];

    return(
        <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    {searches.map((search, index) => (
                        <div style={{animationDelay: index * .1 + "s"}} className="search-item" key={index}>
                            {search}
                        </div>
                    ))}
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search for a recipe..."/>
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
    )
}