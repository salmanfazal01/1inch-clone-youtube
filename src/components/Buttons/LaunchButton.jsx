import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      Launch dApp
      <KeyboardArrowRightIcon />
    </Button>
  );
};

export default LaunchButton;
