function btn(params){ //  ==> mengambil nilai dari function yang di buat ,seperti variabel nya params
    console.log(params)  // dan nilai/valuenya itu dari 'on'

    // console.log("hello world")
    // const lampuMati = document.getElementById('ofLampu')
    // console.log(lampuMati.src) //src berguana untuk mengatahui nama link image/ gambar kita,==> http://127.0.0.1:5500/Images/off.gif
    // lampuMati.src = 'images/on.gif'
    const lampuOf = document.getElementById('ofLampu')
    const lampuOf2 = document.getElementById('ofLampu2')
    const lampuOf3 = document.getElementById('ofLampu3')
    if(params == 'on'){
        lampuOf.src = 'images/on.gif'
    }else if(params == 'of'){
        lampuOf.src = 'images/off.gif'
    }
    return lampuOf
}
