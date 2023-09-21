let copyBtn = document.getElementById("copy");
let newURL = document.getElementById("shortURL"); 

copyBtn.onclick = () =>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
    
}
