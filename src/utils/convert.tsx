import IconRadioChecked from "../themes/icons/IconRadio";
import React from "react";
import IconTextarea from "../themes/icons/IconTextarea";
import IconCheckSquare from "../themes/icons/IconCheckSquare";
import IconSlider from "../themes/icons/IconSlider";
import IconSwitch from "../themes/icons/IconSwitch";
import IconBtn from "../themes/icons/IconBtn";
import IconInput from "../themes/icons/IconInput";

export function iconType(icon: string | undefined) {
  switch (icon) {
    case "isWidgetInput":
      return <IconInput />;
    case "isWidgetTextArea":
      return <IconTextarea />;
    case "isWidgetButton":
      return <IconBtn />;
    case "isWidgetRadio":
      return <IconRadioChecked />;
    case "isWidgetCheckbox":
      return <IconCheckSquare />;
    case "isWidgetSlider":
      return <IconSlider />;
    case "isWidgetSwitch":
      return <IconSwitch />;
    default:
      return null;
  }
}
