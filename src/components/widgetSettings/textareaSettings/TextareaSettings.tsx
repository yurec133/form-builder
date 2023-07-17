import React, { useMemo, memo } from "react";
import Typography from "@mui/material/Typography";
import { green, pink, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import {
  IStateWidget,
  IWidgetState,
  updateLabelSettingsInput,
  updateColorSettingsInput,
  updateMarginSettingsInput,
  updateVariantSettingsInput,
  updateHideSettingsInput,
  updateFocusedSettingsInput,
} from "../../../redux/widgetSlice";
import InputNameSetting from "../../formSetting/InputNameSetting";
import SelectSetting from "../../formSetting/SelectSetting";
import Box from "@mui/material/Box";
import RadioColorSetting from "../../formSetting/RadioColorSetting";
import blue from "@mui/material/colors/blue";
import purple from "@mui/material/colors/purple";
import SwitchSetting from "../../formSetting/SwitchSetting";

const TextareaSettings = () => {
  const {
    openWidget,
    isWidget: { isWidgetTextArea },
    idItem,
  }: IWidgetState = useSelector((state: IStateWidget) => state.widget);
  const { label, color, margin, variant, isHideField, focused } = useSelector(
    (state: IStateWidget) =>
      !state.widget.inputSettings[idItem]
        ? state.widget.inputSettings[0]
        : state.widget.inputSettings[idItem]
  );

  const memoMargin = useMemo(() => {
    return ["dense", "normal", "none"];
  }, []);
  const memoSize = useMemo(() => {
    return ["small", "medium"];
  }, []);
  const memoVariant = useMemo(() => {
    return ["outlined", "filled", "standard"];
  }, []);
  const memoColor = useMemo(() => {
    return [
      { color: blue[700], name: "primary" },
      { color: purple[500], name: "secondary" },
      { color: green[800], name: "success" },
      { color: red[700], name: "error" },
      { color: pink[800], name: "warning" },
    ];
  }, []);

  if (!openWidget || !isWidgetTextArea) return null;

  return (
    <>
      <Typography variant="h6" component="h3" mb={2}>
        Long Text Properties
      </Typography>
      <Box mb={2}>
        <InputNameSetting
          label={"Field Label"}
          text={label}
          id={"outlinedInput2"}
          idItem={idItem}
          dispatchUpdate={updateLabelSettingsInput}
        />
      </Box>
      <Box mb={2}>
        <SelectSetting
          id={"select-margin"}
          title={"Margin"}
          value={margin}
          dispatchUpdate={updateMarginSettingsInput}
          menuItem={memoMargin}
        />
      </Box>
      <Box mb={2}>
        <SelectSetting
          id={"select-variant12"}
          title={"Variant"}
          value={variant}
          dispatchUpdate={updateVariantSettingsInput}
          menuItem={memoVariant}
        />
      </Box>
      <Box mb={2}>
        <RadioColorSetting
          name={"color-radio-button"}
          radioItem={memoColor}
          checked={color}
          title={"Color"}
          dispatchUpdate={updateColorSettingsInput}
        />
      </Box>
      <Box>
        <SwitchSetting
          label={"Hide field"}
          dispatchUpdate={updateHideSettingsInput}
          checked={isHideField}
        />
      </Box>
      <Box mb={2}>
        <SwitchSetting
          label={"Focused"}
          dispatchUpdate={updateFocusedSettingsInput}
          checked={focused}
        />
      </Box>
    </>
  );
};
export default memo(TextareaSettings);
