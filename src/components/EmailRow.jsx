import {Checkbox, IconButton} from "@mui/material";
import {LabelImportantOutlined, StarBorderOutlined} from "@mui/icons-material";
import "./EmailRow.css"
import {useNavigate} from "react-router-dom";


export function EmailRow({id, title, subject, description, time}) {

    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/gmail-clone-firebase/mail")} className="emailRow">
            <div className="emailRow_options">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>
            <div className="emailRow_title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow_message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow_description"> - {description}</span>
                </h4>
            </div>
            <p className="emailRow_time">
                {time}
            </p>
        </div>
    );
}
