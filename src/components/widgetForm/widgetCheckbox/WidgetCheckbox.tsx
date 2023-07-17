import React, { memo } from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { IWidgetSettings } from "../../../constants/widget";
import { useDispatch, useSelector } from "react-redux";
import styles from "./WidgetCheckbox.module.scss";
import {
  IStateWidget,
  updateId,
  removeSettingsCheckbox,
  updateCheckSettingsCheckbox,
  ICheckboxSettings,
} from "../../../redux/widgetSlice";

const WidgetCheckbox = ({ item: { id } }: IWidgetSettings) => {
  const itemsId = id;
  const {
    items,
    info: { title, isHideField, isRow, color },
  } = useSelector((state: IStateWidget) =>
    !state.widget.checkboxSettings[itemsId]
      ? state.widget.checkboxSettings[0]
      : state.widget.checkboxSettings[itemsId]
  );

  const dispatch = useDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
    itemsId: string
  ) => {
    dispatch(updateId(itemsId));
    dispatch(
      updateCheckSettingsCheckbox({ id, isChecked: event.target.checked })
    );
  };

  const handleRemoveItem = (id: string, itemsId: string) => {
    dispatch(updateId(itemsId));
    dispatch(removeSettingsCheckbox(id));
  };

  return (
    <div className={styles.checkboxFrame}>
      <FormControl>
        <FormLabel id="checkbox-buttons-group-label">{title}</FormLabel>
        <FormGroup row={isRow} className={styles.checkboxGroup}>
          {items.map(({ id, value, isChecked, label }: ICheckboxSettings) => {
            return (
              <div className={styles.checkboxRow} key={id}>
                <FormControlLabel
                  disabled={isHideField}
                  value={value}
                  control={
                    <Checkbox
                      color={color}
                      onChange={(e) => handleChange(e, id, itemsId)}
                      checked={isChecked}
                    />
                  }
                  label={label}
                />

                <div className={styles.radioPanel}>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => handleRemoveItem(id, itemsId)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </div>
            );
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
};
export default memo(WidgetCheckbox);
