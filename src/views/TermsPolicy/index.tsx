import Layout1 from '../../layout/Layout1';
import { TabHeading, Title, Wrapper } from './styles';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TermsPolicy = () => {
    const { i18n } = useTranslation();

    return (
        <Layout1 title="Terms and Policy" withFooter>
            <Container>
                <Wrapper>
                    <Title>Terms & Policy</Title>
                    The restaurant was situated in the heart of the city, overlooking a busy street filled with people
                    and cars. As I stepped inside, the warm and welcoming atmosphere of the restaurant immediately
                    enveloped me. The decor was tastefully done, with soft lighting, comfortable seating, and beautiful
                    artwork adorning the walls.
                    <br /> <br />I couldn't resist trying the dessert, and so I ordered the chocolate lava cake. The
                    cake was warm, moist, and oozing with molten chocolate. It was the perfect end to a delightful meal.
                    Throughout my dining experience, the service was impeccable. The waitstaff were attentive, friendly,
                    and knowledgeable about the menu. They even went out of their way to make recommendations and ensure
                    that my dining experience was enjoyable. <br /> <br /> Overall, the restaurant exceeded my
                    expectations in every way. From the delicious food to the inviting atmosphere and excellent service,
                    it was a truly memorable dining experience. I would highly recommend this restaurant to anyone
                    looking for a top-notch culinary experience.
                    <br /> <br />
                    <TabHeading>IPrivacy Policy</TabHeading>I was greeted by a friendly hostess who led me to my table.
                    The menu was extensive, with a wide variety of dishes to choose from. I decided to start with the
                    restaurant's famous tomato soup, which was served with freshly baked bread. The soup was rich,
                    flavorful, and had just the right amount of spice. The restaurant was situated in the heart of the
                    city, overlooking a busy street filled with people and cars. As I stepped inside, the warm and
                    welcoming atmosphere of the restaurant immediately enveloped me. The decor was tastefully done, with
                    soft lighting, comfortable seating, and beautiful artwork adorning the walls.
                    <br /> <br />I couldn't resist trying the dessert, and so I ordered the chocolate lava cake. The
                    cake was warm, moist, and oozing with molten chocolate. It was the perfect end to a delightful meal.
                    Throughout my dining experience, the service was impeccable. The waitstaff were attentive, friendly,
                    and knowledgeable about the menu. They even went out of their way to make recommendations and ensure
                    that my dining experience was enjoyable. <br /> <br /> Overall, the restaurant exceeded my
                    expectations in every way. From the delicious food to the inviting atmosphere and excellent service,
                    it was a truly memorable dining experience. I would highly recommend this restaurant to anyone
                    looking for a top-notch culinary experience.
                    <TabHeading>Certification</TabHeading>
                    For my main course, I opted for the grilled salmon, which was served with a side of roasted
                    vegetables. The salmon was perfectly cooked, flaky, and seasoned to perfection. The vegetables were
                    a delicious mix of zucchini, peppers, and onions, roasted to bring out their natural sweetness.
                    <br /> <br />
                    The menu was extensive, with a wide variety of dishes to choose from. I decided to start with the
                    restaurant's famous tomato soup, which was served with freshly baked bread. The soup was rich,
                    flavorful, and had just the right amount of spice. The restaurant was situated in the heart of the
                    city, overlooking a busy street filled with people and cars. As I stepped inside, the warm and
                    welcoming atmosphere of the restaurant immediately enveloped me. The decor was tastefully done, with
                    soft lighting, comfortable seating, and beautiful artwork adorning the walls.
                    <br /> <br />I couldn't resist trying the dessert, and so I ordered the chocolate lava cake. The
                    cake was warm, moist, and oozing with molten chocolate. It was the perfect end to a delightful meal.
                    Throughout my dining experience, the service was impeccable. The waitstaff were attentive, friendly,
                    and knowledgeable about the menu. They even went out of their way to make recommendations and ensure
                    that my dining experience was enjoyable. <br /> <br /> Overall, the restaurant exceeded my
                    expectations in every way. From the delicious food to the inviting atmosphere and excellent service,
                    it was a truly memorable dining experience. I would highly recommend this restaurant to anyone
                    looking for a top-notch culinary experience.
                </Wrapper>
            </Container>
        </Layout1>
    );
};

export default TermsPolicy;
