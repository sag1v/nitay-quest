import { Fragment, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import BookIcon from "@material-ui/icons/MenuBookOutlined";
import CarIcon from "@material-ui/icons/DirectionsCarOutlined";
import { questions, answers } from "./data";
import { Badge } from "@material-ui/core";

const phrases = {
  title: "ענה על החידה",
  submit: "בדוק את התשובה",
};

const useStyles = makeStyles((theme) => ({
  listTitle: {
    margin: theme.spacing(4, 0, 2),
  },
  listItem: {
    textAlign: "right",
  },
}));

const questionIcons = {
  book: BookIcon,
  car: CarIcon,
};

const Questions = ({ questionId, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    setSelectedAnswer(-1);
  }, [questionId]);

  const onSubmit = () => {
    onAnswer(answers[questionId][selectedAnswer].correct);
  };

  const question = questions[questionId];
  const QuestionIcon = questionIcons[question.type] || Fragment;

  return (
    <Grid item container spacing={1}>
      <Grid item xs={12}>
        <Typography>{phrases.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.listTitle}>
          {question.text}
        </Typography>
        <Grid item xs={12} direction="row">
          <Badge
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            badgeContent={question.page}
            color="secondary"
            invisible={question.type !== "book"}
          >
            <QuestionIcon fontSize="large" />
          </Badge>
        </Grid>
        <List>
          {answers[questionId].map((q, i) => (
            <ListItem
              key={i}
              className={`${classes.listItem}`}
              button
              selected={i === selectedAnswer}
              onClick={() => setSelectedAnswer(i)}
            >
              <ListItemText>{`${i + 1}. ${q.text}`}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <Button
          disabled={selectedAnswer === -1}
          color="primary"
          variant="contained"
          fullWidth
          onClick={onSubmit}
        >
          {phrases.submit}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Questions;
