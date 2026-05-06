import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/ProfileImg.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/data';
import { motion } from 'framer-motion';
import { fadeIn, zoomIn, staggerContainer } from '../../utils/motion';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <HeroInnerContainer >
                        <HeroLeftContainer id="Left">
                            <motion.div variants={fadeIn("right", "spring", 0, 1)}>
                                <Title>Hi there & Welcome, I am <br /> {Bio.name}</Title>
                                <TextLoop>
                                    I am a
                                    <Span>
                                        <Typewriter
                                            options={{
                                                strings: Bio.roles,
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </Span>
                                </TextLoop>
                                <SubTitle>{Bio.description}</SubTitle>
                                <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                            </motion.div>
                        </HeroLeftContainer>

                        <HeroRightContainer id="Right">
                            <motion.div variants={fadeIn("left", "spring", 0, 1)}>
                                <Img src={HeroImg} alt="hero-image" />
                            </motion.div>
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    )
}

export default HeroSection