import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { styles } from './styles';

class SampleForm extends React.Component<any> {
    public render(){
        const { classes } = this.props;
        return <div className={classes.root}>
        <Grid container={true} spacing={24}>
            <Grid item={true} xs={12}>
                <h3>Title</h3>
            </Grid>
            <Grid item={true} xs={12}>
                <h3>Description</h3>
            </Grid>
            <Grid item={true} xs={12}>
                <Grid item={true} xs={4}>
                    <h3>Format</h3>
                </Grid>
                <Grid item={true} xs={true}>
                    <h3>Warning messages</h3>
                </Grid>
            </Grid>
            <Grid item={true} xs={12}>
                <Grid item={true} xs={4}>
                    <h3>Permission</h3>
                </Grid>
                <Grid item={true} xs={true}>
                    <h3>Warning messages</h3>
                </Grid>
            </Grid>
            <Grid item={true} xs={12}>
                <h3>Mandatory Field</h3>
                <Grid item={true} xs={12}>
                    <h3>Yes</h3>
                </Grid>
                <Grid item={true} xs={12}>
                    <h3>No</h3>
                </Grid>
            </Grid>
            <Grid item={true} xs={12} 
            container={true}
            direction="row"
            justify="flex-end"
            alignItems="center">
                <Grid item={true} xs={4}>
                    <h3>Save Button</h3>
                </Grid>
            </Grid>
        </Grid>
      </div>
    }
}

export const SampleFormView = withStyles(styles)(SampleForm);