import React from "react";
import CloseIcon from '../../images/close.png';
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

const PortfolioProject = ({ id, toggle, imgIcon, imgProject, title, open, alt, text, tools, languages, imageNumber}) => {
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
    
    return (
        <>
            <PortfolioCard id={id} onClick={toggle}>
            <PortfolioIcon src={imgIcon} />
            <PortfolioH2>{title}</PortfolioH2>
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