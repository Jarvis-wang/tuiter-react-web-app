import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {AiOutlineEnvironment, AiOutlineBulb, AiOutlineCalendar} from "react-icons/ai"
import ProfileEditorComponent from './profileEditComponent'
import { useDispatch } from "react-redux";
import { changeProfile } from '../reducers/profile-reducer'

const ProfileComponent = ()=>{
    const profile = useSelector(state=>state.profile)
    const [edit, setEdit] = useState(true)
    const dispatch = useDispatch()
    
    const EditComponent = ()=>{
        const [state, setState] = useState({})

        const saveProfile = ()=>{
            let newProfile = {
                ...profile,
                ...state
            }
            console.log('state',state, 'newProfile', newProfile);
            dispatch(changeProfile(newProfile))
            setEdit(!edit)
        }

        return (
            <>
                <p>First Name:</p>
                <input onChange={(e)=>{setState({...state, firstName: e.target.value})}}/>
                <p>Last Name:</p>
                <input  onChange={(e)=>{setState({...state, lastName: e.target.value})}}/>
                <p>handle:</p>
                <input onChange={(e)=>{setState({...state, handle: e.target.value})}} /><br></br>
                <button onClick={()=>{saveProfile()}} style={{'width': '150px', 'height':'30px', 'marginTop':'20px','backgroundColor':'rgb(91,129,218)','color':'white', 'borderRadius':'15px', 'border':'0px'}}>Save</button>
            </>
        )
    }
        return (
            <div className="list-group">
                
                <div className="list-group-item">
                    <img src="../image/nasa.jpg" alt="" />
                    {edit?<><h4>{profile.firstName} {profile.lastName}</h4>
                    <p style={{'fontSize':'smaller', 'color':'gray'}}>{profile.handle}</p>
                    <br />
                    <p style={{'color':'gray'}}>{profile.bio}</p>
                    <p style={{'color': 'gray'}}><AiOutlineEnvironment /> {profile.location}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineBulb />Born: {profile.dateOfBirth}&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineCalendar />Join:{profile.dateJoined}</p>
                    <p style={{'color': 'gray'}}><span style={{'color': 'black'}}>{profile.followingCount}</span> follows&nbsp;&nbsp;<span style={{'color': 'black'}}>{profile.followersCount}</span> followers</p>
                    <button onClick={()=>setEdit(!edit)} style={{'width': '150px', 'height':'50px', 'backgroundColor':'rgb(91,129,218)','color':'white', 'borderRadius':'15px', 'border':'0px'}}>Edit Profile</button></>:<EditComponent/>}
                </div>
            
            </div>
        )
    
    
}

const ProfileContent = ()=>{
    const profile = useSelector(state=>state.profile)
    return (<>
        <h4>{profile.firstName} {profile.lastName}</h4>
                    <p style={{'fontSize':'smaller', 'color':'gray'}}>{profile.handle}</p>
                    <br />
                    <p style={{'color':'gray'}}>{profile.bio}</p>
                    <p style={{'color': 'gray'}}><AiOutlineEnvironment /> {profile.location}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineBulb />Born: {profile.dateOfBirth}&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineCalendar />Join:{profile.dateJoined}</p>
                    <p style={{'color': 'gray'}}><span style={{'color': 'black'}}>{profile.followingCount}</span> follows&nbsp;&nbsp;<span style={{'color': 'black'}}>{profile.followersCount}</span> followers</p>
                    <button style={{'width': '150px', 'height':'50px', 'backgroundColor':'rgb(91,129,218)','color':'white', 'borderRadius':'15px', 'border':'0px'}}>Edit Profile</button>
    </>)
}

export default ProfileComponent