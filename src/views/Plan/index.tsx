import * as React from 'react';
import { lazy, Suspense, useCallback } from 'react';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Description, StyledTab, StyledTabContext, TabsWrapper } from './styles';
import Tab from '../../components/Tab/index';
import { TabContext, TabPanel } from '@mui/lab';
import { selectFood, selectMeal, showDetails } from '../../store/restaurant';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { useTranslation } from 'react-i18next';
import { getLocaleKey } from '../../helpers/getLocaleKey';
import { useParams } from 'react-router-dom';
import { Loading } from '../styles';
import { restaurantsData } from '../../store/restaurant/restaurants';
const FoodCard = lazy(() => import('../../components/FoodCard'));
const Days = lazy(() => import('../../components/Days'));

const TabPan = ({ foods, allowSelect, day, singleCard = false }: any) => {
    const dispatch = useDispatch();
    const { viewFoodDetails, selectedFood } = useAppSelector((state) => state.restaurant);
    const handleSelect = (id: string) => {
        if (!day.lock) {
            dispatch(selectFood(id as string));
        }
    };
    return (
        <Grid container spacing={{ xs: 2 }}>
            {foods.map(({ id, macros, name, description, src }: any) => {
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
const Plan: React.FC<any> = ({ allowSelect, singleCard = false }) => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const { restaurant, plan } = useParams();
    const { activeMeal, activeDay } = useAppSelector((state) => state.restaurant);

    const language = i18n.language;
    const data = restaurantsData[language];

    const handleChange = useCallback(
        (event: any, newValue: any) => {
            dispatch(selectMeal(newValue));
        },
        [dispatch]
    );

    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };

    const selectedR = data.restaurants.find((i: any) => i.id === restaurant);
    const selectedP = data.restaurantPlans.find((i: any) => i.id === plan);
    const selectedDay = data.weekdays.find((i: any) => i.id === activeDay);
    const planMeals = data.meals?.filter((i: any) => i.day_id.includes(activeDay));
    const mealFoods = (id: any) =>
        data.foods?.filter((i: any) => i.meal_id.includes(id) && i.day_id.includes(activeDay));

    return (
        <Layout1 title={selectedR?.name} hasFooter={!allowSelect}>
            <Container>
                <Description>
                    <Typography> {selectedP.description} </Typography>
                </Description>
                <Suspense
                    fallback={
                        <Loading>
                            <CircularProgress />
                        </Loading>
                    }
                >
                    <Days days={data.weekdays} />
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
                                {planMeals.map((meal: any) => {
                                    return (
                                        <StyledTab
                                            label={<Tab title={(meal as any)[getKey('name')]} />}
                                            value={meal.id}
                                            key={`tab-${meal.id}`}
                                        />
                                    );
                                })}
                            </StyledTabContext>
                            {planMeals.map((meal: any, index: any) => (
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
