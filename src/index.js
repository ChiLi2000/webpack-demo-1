import './style.css'
import './style-1.scss'
import './style-2.less'
import './style-3.styl'
import p1 from'./p1.jpg'

//引入图片
const div1 = document.getElementById("div1")
div1.innerHTML = `
    <img src = ${p1}>
`

//懒加载
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        module.default()
    },()=>{})
}
div1.appendChild(button)