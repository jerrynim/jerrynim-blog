import React, { useCallback, useState } from "react";
import ExperiencePresenter from "./SendMailPresenter";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
interface Mail {
  nickname: string;
  message: string;
}

const SendMailContainer = () => {
  const [Thanks, setThanks] = useState("");
  const mail: Mail = useSelector((state: any) => state.sendmail);
  const dispatch = useCallback(useDispatch(), []);
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "INPUTCHANGE", nickname: e.target.value });
  };
  const onMessageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "MESSAGECHANGE", message: e.target.value });
  };
  const SendMail = () => {
    const { nickname, message } = mail;
    const data = {
      nickname,
      message
    };
    axios
      .get("https://prisma-upload.herokuapp.com/mail", { params: data })
      .then(() => setThanks("감사합니다 😀"));
    dispatch({ type: "SENDMAIL" });
  };
  return (
    <ExperiencePresenter
      onInputChange={onInputChange}
      onMessageChange={onMessageChange}
      SendMail={SendMail}
      mail={mail}
      Thanks={Thanks}
    />
  );
};
export default SendMailContainer;
