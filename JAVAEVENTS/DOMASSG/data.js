var globalStr=""
let img2Str = ()=>{
    //alert('GA')
    let imageFile = document.getElementById('imgFile').files[0];
    let taRef = document.getElementById('xyz')
    console.log(imageFile)
    console.log(imageFile.size)
    let reader=new FileReader();
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load", )
        console.log(reader.result)
        globalStr = reader.result
        taRef.innerHTML = reader.result

        
    
    
}
let str2Image=() =>{
    //alert("GA")
    let imgTagRef = document.getElementsByTagName('imgTag')
    console.log(imgTagRef)
    imgTagRef.src = globalStr()
    console.log(imgTagRef.src);
}