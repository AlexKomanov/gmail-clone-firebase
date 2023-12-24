import './SendMail.css'
import {Close} from "@mui/icons-material";
import {Button} from "@mui/material";

export function SendMail() {
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <Close className="sendMail_close"/>
            </div>
            <form>
                <input type="text" placeholder="To "/>
                <input type="text" placeholder="Subject "/>
                <input type="text" className="sendMail_message"/>
                <div className="sendMail_options">
                    <Button className="sendMail_send"
                            variant="contained" color="primary"
                            type="submit">
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

