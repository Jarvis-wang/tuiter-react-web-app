const WhoToFollowListItem = (who)=>{
    return(`
        <div>
            <div class="wd-rot-1">
                 <img src=${who.avatarIcon} class="wd-img-size"  }/>
                 
            </div>
            <div class="wd-rot-2">
              
             ${who.userName} <span class="fa-solid fa-circle-check" ></span>
             <p class="wd-user" style="color: gray">@ ${who.handle}</p>
             
            </div>
            <div class="wd-rot-3">
                <button class="btn btn-primary rounded-pill " >follow</button>
            </div>
            <div class="float-done"></div>
         </div>
            
                     
         
    `
    );

}
export default WhoToFollowListItem