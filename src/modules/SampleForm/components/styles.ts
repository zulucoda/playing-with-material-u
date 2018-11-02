import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 320,
    },
    paper: {
      color: theme.palette.text.secondary,
      padding: theme.spacing.unit * 2,
      textAlign: 'left',
    },
    root: {
        display: 'flex',
        flexGrow: 1,
        width: 1024
      },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
  });