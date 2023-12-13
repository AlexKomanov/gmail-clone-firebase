import './Header.css'
import MenuIcon from '@mui/icons-material/menu'
import {Avatar, IconButton} from "@mui/material";
import logo from '../../public/mail-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

export function Header(props) {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src={logo} alt="email logo"/>
            </div>
            <div className="header_middle">
                <SearchIcon />
                <input placeholder="Search for email" type="text"/>
                <ArrowDropDownIcon className="header_inputCaret"/>
            </div>

            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>

            </div>

        </div>
    );
}

