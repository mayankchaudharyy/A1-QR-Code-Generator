let btn = document.getElementById("submit");
let user_input = document.querySelector(".data");
let main = document.querySelector(".main");

main.style.height = "500px";


btn.addEventListener("click",()=>{
    let val = user_input.value;
    make_url(val);
})

function make_url(val){
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    url = url + val;
    change_img(url);
}

function change_img(url){
    const data = fetch(url);
    data.then((response)=>{
        return response.blob();
    }).then((blob)=>{
        var img = URL.createObjectURL(blob);
        let ele = document.getElementById('img')
        ele.setAttribute('src', img);
        ele.style.display = "flex";
        ele.style.marginTop = "10px";
    })    
}

// BLOB stands for a “Binary Large Object,” a data type that stores binary data. Binary Large Objects (BLOBs) 
// can be complex files like images or videos, unlike other data strings that only store letters and numbers.