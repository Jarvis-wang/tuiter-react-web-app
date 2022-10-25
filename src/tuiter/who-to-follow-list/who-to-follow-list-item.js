import React from "react";
import who from "./who.json"

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpg' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img alt="" className="rounded-circle" height={48} src={require(`./image/${who.avatarIcon}`)}/>

                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
console.log(who.avatarIcon)
export default WhoToFollowListItem;