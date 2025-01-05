import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png"; // Ensure this path is correct
import Image from "next/image";
import Link from "next/link";
import { Box, Burger, Button, Collapse, Divider } from "@mantine/core";
import { useWindowDimensions } from "@/utils/helper";
import { FiMenu } from "react-icons/fi";
import { ActionIcon } from "@mantine/core";
import { usePathname } from "next/navigation";

const Header = () => {
  const menu = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Products", path: "/products" },
    { title: "Specification", path: "/specification" },
    { title: "Contact Us", path: "/contact-us" },
  ];
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (width > 768) {
      setOpened(false);
    }
  }, [width]);

  return (
    <>
      <Box className="flex justify-center">
        <Box
          className={`{${width}> 768? h-[100px]: h-auto } bg-gray-800 top-5 bg-white z-10 w-full`}
        >
          <Box className="  w-full p-4 ">
            <Box className=" flex justify-between ">
              <Box className="h-full flex items-center">
                {" "}
                {/* Center the logo vertically */}
                <Image
                  src={logo}
                  alt="Sample Logo" // Use a descriptive alt text
                  width={80} // Define width and height
                  height={80} // Ensure the aspect ratio is  preserved
                  className="rounded-md" // Use Tailwind CSS for rounded corners
                />
              </Box>
              <Box className="flex gap-4 items-center">
                {width > 768 ? (
                  menu?.map((v, i) => {
                    return (
                      <Link
                        href={v.path}
                        className={`text-xl font-bold font-montserrat ${
                          v.path === pathname
                            ? "text-gray-400 underline"
                            : "text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
                        }`}
                        key={i}
                      >
                        {v.title}
                      </Link>
                    );
                  })
                ) : (
                  <Burger
                    onClick={() => setOpened(() => !opened)}
                    aria-label="Toggle navigation"
                    lineSize={2}
                    opened={opened}
                  />
                )}
              </Box>
            </Box>
          </Box>

          <Collapse in={opened}>
            <Box className="flex flex-col	gap-1 items-start p-4 bg-opacity-50 top-5 bg-white rounded-br-[10px] rounded-bl-[10px]">
              {width <= 768 &&
                menu?.map((v, i) => {
                  return (
                    <Box key={i} onClick={() => setOpened(false)}>
                      <Link
                        href={v.path}
                        className={`text-xl font-bold font-montserrat ${
                          v.path === pathname
                            ? "text-sky-300 underline"
                            : "text-sky-800 hover:text-sky-300 transition-colors duration-300 ease-in-out"
                        }`}
                      >
                        {v.title}
                      </Link>
                    </Box>
                  );
                })}
            </Box>
          </Collapse>
        </Box>
      </Box>
    </>
  );
};

export default Header;
