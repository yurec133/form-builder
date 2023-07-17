import React, { useMemo, memo } from "react";
import Typography from "@mui/material/Typography";
import { green, pink, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import {
  IStateWidget,
  IWidgetState,
  updateTitleSettingsCheckbox,
  updateColorSettingsCheckbox,
  updateHideSettingsCheckbox,
  updateRowSettingsCheckbox,
  addSettingsCheckbox,
  onIsAddOption,
} from "../../../redux/widgetSlice";
import InputNameSetting from "../../formSetting/InputNameSetting";
import Box from "@mui/material/Box";
import RadioColorSetting from "../../formSetting/RadioColorSetting";
import blue from "@mui/material/colors/blue";
import purple from "@mui/material/colors/purple";
import SwitchSetting from "../../formSetting/SwitchSetting";
import InputGroupSetting from "../../formSetting/InputGroupSetting";

const CheckboxSettings = () => {
  const {
    openWidget,
    isWidget: { isWidgetCheckbox },
    idItem,
  }: IWidgetState = useSelector((state: IStateWidget) => state.widget);
  const {
    info: { isHideField, title, isRow, color },
  } = useSelector((state: IStateWidget) =>
    !state.widget.checkboxSettings[idItem]
      ? state.widget.checkboxSettings[0]
      : state.widget.checkboxSettings[idItem]
  );
  const memoColor = useMemo(() => {
    return [
      { color: blue[700], name: "primary" },
      { color: purple[500], name: "secondary" },
      { color: green[800], name: "success" },
      { color: red[700], name: "error" },
      { color: pink[800], name: "warning" },
    ];
  }, []);

  if (!openWidget || !isWidgetCheckbox) return null;
  return (
    <>
      <Typography variant="h6" component="h3" mb={2}>
        Multiple Choice Properties
      </Typography>
      <Box mb={2}>
        <InputNameSetting
          label={"Field Label"}
          text={title}
          id={"outlinedInput123"}
          idItem={idItem}
          dispatchUpdate={updateTitleSettingsCheckbox}
        />
      </Box>
      <Box mb={2}>
        <InputGroupSetting
          label={"Add Option"}
          id={"checkboxInput"}
          dispatchAddItem={addSettingsCheckbox}
          dispatchIsAddItem={onIsAddOption}
        />
      </Box>
      <Box mb={2}>
        <RadioColorSetting
          name={"color-radio-button"}
          radioItem={memoColor}
          checked={color}
          title={"Color"}
          dispatchUpdate={updateColorSettingsCheckbox}
        />
      </Box>
      <Box>
        <SwitchSetting
          label={"Hide field"}
          dispatchUpdate={updateHideSettingsCheckbox}
          checked={isHideField}
        />
      </Box>
      <Box mb={2}>
        <SwitchSetting
          label={"Align horizontal"}
          dispatchUpdate={updateRowSettingsCheckbox}
          checked={isRow}
        />
      </Box>
    </>
  );
};
export default memo(CheckboxSettings);
