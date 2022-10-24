import React from "react";
import{BsFillPatchCheckFill} from "react-icons/bs";
import{AiOutlineHeart} from "react-icons/ai";
import{FaRegCommentDots} from "react-icons/fa";
import {MdOutlineTransform} from "react-icons/md";
import {BiUpload} from "react-icons/bi"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
const PostItem = (
    {
        post = {
            "icon":"bob.jpg",
            "topic": "@Space",
            "userName": "SpaceX",
            "time": "2h",
            "comn":"Amazing whosb about mission!",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "Tesla.jpg",
            "texts":"After a moment's thought, the text found in the picture should appear on the right-hand side of the screen. If you don't want to use all of it, you can make a more precise selection either in the block of text on the right or on the image itself." ,
            "n1":12,
            "n2":34,
            "n3":42
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
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
                                <a><FaRegCommentDots/>
                                    {post.n1}  </a>
                            </li>
                            <li>
                                <a> <MdOutlineTransform/> {post.n2}
                                </a>
                            </li>
                            <li className="wd-selected">
                                <a> <AiOutlineHeart/> {post.n3}</a>
                            </li>
                            <li>
                                <a><BiUpload/> </a>
                            </li>

                        </ul>

                </div>
            </div>
        </li>
    );
};
export default PostItem;