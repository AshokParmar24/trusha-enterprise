"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Slider from "react-slick";
import Image from "next/image";
import {
  Box,
  Card,
  Grid,
  Text,
  Title,
  Container,
} from "@mantine/core";
import Compressor from "../Compressor/Compressor";
import Maps from "@/components/Maps/Maps";

import image1 from "@/assets/testImage/image1.jpg";
import image2 from "@/assets/testImage/image2.jpg";
import image3 from "@/assets/testImage/image3.jpg";
import image4 from "@/assets/testImage/image4.jpg";
import image5 from "@/assets/testImage/image5.jpg";
import image6 from "@/assets/testImage/image6.jpg";
import image7 from "@/assets/testImage/image7.jpg";
import image8 from "@/assets/testImage/image8.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Dashboard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    speed: 100,
  };

  const cardDetails = [
    {
      title: "High Technology Factory",
      context:
        "Their work is of such outstanding quality, they are clearly experts in their field.",
    },
    {
      title: "Punctual Delivery Time",
      context:
        "Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.",
    },
    {
      title: "High Standard Labors",
      context:
        "We ensure that all projects are done with utmost professionalism using quality materials.",
    },
  ];

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Dashboard - Industrial Excellence</title>
        <meta
          name="description"
          content="Explore our high-technology factory, punctual delivery, and high-standard labors through this dashboard."
        />
        <meta property="og:title" content="Industrial Excellence Dashboard" />
        <meta
          property="og:description"
          content="Top-quality services in technology and manufacturing with timely delivery and expert workers."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        {/* Hero Section / Carousel */}
        <section aria-label="Image Carousel">
          <Box style={{ maxWidth: "100vw", maxHeight: "100vh", overflow: "hidden" }}>
            <Slider {...settings}>
              {images.map((url, index) => (
                <Box key={index}>
                  <Image
                    src={url}
                    alt={`Company showcase image ${index + 1}`}
                    style={{ width: "100vw", height: "100vh" }}
                    objectFit="cover"
                    priority
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </section>

        {/* Features Section */}
        <section style={{ backgroundColor: "#f9fafb" }}>
          <Container py={50}>
            <Title order={2} mb="xl" align="center">
              Why Choose Us
            </Title>
            <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
              {cardDetails.map((v, i) => (
                <Grid.Col span={{ base: 12, md: 4 }} key={i}>
                  <article>
                    <Card shadow="sm" padding="xl" radius="md" withBorder>
                      <Card.Section>
                        <Image
                          src={image1}
                          alt={v.title}
                          style={{ width: "100%", height: "250px", objectFit: "cover" }}
                        />
                      </Card.Section>
                      <Title order={3} mt="md">{v.title}</Title>
                      <Text size="sm" mt="xs">{v.context}</Text>
                    </Card>
                  </article>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Interactive 3D Compressor */}
        <section aria-label="3D Compressor Visualization">
          <Compressor />
        </section>

        {/* Map Section */}
        <section aria-label="Location Map">
          <Maps />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
