import React, {memo} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IStateWidget } from "../../../redux/widgetSlice";
import { useSelector } from "react-redux";
import { IWidgetSettings } from "../../../constants/widget";

const WidgetInputField = ({ item }: IWidgetSettings) => {
  const { label, color, margin, size, variant, isHideField, focused }: any = useSelector(
    (state: IStateWidget) =>
      !state.widget.inputSettings[item.id]
        ? state.widget.inputSettings[0]
        : state.widget.inputSettings[item.id]
  );
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "100%" },
        opacity: `${isHideField ? 0.4 : 1}`,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={item.id}
        color={color}
        margin={margin}
        label={label}
        size={size}
        variant={variant}
        disabled={isHideField}
        focused={focused}
      />
    </Box>
  );
};
export default memo(WidgetInputField)