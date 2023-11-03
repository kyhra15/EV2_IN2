function calcularPromedio() {

    let nombre = document.getElementsByName('nombreES')[0].value;
    let modulo = document.getElementsByName('asignatura')[0].value;
    const n1 = parseFloat(document.getElementsByName('N1-U1')[0].value);
    const n2 = parseFloat(document.getElementsByName('N2-U1')[0].value);
    const n3 = parseFloat(document.getElementsByName('N1-U2')[0].value);
    const n4 = parseFloat(document.getElementsByName('N2-U2')[0].value);
    const n5 = parseFloat(document.getElementsByName('N1-U3')[0].value);
    const n6 = parseFloat(document.getElementsByName('N2-U3')[0].value);
    const u1 = ((n1* 0.12)+(n4* 0.21)).toFixed(3);
    const u2 = ((n2* 0.21)+(n5* 0.13)).toFixed(3);
    const u3 = ((n3* 0.12)+(n6* 0.21)).toFixed(3);
    const promedio = ((n1* 0.12)+(n2* 0.21)+(n3* 0.12)+(n4* 0.21)+(n5* 0.13)+(n6* 0.21)).toFixed(2);
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5) || isNaN(n6)) {
        alert("Por favor, ingrese valores numéricos.");
        return;  
    }else if (n1 > 7 || n2 > 7 || n3 > 7 || n4 > 7 || n5  > 7 || n6 > 7) {
        alert("no se permiten numeros mayores a 7")
    } else if (n1 == 0 || n2 == 0 || n3 == 0 || n4 == 0 || n5 == 0 || n6 == 0) {
    alert("no se permiten numeros inferiores a 1")
    } else if(nombre == "" || modulo == "") {
        alert("no se permiten espacios vacios")
    }else{
window.location.href = `promedio.html?nombreES=${document.getElementsByName('nombreES')[0].value}&asignatura=${document.getElementsByName('asignatura')[0].value}&N1-U1=${document.getElementsByName('N1-U1')[0].value}
&N2-U1=${document.getElementsByName('N2-U1')[0].value}&N1-U2=${document.getElementsByName('N1-U2')[0].value}&N2-U2=${document.getElementsByName('N2-U2')[0].value}&N1-U3=${document.getElementsByName('N1-U3')[0].value}
&N2-U3=${document.getElementsByName('N2-U3')[0].value}&u1=${u1}&u2=${u2}&u3=${u3}&promedio=${promedio}`
    } 
}