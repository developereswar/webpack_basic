export default function HelloWorld(){
    const p = document.createElement('p')
    p.innerHTML ="Hello World";
    p.className = "hello_world"
    const body = document.querySelector('body');
    body.appendChild(p);
}
