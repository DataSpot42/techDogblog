const API_URL = `http://localhost:4000`

export const addUser = async (user) => {
    /* console.log(punk.items[0]) */
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { userID: user.userID,
        userName: user.userName,
        realName: user.realName,
        avatar: user.avatar,
        email: user.email,
        gender: user.gender,
        aboutme: user.aboutme
        }
    console.log(obj)
    const response = await fetch(`${API_URL}/users/user`,{
        // method type?
        method: 'POST',
        // sending body, stringify data
        body: JSON.stringify(obj),
        // content type?
        headers: {
            'Content-Type' : 'application/json'

        }
    })
    const json = await response.json()
    return json
}