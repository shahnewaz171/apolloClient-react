import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import FoodList from '../FoodList/FoodList';
import { useQuery } from '@apollo/client';
import { Get_Foods } from '../shared/graphqlApi';
import UpdateFood from './UpdateFood/UpdateFood';
import { FoodsType } from '../shared/types/model';

const Foods: React.FC = () => {
    const { loading, error, data } = useQuery(Get_Foods);
    const [singleFood, setSingleFood] = useState<null | FoodsType>(null);
    const [updateFood, setUpdateFood] = useState(false);
    // console.log(data);

    const handleUpdateFood = (id: any) => {
        const food = data.foods?.find((item: any) => item.id === id);
        setSingleFood(food);

        if(food){
            setUpdateFood(true);
        }
    }

    return (
        <Box sx={{ p: { sm: 2, md: 5 } }}>
            <Grid container spacing={3}>
                {data?.foods?.map((item: any) => <FoodList item={item} key={item.id} handleUpdateFood={handleUpdateFood} />)}
            </Grid>
            <UpdateFood open={updateFood} setOpen={setUpdateFood} singleFood={singleFood} setSingleFood={setSingleFood} />
        </Box>
    );
};

export default Foods;