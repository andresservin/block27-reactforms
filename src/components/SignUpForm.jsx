import React, {useState} from'react';
import 'src/App.jsx';

export default function SignUpForm ({setApiResponse}){
    //return <h2>Sign Up!</h2>

const[username, setUsername]= useState("");
const[password, setPassword]= useState("");
const[error, setError]= useState(null);

<input value ={username} onChange={(e) => setUsername(e.target.value)}/>;
<input value = {password} onChange={(e) => setPassword(e.target.value)}/>;

async function handleSubmit (event){
    event.preventDefault();

try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
    //const: result = await response.json();
    //console.log(result);    
    method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({username, password}),
    });
    if (!response.ok){
        throw new Error("sign up failed. PLease try again.");
    }
    const result = await response.json();

    setApiResponse(result);

    if (result.token) {
    setToken(result.token);
    }

    } catch(error) {
        setError(error.message);
    }
}
//const handleUsernameChange = (event) => {
    //setUsername(event.target.vaule);
//};
//callbac kfunction for password
//const handlePasswordChange = (event) =>{
    //setPassword(event.target.value);
//};

//const handleSubmit = async (event) => {
   // event.preventDefault();
   //console.log("Form submitted");
//};

return(
<div>
        <h2>Sign Up!</h2>

        {error && <p>{error}</p>}

    <form onSubmit= {handleSubmit}>
        <label>
            Username: 
            <input type="text"
            value= {username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <br />
        <label>
            Password: 
            <input type="password"
            value= {password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <br/>
        <form onSubmit= {handleSubmit}></form>
        <button type= "submit"> Submit</button>
    </form>
</div>
    );
};  