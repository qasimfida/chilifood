import * as React from 'react';
import { Container, Fab, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { FabWrapper, Wrapper } from './styles';
import RestaurantCard from '../../components/RestaurantCard';
import { useAppSelector } from '../../store/hooks';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

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
    const handleRedirect = () => {
        navigate('/select/restaurants/0/01');
    };
    return (
        <Layout1 title="Home" menuHeader>
            <Wrapper>
                <Container>
                    <TabPan />
                </Container>
            </Wrapper>
            <FabWrapper>
                <Fab size="small" color="primary" aria-label="add" onClick={handleRedirect}>
                    <AddIcon />
                </Fab>
            </FabWrapper>
        </Layout1>
    );
};

export default Home;
