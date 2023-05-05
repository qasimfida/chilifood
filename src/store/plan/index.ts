import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlanState } from '../../types/plan';
import { days, foods, meals } from './data';

// Define a type for the slice state

// Define the initial state using that type
const initialState: IPlanState = {
    selectedFood: null,
    days,
    foods,
    meals,
};

export const planSlice = createSlice({
    name: 'plan',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        showDetails: (state, action: PayloadAction<string | undefined>) => {
            state.foods = state.foods.map((food) => {
                if (food.id === action.payload) {
                    food.selected = !food.selected;
                } else {
                    food.selected = false;
                }
                return food;
            });
        },
        selectDay: (state, action: PayloadAction<string | undefined>) => {
            state.days = state.days.map((day) => {
                if (day.id === action.payload) {
                    day.selected = true;
                } else {
                    day.selected = false;
                }
                return day;
            });
            state.meals = state.meals.map((meal, index) => {
                if (index === 0) {
                    meal.selected = true;
                } else {
                    meal.selected = false;
                }
                return meal;
            });
        },
        selectMeal: (state, action: PayloadAction<string | undefined>) => {
            state.meals = state.meals.map((meal) => {
                if (meal.id === action.payload) {
                    meal.selected = true;
                } else {
                    meal.selected = false;
                }
                return meal;
            });
        },
        selectFood: (state, action: PayloadAction<string | undefined>) => {
            state.selectedFood = state.foods.find((food) => food.id === action.payload) || null;
        },
    },
});

export const { showDetails, selectDay, selectMeal, selectFood } = planSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default planSlice.reducer;
