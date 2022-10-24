import Nav from "../nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationSidebar
    from "./navigation-sidebar";

import Home from "./Home";
import {Routes,Route} from "react-router-dom";
import WhoToFollowListItem
    from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list/index";
import  PostSummaryItem from "./post-summary-list/index";
import HomeComponent from "./Home/HomeComponent";

import ExploreComponent from "./explore";
function Tuiter() {
    return (
        <div className="row mt-2">
            <Nav/>

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>


            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route index element = {<HomeComponent/>}/>
                    <Route path = "explore" element = {<ExploreComponent/>}/>
                </Routes>


            </div >
            <div className ="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">

                <Routes>

                    <Route  index element = {''} />
                    <Route path = "explore" element = {<WhoToFollowList/>}/>
                </Routes>

            </div>





        </div>
    )
}

export default Tuiter