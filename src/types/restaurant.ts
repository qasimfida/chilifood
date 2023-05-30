export interface IRestaurantState {
    viewFoodDetails: string;
    activeMeal: string;
    activeDay: string;
    selectedFood: string;
}
export interface ExtendsIRestaurant extends IRestaurant {
    selected?: boolean;
}
export interface IRestaurant {
    id: string;
    name: string;
    src: string;
}
export interface ExtendsIFood extends IFood {
    selected?: boolean;
}
export interface IFood {
    id: string;
    src: string;
    name: string;
    description: string;
    macros: IMacro[];
    meal_id?: string[];
    day_id?: string[];
}
export interface IMacro {
    id: string;
    name: string;
    amount: string;
}
export interface ExtendsIMeal extends IMeal {
    selected?: boolean;
}
export interface IMeal {
    id: string;
    name: string;
    day_id: string[];
    plan_id: string[];
}
export interface ExtendsIDay extends IDay {
    selected?: boolean;
}
export interface IDay {
    id: string;
    day: string;
    date: string;
    month: string;
    off: boolean;
    lock: boolean;
    plan_id: string[];
}
export interface ExtendsIPlan extends IPlan {
    selected?: boolean;
}
export interface IPlan {
    id: string;
    restaurant_id: string[];
    name: string;
    carbs: string;
    description: string;
    src: string;
}
export interface IPackage {
    label: string;
    value: number;
    name: string;
}
