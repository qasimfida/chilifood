import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Layout1 from '../../layout/Layout1';

const Home: React.FC<any> = () => {
    return (
        <Layout1 title="About" isHome>
            <Container></Container>
        </Layout1>
    );
};

export default Home;
