import React from 'react';
import { useState } from 'react';
import {
    Body,
    CardTitle,
    Content,
    Description,
    StyledCard,
    StyledMedia,
    Details,
    FormSelect,
    Subscribe,
    MediaWrapper,
} from './styles';
import { IFood } from '../../types/restaurant';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { restaurantsData } from '../../store/restaurant/restaurants';
interface IProps extends IFood {
    handleClick?: () => void;
    carbs: string;
    name: string;
    src: string;
    description: string;
    days: any[];
}
const PlanCard: React.FC<IProps> = ({ id, handleClick, carbs, name, src, description }) => {
    const [value, setValue] = useState(0);
    const { i18n, t } = useTranslation();
    const { meals } = restaurantsData[i18n.language];
    const options = [
        { label: '210 Kd, 28 days (without off)', value: 0, name: '210 kd, 28 days' },
        { label: '195 Kd, 24 days (Frid off)', value: 1, name: '195 Kd, 24 days' },
        { label: '170 Kd, 28 days (Frid, Sat off)', value: 2, name: '170 Kd, 28 days' },
    ];
    const planMeals = meals.filter((i: any) => i?.plan_id?.includes(id)).map((i: any) => i.name) || [];
    return (
        <StyledCard>
            <Body>
                <CardTitle className="name" gutterBottom variant="h5">
                    {name}
                </CardTitle>
                <MediaWrapper onClick={handleClick}>
                    <StyledMedia image={src} title={name} />
                    <Subscribe dir={i18n.dir()}>{t('VIEW_SUBSCRIBE')}</Subscribe>
                </MediaWrapper>
                <Content>
                    <Details>
                        <Box sx={{ maxWidth: 'calc(100% - 180px)' }}>
                            <Description weight="500">{carbs}</Description>
                            <Description> {planMeals.join(', ')}</Description>
                        </Box>
                        <FormSelect size="small">
                            <InputLabel id="food-select">{t('PACKAGE')}</InputLabel>
                            <Select
                                labelId="select-package"
                                id="select-package"
                                value={value}
                                label="Package"
                                renderValue={(select: number) => {
                                    const option = options[select];
                                    return option.name;
                                }}
                                onChange={(e: any) => setValue(e.target.value)}
                            >
                                {options.map((option) => {
                                    return (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormSelect>
                    </Details>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default PlanCard;
