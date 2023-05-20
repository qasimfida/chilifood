import React, { useRef, useState } from 'react';
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
    allowSelect?: boolean;
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
    id,
}) => {
    const { i18n } = useTranslation();
    const ref = useRef<null>(null);

    useAnimateHeightFromZeroToAuto(ref, 100, isExpended, '0');

    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };
    const [checked, setChecked] = useState(false);

    const selectedFood = () => {
        setChecked(!checked);
    };
    return (
        <StyledCard expended={`${isExpended}`}>
            <Body>
                {allowSelect && (
                    <RadioCheckBox
                        checked={checked}
                        value={id}
                        onClick={selectedFood}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': `${id}` }}
                    />
                )}
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
                            {macros?.map((macro, index) => {
                                return (
                                    <Macro key={macro.label + index}>
                                        <MacrosCount component="span">{macro.count}</MacrosCount>
                                        {(macro as any)[getKey('label')]}
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
