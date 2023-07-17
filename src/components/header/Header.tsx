import React, { useMemo } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import AppBar from "@mui/material/AppBar";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenNav } from "../../redux/drawerNavSlice";
import {onOpenWidget} from "../../redux/widgetSlice";
import ToggleButton from "@mui/material/ToggleButton";
import {
  handlerBreakpoint,
  IBreakpointState,
  IStateBreakpoint,
  toggleColumns,
} from "../../redux/breakpointSlice";
import IconToggleButton from "../button/IconToggleButton/IconToggleButton";
import IconColumns from "../../themes/icons/IconColumns";

export const Header = () => {
  const { breakpoint, columns }: IBreakpointState = useSelector(
    (state: IStateBreakpoint) => state.breakpoint
  );
  const dispatch = useDispatch();
  const memoToggleButton = useMemo(() => {
    return [
      { size: "", icon: <DesktopMacOutlinedIcon /> },
      { size: "768px", icon: <TabletAndroidIcon /> },
      {
        size: "1024px",
        icon: <TabletAndroidIcon style={{ transform: "rotate(90deg)" }} />,
      },
      { size: "320px", icon: <PhoneAndroidOutlinedIcon /> },
      {
        size: "568px",
        icon: (
          <PhoneAndroidOutlinedIcon style={{ transform: "rotate(90deg)" }} />
        ),
      },
    ];
  }, []);
  return (
    <AppBar position="fixed" color={"default"}>
      <Toolbar className={styles.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => dispatch(toggleOpenNav())}
        >
          <MenuIcon />
        </IconButton>
        <div className={styles.frame}>
          <ToggleButton
            className={styles.toggleButton}
            value="check"
            selected={columns}
            onChange={() => dispatch(toggleColumns())}
          >
            <IconColumns />
          </ToggleButton>
          <IconToggleButton
            value={breakpoint}
            dispatchUpdate={handlerBreakpoint}
            size={"small"}
            color={"standard"}
            toggleButton={memoToggleButton}
          />
        </div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(onOpenWidget(true))}
        >
          <VerticalSplitIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
