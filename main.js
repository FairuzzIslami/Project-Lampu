function btn(action,numbLamp){ //  ==> mengambil nilai dari function yang di buat ,seperti variabel nya params
    console.log(action)  // dan nilai/valuenya itu dari 'on'
    // console.log("hello world")
    // const lampuMati = document.getElementById('ofLampu')
    // console.log(lampuMati.src) //src berguana untuk mengatahui nama link image/ gambar kita,==> http://127.0.0.1:5500/Images/off.gif
    // lampuMati.src = 'images/on.gif'
    const lampuOf = document.getElementById('ofLampu')
    const lampuOf2 = document.getElementById('ofLampu2')
    const lampuOf3 = document.getElementById('ofLampu3')
    switch(action){
        case 'on':
            switch(numbLamp){
                case 1:
                    lampuOf.src = 'asset/images/on.gif'
                    break;
                case 2:
                    lampuOf2.src = 'asset/images/on.gif'
                    break;
                case 3:
                    lampuOf3.src = 'asset/images/on.gif'
                    break
            }
            break; // gunakan selalu break ketika ganti suatu kondisi

        case 'of':
            switch(numbLamp){
                case 1:
                    lampuOf.src = 'asset/images/off.gif'
                    break;
                case 2:
                    lampuOf2.src = 'asset/images/off.gif'
                    break;
                case 3:
                    lampuOf3.src='asset/images/off.gif'
                    break;
            }
            break;
        }
    return lampuOf,numbLamp
}
