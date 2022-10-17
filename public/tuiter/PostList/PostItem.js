const PostItem = (posts)=>{
    // language=HTML
    return(`
        <div class="list-group" > 
            <div class=" list-group-item">
                <div>
                    <div  >
                          <img src=${posts.image} class=" wd-ico-size wd-ico-m" style="float:left;  "  align="left"}/>
                     </div>
                     <div class="wd-m-l" style="float:left;width:50%; ">
                        ${posts.userName} <span class="fa-solid fa-circle-check" ></span> <span style="color: gray">${posts.ac} ${posts.time} </span>  <br>  ${posts.com1} <a href="/">${posts.hl}</a> ${posts.com2}
                         
                    </div>
                    <i class="fa-solid fa-ellipsis" style="float: right; margin: 12px"></i>
               </div>   
                
            <div class="float-done"></div >
            
            
            <div>
              
                <div class="card wd-m-r" style="width: fit-content; border-radius: 3%">
                   <img src=${posts.image}
                        class="card-img-top"  style="border-top-left-radius: 3%;border-top-right-radius: 3%" alt="...">
                   <div class="card-body">
                       <h5 class="card-title wd-someDiv">${posts.title}</h5>
                       <p class="card-text wd-someDiv1">
                           ${posts.tweets} </p>
                     </div>
                    </div>

                 <div class="float-done"></div > 
            
                    </div>


                <div class="wd-m-r" >
                    <ul class="wd-icon-layout" >
                        <li >
                            <a ><i class="fa-solid fa-comment"> <span class="wd-space">${posts.n1} </span></i>  </a>
                        </li>
                        <li >
                            <a ><i class="fa-solid fa-retweet"><span class="wd-space"> ${posts.n2}</span></i> </a>
                        </li>
                        <li class="wd-selected">
                            <a ><i class="fa-solid fa-heart"> <span class="wd-space"> ${posts.n3}</span> </i></a>
                        </li>
                        <li>
                            <a ><i class="fa-solid fa-arrow-up-from-bracket"></i> </a>
                        </li>

                    </ul>
                    


                    </div>
                </div>
            </div>
            
                        
                         
                          
                           
                           
                              
                              
                                
                                 
                                 
                         
 
        
    `
    )
}

export default PostItem

