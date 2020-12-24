import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import doneImage from "./done.gif";
import trophyImage from "./trophy.png";
import { Divider } from "@material-ui/core";

const phrases = {
  title: "ניתאי כל הכבוד!!!",
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
        <img style={{ maxWidth: "100%" }} src={doneImage} />
        <img style={{ width: "100%" }} src={trophyImage} />
      </Grid>
    </Grid>
  );
};

export default Done;
