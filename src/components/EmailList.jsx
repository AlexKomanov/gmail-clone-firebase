import './EmailList.css'
import {Checkbox, IconButton} from "@mui/material";
import {ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings} from "@mui/icons-material";
import {EmailRow} from "./EmailRow.jsx";

export function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox/>
                    <IconButton><ArrowDropDown/></IconButton>
                    <IconButton><Redo/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton><ChevronLeft/></IconButton>
                    <IconButton><ChevronRight/></IconButton>
                    <IconButton><KeyboardHide/></IconButton>
                    <IconButton><Settings/></IconButton>
                </div>
            </div>
            {/*<div className="emailList_sections">*/}

            {/*</div>*/}
            <div className="emailList_list">
                <EmailRow title="Demo Title" subject="Hello from Israel"
                          description="Demo Description" time="10:59PM"/>
                <EmailRow title="Title" subject="Hello There"
                          description="Description" time="11:05AM"/>
            </div>
        </div>
    );
}

