import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  updateLabelSettingsInput,
  updateColorSettingsInput,
  updateMarginSettingsInput,
  updateSizeSettingsInput,
  updateVariantSettingsInput,
  updateHideSettingsInput,
  updateFocusedSettingsInput,
  updateButtonSettingsText,
  updateButtonSettingsColor,
  updateButtonSettingsSize,
  updateButtonSettingsVariant,
  updateButtonSettingsAlignment,
  addSettingsRadio,
  editSettingsRadio,
  removeSettingsRadio,
  updateHideSettingsRadio,
  updateTitleSettingsRadio,
  updateRowSettingsRadio,
  updateColorSettingsRadio,
  updateCheckSettingsRadio,
  addSettingsCheckbox,
  editSettingsCheckbox,
  removeSettingsCheckbox,
  updateHideSettingsCheckbox,
  updateTitleSettingsCheckbox,
  updateRowSettingsCheckbox,
  updateColorSettingsCheckbox,
  updateCheckSettingsCheckbox,
  toggleOpenWidget,
  onOpenWidget,
  updateSettingsRadio,
  updateSettingsCheckbox,
} from "./widgetSlice";
import { RootState } from "./store";
import { setWidgetConfigToLS } from "../utils/lS";
import { WIDGETBREAKPOINT, WIDGETSETTINGS } from "../constants/widget";
import { handlerBreakpoint, toggleColumns } from "./breakpointSlice";

export const listenerMiddleware = createListenerMiddleware();
export const listenerMiddlewareBreakpoint = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    updateLabelSettingsInput,
    updateColorSettingsInput,
    updateMarginSettingsInput,
    updateSizeSettingsInput,
    updateVariantSettingsInput,
    updateHideSettingsInput,
    updateFocusedSettingsInput,
    updateButtonSettingsText,
    updateButtonSettingsColor,
    updateButtonSettingsSize,
    updateButtonSettingsVariant,
    updateButtonSettingsAlignment,
    addSettingsRadio,
    editSettingsRadio,
    removeSettingsRadio,
    updateHideSettingsRadio,
    updateTitleSettingsRadio,
    updateRowSettingsRadio,
    updateColorSettingsRadio,
    updateCheckSettingsRadio,
    addSettingsCheckbox,
    editSettingsCheckbox,
    removeSettingsCheckbox,
    updateHideSettingsCheckbox,
    updateTitleSettingsCheckbox,
    updateRowSettingsCheckbox,
    updateColorSettingsCheckbox,
    updateCheckSettingsCheckbox,
    toggleOpenWidget,
    onOpenWidget,
    updateSettingsRadio,
    updateSettingsCheckbox
  ),
  effect: (action, listenerApi) => {
    return setWidgetConfigToLS(
      WIDGETSETTINGS,
      (listenerApi.getState() as RootState).widget
    );
  },
});
listenerMiddlewareBreakpoint.startListening({
  matcher: isAnyOf(handlerBreakpoint, toggleColumns),
  effect: (action, listenerApi) => {
    return setWidgetConfigToLS(
      WIDGETBREAKPOINT,
      (listenerApi.getState() as RootState).breakpoint
    );
  },
});
