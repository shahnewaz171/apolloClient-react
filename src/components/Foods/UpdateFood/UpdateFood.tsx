import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { style } from '../../shared/Customstyles/CustomStyles';
import { FoodsType } from '../../shared/types/model';
import { gql, useMutation } from '@apollo/client';
import { Update_Food } from '../../shared/graphqlApi';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    singleFood: null | FoodsType;
    setSingleFood: React.Dispatch<React.SetStateAction<null | FoodsType>>;
}

const UpdateFood: React.FC<Props> = ({ open, setOpen, singleFood, setSingleFood }) => {
    const [disable, setDisable] = useState(false);
    const [updateFood, { data, loading, error }] = useMutation(Update_Food);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
        mode: "all",
        reValidateMode: 'onChange'
    });

    const handleClose = () => {
        setSingleFood(null);
        reset();
        setOpen(false);
    }

    const onSubmit = (data: any) => {
        
        if (singleFood !== null) {
            const payload = { id: singleFood.id, ...data };

            updateFood({ variables: { input: payload } });
        }
    }
    console.log(data)

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="update-food"
        >
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 600, textAlign: 'center', mb: 2 }}>
                    Update Food
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography component="p" className="searchItem-title" >
                            Category:
                        </Typography>
                        <TextField fullWidth defaultValue={singleFood?.category} {...register('category', { required: 'This field is required' })} error={Boolean(errors.category)} helperText={errors.category?.message} sx={{ '& ::placeholder': { fontSize: '12px', color: '#000' } }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p" className="searchItem-title" >
                            Description:
                        </Typography>
                        <TextField fullWidth defaultValue={singleFood?.description} {...register('description', { required: 'This field is required' })} error={Boolean(errors.description)} helperText={errors.description?.message} sx={{ '& ::placeholder': { fontSize: '12px', color: '#000' } }} multiline rows={3} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p" className="searchItem-title" >
                            Image:
                        </Typography>
                        <TextField type="url" fullWidth defaultValue={singleFood?.thumb} {...register('thumb', { required: 'This field is required' })} error={Boolean(errors.thumb)} helperText={errors.thumb?.message} sx={{ '& ::placeholder': { fontSize: '12px', color: '#000' } }} />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4 }}>
                    <Button disabled={disable} type="submit" value="submit_close" variant="contained" className={(disable ? "disable-color" : "")} sx={{ backgroundColor: "#5BBC2E !important", px: 6, py: .8 }}>
                        {disable ? "Submitting" : "Submit"}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default UpdateFood;