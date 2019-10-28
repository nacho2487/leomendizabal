import React from 'react';
const actions = {
	MAIN: 'MAIN',
	FALLBACK: 'FALLBACK'
}

const reducer = (currentSrc, action) => {
    if (action.type === actions.MAIN) {
		return action.src;
    } 
    if (!currentSrc) {
      	return action.src;
    }
    return currentSrc;
}
  
export const useProgressiveImage = ({ src, fallback }) => {
    const [currentSrc, dispatch] = React.useReducer(reducer, null);
    React.useEffect(() => {
		const mainImage = new Image();
		const fallbackImage = new Image();
	
		mainImage.onload = () => {
			dispatch({ type: actions.MAIN, src });
		};
		fallbackImage.onload = () => {
			dispatch({ type: actions.FALLBACK, src: fallback });
		};
	
		fallbackImage.src = fallback;
		mainImage.src = src;
    }, [src, fallback]);
  
    return currentSrc;
  }