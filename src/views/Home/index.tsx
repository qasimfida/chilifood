import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
// Components
import Layout1 from '../../layout/Layout1';
import RestaurantCard from '../../components/RestaurantCard';
import SelectFoodCard from '../../components/SelectFoodCard';
// Hooks
import { useIsAuthenticated } from '../../hooks';
// Types
import { IRestaurant } from '../../types/restaurant';
// Data
import { restaurantsData } from '../../store/restaurant/restaurants';
// Styles
import { Wrapper } from './styles';

const TabPan = () => {
    const { i18n } = useTranslation();
    const { isAuthenticated } = useIsAuthenticated();

    const language = i18n.language;

    const restaurants: IRestaurant[] = restaurantsData[language].restaurants;

    return (
        <Grid container spacing={{ xs: 2 }}>
            {isAuthenticated && (
                <Grid item xs={12} mb={2}>
                    <SelectFoodCard to="/select/restaurants/1/1" />
                </Grid>
            )}
            {restaurants.length
                ? restaurants.map((restaurant) => (
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
        <Layout1 title={t('HOME_RESTAURANTS')} menuHeader withFooter>
            <Wrapper>
                <Container>
                    <TabPan />
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Home;
