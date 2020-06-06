export let setNavState = null;
export let getNavState = null;
export const updateNavState = ({
    setFunc,
    getFunc
}) => {
    setNavState = setFunc;
    getNavState = getFunc;
};