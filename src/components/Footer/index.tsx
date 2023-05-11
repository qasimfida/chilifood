import { Box, Container, Typography, css, styled } from '@mui/material';
import ios from '../../assets/social/ios.png';
import android from '../../assets/social/android.png';
import instagram from '../../assets/social/instagram.png';

const FooterWrapper = styled('footer')`
    padding: 12px 0;
    margin: 32px 0 0;
    text-align: center;
    .copy {
        margin-top: 12px;
    }
    ${({ theme: { palette } }) => css`
        background-color: ${palette.primary.light};
    `}
`;
export const Flex = styled(Box)`
    display: flex;
    gap: 12px;
    align-items: center;
`;
export const Img = styled('img')`
    border-radius: 4px;
    height: 32px;
    cursor: pointer;
`;
const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Flex justifyContent="center">
                    <Img src={instagram} alt="instagram" />
                    <Img src={android} alt="download from google play" />
                    <Img src={ios} alt="download from app store" />
                </Flex>
                <Typography variant="body2" className="copy">
                    Copyright © 2023 My Company, Inc.All rights reserved.
                </Typography>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
