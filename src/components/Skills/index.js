import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/data'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
padding: 10px 0 100px 0;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Skill = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 14px 24px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      >
        <Wrapper>
          <motion.div variants={fadeIn("up", "spring", 0.1, 1)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Title>Skills</Title>
            <Desc>Here are some of my skills on which I have been working on for the past 3 years.</Desc>
          </motion.div>
          <SkillsContainer style={{ width: "100%" }}>
            {skills.map((skill, index) => (
              <motion.div variants={fadeIn("up", "spring", index * 0.1 + 0.2, 0.8)} key={index} style={{ width: "100%", height: "100%" }}>
                <Skill>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills.map((item, idx) => (
                      <SkillItem key={idx}>
                        <SkillImage src={item.image}/>
                        {item.name}
                      </SkillItem>
                    ))}
                  </SkillList>
                </Skill>
              </motion.div>
            ))}
          </SkillsContainer>
        </Wrapper>
      </motion.div>
    </Container>
  )
}

export default Skills