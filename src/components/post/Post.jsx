import React from "react";
import "./post.css";
export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/4609194/pexels-photo-4609194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor harum aliquid nisi blanditiis.
                </span>
                <hr />
                <span className="postDate">1 hour age</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                veritatis eum reprehenderit unde, deleniti, fuga sint eos
                cupiditate vel quo magnam illo tempora rem qui quam enim.
                Adipisci, alias accusamus?
            </p>
        </div>
    );
}
