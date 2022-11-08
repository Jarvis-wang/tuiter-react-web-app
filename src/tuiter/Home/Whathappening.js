import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../tuits/tuits-reducer";
import {AiOutlineFileImage, AiOutlineFileGif, AiOutlineBarChart, AiOutlineSmile, AiOutlineEnvironment} from "react-icons/ai"
import image from '../who-to-follow-list/image/bob.jpg'
const WhatHappening = () => {
    let [whatHappening, setWhatHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatHappening,
            title: whatHappening
        }
        dispatch(createTuit(newTuit))
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src={image}  width={45} className="float-start rounded-5"/>
            </div>
            <div className="col-10">
       <textarea value={whatHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={() => {
                                tuitClickHandler() }
                            }>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"><AiOutlineFileImage /></i>
                        <i className="bi bi-filetype-gif me-3"><AiOutlineFileGif /></i>
                        <i className="bi bi-bar-chart me-3"><AiOutlineBarChart /></i>
                        <i className="bi bi-emoji-smile me-3"><AiOutlineSmile /></i>
                        <i className="bi bi-geo-alt"><AiOutlineEnvironment /></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatHappening;