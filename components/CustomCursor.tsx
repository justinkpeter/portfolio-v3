'use client'

import React, { useEffect } from "react";
import { gsap } from "gsap";
import CircleType from 'circletype';

export const CustomCursor = () => {

    let mouse = {
            x: -100,
            y: -100
    };

    let isHovered = false;
    let initialCursorHeight: any;
    const cursorRotationDuration = 8;

    let circleType: any;

    useEffect(() =>{
        if(typeof window !== 'undefined') {
            // const {  CircleType } = window;
            const cursorTextContainerEl = document.querySelector(".cursor--text");
            const cursorTextEl = cursorTextContainerEl?.querySelector(".text");
            const hoverItems = document.querySelectorAll(".cursor-hover-item");
            let initialCursorHeight: any;
            circleType = new CircleType(cursorTextEl);
            circleType.radius(50);

            setTimeout(() => {
                initialCursorHeight = circleType?.container?.style.getPropertyValue("height");
            }, 50);

            hoverItems.forEach((item) => {
                item.addEventListener("pointerenter", handlePointerEnter);
                item.addEventListener("pointerleave", handlePointerLeave);
            });

            document.body.addEventListener("pointermove", updateCursorPosition);

        }

        function updateCursorPosition(e: any) {
            mouse.x = e.pageX - window.scrollX;
            mouse.y = e.pageY - window.scrollY;

        }

        function updateCursor() {
            const cursorOuter = document.querySelector(".cursor--large");
            const cursorInner = document.querySelector(".cursor--small");
            const cursorTextContainerEl = document.querySelector(".cursor--text");
            const hoverEffectDuration = 0.3;

            gsap.set([cursorInner, cursorTextContainerEl], {
                x: mouse.x,
                y: mouse.y
            });

            gsap.to(cursorOuter, {
                duration: 0.75,
                x: mouse.x,
                y: mouse.y
            });

            if (!isHovered) {
                gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
                    opacity: 0
                });
                gsap.set(cursorTextContainerEl, {
                    rotate: 0
                });
            }

            requestAnimationFrame(updateCursor);
        }

        updateCursor();

        function handlePointerEnter(e:any) {
            isHovered = true;

            const target = e.currentTarget;
            if(!target) return;
            updateCursorText(target);

            const cursorOuter = document.querySelector(".cursor--large");
            const cursorInner = document.querySelector(".cursor--small");
            const cursorTextContainerEl = document.querySelector(".cursor--text");
            const cursorTextEl = cursorTextContainerEl?.querySelector(".text");
            const hoverEffectDuration = 0.3;

            gsap.set([cursorTextContainerEl, cursorTextEl], {
                height: initialCursorHeight,
                // width: initialCursorHeight
            });

            gsap.fromTo(
                cursorTextContainerEl,
                {
                    rotate: 0
                },
                {
                    duration: cursorRotationDuration,
                    rotate: 360,
                    ease: "none",
                    repeat: -1
                }
            );

            gsap.to(cursorInner, hoverEffectDuration, {
                scale: 4
            });

            gsap.fromTo(
                cursorTextContainerEl,
                hoverEffectDuration,
                {
                    scale: 1,
                    opacity: 0
                },
                {
                    delay: hoverEffectDuration * 0.75,
                    scale: 1,
                    opacity: 1
                }
            );
            gsap.to(cursorOuter, hoverEffectDuration, {
                scale: 1.2,
                opacity: 0
            });
        }

        function handlePointerLeave() {
            const cursorOuter = document.querySelector(".cursor--large");
            const cursorInner = document.querySelector(".cursor--small");
            const hoverEffectDuration = 0.3;
            isHovered = false;
            gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
                scale: 1,
                opacity: 1
            });
        }

        function updateCursorText(textEl:HTMLElement | null) {
            if(!textEl) return;
            const cursorTextRepeatTimes = textEl?.getAttribute("data-cursor-text-repeat");
            if(!cursorTextRepeatTimes) return;
            // @ts-ignore
            const cursorText = returnMultipleString(
                textEl.getAttribute("data-cursor-text") || "",
                cursorTextRepeatTimes
            );

            circleType.destroy();

            const cursorTextContainerEl = document.querySelector(".cursor--text");
            const cursorTextEl = cursorTextContainerEl?.querySelector(".text");
            if(!cursorTextEl) return;
            cursorTextEl.innerHTML = cursorText;
            // console.log(cursorTextEl.innerHTML);
            circleType = new CircleType(cursorTextEl);
        }

        function returnMultipleString(string:string, count:any) {
            let s = "";
            for (let i = 0; i < count; i++) {
                s += ` ${string} `;
            }
            return s;
        }


    }, [])

    return(
        <>
            <div className="hidden sm:flex flex-col cursor">
                <div className="cursor--small"></div>
                <div className="cursor--large"></div>
                <div className="cursor--text">
                    <div className="text">GO HERE! GO HERE! GO HERE! GO HERE!</div>
                </div>
            </div>
        </>
    )
}



