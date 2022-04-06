import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Ait Taouit<span> Yanis</span></h4>
                <p className="paragraph">
                      Suite à mon admission au sein de l'école supérieur de l'Esiee Paris, 
                    j'ai l'honneur de vous informer que je suis à la recherche d'une entreprise 
                    qui pourrait m’accueillir en tant qu’apprentie ingénieur informatique et applications
                    pour une durée de 36 mois dans le cadre de ma formation à l'ESIEE Paris.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nom</p>
                        <p>Prénom</p>
                        <p>Age </p>
                        <p>Langues</p>
                    </div>
                    <div className="info">
                        <p>: Ait Taouit</p>
                        <p>: Yanis</p>
                        <p>: 20 </p>
                        <p>: Français , Anglais</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
