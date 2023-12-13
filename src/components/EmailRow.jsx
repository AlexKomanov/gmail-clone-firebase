import {Checkbox, IconButton} from "@mui/material";
import {LabelImportantOutlined, StarBorderOutlined} from "@mui/icons-material";
import "./EmailRow.css"

export function EmailRow({id, title, subject, description, time}) {
    return (
        <div className="emailRow">
            <div className="emailRow_options">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>
            <h3 className="emailRow_title">
                <h3>{title}</h3>
            </h3>
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
