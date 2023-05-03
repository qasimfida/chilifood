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
    Col,
} from './styles';
import { ExpandMore } from '@mui/icons-material';
import useAnimateHeightFromZeroToAuto from '../../hooks/useAnimateHeightFromZeroToAuto';
const FoodCard: React.FC<any> = () => {
    const ref = useRef<null>(null);
    const [isExpended, onToggle] = useState(false);
    const handleChange = (lng: any) => {};
    useAnimateHeightFromZeroToAuto(ref, 200, isExpended, '72px');
    return (
        <StyledCard expended={`${isExpended}`} onClick={handleChange}>
            <Body>
                <StyledMedia image={salad} title="Food" />
                <Content>
                    <Details ref={ref} expended={`${isExpended}`}>
                        <CardTitle className="title" gutterBottom variant="h5">
                            Chicken Pasta
                            <Toggle onClick={() => onToggle(!isExpended)}>
                                <ExpandMore fontSize="small" className="icon" />
                            </Toggle>
                        </CardTitle>
                        <Macros>
                            <Macro>
                                <MacrosCount component="span">531</MacrosCount>
                                Prot
                            </Macro>
                            <Macro>
                                <MacrosCount component="span">32</MacrosCount>
                                Carb
                            </Macro>
                            <Macro>
                                <MacrosCount component="span">43</MacrosCount>
                                Calo
                            </Macro>
                            <Macro>
                                <MacrosCount component="span">54</MacrosCount>
                                Fats
                            </Macro>
                        </Macros>
                        <Description>Grilled Chicken, parmesan chees</Description>
                    </Details>
                </Content>
            </Body>
        </StyledCard>
    );
};

export default FoodCard;
