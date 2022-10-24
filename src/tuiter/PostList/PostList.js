
import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.json"
const PostList = () => {
    return (`
           <div className="list-group" > 
            <div className=" list-group-item">
                     ${
        posts.map(posts => {
            return( PostItem(posts));
        }).join('')
    }
            </div>
            </div>
   `); }

export default PostList;