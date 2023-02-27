import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { section4Content } from "../utils/content";

const { top, bottom } = section4Content;

const Section4 = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container sx={{ mt: { xs: 15, md: 20, lg: 25 } }}>
      {/* TOP */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{top.title}</Title>

            <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
              {top.subtitle}
            </Typography>

            <OutlinedButton arrow fit>
              Swap
            </OutlinedButton>
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <img
            src={top.image}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      {/* BOTTOM */}

      <Grid
        container
        spacing={10}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: { xs: 10, md: 15 } }}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
            src={bottom.TABS[tabValue].image}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{bottom.title}</Title>

            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              scrollButtons="auto"
            >
              {bottom.TABS.map(({ name }) => (
                <Tab
                  label={name}
                  key={name}
                  sx={{
                    minWidth: 60,
                    "&.Mui-selected": { color: "text.primary" },
                  }}
                />
              ))}
            </Tabs>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pb: 2, minHeight: 70 }}
            >
              {bottom.TABS[tabValue].subtitle}
            </Typography>

            <OutlinedButton arrow fit>
              Learn more
            </OutlinedButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
