import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const FireBaseErrorCodes = Object.freeze({
  EMAIL_ALREADY_EXISTS: "auth/email-already-in-use",
  WEAK_PASSWORD: "auth/weak-password",
  INVALID_CREDENTIAL: "auth/invalid-credential",
});

export const getMessageFromFirebaseErrorCode = (errorCode) => {
  switch (errorCode) {
    case FireBaseErrorCodes.EMAIL_ALREADY_EXISTS:
      return "Email address is already in use.";
    case FireBaseErrorCodes.WEAK_PASSWORD:
      return "Password should be atleast 6 characters.";
    case FireBaseErrorCodes.INVALID_CREDENTIAL:
      return "Invalid credentials, Please try again.";

    default:
      return "Please try again later.";
  }
};

import { useState } from "react";

const defaultTheme = createTheme();

export default function SignUp() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userCredential = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        userCredential.email,
        userCredential.password
      );
      // Signed up
      const user = userAuth.user;

      // You can now use the userCredential to save additional user data to your database
      const additionalUserInfo = {
        uid: user.uid,
        firstName: userCredential.firstName,
        lastName: userCredential.lastName,
        email: userCredential.email,
      };

      // Example: Save additional user info to Firestore or your preferred database
      // await saveUserToDatabase(additionalUserInfo);

      console.log("User signed up:", additionalUserInfo);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error adding user:", errorMessage);
      const errorToDisplay = getMessageFromFirebaseErrorCode(errorCode);
      setError(`Failed to sign up. ${errorToDisplay}`);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {isSignedUp ? (
            <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
              You have successfully signed up!
            </Typography>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
