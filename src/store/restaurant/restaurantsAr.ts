export const restaurantsAr = [
    {
        id: '1',
        name: 'المأكولات البحرية الشهية',
        src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: '2',
        name: 'أطباق شهية في المطعم',
        src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: '3',
        name: 'مقهى الوجبات اللذيذة',
        src: 'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
];

export const restaurantPlansAr = [
    {
        id: '1',
        restaurant_id: ['1', '2', '3', '4'],
        name: 'تجربة بيئة شهية',
        carbs: '120 كربوهيدرات',
        description: 'مأكولات شهية في أجواء مريحة.',
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: '2',
        restaurant_id: ['1', '2', '3', '4'],
        name: 'نكهات العالم - خطة مغامرة الطهي',
        carbs: '120 كربوهيدرات',
        description: 'نكهات رفيعة مع لمسة عصرية.',
        src: 'https://images.unsplash.com/photo-1503392968123-ceabe9e5e630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80',
    },
    {
        id: '3',
        restaurant_id: ['1', '2', '4'],
        name: 'تصاعد الثقافات في الطهو',
        carbs: '120 سعرة حرارية',
        description: 'مزيج من النكهات والثقافات.',
        src: 'https://images.unsplash.com/photo-1641893728260-19493532d6b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80',
    },
    {
        id: '4',
        restaurant_id: ['1', '4', '3'],
        name: 'أطباق لذيذة متنوعة',
        carbs: '120 بروتين',
        description: 'نكهات رفيعة مع لمسة عصرية.',
        src: 'https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1941&q=80',
    },
];

export const weekdaysAr = [
    {
        id: '1',
        day: 'الاثنين',
        date: '1',
        month: 'مايو',
        off: false,
        lock: true,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '2',
        day: 'الثلاثاء',
        date: '2',
        month: 'مايو',
        off: false,
        lock: false,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '3',
        day: 'الأربعاء',
        date: '3',
        month: 'مايو',
        off: false,
        lock: false,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '4',
        day: 'الخميس',
        date: '4',
        month: 'مايو',
        off: false,
        lock: false,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '5',
        day: 'الجمعة',
        date: '5',
        month: 'مايو',
        off: true,
        lock: false,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '6',
        day: 'السبت',
        date: '6',
        month: 'مايو',
        off: false,
        lock: false,
        plan_id: ['1', '2', '3', '4'],
    },
    {
        id: '7',
        day: 'الأحد',
        date: '7',
        month: 'مايو',
        off: true,
        lock: false,
        plan_id: ['1', '2', '3', '4'],
    },
];

export const mealsAr = [
    {
        id: '1',
        name: 'فطور',
        day_id: ['1', '2', '3'],
    },
    {
        id: '2',
        name: 'غداء',
        day_id: ['1', '2', '3'],
    },
    {
        id: '3',
        name: 'عشاء',
        day_id: ['1', '2'],
    },
    {
        id: '4',
        name: 'وجبة خفيفة',
        day_id: ['2', '3'],
    },
    {
        id: '5',
        name: 'حلوى',
        day_id: ['2', '3'],
    },
    {
        id: '6',
        name: 'مشروبات',
        day_id: ['2', '3', '5'],
    },
    {
        id: '7',
        name: 'مشروبات 2',
        day_id: ['4', '2'],
    },
];

export const foodsAr = [
    {
        id: '1',
        src: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80',
        name: 'طبق شهي لذيذ',
        description: 'طبق لذيذ يحتوي على نكهات رائعة.',
        macros: [
            { id: '123', name: 'سعرات', amount: '112' },
            { id: '124', name: 'بروتين', amount: '131' },
            { id: '125', name: 'كربوهيدرات', amount: '120' },
            { id: '126', name: 'دهون', amount: '126' },
        ],
        meal_id: ['1', '2', '3', '4', '5', '6', '7'],
        day_id: ['1', '2'],
    },
    {
        id: '2',
        src: 'https://images.unsplash.com/photo-1515036918611-4b7f32b8406c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        name: 'طبق شهي للسلمون المشوي',
        description: 'تحفة لذيذة سترضي شهيتك.',
        macros: [
            { id: '127', name: 'سعرات', amount: '150' },
            { id: '128', name: 'بروتين', amount: '90' },
            { id: '129', name: 'كربوهيدرات', amount: '85' },
            { id: '130', name: 'دهون', amount: '75' },
        ],
        meal_id: ['1', '2', '3', '4', '5', '6', '7'],
        day_id: ['2', '3'],
    },
    {
        id: '3',
        src: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: 'طبق لذيذ آخر',
        description: 'تحفة لذيذة سترضي شهيتك.',
        macros: [
            { id: '127', name: 'سعرات', amount: '150' },
            { id: '128', name: 'بروتين', amount: '90' },
            { id: '129', name: 'كربوهيدرات', amount: '85' },
            { id: '130', name: 'دهون', amount: '75' },
        ],
        meal_id: ['1', '2', '3', '4'],
        day_id: ['2', '3'],
    },
    {
        id: '4',
        src: 'https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80',
        name: 'طبق شهي للسلمون المشوي',
        description: 'تحفة لذيذة سترضي شهيتك.',
        macros: [
            { id: '127', name: 'سعرات', amount: '150' },
            { id: '128', name: 'بروتين', amount: '90' },
            { id: '129', name: 'كربوهيدرات', amount: '85' },
            { id: '130', name: 'دهون', amount: '75' },
        ],
        meal_id: ['1', '2', '4', '5', '6'],
        day_id: ['2', '4', '5'],
    },
];
