import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blck shadow">
        <div className="text-xl font-bold">AlugaCar</div>
        <div className="relative group">
          <Button className="flex items-center gap-1  hover:bg-blue-700 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          {/* <ChevronDown size={16} /> */}
          </Button>
          <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible">
            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Início</a>
            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Carros</a>
            <a className="block px-4 py-2 hover:bg-gray-100" href="#">Contato</a>
          </div>
        </div>
      </nav>
  
  );
}

export default Navbar;