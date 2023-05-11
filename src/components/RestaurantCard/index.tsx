import React from 'react';
import salad from '.././../assets/images/salad.jpg';
import { Body, CardTitle, Content, StyledCard, StyledMedia } from './styles';
import { IFood, IRestaurant } from '../../types/restaurant';
import { getLocaleKey } from '../../helpers/getLocaleKey';
import { useTranslation } from 'react-i18next';
interface IProps extends IRestaurant {}
const RestaurantCard: React.FC<IProps> = ({ src, name, id }) => {
    const { i18n } = useTranslation();

    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };

    return (
        <StyledCard dir={i18n.dir()} to={`/${id}`}>
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
