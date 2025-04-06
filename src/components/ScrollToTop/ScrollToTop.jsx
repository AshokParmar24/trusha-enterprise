import { useEffect, useState } from "react";
import { Affix, Transition, ActionIcon } from "@mantine/core";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={visible}>
        {(transitionStyles) => (
          <ActionIcon
            size="lg"
            radius="xl"
            variant="filled"
            color="blue"
            style={transitionStyles}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollToTop;
