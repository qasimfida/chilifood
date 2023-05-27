import React from 'react';
import { Body, Content, Label, Row, StyledCard, Title, Button } from './styles';
import { useTranslation } from 'react-i18next';
const SelectFoodCard: React.FC<any> = ({ to }) => {
    const { i18n, t } = useTranslation();
    const ar = i18n.language === 'ar';
    return (
        <StyledCard dir={i18n.dir()} to={to}>
            <Body>
                <Title>
                    <Button>{t('SELECT_FOOD')}</Button>
                </Title>
                <Content className="body">
                    <Row className="mr-3">
                        <Label className="mr-2">{t('START_DATE')}: </Label>
                        <Label>18/06/2025</Label>
                    </Row>
                    <Row>
                        <Label className="mr-2">{t('END_DATE')}: </Label>
                        <Label>18/072025</Label>
                    </Row>
                    <Row>
                        <Label className="mr-2">{t('OFF_DAYS')} : </Label>
                        <Label>
                            {t('FRIDAY')} ,{t('SATURDAY')}
                        </Label>
                    </Row>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default SelectFoodCard;
