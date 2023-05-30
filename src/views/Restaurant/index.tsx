import * as React from 'react';
import { lazy, Suspense, useMemo } from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Components
import Layout1 from '../../layout/Layout1';
// Data
import { restaurantsData } from '../../store/restaurant/restaurants';
// TYPES
import { IPlan, IRestaurant } from '../../types/restaurant';
// Styles
import { Wrapper } from './styles';
import { Loading } from '../styles';
// Dynamic imports
const PlanCard = lazy(() => import('../../components/PlanCard'));

const TabPan: React.FC<{ restaurant: IRestaurant; plans: IPlan[] }> = ({ restaurant, plans }) => {
    const navigate = useNavigate();

    return (
        <Grid container spacing={{ xs: 2 }}>
            {plans.length ? (
                plans.map((plan) => (
                    <Grid item xs={12} sm={6} md={4} key={`plan-${plan.id}`}>
                        <PlanCard
                            handleClick={() => {
                                navigate(`/restaurants/${restaurant?.id}/${plan.id}`);
                            }}
                            {...plan}
                        />
                    </Grid>
                ))
            ) : (
                <Loading>No plans found :(</Loading>
            )}
        </Grid>
    );
};
const Restaurant: React.FC<any> = () => {
    const params = useParams();
    const { i18n } = useTranslation();
    const language = i18n.language;
    const data = restaurantsData[language];
    const restaurant: IRestaurant = data.restaurants.find((i: IRestaurant) => i.id === params.restaurant);
    const plans: IPlan[] = useMemo(
        () => data.restaurantPlans.filter((i: IPlan) => i.restaurant_id.includes(restaurant.id)) || [],
        [data, restaurant]
    );
    return (
        <Layout1 title={restaurant?.name || 'Not found'}>
            <Wrapper>
                <Suspense
                    fallback={
                        <Loading>
                            <CircularProgress />
                        </Loading>
                    }
                >
                    <Container>
                        {restaurant ? (
                            <TabPan restaurant={restaurant} plans={plans} />
                        ) : (
                            <Loading>No plans found :(</Loading>
                        )}
                    </Container>
                </Suspense>
            </Wrapper>
        </Layout1>
    );
};

export default Restaurant;
