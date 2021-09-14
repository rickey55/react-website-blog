import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDelectTitle">Delect Account </span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <FontAwesomeIcon
                                className="settingsPPIcon"
                                icon={fas.faUser}
                            />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="type" />

                    <label>Email</label>
                    <input type="email" placeholder="gmail.com" />

                    <label>Password</label>
                    <input type="password" placeholder="type" />
                    <button className="settingsSubmit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
