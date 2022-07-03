/** 声明类型约束, 请使用 Type 为变量结束标识 */
declare interface FnType<T = any, R = T> {
  (...arg: T[]): R;
}

declare interface PromiseFnType<T = any, R = T> {
  (...arg: []): Promise<R>;
}

declare type OptionsType = {
  label: string;
  value: any;
  [key: string]: string | number | boolean;
}[];

/** emit event */
declare type EmitType = (event: string, ...args: any[]) => void;

/** node */
declare type RefType<T> = T | null;
declare type TargetContext = '_self' | '_blank';
declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}
declare type ComponentRef<T extends HTMLElement = HTMLDivElement> =
  ComponentElRef<T> | null;
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
