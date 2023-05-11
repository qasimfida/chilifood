import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Description, Title, Wrapper } from './styles';
import { RootState } from '../../store';
import { selectFood, selectMeal, showDetails } from '../../store/restaurant';
import { useDispatch } from 'react-redux';
import MealCard from '../../components/MealCard';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

const TabPan = ({ restaurant }: any) => {
    const dispatch = useDispatch();
    const { plans } = restaurant;
    const navigate = useNavigate();
    return (
        <Grid container spacing={{ xs: 2 }}>
            {plans.map((plan: any) => (
                <Grid item xs={12} sm={6} md={4}>
                    <MealCard handleClick={() => navigate(`/${restaurant?.id}/${plan.id}`)} {...plan} />
                </Grid>
            ))}
        </Grid>
    );
};
const Restaurant: React.FC<any> = () => {
    const params = useParams();
    const { r } = useAppSelector((state) => state.restaurant);
    const restaurant = r.find((i: any) => i.id === params.restaurant);
    return (
        <Layout1 title={restaurant?.name}>
            <Wrapper>
                <Container>
                    <TabPan restaurant={restaurant} />
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Restaurant;
