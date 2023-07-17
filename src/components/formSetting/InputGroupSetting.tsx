import React, { memo, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { ICheckboxSettings } from "../../redux/widgetSlice";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

interface IInputNameSetting {
  id: string;
  label: string;
  className?: string;
  dispatchAddItem: (payload: ICheckboxSettings) => {
    payload: ICheckboxSettings;
    type: string;
  };
  dispatchIsAddItem: (payload: boolean) => {
    payload: boolean;
    type: string;
  };
}

const InputGroupSetting = ({
  id,
  className,
  dispatchIsAddItem,
  dispatchAddItem,
  label,
}: IInputNameSetting) => {
  const newIdItem = uuidv4();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");

  const handleAddItem = (newIdItem: string, name: string) => {
    dispatch(
      dispatchAddItem({
        id: newIdItem,
        value: name.toLowerCase(),
        isChecked: false,
        label: name,
      })
    );
    dispatch(dispatchIsAddItem(true));
    setName("");
  };
  return (
    <Grid container spacing={1} padding={0}>
      <Grid xs={8}>
        <TextField
          label={label}
          className={className}
          size="small"
          value={name}
          id={id}
          variant="outlined"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
      </Grid>
      <Grid xs display="flex">
        <Button
          disabled={!name.trim()}
          onClick={() => handleAddItem(newIdItem, name)}
          size="small"
          variant="outlined"
          style={{ width: "fit-content" }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(InputGroupSetting);
