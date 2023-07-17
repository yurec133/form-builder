export const drawerWidthRight = 250;
export const WIDGETITEMS = "widgetItems243";
export const WIDGETITEMSTWO = "widgetItemsTwo243";

export const WIDGETSETTINGS = 'widgetSettings243'
export const WIDGETBREAKPOINT = 'widgetBreakpoint243'

export const WIDGETLAYOUTS = "widgetLayouts243";
export const WIDGETLAYOUTSTWO = "widgetLayoutsTwo243";
export const LAYOUTS = "layouts";
export const LAYOUTSTWO = "layoutsTwo";

export interface IWidgetConfig {
  i?: string | undefined;
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number | undefined;
  minH?: number | undefined;
}
export interface INewWidgetConfig {
  w: number;
  h: number;
}

interface ILayoutsConfig {
  //lg: IWidgetConfig;
  //md: IWidgetConfig;
  sm: IWidgetConfig;
  //xs: IWidgetConfig;
  //xxs: IWidgetConfig;
}

export interface IWidgetModal {
  id: string;
  title: string;
  content?: any;
}
export interface INewWidget {
  title: string;
  icon?: string | '',
  isWidget:{
    [t: string] : boolean | undefined
  }
  config:INewWidgetConfig
}
export interface IWidget extends INewWidget {
  id: string;
  title: string;
  config: IWidgetConfig;
}
export interface IWidgets{
  itemsOne:IWidget[],
  itemsTwo: IWidget[]
}
export const NewWidgetConfig: IWidgetConfig = {
  x: 0,
  y: 0,
  w: 1,
  h: 1,
  minW: 1,
  minH: 1,
};

export interface IWidgetSettings {
  item: IWidget;
}


export const widgetsNew:INewWidget[] = [
  {
    title: "Input",
    isWidget: {isWidgetInput: true},
    config:{
      w: 12,
      h: 1,
    }
  },
  {
    title: "TextArea",
    isWidget: {isWidgetTextArea: true},
    config:{
      w: 12,
      h: 2,
    }
  },
  {
    title: "Radio",
    isWidget: {isWidgetRadio: true},
    config:{
      w: 12,
      h: 2.8,
    }
  },
  {
    title: "Checkbox",
    isWidget: {isWidgetCheckbox: true},
    config:{
      w: 12,
      h: 2.8,
    }
  },
  {
    title: "Slider",
    isWidget: {isWidgetSlider: true},
    config:{
      w: 12,
      h: 1,
    }
  },
  {
    title: "Switch",
    isWidget: {isWidgetSwitch: true},
    config:{
      w: 12,
      h: 1,
    }
  },
  {
    title: "Button",
    isWidget: {isWidgetButton: true},
    config:{
      w: 12,
      h: 1,
    }
  },
];


export const widgets:IWidgets = {
  itemsOne:[
    {
      id: "Input0505",
      title: "Input",
      isWidget: {isWidgetInput: true},
      config: {
        x: 0,
        y: 0,
        w: 12,
        h: 1,
        minW: 1,
        minH: 1,
      },
    },
    {
      id: "Input0606",
      title: "Input",
      isWidget: {isWidgetInput: true},
      config: {
        x: 0,
        y: 1,
        w: 8,
        h: 1,
        minW: 1,
        minH: 1,
      },
    },
    {
      id: "Input0654606",
      title: "Input",
      isWidget: {isWidgetInput: true},
      config: {
        x: 8,
        y: 1,
        w: 4,
        h: 1,
        minW: 1,
        minH: 1,
      },
    },
    {
      id: "Input0707",
      title: "Textarea",
      isWidget: {isWidgetTextArea: true},
      config: {
        x: 0,
        y: 3,
        w: 12,
        h: 2,
        minW: 1,
        minH: 1,
      },
    },
    {
      id: "button0101104",
      title: "Button",
      isWidget: {isWidgetButton: true},
      config: {
        x: 4,
        y: 4,
        w: 12,
        h: 1,
        minW: 1,
        minH: 1,
      },
    },
  ],
  itemsTwo:[
    {
      id: "Input050545",
      title: "Input",
      isWidget: {isWidgetInput: true},
      config: {
        x: 0,
        y: 0,
        w: 12,
        h: 1,
        minW: 1,
        minH: 1,
      },
    },
    {
      id: "Input0606785",
      title: "Input",
      isWidget: {isWidgetInput: true},
      config: {
        x: 0,
        y: 1,
        w: 8,
        h: 1,
        minW: 1,
        minH: 1,
      },
    },
    {
      id: "Input06546044d6",
      title: "Input",
      isWidget: {isWidgetInput: true},
      config: {
        x: 8,
        y: 1,
        w: 4,
        h: 1,
        minW: 1,
        minH: 1,
      },
    },
    {
      id: "Input0sddsf25707",
      title: "Textarea",
      isWidget: {isWidgetTextArea: true},
      config: {
        x: 0,
        y: 3,
        w: 12,
        h: 2,
        minW: 1,
        minH: 1,
      },
    },
    {
      id: "buttondfs630101104",
      title: "Button",
      isWidget: {isWidgetButton: true},
      config: {
        x: 4,
        y: 4,
        w: 12,
        h: 1,
        minW: 1,
        minH: 1,
      },
    },
  ]
};
