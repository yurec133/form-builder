import React from "react";
import {
  drawerWidthRight,
  INewWidget,
  widgetsNew,
} from "../../../constants/widget";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import InputSearch from "../../form/inputSearch/InputSearch";
import styles from "./WidgetList.module.scss";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WidgetListItem from "./WidgetListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  IDrawerNavState,
  IStateDrawerNav,
  toggleOpenNav,
} from "../../../redux/drawerNavSlice";

export const WidgetList = () => {
  const { openNav }: IDrawerNavState = useSelector(
    (state: IStateDrawerNav) => state.drawerNav
  );
  const dispatch = useDispatch();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>("panel1a");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#f5f5f5",
        },
      }}
      sx={{
        width: drawerWidthRight,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidthRight,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={openNav}
    >
      <div className={styles.header}>
        <IconButton onClick={() => dispatch(toggleOpenNav())}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <div className={styles.widgetList}>
        <InputSearch />
        <Divider style={{ margin: "15px 0" }} />
        <Accordion
          expanded={expanded === "panel1a"}
          onChange={handleChange("panel1a")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Form</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              {widgetsNew.map((item: INewWidget) => {
                return (
                  <Grid xs="auto" padding={0} key={item.title}>
                    <WidgetListItem widgetTemplate={item} />
                  </Grid>
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Category2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}></Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </Drawer>
  );
};
