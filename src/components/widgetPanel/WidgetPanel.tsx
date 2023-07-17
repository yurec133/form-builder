import React from "react";
import Drawer from "@mui/material/Drawer";
import { drawerWidthRight } from "../../constants/widget";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { renderWidgetInfo } from "../../utils/tableStyled";
import styles from "./WidgetPanel.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  IStateWidget,
  IWidgetState, onOpenWidget
} from "../../redux/widgetSlice";
import ButtonSettings from "../widgetSettings/buttonSettings/ButtonSettings";
import InputSettings from "../widgetSettings/inputSettings/InputSettings";
import TextareaSettings from "../widgetSettings/textareaSettings/TextareaSettings";
import RadioSettings from "../widgetSettings/radioSettings/RadioSettings";
import CheckboxSettings from "../widgetSettings/checkboxSettings/CheckboxSettings";
import SwitchSettings from "../widgetSettings/switchSettings/SwitchSettings";

export const WidgetPanel = () => {
  const dispatch = useDispatch();
  const { configWidget, openWidget }: IWidgetState = useSelector(
    (state: IStateWidget) => state.widget
  );
  const theme = useTheme();

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#f5f5f5",
        },
      }}
      sx={{
        width: drawerWidthRight,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidthRight,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={openWidget}
    >
      <div className={styles.header}>
        <IconButton onClick={() => dispatch(onOpenWidget(false))}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <div className={styles.frame}>
        <InputSettings />
        <TextareaSettings />
        <ButtonSettings />
        <RadioSettings />
        <CheckboxSettings />
        <SwitchSettings />
        <Paper elevation={2}>{renderWidgetInfo(configWidget)}</Paper>
      </div>
    </Drawer>
  );
};
