import { useState } from "react"

export const useNavbar = () => {
    const [navbar, setDinamicNavbar] = useState(false)

    const changeNabar = () => {
        if (window.scrollY >= 90) {
        setDinamicNavbar(true)
        } else{
        setDinamicNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNabar)

    return navbar
}
