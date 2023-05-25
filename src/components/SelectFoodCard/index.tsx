import React from 'react';
import { Body, Content, Label, Row, StyledCard, Title, Button } from './styles';
import { useTranslation } from 'react-i18next';
const SelectFoodCard: React.FC<any> = ({ to }) => {
    const { i18n } = useTranslation();
    const ar = i18n.language === 'ar';
    return (
        <StyledCard dir={i18n.dir()} to={to}>
            <Body>
                <Title>
                    <Button>{ar ? 'اختر الطعام' : 'SELECT FOOD'}</Button>
                </Title>
                <Content className="body">
                    <Row className="mr-3">
                        <Label className="mr-2">{ar ? 'بداية الاشتراك' : 'Start date '}: </Label>
                        <Label>18/06/2025</Label>
                    </Row>
                    <Row>
                        <Label className="mr-2">{ar ? 'نهاية الاشتراك' : 'End date'}: </Label>
                        <Label>18/072025</Label>
                    </Row>
                    <Row>
                        <Label className="mr-2">{ar ? 'أيام الإجازة' : 'Off Days'} : </Label>
                        <Label>{ar ? 'الجمعةوالسبت' : 'Friday, Saturday'}</Label>
                    </Row>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default SelectFoodCard;
