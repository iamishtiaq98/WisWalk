import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import './Footer.css';

const LogoImage = styled('img')({
    width: '50%'
});

function Footer() {
    return (

        <Box className='footer-bg' pt={10} pb={{md: 5, xs: 0 }}>
            <Grid container spacing={3} py={{ lg: 30, sm: 15 }} px={{ lg: 18, sm: 5 }}>
                <Grid item md={4} sm={12} xs={12}>
                    <Box px={{ lg: 0, xs: 6 }}>
                        <LogoImage src={require('../../assets/logo/Group 19.png')} />
                        <Typography pt={{ lg: 3, xs: 5 }} sx={{ lineHeight: '1.5', color: '#fff' }} >
                            It's not where you are at today or where you<br />
                            came from but where you will be at<br />
                            tommorrow
                        </Typography>

                        <Box pt={3}>
                            <form>
                                <Grid container columnSpacing={2}>
                                    <Grid item xs={8}>
                                        <input className='input-field' name='email' placeholder='Email' />
                                    </Grid>
                                    <Grid item xs={4} display={'flex'} justifyContent={'flex-end'}>
                                        <button className='btn-subscribe' variant='Primary' >Go</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={6}>
                    <ul className='list'>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <li>Help My Dog is..</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <li> Dog Psychology</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <li>Dog Care</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            <li>Adoption Tips</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                        >
                            <li>About Cesar</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                        >
                            <li>Shop</li>
                        </motion.div>
                    </ul>
                </Grid>
                <Grid item md={4} sm={6} xs={6}>
                    <ul className='list'>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <li>Train With Cesar</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <li>Watch New Show</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <li>CesarTv</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            <li>All About Dogs</li>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, y: -45, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                        >
                            <li>Form The Pack</li>
                        </motion.div>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer