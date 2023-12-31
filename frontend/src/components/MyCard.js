import { Link } from "react-router-dom"
import './card.css'




const MyCard = ({blog, deleteHandler}) => {
    
    

    return (
        <div className='card_item'>
            <div className="card_top">
                 <div className="card-img-top"> <img src={blog.image} alt="BlogImage" height="100" width="auto" ></img>{/*blog.image*/}</div>

                 <div className="subjectGroup"><p>{blog.group}</p>{/**/}</div> 
                
                
            </div>

            <div className="detail-box">
                <h1>{blog.title}</h1>
            <div className="cardText">{blog.text}</div>
           
            
            </div>
            < div className="card-bottom">
                

               <div className="display-profile-card">
            <img src={blog.avatar}></img>

            <div className="useInfo">{blog.userName}</div>
            </div>
              


               <div className="ED">
               <Link className="ED2"

                to={`/EditMyBlogs/${blog._id}`}

            > edit

            </Link> 
            <button onClick={() => deleteHandler(blog)}>Delete</button>
            </div>
            </div>
            
        </div>

    )
}
export default MyCard