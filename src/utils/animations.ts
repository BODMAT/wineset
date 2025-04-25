export const textFromTopAnimation = {
    hidden: { opacity: 0, y: -80 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2 },
    }),
};

export const blockFromRightAnimation = {
    hidden: { opacity: 0, x: 200 },
    visible: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.1 },
    }),
};

export const productLineAnimation = {
    hidden: { width: 0 },
    visible: (custom: number) => ({
        width: `${custom}px`,
    }),
}