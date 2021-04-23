import { useEffect } from 'react'

const EffectHook = () => {
    useEffect(() => {
        window.onkeyup = (e) => {
            if (e.keyCode === 34 ||
                e.keyCode === 40) {
                window.scrollBy(0, 750)
            }

            if (e.keyCode === 33 ||
                e.keyCode === 38) {
                window.scrollBy(0, -750)
            }

            if (e.keyCode === 36) {
                window.scrollTo(0, 0)
            }

            if (e.keyCode === 35) {
                window.scrollTo(0, 10 ** 10)
            }
        }

        window.onwheel = (e) => {
            if (e.deltaY > 0) {
                window.scrollBy(0, 750)
            }

            else {
                window.scrollBy(0, -750)
            }
        }
    }, [])
}

export default EffectHook;
