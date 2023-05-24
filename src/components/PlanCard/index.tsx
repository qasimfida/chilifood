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
interface IProps extends IFood {
    handleClick?: () => void;
    carbs: string;
    name: string;
    src: string;
    description: string;
    days: any[];
}
const PlanCard: React.FC<IProps> = ({ handleClick, carbs, name, src, description, days = [] }) => {
    const [value, setValue] = useState(0);
    const { i18n } = useTranslation();

    const options = [
        { label: '210 kd, 28 days 1 (Fri, Sat Off)', value: 0, name: '210 kd, 28 days 1' },
        { label: '210 kd, 28 days 2 (Fri, Sat Off)', value: 1, name: '210 kd, 28 days 2' },
        { label: '210 kd, 28 days 3 (Fri, Sat Off)', value: 2, name: '210 kd, 28 days 3' },
    ];
    return (
        <StyledCard>
            <Body>
                <CardTitle className="name" gutterBottom variant="h5">
                    {name}
                </CardTitle>
                <MediaWrapper onClick={handleClick}>
                    <StyledMedia image={src} title={name} />
                    <Subscribe dir={i18n.dir()}>View Food/Subscribe</Subscribe>
                </MediaWrapper>
                <Content>
                    <Details>
                        <Box sx={{ maxWidth: 'calc(100% - 180px)' }}>
                            <Description weight="500">{carbs}</Description>
                            <Description> {description}</Description>
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

export default PlanCard;
