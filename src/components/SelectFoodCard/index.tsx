import React from 'react';
import { Body, Content, Label, Row, StyledCard, Title, StyledMedia, Button } from './styles';
import salad from '.././../assets/images/salad.jpg';
import { useTranslation } from 'react-i18next';
const SelectFoodCard: React.FC<any> = ({ to }) => {
    const { i18n } = useTranslation();

    return (
        <StyledCard dir={i18n.dir()} to={to}>
            <Body>
                <Title>
                    {/* <StyledMedia image={salad} title="Food" /> */}
                    <Button>SELECT FOOD</Button>
                </Title>
                <Content>
                    <Row>
                        <Label>Start : </Label>
                        <Label>18/06/2025</Label>
                    </Row>
                    <Row>
                        <Label>End : </Label>
                        <Label>18/07/2025</Label>
                    </Row>
                    <Row>
                        <Label>Off Days : </Label>
                        <Label>Friday and Saturday</Label>
                    </Row>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default SelectFoodCard;
