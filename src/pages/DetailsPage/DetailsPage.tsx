import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";
import data from "../../data.json";
import DetailsTop from "./DetailsTop";
import DetailsMain from "./DetailsMain";
import DetailsFooter from "./DetailsFooter";

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;

  max-width: 144rem;

  margin: 0 auto;

  padding-bottom: 20rem;

  position: relative;
`;

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  let NumberId = Number(id?.replace(":", ""));

  const currentData = data.find((el) => {
    return el.id === NumberId;
  });

  const ContainerVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  };

  return (
    <Container
      initial={"hidden"}
      animate={"visible"}
      variants={ContainerVariants}
      transition={{ duration: 0.5 }}
    >
      {currentData && (
        <>
          <DetailsTop {...currentData} />
          <DetailsMain {...currentData} />
          <DetailsFooter {...currentData} />
        </>
      )}
    </Container>
  );
};

export default DetailsPage;
