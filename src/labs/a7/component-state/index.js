import {useState} from "react"
import Counter from "./counter"
const ComponentState = ()=>{

    const [count,setCount] =useState(123);
    const [email,setEmail] = useState("alice@wonderland.com")
    const [bio,setBio] = useState("lego enthsiast")
    const [showBio,setShowBio] = useState(true)
    const [editingEmail,setEditingEmail] = useState(false)
    const [profile,setProfile] = useState({firstName:"Alice",lastName: "Wonderland",username:"alice123",password:"p@ssw0rd"})
    const changeEmail = (event) =>{
        const newEmail = event.target.value
        setEmail(newEmail)
        console.log(newEmail)
    }
    const up = () =>{
        setCount(count + 1);
        console.log(count);
    }
    const down = () =>{
        setCount(count - 1);
        console.log(count);
    }
    const setFirstName = (event) =>{
        const newFirstname = event.target.value;
        const newProfile = {
            firstName: newFirstname,
            lastName: profile.lastName,
            username: profile.username,
            password:profile.password
        }
        setProfile(newProfile)
    }
    const  setLastName = (event) =>{
        const newLastname = event.target.value;
        const newProfile = {
            ...profile,
            lastName: newLastname
        };
        setProfile(newProfile)
    }
    return(
        <>
            <h3>Component State</h3>
            <h4>Objects</h4>
            First Name: <input onChange={setFirstName}
                               value = {profile.firstName}/><br/>
            Last Name: <input onChange={setLastName}
                            value = {profile.lastName}/><br/>
            Username: <input onChange={(event) => setProfile({...profile,username: event.target.value})}
                            value = {profile.username}/><br/>
            Password: <input value = {profile.password} type="password"/>
            <pre>
                {JSON.stringify(profile,null,2)}
            </pre>
            <hr/>
            <input type = "checkbox"  onChange={event => setShowBio(event.target.checked)} checked = {showBio}/>
            {
                showBio &&
            <>
                <h4>Bio</h4>

                <textarea value={bio} onChange={(event) => setBio(event.target.value)}> </textarea>
            </>
            }
            <h4>Email</h4>
            <input type="checkbox" onChange={event => setEditingEmail(event.target.checked)} checked={editingEmail}/>
            {
                editingEmail &&
                <input value={email} onChange={changeEmail}/>
            }
            {   !editingEmail &&
                <span>{email}</span>
            }

            <Counter count = {count} up = {up} down={down} email = {email}/>
            <Counter count = {count} up = {up} down={down} email = {email}/>


            <h4>Counter</h4>
            count = {count}
            <button onClick={up}>Up</button>
            <button onClick={down}>Dowm</button>
            <h1>Email = {email}</h1>
        </>
    )

}
export default ComponentState;