import React from "react";
import{BsFillPatchCheckFill} from "react-icons/bs";
import{AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import{FaRegCommentDots} from "react-icons/fa";
import {MdOutlineTransform} from "react-icons/md";
import {BiUpload} from "react-icons/bi"
import { useDispatch } from "react-redux";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import {handleLiked,deleteTuit} from './tuits-reducer'
// import tuitsReducer from './tuits-reducer'
// import { configureStore }
//     from '@reduxjs/toolkit';
// const store = configureStore(
//     {reducer: {tuits: tuitsReducer}});

const TuitItem = (
    {
        post = {
            "_id": 333,
            "icon": "bob.jpg",
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "Tesla.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();

    const likeClickHandler = ()=>{
        console.log('click');
        dispatch(handleLiked(post._id))
    }

    const handleClose = ()=>{
        dispatch(deleteTuit(post._id))
    }
        return(
            <li className="list-group-item">
                <div className="row">
                <div onClick={handleClose} style={{'position': 'absolute', 'right': '10px', 'top': '10px', 'width': '20px','cursor':'pointer'}}>x</div>
                    <div className="col-10">
                        <img width={45} className="float-start rounded-5" src={require(`../who-to-follow-list/image/${post.icon}`)}/>
                        <div> <span className="fw-bolder">{post.topic}</span> <BsFillPatchCheckFill/> {post.userName} · {post.time}  </div>
                        <div>{post.comn}</div>
                    </div>
                    <div className="col-6 wd-m-r" >
                        <MDBCard >
                            <MDBCardImage src={require(`../who-to-follow-list/image/${post.image}`)}position='top' alt='...'/>
                            <MDBCardBody>
                                <MDBCardTitle>
                                    {post.title}
                                </MDBCardTitle>
                                <MDBCardText>
                                    {post.texts}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-6 wd-m-r">

                        <ul className="wd-icon-layout">
                            <li>
                                <a href="#"><FaRegCommentDots/>
                                    {post.replies}  </a>
                            </li>
                            <li>
                                <a href="#"> <MdOutlineTransform/> {post.retuits}
                                </a>
                            </li>
                            <li className="wd-selected" onClick={likeClickHandler}>
                                <a> {post.liked?<AiFillHeart />:<AiOutlineHeart />} {post.likes}</a>
                            </li>
                            <li>
                                <a href="#"><BiUpload/> </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </li>
        );
};
export default TuitItem;