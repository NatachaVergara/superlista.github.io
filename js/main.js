/**------------------------ */
/**VARIABLES GOBALES */
/**------------------------ */

const listaProductos = [
    { nombre: 'carne', cantidad: 2, precio: 12.34 },
    { nombre: 'Pan', cantidad: 5, precio: 100 },
    { nombre: 'Fideos', cantidad: 8, precio: 50 },
    { nombre: 'Leche', cantidad: 1, precio: 18 },
]


/**------------------------ */
/**FUNCIONES GOBALES */
/**------------------------ */

const renderLista = () => {

    const ul = document.createElement('ul')
    ul.classList.add('demo-list-icon', 'mdl-list', 'w-100')

    listaProductos.map((e, index) => {
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
                                <input class="mdl-textfield__input" type="text" id="sample-${index}" value="${e.nombre}" placeholder="Sample">
                                <label class="mdl-textfield__label" for="sample-cantidad">Cantidad</label>
                            </div>
                        </span>
                        <!-- precio -->
                        <span class="mdl-list__item-primary-content w-20 ml-item">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" type="text" id="sample-${index}" value="${e.precio}">
                                <label class="mdl-textfield__label" for="sample-precio">Precio</label>
                            </div>
                        </span>

                        <!-- accion(borrar) -->
                        <span class="mdl-list__item-primary-content w-20 ml-item">
                            <!-- Colored FAB button with ripple -->
                            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                                <i class="material-icons">remove_shopping_cart</i>
                            </button>
                        </span>

                    </li>
                `

    })
    document.getElementById('lista').appendChild(ul)



}



const start = () => {
    console.warn('Super Lista')
    renderLista()
}




/**------------------------ */
/**Ejecucion */
/**------------------------ */

start()

