import React, { memo, useEffect } from "react";
import { IWidget } from "../../constants/widget";
import styles from "./Widget.module.scss";
import cn from "classnames";
import WidgetInputField from "../widgetForm/widgetInputField/WidgetInputField";
import WidgetTextAreaField from "../widgetForm/widgetTextAreaField/WidgetTextAreaField";
import WidgetRadio from "../widgetForm/widgetRadio/WidgetRadio";
import WidgetCheckbox from "../widgetForm/widgetCheckbox/WidgetCheckbox";
import WidgetSlider from "../widgetForm/widgetSlider/WidgetSlider";
import WidgetSwitch from "../widgetForm/widgetSwitch/WidgetSwitch";
import WidgetBtn from "../widgetForm/widgetButton/WidgetButton";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import useElementSize from "../../hooks/useElementSize";
import { IStateWidget, IWidgetState } from "../../redux/widgetSlice";
import { useSelector } from "react-redux";

export interface IWidgetItem {
  handleOpen: (item: IWidget) => void;
  handleRemoveItem: (id: string) => void;
  handleItemSizeChange?: (size: number, id: string) => void;
  item: IWidget;
  activeItem?: boolean;
  children?: ReactJSXElement | false;
}

const Widget = ({
  activeItem,
  children,
  item,
  handleItemSizeChange,
  item: { isWidget, id },
}: IWidgetItem) => {
  const { isAddOption, idItem }: IWidgetState = useSelector(
    (state: IStateWidget) => state.widget
  );
  const [squareRef, { height }] = useElementSize();
  useEffect(() => {
    isAddOption && handleItemSizeChange && handleItemSizeChange(height, idItem);
  }, [isAddOption, idItem]);

  const currentRefItem = id === idItem ? squareRef : null;

  return (
    <div
      className={cn(styles.widget, {
        [styles.widgetActive]: activeItem,
      })}
    >
      <div className={styles.frame} ref={currentRefItem}>
        {children}
        {isWidget.isWidgetInput && <WidgetInputField item={item} />}
        {isWidget.isWidgetTextArea && <WidgetTextAreaField item={item} />}
        {isWidget.isWidgetRadio && <WidgetRadio item={item} />}
        {isWidget.isWidgetCheckbox && <WidgetCheckbox item={item} />}
        {isWidget.isWidgetSlider && <WidgetSlider item={item} />}
        {isWidget.isWidgetSwitch && <WidgetSwitch item={item} />}
        {isWidget.isWidgetButton && <WidgetBtn item={item} />}
      </div>
    </div>
  );
};
export default memo(Widget);
