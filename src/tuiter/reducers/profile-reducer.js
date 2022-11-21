import { createSlice } from "@reduxjs/toolkit";

const initData = {
    firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi', profilePicture: 'jose.png', bannerPicture: '../image/nasa.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA', dateOfBirth: '7/7/1968', dateJoined: '4/2009',
    followingCount: 340, followersCount: 223 
}



const profileSlice = createSlice({
    name: 'tuits',
    initialState: initData,
    reducers: {
        changeProfile(state, action){
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.handle = action.payload.handle
            console.log('change', state);
        }
    }
});

export const {changeProfile} = profileSlice.actions;
export default profileSlice.reducer;