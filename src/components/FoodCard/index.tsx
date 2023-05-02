import React, { useState } from 'react';
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
const FoodCard: React.FC<any> = () => {
    const [isExpended, onToggle] = useState(false);
    const handleChange = (lng: any) => {};
    return (
        <StyledCard expended={`${isExpended}`} onClick={handleChange}>
            <Body>
                <StyledMedia image={salad} title="Food" />
                <Content>
                    <CardTitle className="title" gutterBottom variant="h5">
                        Chicken Pasta
                        <Toggle onClick={() => onToggle(!isExpended)}>
                            <ExpandMore fontSize="small" className="icon" />
                        </Toggle>
                    </CardTitle>
                </Content>
                <Details expended={`${isExpended}`}>
                    <Macros>
                        <Col>
                            <Macro>
                                <MacrosCount component="span">531</MacrosCount>
                                <br />
                                Prot
                            </Macro>
                            <Macro>
                                <MacrosCount component="span">32</MacrosCount>
                                <br />
                                Carb
                            </Macro>
                        </Col>
                        <Col>
                            <Macro>
                                <MacrosCount component="span">43</MacrosCount>
                                <br />
                                Calo
                            </Macro>
                            <Macro>
                                <MacrosCount component="span">54</MacrosCount>
                                <br />
                                Fats
                            </Macro>
                        </Col>
                    </Macros>
                    <Description>Grilled Chicken, parmesan chees</Description>
                </Details>
            </Body>
        </StyledCard>
    );
};

export default FoodCard;
