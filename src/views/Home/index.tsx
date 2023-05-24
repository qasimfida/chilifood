import * as React from 'react';
import { Container, Fab, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { FabWrapper, Wrapper } from './styles';
import RestaurantCard from '../../components/RestaurantCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useIsAuthenticated } from '../../hooks';
import { restaurantsData } from '../../store/restaurant/restaurants';

const TabPan = () => {
    const { i18n } = useTranslation();
    const language = i18n.language;
    const restaurants = restaurantsData[language].restaurants;
    return (
        <Grid container spacing={{ xs: 2 }}>
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
    const navigate = useNavigate();
    const { t } = useTranslation();
    const handleRedirect = () => {
        navigate('/select/restaurants/0/1');
    };
    const { isAuthenticated } = useIsAuthenticated();
    return (
        <Layout1 title={t('HOME')} menuHeader withFooter>
            <Wrapper>
                <Container>
                    <TabPan />
                </Container>
            </Wrapper>
            {isAuthenticated && (
                <FabWrapper>
                    <Fab color="primary" variant="extended" aria-label="Select food" onClick={handleRedirect}>
                        Select food
                    </Fab>
                </FabWrapper>
            )}
        </Layout1>
    );
};

export default Home;
