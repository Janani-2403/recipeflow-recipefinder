import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faQuoteLeft } from "@fortawesome/free-solid-svg-icons"



export default function QuoteSection(){
    return(
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>When you cook, you transform the raw into the cooked,
and in that act, you reclaim something essential
about what it means to be human.</p>
<p className="quote-author">— Michael Pollan</p>
        </div>
    )
}