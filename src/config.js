import { css } from "@emotion/css";

export const birdArray = ['gandras', 'erelis', 'peleda', 'sniegena', 'gulbe', 'kalakutas', 'tulzys', 'kekstas', 'varna'];
export const mainColorArray = ['#9ec26a', '#96a1ff', '#C27D6B', '#80C26B', '#86cbff', '#8a8aff', '#85d195', '#d5a99a', '#baaec2'];
export const secondaryColorArray = ['#82a157', '#7482f7', '#bf6750', '#6bbf50', '#5db8fc', '#5e5edb', '#5dcf75', '#d4937d', '#ae93bf'];
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
export const birdNames = ['Gandras', 'Erelis', 'Pelėda', 'Sniegena', 'Gulbė', 'Kalakutas', 'Tulžys', 'Kėkštas', 'Varna'];

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