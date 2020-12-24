import { useState, forwardRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import sadImage from "./sad.gif";
import happyImage from "./happy.gif";

const phrases = {
  happy: {
    title: "תשובה נכונה!",
    content: "אתה טוב, המשך כך",
    action: "המשך לשאלה הבאה",
  },
  sad: {
    title: "תשובה לא נכונה",
    content: "לא נורא, תמיד אפשר לנסות שוב",
    action: "נסה שנית",
  },
};

const ModalImage = ({type}) => {
    return <img style={{width: "100%"}} src={type === "happy" ? happyImage : sadImage} />
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ type, onClose, open }) => {
  if (!type) {
    return null;
  }
  const phrase = phrases[type];
  return (
    <Dialog
      open={open}
      fullScreen
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <Typography variant="h4">{phrase.title}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="h5">{phrase.content}</Typography>
        </DialogContentText>
        <ModalImage type={type} />
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          size="large"
          variant="contained"
          onClick={onClose}
          color={type === "happy" ? "primary" : "secondary"}
        >
          {phrase.action}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
