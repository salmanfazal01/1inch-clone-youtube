import { Container, Grid } from "@mui/material";
import React from "react";
import ServiceCard from "../components/Cards/ServiceCard";
import Title from "../components/Title";
import { section6Content } from "../utils/content";

const { title, ITEMS } = section6Content;

const Section6 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>
        {title}
      </Title>

      <Grid container spacing={3}>
        {ITEMS.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <ServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section6;
