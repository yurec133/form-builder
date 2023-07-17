import React, { useCallback } from "react";
import "./style.css";
import { WidthProvider, Layout, Responsive, Layouts } from "react-grid-layout";
import {
  INewWidget,
  IWidget,
  IWidgetModal,
  IWidgets,
  LAYOUTS,
  LAYOUTSTWO,
  WIDGETITEMS,
  WIDGETITEMSTWO,
  WIDGETLAYOUTS,
  WIDGETLAYOUTSTWO,
} from "../../constants/widget";
import FullScreenDialog from "../dialog/Dialog";
import { v4 as uuidv4 } from "uuid";
import Widget from "../widget/Widget";
import {
  getFromItemsLS,
  getLayoutFromLS,
  removeWidgetConfigToLS,
  setItemsLS,
  setLayoutToLS,
} from "../../utils/lS";
import { Main } from "../../utils/drawerStyled";
import { onDrop, onWidthBreakpoint } from "../../utils/dragAndDrop";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import {
  IStateWidget,
  IWidgetState,
  onIsAddOption,
  onOpenWidget,
  updateConfigWidget,
  updateId,
  updateIsWidget,
  updateSettingsCheckbox,
  updateSettingsRadio,
} from "../../redux/widgetSlice";
import {
  IModalState,
  IStateModal,
  modalFullItemClose,
  modalFullItemOpen,
} from "../../redux/modalSlice";
import { IDrawerNavState, IStateDrawerNav } from "../../redux/drawerNavSlice";
import {
  IBreakpointState,
  IStateBreakpoint,
} from "../../redux/breakpointSlice";
import WidgetButtons from "../widgetButtons/WidgetButtons";
import styles from "./WidgetWrapper.module.scss";

const ResponsiveGridLayout = WidthProvider(Responsive);

type Props = {
  className?: string;
  cols?: { [x: string]: number };
  items: IWidgets;
  rowHeight?: number;
};

const WidgetWrapper = ({
  cols = { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 },
  items: { itemsOne, itemsTwo },
  rowHeight = 70,
}: Props) => {
  const { openWidget }: IWidgetState = useSelector(
    (state: IStateWidget) => state.widget
  );

  const { openNav }: IDrawerNavState = useSelector(
    (state: IStateDrawerNav) => state.drawerNav
  );
  const { modalFullItem }: IModalState = useSelector(
    (state: IStateModal) => state.modal
  );
  const { breakpoint, columns }: IBreakpointState = useSelector(
    (state: IStateBreakpoint) => state.breakpoint
  );
  const dispatch = useDispatch();

  const [itemsWidget, setItemsWidget] = React.useState<IWidget[]>(
    getFromItemsLS(WIDGETITEMS, itemsOne)
  );
  const [itemsWidgetTwo, setItemsWidgetTwo] = React.useState<IWidget[]>(
    getFromItemsLS(WIDGETITEMSTWO, itemsTwo)
  );

  const layoutFromItems = React.useMemo(() => generateLayout(itemsWidget), []);
  const layoutFromItemsTwo = React.useMemo(
    () => generateLayout(itemsWidgetTwo),
    []
  );
  const originalLayouts =
    getLayoutFromLS(LAYOUTS, WIDGETLAYOUTS, layoutFromItems) || {};

  const originalLayoutsTwo =
    getLayoutFromLS(LAYOUTSTWO, WIDGETLAYOUTSTWO, layoutFromItemsTwo) || {};

  const [idItem, setIdItem] = React.useState<string>("0");
  const [layouts, setLayouts] = React.useState<Layouts>(originalLayouts);
  const [layoutsTwo, setLayoutsTwo] =
    React.useState<Layouts>(originalLayoutsTwo);
  const [breakpointLayout, setBreakpointLayout] = React.useState<string>("lg");
  const [selectedID, setSelectedID] = React.useState<string>("");
  const [contentModal, setContentModal] = React.useState<IWidgetModal>({
    id: "",
    title: "",
    content: "",
  });

  const currentLayout = React.useMemo(
    () => getCurrentLayout(idItem),
    [idItem, layouts]
  );
  React.useEffect(() => {
    setItemsLS(itemsWidget, WIDGETITEMS);
    setItemsLS(itemsWidgetTwo, WIDGETITEMSTWO);
  }, [itemsWidget, itemsWidgetTwo]);

  React.useEffect(() => {
    if (openWidget && currentLayout[0] !== undefined) {
      dispatch(updateConfigWidget(currentLayout[0]));
    }
  }, [idItem, layouts, openWidget]);

  const handleRemoveItem = useCallback((id: string) => {
    setItemsWidget((current: IWidget[]) => {
      return current.filter((item) => {
        return item.id !== id;
      });
    });
    removeWidgetConfigToLS(id);
    dispatch(onOpenWidget(false));
  }, []);

  const handleRemoveItemTwo = useCallback((id: string) => {
    setItemsWidgetTwo((current: IWidget[]) => {
      return current.filter((item) => {
        return item.id !== id;
      });
    });
    removeWidgetConfigToLS(id);
    dispatch(onOpenWidget(false));
  }, []);
  const widgetUpdate = (type: {}, id: string) => {
    const widget: {
      [s: string]: () => void;
    } = {
      isWidgetRadio: () => {
        dispatch(updateId(id));
        dispatch(updateSettingsRadio());
      },
      isWidgetCheckbox: () => {
        dispatch(updateId(id));
        dispatch(updateSettingsCheckbox());
      },
      default: () => {
        return undefined;
      },
    };
    return (widget[Object.keys(type)[0]] || widget["default"])();
  };
  const handleAddItem = (obj: INewWidget, item: Layout) => {
    const idItem = uuidv4();
    const { config } = obj;
    setLayouts((current: Layouts) => {
      const arr = [
        {
          h: config.h,
          i: idItem,
          w: config.w,
          x: item.x,
          y: item.y,
        },
        ...current[breakpointLayout],
      ];
      return {
        ...current,
        [breakpointLayout]: [...arr],
        ["lg"]: [...arr],
        ["xs"]: [...arr],
        ["xxs"]: [...arr],
        ["md"]: [...arr],
        ["sm"]: [...arr],
      };
    });
    setItemsWidget((current: IWidget[]) => [
      {
        ...obj,
        id: idItem,
        config: {
          x: item.x,
          y: item.y,
          h: config.h,
          w: config.w,
        },
      },
      ...current,
    ]);
    const { isWidget } = obj;
    widgetUpdate(isWidget, idItem);
    if (!gridBreakpoint && columns) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 500);
    }
  };
  const handleAddItemTwo = (obj: INewWidget, item: Layout) => {
    const idItem = uuidv4();
    const { config } = obj;
    setLayoutsTwo((current: Layouts) => {
      const arr = [
        {
          h: config.h,
          i: idItem,
          w: config.w,
          x: item.x,
          y: item.y,
        },
        ...current[breakpointLayout],
      ];
      return {
        ...current,
        [breakpointLayout]: [...arr],
        ["lg"]: [...arr],
        ["xs"]: [...arr],
        ["xxs"]: [...arr],
        ["md"]: [...arr],
        ["sm"]: [...arr],
      };
    });
    setItemsWidgetTwo((current: IWidget[]) => [
      {
        ...obj,
        id: idItem,
        config: {
          x: item.x,
          y: item.y,
          h: config.h,
          w: config.w,
        },
      },
      ...current,
    ]);
    const { isWidget } = obj;
    widgetUpdate(isWidget, idItem);
    if (!gridBreakpoint && columns) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 500);
    }
  };

  const handleOpen = useCallback(
    (items: IWidgetModal) => {
      dispatch(modalFullItemOpen());
      setContentModal(items);
    },
    [dispatch]
  );

  const handleClose = () => dispatch(modalFullItemClose());

  function getCurrentLayout(id: string) {
    if (!openWidget) return [];
    return layouts[breakpointLayout].filter((item: Layout) => {
      return item.i === id;
    });
  }

  function generateLayout(items: IWidget[]) {
    return items.map((item: IWidget) => {
      return {
        ...item.config,
        i: item.id,
      };
    });
  }

  const handleOnClick = (id: string, item: IWidget) => {
    setSelectedID(id);
    openWidget && setIdItem(id);
    dispatch(updateId(id));
    const isWidget = Object.keys(item.isWidget)[0];
    dispatch(updateIsWidget({ [isWidget]: true }));
  };
  const handleItemSizeChange = useCallback(
    (size: number, id: string) => {
      if (!size) return null;
      const isLayouts = layouts[breakpointLayout].some(({ i }) => {
        return i === id;
      });
      const newHeightBox = size + rowHeight / 2;
      const newHeight = newHeightBox / rowHeight;
      if (isLayouts) {
        setLayouts((current: Layouts) => {
          const currentArr = current[breakpointLayout];
          const currentItems = currentArr.map((item: Layout) => {
            if (item.i === id)
              return {
                ...item,
                h: newHeight,
              };
            return item;
          });
          return {
            ...current,
            [breakpointLayout]: currentItems,
            ["lg"]: currentItems,
            ["xs"]: currentItems,
            ["xxs"]: currentItems,
            ["md"]: currentItems,
            ["sm"]: currentItems,
          };
        });
      } else {
        setLayoutsTwo((current: Layouts) => {
          const currentArr = current[breakpointLayout];
          const currentItems = currentArr.map((item: Layout) => {
            if (item.i === id)
              return {
                ...item,
                h: newHeight,
              };
            return item;
          });
          return {
            ...current,
            [breakpointLayout]: currentItems,
            ["lg"]: currentItems,
            ["xs"]: currentItems,
            ["xxs"]: currentItems,
            ["md"]: currentItems,
            ["sm"]: currentItems,
          };
        });
      }
      dispatch(onIsAddOption(false));
    },
    [layouts]
  );

  const generateDOM = (
    itemsWidget: IWidget[],
    handleRemoveItem: (id: string) => void
  ) => {
    return itemsWidget.map((item: IWidget) => {
      const activeItem = selectedID === item.id;
      return (
        <div
          className={`grid-item ${activeItem && "grid-item-active"} `}
          key={item.id}
          onClick={() => handleOnClick(item.id, item)}
        >
          <Widget
            handleOpen={handleOpen}
            handleRemoveItem={handleRemoveItem}
            item={item}
            activeItem={activeItem}
            handleItemSizeChange={handleItemSizeChange}
          >
            {activeItem && (
              <WidgetButtons
                item={item}
                handleRemoveItem={handleRemoveItem}
                handleOpen={handleOpen}
              />
            )}
          </Widget>
        </div>
      );
    });
  };

  const onDropDragOver = () => {
    return { w: 12, h: 1 };
  };

  const handleOnLayoutChange = (layout: Layout[], layouts: Layouts) => {
    setTimeout(() => {
      setLayouts(layouts);
    }, 300);
    setLayoutToLS(LAYOUTS, layouts, WIDGETLAYOUTS);
  };
  const handleOnLayoutChangeTwo = (layout: Layout[], layouts: Layouts) => {
    setTimeout(() => {
      setLayoutsTwo(layouts);
    }, 300);
    setLayoutToLS(LAYOUTSTWO, layouts, WIDGETLAYOUTSTWO);
  };
  const gridBreakpoint = onWidthBreakpoint(breakpoint);
  return (
    <Main
      open={openNav}
      openRight={openWidget}
      columns={columns}
      breakpoint={breakpoint}
    >
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "1822px",
          width: `${breakpoint ? breakpoint : "auto"}`,
        }}
      >
        <Grid container className={styles.gridContainer} spacing={0}>
          <Grid
            xs={
              !gridBreakpoint && !columns
                ? 6
                : !gridBreakpoint && columns
                ? 10
                : 12
            }
          >
            <Grid container spacing={5} className={styles.grid}>
              <Grid
                className={styles.gridItem}
                md={
                  !gridBreakpoint && !columns
                    ? 12
                    : !columns
                    ? 12
                    : gridBreakpoint || 6
                }
                sm={gridBreakpoint || 12}
                xs={gridBreakpoint || 12}
              >
                <ResponsiveGridLayout
                  cols={cols}
                  autoSize={true}
                  layouts={layouts}
                  breakpoints={{
                    lg: 1000,
                    md: 740,
                    sm: 600,
                    xs: 468,
                    xxs: 320,
                  }}
                  onLayoutChange={handleOnLayoutChange}
                  margin={[0, 0]}
                  useCSSTransforms={true}
                  rowHeight={rowHeight}
                  onDrop={(layout: Layout[], item: Layout, e: Event) =>
                    onDrop(layout, item, e, handleAddItem)
                  }
                  isDroppable={true}
                  onDropDragOver={onDropDragOver}
                  compactType={"vertical"}
                  onBreakpointChange={(newBreakpoint: string) => {
                    setBreakpointLayout(newBreakpoint);
                  }}
                >
                  {generateDOM(itemsWidget, handleRemoveItem)}
                </ResponsiveGridLayout>
              </Grid>
              {columns && (
                <Grid
                  className={styles.gridItem}
                  md={gridBreakpoint || 6}
                  sm={gridBreakpoint || 12}
                  xs={gridBreakpoint || 12}
                >
                  <ResponsiveGridLayout
                    autoSize={true}
                    cols={cols}
                    layouts={layoutsTwo}
                    breakpoints={{
                      lg: 1000,
                      md: 740,
                      sm: 600,
                      xs: 468,
                      xxs: 320,
                    }}
                    onLayoutChange={handleOnLayoutChangeTwo}
                    margin={[0, 0]}
                    useCSSTransforms={true}
                    rowHeight={rowHeight}
                    onDrop={(layout: Layout[], item: Layout, e: Event) =>
                      onDrop(layout, item, e, handleAddItemTwo)
                    }
                    isDroppable={true}
                    onDropDragOver={onDropDragOver}
                    compactType={"vertical"}
                    onBreakpointChange={(newBreakpoint: string) => {
                      setBreakpointLayout(newBreakpoint);
                    }}
                  >
                    {generateDOM(itemsWidgetTwo, handleRemoveItemTwo)}
                  </ResponsiveGridLayout>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <FullScreenDialog
        handleClose={handleClose}
        open={modalFullItem}
        items={contentModal}
      />
    </Main>
  );
};

export default WidgetWrapper;
