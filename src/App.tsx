import React from "react";
import { widgets } from "./constants/widget";
import WidgetWrapper from "./components/widgetWrapper/WidgetWrapper";
import { Header } from "./components/header/Header";
import Grid from "@mui/material/Unstable_Grid2";
import { WidgetPanel } from "./components/widgetPanel/WidgetPanel";
import { Container } from "./components/container/Container";
import { WidgetList } from "./components/list/widgetList/WidgetList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <WidgetList />
          <WidgetWrapper items={widgets} />
          <WidgetPanel />
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
