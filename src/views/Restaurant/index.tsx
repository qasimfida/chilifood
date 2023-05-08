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
    const state = useAppSelector((state: RootState) => state);
    const { foods, selectedFood } = state.restaurant;
    const navigate = useNavigate();
    return (
        <Grid container spacing={{ xs: 2 }}>
            {foods.map(({ id, macros, selected }) => (
                <Grid item xs={12} sm={6} md={4}>
                    <MealCard handleClick={() => navigate(`/${restaurant?.id}/${id}`)} id={id} />
                </Grid>
            ))}
        </Grid>
    );
};
const Restaurant: React.FC<any> = () => {
    const router = useParams();
    const { restaurants } = useAppSelector((state) => state.restaurant);
    const restaurant = restaurants.find((i) => i.id === router.restaurant);
    return (
        <Layout1 title={restaurant?.name}>
            <Wrapper>
                <Container>
                    <Title variant="h6">Menus</Title>
                    <Description>Choose the a menu</Description>
                    <TabPan restaurant={restaurant} />
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Restaurant;
