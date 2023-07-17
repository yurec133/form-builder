import { Layout } from "react-grid-layout";
import { IWidget, WIDGETITEMS } from "../constants/widget";

export const getFromItemsLS = (keyLS: string, item: Layout[] | IWidget[]) => {
  if (global.localStorage) {
    try {
      const savedItem = localStorage.getItem(keyLS);
      if (!savedItem) return item;
      return JSON.parse(savedItem || "");
    } catch (e) {
      /*Ignore*/
    }
  }
};
export const setItemsLS = (items: IWidget[], key: string) => {
  if (global.localStorage) {
    return global.localStorage.setItem(key, JSON.stringify(items));
  }
};

export const setLayoutToLS = (key: string, value: any, keyLC: string) => {
  if (global.localStorage) {
    global.localStorage.setItem(
      keyLC,
      JSON.stringify({
        [key]: value,
      })
    );
  }
};

export const setWidgetConfigToLS = (key: string, listenerApi: any) => {
  if (global.localStorage) {
    global.localStorage.setItem(key, JSON.stringify(listenerApi));
  }
};
export const getWidgetConfigToLS = (keyLS: string | null) => {
  if (global.localStorage && keyLS) {
    try {
      const savedItem = localStorage.getItem(keyLS);
      if (!savedItem) return null;
      return JSON.parse(savedItem || "");
    } catch (e) {
      /*Ignore*/
    }
  }
  return null;
};
export const removeWidgetConfigToLS = (key: string) => {
  if (global.localStorage) {
    global.localStorage.removeItem(key);
  }
};

export const getLayoutFromLS = (
  key: any,
  keyLS: string,
  items: Layout[] | IWidget[]
) => {
  const savedItem = global.localStorage.getItem(keyLS);
  if (!savedItem) return { lg: items };
  const obj = JSON.parse(savedItem || "");
  return obj[key];
};
