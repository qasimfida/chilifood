import React, { useRef } from 'react';
import salad from '.././../assets/images/salad.jpg';
import {
    Body,
    CardTitle,
    Content,
    Description,
    Macro,
    Macros,
    StyledCard,
    StyledMedia,
    MacrosCount,
    Toggle,
    Details,
    RadioCheckBox,
} from './styles';
import { ExpandMore } from '@mui/icons-material';
import useAnimateHeightFromZeroToAuto from '../../hooks/useAnimateHeightFromZeroToAuto';
import { IFood } from '../../types/plan';
import { getLocaleKey } from '../../helpers/getLocaleKey';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
interface IProps extends IFood {
    isExpended: boolean;
    isSelected?: boolean;
    onToggle: () => void;
    handleSelect?: () => void;
}
const RestaurantCard: React.FC<IProps> = ({ isExpended, onToggle, macros, handleSelect, isSelected, id }) => {
    const { i18n } = useTranslation();
    const ref = useRef<null>(null);

    useAnimateHeightFromZeroToAuto(ref, 200, isExpended, '72px');

    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };

    return (
        <StyledCard expended={`${isExpended}`}>
            <Body>
                <RadioCheckBox
                    checked={isSelected}
                    value={id}
                    onChange={handleSelect}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': `${id}` }}
                />
                <StyledMedia image={salad} title="Food" />
                <Content>
                    <Details ref={ref} expended={`${isExpended}`}>
                        <CardTitle className="title" gutterBottom variant="h5">
                            <Box>Chili Foods</Box>
                            <Toggle onClick={onToggle}>
                                <ExpandMore fontSize="small" className="icon" />
                            </Toggle>
                        </CardTitle>
                        <Description>150 kd</Description>
                    </Details>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default RestaurantCard;
