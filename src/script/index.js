const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")

const header = document.querySelector("header")
const main = document.querySelector('main')
const footer = document.querySelector("footer")
const h1 = document.querySelector(".h1")

moon.addEventListener("click", () => {
    document.body.style.background = 'var(--primaryBlack)'
    document.body.style.color = 'var(--primaryGreen)'
    header.style.background = 'var(--secundaryBlack)'
    main.style.background = 'var(--secundaryBlack)'
    footer.style.background = 'var(--secundaryBlack)'
    h1.style.textShadow = '3px 3px 3px var(--primaryGreen)'

    moon.style.display = 'none'
    sun.style.display = 'block'
})

sun.addEventListener("click", () => {
    document.body.style.background = 'var(--primaryWhite)'
    document.body.style.color = 'var(--secundaryBlack)'
    header.style.background = 'var(--secundaryYellow)'
    main.style.background = 'var(--secundaryYellow)'
    footer.style.background = 'var(--secundaryYellow)'
    h1.style.textShadow = '5px 5px 5px var(--secundaryBlack)'

    moon.style.display = 'block'
    sun.style.display = 'none'
})