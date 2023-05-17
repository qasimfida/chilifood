import * as React from 'react';
import { Container, Fab, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Description, FabWrapper, Title, Wrapper } from './styles';
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
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/restaurants/0/01');
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
