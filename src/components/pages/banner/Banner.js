import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Banner.css'
import { motion } from 'framer-motion';

const LeftImage = styled('img')({
    position: 'absolute',
    width: '420px',
    height: '315px',
    left: '-260px',
    top: '60px',

});

const LeftDot = styled('img')({
    position: 'absolute',
    left: '112px',
    width: '24px',
});
const DotImage = styled('img')({
    position: 'absolute',
    left: '65px',
    width: '24px',
    top: '260px',

});
const SecondDotImage = styled('img')({
    position: 'absolute',
    width: '24px',
    top: '120px',
    left: '-50px',
    zIndex: '999'
});

const BackImage = styled('img')({
    width: '720px',
    height: '515px',
    position: 'absolute',
    right: -300,
    top: -12,
});
const FrontImage = styled('img')({
    width: '620px',
    height: '460px',
});


function Banner() {



    return (
        <Box className='banner-bg' id='home'>
            <Container >
                <Grid container>
                    <Grid item lg={7} md={7} sm={6} xs={12} mt={{ md: 22, xs: 5 }} sx={{ display: 'flex', alignItems: 'center', paddingLeft: { lg: '90px' } }}>
                        <LeftImage src={require('../../assets/icons/shapes/Polygon6.png')} />
                        <LeftDot src={require('../../assets/icons/ret1.png')} />
                        <Box className='banner-text'>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ opacity: [0, 0.5, 0.7, 1], x: 0 }}
                                transition={{ duration: 1, delay: 0 }}
                            >
                                <Typography variant='h2'>Training With</Typography>
                            </motion.div>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ opacity: [0, 0.5, 0.7, 1], x: 0 }}
                                transition={{ duration: 1, delay: 0 }}
                            >
                                <Typography variant='h1'>Multiple ways</Typography>
                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ opacity: [0, 0.5, 0.7, 1], y: 0 }}
                                transition={{ duration: 1, delay: 0 }}
                            >
                                <Typography>
                                    Training Programs that will help you develop and achieve <br />
                                    the balanced harmony you are missing.Don`t get left out of the<br />
                                    doghouse! Sign up now to make sure you're up to date on<br />
                                    the letest happinings!
                                </Typography>
                            </motion.div>
                            <Box pt={2}>
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ opacity: [0, 0.5, 0.7, 1], y: 0 }}
                                    transition={{ type: 'spring', bounce: 0.5, duration: 1.5, delay: 1 }}
                                >
                                    <Button className='get_started_btn'>Get Started</Button>
                                </motion.div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={5} sm={6} xs={12} sx={{ position: 'relative'}}>
                        <Box sx={{ display: { lg: "block", md: 'block', xs: 'flex', }, justifyContent: 'center' }}>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ opacity: [0, 0.5, 0.7, 1], x: 0 }}
                                transition={{ duration: 1.2, delay: 0 }}
                            >
                                <SecondDotImage className='seconddot' src={require('../../assets/icons/ret1.png')} />
                                <BackImage className='imagebgback' src={require('../../assets/icons/shapes/Ellipse3.png')} />
                            </motion.div>
                            <Box sx={{paddingTop:{lg: '80px'}, display: { lg: "block", md: 'block', xs: 'flex', }, justifyContent: 'center' }}>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ opacity: [0, 0.5, 0.7, 1], x: 0 }}
                                    transition={{ duration: 1.2, delay: 0 }}
                                >
                                    <DotImage className='dotimage' src={require('../../assets/icons/ret1.png')} />
                                    <FrontImage className='imagebgfront' src={require('../../assets/img/banner_uper.png')} />
                                </motion.div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner