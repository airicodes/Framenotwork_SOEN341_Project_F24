'use client';
import SignIn,{FormContainer} from "./login/SignIn";
import { useState } from "react";
import SignUp from "./login/Signup";
import Alert from '@mui/material/Alert';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  const toggleAuthMode = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleOpenAlert = () => {
    setOpenAlert((prev) => !prev);
    toggleAuthMode();
  }


  return (
    <FormContainer>
      {isSignIn ? <SignIn onClick={toggleAuthMode}/> : <SignUp onClick={toggleAuthMode} openAlert={handleOpenAlert}/>}
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        >
        <Alert
            onClose={handleClose}
            severity="success"
            variant="outlined"
            sx={{ width: '100%' }}
          >
            Registered successfully
        </Alert>
        
        </Snackbar>
    </FormContainer>
  );
}
