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
} from './styles';
import { ExpandMore } from '@mui/icons-material';
import useAnimateHeightFromZeroToAuto from '../../hooks/useAnimateHeightFromZeroToAuto';
import { IFood } from '../../types/restaurant';
import { getLocaleKey } from '../../helpers/getLocaleKey';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
interface IProps extends IFood {
    isExpended: boolean;
    isSelected?: boolean;
    onToggle: () => void;
    handleSelect?: () => void;
    src: string;
    name: string;
    description: string;
}
const FoodCard: React.FC<IProps> = ({ isExpended, onToggle, macros, handleSelect, src, name, description }) => {
    const { i18n } = useTranslation();
    const ref = useRef<null>(null);

    useAnimateHeightFromZeroToAuto(ref, 100, isExpended, '0');

    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };

    return (
        <StyledCard expended={`${isExpended}`}>
            <Body>
                {/* <RadioCheckBox
                    checked={isSelected}
                    value={id}
                    onChange={handleSelect}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': `${id}` }}
                /> */}
                <StyledMedia image={src || salad} title="Food" />
                <Content>
                    <Details onClick={onToggle}>
                        <CardTitle className="title" gutterBottom variant="h5">
                            <Box>{name}</Box>
                            <Toggle>
                                <ExpandMore fontSize="small" className="icon" />
                            </Toggle>
                        </CardTitle>
                        <Macros>
                            {macros?.map((macro) => {
                                return (
                                    <Macro key={`macro-${macro.id}`}>
                                        <MacrosCount component="span">{macro.amount}</MacrosCount>
                                        {(macro as any)[getKey('name')]}
                                    </Macro>
                                );
                            })}
                        </Macros>
                        <Description ref={ref} expended={`${isExpended}`}>
                            {description}
                        </Description>
                    </Details>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default FoodCard;
