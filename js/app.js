const flores = [
    {nombre: "rosa", color: "rojo", floracion: "primavera", stock: true},
    {nombre: "rosa", color: "blanco", floracion: "verano", stock: true},
    {nombre: "jazmín", color: "blanco", floracion: "verano", stock: false},
    {nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false},
    {nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false},
    {nombre: "clavel", color: "rojo", floracion: "verano", stock: true},
]

flores.sort( (a, b) => { 
    return a.nombre.localeCompare(b.nombre, "es-ES", {numeric: true});   
})

// Tiene que mostrarse en el HTML los datos de las flores
// de esta manera:
// Como lista
// Flor: rosa, de color rojo, florece en primavera y tenemos stock

flores.forEach( flor => {
    let textoStock = ""
    if (!flor.stock) {
        textoStock = "no ";
    } 
    html1 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock</li>`;
})

html1 += "</ul>";
ejercicio1.innerHTML = html1;
