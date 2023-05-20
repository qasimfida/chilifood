import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Container, Grid, Typography } from '@mui/material';
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
import { ExtendsIDay } from '../../types/restaurant';
import { Loading } from '../styles';
const FoodCard = lazy(() => import('../../components/FoodCard'));
const Days = lazy(() => import('../../components/Days'));

const TabPan = ({ foods, allowSelect }: any) => {
    const dispatch = useDispatch();
    const { viewFoodDetails } = useAppSelector((state) => state.restaurant);
    return (
        <Grid container spacing={{ xs: 2 }}>
            {foods.map(({ id, macros, name, description, src }: any) => (
                <Grid item xs={6} sm={4} lg={3} key={id}>
                    <FoodCard
                        onToggle={() => dispatch(showDetails(id))}
                        handleSelect={() => dispatch(selectFood(id))}
                        isExpended={viewFoodDetails === id}
                        isSelected={viewFoodDetails === id}
                        macros={macros}
                        id={id}
                        src={src}
                        name={name}
                        description={description}
                        allowSelect={allowSelect}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
const Plan: React.FC<any> = ({ allowSelect }) => {
    const dispatch = useDispatch();
    const { restaurant, plan } = useParams();
    const { r, activeMeal, activeDay } = useAppSelector((state) => state.restaurant);
    const selectedR = r.find((i: any) => i.id === restaurant);
    const selectedP = selectedR.plans?.find((i: any) => i.id === plan) || {};
    const { i18n } = useTranslation();

    const handleChange = (event: any, newValue: any) => {
        dispatch(selectMeal(newValue));
    };

    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };
    const selectedDay = selectedP.days.find((i: ExtendsIDay) => i.date === (activeDay || '7'));
    return (
        <Layout1 title={selectedR?.name} hasFooter={!allowSelect} withFooter>
            <Container>
                <Description>
                    <Typography> Welcome to Chili Foods </Typography>
                </Description>
                <Suspense fallback={<Loading>Fetching data...</Loading>}>
                    <Days days={selectedP.days} />
                </Suspense>
                <Suspense fallback={<Loading>Fetching data...</Loading>}>
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
                                {selectedDay.meals.map((meal: any) => {
                                    return (
                                        <StyledTab
                                            label={<Tab title={(meal as any)[getKey('name')]} />}
                                            value={meal.id}
                                            key={meal.id}
                                        />
                                    );
                                })}
                            </StyledTabContext>
                            {selectedDay.meals.map((meal: any, index: any) => (
                                <TabPanel value={meal.id} key={meal.id} className="px-0">
                                    <TabPan foods={meal.foods} allowSelect={allowSelect} />
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
