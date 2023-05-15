import { ReactNode, FormHTMLAttributes, FunctionComponent } from 'react';
import { Box, Grid, styled } from '@mui/material';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    maxWidth?: string;
}

/**
 * Application styled Form container
 * @component AppForm
 */

const Form = styled('form')`
    width: 100%;
`;
const AppForm: FunctionComponent<Props> = ({ children, maxWidth = '30rem', ...resOfProps }) => {
    return (
        <Form {...resOfProps}>
            <Grid container direction="column" alignItems="center">
                <Box maxWidth={maxWidth} width="100%">
                    {children}
                </Box>
            </Grid>
        </Form>
    );
};

export default AppForm;
