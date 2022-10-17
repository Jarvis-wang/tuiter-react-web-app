import PostItem from "./PostItem.js";
import posts from "./posts.js"
const PostList = () => {
    return (`
           <div class="list-group" > 
            <div class=" list-group-item">
                     ${
        posts.map(posts => {
            return( PostItem(posts));
        }).join('')
    }
            </div>
            </div>
   `); }

export default PostList;