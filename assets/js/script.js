document.getElementById('opcion').addEventListener('click', cambiarTemp)

function cambiarTemp() {

    const bigTemp = document.getElementById('bigTemp').getAttribute('value');
    let bigC = document.getElementById('bigC');
    const daysTemp = document.getElementsByClassName('temp');

    if (document.getElementById('opcion').checked == true) {

        bigC.innerText = '°F';
        document.getElementById('bigTemp').innerText = ((bigTemp * 1.8) + 32).toFixed();
        for (let element of daysTemp){
            document.getElementById(element.getAttribute('id')).innerText = ((element.getAttribute('value')*1.8) + 32).toFixed();
        };

    } else {

        bigC.innerText = '°C';
        document.getElementById('bigTemp').innerText = bigTemp
        for (let element of daysTemp){
            document.getElementById(element.getAttribute('id')).innerText = element.getAttribute('value');
        };
    };
}; 