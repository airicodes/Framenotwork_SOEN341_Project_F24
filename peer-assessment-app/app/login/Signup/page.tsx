// 'use client';
import {FormContainer} from "../SignIn/SignIn";
// import { useState } from "react";
import SignUp from "./Signup";
// import Alert from '@mui/material/Alert';
// import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  // const [isSignIn, setIsSignIn] = useState(true);
  // const [openAlert, setOpenAlert] = useState(false);
  // const handleClose = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: SnackbarCloseReason,
  // ) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

    // setOpenAlert(false);
  // };
  // const toggleAuthMode = () => {
  //   // setIsSignIn((prev) => !prev);
  //   router.push('/login/signup');
  // };

  // const handleOpenAlert = () => {
  //   // setOpenAlert((prev) => !prev);
  //   router.push('/login/SignIn');
  //   // setIsSignIn((prev) => !prev);
  // }


  return (
    <FormContainer>
      <SignUp/>
      {/* <Snackbar
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
        </Alert> */}
        
        {/* </Snackbar> */}
    </FormContainer>
  );
}
