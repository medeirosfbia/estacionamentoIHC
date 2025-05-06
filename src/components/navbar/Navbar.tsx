import { Button } from "../ui/button";
import { Home, Car, Phone, LogIn, UserPlus } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blck shadow">

      <div className="text-xl font-bold">
        <a href="/"><img className="w-20 hover:opacity-60" src="/logoViaRapida.png" alt="Logo da Empresa de aluguel de carros Via Rápida" /></a>
      </div>

      <div className="flex items-center justify-between gap-8">
        <a href="/login" className="flex items-center gap-2">
          <LogIn className="w-4 h-4 text-gray-100" />
          <p className="text-gray-100 hover:underline">Entrar</p>
        </a>
        <a href="/register" className="flex items-center gap-2">
          <UserPlus className="w-4 h-4 text-gray-100" />
          <p className="text-gray-100 hover:underline">Cadastre-se</p>
        </a>

        <div className="relative group">
          <Button className="flex items-center gap-1  hover:bg-blue-700 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            {/* <ChevronDown size={16} /> */}
          </Button>
          <div className="absolute right-0 mt-0 mx-2 w-35 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible">
            <a className="flex px-4 py-2 hover:bg-gray-100 group-hover:visible" href="/"><Home className="w-4 h-4 m-2 text-blue-900" /><p className="text-blue-900 hover:underline">Início</p></a>
            <a className="flex px-4 py-2 hover:bg-gray-100 group-hover:visible" href="/carrental"><Car className="w-4 h-4 m-2 text-blue-900" /><p className="text-blue-900 hover:underline">Carros</p></a>
            <a className="flex px-4 py-2 hover:bg-gray-100 group-hover:visible" href="#"><Phone className="w-4 h-4 m-2 text-blue-900" /><p className="text-blue-900 hover:underline">Contato</p></a>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;