import React from 'react';
import { TabsText, Wrapper } from './styles';
const Tab: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Wrapper>
            <TabsText variant="h6">{title}</TabsText>
        </Wrapper>
    );
};

export default Tab;
