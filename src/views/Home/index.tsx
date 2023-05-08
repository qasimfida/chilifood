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

const TabPan = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { restaurants, selectedFood } = state.restaurant;
    return (
        <Grid container spacing={{ xs: 2 }}>
            {restaurants.map(({ id, src, name }) => (
                <Grid item xs={6} sm={4} lg={3}>
                    <RestaurantCard name={name} src={src} id={id} />
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
                    <Title variant="h6">All Restaurants</Title>
                    <Description>Here are few awesome restaurants.</Description>
                    <TabPan />
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Home;
