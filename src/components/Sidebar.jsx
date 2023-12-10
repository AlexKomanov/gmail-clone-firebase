import './Sidebar.css'
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {SidebarOption} from "./SidebarOption.jsx";

export function Sidebar(props) {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>}
                    className="sidebar_compose">
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={15}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={20}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={60}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={80}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={10}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={15}/>
        </div>
    );
}
