import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { memo } from "react";
import styles from "./WidgetButtons.module.scss";
import { IWidgetItem } from "../widget/Widget";
import { useDispatch } from "react-redux";
import { toggleOpenWidget } from "../../redux/widgetSlice";

const WidgetButtons = ({
  handleOpen,
  handleRemoveItem,
  item,
  item: { id },
}: IWidgetItem) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.widgetBtn}>
      <IconButton
        size={"small"}
        aria-label="OpenInNew"
        onClick={() => handleOpen(item)}
      >
        <OpenInNewIcon />
      </IconButton>
      <IconButton
        size={"small"}
        aria-label="Highlight"
        onClick={() => handleRemoveItem(id)}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        size={"small"}
        aria-label="Highlight"
        onClick={() => dispatch(toggleOpenWidget())}
      >
        <SettingsIcon />
      </IconButton>
    </div>
  );
};
export default memo(WidgetButtons);
