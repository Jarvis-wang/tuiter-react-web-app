import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import HomeScreen from "./HomeScreen.js"
function exploreComponent() {
    $('#wd-explore').append(`
       <h2>Explore</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
  
        ${NavigationSidebar("home")}
        

    
    
   </div>
   <div class="col-10 col-lg-10 col-xl-10 bg-black text-white">
         ${HomeScreen()}
    
   </div>

  </div>
   `);
}
$(exploreComponent);
