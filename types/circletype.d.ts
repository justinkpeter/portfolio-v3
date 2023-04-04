declare module "circletype" {
  export default class CircleType {
    constructor(element: HTMLElement | Element | null | undefined);
    radius(value: number): CircleType;
    dir(value: number): CircleType;
    forceWidth(value: boolean): CircleType;
    forceHeight(value: boolean): CircleType;
    debug(value: boolean): CircleType;
    destroy(): void;
    container: HTMLElement  | null | undefined;
  }
}