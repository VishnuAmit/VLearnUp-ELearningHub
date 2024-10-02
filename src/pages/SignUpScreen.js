import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userCredential = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
  
    try {
      const userAuth = await createUserWithEmailAndPassword(auth, userCredential.email, userCredential.password);
      const user = userAuth.user;

      const additionalUserInfo = {
        uid: user.uid,
        firstName: userCredential.firstName,
        lastName: userCredential.lastName,
        email: userCredential.email,
      };

      console.log('User signed up:', additionalUserInfo);
      setIsSignedUp(true);
    } catch (error) {
      console.error('Error adding user:', error.message);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{ 
        background: 'linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)', 
        borderRadius: '12px', 
        boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)', 
        padding: '50px 25px', 
        mt: 8 
      }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: '600', color: '#333', mb: 2 }}>
            Sign Up
          </Typography>
          {isSignedUp ? (
            <Typography variant="h6" sx={{ mt: 1, mb: 2, color: 'green', textAlign: 'center' }}>
              You have successfully signed up!
            </Typography>
          ) : (
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    sx={{
                      bgcolor: '#f9f9f9',
                      borderRadius: '4px',
                      '& .MuiInputBase-root': {
                        borderRadius: '4px',
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
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
                    sx={{
                      bgcolor: '#f9f9f9',
                      borderRadius: '4px',
                      '& .MuiInputBase-root': {
                        borderRadius: '4px',
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
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
                    sx={{
                      bgcolor: '#f9f9f9',
                      borderRadius: '4px',
                      '& .MuiInputBase-root': {
                        borderRadius: '4px',
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
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
                    sx={{
                      bgcolor: '#f9f9f9',
                      borderRadius: '4px',
                      '& .MuiInputBase-root': {
                        borderRadius: '4px',
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions, and updates via email."
                  />
                </Grid>
              </Grid>
              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 2, 
                  mb: 2, 
                  bgcolor: 'primary.main', 
                  '&:hover': { 
                    bgcolor: 'primary.dark' 
                  }, 
                  transition: 'background-color 0.3s ease' 
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" sx={{ 
                    color: 'primary.main', 
                    textDecoration: 'none', 
                    '&:hover': { 
                      textDecoration: 'underline', 
                      color: 'primary.dark' 
                    } 
                  }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </ThemeProvider>
  );
}
