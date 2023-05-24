import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Wrapper } from './styles';
import RestaurantCard from '../../components/RestaurantCard';
import { useTranslation } from 'react-i18next';
import { useIsAuthenticated } from '../../hooks';
import { restaurantsData } from '../../store/restaurant/restaurants';
import SelectFoodCard from '../../components/SelectFoodCard';

const TabPan = () => {
    const { i18n } = useTranslation();
    const { isAuthenticated } = useIsAuthenticated();
    const language = i18n.language;
    const restaurants = restaurantsData[language].restaurants;
    return (
        <Grid container spacing={{ xs: 2 }}>
            {isAuthenticated && (
                <Grid item xs={12} sm={6} md={4}>
                    <SelectFoodCard to="/select/restaurants/1/1" />
                </Grid>
            )}
            {restaurants.length
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
    const { t } = useTranslation();
    return (
        <Layout1 title={t('HOME')} menuHeader withFooter>
            <Wrapper>
                <Container>
                    <TabPan />
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Home;
