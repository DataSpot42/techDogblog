import { Link } from "react-router-dom"
import './card.css'
import Profile from './images/profile.png'
import Networking from './images/networking.webp'


const Card = ({blog}) => {
    console.log(blog)
    

    return (
        <div className='card_item'>
            <div className="card_top">
                 <div className="card-img-top"> <img src={Networking} ></img>{/*blog.image*/}</div>

                 <div className="subjectGroup"><p>Networking</p>{/**/ }</div> 
                
                {/* <img className='card_img' src={blog.} alt="" /> */}
            </div>

            <div className="detail-box">
                <p>Title: {/*blog.title*/}</p>
            <div className="stylehere">TEXT:{/*blog.text*/}</div>
           
            
            </div>
            < div className="card-bottom">
               <div className="display-profile-card">
            <img src={Profile}></img>
               </div>
               <div className="tags-cards"></div>
            </div>
            
        </div>

    )
}
export default Card