import React from "react";
import "./singlepost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    alt=""
                    src="https://images.pexels.com/photos/2161685/pexels-photo-2161685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                />
                <h1 className="singlePostTItle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <FontAwesomeIcon
                            className="singlePostIcon"
                            icon={fas.faEdit}
                        />
                        <FontAwesomeIcon
                            className="singlePostIcon"
                            icon={fas.faTrashAlt}
                        />
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Molly</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint repellendus libero cumque ipsum deleniti accusantium?
                    Labore facere culpa rem ipsum beatae ut, ducimus voluptas
                    iste consequuntur eos eligendi dolorem ex recusandae minima
                    id. Animi asperiores ullam quos magni aperiam fugit eius
                    autem, corrupti nostrum, optio, ducimus natus! Maxime,
                    beatae exercitationem.
                </p>
            </div>
        </div>
    );
}
