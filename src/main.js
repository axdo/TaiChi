let html = document.querySelector('#html')
let style = document.querySelector("#style")
let string = `/** 你好,我叫小杜
 *接下来我要展示一下我的前端功底
 *首先我要展示一个div
 **/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/**接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 **/
 #div1{
     border-radius:50%;
     box-shadow:0 0 3px rgba(0,0,0,0.5);
     border:none;
 }
 /**八卦是阴阳形成的
  * 一黑一白
  **/
 #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%);
 }
/*加两个灵珠*/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    top:0;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%);
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%);

}
`
let string2 = ''
// string = string.replace(/\n/g, '<br>')
let n = 0

//新手setInterval
//老手
//自由的控制继续和暂停
let step = () => {
    setTimeout(() => {
        //如果是回车，就不照搬
        //如果不是回车，不照搬
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 9999);
        html.scroll(0, 9999)
        if (n < string.length - 1) {
            //n不是最后一个,就继续
            n += 1
            step()
        }
    }, 50)
}

step()
