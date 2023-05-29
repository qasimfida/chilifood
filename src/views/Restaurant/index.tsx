import * as React from 'react';
import { lazy, Suspense, useMemo } from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Wrapper } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../styles';
import { restaurantsData } from '../../store/restaurant/restaurants';
import { useTranslation } from 'react-i18next';
const PlanCard = lazy(() => import('../../components/PlanCard'));

const TabPan = ({ restaurant, plans }: any) => {
    const navigate = useNavigate();
    return (
        <Grid container spacing={{ xs: 2 }}>
            {plans.length ? (
                plans.map((plan: any) => (
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
    const restaurant = data.restaurants.find((i: any) => i.id === params.restaurant);
    const plans = useMemo(
        () => data.restaurantPlans.filter((i: any) => i.restaurant_id.includes(restaurant.id)) || [],
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
