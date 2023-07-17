import React, { memo } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { IWidgetSettings } from "../../../constants/widget";
import { useSelector } from "react-redux";
import { IStateWidget } from "../../../redux/widgetSlice";
const WidgetSwitch = ({ item: { id } }: IWidgetSettings) => {
  const { label, color, isHideField, size, alignment }: any = useSelector(
    (state: IStateWidget) =>
      !state.widget.switchSettings[id]
        ? state.widget.switchSettings[0]
        : state.widget.switchSettings[id]
  );
  return (
    <div style={{ display: "flex", justifyContent: `${alignment}` }}>
      <FormGroup>
        <FormControlLabel
          control={<Switch color={color} defaultChecked size={size} />}
          label={label}
          disabled={isHideField}
        />
      </FormGroup>
    </div>
  );
};
export default memo(WidgetSwitch);
