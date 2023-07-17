import { styled } from "@mui/material/styles";
import { drawerWidthRight } from "../constants/widget";

export const Main = styled("main", {
  shouldForwardProp: (prop) =>
    prop !== "open" &&
    prop !== "openRight" &&
    prop !== "columns" &&
    prop !== "breakpoint",
})<{
  open?: boolean;
  openRight?: boolean;
  columns: boolean;
  breakpoint: string;
}>(({ theme, open, openRight, columns, breakpoint }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(4),
  paddingRight: theme.spacing(6),
  paddingLeft: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidthRight}px`,
  marginRight: `-${drawerWidthRight}px`,
  ...(open && columns
    ? {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }
    : open ||
      (columns && breakpoint) ||
      (!columns && !breakpoint) ||
      (!columns && breakpoint)
    ? {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }
    : {}),
  ...(openRight && columns
    ? {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }
    : openRight ||
      (columns && breakpoint) ||
      (!columns && !breakpoint) ||
      (!columns && breakpoint)
    ? {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }
    : {}),
}));
