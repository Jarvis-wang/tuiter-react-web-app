import React from "react";
const PostItem = (

    posts = {
        "icon": "bob.jpg",
        "userName": "Bob",
        "ac":"@bob",
        "time": "·2h",
        "com1":"Amazing whosb about",
        "hyl":"@12345",
        "com2":"mission!",
        "image":"prof.jpg",
        "title": "CNN's cuomo conundrum: A star anchor with a brother in trouble",
        "tweets": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        "n1":22,
        "n2":23,
        "n3":60
})=>{

    <li className="list-group-item">
        <div className="row">
            <div className="col-1">
                <img src={require(`../who-to-follow-list/image${posts.image})`}/>
            </div>
            <div className="col-9">
                <div>{posts.userName} . {posts.time}</div>
                <div className="fw-bolder">{posts.topic}</div>
                <div>{posts.title}</div>
            </div>
            <div className="col-2">
                <img width={70} className="float-end rounded-3" src={require(`../who-to-follow-list/image/${posts.image}`)}/>
            </div>
        </div>
    </li>
    // language=HTML
    return(
        <div className="list-group" >
            <div className=" list-group-item">
                <div>
                    <div>
                          <img src={require(`../who-to-follow-list/image/${posts.image}`)}
                               className=" wd-ico-size wd-ico-m" />
                    </div>
                     <div className="wd-m-l" >
                        ${posts.userName} <span className="fa-solid fa-circle-check" ></span>
                        ${posts.ac} ${posts.time}   <br/>
                         ${posts.com1} <a href="/">${posts.hl}</a> ${posts.com2}
                     </div>
                    <i className="fa-solid fa-ellipsis" style="float: right; margin: 12px"></i>
               </div>   
                
            <div class="float-done"></div >
            
            
            <div>
              
                <div class="card wd-m-r" style="width: fit-content; border-radius: 3%">
                   <img src={require(`../who-to-follow-list/image${posts.image}`)}
                        class="card-img-top"  style="border-top-left-radius: 3%;border-top-right-radius: 3%" alt="..."/>
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

    )
}

export default PostItem

