import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
    paper: {
      color: theme.palette.text.secondary,
      padding: theme.spacing.unit * 2,
      textAlign: 'left',
    },
    root: {
        flexGrow: 1,
      },
  });