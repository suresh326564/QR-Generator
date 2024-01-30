let imgBoxes=document.querySelector('#imgBox');
let qrImage=document.querySelector('#qrImage');
let qrText=document.querySelector('#qrText');
let generateButton=document.querySelector('button');

    generateButton.addEventListener("click",()=>
    {
        console.log("clicked");
        qrGenerator();
    }
    );
    const qrGenerator= ()=>{
        if(qrText.value.length>0)
            {qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
            qrImage.classList.remove("hide");
        }
            else{
                qrImage.src = ""; 
                qrImage.classList.add("hide");
            }
    };


