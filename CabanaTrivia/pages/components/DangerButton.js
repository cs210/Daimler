import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
class DangerButton extends Component {

  render() {
    return <Button variant="contained" color="secondary">
    {this.props.text}
  </Button>
  }
}
export default DangerButton;