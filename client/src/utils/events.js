/**
 * https://davidwalsh.name/css-animation-callback
 */
export function whichTransitionEvent(){
    const el = document.createElement('fakeelement');
    const transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
    }

    for(let t in transitions){
        if(el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}