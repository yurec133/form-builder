import * as React from "react";
import { Layout } from "react-grid-layout";
import { INewWidget } from "../constants/widget";

export const onDragStart = (
  e: React.DragEvent<HTMLDivElement | HTMLButtonElement>,
  item: any
) => {
  const dataList = e.dataTransfer;
  const itemString = JSON.stringify(item);
  dataList.setData("itemWidget", itemString);
};

export const onDrop = (
  layout: Layout[],
  item: Layout,
  e: any,
  addItem: (obj: INewWidget, item: Layout) => void
) => {
  const data = e.dataTransfer.getData("itemWidget");
  const objWidget = JSON.parse(data);
  addItem(objWidget, item);
};

export const onWidthChange = (
  containerWidth: number,
  setBreakpoint: (value: string) => void
) => {
  switch (containerWidth) {
    case 768:
      setBreakpoint("sm");
      break;
    case 1024:
      setBreakpoint("md");
      break;
    case 320:
      setBreakpoint("xxs");
      break;
    case 568:
      setBreakpoint("xs");
      break;
    default:
      setBreakpoint("lg");
  }
};


export const onWidthBreakpoint = (containerWidth: string) => {
  switch(containerWidth.split('p')[0]){
    case '768':
      return 12;
    case '1024':
      return 12;
    case '320':
      return 12;
    case '568':
      return 12
    default :
      return undefined;
  }
}


export const onceDropDragOver = (fn: (isItem: boolean) => void) => {
  let executed = false;
  return function () {
    if (!executed) {
      executed = true;
      return fn(true);
    }
    return null;
  };
};
