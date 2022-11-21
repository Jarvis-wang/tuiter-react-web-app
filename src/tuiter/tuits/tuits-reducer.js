import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "Bob",
    "handle": "@Bob",
    "image": "../who-to-follow-list/image/bob.jpg",
};

const templateTuit = {
    "_id": 333,
    "icon": "bob.jpg",
    "topic": "Space",
    "userName": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "image": "Tesla.jpg",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        async deleteTuit(state, action) {
            try{
                await fetch(`http://127.0.0.1:4000/api/tuit/list/${action.payload}`, {
                    method: 'DELETE'
                })
                const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
                state.splice(index, 1);
            }catch(e){
                console.log(e);
            }

        },
         async createTuit(state, action) {
            try{
                await fetch(`http://127.0.0.1:4000/api/tuit/create`, {
                    method: 'POST',
                    body: {...templateTuit,
                        ...action.payload,
                        _id: (new Date()).getTime(),
                    }
                })
                state.unshift({...templateTuit,
                    ...action.payload,
                    _id: (new Date()).getTime(),
                })
            }catch(e){
                console.log(e);
            }
            
        },
        async handleLiked(state, action){
            try{
                await fetch(`http://127.0.0.1/api/tuit/liked`, {
                    method: 'PUT',
                    body: {id: action.payload}
                })
                state.map((item, index)=>{
                    if(item._id === action.payload){
                        let temp = item
                        temp.liked = !temp.liked
                        temp.likes = temp.liked?temp.likes + 1: temp.likes - 1
                        state[index] = temp
                    }
                })
            }catch(e){
                console.log(e);
            }
        }
    }
});

export const {createTuit,deleteTuit,handleLiked} = tuitsSlice.actions;
export default tuitsSlice.reducer;