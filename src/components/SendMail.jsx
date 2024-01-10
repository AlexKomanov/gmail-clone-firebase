import './SendMail.css'
import {Close} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {closeSendMessage} from "../features/mailSlice.js";

export function SendMail() {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <Close className="sendMail_close" onClick={() => dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" type="email"
                       placeholder="To" {...register("to", {required: true})}/>
                {errors?.to?.type === "required" && <p className="sendMail_error">This field is required!</p>}
                <input name="subject" type="text"
                       placeholder="Subject " {...register("subject", {required: true})}/>
                {errors?.subject?.type === "required" && <p className="sendMail_error">This field is required!</p>}
                <input name="message" type="text"
                       className="sendMail_message" {...register("message", {required: true})}/>
                {errors?.message && <p className="sendMail_error">This field is required!</p>}
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

