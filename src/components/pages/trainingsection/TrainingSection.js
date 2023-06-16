import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

import './TrainingSection.css';
import { motion } from 'framer-motion';

function TrainingSection() {

  const text = "Get Started"
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

  const Image = styled('img')({
    width: '80%',
    position: 'relative'
  });

  const LeftImageBg = styled('img')({
    width: '70%',
    position: 'absolute',
    top: '25px',
  });

  const LeftImage = styled('img')({
    width: '68%',
    position: 'absolute',
    top: '25px',
    left: '24px',
  })

  const RightImageBg = styled('img')({
    width: '70%',
    position: 'absolute',
    top: '25px',
  });

  const RightImage = styled('img')({
    position: 'absolute',
    width: '75%',
    top: '2px',
    left: '8px',
  });

  const BottomImageBg = styled('img')({
    width: '72%',
    position: 'absolute',
    top: '20px',
  });

  const BottomImage = styled('img')({
    position: 'absolute',
    width: '73%',
    top: '6px',
    left: '4px',
  });

  return (
    <Box id='training'>
      <Grid container >
        <Grid item lg={12} xs={12}>
          <Box padding={{ lg: 10, xs: 1 }}>
            <Box className='banner-trainer'>
              <Grid container className='text-area' display={'flex'} alignItems={'center'} px={{ lg: 12, xs: 5 }}>
                <Grid item lg={6} md={6} sm={6}>
                  <Box >
                    <motion.div
                      initial={{ x: 100, y: 45, scale: 0 }}
                      whileInView={{ x: 0, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1, yoyo: Infinity }}
                    >
                      <Typography variant='h2'>Shop Cesar's<br />Recomended Products!</Typography>
                    </motion.div>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} className='right-side'>
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
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container p={{lg:10, sm:8, xs:1 }}>
        <Grid item lg={6} md={6} xs={12}>
          <Box className='right-text' pt={{ lg: 15, xs: 0 }} >
            <motion.div
              initial={{ x: 60, y: -90, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: [0, 0.5, 0.7, 1] }}
              transition={{ type: 'spring', restDelta: 0.5, duration: 0.7, delay: 0.5 }}
            >
              <Typography variant='h4'>Dog Not Playing<br />Nice</Typography>
            </motion.div>
            <motion.div
              initial={{ x: -90, y: -45, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: [0, 0.5, 0.7, 1] }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Typography className='description'>
                How do i stop my one year old pit bull from being so rough while playing<br />
                with other dogs? he is a gentle dog but very strong and has drawn<br />
                blood of another dog from simple  playing.
              </Typography>
            </motion.div>
            <Box>
              <Box display={'flex'} alignItems={'center'} className='circle-div'>
                <motion.div
                  initial={{ y: -100, rotate: 360, opacity: 0 }}
                  whileInView={{ y: 0, rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                  transition={{ type: 'spring', damping: 100, duration: 0.7, delay: 0.5 }}
                >
                  <Box className='circle'> 1 </Box>
                </motion.div>
                <Box p={2}>
                  <motion.div
                    initial={{ x: 90, opacity: 0 }}
                    whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                    transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.5 }}
                  >
                    <Typography variant='h6'>Control the excitement</Typography>
                  </motion.div>
                  <motion.div
                    initial={{ x: -45, opacity: 0 }}
                    whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <Typography className='description'>
                      Dogs, like humans, have many levels of excitemenrt.<br />
                      Grabbing another dog's skin would be a 10 or close.
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
              <Box display={'flex'} alignItems={'center'} className='circle-div'>
                <motion.div
                  initial={{ y: 100, rotate: 360, opacity: 0 }}
                  whileInView={{ y: 0, rotate: 0, opacity: [0, 0.5, 0.7, 1] }}
                  transition={{ type: 'spring', damping: 50, duration: 0.7, delay: 0.5 }}
                >
                  <Box className='circle'> 2 </Box>
                </motion.div>
                <Box p={2}>
                  <motion.div
                    initial={{ x: -45, opacity: 0 }}
                    whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <Typography variant='h6'>Practice makes perfect</Typography>
                  </motion.div>
                  <motion.div
                    initial={{ x: 45, opacity: 0 }}
                    whileInView={{ x: 0, opacity: [0, 0.5, 0.7, 1] }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <Typography className='description'>
                      You can practice playing with toys and treats before<br />
                      engaging eith another dog, so you know that you have<br />
                      control over his level of excitement
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={6} md={6} xs={12} p={1}>
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Box sx={{ position: 'relative' }}>
              <Image src={require('../../assets/icons/shapes/circle-grey-white.png')} />
              <Box className='left-box'>
                <LeftImageBg src={require('../../assets/icons/shapes/Rectangleblue.png')} />
                <LeftImage src={require('../../assets/img/DogFight1.png')} />
              </Box>
              <Box className='right-box'>
                <RightImageBg src={require('../../assets/icons/shapes/RectangleLightOrange.png')} />
                <RightImage src={require('../../assets/img/DogFight2.png')} />
              </Box>
              <Box className='bottom-box'>
                <BottomImageBg src={require('../../assets/icons/shapes/RectangleDarkOrange.png')} />
                <BottomImage src={require('../../assets/img/DogFight3.png')} />
              </Box>
            </Box>
          </motion.div>
         
        </Grid>

      </Grid>
    </Box>
  )

}

export default TrainingSection