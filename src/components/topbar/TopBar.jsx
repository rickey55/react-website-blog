import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <FontAwesomeIcon
                    className="topIcon"
                    icon={fab.faFacebookSquare}
                />
                <FontAwesomeIcon
                    className="topIcon"
                    icon={fab.faInstagramSquare}
                />
                <FontAwesomeIcon className="topIcon" icon={fab.faMedium} />
                <FontAwesomeIcon
                    className="topIcon"
                    icon={fas.faMapMarkerAlt}
                />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg"
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <FontAwesomeIcon
                    className="topSearchIcon"
                    icon={fas.faSearch}
                />
            </div>
        </div>
    );
}
