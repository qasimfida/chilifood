import * as React from 'react';
import { lazy, Suspense, useCallback } from 'react';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { TabContext, TabPanel } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
// Components
import Layout1 from '../../layout/Layout1';
import Tab from '../../components/Tab/index';
import { useAppSelector } from '../../store/hooks';
import { Loading } from '../styles';
// Action
import { selectFood, selectMeal, showDetails } from '../../store/restaurant';
// Data
import { restaurantsData } from '../../store/restaurant/restaurants';
import { dataS } from '../../store/restaurant/select-food';
// Types
import { IDay, IFood, IMeal, IRestaurant } from '../../types/restaurant';
// Styles
import { Description, StyledTab, StyledTabContext, TabsWrapper } from './styles';
// Dynamic Imports
const FoodCard = lazy(() => import('../../components/FoodCard'));
const Days = lazy(() => import('../../components/Days'));
interface IPanProps {
    foods: IFood[];
    allowSelect: boolean;
    day: IDay;
    singleCard: boolean;
}
const TabPan: React.FC<IPanProps> = ({ foods, allowSelect, day, singleCard = false }) => {
    const dispatch = useDispatch();
    const { viewFoodDetails, selectedFood } = useAppSelector((state) => state.restaurant);

    const handleSelect = (id: string) => {
        if (!day.lock) {
            dispatch(selectFood(id as string));
        }
    };

    return (
        <Grid container spacing={{ xs: 2 }}>
            {foods.map(({ id, macros, name, description, src }) => {
                return (
                    <Grid item xs={singleCard ? 12 : 6} sm={singleCard ? 6 : 4} lg={singleCard ? 4 : 3} key={id}>
                        <FoodCard
                            size={singleCard ? 'xl' : 'md'}
                            onToggle={() => dispatch(showDetails(id))}
                            handleSelect={() => handleSelect(id)}
                            isExpended={viewFoodDetails === id}
                            isSelected={day.lock || selectedFood === id}
                            macros={macros}
                            id={id}
                            src={src}
                            name={name}
                            description={description}
                            allowSelect={allowSelect}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};
interface IProps {
    allowSelect?: boolean;
    singleCard?: boolean;
}
const Plan: React.FC<IProps> = ({ allowSelect = false, singleCard = false }) => {
    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();
    const { plan } = useParams();
    const { activeMeal, activeDay } = useAppSelector((state) => state.restaurant);

    const language = i18n.language;
    const data = restaurantsData[language];
    const subsData = dataS[language];

    const handleChange = useCallback(
        (event: React.SyntheticEvent, newValue: string) => {
            dispatch(selectMeal(newValue));
        },
        [dispatch]
    );
    const selectedP = (allowSelect ? subsData : data).restaurantPlans.find((i: IRestaurant) => i.id === plan);
    const selectedDay = (allowSelect ? subsData : data).weekdays.find((i: IDay) => i.id === activeDay);
    const planMeals = (allowSelect ? subsData : data).meals?.filter((i: IMeal) => i.day_id.includes(activeDay));
    const weekdays = (allowSelect ? subsData : data).weekdays?.filter((i: IDay) => i.plan_id.includes(plan || ''));
    const mealFoods = (id: string) =>
        (allowSelect ? subsData : data).foods?.filter(
            (i: IFood) => i.meal_id?.includes(id) && i.day_id?.includes(activeDay)
        );

    return (
        <Layout1 title={allowSelect ? t('SELECT_FOOD') : selectedP?.name} hasFooter={!allowSelect}>
            <Container>
                <Description>{!allowSelect && <Typography> {selectedP.description} </Typography>}</Description>
                <Suspense
                    fallback={
                        <Loading>
                            <CircularProgress />
                        </Loading>
                    }
                >
                    <Days days={weekdays} />
                </Suspense>
                <Suspense
                    fallback={
                        <Loading>
                            <CircularProgress />
                        </Loading>
                    }
                >
                    <TabsWrapper>
                        <TabContext value={activeMeal}>
                            <StyledTabContext
                                value={activeMeal}
                                variant="scrollable"
                                scrollButtons="auto"
                                allowScrollButtonsMobile
                                aria-label="scrollable auto tabs meals"
                                dir={i18n.dir()}
                                onChange={handleChange}
                            >
                                {planMeals.map((meal: IMeal) => {
                                    return (
                                        <StyledTab
                                            label={<Tab title={meal.name} />}
                                            value={meal.id}
                                            key={`tab-${meal.id}`}
                                        />
                                    );
                                })}
                            </StyledTabContext>
                            {planMeals.map((meal: IMeal, index: number) => (
                                <TabPanel value={meal.id} key={meal.id} className="px-0">
                                    <TabPan
                                        foods={mealFoods(meal.id)}
                                        allowSelect={allowSelect}
                                        day={selectedDay}
                                        singleCard={singleCard}
                                    />
                                </TabPanel>
                            ))}
                        </TabContext>
                    </TabsWrapper>
                </Suspense>
            </Container>
        </Layout1>
    );
};

export default Plan;
