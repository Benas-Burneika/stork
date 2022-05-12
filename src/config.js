import { css } from "@emotion/css";

export const birdArray = ['gandras', 'erelis', 'peleda', 'sniegena', 'gulbe', 'kalakutas', 'tulzys', 'kekstas', 'varna'];
export const mainColorArray = ['#9ec26a', '#96a1ff', '#C27D6B', '#80C26B', '#86cbff', '#8a8aff', '#85d195', '#d5a99a', '#baaec2'];
export const backgroundArray = [
    'radial-gradient(circle, rgba(158,194,106,1) 0%, rgba(139,172,90,1) 100%)', 
    'radial-gradient(circle, rgba(150,161,255,1) 0%, rgba(131,144,250,1) 100%)', 
    'radial-gradient(circle, rgba(247,199,199,1) 0%, rgba(194,125,107,1) 100%)', 
    'radial-gradient(circle, rgba(144,222,119,1) 0%, rgba(128,194,107,1) 100%)', 
    'radial-gradient(circle, rgba(134,203,255,1) 0%, rgba(81,180,255,1) 100%)', 
    'radial-gradient(circle, rgba(138,138,255,1) 0%, rgba(98,98,255,1) 100%)', 
    'radial-gradient(circle, rgba(133,209,149,1) 0%, rgba(103,168,117,1) 100%)', 
    'radial-gradient(circle, rgba(213,169,154,1) 0%, rgba(180,139,125,1) 100%)', 
    'radial-gradient(circle, rgba(186,174,194,1) 0%, rgba(156,146,163,1) 100%)',
];     
export const birdNames = ['Baltasis Gandras', 'Jūrinis Erelis', 'Didysis Apuokas', 'Juodagalvė Sniegena', 'Gulbė Nebylė', 'Laukinis Kalakutas', 'Paprastasis Tulžys', 'Eurazinis Kėkštas', 'Paprastasis Kovas'];

export const customModalStyles = css`
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    border: 1px solid #ccc;
    overflow: auto;
    outline: none;
    padding: 20px;
    background: #5E5E5E;
    color: whitesmoke;
    inset: 40px;

    @media screen and (max-width: 650px) {
        inset: 10px;
    }
`;

export const removeBtnStyle = css`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: inherit;
    border: none;
`;

export const modalParagraph = css`
    margin: 0 20%;
    line-height: 1.5;
    font-size: 20px;

    @media screen and (max-width: 650px) {
        margin: 0;
    }
`;

export const btn_animation = css`
    transition: .2s ease-in-out 0s;
    &:active {
        transform: scale(1.2);
        transition: .1s;
    }

    @media screen and (min-width: 650px) {
        &:hover {
            transform: scale(1.25);
        }
        &:active {
            transform: scale(1);
            &:after {
                transform: scale(0);
            }
        }
    }
`;