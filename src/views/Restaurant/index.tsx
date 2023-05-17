import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Container, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Wrapper } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { Loading } from '../styles';
const MealCard = lazy(() => import('../../components/MealCard'));

const TabPan = ({ restaurant }: any) => {
    const { plans } = restaurant || {};
    const navigate = useNavigate();
    return (
        <Grid container spacing={{ xs: 2 }}>
            {Array.isArray(plans) && plans.length
                ? plans.map((plan: any) => (
                      <Grid item xs={12} sm={6} md={4} key={`plan-${plan.id}`}>
                          <MealCard href={`/restaurants/${restaurant?.id}/${plan.id}`} {...plan} />
                      </Grid>
                  ))
                : 'No plans found :('}
        </Grid>
    );
};
const Restaurant: React.FC<any> = () => {
    const params = useParams();
    const { r } = useAppSelector((state) => state.restaurant);
    const restaurant = r.find((i: any) => i.id === params.restaurant);
    console.log({ restaurant });
    return (
        <Layout1 title={restaurant?.name}>
            <Wrapper>
                <Suspense fallback={<Loading>Fetching data...</Loading>}>
                    <Container>
                        <TabPan restaurant={restaurant} />
                    </Container>
                </Suspense>
            </Wrapper>
        </Layout1>
    );
};

export default Restaurant;
