import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Modal from 'material-ui/Modal'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
})
const currentFormState = props => {
  const {
    classes,
    action,
    onDelete,
    onEdit,
    isModalOpen,
    handleClose,
    handleOpen
  } = props
  var actionButton = null
  if (props.formValue) {
    var itr = 0
    var leftColData = []
    var rightColData = []
    for (var key in props.formValue) {
      itr++
      if (itr > 3) {
        rightColData.push(
          <Grid key={key}>
            <Typography variant="body1" gutterBottom>
              {key}
            </Typography>
            <Typography variant="caption" noWrap gutterBottom>
              {props.formValue[key]}
            </Typography>
          </Grid>
        )
      } else {
        leftColData.push(
          <Grid key={key}>
            <Typography variant="body1" gutterBottom>
              {key}
            </Typography>
            <Typography variant="caption" noWrap gutterBottom>
              {props.formValue[key]}
            </Typography>
          </Grid>
        )
      }
    }
  }
  if (action) {
    actionButton = (
      <Grid item xs={2} sm={2}>
        <Button onClick={onEdit} color="primary">
          Edit
        </Button>
        <Button onClick={handleOpen} color="secondary">
          Delete
        </Button>
      </Grid>
    )
  }
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={10} sm={5}>
          {leftColData}
        </Grid>
        <Grid item xs={10} sm={5}>
          {rightColData}
        </Grid>
        {actionButton}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isModalOpen}
          onClose={handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Data will be permanently lost.
            </Typography>
            <Button onClick={onDelete} color="secondary" gutterBottom align="center">
              Delete
            </Button>
          </div>
        </Modal>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(currentFormState)
