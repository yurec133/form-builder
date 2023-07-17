import React, { memo } from "react";
import Radio from "@mui/material/Radio";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { IWidgetSettings } from "../../../constants/widget";
import { useDispatch, useSelector } from "react-redux";
import styles from "./WidgetRadio.module.scss";
import {
  IStateWidget,
  updateId,
  removeSettingsRadio,
  IRadioSettings,
  updateCheckSettingsRadio,
} from "../../../redux/widgetSlice";

const WidgetRadio = ({ item: { id } }: IWidgetSettings) => {
  const itemsId = id;
  const {
    items,
    info: { title, isHideField, isRow, color },
  } = useSelector((state: IStateWidget) =>
    !state.widget.radioSettings[itemsId]
      ? state.widget.radioSettings[0]
      : state.widget.radioSettings[itemsId]
  );
  const dispatch = useDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
    value: string,
    itemsId: string
  ) => {
    dispatch(updateId(itemsId));
    dispatch(
      updateCheckSettingsRadio({
        id,
        isChecked: value === event.target.value,
      })
    );
  };

  const handleRemoveItem = (id: string, itemsId: string) => {
    dispatch(updateId(itemsId));
    dispatch(removeSettingsRadio(id));
  };

  return (
    <div className={styles.radioFrame}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
        <RadioGroup
          row={isRow}
          className={styles.radioGroup}
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {items.map(({ id, value, label, isChecked }: IRadioSettings) => {
            return (
              <div className={styles.radioRow} key={id}>
                <FormControlLabel
                  disabled={isHideField}
                  value={value}
                  control={
                    <Radio
                      color={color}
                      checked={isChecked}
                      onChange={(e) => handleChange(e, id, value, itemsId)}
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
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default memo(WidgetRadio);
