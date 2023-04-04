import React from "react";


type DividerProps = {
    showLabels: boolean | null,
    labels: string[] | null,
}
export const Divider = (props:DividerProps) => {
    return (
        <>
            <hr className={'border-black dark:border-white my-2 border-[1px]'}/>
            {
                props.showLabels && props.labels && props.labels.length > 0 ?
                    <div className={'flex w-full font-medium text-xs sm:text-sm md-text-base xl:text-lg uppercase'}>
                        <span className={'mr-12 sm:mr-60'}> { props.labels[0] }  </span>
                        <div className={'flex justify-between w-full'}>
                            <span className={''}> {props.labels[1]} </span>
                            <span> {props.labels[2]} </span>
                        </div>
                    </div>
                    : null
            }

        </>
    );
}