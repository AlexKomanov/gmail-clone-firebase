import './Mail.css'
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {
    ArrowBack,
    CheckCircle,
    Delete,
    Email,
    Error, ExitToApp,
    LabelImportant, MoreVert,
    MoveToInbox, Print, UnfoldMore,
    WatchLater
} from "@mui/icons-material";

export function Mail() {

    const navigate = useNavigate();
    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                    <IconButton onClick={() => navigate("/gmail-clone-firebase/")}>
                        <ArrowBack/>
                    </IconButton>
                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>
                    <IconButton>
                        <Error/>
                    </IconButton>
                    <IconButton>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <Email/>
                    </IconButton>
                    <IconButton>
                        <WatchLater/>
                    </IconButton>
                    <IconButton>
                        <CheckCircle/>
                    </IconButton>
                    <IconButton>
                        <LabelImportant/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                <div className="mail_toolsRight">
                    <IconButton>
                        <UnfoldMore/>
                    </IconButton>
                    <IconButton>
                        <Print/>
                    </IconButton>
                    <IconButton>
                        <ExitToApp/>
                    </IconButton>

                </div>
            </div>
            <h1>Mail Component</h1>
        </div>
    );
}

