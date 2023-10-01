import { useState } from 'react';
import API_URL from '../url';
import { useAuth } from './useAuth';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignupState {
  loading: boolean;
  signup: (fullName: string, email: string, password: string) => Promise<void>;
}

/**
 * Custom hook to handle user signup (registration).
 * @returns {SignupState} An object containing loading, error, and signup function.
 */
export function useSignup(): SignupState {
  const [loading, setLoading] = useState<boolean>(false);
  const { authenticated } = useAuth();

  const signup = async (fullName: string, email: string, password: string) => {
    setLoading(true);


    try {
      if (authenticated) {
        window.location.href = "/"; // Redirect to the home page
      } else {
      // Make an API request to perform user registration (signup)
      const response = await fetch(`${API_URL}/api/v1/register`, {
        method: 'POST',
        body: JSON.stringify({ fullName, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful signup here
        // Set the token in cookies
        // Set 'token' cookie with the received token
        localStorage.setItem('userId', data.user._id);
        localStorage.setItem('token', data.token);

        toast.success("Register Succesfull");


        // Redirect to the login page or perform any other desired actions
      } else {
        if (data.message === "User already exists") {
          toast.error("User already exists");
        } else {
          toast.error("Register Failed");
        }
        console.log("Response not ok", data);
        // Handle signup failure here, e.g., set error state
    
      }
    }
    } catch (err: any) {
      toast.error("An error occurred during Register");
      console.error("Error during login:", err);

      // Handle any network or other errors that occur during signup

    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
}
