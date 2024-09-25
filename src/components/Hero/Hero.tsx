"use client"

import Button from "../Button/Button";
import RegisterForm from "../RegisterForm/RegisterForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Asegúrate de tener el import de Image si usas Next.js

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 segundos de retraso
  };

  return (
    <>
      {/* Sección del Hero */}
     {/* Hero Section */}
<div
  className="min-h-[65vh] flex flex-col justify-center items-center gap-x-5 bg-cover bg-center text-First mt-5 mb-5"
  style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2023/02/23/08/40/marble-effect-7808199_1280.png')` }}
>
  <h1 className="text-5xl font-bold text-white text-center animate-slide-in">
    "Step into the Future - Discover Top Tech Products"
  </h1>
  <div className="flex flex-col justify-center items-center h-full mt-4">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-orange-500 flex justify-center items-center animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 01.993.883L11 6v8.585l3.293-3.292a1 1 0 011.497 1.32l-.083.094-5 5a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.497l.094.083L9 14.585V6a1 1 0 011-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <Button href="/products">
        <h3 className="mt-4 text-white">Ir a los productos</h3>
      </Button>
    </div>
  </div>
</div>


      <div className="w-full h-[30vh] bg-Fifth flex justify-center items-center mt-5 mb-5 animate-slide-in">
        <h2 className="text-5xl text-white font-bold">
          ¡Crea una cuenta!
        </h2>
      </div>

      {/* Productos Destacados */}
      <div className="container my-8 mb-8">
        
        {/* Aquí renderiza tus productos destacados */}
      </div>

      {/* Sección del Formulario de Registro */}
      <div className="w-full min-h-[10vh] bg-gray-100 flex">
        {/* Mitad Informativa */}
        <div className="w-1/2 p-10 bg-Fifth text-white flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4">Regístrate en Techify</h2>
          <h3 className="text-lg">
            Recibe las últimas novedades sobre tecnología, ofertas exclusivas y más.
          </h3>
        </div>
        {/* Mitad del Formulario */}
        <div className="w-1/2 flex justify-center items-center">
          <RegisterForm />
        </div>
      </div>

      {/* Carrusel de Imágenes */}
      <div className="w-full h-[85vh] mt-5 mb-5"> {/* Asegura una altura suficiente */}
        <Slider {...settings}>
          <div className="relative h-[85vh]"> {/* Usa "relative" para layout "fill" */}
            <Image
              src="/assets/oferta.png"
              alt="Imagen 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[85vh] mt-1 mb-2 ">
            <Image
              src="/assets/envio.png"
              alt="Imagen 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Slider>
      </div>

      <div className="w-full h-[30vh] bg-Fifth flex justify-center items-center mt-5 mb-5 animate-pulse">
        <h2 className="text-5xl text-white font-bold">
          ¡No te pierdas nuestras ofertas exclusivas!          
        </h2>
      </div>
      
    </>
  );
};

export default Hero;
