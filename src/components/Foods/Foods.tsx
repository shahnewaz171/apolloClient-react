import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import FoodList from '../FoodList/FoodList';
import { useQuery } from '@apollo/client';
import { Get_Foods } from '../shared/graphqlApi';

const Foods: React.FC = () => {
    const { loading, error, data } = useQuery(Get_Foods);
    // console.log(data);

    return (
        <Box sx={{ p: { sm: 2, md: 5 } }}>
            <Grid container spacing={3}>
                {data?.foods?.map((item: any) => <FoodList item={item} key={item.id} />)}
            </Grid>
        </Box>
    );
};

export default Foods;