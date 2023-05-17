export interface IRestaurantState {
    r: ExtendsIRestaurant[] | any;
    viewFoodDetails: string;
    activeMeal: string;
    activeDay: string;
}
export interface ExtendsIRestaurant extends IRestaurant {
    selected?: boolean;
}
export interface IRestaurant {
    id: string;
    name: string;
    src: string;
    plans: ExtendsIPlan[];
}
export interface ExtendsIFood extends IFood {
    selected?: boolean;
}
export interface IFood {
    id: string;
    macros: IMacro[];
}
export interface IMacro {
    id: string;
    label: string;
    labelAr: string;
    amount: number;
}
export interface ExtendsIMeal extends IMeal {
    selected?: boolean;
}
export interface IMeal {
    id: string;
    name: string;
    labelAr: string;
    foods: IFood[] | never[];
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
    meals: ExtendsIMeal;
}
export interface ExtendsIPlan extends IPlan {
    selected?: boolean;
}
export interface IPlan {
    id: string;
    title: string;
    labelAr: string;
    days: ExtendsIDay[];
}
