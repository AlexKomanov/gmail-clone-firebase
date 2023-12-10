import './Sidebar.css'
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export function Sidebar(props) {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>}
                    className="sidebar_compose">
                Compose
            </Button>
        </div>
    );
}

