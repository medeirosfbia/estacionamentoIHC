import { Button } from "../ui/button";
import { User, Lock, Mail, Phone, MapPin} from "lucide-react";
import { toast } from "react-toastify";

export default function SignUpPage() {

    function handleError() {
            toast.error('🚫 Servidor indisponível, tente novamente mais tarde.')
        }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-white px-6 py-12">
      {/* Container principal */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Cabeçalho */}
        <div className="bg-orange-600 py-6 px-8 text-center">
          <h1 className="text-3xl font-bold text-white">Crie sua conta na ViaRápida</h1>
          <p className="text-orange-100 mt-2">Preencha seus dados para começar a alugar</p>
        </div>

        {/* Formulário */}
        <div className="p-8">
          <form className="space-y-6">
            {/* Seção de Informações Pessoais */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-900 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Informações Pessoais
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                    CPF
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>

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
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="nascimento" className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    required
                    className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Seção de Endereço */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-900 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Endereço
              </h2>

              <div>
                <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                  CEP
                </label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  required
                  className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                  placeholder="00000-000"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700 mb-1">
                    Logradouro
                  </label>
                  <input
                    type="text"
                    id="logradouro"
                    name="logradouro"
                    required
                    className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                    placeholder="Rua, Avenida, etc."
                  />
                </div>

                <div>
                  <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
                    Número
                  </label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    required
                    className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                    placeholder="Nº"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="complemento" className="block text-sm font-medium text-gray-700 mb-1">
                    Complemento
                  </label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                    placeholder="Apto, Bloco, etc."
                  />
                </div>

                <div>
                  <label htmlFor="bairro" className="block text-sm font-medium text-gray-700 mb-1">
                    Bairro
                  </label>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    required
                    className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-1">
                    Estado
                  </label>
                  <select
                    id="estado"
                    name="estado"
                    required
                    className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                  >
                    <option value="">Selecione</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    {/* Adicione todos os estados */}
                  </select>
                </div>
              </div>
            </div>

            {/* Seção de Segurança */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-900 flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Segurança
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmar-senha" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="confirmar-senha"
                      name="confirmar-senha"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-gray-800"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Termos e Condições */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termos"
                  name="termos"
                  type="checkbox"
                  required
                  className="focus:ring-orange-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termos" className="font-medium text-gray-700">
                    <p>
                    Eu concordo com os <a href="#"><p className="text-blue-600 hover:underline">Termos de Serviço</p></a> e <a href="#"><p className="text-blue-600 hover:underline">Política de Privacidade</p></a>
                    </p>
                    
                </label>
              </div>
            </div>

            {/* Botão de Cadastro */}
            <div>
              <Button onClick={handleError}
                type="submit"
                className="w-full bg-blue-600 hover:opacity-100 opacity-90 text-white py-3 px-4 rounded-lg font-medium text-lg transition-colors duration-300"
              >
                Criar Conta
              </Button>
            </div>
          </form>

          {/* Link para Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Já tem uma conta?{' '}
              <a href="/login" className="text-orange-600 font-medium hover:underline">
                <p className="block hover:underline text-blue-600">Faça login</p>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}