import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRestaurantState } from '../../types/restaurant';

// Define a type for the slice state

// Define the initial state using that type
const initialState: IRestaurantState = {
    viewFoodDetails: '',
    activeMeal: '1',
    activeDay: '2',
    selectedFood: '',
};

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        showDetails: (state, action: PayloadAction<string>) => {
            state.viewFoodDetails = state.viewFoodDetails === action.payload ? '' : action.payload;
        },
        selectDay: (state, action: PayloadAction<string>) => {
            state.activeDay = action.payload;
            state.activeMeal = '1';
            state.selectedFood = '';
        },
        selectMeal: (state, action: PayloadAction<string>) => {
            state.activeMeal = action.payload;
            state.selectedFood = '';
        },
        selectFood: (state, action: PayloadAction<string>) => {
            state.selectedFood = action.payload;
        },
        selectRestaurant: (state, action: PayloadAction<string>) => {},
    },
});

export const { showDetails, selectDay, selectMeal, selectFood } = restaurantSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default restaurantSlice.reducer;
