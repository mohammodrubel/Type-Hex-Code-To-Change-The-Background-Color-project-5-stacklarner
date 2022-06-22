let div = null
window.onload = ()=>{
    main()
}

const main =()=>{
    const root = document.getElementById('container')
    const copybtn = document.getElementById('copybtn')
    const output = document.getElementById('output')
    const btn = document.getElementById('btn')

        btn.addEventListener('click',()=>{
            const customBackground = colorGenaretor()
            root.style.backgroundColor = customBackground
            output.value = customBackground
        })
        // click button and copy code 
        copybtn.addEventListener('click',()=>{
            navigator.clipboard.writeText(output.value )
            
            if(div !== null ){
                div.remove()
                div = null
            }
            if(isValidHex(output.value)){
                toastMsg(output.value + `<p> text copyed confirmed!</p>`)
            }else{
                alert('this code is inValid! try again letter')
            }
        })
        // input value change and daynamic color change 
        output.addEventListener('keyup',(e)=>{
            const color = e.target.value;
                if(color && isValidHex(color)){
                    root.style.backgroundColor = color
                }
        })
}


const colorGenaretor = ()=>{
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

const toastMsg = (msg)=>{
     div = document.createElement('div')
    div.innerHTML = msg 
    div.classList='custom_Div animatoinsIn'

        div.addEventListener('click',()=>{
            div.classList.remove('animatoinsIn')
            div.classList.add('animatoinsOut')

            div.addEventListener('animationend',()=>{
                div.remove()
                div = null
            })
        })
    document.body.appendChild(div)
}
const isValidHex  = (color)=>{
    if(color.length !== 7) return false
    if(color[0] !== '#') return false
    color.substring(1)
        return /^[0-9A-Fa-f]{6}$/i
}