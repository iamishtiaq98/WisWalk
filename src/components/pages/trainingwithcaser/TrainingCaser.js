import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import './TrainingCaser.css';

function TrainingSection() {

    const CardImage = styled('img')({
        width: '80px',
        height: '75px'
    });

    const BGImage = styled('img')({
        width: '300px',
        height: '285px',
        position: 'absolute',
        right: -126,
        top: 95,
    });

    const BGImageSecond = styled('img')({
        width: '100%',
        height: '670px',
        position: 'absolute',
        right: -326,
        top: -40,
    });

    const BGOrangePolygon = styled('img')({
        position: 'absolute',
        right: '-65px',
        top: '-100px',
        width: '100%',
    });

    const BGTreePolygon = styled('img')({
        position: 'absolute',
        right: '-60px',
        top: '-110px',
        width: '95%',
    });

    const DogManPolygon = styled('img')({
        position: 'absolute',
        width: '55%',
        top: '-22px',
        right: '85px',
        bottom: '0px',
    });

    const text = "Discover More"
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
        <Box sx={{ padding: { lg: '60px 0', xs: '10px 0' }, backgroundColor: "#fff" }}>
            <Container>
                <Grid container>
                    <Grid item lg={6} xs={12}>
                        <Box sx={{ padding: '40px 45px' }}>
                            <Box className="training-text">
                                <BGImage src={require('../../assets/icons/shapes/dotedbg.png')} />
                                <motion.div
                                    initial={{ x: -45, y: -90, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: [0, 0.5, 0.7, 1] }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                >
                                    <Typography variant='h3'>
                                        Master your Humen & Dog connection
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 90, y: 45, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: [0, 0.5, 0.7, 1] }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                >
                                    <Typography >
                                        Training Caser's Way creates contact that educates, inspires,<br />
                                        and empowers people to transform their communities.<br />
                                        Using humens' relationships with animals.<br />
                                        we open minds to the belief that finding a calm,<br />
                                        confident center, can ultimately change the world,<br />
                                        starting with you. Caser millan's training programs will<br />
                                        help you develop and achieve the balanced harmony<br />
                                        you are missing<br />
                                    </Typography>
                                </motion.div>
                            </Box>
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
                    </Grid>
                    <Grid item lg={6} xs={12} >
                        <Box sx={{ position: 'relative' }}>
                            <BGImageSecond src={require('../../assets/icons/shapes/bgsecond.png')} />
                            <Grid container columnSpacing={5} rowSpacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <motion.div
                                        initial={{ x: -45, y: -45, opacity: 0 }}
                                        whileInView={{ x: 0, y: 0, opacity: [0, 0.5, 0.7, 1] }}
                                        transition={{ duration: 0.7, delay: 1 }}
                                    >
                                        <Card className='custom_card' sx={{ backgroundColor: '#083c9f', border: '1px solid #083c9f' }}>
                                            <CardMedia sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CardImage src={require('../../assets/img/cardimage1.png')} />
                                                <Typography variant='h6'> How To Get Your Dog To Listen To You</Typography>
                                            </CardMedia>
                                            <CardContent>
                                                <Typography variant="body2" color="text.primary">
                                                    When your dog won't listen your Commands, it can be frustrating and it can also be dangrous
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <motion.div
                                        initial={{ x: 45, y: -45, opacity: 0 }}
                                        whileInView={{ x: 0, y: 0, opacity: [0, 0.5, 0.7, 1] }}
                                        transition={{ duration: 0.7, delay: 1 }}
                                    >
                                        <Card className='custom_card' sx={{ backgroundColor: '#699c01', border: '1px solid #699c01' }}>
                                            <CardMedia sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CardImage src={require('../../assets/img/cardimage2.png')} />
                                                <Typography variant='h6'> 5 Essential Dog Commands</Typography>
                                            </CardMedia>
                                            <CardContent>
                                                <Typography variant="body2" color="text.primary">
                                                    Are you looking for the best commands to teach your dog? Although having a trained dog isn't the same
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <motion.div
                                        initial={{ x: -45, y: 45, opacity: 0 }}
                                        whileInView={{ x: 0, y: 0, opacity: [0, 0.5, 0.7, 1] }}
                                        transition={{ duration: 0.7, delay: 1 }}
                                    >
                                        <Card className='custom_card' sx={{ backgroundColor: '#da7d06', border: '1px solid #da7d06' }}>
                                            <CardMedia sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CardImage src={require('../../assets/img/cardimage3.png')} />
                                                <Typography variant='h6'>The Do's And Don'ts Of Positive</Typography>
                                            </CardMedia>
                                            <CardContent>
                                                <Typography variant="body2" color="text.primary">
                                                    Positive rainforcement can be a powerful training tool for dogs, but it's not as simple as just praising
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <motion.div
                                        initial={{ x: 45, y: 45, opacity: 0 }}
                                        whileInView={{ x: 0, y: 0, opacity: [0, 0.5, 0.7, 1] }}
                                        transition={{ duration: 0.7, delay: 1 }}
                                    >
                                        <Card className='custom_card' sx={{ backgroundColor: '#f84a6f', border: '1px solid #f84a6f' }}>
                                            <CardMedia sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CardImage src={require('../../assets/img/cardimage4.png')} />
                                                <Typography variant='h6'>Starting Your Puppy Off Right!</Typography>
                                            </CardMedia>
                                            <CardContent>
                                                <Typography variant="body2" color="text.primary">
                                                    By Caser Millan People often ask me at what age they shouold startpuppy training.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container pb={10} pt={{md: 10, xs:8  }} columnSpacing={3} rowSpacing={2} sx={{ overflow: 'hidden !important' }} >
                    <Grid item lg={6} md={6} xs={12} sx={{ width: '100%', height: { lg: '100%', sm: '600px', xs: '400px' } }} >
                        <Box mt={15} sx={{ position: 'relative' }}>
                            <motion.div
                                initial={{ rotate: 90, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <BGOrangePolygon className='bg_orange' src={require('../../assets/icons/shapes/Polygon4.png')} />
                            </motion.div>

                            <motion.div
                                initial={{ rotate: -90, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <BGTreePolygon className='bg_tree' src={require('../../assets/img/dogmanbg.png')} />
                            </motion.div>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ opacity: [0, 0.5, 0.7, 1], y: [60, 40, 20, 10, 0] }}
                                transition={{ type: "bounce", bounce: 0.5, duration: 1, delay: 1 }}
                            >
                                <DogManPolygon className='bg_man_dog' src={require('../../assets/img/dogmanimage.png')} />
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{  x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                            <Box className='box' >
                                <Typography variant='span'>
                                    RG &nbsp; &nbsp; +99
                                </Typography>
                            </Box>
                            </motion.div>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} zIndex={'999'}>
                        <Box className='right-text' pt={5}>
                            <motion.div
                                initial={{ rotate: 45, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <Typography variant='h4'>Project Calm <br /> and Assertive Energy</Typography>
                            </motion.div>
                            <motion.div
                                initial={{ rotate: -45, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <Typography className='description'>
                                    Most dog owners want a calm and assertive dog. But how do you<br />
                                    get to that point? it is not something that happens overnightite.
                                </Typography>
                            </motion.div>
                            <Box pt={3} px={5}>
                                <motion.div
                                    initial={{ x: 90, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                >
                                    <Typography variant='h6'>A Powerful Paradox</Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ x: -45, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                >
                                    <Typography className='description'>
                                        In the years that i've been working with dogs, I've met some pretty<br />
                                        powerful people. Not all of them are necessarily famouse, but a <br />
                                        lot of them have daily lives
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ x: -45, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                >
                                    <Typography variant='h6'>Calm and Consitent</Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 45, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                >
                                    <Typography className='description'>
                                        There's one thing that's inevitable in nature, and that's change.<br />
                                        There are simple and constant changes, like sunrise and sunset,<br />
                                        and the turning of seasons.
                                    </Typography>
                                </motion.div>
                                <Box pt={3}>
                                    {
                                        <motion.button
                                            style={{ textTransform: "capitalize !important", overflow: "hidden", display: "flex", flexWrap: "wrap", fontSize: "1rem" }}
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
                </Grid>
            </Container>
        </Box>
    )
}

export default TrainingSection