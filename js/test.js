window[funcName] = () => {
    const newFunc = () => {
        setTimeout(fn, 300)
    }
    setTimeout(() => {
        newFunc();
        const observer = new MutationObserver(newFunc);
        observer.observe(document.querySelector('.roam-body'),
            {
                childList: true,
                subtree: true
            });
    }, 10000)
}
window[funcName]
}


editAspect('changeColor', () => {
    console.log("called")
    const title = document.querySelector('.rm-title-display')
    title.style.color = red;
})