import React from 'react'
import Navbar from '../common/Navbar'
import Banner from '../banner/Banner'
import TrainingCaser from '../trainingwithcaser/TrainingCaser'
import TrainingSection from '../trainingsection/TrainingSection'
import DogCompititionSection from '../trainingwithcaser/DogCompititionSection'
import TipsSection from '../tipssection/TipsSection'
import TechniqueSection from '../trainingwithcaser/TechniqueSection'
import Footer from '../common/Footer'

function Index() {
  return (
    <>
    <Navbar />
    <Banner />
    <TrainingCaser />
    <TrainingSection />
    <DogCompititionSection />
    <TipsSection />
    <TechniqueSection />
    <Footer />
    </>
  )
}

export default Index