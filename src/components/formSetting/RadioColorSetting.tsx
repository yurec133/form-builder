import React, { memo } from "react";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import { useDispatch } from "react-redux";
import { Ecolor } from "../../redux/widgetSlice";
interface IRadioColorSetting {
  name: string;
  title: string;
  checked: string;
  radioItem: { color: string; name: string }[];
  dispatchUpdate: (payload: Ecolor) => { payload: Ecolor; type: string };
}
const RadioColorSetting = ({
  checked,
  dispatchUpdate,
  title,
  name,
  radioItem,
}: IRadioColorSetting) => {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value as Ecolor
    dispatch(dispatchUpdate(target));
  };
  const controlProps = (item: string) => ({
    checked: checked === item,
    onChange: handleChange,
    value: item,
    name: name,
    inputProps: { "aria-label": item },
  });
  return (
    <div>
      <Typography variant="body1" component="h3">
        {title}
      </Typography>
      {radioItem.map((item, id: number) => {
        return (
          <Radio
            key={id}
            {...controlProps(item.name)}
            sx={{
              color: item.color,
              "&.Mui-checked": {
                color: item.color,
              },
            }}
          />
        );
      })}
    </div>
  );
};

export default memo(RadioColorSetting);
