/**------------------------ */
/**VARIABLES GOBALES */
/**------------------------ */

let listaProductos = [
    { nombre: 'carne', cantidad: 2, precio: 12.34 },
    { nombre: 'Pan', cantidad: 5, precio: 100 },
    { nombre: 'Fideos', cantidad: 8, precio: 50 },
    { nombre: 'Leche', cantidad: 1, precio: 18 },
]

let ul = document.querySelector('.ul')
let btnBorrar = document.querySelector('#btn-borrar')
let btnEntradaProducto = document.querySelector('#btn-entrada-producto')
/**------------------------ */
/**FUNCIONES GOBALES */
/**------------------------ */


const borrarProd = (index) => {
    listaProductos.splice(index, 1)
    renderLista()
}

const cambiarCantidad = (index, el) => {
    const cantidad = Number(el.value)
    console.log(`Cambiar cantidad`, index, cantidad)
    listaProductos[index].cantidad = cantidad
}

const cambiarPrecio = (index, el) => {
    const precio = Number(el.value)
    console.log(`Cambiar precio`, index, precio)
    listaProductos[index].precio = precio
}


btnEntradaProducto.addEventListener('click', () => {
    let input = document.querySelector('#ingreso-producto')
    let producto = input.value
    console.log(producto)

    if (producto) {
        listaProductos.push({ nombre: producto, cantidad: 1, precio: 0 })
        renderLista()
        
        input.value = ''

    } else {
        alert('Debe ingresar un producto')
    }


})



btnBorrar.addEventListener('click', () => {
    if (confirm('Desea borrar todos los productos?')) {
        listaProductos = []
        renderLista()
    }
   
})




const renderLista = () => {
    ul.innerHTML = '';    
    listaProductos.map((e, index) => (
        ul.innerHTML += `               
                    <!-- Product List -->
                    <li class="mdl-list__item">
                        <span class="mdl-list__item-primary-content">
                            <!-- Icono -->
                            <i class="material-icons mdl-list__item-icon w-10">shopping_cart</i>
                        </span>
                        <!-- nombre del producto -->
                        <span class="mdl-list__item-primary-content w-30">
                           ${e.nombre} </span>

                        <!-- cantidad -->
                        <!-- Simple Textfield -->
                        <span class="mdl-list__item-primary-content w-20 ml-item">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" onChange="cambiarCantidad(${index}, this)" type="text" id="sample-${index}" value="${e.cantidad}" placeholder="Sample">
                                <label class="mdl-textfield__label" for="sample-cantidad">Cantidad</label>
                            </div>
                        </span>
                        <!-- precio -->
                        <span class="mdl-list__item-primary-content w-20 ml-item">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" type="text" id="sample-${index}" onChange="cambiarPrecio(${index}, this)" value="${e.precio}">
                                <label class="mdl-textfield__label" for="sample-precio">Precio</label>
                            </div>
                        </span>

                        <!-- accion(borrar) -->
                        <span class="mdl-list__item-primary-content w-20 ml-item">
                            <!-- Colored FAB button with ripple -->
                     <button onClick="borrarProd(${index})"  class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"  >
                                <i class="material-icons">remove_shopping_cart</i>
                            </button>
                        </span>

                    </li>
                `

    ))
        //No está funcionando!
    ///componentHandler.upgradeElement(ul)


}



const start = () => {
    console.warn('Super Lista')
    renderLista()
}




/**------------------------ */
/**Ejecucion */
/**------------------------ */

start()

