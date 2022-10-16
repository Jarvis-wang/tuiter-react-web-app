import PostSummaryList from "../PostSummaryList/PostSummaryList.js"
const ExporeComponent = () => {
    return (`
        
            <div >
                <div class="input-group mb-3 ">
                    <span class="input-group-text rounded-start  wd-input-mg  border-0 ml-n5" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>

                    <input type="text" class="form-control py-2 round wd-input-mg1 mr-1 pr-5 " placeholder="  Search Tuiter" aria-label="Username" aria-describedby="basic-addon1">
                    <a class="fa fa-cog fa-1x  wd-hl-noul wd-margin-lr1"  style="color: lightgray" href="explore-settings.html">  </a>
                </div>

            </div>
            
             <div class="wd-nva-mg">
                        <ul class="nav mb-2 nav-tabs" style="color: lightgray" >
                            <li class="nav-item  wd-nav-tabs">
                                <a class="nav-link active bg-primary"  style="border: none"  href="for-you.html">For you</a>
                            </li>
                            <li>
                                <a class="nav-link override-from" href="trending.html">Trending</a>
                            </li>
                            <li>
                                <a class="nav-link override-from" href="news.html ">COVID-19</a>
                            </li>
                            <li>
                                <a class="nav-link override-from" href="sports.html">News</a>
                            </li>
                            <li>
                                <a class="nav-link override-from" href="entertainment.html">Sport</a>
                            </li>
                        </ul>
             </div>
             
             
              <div>
                    <img class="img-fluid m" alt="Norway" style="width:100%;" src="../explore/sbsp.png">
                    <div class="container">

                        <div class="text-block">
                            <h4>Spaceship</h4>
                            <p style="font-size: 12px">What a beautiful future</p>
                        </div>
                    </div>
                </div>
                
              ${PostSummaryList()}

`); }

export default ExporeComponent;