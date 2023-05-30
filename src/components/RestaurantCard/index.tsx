import React from 'react';
import { useTranslation } from 'react-i18next';
// Data
import { IRestaurant } from '../../types/restaurant';
// Styles
import { Body, CardTitle, Content, StyledCard, StyledMedia } from './styles';
// Assets
import salad from '.././../assets/images/salad.jpg';

interface IProps extends IRestaurant {}

const RestaurantCard: React.FC<IProps> = ({ src, name, id }) => {
    const { i18n } = useTranslation();

    return (
        <StyledCard dir={i18n.dir()} to={`/restaurants/${id}`}>
            <Body>
                <StyledMedia image={src || salad} title="Food" />
                <Content>
                    <CardTitle className="title" gutterBottom variant="h5">
                        {name}
                    </CardTitle>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default RestaurantCard;
