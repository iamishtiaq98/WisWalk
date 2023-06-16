import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import './DogCompititionSection.css';

function DogCompititionSection() {



    const BGBluePolygon = styled('img')({
        position: 'absolute',
        right: '-65px',
        top: '-100px',
        width: '100%',
    });

    const BGGreenPolygon = styled('img')({
        position: 'absolute',
        right: '-60px',
        top: '-110px',
        width: '95%',
    });

    const DogPolygon = styled('img')({
        position: 'absolute',
        width: '55%',
        top: '80px',
        right: '75px',
        bottom: '0px',
    });

    const LabelImage = styled('img')({
        position: 'absolute',
        width: '55%',
        top: '22px',
        left: '-206px',
        bottom: '0px',
    });

    const ImageLeft = styled('img')({
        width: '100%',
    });
    const ImageRight = styled('img')({
        width: '100%',
    });





    return (
        <Box sx={{ padding: { lg: '60px 0', xs: '10px 0' }, backgroundColor: "#fff" }}>
            <Container>
                <Grid container pb={10} pt={10} columnSpacing={3} rowSpacing={2} sx={{ overflow: 'hidden !important' }} >
                    <Grid item lg={6} md={6} xs={12} sx={{ width: '100%', height: { lg: '100%', sm: '600px', xs: '400px' } }} >
                        <Box mt={{ lg:10, md:5, xs:2 }} sx={{ position: 'relative' }}>
                            <motion.div
                                initial={{ rotate: 90, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <BGBluePolygon className='bg-blue' src={require('../../assets/icons/shapes/Polygon5.png')} />
                            </motion.div>

                            <motion.div
                                initial={{ rotate: -90, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <BGGreenPolygon className='bg-green' src={require('../../assets/img/dogbgfront.png')} />
                            </motion.div>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ opacity: [0, 0.5, 0.7, 1], y: [60, 40, 20, 10, 0] }}
                                transition={{ type: "bounce", bounce: 0.5, duration: 1, delay: 1 }}
                            >
                                <DogPolygon className='bg-dog' src={require('../../assets/img/dog.png')} />
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <Box className='boxa' >
                                    <LabelImage src={require('../../assets/icons/shapes/doglabel.png')} />
                                </Box>
                            </motion.div>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} >
                        <Box className='righttext' pt={5}>

                            <motion.div
                                initial={{ rotate: 45, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <Typography variant='h4'>Bounce Back Like<br />A Dog</Typography>
                            </motion.div>
                            <motion.div
                                initial={{ rotate: -45, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <Typography className='desc'>
                                    One of humanity's most powerful emotions is empathy. It's a trait not shared<br />
                                    by a lot of animals, although elephants, dolphins, whales, and chimpanzees<br />
                                    seem to be capable of it. So are our dogs.
                                </Typography>
                            </motion.div>
                            <Box pt={3}>
                                <Grid container>
                                    <Grid item lg={6} md={6} xs={6}>
                                        <motion.div
                                            initial={{ x: -100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                            transition={{ duration: 0.7, delay: 0.5 }}
                                        >
                                            <ImageLeft src={require('../../assets/img/dogcompleft.png')} />
                                        </motion.div>
                                    </Grid>
                                    <Grid item lg={6} md={6} xs={6}>

                                        <motion.div
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                            transition={{ duration: 0.7, delay: 0.5 }}
                                        >
                                            <ImageRight src={require('../../assets/img/dogcompright.png')} />
                                        </motion.div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default DogCompititionSection