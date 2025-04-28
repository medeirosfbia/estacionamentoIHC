import { Button } from "@/components/ui/button";
import { ShieldCheck, XCircle, Headset } from "lucide-react"; // Ícones do Lucide

import CarrosImage from "/carsImage.png"; // sua imagem

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-6 md:px-20 py-12">

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-7xl">

        {/* Texto principal */}
        <div className="flex flex-col items-start text-left max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Alugue o carro dos seus sonhos com facilidade
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Escolha entre os melhores modelos para tornar sua viagem inesquecível.
            Rápido, seguro e totalmente online.
          </p>
          <a href="/carrental">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl transition-transform transform hover:scale-105 animate-pulse">
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

        {/* Seguro Incluso */}
        <div className="flex flex-col items-center text-center">
          <ShieldCheck className="w-12 h-12 text-blue-700 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">Seguro Incluso</h3>
          <p className="text-gray-600">Viaje tranquilo sabendo que todos os carros já possuem seguro.</p>
        </div>

        {/* Cancelamento Grátis */}
        <div className="flex flex-col items-center text-center">
          <XCircle className="w-12 h-12 text-blue-700 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">Cancelamento Grátis</h3>
          <p className="text-gray-600">Mudou de planos? Cancele sem custos até 24h antes da retirada.</p>
        </div>

        {/* Atendimento 24h */}
        <div className="flex flex-col items-center text-center">
          <Headset className="w-12 h-12 text-blue-700 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">Atendimento 24h</h3>
          <p className="text-gray-600">Precisa de ajuda? Nossa equipe está sempre disponível para você.</p>
        </div>

      </div>

      {/* Depoimentos */}
      <div className="mt-24 w-full max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">O que nossos clientes dizem</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Depoimento 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <p className="text-lg text-gray-600 mb-4">"Excelente atendimento, rápido e muito educados."</p>
            <span className="font-semibold text-blue-800">— Ana Paula</span>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <p className="text-lg text-gray-600 mb-4">"Carros novos e super bem cuidados. Recomendo muito!"</p>
            <span className="font-semibold text-blue-800">— João Silva</span>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <p className="text-lg text-gray-600 mb-4">"Fiz a reserva em minutos. Tudo muito prático e seguro."</p>
            <span className="font-semibold text-blue-800">— Mariana Costa</span>
          </div>

        </div>
      </div>

    </div>
  );
}
