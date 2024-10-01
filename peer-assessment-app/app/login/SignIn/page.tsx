import SignIn,{FormContainer} from "./SignIn";
// import { useState } from "react";
// import SignUp from "../Signup/Signup";
// import Alert from '@mui/material/Alert';
// import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
// import { useRouter } from "next/navigation";
export default function Home() {
  // const [isSignIn, setIsSignIn] = useState(true);
  // const [openAlert, setOpenAlert] = useState(false);
  // const handleClose = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: SnackbarCloseReason,
  // ) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpenAlert(false);
  // };
  // const router = useRouter();

  // const toggleAuthMode = () => {
  //   // setIsSignIn((prev) => !prev);
  //   router.push('/login/Signup');
  // };

 


  return (
    <FormContainer>
      <SignIn/>
    </FormContainer>
  );
}
