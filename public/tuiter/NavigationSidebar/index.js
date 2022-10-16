const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-text ">T</i>
       </a>
     <a class="list-group-item" href="../home.html"> 
        <i class="fa fa-home"></i>
        Home</a>
     <a class="list-group-item bg-primary"  href="index1.html"> 
        <i class="fa fa-hashtag"></i>
        Explore</a>
     <a class="list-group-item" href="Notifications.html"> 
        <i class="fa fa-bell"></i>
        Home</a>
     <a class="list-group-item" href="Messages.html"> 
        <i class="fa fa-envelope"></i>
        Messages</a>
        
     <a class="list-group-item" href="../bookmarks/index.html"> 
        <i class="fa fa-bookmark "></i>
        Bookmarks</a>
     <a class="list-group-item" href="lists.html"> 
        <i class="fa fa-list"></i>
        Lists</a>
        
     <a class="list-group-item" href="../bookmarks/index.html"> 
        <i class="fa fa-bookmark "></i>
        Bookmarks</a>
     <a class="list-group-item" href="../profile.html""> 
        <i class="fa fa-user"></i>
        Profile</a>
        
      <a class="list-group-item" href="../profile.html""> 
        <i class="fa-solid fa-circle fa-xs" > 
         More
        </i>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        tuit</a>
   </div>
 `);
}
export default NavigationSidebar;

