{/* <ul>
<li><a href="./532">html</a></li> 
<li><a href="./533">css</a></li>
<li><a href="./534">JavaScript</a>
    <ul>
        <li><a href="./535">JavaScript Core</a></li>
        <li><a href="./536">DOM</a></li>
        <li><a href="./537">BOM</a></li>
    </ul>
</li>
</ul> */}

var s = document.getElementById('start');
console.log(1, s.firstChild); // #text
var ul = s.firstChild.nextSibling
console.log(2, ul); // ul
console.log(3, ul.nextSibling); // #text
console.log(4, ul.nextSibling.nextSibling); // script
console.log(5, ul.childNodes); //text, li, text, li, text, li, text
console.log(6, ul.childNodes[1]); // li(html)
console.log(7, ul.parentNode); // body
console.log(8, ul.childNodes[0]); // li(html)
    