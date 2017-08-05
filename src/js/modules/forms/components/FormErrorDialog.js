/**
 * Created by nicholas on 8/4/17.
 */
import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

const FormErrorDialog = ({ onRetry,
                           onCancel,
                           error,
                           isErrorDialogOpen }) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={onCancel}
    />,
    <FlatButton
      label="Try Again"
      primary={true}
      keyboardFocused={true}
      onTouchTap={onRetry}
    />,
  ]

  return (
    <Dialog
      title="Form Submission Error"
      actions={actions}
      open={isErrorDialogOpen}
    >
      {error}
    </Dialog>
  )
}

export default FormErrorDialog