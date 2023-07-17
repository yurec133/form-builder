import React, {memo} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { IStateWidget } from "../../../redux/widgetSlice";
import { IWidgetSettings } from "../../../constants/widget";

const WidgetTextAreaField = ({ item }: IWidgetSettings) => {
  const {
    label,
    color,
    margin,
    variant,
    isHideField,
    focused,
  }: any = useSelector((state: IStateWidget) =>
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
        color={color}
        margin={margin}
        label={label}
        variant={variant}
        disabled={isHideField}
        id={item.id}
        rows={4}
        multiline
        focused={focused}
      />
    </Box>
  );
};
export default memo(WidgetTextAreaField)