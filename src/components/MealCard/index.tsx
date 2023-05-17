import React from 'react';
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
import { IFood, IMacro } from '../../types/restaurant';
// import { getLocaleKey } from '../../helpers/getLocaleKey';
// import { useTranslation } from 'react-i18next';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
interface IProps extends IFood {
    handleClick?: () => void;
    carbs: string;
    title: string;
    src: string;
    description: string;
}
const MealCard: React.FC<IProps> = ({ handleClick, carbs, title, src, description }) => {
    // const { i18n } = useTranslation();

    // const getKey = (key: string) => {
    //     return getLocaleKey(key, i18n);
    // };

    return (
        <StyledCard>
            <Body>
                <CardTitle className="title" gutterBottom variant="h5">
                    {title}
                </CardTitle>
                <MediaWrapper onClick={handleClick}>
                    <StyledMedia image={src} title={title} />
                    <Subscribe>View Food/Subscribe</Subscribe>
                </MediaWrapper>
                <Content>
                    <Details>
                        {}
                        <Box>
                            <Description weight="500">{carbs}</Description>
                            <Description>{description}</Description>
                        </Box>
                        <FormSelect size="small">
                            <InputLabel id="food-select">Package</InputLabel>
                            <Select labelId="food-select" id="food-select" value={10} label="Age">
                                <MenuItem value={10}>210 kd, 28days</MenuItem>
                                <MenuItem value={20}>185 kd, 28days</MenuItem>
                                <MenuItem value={30}>120 kd, 28days</MenuItem>
                            </Select>
                        </FormSelect>
                    </Details>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default MealCard;
