declare module '@guoguolong/lib-ts' {
  export type EntityColumnLabelFunc = (
    path: string | any,
    value: Array<any> | any,
    isBackend?: boolean
  ) => string;

  export type Helper = {
    getEntityColumnLabel: EntityColumnLabelFunc;
    joinObjectToUrlPath: any;
    splitUrlPathToObject: any;
  };

  export type Pair = {
    value: any;
    label: string;
    color: string | undefined;
  };

  export type Constants = {
    ct: {
      IOS: number;
      ANDROID: number;
    };
    channel: {
      WECHAT: Pair;
      ALIPAY: Pair;
    };
  };

  declare const _default: {
    constants: Constants;
    helpers: Helper;
  };
  export default _default;
}

interface Window {
  martCtx: string;
}

declare const globalPool;