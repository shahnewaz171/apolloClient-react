import React from 'react';
import { Box, Grid } from '@mui/material';
import FoodList from '../FoodList/FoodList';

const Foods = () => {

    return (
        <Box sx={{ p: { sm: 2, md: 5 } }}>
            <Grid container spacing={3}>
                <FoodList />
            </Grid>
        </Box>
    );
};

export default Foods;