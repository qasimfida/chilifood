import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Wrapper } from './styles';
import RestaurantCard from '../../components/RestaurantCard';
import { useAppSelector } from '../../store/hooks';

const TabPan = () => {
    const { r } = useAppSelector((state) => state.restaurant);
    const restaurants = r || [];
    return (
        <Grid container spacing={{ xs: 2 }}>
            {Array.isArray(restaurants) && restaurants.length
                ? restaurants.map((restaurant: any) => (
                      <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                          <RestaurantCard {...restaurant} />
                      </Grid>
                  ))
                : 'No restaurants found :('}
        </Grid>
    );
};
const Home: React.FC<any> = () => {
    return (
        <Layout1 title="Home" menuHeader withFooter>
            <Wrapper>
                <Container>
                    <TabPan />
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Home;
