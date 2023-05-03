import { ReactNode, FormHTMLAttributes, FunctionComponent } from 'react';
import { Box, Grid, styled } from '@mui/material';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

/**
 * Application styled Form container
 * @component AppForm
 */

const Form = styled('form')`
    width: 100%;
`;
const AppForm: FunctionComponent<Props> = ({ children, ...resOfProps }) => {
    return (
        <Form {...resOfProps}>
            <Grid container direction="column" alignItems="center">
                <Box maxWidth="30rem" width="100%">
                    {children}
                </Box>
            </Grid>
        </Form>
    );
};

export default AppForm;
