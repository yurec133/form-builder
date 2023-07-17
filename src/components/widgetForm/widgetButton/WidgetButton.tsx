import React, { memo } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { IStateWidget } from "../../../redux/widgetSlice";
import { IWidgetSettings } from "../../../constants/widget";

const WidgetBtn = ({ item: { id } }: IWidgetSettings) => {
  const { text, size, variant, color, alignment }: any = useSelector(
    (state: IStateWidget) =>
      !state.widget.buttonSettings[id]
        ? state.widget.buttonSettings[0]
        : state.widget.buttonSettings[id]
  );
  return (
    <Stack spacing={2} direction="row" justifyContent={alignment}>
      <Button size={size} variant={variant} color={color}>
        {text}
      </Button>
    </Stack>
  );
};
export default memo(WidgetBtn);
