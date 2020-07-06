/// <reference types="react" />
interface UIComponent {
    element: string;
    content?: UIComponent[] | null | string;
    properties?: object;
}
interface TInterface {
    model: UIComponent[];
    lib: any;
}
export declare function Interface({ model, lib }: TInterface): JSX.Element | null;
export {};
