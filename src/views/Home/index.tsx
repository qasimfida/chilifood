import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Description, Title, Wrapper } from './styles';
import Tab from '../../components/Tab/index';
import { TabContext, TabPanel } from '@mui/lab';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectFood, selectMeal, showDetails } from '../../store/restaurant';
import { useDispatch } from 'react-redux';
import RestaurantCard from '../../components/RestaurantCard';
import Footer from '../../components/Footer';
import { ExtendsIRestaurant } from '../../types/restaurant';
import { useAppSelector } from '../../store/hooks';

const TabPan = () => {
    const dispatch = useDispatch();
    const { r } = useAppSelector((state) => state.restaurant);

    return (
        <Grid container spacing={{ xs: 2 }}>
            {r.map((restaurant: any) => (
                <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                    <RestaurantCard {...restaurant} />
                </Grid>
            ))}
        </Grid>
    );
};
const Home: React.FC<any> = () => {
    return (
        <Layout1 title="Home" isHome>
            <Wrapper>
                <Container>
                    <TabPan />
                </Container>
                <Container></Container>
            </Wrapper>
        </Layout1>
    );
};

export default Home;
