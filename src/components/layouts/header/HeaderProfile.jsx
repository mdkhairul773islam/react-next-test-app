"use client";
import { useState } from "react";
import { Dropdown } from "flowbite-react";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import Image from "next/image";
import { AiOutlineFundView } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

const HeaderProfile = ({ image }) => {

  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogout = async () => {

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${apiUrl}/auth/logout`);
      if (response.status === 200) {
        Cookies.remove("token");
        router.push("/login"); // Redirect to login page after logout
      } else {
        console.log("Error logging out:", response.data.message);
        setError("Error logging out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      setError("Error logging out");
    }

  };

  return (
    <>
      <Dropdown
        label=""
        renderTrigger={() => (
          <div className="flex items-center gap-3  justify-center cursor-pointer">
            <Image
              height={40}
              width={40}
              src="/images/profile.jpg"
              alt="User"
              className="aspect-square h-full rounded-full object-cover "
            />
            <h5 className="font-medium text-dark-700 whitespace-nowrap hidden tracking-wider md:block">
              John Doe
              <span className="text-xs text-dark-500 block font-medium">
                Super Admin
              </span>
            </h5>
            <RiArrowDownSLine className="text-dark-500 hidden md:block" />
          </div>
        )}
      >
        <Dropdown.Header>
          <span className="block text-sm">John Doe</span>
          <span className="block truncate text-sm font-medium">
            johndoe@gmail.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item href="/admin" icon={HiViewGrid}>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
        <Dropdown.Item href="/" icon={AiOutlineFundView}>
          Frontend
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout} icon={HiLogout}>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default HeaderProfile;
