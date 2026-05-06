import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/data'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      >
        <Wrapper>
          <motion.div variants={fadeIn("up", "spring", 0.1, 1)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Title>Projects</Title>
            <Desc>
              I have worked on a wide range of projects. Here are some of my projects.
            </Desc>
          </motion.div>
          <CardContainer>
            {toggle === 'all' && projects
              .map((project, index) => (
                <motion.div variants={fadeIn("up", "spring", index * 0.1 + 0.2, 0.8)} key={index}>
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                </motion.div>
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project, index) => (
                <motion.div variants={fadeIn("up", "spring", index * 0.1 + 0.2, 0.8)} key={index}>
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                </motion.div>
              ))}
          </CardContainer>
        </Wrapper>
      </motion.div>
    </Container>
  )
}

export default Projects