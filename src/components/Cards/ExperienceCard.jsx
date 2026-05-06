import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.div`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 100%;
    max-width: 800px;
    border-radius: 16px;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.primary + 20};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 24px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s ease-in-out;
    
    &:hover{
        box-shadow: 0px 0px 20px rgba(133, 76, 230, 0.4);
        transform: translateY(-5px);
        border: 1px solid rgba(133, 76, 230, 0.8);
    }
    
    @media only screen and (max-width: 768px){
        padding: 16px;
        gap: 12px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const Image = styled.img`
    height: 50px;
    max-width: 150px;
    object-fit: contain;
    border-radius: 8px;
    @media only screen and (max-width: 768px){
        height: 40px;
        max-width: 120px;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column; 
    flex: 1;
`

const Role = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Company = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const SkillsLabel = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 8px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const SkillBadge = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 15};
    padding: 6px 12px;
    border-radius: 20px;
    @media only screen and (max-width: 768px){
        font-size: 11px;
        padding: 4px 8px;
    }
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Header>
                <Image src={experience.img} alt={experience.company} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Header>
            <Description>
                {experience?.desc &&
                    <Span>
                        {experience?.desc?.map((item, index) => (
                            <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                                <span>•</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </Span>
                }
            </Description>
            {experience?.skills && (
                <div>
                    <SkillsLabel>Skills Utilized:</SkillsLabel>
                    <ItemWrapper>
                        {experience?.skills?.map((skill, index) => (
                            <SkillBadge key={index}>{skill}</SkillBadge>
                        ))}
                    </ItemWrapper>
                </div>
            )}
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard
