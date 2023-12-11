import './EmailList.css'
import {Checkbox, IconButton} from "@mui/material";
import {ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings} from "@mui/icons-material";

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
                <div className="emailList_sections">

                </div>
            </div>
        </div>
    );
}

