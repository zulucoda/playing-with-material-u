import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import { styles } from "./styles";

class SampleForm extends React.Component<any> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <TextField
              label="Title"
              id="title"
              className={classes.textField}
              helperText="Enter a unique title field"
              fullWidth={true}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              label="Description"
              id="title"
              className={classes.textField}
              helperText="Enter a unique title field"
              fullWidth={true}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Grid item={true} xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="format">Format</InputLabel>
                <Select
                  value=""
                  inputProps={{
                    id: "format",
                    name: "format"
                  }}
                  input={
                    <OutlinedInput labelWidth={60} name="format" id="format" />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Format1</MenuItem>
                  <MenuItem value={20}>Format2</MenuItem>
                  <MenuItem value={30}>Format3</MenuItem>
                </Select>
                <FormHelperText>Choose a format</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item={true} xs={true}>
              <h3>Warning messages</h3>
            </Grid>
          </Grid>
          <Grid item={true} xs={12}>
            <Grid item={true} xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="permission">Permission</InputLabel>
                <Select
                  value=""
                  inputProps={{
                    id: "permission",
                    name: "permission"
                  }}
                  input={
                    <OutlinedInput
                      labelWidth={80}
                      name="permission"
                      id="permission"
                    />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Permission1</MenuItem>
                  <MenuItem value={20}>Permission2</MenuItem>
                  <MenuItem value={30}>Permission3</MenuItem>
                </Select>
                <FormHelperText>Choose a Permission</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item={true} xs={true}>
              <h3>Warning messages</h3>
            </Grid>
          </Grid>
          <Grid item={true} xs={12}>
            <h3>Mandatory Field</h3>
            <Grid item={true} xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Mandatory</FormLabel>
                <RadioGroup
                  aria-label="Mandatory"
                  name="mandatory1"
                  className={classes.group}
                  value="yes"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            item={true}
            xs={12}
            container={true}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item={true} xs={1}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                SAVE
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const SampleFormView = withStyles(styles)(SampleForm);
