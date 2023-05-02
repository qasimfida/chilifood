import * as React from 'react';
import { useState } from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import FoodCard from '../../components/FoodCard';
import Days from '../../components/Days';
import Layout1 from '../../layout/Layout1';
import { Description, StyledTab, StyledTabContext, TabListContainer, TabsWrapper } from './styles';
import Tab from '../../components/Tab/index';
import { TabList, TabPanel } from '@mui/lab';
const TabPan = () => (
    <Grid container spacing={{ xs: 2 }}>
        <Grid item xs={6} sm={4} lg={3}>
            <FoodCard />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
            <FoodCard />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
            <FoodCard />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
            <FoodCard />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
            <FoodCard />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
            <FoodCard />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
            <FoodCard />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
            <FoodCard />
        </Grid>
    </Grid>
);
const Plan: React.FC<any> = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <Layout1>
            <Container>
                <Description>
                    <Typography> Welcome to Chili Foods </Typography>
                </Description>
                <Days />
                <TabsWrapper>
                    <StyledTabContext value={value}>
                        <TabListContainer>
                            <TabList onChange={handleChange} aria-label="lab API tabs meal">
                                <StyledTab label={<Tab title="Lunch" />} value="1" />
                                <StyledTab label={<Tab title="Dinner" />} value="2" />
                                <StyledTab label={<Tab title="Snack" />} value="3" />
                            </TabList>
                        </TabListContainer>
                        <TabPanel value="1" className="px-0">
                            <TabPan />
                        </TabPanel>
                        <TabPanel value="2" className="px-0">
                            <TabPan />
                        </TabPanel>
                        <TabPanel value="3" className="px-0">
                            <TabPan />
                        </TabPanel>
                    </StyledTabContext>
                </TabsWrapper>
            </Container>
        </Layout1>
    );
};

export default Plan;
