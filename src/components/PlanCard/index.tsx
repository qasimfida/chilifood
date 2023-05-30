import React from 'react';
import { useState } from 'react';
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
// Data
import { restaurantsData } from '../../store/restaurant/restaurants';
// Types
import { IMeal, IPackage, IPlan } from '../../types/restaurant';
// Styles
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
interface IProps extends IPlan {
    handleClick?: () => void;
}
const PlanCard: React.FC<IProps> = ({ id, handleClick, carbs, name, src }) => {
    const [value, setValue] = useState<string>('0');
    const { i18n, t } = useTranslation();
    const { meals } = restaurantsData[i18n.language];

    const options: IPackage[] = [
        { label: '210 Kd, 28 days (without off)', value: 0, name: '210 kd, 28 days' },
        { label: '195 Kd, 24 days (Frid off)', value: 1, name: '195 Kd, 24 days' },
        { label: '170 Kd, 28 days (Frid, Sat off)', value: 2, name: '170 Kd, 28 days' },
    ];
    const planMeals = meals.filter((i: IMeal) => i?.plan_id?.includes(id)).map((i: IMeal) => i.name) || [];
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
                                renderValue={(select: string) => {
                                    const option = options[parseInt(select)];
                                    return option.name;
                                }}
                                onChange={(e: SelectChangeEvent) => setValue(e.target.value as string)}
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
