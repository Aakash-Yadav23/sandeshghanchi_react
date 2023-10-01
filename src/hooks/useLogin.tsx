import { useState } from "react";
import { useAuth } from "./useAuth";
import API_URL from "../url"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginState {
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
}

export function useLogin(): LoginState {
  const [loading, setLoading] = useState<boolean>(false);
  const { authenticated } = useAuth();

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      if (authenticated) {
        window.location.href = "/"; // Redirect to the home page
      } else {
        const response = await fetch(`${API_URL}/api/v1/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("token", data.token);


          window.location.href = "/";
        } else {
          if (data.message === "User Not Found") {
            toast.error("Invalid User or Password");
          } else {
            toast.error("Login Failed");
          }
          console.log("Response not ok", data);
        }
      }
    } catch (error) {
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}
