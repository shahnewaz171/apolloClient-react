import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
interface Props {
    item: any;
    key: string;
    handleUpdateFood: any;
}

const FoodList: React.FC<Props> = ({ item, handleUpdateFood }) => {
    const { id, category, description, thumb } = item;

    return (
        <Grid item xs={12} lg={3}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={thumb}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 199)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleUpdateFood(id)} variant="contained" sx={{ textTransform: 'none', py: .3 }} color="success">Update</Button>
                    <Button variant="contained" sx={{ textTransform: 'none', py: .3, bgcolor: "#e91616" }}>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default FoodList;