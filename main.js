function btn(){ 
    let btnToggle = document.getElementById('btn-toggle')
    let btnToggle2 = document.getElementById('btn-toggle2')
    let btnToggle3 = document.getElementById('btn-toggle3')
    const lampuOf = document.getElementById('ofLampu')
    const lampuOf2 = document.getElementById('ofLampu2')
    const lampuOf3 = document.getElementById('ofLampu3')
    console.log(btnToggle.checked)

    switch(btnToggle.checked){
        case true:
            lampuOf.src = 'asset/images/on.gif'
        break
        case false:
            lampuOf.src = 'asset/images/off.gif'
            break
    }
    
    switch(btnToggle2.checked){
        case true:
            lampuOf2.src = 'asset/images/on.gif'
        break
        case false:
            lampuOf2.src = 'asset/images/off.gif'
            break
    }
    
    switch(btnToggle3.checked){
        case true:
            lampuOf3.src = 'asset/images/on.gif'
        break
        case false:
            lampuOf3.src = 'asset/images/off.gif'
            break
    } 

    
                }
                
                //function(params){//  ==> mengambil nilai dari function yang di buat ,seperti variabel nya params
                    //console.log(action)  // dan nilai/valuenya itu dari 'on'
                    // console.log("hello world")
                    // const lampuMati = document.getElementById('ofLampu')
                    // console.log(lampuMati.src) //src berguana untuk mengatahui nama link image/ gambar kita,==> http://127.0.0.1:5500/Images/off.gif
                    // lampuMati.src = 'images/on.gif'
                //}
                    