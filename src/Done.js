import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import doneImage from "./done.gif";
import trophyImage from "./trophy.gif";

const phrases = {
  title: "ארבל כל הכבוד!!!",
  subtitle: "הצלחת לפתור את כל החידות",
};

const Done = () => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={12} alignItems="center" direction="column">
        <Typography color="primary" variant="h4" align="center">
          {phrases.title}
        </Typography>
        <Typography color="secondary" variant="h5" align="center">
          {phrases.subtitle}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img alt="a trophy" style={{ width: "100%" }} src={trophyImage} />
        <img alt="dancing cat" style={{ maxWidth: "100%" }} src={doneImage} />
      </Grid>
    </Grid>
  );
};

export default Done;
