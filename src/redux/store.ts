import { combineReducers, configureStore } from "@reduxjs/toolkit";
import widgetSlice, { widgetState } from "./widgetSlice";
import modalSlice from "./modalSlice";
import drawerNavSlice from "./drawerNavSlice";
import breakpointSlice, { breakpointState } from "./breakpointSlice";
import { listenerMiddleware, listenerMiddlewareBreakpoint } from "./middleware";
import { getWidgetConfigToLS } from "../utils/lS";
import { WIDGETBREAKPOINT, WIDGETSETTINGS } from "../constants/widget";

const rootReducer = combineReducers({
  widget: widgetSlice,
  modal: modalSlice,
  drawerNav: drawerNavSlice,
  breakpoint: breakpointSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    breakpoint: getWidgetConfigToLS(WIDGETBREAKPOINT) || breakpointState,
    widget: getWidgetConfigToLS(WIDGETSETTINGS) || widgetState,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddlewareBreakpoint.middleware,
    listenerMiddleware.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
