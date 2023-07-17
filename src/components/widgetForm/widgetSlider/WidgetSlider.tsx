import React, { memo } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { IWidgetSettings } from "../../../constants/widget";

const WidgetSlider = ({ item: { id } }: IWidgetSettings) => {

  return (
    <Box width={300}>
      <Slider defaultValue={50} aria-label="Label" valueLabelDisplay="auto" />
    </Box>
  );
};
export default memo(WidgetSlider);
