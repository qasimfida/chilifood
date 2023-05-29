import { foodsAr, mealsAr, restaurantPlansAr, restaurantsAr, weekdaysAr } from './restaurantsAr';

export const restaurants = [
    {
        id: '1',
        name: 'Gastronomic Seafood',
        src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: '2',
        name: 'Flavorsome Delights in Eatery',
        src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: '3',
        name: 'Savory Bites Bistro',
        src: 'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
];
export const restaurantPlans = [
    {
        id: '1',
        restaurant_id: ['1', '2', '3', '4'],
        name: 'Delicious Ambiance Experience',
        carbs: '120 carbs',
        description: 'Delicious cuisine in a cozy ambiance.',
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: '2',
        restaurant_id: ['1', '2', '3', '4'],
        name: 'Flavors of the World - Culinary Adventure Plan',
        carbs: '120 carbs',
        description: 'Exquisite flavors with a modern twist.',
        src: 'https://images.unsplash.com/photo-1503392968123-ceabe9e5e630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80',
    },
    {
        id: '3',
        restaurant_id: ['1', '2', '4'],
        name: 'Cultural Fusion Gastronomy',
        carbs: '120 cal',
        description: 'A fusion of taste and culture.',
        src: 'https://images.unsplash.com/photo-1641893728260-19493532d6b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80',
    },
    {
        id: '4',
        restaurant_id: ['1', '4', '3'],
        name: 'Gourmet Delights Unveiled',
        carbs: '120 prot',
        description: 'Exquisite flavors with a modern twist.',
        src: 'https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1941&q=80',
    },
];
export const weekdays = [
    {
        id: '1',
        day: 'Mon',
        date: '1',
        month: 'May',
        off: false,
        lock: true,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '2',
        day: 'Tue',
        date: '2',
        month: 'May',
        off: false,
        lock: false,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '3',
        day: 'Wed',
        date: '3',
        month: 'May',
        off: false,
        lock: false,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '4',
        day: 'Thu',
        date: '4',
        month: 'May',
        off: false,
        lock: false,
        plan_id: ['2', '3', '4'],
    },
    {
        id: '5',
        day: 'Fri',
        date: '5',
        month: 'May',
        off: true,
        lock: false,
        plan_id: ['2', '3', '4'],
    },
    {
        id: '6',
        day: 'Sat',
        date: '6',
        month: 'May',
        off: false,
        lock: false,
        plan_id: ['2', '3', '4'],
    },
    {
        id: '7',
        day: 'Sun',
        date: '7',
        month: 'May',
        off: true,
        lock: false,
        plan_id: ['2', '3', '4'],
    },
];

export const meals = [
    {
        id: '1',
        name: 'Breakfast',
        day_id: ['1', '2', '3'],
        plan_id: ['1'],
    },
    {
        id: '2',
        name: 'Lunch',
        day_id: ['1', '2', '3'],
        plan_id: ['2', '3', '4', '5'],
    },
    {
        id: '3',
        name: 'Dinner',
        day_id: ['1', '2'],
        plan_id: ['1', '2', '3', '4', '5'],
    },
    {
        id: '4',
        name: 'Snack',
        day_id: ['2', '3'],
        plan_id: ['1', '2', '3', '4', '5'],
    },
    {
        id: '5',
        name: 'Sweet',
        day_id: ['2', '3'],
        plan_id: ['1', '2', '3', '4', '5'],
    },
    {
        id: '6',
        name: 'Drinks',
        day_id: ['2', '3', '5'],
        plan_id: ['1', '2', '3', '4', '5'],
    },
    {
        id: '7',
        name: 'Drinks 2',
        day_id: ['4', '2'],
        plan_id: ['1', '2', '3', '4', '5'],
    },
];

export const foods = [
    {
        id: '1',
        src: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80',
        name: 'Delicious Food Item',
        description: 'A mouthwatering dish with amazing flavors.123123',
        macros: [
            { id: '123', name: 'Cal', amount: '112' },
            { id: '124', name: 'Prot', amount: '131' },
            { id: '125', name: 'Carb', amount: '120' },
            { id: '126', name: 'Fat', amount: '126' },
        ],
        meal_id: ['1', '2', '3', '4', '5', '6', '7'],
        day_id: ['2', '4', '5', '6'],
    },
    {
        id: '2',
        src: 'https://images.unsplash.com/photo-1515036918611-4b7f32b8406c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        name: 'Tasty Savory Grilled Salmon Delight',
        description: 'Deliciously seasoned steak with a side of buttery garlic and mashed potatoes',
        macros: [
            { id: '127', name: 'Cal', amount: '150' },
            { id: '128', name: 'Prot', amount: '90' },
            { id: '129', name: 'Carb', amount: '85' },
            { id: '130', name: 'Fat', amount: '75' },
        ],
        meal_id: ['1', '4', '5', '6', '7'],
        day_id: ['1', '2', '3'],
    },
    {
        id: '3',
        src: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: 'Another Tasty Dish',
        description: 'A delectable treat that will satisfy your cravings.',
        macros: [
            { id: '127', name: 'Cal', amount: '150' },
            { id: '128', name: 'Prot', amount: '90' },
            { id: '129', name: 'Carb', amount: '85' },
            { id: '130', name: 'Fat', amount: '75' },
        ],
        meal_id: ['3', '4'],
        day_id: ['1', '2'],
    },
    {
        id: '4',
        src: 'https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80',
        name: 'Salmon Delight Tasty Dish',
        description: 'A delectable treat that will satisfy your cravings.',
        macros: [
            { id: '127', name: 'Cal', amount: '150' },
            { id: '128', name: 'Prot', amount: '90' },
            { id: '129', name: 'Carb', amount: '85' },
            { id: '130', name: 'Fat', amount: '75' },
        ],
        meal_id: ['2', '4', '5', '6'],
        day_id: ['1', '3', '4', '5'],
    },
];

export const restaurantsData: any = {
    ar: {
        foods: foodsAr,
        meals: mealsAr,
        weekdays: weekdaysAr,
        restaurantPlans: restaurantPlansAr,
        restaurants: restaurantsAr,
    },
    en: {
        foods,
        meals,
        weekdays,
        restaurantPlans,
        restaurants,
    },
};
