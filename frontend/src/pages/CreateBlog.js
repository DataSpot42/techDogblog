import { useState, useEffect } from "react"
import { addBlog } from "../api/addBlog"
import { useNavigate } from "react-router-dom"
import { UserAuth } from '../components/AuthContext';
import Tags from "../components/Tags";
import './createBlog.css'


import "../components/addblog.css"

const CreateBlog = () => {
    const { logOut, user } = UserAuth();
    const [ trigger, setTrigger] = useState(0)
    const [inputValue, setInputValue] = useState('');
    const [saveTags, setSaveTags] = useState('');
    const [formData, setFormData] = useState({title: "",text: "",group: "", image: "https://i.ibb.co/McMry5w/techdog.png" });
    const [selectedOption, setSelectedOption] = useState("Networking");
    
    useEffect(() => {
        const tagSave = JSON.parse(localStorage.getItem('tagSave'));
        if (tagSave) {
         setSaveTags(tagSave);
        }
      }, [formData,trigger]);
      
      
    
   

    
    

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
        
	};

    const navigate = useNavigate();

   

        const handleChange = (event) => {
            const { name, value } = event.target;
            
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
          };

        const handleSubmit =  async (e) => {
            
            e.preventDefault();
            
        };   
        const handleSave = async () => {
            
            setTrigger(1)
            
            let timestamp = Date.now();
            let blogObj = { 
                userID: user.uid,
                blogID: 456,
                image: formData.image,
                tags: saveTags,
                likes: 0,
                title: formData.title,
                text: formData.text,
                timeStamp: timestamp,
                group: selectedOption,
                comments: formData.comments
            }
            let response = await addBlog(blogObj)  
            return (<h2>Saved</h2>)
        } 


        return (
            <div className = "blog">
            <h1> Create a new blog post </h1>
            <form className="formsCreateBlog" onSubmit={handleSubmit}>
                <div className = "container"> 
                <div className = "title">
            <label className="titleInput" htmlFor="title">Title:</label>
            <p></p>
            <input className = "titlebox" type="title" id="title" name="title" value={formData.title} onChange={handleChange}/>
            <p></p>
            </div>
            
            <div className = "select">
            <label>
			Select an option:&nbsp;&nbsp;
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="Networking">Networking</option>
				<option  value="Soft Dev">Soft Dev</option>
				<option  value="Cloud Engineering">Cloud Engineering</option>
                <option  value="IT Support">IT Support</option>
                <option  value="Web Design">Web Design</option>
                <option  value="Consumer Tech">Consumer Tech</option>
			</select>
		</label>		
        </div>
        </div>      
            <label htmlFor="text">Text:</label>
            <p></p>
            <textarea className = "textbox" id="text" name="text" value={formData.text} onChange={handleChange}/>
            <p></p>
            <div className="imageLink">
            <label htmlFor="image">Add Image URL:</label>
            <p></p>

            <input id="image" className="image" type="title" name="image" value={formData.image} onChange={handleChange}/>
            </div>
            <Tags onChange={(event) => setInputValue(event.target.value)}/>
            
          </form>
          <button className = "post" onClick={()=>handleSave()}>Post</button>
          </div>

        )
    }
    export default CreateBlog