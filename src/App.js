import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Questions from "./Questions";
import Modal from "./Modal";
import { questions } from "./data";
import Done from "./Done";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63', // very red
    },
    secondary: {
      main: '#fcdd56', // very cyan
    },
  },
  overrides: {
    MuiListItem: {
      // For ListItem, change this to MuiListItem
      root: {
        "&$selected": {
          // this is to refer to the prop provided by M-UI
          backgroundColor: "#f50057 !important", // updated backgroundColor
          color: "#fff",
        },
      },
    },
  },
});

const phrases = {
  header1: "שלום ארבל",
  header2: "מצאי את המטמון",
  questionTitle: "שאלה מספר",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isDone, setIsDone] = useState(false);
  const classes = useStyles();

  const onAnswer = (isCorrect) => {
    if (isCorrect) {
      // show happy dialog
      setShowModal(true);
      setModalType("happy");
      console.log(":)");
    } else {
      // show sad dialog
      setShowModal(true);
      setModalType("sad");
      console.log(":(");
    }
  };

  const resetModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const onSadDialogClose = () => {
    // close sad dialog
    resetModal();
  };

  const onHappyDialogClose = () => {
    resetModal();
    if (questionIdx + 1 < questions.length) {
      setQuestionIdx((idx) => idx + 1);
    } else {
      // He made it to the end!!
      setIsDone(true);
      console.log("All is done!!!!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {isDone ? (
            <Grid item xs={12}>
              <Done />
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.header}>
                  {phrases.header1}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.header}>
                  {phrases.header2}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Questions questionId={questionIdx} onAnswer={onAnswer} />
              </Grid>
              <Modal
                open={showModal}
                onClose={
                  modalType === "happy" ? onHappyDialogClose : onSadDialogClose
                }
                type={modalType}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
