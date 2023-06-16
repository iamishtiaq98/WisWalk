import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import './DogCompititionSection.css';

const BGRedPolygon = styled('img')({
    position: 'absolute',
    width: '74%',
    top: '-58px',
    left: '50px',
});

const BGBrownPolygon = styled('img')({
    position: 'absolute',
    right: '48px',
    top: '-172px',
    width: '100%',
});

const BranImage = styled('img')({
    position: 'absolute',
    width: '60%',
    top: '231px',
    left: '-335px',
});



function TechniqueSection() {

    const text = "Contact Us Today"
    const Text = Array.from(text);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.9 * i, delay: 0.8 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,

            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };
    return (
        <Box sx={{ backgroundColor: "#fff" }}>
            <Container>
                <Grid container py={{ lg: 10, xs: 0 }} columnSpacing={3} rowSpacing={2} sx={{ overflow: 'hidden !important' }} >
                    <Grid item lg={6} md={6} xs={12} zIndex={'999'}>
                        <Box className='tec-left-side' pt={5}>
                            <motion.div
                                initial={{ rotate: 45, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <Typography variant='h4'>Pack Leadership<br />Technique</Typography>
                            </motion.div>
                            <motion.div
                                initial={{ rotate: -45, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <Typography className='desc'>
                                    `To dogs,` says Caser, `energy is everything.` Because<br />
                                    dogs communicate with energy, our personal energy plays<br />
                                    a centeral role in our relationship with them. Dogs
                                </Typography>
                            </motion.div>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Box pt={3}>
                                    {
                                        <motion.button
                                            style={{ textTransform: "capitalize !important", zIndex: '999', overflow: "hidden", display: "flex", flexWrap: "wrap", fontSize: "1rem" }}
                                            variants={container}
                                            initial="hidden"
                                            whileInView="visible"
                                            className='btn_discover'
                                        >
                                            {Text.map((letter, index) => (
                                                <motion.span variants={child} key={index} >
                                                    <Typography  > {letter === " " ? "\u00A0" : letter}</Typography>
                                                </motion.span>
                                            ))}
                                        </motion.button>
                                    }

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} sx={{ width: '100%', height: { lg: '100%', sm: '600px', xs: '400px' } }} >
                        <Box sx={{ position: 'relative' }}>
                            <motion.div
                                initial={{ rotate: 90, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <BGRedPolygon className='red-image' src={require('../../assets/icons/shapes/Polygon1.png')} />
                            </motion.div>

                            <motion.div
                                initial={{ rotate: -90, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <BGBrownPolygon className='dog-girl' src={require('../../assets/img/doggirl.png')} />
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <Box className='boxa' >
                                    <BranImage className='brand-image' src={require('../../assets/icons/shapes/brand.png')} />
                                </Box>
                            </motion.div>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default TechniqueSection