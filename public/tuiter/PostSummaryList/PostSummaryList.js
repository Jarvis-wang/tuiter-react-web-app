import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
const PostSummaryList = () => {
    return (`
        
         ${
        post.map(post => {
                    return(PostSummaryItem(post));
                }).join('')
            }
   `); }

export default PostSummaryList;