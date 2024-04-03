import { forwardRef } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import sadImage1 from "./sad1.gif";
import sadImage2 from "./sad2.gif";
import sadImage3 from "./sad3.gif";
import happyImage1 from "./happy1.gif";
import happyImage2 from "./happy2.gif";
import happyImage3 from "./happy3.gif";

const phrases = {
  happy: {
    title: "תשובה נכונה!",
    content: "את טובה, המשיכי כך",
    action: "המשיכי לשאלה הבאה",
  },
  sad: {
    title: "תשובה לא נכונה",
    content: "לא נורא, תמיד אפשר לנסות שוב",
    action: "נסי שנית",
  },
};

// Generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const happyImages = [happyImage1, happyImage2, happyImage3];
const sadImages = [sadImage1, sadImage2, sadImage3];

const ModalImage = ({ type }) => {
  const randomIndex = generateRandomNumber(0, 2);
  console.log("index is now", randomIndex);
  return (
    <img
      alt="happy or sad cat"
      style={{ width: "100%" }}
      src={type === "happy" ? happyImages[randomIndex] : sadImages[randomIndex]}
    />
  );
};

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
