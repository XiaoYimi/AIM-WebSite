/** simple select component */
declare type AIM_SelectOptions<T = string> = {
  label: string;
  value: T;
}[];

declare interface AIM_ObjType {
  [prop: string]: any;
}

declare interface AIM_ArrayNumberType {
  [index: number]: number;
}

declare interface AIM_ArrayStringType {
  [index: number]: string;
}
