import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRestaurantState } from '../../types/restaurant';
import { days, foods, meals, restaurants, r } from './data';

// Define a type for the slice state

// Define the initial state using that type
const initialState: IRestaurantState = {
    r,
    viewFoodDetails: '',
    activeMeal: '0',
    activeDay: '1',
};

export const restaurantSlice = createSlice({
    name: 'restaurant',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        showDetails: (state, action: PayloadAction<string>) => {
            state.viewFoodDetails = state.viewFoodDetails === action.payload ? '' : action.payload;
            // state.foods = state.foods.map((food) => {
            //     if (food.id === action.payload) {
            //         food.selected = !food.selected;
            //     } else {
            //         food.selected = false;
            //     }
            //     return food;
            // });
        },
        selectDay: (state, action: PayloadAction<string>) => {
            state.activeDay = action.payload;
            state.activeMeal = '0';
            // state.days = state.days.map((day) => {
            //     if (day.id === action.payload) {
            //         day.selected = true;
            //     } else {
            //         day.selected = false;
            //     }
            //     return day;
            // });
            // state.meals = state.meals.map((meal, index) => {
            //     if (index === 0) {
            //         meal.selected = true;
            //     } else {
            //         meal.selected = false;
            //     }
            //     return meal;
            // });
        },
        selectMeal: (state, action: PayloadAction<string>) => {
            state.activeMeal = action.payload;
            // state.meals = state.meals.map((meal) => {
            //     if (meal.id === action.payload) {
            //         meal.selected = true;
            //     } else {
            //         meal.selected = false;
            //     }
            //     return meal;
            // });
        },
        selectFood: (state, action: PayloadAction<string | undefined>) => {
            // state.selectedFood = state.foods.find((food) => food.id === action.payload) || null;
        },
        selectRestaurant: (state, action: PayloadAction<string>) => {
            // state.restaurants = state.meals = state.meals.map((meal) => {
            //     if (meal.id === action.payload) {
            //         meal.selected = true;
            //     } else {
            //         meal.selected = false;
            //     }
            //     return meal;
            // });
        },
    },
});

export const { showDetails, selectDay, selectMeal, selectFood } = restaurantSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default restaurantSlice.reducer;
