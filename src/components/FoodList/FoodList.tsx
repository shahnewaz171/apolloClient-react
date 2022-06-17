import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
interface Props {
    item: any,
    key: string,
}

const FoodList: React.FC<Props> = ({ item }) => {
    const { id, category, description, thumb } = item;

    console.log(thumb);

    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
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
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default FoodList;