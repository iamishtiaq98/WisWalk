import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import './TipsSection.css';

function TipsSection() {

    const CardImage = styled('img')({
    });

    return (
        <Box className='sec-bg' id='training'>
            <Container >
                <Grid container>
                    <Grid item lg={12}>
                    <motion.div
                        initial={{ scale: 1.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{duration: 1, delay: 0.8 }}
                        >
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography className='main-heading1' variant='h2'>Tips for Sociaizing a Dog</Typography>
                        </Box>
                        </motion.div>
                        <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{duration: 1, delay: 1 }}
                        >
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography className='tips-heading-text' >Do you have a dog that seems anxious or stressed out when around other dogs?</Typography>
                        </Box>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} pt={2}>
                    <Grid item lg={3} sm={3} xs={6}>
                        <motion.div
                        initial={{ y: -100, scale: 0, opacity: 0 }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{duration: 1, delay: 0.6 }}
                        >
                        <Box className='image-box' pb={5}>
                            <CardImage src={require('../../assets/img/Card1Image.png')} />
                            <Typography variant='h6'>Take a Class</Typography>
                        </Box>
                        </motion.div>
                    </Grid>
                    <Grid item lg={3} sm={3} xs={6}>
                    <motion.div
                        initial={{ y: -100, scale: 0, opacity: 0 }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{duration: 1, delay: 0.8 }}
                        >
                        <Box className='image-box' pt={5}>
                            <CardImage src={require('../../assets/img/Card2Image.png')} />
                            <Typography variant='h6'>Stay Positive</Typography>
                        </Box>
                        </motion.div>
                    </Grid>
                    <Grid item lg={3} sm={3} xs={6}>
                    <motion.div
                        initial={{ y: -100, scale: 0, opacity: 0 }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{duration: 1, delay: 1 }}
                        >
                        <Box className='image-box' pb={5}>
                            <CardImage src={require('../../assets/img/cardimage3.png')} />
                            <Typography variant='h6'>Go for a Walk</Typography>
                        </Box>
                        </motion.div>
                    </Grid>
                    <Grid item lg={3} sm={3} xs={6}>
                    <motion.div
                        initial={{ y: -100, scale: 0, opacity: 0 }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{duration: 1, delay: 1.2 }}
                        >
                        <Box className='image-box' pt={5}>
                            <CardImage src={require('../../assets/img/Card4Image.png')} />
                            <Typography variant='h6'>Give Varaiety</Typography>
                        </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default TipsSection