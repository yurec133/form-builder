import React, { memo } from "react";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";

interface ISwitchSetting {
  label: string;
  checked: boolean;
  dispatchUpdate: (payload: boolean) => { payload: boolean; type: string };
}

const SwitchSetting = ({ label, dispatchUpdate, checked }: ISwitchSetting) => {
  const dispatch = useDispatch();
  const switchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(dispatchUpdate(event.target.checked));
  };
  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} onChange={switchHandler} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default memo(SwitchSetting);
