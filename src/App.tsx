import React from "react";
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header";

const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/devjobs/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
