import Button from '@material-ui/core/Button';
import * as React from 'react';

export class TestButton extends React.Component {
    public render(){
        return <Button variant="contained" color="primary">
            Cool Material UI Button
        </Button>
    }
}