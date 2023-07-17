import React, { memo, useState } from "react";
import TextField from "@mui/material/TextField";
import useDebounce from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";

interface IInputNameSetting {
  id: string;
  label: string;
  text: string;
  idItem: string;
  dispatchUpdate: (payload: string) => { payload: string; type: string };
}

const InputNameSetting = ({
  id,
  text,
  idItem,
  label,
  dispatchUpdate,
}: IInputNameSetting) => {
  const dispatch = useDispatch();
  const [isChangeInput, setIsChangeInput] = React.useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const debouncedValue = useDebounce<string>(name, 500);
  React.useEffect(() => {
    if (isChangeInput) {
      dispatch(dispatchUpdate(name));
    }
  }, [debouncedValue, isChangeInput]);

  React.useEffect(() => {
    setName(text);
  }, [idItem]);

  return (
    <TextField
      size="small"
      id={id}
      label={label}
      variant="outlined"
      value={name}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChangeInput(true);
        setName(event.target.value);
      }}
    />
  );
};

export default memo(InputNameSetting);
