function addItem(item){
    const itemHTML = 
        `<div id="contenedorProducto" class="col-md-5 col-lg-4 col-xl-2">
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

addItem({
    'nombre':'Contemporary Japanese Architecture',
    'autor':'Philip Jodidio',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9783836575119_7f0d.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'TASCHEN',
    'descripcion':'Un estudio de la escena arquitectónica contemporánea de JapónLa arquitectura japonesa contemporánea ha sido durante mucho tiempo una de las más imaginativas del mundo, y es famosa por sus diseños sostenibles y su infinita creatividad. Nada menos que siete arquitectos japoneses han ganado el premio Pritzker.Desde que la Exposición Universal de Osaka de 1970 cedió el protagonismo a las formas contemporáneas, Japón ha sido uno de los actores clave de la arquitectura global. Con un vocabulario limitado intencionalmente a formas geométricas, Tadao Ando puso la arquitectura japonesa en el mapa cultural del mundo y estableció un puente entre Oriente y Occidente. Siguiendo la estela de los edificios de Ando, en su mayoría de hormigón, figuras como Kengo Kuma (Estadio Nacional de Japón, destinado a albergar los Juegos Olímpicos que debían haberse celebrado en 2020), Shigeru Ban (Centro de Patrimonio Mundial Monte Fuji) y Kazuyo Sejima (Museo de Arte Contemporáneo del Siglo XXI de Kanazawa) se convirtieron en pioneros de un enfoque más sostenible.',
    'isbn':'9783836575119',
    'precio':'1649.00'
});

addItem({
    'nombre':'El infinito en un junco',
    'autor':'Irene Vallejo',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9786073804332_695a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'Debolsillo',
    'descripcion':'La historia de los libros, el alfabeto, las bibliotecas... contada/bb/b bcon erudición y amenidad,/bb/b bsentido del humor y elegancia,/bb/b bhaciendo paralelismos con el presente./b/p pbLaura Freixas/b/ppEn esta obra exquisita sobre los orígenes del libro, Irene Vallejo recorre la historia del asombroso artefacto que nació hace cinco milenios, cuando los egipcios descubrieron el potencial de un junco al que llamaron papiro. Con gran sensibilidad y soltura narrativa, la autora se remonta a los campos de batalla de Alejandro, los palacios de Cleopatra, las primeras librerías y los talleres de copia manuscrita, pero también visita las hogueras donde ardieron códices prohibidos, la biblioteca de Sarajevo y el laberinto subterráneo de Oxford en el año 2000. Los tiempos se funden en la aventura colectiva de quienes solo han concebido la vida en compañía de la palabra escrita. Y este ensayo acaba prolongando el diálogo infinito del que tan magistralmente nos habla./ppUn relato poético y preciso de cuando los libros eran jóvenes y todo sucedía por primera vez. bHéctor Abad Faciolince/b/ppiEl infinito en un junco/i nos permite volver a tener esperanza en nosotros mismos y en nuestra imaginación. La gran empresa del libro es una de nuestras grandes conquistas como especie.',
    'isbn':'9786073804332',
    'precio':'399.00'
});

addItem({
    'nombre':'Los juegos del hambre: En llamas',
    'autor':'Suzanne Collins',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9786073807852_ddec.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'Molino',
    'descripcion':'El mundo estará observando.Katniss Everdeen sobrevivió a Los Juegos del Hambre, pero el Capitolio quiere venganza.Contra todo pronóstico, Katniss Everdeen y Peeta Mellark siguen vivos.',
    'isbn':'9786073807852',
    'precio':'359.00'
});

addItem({
    'nombre':'Los juegos del hambre: Sinsajo',
    'autor':'Suzanne Collins',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9786073807869_9037.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'Molino',
    'descripcion':'El mundo estará observando.«SI NOSOTROS ARDEMOS, TÚ ARDERÁS CON NOSOTROS».Katniss Everdeen sobrevivió dos veces a los Juegos del Hambre, pero no está a salvo. ',
    'isbn':'9786073807869',
    'precio':'369.00'
});

addItem({
    'nombre':'La segunda guerra mundial (1939-1945)',
    'autor':'Martin Gilbert',
    'img':'https://www.gandhi.com.mx/media/catalog/product/t/m/tmp9788490601648_a685.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'La esfera de los libros',
    'descripcion':'Por primera vez en un solo volumen los dos tomos sobre la Segunda Guerra Mundial de Martin Gilbert. La Segunda Guerra Mundial fue el conflicto bélico más destructivo de la historia.',
    'isbn':'9788490601648',
    'precio':'852.00'
});

addItem({
    'nombre':'El hombre sin rostro',
    'autor':'Masha Gessen',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9786073815161_10e2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'Debate',
    'descripcion':'La fascinante historia de cómo Vladímir Putin, un agente mediocre del KGB, llegó a la presidencia de Rusia, deshizo años de avances y convirtió a su país de nuevo en una amenaza para sus ciudadanos. ',
    'isbn':'9786073815161',
    'precio':'299.00'
});

addItem({
    'nombre':'El ojo del mundo',
    'autor':'Robert Jordan',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9788445007006_4bdf.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'Minotauro México',
    'descripcion':'La vida de Rand Al’Thor y sus amigos en Campo de Emond ha resultado bastante monótona hasta que una joven misteriosa llega al pueblo. Moraine, una maga capaz de encauzar el Poder Único, anuncia el despertar de una terrible amenaza. Esa misma noche, el pueblo se ve atacado por espantosos trollocs sedientos de sangre, unas bestias semihumanas que hastaentonces se habían considerado una leyenda. Mientras Campo de Emond soporta la ofensiva, Moraine y su guardián ayudan a Rand y a sus amigos a escapar.',
    'isbn':'9788445007006',
    'precio':'498.00'
});

addItem({
    'nombre':'Las intermitencias de la muerte',
    'autor':'José Saramago',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9789707703254_9cae.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'Alfaguara',
    'descripcion':'En un país cuyo nombre no será mencionado, se produce algo nunca visto desde el principio del mundo: la muerte decide suspender su trabajo letal, la gente deja de morir. La euforia colectiva se desata, pero muy pronto dará paso a la desesperación yal caos. Sobran los motivos. Si es cierto que las personas ya no mueren, eso no significa que el tiempo haya parado. El destino de los humanos será una vejez eterna.En un país cuyo nombre no será mencionado, se produce algo nunca visto desde elprincipio del mundo: la muerte decide suspender su trabajo letal, la gente deja de morir. La euforia colectiva se desata, pero muy pronto dará paso a la desesperación y al caos. Sobran los motivos. Si es cierto que las personas ya no mueren, eso no significa que el tiempo haya parado. El destino de los humanos será una vejez eterna.',
    'isbn':'9789707703254',
    'precio':'298.00'
});

addItem({
    'nombre':'La gran cacería',
    'autor':'Robert Jordan',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9788445007013_66de.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'Minotauro México',
    'descripcion':'¡Rand ha sobrevivido a su primer enfrentamiento con los perversos seguidores del Oscuro, pero ni sus amigos ni él están a salvo, ya que el señor del mal ha liberado a los Renegados, mientras los héroes de todas las eras se levantan de la tumba cuando el Cuerno de Valere los saca de su sueño. Al verse obligado a enfrentarse alas fuerzas de la oscuridad, Rand decide escapar de su destino.Pero la profecía tiene que cumplirse. Por su calidad literaria, su ambicioso planteamiento y su descomunal historia, La Rueda del Tiempo es la saga de fantasía más importante de los últimos treinta años. El lector que inicie el camino junto a Egwene al Vere, Nynaeve al Meara, Moraine, Rand, Mat y Perrin no podrá abandonar el viaje hasta su incierto y sorprendente final.',
    'isbn':'9788445007013',
    'precio':'458.00'
});

addItem({
    'nombre':'La rebelión de los colgados',
    'autor':'Bruno Traven Traven',
    'img':'https://www.gandhi.com.mx/media/catalog/product/9/7/9786074532210.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478',
    'editorial':'Selector',
    'descripcion':'La rebelión de los colgados, forma junto con Gobierno, La Carreta, Marcha al imperio de la caoba, Monterías y El general, el ciclo de la caoba. Estas novelas, independientes entre sí, narran el drama de los indios del México tropical a principios del siglo XX. La rebelión de los colgados es la intensa historia del levantamiento de los peones oprimidos y de su lucha por alcanzar la libertad e independencia.',
    'isbn':'9786074532210',
    'precio':'150.00'
});


