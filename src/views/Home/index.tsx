import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import FoodCard from '../../components/FoodCard';
import Days from '../../components/Days';
import Layout1 from '../../layout/Layout1';
import { Description, StyledTab, StyledTabContext, TabsWrapper } from './styles';
import Tab from '../../components/Tab/index';
import { TabContext, TabPanel } from '@mui/lab';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectFood, selectMeal, showDetails } from '../../store/plan';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { useTranslation } from 'react-i18next';
import { getLocaleKey } from '../../helpers/getLocaleKey';

const TabPan = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { foods, selectedFood } = state.plan;
    return (
        <Grid container spacing={{ xs: 2 }}>
            {foods.map(({ id, macros, selected }) => (
                <Grid item xs={6} sm={4} lg={3}>
                    <FoodCard
                        onToggle={() => dispatch(showDetails(id))}
                        handleSelect={() => dispatch(selectFood(id))}
                        isExpended={selected || false}
                        isSelected={selectedFood?.id === id}
                        macros={macros}
                        id={id}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
const Home: React.FC<any> = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const { meals } = useAppSelector((state) => state.plan);
    const active = meals.filter((i) => i.selected)[0].id;

    const handleChange = (event: any, newValue: any) => {
        dispatch(selectMeal(newValue));
    };

    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };

    return (
        <Layout1 title="Chili Foods">
            <Container>
                <TabsWrapper>
                    <TabContext value={active || '1'}>
                        <StyledTabContext
                            value={active || '1'}
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                            aria-label="scrollable auto tabs meals"
                            dir={i18n.dir()}
                            onChange={handleChange}
                        >
                            {meals.map((meal) => (
                                <StyledTab label={<Tab title={(meal as any)[getKey('label')]} />} value={meal.id} />
                            ))}
                        </StyledTabContext>
                        {meals.map((meal) => (
                            <TabPanel value={meal.id} className="px-0">
                                <TabPan />
                            </TabPanel>
                        ))}
                    </TabContext>
                </TabsWrapper>
            </Container>
        </Layout1>
    );
};

export default Home;
