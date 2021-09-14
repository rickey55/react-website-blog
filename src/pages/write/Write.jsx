import React from "react";
import "./write.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                alt=""
                src="https://images.pexels.com/photos/7486545/pexels-photo-7486545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon
                            className="writeIcon"
                            icon={fas.faPlus}
                        />
                        {/* <i class="fas fa-plus-square"></i> */}
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                    />
                    <input
                        type="text"
                        id="Title"
                        className="writeInput"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="tell your story..."
                        type="text"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}
