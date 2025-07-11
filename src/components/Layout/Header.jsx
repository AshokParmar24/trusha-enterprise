import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Box, Burger, Collapse, Container } from "@mantine/core";
import { useWindowDimensions } from "@/utils/helper";
import { usePathname } from "next/navigation";
import { useMantineTheme } from "@mantine/core";

const Header = () => {
  const menu = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Products", path: "/products" },
    { title: "Specification", path: "/specification" },
    { title: "Contact Us", path: "/contact-us" },
    { title: "Chat", path: "/chat" },
  ];

  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 768) setOpened(false);
  }, [width]);

  console.log("theme", theme, theme.colors.grey[0]);

  return (
    <Box component="header" className="flex justify-center">
      <Box
        component="nav"
        aria-label="Main Navigation"
        className={`bg-white z-10 w-full ${
          width > 768 ? "h-[100px]" : "h-auto"
        }`}
      >
        <Container size="xl">
          <Box className="w-full p-4">
            <Box className="flex justify-between">
              {/* Logo */}
              <Box className="h-full flex items-center">
                <Link href="/" aria-label="Go to homepage">
                  <Image
                    src={logo}
                    alt="Sample Logo"
                    width={200}
                    height={200}
                    className="rounded-md"
                  />
                </Link>
              </Box>

              {/* Desktop Menu */}
              <Box className="flex gap-4 items-center">
                {width > 768 ? (
                  menu.map((v, i) => (
                    <Link
                      href={v.path}
                      key={i}
                      className={`text-xl font-bold  underline-offset-4 transition-colors duration-300 ease-in-out ${
                        v.path === pathname ? "underline" : "hover:underline"
                      }`}
                      style={{
                        color:
                          v.path === pathname
                            ? theme.colors.blue[0]
                            : theme.colors.grey[0],
                        fontFamily: theme.menu.fontFamily,
                      }}
                      aria-current={v.path === pathname ? "page" : undefined}
                    >
                      {v.title}
                    </Link>
                  ))
                ) : (
                  <Burger
                    onClick={() => setOpened((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    lineSize={2}
                    opened={opened}
                    color="black"
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Mobile Menu */}
        <Collapse in={opened}>
          <Container size="xl">
            <Box
              component="ul"
              className="flex flex-col gap-1 items-start p-4 list-none"
            >
              {width <= 768 &&
                menu.map((v, i) => (
                  <Box component="li" key={i} onClick={() => setOpened(false)}>
                    <Link
                      href={v.path}
                      className={`text-xl font-bold  underline-offset-4 transition-colors duration-300 ease-in-out ${
                        v.path === pathname ? "underline" : "hover:underline"
                      }`}
                      style={{
                        color:
                          v.path === pathname
                            ? theme.colors.blue[0]
                            : theme.colors.grey[0],
                        fontFamily: theme.menu.fontFamily,
                      }}
                      aria-current={v.path === pathname ? "page" : undefined}
                    >
                      {v.title}
                    </Link>
                  </Box>
                ))}
            </Box>
          </Container>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Header;
