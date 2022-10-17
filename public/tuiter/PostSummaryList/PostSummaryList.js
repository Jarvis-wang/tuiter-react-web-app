import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
const PostSummaryList = () => {
    return (`
           <div class="list-group" > 
            <div class=" list-group-item">
                     ${
                    post.map(post => {
                                return( PostSummaryItem(post));
                            }).join('')
                        }
            </div>
            </div>
   `); }

export default PostSummaryList;