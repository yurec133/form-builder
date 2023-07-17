import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IWidgetModal } from "../../constants/widget";
import Box from "@mui/material/Box";

interface IDialog {
  handleClose: () => void;
  open: boolean;
  items: IWidgetModal;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  handleClose,
  open,
  items,
}: IDialog) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="div" sx={{ p: 4 }}>
        <Typography mb={5} id="modal-modal-title" variant="h3" component="h2">
          {items.title}
        </Typography>
        <img width={800} src={items.content} alt="Static Chart" />
      </Box>
    </Dialog>
  );
}
