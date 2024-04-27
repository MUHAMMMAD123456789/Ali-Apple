let options = document.querySelectorAll('.btn_options')

options.forEach((btns) => {
    btns.onclick = () => {
       const clicked = document.querySelector('.clicked')
       if(clicked) {
        clicked.classList.remove('clicked')
       }
       btns.classList.add('clicked')
    }
})

const all_buttons = document.querySelectorAll('.btn_colors')
const imgs = document.querySelector('.pictures')

const iphones = {
    "1": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hBa0RRdWFDUTBBczVnS0JqV3BGbkxRPT0=&traceId=1",
    "2": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT3B3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSncvTitpdit2K0pPbnlhL04zRlVpb29BPT0=&traceId=1",
    "3": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemN5bURtdG84aElEZERZa0lIV3FCN1lBPT0=&traceId=1",
    "4": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNnaGZTejMxa0hnUE1YYTBGeVJZdVBBPT0=&traceId=1"
}

all_buttons.forEach((btn) => {
    btn.onclick = () => {
        const url = iphones[btn.innerText]

        imgs.style.backgroundImage = `url(${url})`

        const act = document.querySelector('.phone_color')
        if(act) {
            act.classList.remove('phone_color')
        }
        btn.classList.add('phone_color')
    }
})
