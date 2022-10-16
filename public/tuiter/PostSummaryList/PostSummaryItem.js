const PostSummaryItem = (post)=>{
    return(`
            <div class="wd-m-l wd-n">
                ${post.topic} <p class="wd-p"> ${post.userName} <span class="fa-solid fa-circle-check" ></span> <span class="wd-n">- ${post.time}</span><br>${post.title}<br><span class="wd-n"> ${post.tweets}</span></p>
            </div>
         <div class="wd-m-r">
            
                <img src=${post.image} class="wd-photo"  }/>
            </div>  
            
          <div class="float-done"></div>  
      
        
    `
    )
}

export default PostSummaryItem