import { css } from "@emotion/css";

export const birdArray = ['gandras', 'erelis', 'peleda', 'zyle', 'gulbe', 'kalakutas', 'tulzys', 'kekstas', 'varna'];
export const mainColorArray = ['#9ec26a', '#96a1ff', '#7462a8', '#54a84e', '#86cbff', '#8a8aff', '#85d195', '#d5a99a', '#baaec2'];
export const backgroundArray = [
    'radial-gradient(circle, rgba(158,194,106,1) 0%, rgba(139,172,90,1) 100%)', 
    'radial-gradient(circle, rgba(150,161,255,1) 0%, rgba(131,144,250,1) 100%)', 
    'radial-gradient(circle, rgba(116,98,168,1) 0%, rgba(84,69,127,1) 100%)', 
    'radial-gradient(circle, rgba(84,168,78,1) 0%, rgba(42,99,37,1) 100%)', 
    'radial-gradient(circle, rgba(134,203,255,1) 0%, rgba(81,180,255,1) 100%)', 
    'radial-gradient(circle, rgba(138,138,255,1) 0%, rgba(98,98,255,1) 100%)', 
    'radial-gradient(circle, rgba(133,209,149,1) 0%, rgba(103,168,117,1) 100%)', 
    'radial-gradient(circle, rgba(213,169,154,1) 0%, rgba(180,139,125,1) 100%)', 
    'radial-gradient(circle, rgba(186,174,194,1) 0%, rgba(156,146,163,1) 100%)',
];     
export const birdNames = ['Gandras', 'Erelis', 'Pelėda', 'Zylė', 'Gulbė', 'Kalakutas', 'Tulžys', 'Kėkštas', 'Varna'];

export const customModalStyles = {
    content: {
      background: '#5E5E5E',
        color: 'whitesmoke'
    },
};

export const btn_animation = css`
    transition: .2s ease-in-out 0s;
    &:hover {
        transform: scale(1.25);
    }
    &:active {
        transform: scale(1);
        &:after {
            transform: scale(0);
        }
    }
`;