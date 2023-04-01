
import React, { useEffect } from 'react';

type CircleTextProps = {
    text: string;
    width: number;
};

function splitText(text: string) {
    return text.split('').map((letter) => {
        return `<span id='letter' class='letter absolute text-xs top-10 left-1/2 uppercase '> ${letter} </span>`;
    }).join('');
}

type textElement = {
    element: NodeList;
}

export const CircleText = ({ text, width }: CircleTextProps) => {

    useEffect(() => {

        const textElement = document.querySelector<HTMLElement>('.circle-text');

        if (textElement === null) {
            return;
        }
        else if (textElement && textElement.textContent) {

            // split text into letters
            textElement.innerHTML = splitText(textElement.innerText);

            const element = document.querySelectorAll<HTMLElement>('#letter');

            //if element can't be found, there's no text to manipulate
            if (element === null) {
                console.log(`can't find circle text element`)
                return;
            }

            // checking if element exists on page
            else if (element && element.length > 0){
                createText({element})
            }
        }
    },[width]);

    function createText({element}:textElement){
        if(element && element.length > 0){
            // getting letter count in string
            const letterCount: number = element.length;
            // dynamically calculating rotation per letter
            const rotationPerLetter: number = 360 / letterCount;
            // dynamically calculating radius of 'circle-text' element
            const radius: number = ( width - 3) / 8 ;
            //dynamically 'centering' the text
            const center: number = (width / 2) - (letterCount * 0.5);

            //loop through each letter and apply calculated rotation, as well as origin
            element.forEach((el, index) => {
                if(el === null) return;
                el.style.transform = `rotate(${index * rotationPerLetter}deg)`;
                el.style.transformOrigin = `0 ${radius}rem`;
                el.style.top = `${center}rem`;
            });

            // add scroll listener to rotate text
            document.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                const rotate = scrollY / 5;
                element.forEach((el, index) => {
                    el.style.transform = `rotate(${index * rotationPerLetter + rotate }deg)`;
                });
            })
        }

    }

    return (
        <>
            <div  id={'circle-text'} className={'relative circle-text top-24 w-full h-full rounded-full  '} >
                <p>{text}</p>
            </div>
        </>
    );
};
