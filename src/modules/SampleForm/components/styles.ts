import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing.unit
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 320
    },
    group: {
      margin: `${theme.spacing.unit}px 0`
    },
    paper: {
      color: theme.palette.text.secondary,
      padding: theme.spacing.unit * 2,
      textAlign: "left"
    },
    root: {
      display: "flex",
      flexGrow: 1,
      width: 1024
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
  });
