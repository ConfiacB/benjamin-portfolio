import React from "react";
import CloseIcon from '../../images/close.png';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

import {
    PortfolioCard,
    PortfolioIcon,
    PortfolioH2,
    StyleModal,
    StyleModalTitle,
    StyleModalP,
    Img,
    Img2,
    Img3,
    Img4,
    StyleModalLinkContainer,
    Close
    } from './PortfolioElements';

const PortfolioProject = ({ id, toggle, imgIcon, imgProject, title, open, alt, text, tools, languages, imageNumber, chipData}) => {
    const replaceWithBr = (str) => {
        return str.replace(/\n/g, "<br />")
    }
    
    let img;
    if(imageNumber===1) {
        img = <Img src={imgProject} alt={alt} />;
    } else if (imageNumber===2) {
        img = <Img2 src={imgProject} alt={alt} />;
    } else if (imageNumber===3) {
        img = <Img3 src={imgProject} alt={alt} />;
    } else if (imageNumber===4) {
        img = <Img4 src={imgProject} alt={alt} />;
    } else {
        img = <Img src={imgProject} alt={alt} />;
    }
    
    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));
    
    return (
        <>
            <PortfolioCard id={id} onClick={toggle}>
                <PortfolioIcon src={imgIcon} />
                <PortfolioH2>{title}</PortfolioH2>
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                    }}
                    component="ul"
                    >
                        {chipData.map((data) => {
                            return (
                                <ListItem key={data.key}>
                                    <Chip
                                        label={data.label}
                                        size={"small"}
                                        color={data.color ? data.color : "default"}
                                    />
                                </ListItem>
                            );
                        })}
                </Paper>
            </PortfolioCard>

            <StyleModal
                isOpen={open}
                onBackgroundClick={toggle}
                onEscapeKeydown={toggle}
            >
            <Close src={CloseIcon} alt="close" onClick={toggle} />
            {img}
            <StyleModalTitle>{title}</StyleModalTitle>
            <StyleModalP dangerouslySetInnerHTML={{__html: replaceWithBr(text)}} />
            <StyleModalP>
                <b>Tools : </b>{tools}<br />
                <b>Languages : </b>{languages}
            </StyleModalP>
            <StyleModalLinkContainer>
                {/*
                <ButtonTwo 
                    target="_blank"
                    href=""
                >
                    View Code
                </ButtonTwo>
                <ButtonTwo 
                    target="_blank"
                    href=""
                >
                    View Website
                </ButtonTwo>
                */}
            </StyleModalLinkContainer>
            </StyleModal>
        </>
    );
};

export default PortfolioProject;