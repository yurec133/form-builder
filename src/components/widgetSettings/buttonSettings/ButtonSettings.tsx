import React, { useMemo, memo } from "react";
import { green, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import {
  IStateWidget,
  IWidgetState,
  updateButtonSettingsText,
  updateButtonSettingsColor,
  updateButtonSettingsSize,
  updateButtonSettingsVariant,
  updateButtonSettingsAlignment,
} from "../../../redux/widgetSlice";
import Box from "@mui/material/Box";
import purple from "@mui/material/colors/purple";
import blue from "@mui/material/colors/blue";
import SelectSetting from "../../formSetting/SelectSetting";
import RadioColorSetting from "../../formSetting/RadioColorSetting";
import InputNameSetting from "../../formSetting/InputNameSetting";
import Typography from "@mui/material/Typography";
import ButtonAlignmentSetting from "../../formSetting/ButtonAlignmentSetting";

const ButtonSettings = () => {
  const {
    openWidget,
    idItem,
    isWidget: { isWidgetButton },
  }: IWidgetState = useSelector((state: IStateWidget) => state.widget);
  const { text, color, size, variant, alignment } = useSelector(
    (state: IStateWidget) =>
      !state.widget.buttonSettings[idItem]
        ? state.widget.buttonSettings[0]
        : state.widget.buttonSettings[idItem]
  );
  const memoSize = useMemo(() => ["small", "medium", "large"], []);
  const memoVariant = useMemo(() => ["text", "contained", "outlined"], []);
  const memoAlignment = useMemo(() => {
    return [
      { position: "flex-start", name: "Left" },
      { position: "center", name: "Center" },
      { position: "flex-end", name: "Right" },
    ];
  }, []);
  const memoColor = useMemo(() => {
    return [
      { color: blue[700], name: "primary" },
      { color: purple[500], name: "secondary" },
      { color: green[800], name: "success" },
      { color: red[700], name: "error" },
    ];
  }, []);

  if (!openWidget || !isWidgetButton) return null;

  return (
    <>
      <Typography variant="h6" component="h3" mb={2}>
        Submit Properties
      </Typography>
      <Box mb={2}>
        <InputNameSetting
          label={"Button Text"}
          text={text}
          id={"outlinedInput1"}
          idItem={idItem}
          dispatchUpdate={updateButtonSettingsText}
        />
      </Box>
      <Box mb={2}>
        <SelectSetting
          id={"select-size1"}
          title={"Size"}
          value={size}
          dispatchUpdate={updateButtonSettingsSize}
          menuItem={memoSize}
        />
      </Box>
      <Box mb={2}>
        <SelectSetting
          id={"select-size2"}
          title={"Variant"}
          value={variant}
          dispatchUpdate={updateButtonSettingsVariant}
          menuItem={memoVariant}
        />
      </Box>
      <Box mb={2}>
        <RadioColorSetting
          name={"color-radio-button"}
          radioItem={memoColor}
          checked={color}
          title={"Color"}
          dispatchUpdate={updateButtonSettingsColor}
        />
      </Box>
      <Box mb={2}>
        <Typography variant="body1" component="h3" mb={1}>
          Button Alignment
        </Typography>
        <ButtonAlignmentSetting
          value={alignment}
          dispatchUpdate={updateButtonSettingsAlignment}
          color={"primary"}
          toggleButton={memoAlignment}
        />
      </Box>
    </>
  );
};
export default memo(ButtonSettings);
