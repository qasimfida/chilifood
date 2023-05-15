import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Layout1 from '../../layout/Layout1';
import TabWrapper, { StyledTab, StyledTabs, TabContent, TabHeading, Title } from './styles';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <TabContent>
                    <Typography>{children}</Typography>
                </TabContent>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const TermsPolicy = () => {
    const [value, setValue] = React.useState(0);
    const { i18n } = useTranslation();

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    const tabs = [{ label: 'Terms of services' }, { label: 'Privacy Policy' }, { label: 'Certifications' }];
    return (
        <Layout1 title="Terms and Policy">
            <Container>
                <Title>Terms & Policy</Title>
                <TabWrapper dir={i18n.dir()}>
                    <StyledTabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        dir={i18n.dir()}
                    >
                        {tabs.map((tab, index) => (
                            <StyledTab key={index} label={tab.label} {...a11yProps(index)} />
                        ))}
                    </StyledTabs>
                    <TabPanel value={value} index={0}>
                        <TabHeading>Terms of services</TabHeading>
                        The restaurant was situated in the heart of the city, overlooking a busy street filled with
                        people and cars. As I stepped inside, the warm and welcoming atmosphere of the restaurant
                        immediately enveloped me. The decor was tastefully done, with soft lighting, comfortable
                        seating, and beautiful artwork adorning the walls.
                        <br /> <br />I couldn't resist trying the dessert, and so I ordered the chocolate lava cake. The
                        cake was warm, moist, and oozing with molten chocolate. It was the perfect end to a delightful
                        meal. Throughout my dining experience, the service was impeccable. The waitstaff were attentive,
                        friendly, and knowledgeable about the menu. They even went out of their way to make
                        recommendations and ensure that my dining experience was enjoyable. <br /> <br /> Overall, the
                        restaurant exceeded my expectations in every way. From the delicious food to the inviting
                        atmosphere and excellent service, it was a truly memorable dining experience. I would highly
                        recommend this restaurant to anyone looking for a top-notch culinary experience.
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <TabHeading>IPrivacy Policy</TabHeading>I was greeted by a friendly hostess who led me to my
                        table. The menu was extensive, with a wide variety of dishes to choose from. I decided to start
                        with the restaurant's famous tomato soup, which was served with freshly baked bread. The soup
                        was rich, flavorful, and had just the right amount of spice. The restaurant was situated in the
                        heart of the city, overlooking a busy street filled with people and cars. As I stepped inside,
                        the warm and welcoming atmosphere of the restaurant immediately enveloped me. The decor was
                        tastefully done, with soft lighting, comfortable seating, and beautiful artwork adorning the
                        walls.
                        <br /> <br />I couldn't resist trying the dessert, and so I ordered the chocolate lava cake. The
                        cake was warm, moist, and oozing with molten chocolate. It was the perfect end to a delightful
                        meal. Throughout my dining experience, the service was impeccable. The waitstaff were attentive,
                        friendly, and knowledgeable about the menu. They even went out of their way to make
                        recommendations and ensure that my dining experience was enjoyable. <br /> <br /> Overall, the
                        restaurant exceeded my expectations in every way. From the delicious food to the inviting
                        atmosphere and excellent service, it was a truly memorable dining experience. I would highly
                        recommend this restaurant to anyone looking for a top-notch culinary experience.
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <TabHeading>Certification</TabHeading>
                        For my main course, I opted for the grilled salmon, which was served with a side of roasted
                        vegetables. The salmon was perfectly cooked, flaky, and seasoned to perfection. The vegetables
                        were a delicious mix of zucchini, peppers, and onions, roasted to bring out their natural
                        sweetness.
                        <br /> <br />
                        The menu was extensive, with a wide variety of dishes to choose from. I decided to start with
                        the restaurant's famous tomato soup, which was served with freshly baked bread. The soup was
                        rich, flavorful, and had just the right amount of spice. The restaurant was situated in the
                        heart of the city, overlooking a busy street filled with people and cars. As I stepped inside,
                        the warm and welcoming atmosphere of the restaurant immediately enveloped me. The decor was
                        tastefully done, with soft lighting, comfortable seating, and beautiful artwork adorning the
                        walls.
                        <br /> <br />I couldn't resist trying the dessert, and so I ordered the chocolate lava cake. The
                        cake was warm, moist, and oozing with molten chocolate. It was the perfect end to a delightful
                        meal. Throughout my dining experience, the service was impeccable. The waitstaff were attentive,
                        friendly, and knowledgeable about the menu. They even went out of their way to make
                        recommendations and ensure that my dining experience was enjoyable. <br /> <br /> Overall, the
                        restaurant exceeded my expectations in every way. From the delicious food to the inviting
                        atmosphere and excellent service, it was a truly memorable dining experience. I would highly
                        recommend this restaurant to anyone looking for a top-notch culinary experience.
                    </TabPanel>
                </TabWrapper>
            </Container>
        </Layout1>
    );
};

export default TermsPolicy;
