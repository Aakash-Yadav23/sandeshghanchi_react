import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API_URL from "../url";
import { useUserDetails } from "./useUserDetails";

interface AuthState {
  authenticated: boolean | null;
  user: any | null;
  loading: boolean;
  error: Error | null;
}

export function useAuth(): AuthState {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const pathname = useLocation();

  useEffect(() => {
    const getMe = async () => {
      // Check if localStorage is available
      if (typeof localStorage !== "undefined") {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
  
        if (!token || !userId) {
          setAuthenticated(false);
        } else {
          setAuthenticated(true);
  
          const response = await fetch(`${API_URL}/api/v1/me`, {
            method: 'POST', // Change the HTTP method to POST
            headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({ id: userId }), // Send the id in the request body as JSON
          }); 
  
          if (response.ok) {
            const userData = await response.json();
            setUser(userData?.user );
          } else {
            setError(new Error('Failed to fetch user details'));
          }
          // Access pathname from the location object
          const currentPathname = pathname.pathname;
  
          if (currentPathname === "/login" || currentPathname === "/signup") {
            // Redirect to the home page ("/") if authenticated
            window.location.href = "/";
            return; // Return early to avoid the code below running
          }
        }
      } else {
        setLoading(false);
        // Handle the case where localStorage is not available
        console.error("localStorage is not available in this environment.");
      }
    };
  
    getMe();
  }, [authenticated, pathname]);

  return { authenticated, user, loading, error };
}
