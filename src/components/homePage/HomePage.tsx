import { Button } from "../ui/button";
import { ShieldCheck, XCircle, Headset } from "lucide-react"; // Ícones do Lucide

import CarrosImage from "/carsImage.png"; // sua imagem

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-white px-6 md:px-20 py-12">

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-7xl">

        {/* Texto principal */}
        <div className="flex flex-col items-start text-left max-w-lg">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Encontre o carro ideal para sua viagem com a ViaRápida
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Reserve online, com rapidez, confiança e suporte 24h. Carros modernos e prontos para sua jornada.
          </p>
          <a href="/carrental">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-xl transition-transform transform hover:scale-105 animate-pulse">
              Explorar Carros
            </Button>
          </a>
        </div>

        {/* Imagem de carros */}
        <div className="flex justify-center items-center mb-10 md:mb-0 md:ml-10">
          <img
            src={CarrosImage}
            alt="Carros para aluguel"
            width="600"
            height="400"
            className="object-contain"
          />
        </div>
      </div>

      {/* Benefícios */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">

        <div className="flex flex-col items-center text-center">
          <ShieldCheck className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">Seguro Incluso</h3>
          <p className="text-gray-600">Todos os veículos com seguro completo para sua tranquilidade.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <XCircle className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">Cancelamento Grátis</h3>
          <p className="text-gray-600">Altere seus planos sem cobranças extras até 24h antes.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Headset className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">Atendimento 24h</h3>
          <p className="text-gray-600">Conte com a gente em qualquer momento da sua viagem.</p>
        </div>

      </div>

      {/* Depoimentos */}
      <div className="mt-24 w-full max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-900">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <p className="text-lg text-gray-600 mb-4">"Excelente atendimento, rápido e muito educados."</p>
            <span className="font-semibold text-orange-600">— Ana Paula</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <p className="text-lg text-gray-600 mb-4">"Carros novos e super bem cuidados. Recomendo muito!"</p>
            <span className="font-semibold text-orange-600">— João Silva</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <p className="text-lg text-gray-600 mb-4">"Fiz a reserva em minutos. Tudo muito prático e seguro."</p>
            <span className="font-semibold text-orange-600">— Mariana Costa</span>
          </div>

        </div>
      </div>

      {/* Categorias */}
      <div className="mt-28 w-full max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Categorias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-orange-700">SUVs</h3>
          </div>
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-orange-700">Compactos</h3>
          </div>
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-orange-700">Sedans</h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 w-full bg-orange-600 text-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">ViaRápida</h3>
            <p className="text-orange-100 mt-2">Rapidez, confiança e tecnologia em um só lugar.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#"><p className="text-orange-100 hover:underline">Sobre Nós</p></a>
            <a href="#"><p className="text-orange-100 hover:underline">Contato</p></a>
            <a href="#"><p className="text-orange-100 hover:underline">Política de Privacidade</p></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
