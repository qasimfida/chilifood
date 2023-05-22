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
interface IProps extends IFood {
    handleClick?: () => void;
    carbs: string;
    title: string;
    src: string;
    description: string;
    days: any[];
}
const MealCard: React.FC<IProps> = ({ handleClick, carbs, title, src, description, days = [] }) => {
    const [value, setValue] = useState(0);
    const uniqueMealNames = new Set();

    // Iterate over each day and its meals
    days.forEach((day) => {
        day.meals.forEach((meal: any) => {
            uniqueMealNames.add(meal.name); // Add the meal name to the Set
        });
    });

    // Convert the Set to an array
    const uniqueMealNamesArray = Array.from(uniqueMealNames);
    const options = [
        { label: '210 kd, 28 days 1 (Fri, Sat Off)', value: 0, name: '210 kd, 28 days 1' },
        { label: '210 kd, 28 days 2 (Fri, Sat Off)', value: 1, name: '210 kd, 28 days 2' },
        { label: '210 kd, 28 days 3 (Fri, Sat Off)', value: 2, name: '210 kd, 28 days 3' },
    ];
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
                        <Box sx={{ maxWidth: 'calc(100% - 180px)' }}>
                            <Description weight="500">{carbs}</Description>
                            <Description>{uniqueMealNamesArray.join(', ')}</Description>
                        </Box>
                        <FormSelect size="small">
                            <InputLabel id="food-select">Package</InputLabel>
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

export default MealCard;
