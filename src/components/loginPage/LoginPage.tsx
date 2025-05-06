import { Button } from "../ui/button";
import { Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";

export default function LoginPage() {

    function handleError() {
        toast.error('🚫 Servidor indisponível, tente novamente mais tarde.')
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-white px-6 py-12">
      {/* Container principal */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Cabeçalho */}
        <div className="bg-blue-600 py-6 px-8 text-center">
          <h1 className="text-3xl font-bold text-white">Bem-vindo de volta à ViaRápida</h1>
          <p className="text-blue-100 mt-2">Acesse sua conta para reservar seu carro</p>
        </div>

        {/* Formulário */}
        <div className="p-8">
          <form className="space-y-6">
            {/* Campo de Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Campo de Senha */}
            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Lembrar de mim e Esqueci a senha */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="lembrar"
                  name="lembrar"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="lembrar" className="ml-2 block text-sm text-gray-700">
                  Lembrar de mim
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                <p className="text-blue-600 hover:underline">Esqueceu sua senha?</p>
                </a>
              </div>
            </div>

            {/* Botão de Login */}
            <div>
              <Button onClick={handleError}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-lg transition-colors duration-300 hover:opacity-90"
              >
                Entrar
              </Button>
            </div>
          </form>

          {/* Divisor */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-600">Ou continue com</span>
              </div>
            </div>
          </div>

          {/* Login Social */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <Button
                type="button"
                className="w-full hover:opacity-90 bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded-lg font-medium flex items-center justify-center hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2 text-gray-100" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-100">GitHub</p>
              </Button>
            </div>

            <div>
              <Button
                type="button"
                className="w-full hover:opacity-90 bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded-lg font-medium flex items-center justify-center hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2 text-gray-100" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4.293 15.707a1 1 0 01-1.414 0L10 11.414l-2.879 2.879a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 011.414-1.414L10 8.586l2.879-2.879a1 1 0 111.414 1.414L11.414 10l2.879 2.879a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-100">Google</p>
              </Button>
            </div>
          </div>

          {/* Link para Cadastro */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Não tem uma conta?{' '}
              <a href="/signup" className=" font-medium hover:underline">
                <p className="text-blue-600 hover:underline">Cadastre-se</p>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}