import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import image1 from "@/assets/testImage/image1.jpg";
import image2 from "@/assets/testImage/image2.jpg";
import image3 from "@/assets/testImage/image3.jpg";
import image4 from "@/assets/testImage/image4.jpg";
import image5 from "@/assets/testImage/image5.jpg";
import image6 from "@/assets/testImage/image6.jpg";
import image7 from "@/assets/testImage/image7.jpg";
import image8 from "@/assets/testImage/image8.jpg";
import { Box, Card, Grid, Text, Title, Transition } from "@mantine/core";
import Compressor from "../Compressor/Compressor";
import Maps from "@/components/Maps/Maps";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Dashboard = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows directly in settings
    autoplay: true,
    cssEase: "linear",
    speed: 100,
  };

  if (!isMounted) return null;

  const cardDetails = [
    {
      title: "High Technology Factory",
      context:
        "Their work is of such outstanding quality, they are clearly experts in their field. Lorem ipsum dolor sit amet",
    },
    {
      title: "Punctual Delivery Time",
      context:
        "Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.",
    },
    {
      title: "High Standard Labors",
      context:
        "We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.",
    },
  ];

  return (
    <>
      <Box
        style={{
          maxWidth: "100vw",
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Slider {...settings}>
          {images.map((url, index) => (
            <Box key={index}>
              <Image
                src={url}
                alt={`Carousel Image ${index + 1}`}
                style={{ width: "100vw", height: "100vh" }}
                objectFit="contain"
              />
            </Box>
          ))}
        </Slider>
      </Box>
      <Box className="w-full h-full bg-gray-100	">
        <Box className="py-20 px-[30px]">
          <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
            {cardDetails?.map((v, i) => {
              return (
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }} key={i}>
                  <Card
                    shadow="sm"
                    padding="xl"
                    radius="md"
                    withBorder
                    className="h-full flex justify-between flex-column gap-5"
                  >
                    <Card.Section>
                      <Image
                        style={{ width: "100vw", height: "250px" }}
                        objectFit="contain"
                        src={image1}
                        alt="No way!"
                      />
                    </Card.Section>
                    <Title order={3}>{v.title}</Title>
                    <Text size="lg">{v.context}</Text>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Compressor />
      <Maps />
    </>
  );
};

export default Dashboard;
