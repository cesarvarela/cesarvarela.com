(function (window) {

    const modeFromBrowser = () => {

        if (window.matchMedia) {

            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark'
            }
            else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light'
            }
        }

        return null
    }

    const modeFromLocalStorage = () => {

        const stored = window.localStorage.getItem('theme')
        return stored ? stored : null
    }

    window.theme = {
        setMode(mode) {
            this.mode = mode
            window.localStorage.setItem('theme', mode)
            document.documentElement.classList.remove(mode == 'dark' ? 'light' : 'dark')
            document.documentElement.classList.add(mode)
        }
    }

    window.theme.setMode(modeFromLocalStorage() || modeFromBrowser() || 'dark')

})(window)

