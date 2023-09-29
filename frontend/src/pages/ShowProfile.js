import { useEffect, useState, React, forceUpdate } from "react";
import { UserAuth } from '../components/AuthContext';
import { readBlogs } from "../api/readBlogs";
import DataMerge from "../components/dataMerge";
import UsersCard from '../components/UsersCard'
import { HiSearch } from 'react-icons/hi'
import './showAllBlogs.css'
import Cards from '../components/Card.js'
import { readUsers } from "../api/readUsers";
import SearchChosenGroups from "../components/searchChosenGroups";
import { Comments } from './Comments'
import { Link } from "react-router-dom"
import SearchBlogs from '../components/searchBlogs.js'


const ShowProfile = () => {
    /* let dataBlogs= [] */
    let aUserName = ""
    let aUserAvatar = ""
    const { logOut, user } = UserAuth();
    console.log("Welcome to the Blogs Page")
    const [users, setUsers] = useState();
    const [selectedOption, setSelectedOption] = useState("Select Group");

    console.log(user)
    const [searchTerm, setSearchTerm] = useState("");
    
    const [searchResults, setSearchResults] = useState([]);

    const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
        
	};

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('searching....')
        console.log(searchTerm)
        let searchResult = []
        searchResult = await SearchBlogs(blogs, searchTerm)
        console.log(searchResult)
        setBlogs(searchResult)
    }
    const handleGroupFilter = async (e) => {
        e.preventDefault()

        console.log('searching....')
        console.log(selectedOption)
        let searchGroupResult = []
        searchGroupResult = await SearchChosenGroups(blogs, selectedOption)
        console.log(searchGroupResult)
        setBlogs(searchGroupResult)
    }
    const handleClearFilter = async () => {
        let response1 = await readUsers()  //read users from database
        let dataUsers = response1.user
        console.log(response1)
        let response2 = await readBlogs() // read blogs from database
        let dataBlogs = response2.blog
        console.log(dataUsers)
        let dataMerge = {}
        dataMerge = await DataMerge(dataBlogs, dataUsers)
        console.log(dataMerge)
        setBlogs(dataBlogs)
        setUsers(dataUsers)
    }



    const handleChangeSearch = () => {

        /* setBlogs(searchResult)*/


    };

    /* console.log(searchResults) */


    const [blogs, setBlogs] = useState([])
    let data = 99
    useEffect(() => {
        const fetchUsers = async () => {
            let response1 = await readUsers()  //read users from database
            let dataUsers = response1.user
            console.log(response1)
            let response2 = await readBlogs() // read blogs from database
            let dataBlogs = response2.blog
            console.log(dataUsers)
            let dataMerge = {}
            dataMerge = await DataMerge(dataBlogs, dataUsers)
            console.log(dataMerge)
            setBlogs(dataBlogs)
            setUsers(dataUsers)
        }
        fetchUsers()
    }, [])


    if (!blogs) return <h1>Loading</h1>
    return (

        <div className="cc">

          

            <div className="all-bg-grid">



                {users ? users.map((user, index) => <div className="blogsFlex">
                    <UsersCard user={user} />

                </div>) : <p>Loading...</p>}
                {/* Show all blogs */}
            </div >
            <div>

            </div>
        </div>

    )
}
export default ShowProfile;