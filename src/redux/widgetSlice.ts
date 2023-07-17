import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWidgetConfig, NewWidgetConfig } from "../constants/widget";

interface IIsWidget {
  [n: string]: boolean | undefined;
}

export interface IRadioSettings {
  label: string;
  value: string;
  id: string;
  isChecked: boolean;
}
export interface ICheckboxSettings {
  label: string;
  value: string;
  id: string;
  isChecked: boolean;
}
interface ISettingsCheck {
  id: string;
  isChecked: boolean;
}
export enum Ecolor {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  error = "error",
  warning = "warning",
}
export interface IWidgetState {
  openWidget: boolean;
  idItem: string;
  isAddOption: boolean;
  isWidget: {
    [n: string]: boolean | undefined;
  };
  configWidget: IWidgetConfig;
  inputSettings: {
    [key: string | number]: {
      label: string;
      color: Ecolor;
      size: string;
      variant: string;
      margin: string;
      isHideField: boolean;
      focused: boolean;
    };
  };
  buttonSettings: {
    [key: string | number]: {
      [n: string]: string;
    };
  };
  radioSettings: {
    [key: string | number]: {
      info: {
        title: string;
        isHideField: boolean;
        isRow: boolean;
        color: Ecolor;
      };
      items: IRadioSettings[];
    };
  };
  checkboxSettings: {
    [key: string | number]: {
      info: {
        title: string;
        isHideField: boolean;
        isRow: boolean;
        color: Ecolor;
      };
      items: ICheckboxSettings[];
    };
  };
  switchSettings: {
    [key: string | number]: {
      color: Ecolor;
      isHideField: boolean;
      label: string;
      size: string;
      alignment: string;
    };
  };
}
export interface IStateWidget {
  widget: IWidgetState;
}

const initialState = {
  configWidget: NewWidgetConfig,
  openWidget: false,
  idItem: "0",
  isAddOption: false,
  isWidget: {
    isWidgetInput: false,
    isWidgetButton: false,
    isWidgetTextArea: false,
    isWidgetRadio: false,
    isWidgetCheckbox: false,
    isWidgetSlider: false,
    isWidgetSwitch: false,
  },
  inputSettings: {
    [0]: {
      label: "secondary",
      color: "primary",
      size: "medium",
      variant: "outlined",
      margin: "none",
      isHideField: false,
      focused: true,
    },
  },
  buttonSettings: {
    [0]: {
      text: "Submit",
      color: "primary",
      size: "medium",
      variant: "contained",
      alignment: "flex-end",
    },
  },
  radioSettings: {
    [0]: {
      info: {
        title: "Type a question",
        isHideField: false,
        isRow: false,
        color: "primary",
      },
      items: [
        {
          id: "01",
          value: "female",
          label: "Female",
          isChecked: true,
        },
        {
          id: "02",
          value: "male",
          label: "Male",
          isChecked: false,
        },
        {
          id: "03",
          value: "other",
          label: "Other",
          isChecked: false,
        },
      ],
    },
  },
  checkboxSettings: {
    [0]: {
      info: {
        title: "Type a question",
        isHideField: false,
        isRow: false,
        color: "primary",
      },
      items: [
        {
          id: "01",
          value: "female",
          label: "Female",
          isChecked: true,
        },
        {
          id: "02",
          value: "male",
          label: "Male",
          isChecked: true,
        },
        {
          id: "03",
          value: "other",
          label: "Other",
          isChecked: false,
        },
      ],
    },
  },
  switchSettings: {
    [0]: {
      label: "Label",
      color: "primary",
      size: "small",
      isHideField: false,
      alignment: "flex-start",
    },
  },
} as IWidgetState;
export const widgetState = initialState;
const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    toggleOpenWidget(state) {
      state.openWidget = !state.openWidget;
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 700);
    },
    onOpenWidget(state, action: PayloadAction<boolean>) {
      state.openWidget = action.payload;
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 700);
    },
    onIsAddOption(state, action: PayloadAction<boolean>) {
      state.isAddOption = action.payload;
    },
    updateLabelSettingsInput(state, action: PayloadAction<string>) {
      state.inputSettings = {
        ...state.inputSettings,
        [state.idItem || 0]: {
          ...state.inputSettings[0],
          ...state.inputSettings[state.idItem],
          label: action.payload,
        },
      };
    },
    updateFocusedSettingsInput(state, action: PayloadAction<boolean>) {
      state.inputSettings = {
        ...state.inputSettings,
        [state.idItem || 0]: {
          ...state.inputSettings[0],
          ...state.inputSettings[state.idItem],
          focused: action.payload,
        },
      };
    },
    updateColorSettingsInput(state, action: PayloadAction<Ecolor>) {
      state.inputSettings = {
        ...state.inputSettings,
        [state.idItem || 0]: {
          ...state.inputSettings[0],
          ...state.inputSettings[state.idItem],
          color: action.payload,
        },
      };
    },
    updateMarginSettingsInput(state, action: PayloadAction<string>) {
      state.inputSettings = {
        ...state.inputSettings,
        [state.idItem || 0]: {
          ...state.inputSettings[0],
          ...state.inputSettings[state.idItem],
          margin: action.payload,
        },
      };
    },
    updateSizeSettingsInput(state, action: PayloadAction<string>) {
      state.inputSettings = {
        ...state.inputSettings,
        [state.idItem || 0]: {
          ...state.inputSettings[0],
          ...state.inputSettings[state.idItem],
          size: action.payload,
        },
      };
    },
    updateVariantSettingsInput(state, action: PayloadAction<string>) {
      state.inputSettings = {
        ...state.inputSettings,
        [state.idItem || 0]: {
          ...state.inputSettings[0],
          ...state.inputSettings[state.idItem],
          variant: action.payload,
        },
      };
    },
    updateButtonSettingsText(state, action: PayloadAction<string>) {
      state.buttonSettings = {
        ...state.buttonSettings,
        [state.idItem || 0]: {
          ...state.buttonSettings[0],
          ...state.buttonSettings[state.idItem],
          text: action.payload,
        },
      };
    },
    updateButtonSettingsColor(state, action: PayloadAction<Ecolor>) {
      state.buttonSettings = {
        ...state.buttonSettings,
        [state.idItem || 0]: {
          ...state.buttonSettings[0],
          ...state.buttonSettings[state.idItem],
          color: action.payload,
        },
      };
    },
    updateButtonSettingsSize(state, action: PayloadAction<string>) {
      state.buttonSettings = {
        ...state.buttonSettings,
        [state.idItem || 0]: {
          ...state.buttonSettings[0],
          ...state.buttonSettings[state.idItem],
          size: action.payload,
        },
      };
    },
    updateButtonSettingsVariant(state, action: PayloadAction<string>) {
      state.buttonSettings = {
        ...state.buttonSettings,
        [state.idItem || 0]: {
          ...state.buttonSettings[0],
          ...state.buttonSettings[state.idItem],
          variant: action.payload,
        },
      };
    },
    updateButtonSettingsAlignment(state, action: PayloadAction<string>) {
      state.buttonSettings = {
        ...state.buttonSettings,
        [state.idItem || 0]: {
          ...state.buttonSettings[0],
          ...state.buttonSettings[state.idItem],
          alignment: action.payload,
        },
      };
    },
    updateHideSettingsInput(state, action: PayloadAction<boolean>) {
      state.inputSettings = {
        ...state.inputSettings,
        [state.idItem || 0]: {
          ...state.inputSettings[0],
          ...state.inputSettings[state.idItem],
          isHideField: action.payload,
        },
      };
    },

    updateSettingsRadio(state) {
      state.radioSettings = {
        ...state.radioSettings,
        [state.idItem]: {
          info: state.radioSettings[0].info,
          items: state.radioSettings[0].items,
        },
      };
    },
    addSettingsRadio(state, action: PayloadAction<IRadioSettings>) {
      state.radioSettings[state.idItem].items = [
        ...state.radioSettings[state.idItem].items,
        action.payload,
      ];
    },
    editSettingsRadio(state, action: PayloadAction<IRadioSettings>) {
      state.radioSettings[state.idItem].items = [
        ...state.radioSettings[state.idItem].items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                value: action.payload.value,
                label: action.payload.label,
              }
            : item
        ),
      ];
    },
    removeSettingsRadio(state, action: PayloadAction<string>) {
      state.radioSettings[state.idItem].items = [
        ...state.radioSettings[state.idItem].items.filter(
          (item) => item.id !== action.payload
        ),
      ];
    },
    updateHideSettingsRadio(state, action: PayloadAction<boolean>) {
      state.radioSettings[state.idItem].info.isHideField = action.payload;
    },
    updateTitleSettingsRadio(state, action: PayloadAction<string>) {
      state.radioSettings[state.idItem].info.title = action.payload;
    },
    updateRowSettingsRadio(state, action: PayloadAction<boolean>) {
      state.radioSettings[state.idItem].info.isRow = action.payload;
    },
    updateColorSettingsRadio(state, action: PayloadAction<Ecolor>) {
      state.radioSettings[state.idItem].info.color = action.payload;
    },
    updateCheckSettingsRadio(state, action: PayloadAction<ISettingsCheck>) {
      state.radioSettings[state.idItem].items = [
        ...state.radioSettings[state.idItem].items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                isChecked: action.payload.isChecked,
              }
            : { ...item, isChecked: false }
        ),
      ];
    },

    updateSettingsCheckbox(state) {
      state.checkboxSettings = {
        ...state.checkboxSettings,
        [state.idItem]: {
          info: state.checkboxSettings[0].info,
          items: state.checkboxSettings[0].items,
        },
      };
    },
    addSettingsCheckbox(state, action: PayloadAction<ICheckboxSettings>) {
      state.checkboxSettings[state.idItem].items = [
        ...state.checkboxSettings[state.idItem].items,
        action.payload,
      ];
    },
    editSettingsCheckbox(state, action: PayloadAction<ICheckboxSettings>) {
      state.checkboxSettings[state.idItem].items = [
        ...state.checkboxSettings[state.idItem].items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                value: action.payload.value,
                label: action.payload.label,
              }
            : item
        ),
      ];
    },
    updateCheckSettingsCheckbox(state, action: PayloadAction<ISettingsCheck>) {
      state.checkboxSettings[state.idItem].items = [
        ...state.checkboxSettings[state.idItem].items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                isChecked: action.payload.isChecked,
              }
            : item
        ),
      ];
    },
    removeSettingsCheckbox(state, action: PayloadAction<string>) {
      state.checkboxSettings[state.idItem].items = [
        ...state.checkboxSettings[state.idItem].items.filter(
          (item) => item.id !== action.payload
        ),
      ];
    },
    updateHideSettingsCheckbox(state, action: PayloadAction<boolean>) {
      state.checkboxSettings[state.idItem].info.isHideField = action.payload;
    },
    updateTitleSettingsCheckbox(state, action: PayloadAction<string>) {
      state.checkboxSettings[state.idItem].info.title = action.payload;
    },
    updateRowSettingsCheckbox(state, action: PayloadAction<boolean>) {
      state.checkboxSettings[state.idItem].info.isRow = action.payload;
    },
    updateColorSettingsCheckbox(state, action: PayloadAction<Ecolor>) {
      state.checkboxSettings[state.idItem].info.color = action.payload;
    },
    updateSwitchSettingsLabel(state, action: PayloadAction<string>) {
      state.switchSettings = {
        ...state.switchSettings,
        [state.idItem]: {
          ...state.switchSettings[0],
          ...state.switchSettings[state.idItem],
          label: action.payload,
        },
      };
    },
    updateSwitchSettingsSize(state, action: PayloadAction<string>) {
      state.switchSettings = {
        ...state.switchSettings,
        [state.idItem]: {
          ...state.switchSettings[0],
          ...state.switchSettings[state.idItem],
          size: action.payload,
        },
      };
    },
    updateSwitchSettingsColor(state, action: PayloadAction<Ecolor>) {
      state.switchSettings = {
        ...state.switchSettings,
        [state.idItem]: {
          ...state.switchSettings[0],
          ...state.switchSettings[state.idItem],
          color: action.payload,
        },
      };
    },
    updateSwitchSettingsHide(state, action: PayloadAction<boolean>) {
      state.switchSettings = {
        ...state.switchSettings,
        [state.idItem]: {
          ...state.switchSettings[0],
          ...state.switchSettings[state.idItem],
          isHideField: action.payload,
        },
      };
    },
    updateSwitchSettingsAlignment(state, action: PayloadAction<string>) {
      state.switchSettings = {
        ...state.switchSettings,
        [state.idItem]: {
          ...state.switchSettings[0],
          ...state.switchSettings[state.idItem],
          alignment: action.payload,
        },
      };
    },
    updateId(state, action: PayloadAction<string>) {
      state.idItem = action.payload;
    },
    updateIsWidget(state, action: PayloadAction<IIsWidget>) {
      state.isWidget = action.payload;
    },
    updateConfigWidget(state, action: PayloadAction<IWidgetConfig>) {
      state.configWidget.x = action.payload.x;
      state.configWidget.y = action.payload.y;
      state.configWidget.w = action.payload.w;
      state.configWidget.h = action.payload.h;
      state.configWidget.minH = action.payload.minH;
      state.configWidget.minW = action.payload.minW;
    },
  },
});

export const {
  updateConfigWidget,
  toggleOpenWidget,
  updateId,
  updateIsWidget,
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
  updateSettingsRadio,
  addSettingsRadio,
  editSettingsRadio,
  removeSettingsRadio,
  updateHideSettingsRadio,
  updateTitleSettingsRadio,
  updateRowSettingsRadio,
  updateColorSettingsRadio,
  updateCheckSettingsRadio,
  updateSettingsCheckbox,
  addSettingsCheckbox,
  editSettingsCheckbox,
  removeSettingsCheckbox,
  updateHideSettingsCheckbox,
  updateTitleSettingsCheckbox,
  updateRowSettingsCheckbox,
  updateColorSettingsCheckbox,
  updateCheckSettingsCheckbox,
  updateSwitchSettingsLabel,
  updateSwitchSettingsSize,
  updateSwitchSettingsColor,
  updateSwitchSettingsHide,
  updateSwitchSettingsAlignment,
  onIsAddOption,
  onOpenWidget,
} = widgetSlice.actions;
export default widgetSlice.reducer;
