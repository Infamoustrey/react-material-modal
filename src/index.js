import React, { Component } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from "@material-ui/core";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleCancel() {
    let { onCancel = undefined } = this.props;
    if (onCancel) onCancel();
    this.handleClose();
  }

  handleSubmit() {
    let { onSubmit = undefined } = this.props;
    if (onSubmit) onSubmit();
    this.handleClose();
  }

  render() {
    let { title, children, activator, activatorText } = this.props;
    let { open } = this.state;
    return (
      <React.Fragment>
        {activator ? (
          <span onClick={this.handleOpen}>{activator}</span>
        ) : (
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={this.handleOpen}
          >
            {activatorText ? activatorText : "Open"}
          </Button>
        )}
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleCancel}
              variant={"text"}
              color={"secondary"}
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
              variant={"contained"}
              color={"primary"}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default Modal;
