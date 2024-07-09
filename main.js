let x = []
let galat = [0]
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()

    const fx = document.querySelector('#fx').value
    const x0 = document.querySelector('#x0').value
    const x1 = document.querySelector('#x1').value
    const toleransiError = 6
    const hasilAkhir = document.getElementById('hasilAkhir')
    const Iterasi = document.getElementById('Iterasi')

    x.push(x0, x1)
    galat.push(Math.abs(x[1] - x[0]))
    function f(x) {
        return eval(fx)
    }
    
    for (i=0; i < 100; i++) {
        const xr = x[i + 1] - ((f(x[i + 1]) * (x[i + 1] - x[i])) / (f(x[i + 1]) - f(x[i])))
        const xrFix = xr.toFixed(toleransiError)
        x.push(xrFix)  
        const galatt = Math.abs((x.at(-1) - x.at(-2)).toFixed(toleransiError))
        galat.push(galatt)
        
        if (x.at(-1) == x.at(-2)) {
            break
        }
    }


    for (i = 0; i < x.length; i++) {
        const tr = document.createElement('tr')
        const td = document.querySelector('tbody').appendChild(tr)
        const no = document.createElement('td')
        no.innerText = i
        const iterasi = document.createElement('td')
        iterasi.innerText = x[i]
        const galatt = document.createElement('td')
        galatt.innerText = galat[i]

        td.appendChild(no)
        td.appendChild(iterasi)
        td.appendChild(galatt)
    }

    hasilAkhir.innerText = x.at(-1)
    Iterasi.innerText = x.length - 1

    // hasil.innerText = x.at(-1)
    // iterasi.innerText = x.length - 1
    console.log(x)
    console.log(galat)
    console.log(x.length - 1)

})
