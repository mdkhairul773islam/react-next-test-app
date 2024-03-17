"use client"
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { HiLogout } from "react-icons/hi";

const Logout = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    alert("Ok");
    /* try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${apiUrl}/logout`);

      if (response.status === 200) {
        Cookies.remove("token");
        console.log("User logged out successfully.");
        router.push("/login"); // Redirect to login page after logout
      } else {
        console.log("Error logging out:", response.data.message);
        setError("Error logging out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      setError("Error logging out");
    } */
  };
  return (
    <Dropdown.Item href="/login" icon={HiLogout} onClick={handleLogout}>
      Sign out
    </Dropdown.Item>
  );
};

export default Logout;
