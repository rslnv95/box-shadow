const x = document.querySelector('#x')
const y = document.querySelector('#y')
const blur = document.querySelector('#blur')
const spread = document.querySelector('#spread')
const colorShadow = document.querySelector('#color-shadow')
const colorBox = document.querySelector('#color-box')

const radius = document.querySelector('#radius')

const box = document.querySelector('.color__box_item')


const cssShadow = document.querySelector('.css__shadow')
const cssRadius = document.querySelector('.css__radius')
const cssBg = document.querySelector('.css__bg_color')

const range = () => {
    box.style.boxShadow = `${x.value}px ${y.value}px ${blur.value}px ${spread.value}px ${colorShadow.value}`
    box.style.borderRadius = `${radius.value}px`
    box.style.backgroundColor = `${colorBox.value}`

    cssShadow.textContent = `box-shadow: ${x.value}px ${y.value}px ${blur.value}px ${spread.value}px ${colorShadow.value}`
    cssRadius.textContent = `border-radius: ${radius.value}px`
    cssBg.textContent = `background-color: ${colorBox.value}`
}

x.addEventListener('input', range)
y.addEventListener('input', range)
blur.addEventListener('input', range)
spread.addEventListener('input', range)
radius.addEventListener('input', range)
colorShadow.addEventListener('input', range)
colorBox.addEventListener('input', range)