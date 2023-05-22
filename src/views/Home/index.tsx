import * as React from 'react';
import { Container, Fab, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { FabWrapper, Wrapper } from './styles';
import RestaurantCard from '../../components/RestaurantCard';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
    const navigate = useNavigate();
    const { t } = useTranslation();
    const handleRedirect = () => {
        navigate('/select/restaurants/0/01');
    };
    const user: { userNumber?: string; password?: string } = JSON.parse(localStorage.getItem('user') || '{}');
    const isLoggedInUser = user?.userNumber ? true : false;
    return (
        <Layout1 title={t('HOME')} menuHeader withFooter>
            <Wrapper>
                <Container>
                    <TabPan />
                </Container>
            </Wrapper>
            {isLoggedInUser && (
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
