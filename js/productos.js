function addItem(item){
    const itemHTML = 
        `<div id="contenedorProducto" class="col mb-5">
        <div class=" h-100">
        <img class="card-img-top p-3" src="${item.img}" alt="..." width="30%"/>
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${item.nombre}</h5>
                <!-- Product price-->
                $${item.precio}
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar</a></div>
                            </div>
        </div>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    'nombre':'Últimos días de mis padres',
    'autor':'Mónica Lavín',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9786070787300_4c53.jpg',
    'editorial':'Planeta México',
    'descripcion':'Cuando el padre de la narradora muere, lejos está de imaginar que tan solo un año después tendría que enfrentar también la pérdida de su madre. A partir de este golpe tan doloroso como real, los recuerdos y las emociones irán tejiendo un texto donde la fuerza de la sinceridad da paso a una prosa íntima y poderosa, que indaga sobre la orfandad y la necesidad de reconstruir el origen: quiénes fueron los padres, los distintos exilios por los que pasaron para encontrarse en la Ciudad de México, las penurias que marcaron sus infancias, las vacaciones familiares, la separación y el rencuentro final.   Mónica Lavín nos ofrece su obra más personal y emotiva, reafirmándose como una de las escritoras más talentosas de su generación. Frente a la pena de la ausencia, en Últimos días de mis padres queda el recuerdo de lo vivido, el aprendizaje de un camino recorrido y, por último, la literatura como una forma de celebrar la vida.',
    'isbn':'9786070787300',
    'precio':'268.00'
});

addItem({
    'nombre':'La estafa maestra: La historia del desfalco',
    'autor':'Manuel Ureste Cava',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9786070787126_b19c.jpg',
    'editorial':'Planeta México',
    'descripcion':'La mañana del 13 de agosto de 2019, la historia política modernade México cambió. Por primera vez en nuestro país, una secretaria de Estado era encarcelada a raíz de una investigación periodística. Rosario Robles ingresó al penal de Santa Martha Acatitlaacusada de ejercicio indebido de la función pública y, hasta lafecha, sigue presa. La Estafa Maestra —Premio Nacional de Periodismo 2017 y Premio Ortega y Gasset 2018— develó el multimillonario desfalco de dinero público bajo un esquema de corrupción que involucraba a miembros del gabinete del expresidente Peña Nieto, universidades públicas y empresas fantasma. De todos los altos mandos involucrados solo Robles, exsecretaria de la Sedesol y de la Sedatu y una vieja adversaria del presidente López Obrador, ha sido encarcelada y paga un castigo que asoma oscuros motivos políticos. A partir de entrevistas inéditas, un minucioso seguimiento de la investigación a tres años de la publicación original y una implacable cobertura de los juicios, los periodistas Nayeli Roldán y Manuel Ureste relatan, a manera de thriller político, la historia detrás de La Estafa Maestra y dan a conocer a los orquestadores de uno de los peores desfalcos que México ha conocido y cuya maquinaria continúa intacta para seguir operando.',
    'isbn':'9786070787126',
    'precio':'268.00'
});

