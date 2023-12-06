const qrText = document.getElementById('qr-text');
const  sizes = document.getElementById('sizes');
const generateBtn =document.getElementById('generateBtn');
const downloadBtn =document.getElementById('downloadBtn');
const qrContainer =document.querySelector('.qr-center');

let size = sizes.value;

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();

});

sizes.addEventListener('change',(e)=>{
    size= e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click',()=>{
    let img =document.querySelector('.qr-center img');
    if(img !== null){
        let imgAttr= img.getAttribute('src');
    downloadBtn.setAttribute("href",imgAttr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.quersySelector('canvas').toDataURL()}`);
    }
})



function isEmptyInput(){
    // console.log(qrText.Value.length);
    // if(qrText.Value.length > 0){
    //     generateQRCode();
    // }
    // else{
        
    //     alert("Enter kutch to");
    //     console.log("else not worked");
    // }
    qrText.value.length > 0? generateQRCode() : alert("Enter the text or url to");;
}


function generateQRCode(){
    qrContainer.innerHTML ="";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
        
    });


    // function generateQRCode(){
    //     qrContainer.innerHTML = "";
    //     new QRCode(qrContainer, {
    //         text:qrText.value,
    //         height:size,
    //         width:size,
    //         colorLight:"#fff",
    //         colorDark:"#000",
    //     });

}