import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { section5Content } from "../utils/content";

const { BannerBgImage, BannerBgImageMobile, title, subtitle } = section5Content;

const Section5 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Box
        sx={{
          position: "relative",
          background: `url(${BannerBgImageMobile})`,
          backgroundSize: "cover",
          py: 5,
          borderRadius: "30px",
          [theme.breakpoints.up("sm")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "30px",
              border: "1px solid transparent",
              background:
                "linear-gradient(120deg,#5f5f61,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            },
          },
          [theme.breakpoints.up("md")]: {
            background: `url(${BannerBgImage})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
            py: 0,
          },
        }}
      >
        <Grid container flexWrap="wrap-reverse" sx={{ px: { xs: 5, md: 8 } }}>
          <Grid item xs={12} md={5} lg={4}>
            <Stack spacing={2} justifyContent="center" sx={{ height: "100%" }}>
              <Title variant={{ xs: "h3", md: "h2" }}>{title}</Title>

              <Typography variant="body2" color="text.secondary" sx={{ pb: 3 }}>
                {subtitle}
              </Typography>

              <OutlinedButton
                arrow
                fit={!isMobile}
                fullWidth={isMobile}
                sx={{ height: 48 }}
              >
                Learn more
              </OutlinedButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7} lg={8}>
            <Box sx={{ height: 400 }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Section5;
