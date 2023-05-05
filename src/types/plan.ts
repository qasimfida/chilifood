export interface IPlanState {
    selectedFood: IFood | null;
    foods: ExtendsIFood[];
    days: ExtendsIDay[];
    meals: ExtendsIMeal[];
}
export interface ExtendsIFood extends IFood {
    selected?: boolean;
}
export interface IFood {
    id?: string;
    macros?: IMacro[];
}
export interface IMacro {
    label: string;
    labelAr: string;
    count: number;
}
export interface ExtendsIMeal extends IMeal {
    selected?: boolean;
}
export interface IMeal {
    id: string;
    label: string;
    labelAr: string;
}
export interface ExtendsIDay extends IDay {
    selected?: boolean;
}
export interface IDay {
    id: string;
    month: string;
    day: string;
    date: string;
    off?: string;
    offAr?: string;
    locked?: boolean;
    monthAr?: string;
    dayAr?: string;
    dateAr?: string;
}
