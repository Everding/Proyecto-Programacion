import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/Sobre.css';

const Sobre = () => {

    const imagenesCarrusel = [
        "https://media.ambito.com/p/7534829d441add0ea66df9a77e3c8d69/adjuntos/239/imagenes/036/454/0036454208/kioscojpg.jpg",
        "https://media.ambito.com/p/0e90cce8338bd70838df64301ef80170/adjuntos/239/imagenes/039/294/0039294397/730x0/smart/kioscosjpg.jpg",
        "https://media.ambito.com/p/8ec7ffcf3dc3b4ab8035f3aa32e294c3/adjuntos/239/imagenes/040/056/0040056138/golosinasjpg.jpg?2022-08-06-12-17-46",
        "https://www.nueva-ciudad.com.ar/advf/imagenes/editadas/60d377bc61638_800x533.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/q9ngOkpFcei_18vefSMRpg/o.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/MwDNPCkgZYgC5Rn8AWmmrw/o.jpg",
        "https://infokioscos.com.ar//wp-content/uploads22/4-consejos-para-abrir-un-kiosco.jpg"
    ];

    const productos = [
        { nombre: "Gaseosa Cola", imagen: "https://dcdn-us.mitiendanube.com/stores/001/151/835/products/77908950004301-80602de5b61cff11bb15890782195412-1024-1024.jpg" },
        { nombre: "Agua Mineral", imagen: "https://hiperlibertad.vtexassets.com/arquivos/ids/198734-800-auto?v=637922217787170000&width=800&height=auto&aspect=true" },
        { nombre: "Papas Fritas", imagen: "https://delimart.com.ar/user-content/5ce39747-1417-47dc-b2b8-ebb16ab62cba.jpg" },
        { nombre: "Chocolate Block", imagen: "https://arcorencasa.com/wp-content/uploads/2024/10/20241008-5312.webp" },
        { nombre: "Energizante", imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/824423-800-600?v=638514813739870000&width=800&height=600&aspect=true" },
        { nombre: "Caramelos", imagen: "https://supermas.cdn1.dattamax.com/userfiles/images/productos/600/82869.png" },
        { nombre: "Alfajores", imagen: "https://www.clarin.com/img/2021/04/30/0Ybo03HZM_720x0__1.jpg" }
    ];

    const responsiveCarruselFotos = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const responsiveCarruselProductos = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <div className="landingContainer">

            <h1 className="tituloLanding">¡Bienvenidos a Kiosco El Buen Sabor!</h1>

            <Carousel responsive={responsiveCarruselFotos} infinite autoPlay className="carruselFotos">
                {imagenesCarrusel.map((img, index) => (
                    <div key={index} className="carruselItem">
                        <img src={img} alt={`Kiosco ${index + 1}`} className="imgCarrusel" />
                    </div>
                ))}
            </Carousel>

            <div className="historia">
                <h2>Nuestra Historia</h2>
                <p>
                    Kiosco Genérico abrió sus puertas en 1995 en el corazón de Banda del Río Salí, con la ilusión de convertirse en mucho más que un simple punto de venta. Nacimos como un pequeño puesto familiar, con apenas unas estanterías y un par de heladeras, ofreciendo golosinas, bebidas frescas y algunos productos básicos para los vecinos del barrio.

                    Con el paso de los años, nuestro kiosco se fue ganando el cariño de la comunidad. Los niños venían luego de la escuela a comprar caramelos y alfajores, mientras los adultos se acercaban por una gaseosa, un paquete de cigarrillos o simplemente a charlar. Así, poco a poco, Kiosco Genérico se transformó en un punto de encuentro, un lugar donde las historias y anécdotas del barrio se cruzaban cada día.

                    En 2005, con mucho esfuerzo y el apoyo de nuestros fieles clientes, logramos ampliar el local. Incorporamos nuevos productos, heladeras de última generación y un pequeño sector de café, donde hoy en día muchos comienzan sus mañanas antes de ir al trabajo.

                    Hoy, tras casi 30 años de historia, seguimos fieles a nuestros valores: atención cercana, productos frescos y variedad para todas las edades. Ofrecemos desde snacks, bebidas y golosinas, hasta productos de kiosco saludable, bebidas energizantes y artículos de primera necesidad.

                    Además, hemos sumado la posibilidad de realizar recargas de celular, pagos de servicios y, recientemente, incorporamos pedidos por WhatsApp y redes sociales, adaptándonos a las necesidades modernas pero sin perder la esencia de un kiosco de barrio tradicional.

                    Seguimos creciendo, pero sin olvidar nuestras raíces: somos un kiosco atendido por sus dueños, con compromiso, respeto y el deseo de seguir siendo parte de la vida cotidiana de todos los vecinos de Banda del Río Salí.

                    ¡Gracias por elegirnos y por acompañarnos en este camino que recién empieza!
                </p>
            </div>

            <h2 className="tituloProductos">Nuestros Productos</h2>
            <Carousel responsive={responsiveCarruselProductos} infinite autoPlay className="carruselProductos">
                {productos.map((prod, index) => (
                    <div key={index} className="cardProducto">
                        <img src={prod.imagen} alt={prod.nombre} />
                        <p>{prod.nombre}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Sobre;
