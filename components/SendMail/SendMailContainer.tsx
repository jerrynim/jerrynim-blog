import React, { useCallback } from "react";
import ExperiencePresenter from "./SendMailPresenter";
import { useDispatch, useSelector } from "react-redux";
import { sendTotMail } from "../../utils/sendEmail";

interface Mail {
  nickname: string;
  message: string;
}

const SendMailContainer = () => {
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
    sendTotMail(nickname, message);
    dispatch({ type: "SENDMAIL" });
  };
  return (
    <ExperiencePresenter
      onInputChange={onInputChange}
      onMessageChange={onMessageChange}
      SendMail={SendMail}
    />
  );
};
export default SendMailContainer;
