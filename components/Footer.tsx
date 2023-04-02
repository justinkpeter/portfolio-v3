import React from 'react';
export const Footer = () => {
    return (
        <>
            <footer className={'relative py-6 sm:py-8 text-xl font-medium'}>
                {/*<hr className={'sm:hidden my-8 border-black'}/>*/}
                <div className={'flex flex-col sm:flex-row space-y-6 lg:flex-row uppercase justify-between lg:items-end'}>
                    <div>
                        <span> Justin Peter </span><br/>
                        <span> Creative developer </span>
                    </div>
                    <div>
                        <a> Twitter </a>,
                        <a> Github </a>,
                        <a> LinkedIn </a>,
                        <a> Instagram </a>
                    </div>
                    <div className={'lg:text-right'}>
                        <span> development justin peter </span><br/>
                        <span> design inspired by gil huybrecht</span>
                    </div>
                </div>

            </footer>
        </>
    );
}