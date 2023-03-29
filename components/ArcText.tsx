import React, {useEffect} from 'react';




export const ArcText = () => {
    useEffect(() => {
        const text = document.querySelector<HTMLElement>('#circle-text');
        if(text === null){
            console.log('hey')
            return;
        }
        else if(text && text.textContent){
            text.innerHTML = text.textContent.replace(/\S/g,
                // "<span class='letter inline-block  text-xs sm:text-lg uppercase origin-[0_65px] sm:origin-[0_10rem] md:origin-[0_11rem] lg:origin-[0_12rem] xl:origin-[0_12rem] 2xl:origin-[0_15rem] absolute sm:top-12 md:top-[4vh] lg:top-[8vh] 2xl:top-[12.5vh] sm:left-1/2 sm:right-1/2 font-medium z-50'>$&</span>");
                // "<span class='letter inline-block  text-xs sm:text-lg uppercase origin-[0_calc(20vh)] absolute sm:top-12 md:top-[4vh] lg:top-[8vh] 2xl:top-[12.5vh] sm:left-1/2 sm:right-1/2 font-medium z-50'>$&</span>");
                "<span class='letter inline-block text-xs sm:text-lg uppercase origin-[0_calc(20vh)] absolute sm:top-[calc(10vh)] sm:left-1/2 sm:right-1/2 font-light z-50'>$&</span>");
            const element = document.querySelectorAll<HTMLElement>('.letter');
            if(element === null)
                return;
            else if(element){
                element.forEach((el, index) => {
                    el.style.transform = `rotate(${index * 15.7}deg)`;
                });

                document.addEventListener('scroll', () => {
                    const scrollY = window.scrollY;
                    const rotate = scrollY / 5;
                    element.forEach((el, index) => {
                        el.style.transform = `rotate(${index * 15.5 + rotate}deg)`;
                    });
                })
            }
        }
    }, [])

    return (<h4 id={'circle-text'} className={'bg-blue-200 circle-text text-[9px]'}> creator  ✶  designer  ✶  coder ✶ </h4>);
}

export default ArcText;