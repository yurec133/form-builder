import React, { memo } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch } from "react-redux";

interface IButtonAlignmentSetting {
  value: string;
  color:
    | "standard"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  toggleButton: { position: string; name: string }[];
  dispatchUpdate: (payload: string) => { payload: string; type: string };
}

const ButtonAlignmentSetting = ({
  toggleButton,
  value,
  color,
  dispatchUpdate,
}: IButtonAlignmentSetting) => {
  const dispatch = useDispatch();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    dispatch(dispatchUpdate(newAlignment));
  };

  return (
    <ToggleButtonGroup
      color={color}
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      size="small"
    >
      {toggleButton.map(
        (item: { position: string; name: string }, id: number) => {
          return (
            <ToggleButton key={id} value={item.position}>
              {item.name}
            </ToggleButton>
          );
        }
      )}
    </ToggleButtonGroup>
  );
};
export default memo(ButtonAlignmentSetting);
