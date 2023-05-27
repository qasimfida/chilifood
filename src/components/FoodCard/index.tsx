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
import { IFood } from '../../types/restaurant';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
interface IProps extends IFood {
    isExpended: boolean;
    isSelected?: boolean;
    onToggle: () => void;
    handleSelect?: () => void;
    src: string;
    name: string;
    description: string;
    allowSelect?: boolean;
    size?: 'xl' | 'md';
}
const FoodCard: React.FC<IProps> = ({
    isExpended,
    onToggle,
    macros,
    handleSelect,
    src,
    name,
    description,
    allowSelect = false,
    isSelected,
    id,
    size,
}) => {
    const ref = useRef<null>(null);
    const { i18n } = useTranslation();

    useAnimateHeightFromZeroToAuto(ref, 100, isExpended, '0');

    return (
        <StyledCard expended={`${isExpended}`}>
            <Body>
                {allowSelect && (
                    <RadioCheckBox
                        checked={isSelected}
                        value={id}
                        onClick={handleSelect}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': `${id}` }}
                    />
                )}
                <StyledMedia size={size} image={src || salad} title="Food" onClick={handleSelect} />
                <Content>
                    <Details onClick={onToggle}>
                        <CardTitle size={size} className="title" gutterBottom variant="h5" dir={i18n.dir()}>
                            <Box>{name}</Box>
                            <Toggle>
                                <ExpandMore fontSize="small" className="icon" />
                            </Toggle>
                        </CardTitle>
                        <Macros>
                            {macros?.map((macro: any) => {
                                return (
                                    <Macro size={size} component="p" key={`macro-${macro.id}`}>
                                        <MacrosCount size={size} component="span">
                                            {macro.amount}
                                        </MacrosCount>
                                        {macro.name}
                                    </Macro>
                                );
                            })}
                        </Macros>
                        <Description size={size} ref={ref} expended={`${isExpended}`}>
                            {description}
                        </Description>
                    </Details>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default FoodCard;
