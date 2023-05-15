import * as React from 'react';
import Layout1 from '../../layout/Layout1';
import { Description, Heading, ListContent, StyledAlert, StyledAlertTitle, SubHeading, Title, Wrapper } from './styles';
import { FiberManualRecord } from '@mui/icons-material';
import { Container } from '@mui/material';

const About: React.FC<any> = () => {
    return (
        <Layout1 title="About">
            <Wrapper>
                <Container>
                    <Title>Restaurant</Title>
                    <Description>
                        The new restaurant in town has quickly become the talk of the town, with its elegant decor and
                        mouth-watering menu. As you step through the doors, you're greeted by a warm and welcoming
                        atmosphere, with the smell of delicious food wafting through the air.
                        <StyledAlert severity="success">
                            <StyledAlertTitle>Note</StyledAlertTitle>
                            The menu is filled with a variety of options,
                            <br /> from classic dishes with a modern twist to new.
                        </StyledAlert>
                        The menu is a culinary masterpiece, showcasing a range of dishes that blend traditional and
                        contemporary cooking techniques to create a truly unique and unforgettable dining experience.
                        From succulent steaks and freshly caught seafood to mouthwatering vegetarian and vegan options,
                        there is something for everyone to savor and enjoy.
                    </Description>
                </Container>
                <Container>
                    <Heading>Details</Heading>
                    <Description>
                        The new restaurant in town has quickly become the talk of the town, with its elegant decor and
                        mouth-watering menu. As you step through the doors, you're greeted by a warm and welcoming
                        atmosphere, with the smell of delicious food wafting through the air. The menu is filled with
                        aflavors are perfectly balanced, leaving you wanting more.
                        <ListContent>
                            <FiberManualRecord />
                            For a romantic dinner for two or a night out with friends, this restaurant is sure to
                        </ListContent>
                        <ListContent>
                            <FiberManualRecord />
                            The flavors are perfectly balanced, leaving you wanting more.
                        </ListContent>
                        <ListContent>
                            <FiberManualRecord />
                            Beautifully presented, and the flavors are perfectly balanced.
                        </ListContent>
                        <ListContent>
                            <FiberManualRecord />
                            As you step through the doors, you're greeted by a warm and welcoming atmosphere.
                        </ListContent>
                    </Description>
                </Container>
                <Container>
                    <SubHeading>More Details</SubHeading>
                    <Description>
                        As you step through the doors, you're greeted by a warm and welcoming atmosphere, with the smell
                        of delicious food wafting through the air. The menu is filled with aflavors are perfectly
                        balanced, leaving you wanting more.
                        <br /> <br />
                        Whether you're celebrating a special occasion or simply looking for an unforgettable dining
                        experience, the restaurant is the perfect destination for food lovers and connoisseurs alike. So
                        why not treat yourself to a meal that is sure to leave a lasting impression on your taste buds
                        and your memories?
                        <br /> <br />
                        Each dish is crafted with the utmost care and attention to detail, using only the freshest and
                        highest quality ingredients sourced from local farmers and suppliers. The chefs take great pride
                        in creating dishes that are not only visually stunning but also bursting with flavor, making
                        every bite a culinary journey to savor and cherish. In addition to the exceptional food, the
                        restaurant also boasts an extensive wine list, featuring a carefully curated selection of local
                        and international wines that perfectly complement the menu. The knowledgeable and friendly staff
                        are always on hand to offer recommendations and help you find the perfect pairing for your meal.
                    </Description>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default About;
