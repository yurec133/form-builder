import React, { useMemo, memo } from "react";
import { green, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import {
  IStateWidget,
  IWidgetState,
  updateSwitchSettingsLabel,
  updateSwitchSettingsSize,
  updateSwitchSettingsColor,
  updateSwitchSettingsHide,
  updateSwitchSettingsAlignment,
} from "../../../redux/widgetSlice";
import Box from "@mui/material/Box";
import purple from "@mui/material/colors/purple";
import blue from "@mui/material/colors/blue";
import SelectSetting from "../../formSetting/SelectSetting";
import RadioColorSetting from "../../formSetting/RadioColorSetting";
import InputNameSetting from "../../formSetting/InputNameSetting";
import Typography from "@mui/material/Typography";
import ButtonAlignmentSetting from "../../formSetting/ButtonAlignmentSetting";
import SwitchSetting from "../../formSetting/SwitchSetting";

const SwitchSettings = () => {
  const {
    openWidget,
    idItem,
    isWidget: { isWidgetSwitch },
  }: IWidgetState = useSelector((state: IStateWidget) => state.widget);
  const { label, color, size, isHideField, alignment } = useSelector(
    (state: IStateWidget) =>
      !state.widget.switchSettings[idItem]
        ? state.widget.switchSettings[0]
        : state.widget.switchSettings[idItem]
  );
  const memoSize = useMemo(() => ["small", "medium"], []);
  const memoColor = useMemo(() => {
    return [
      { color: blue[700], name: "primary" },
      { color: purple[500], name: "secondary" },
      { color: green[800], name: "success" },
      { color: red[700], name: "error" },
    ];
  }, []);
  const memoAlignment = useMemo(() => {
    return [
      { position: "flex-start", name: "Left" },
      { position: "center", name: "Center" },
      { position: "flex-end", name: "Right" },
    ];
  }, []);

  if (!openWidget || !isWidgetSwitch) return null;

  return (
    <>
      <Typography variant="h6" component="h3" mb={2}>
        Switch Properties
      </Typography>
      <Box mb={2}>
        <InputNameSetting
          label={"Button Text"}
          text={label}
          id={"outlinedInput1"}
          idItem={idItem}
          dispatchUpdate={updateSwitchSettingsLabel}
        />
      </Box>
      <Box mb={2}>
        <SelectSetting
          id={"select-size1"}
          title={"Size"}
          value={size}
          dispatchUpdate={updateSwitchSettingsSize}
          menuItem={memoSize}
        />
      </Box>
      <Box mb={2}>
        <RadioColorSetting
          name={"color-radio-Switch"}
          radioItem={memoColor}
          checked={color}
          title={"Color"}
          dispatchUpdate={updateSwitchSettingsColor}
        />
      </Box>
      <Box mb={2}>
        <SwitchSetting
          label={"Hide field"}
          dispatchUpdate={updateSwitchSettingsHide}
          checked={isHideField}
        />
      </Box>
      <Box mb={2}>
        <Typography variant="body1" component="h3" mb={1}>
          Switch Alignment
        </Typography>
        <ButtonAlignmentSetting
          value={alignment}
          dispatchUpdate={updateSwitchSettingsAlignment}
          color={"primary"}
          toggleButton={memoAlignment}
        />
      </Box>
    </>
  );
};
export default memo(SwitchSettings);
