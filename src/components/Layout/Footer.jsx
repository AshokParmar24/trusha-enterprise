import { useState } from "react";
import {
  Container,
  Grid,
  Title,
  Text,
  Anchor,
  Group,
  TextInput,
  Button,
  Divider,
  Box,
} from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const theme = useMantineTheme();
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState("");

  const menu = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Products", path: "/products" },
    { title: "Specification", path: "/specification" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const blue = theme.colors.blue[0];
  const grey = theme.colors.grey[0];
  const white = "#ffffff";

  const validate = () => {
    let isValid = true;

    // Mobile validation (10-digit)
    if (!mobile.trim()) {
      setErrors("Mobile number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile.trim())) {
      setErrors("Enter a valid 10-digit mobile number");
      isValid = false;
    }

     return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
       setMobile("");
    }
  };

  return (
    <footer
      style={{ backgroundColor: "#1f2937", color: white, padding: "3rem 0" }}
    >
      <Container size="lg">
        <Grid gutter="xl">
          {/* Quick Links */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={4} mb="sm" style={{ color: white }}>
              Quick Links
            </Title>
            {menu.map((item, index) => (
              <Anchor
                key={index}
                href={item.path}
                style={{
                  color: grey,
                  display: "block",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = white)}
                onMouseOut={(e) => (e.currentTarget.style.color = grey)}
                underline="never"
              >
                {item.title}
              </Anchor>
            ))}
          </Grid.Col>

          {/* Contact Info */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={4} mb="sm" style={{ color: white }}>
              Contact Us
            </Title>
            <Text size="sm" style={{ color: grey }}>
              Email: contact@yourcompany.com
            </Text>
            <Text size="sm" style={{ color: grey }}>
              Address: 123 Main Street
            </Text>
            <Text size="sm" style={{ color: grey }}>
              Phone: +1 234 567 890
            </Text>
          </Grid.Col>

          {/* Social Media */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={4} mb="sm" style={{ color: white }}>
              Follow Us
            </Title>
            <Group spacing="md" mt="xs">
              {[
                { icon: FaFacebook, link: "https://facebook.com" },
                { icon: FaInstagram, link: "https://instagram.com" },
                { icon: FaLinkedin, link: "https://linkedin.com" },
                { icon: FaTwitter, link: "https://twitter.com" },
              ].map((social, idx) => (
                <Anchor
                  key={idx}
                  href={social.link}
                  target="_blank"
                  style={{ transition: "transform 0.2s" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.2)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <social.icon size={22} color={grey} />
                </Anchor>
              ))}
            </Group>
          </Grid.Col>

          {/* Newsletter */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={4} mb="sm" style={{ color: white }}>
              Get in Touch
            </Title>
            <form onSubmit={handleSubmit}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <Text size="sm" style={{ color: grey }}>
                  Subscribe to our newsletter for updates and offers
                </Text>

                <TextInput
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.currentTarget.value)}
                  required
                  radius="md"
                  size="sm"
                  error={errors.mobile}
                  type="tel"
                  mt="sm"
                  styles={{
                    input: {
                      backgroundColor: "#1F2937",
                      borderColor: "#374151",
                      color: "white",
                    },
                  }}
                />
                <Button
                  type="submit"
                  radius="md"
                  fullWidth
                  size="sm"
                  style={{
                    fontWeight: 500,
                    backgroundColor: blue,
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </form>
          </Grid.Col>
        </Grid>

        {/* Footer Bottom */}
        <Divider my="xl" color="gray.7" />
        <Text align="center" size="xs" style={{ color: grey }}>
          &copy; 2025 Your Company. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
