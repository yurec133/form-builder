import React, { memo } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch } from "react-redux";

interface IIconToggleButton {
  value: string;
  size: "small" | "medium" | "large";
  color:
    | "standard"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  toggleButton: { size: string; icon: React.ReactElement<string> }[];
  dispatchUpdate: (payload: string) => { payload: string; type: string };
}

const IconToggleButton = ({
  toggleButton,
  value,
  color,
  dispatchUpdate,
  size,
}: IIconToggleButton) => {
  const dispatch = useDispatch();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if(newAlignment === null) return null
    dispatch(dispatchUpdate(newAlignment));
  };

  return (
    <ToggleButtonGroup
      color={color}
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      size={size}
    >
      {toggleButton.map(
        (
          item: { size: string; icon: React.ReactElement<string> },
          id: number
        ) => {
          return (
            <ToggleButton key={id} value={item.size}>
              {item.icon}
            </ToggleButton>
          );
        }
      )}
    </ToggleButtonGroup>
  );
};
export default memo(IconToggleButton);
