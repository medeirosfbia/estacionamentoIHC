import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { CardModal } from "../modal/CardModal";

import { Star, StarHalf, StarOff } from "lucide-react";

const cars = [
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=2400",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "ABC-1234",
    ano: 2023,
    rating: 4.5,
  },
  {
    name: "Jeep Renegade",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-preto-ouro-negro-3-4-frente.png",
    price: "R$ 200,00/dia",
    marca: "Jeep",
    placa: "RTY-5678",
    ano: 2022,
    rating: 4.0,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-prata-shark-3-4-frente.png",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "FTG-5852",
    ano: 2019,
    rating: 3.5,
  },
  {
    name: "Chevrolet Onix",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/mov/06-images/versiones-2025/onix-lt.jpg?imwidth=960",
    price: "R$ 130,00/dia",
    marca: "Chevrolet",
    placa: "FTG-5852",
    ano: 2024,
    rating: 5.0,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=2400",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "FTH-5452",
    ano: 2021,
    rating: 4.2,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=2400",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "ABC-1234",
    ano: 2023,
    rating: 4.7,
  },
  {
    name: "Chevrolet Onix",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-vermelho-carmim-3-4-frente.png",
    price: "R$ 130,00/dia",
    marca: "Chevrolet",
    placa: "XYZ-5678",
    ano: 2022,
    rating: 3.8,
  },
  {
    name: "Jeep Renegade",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-preto-ouro-negro-3-4-frente.png",
    price: "R$ 200,00/dia",
    marca: "Jeep",
    placa: "RTY-5678",
    ano: 2022,
    rating: 4.1,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-prata-shark-3-4-frente.png",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "FTG-5852",
    ano: 2019,
    rating: 3.0,
  },
  {
    name: "Chevrolet Onix",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/mov/06-images/versiones-2025/onix-lt.jpg?imwidth=960",
    price: "R$ 130,00/dia",
    marca: "Chevrolet",
    placa: "FTG-5852",
    ano: 2024,
    rating: 5.0,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=2400",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "FTH-5452",
    ano: 2021,
    rating: 4.3,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=2400",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "ABC-1234",
    ano: 2023,
    rating: 4.6,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-prata-shark-3-4-frente.png",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "FTG-5852",
    ano: 2019,
    rating: 3.2,
  },
  {
    name: "Chevrolet Onix",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/mov/06-images/versiones-2025/onix-lt.jpg?imwidth=960",
    price: "R$ 130,00/dia",
    marca: "Chevrolet",
    placa: "FTG-5852",
    ano: 2024,
    rating: 4.9,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=2400",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "ABC-1234",
    ano: 2023,
    rating: 4.4,
  },
  {
    name: "Chevrolet Onix",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-vermelho-carmim-3-4-frente.png",
    price: "R$ 130,00/dia",
    marca: "Chevrolet",
    placa: "XYZ-5678",
    ano: 2022,
    rating: 3.7,
  },
  {
    name: "Jeep Renegade",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-preto-ouro-negro-3-4-frente.png",
    price: "R$ 200,00/dia",
    marca: "Jeep",
    placa: "RTY-5678",
    ano: 2022,
    rating: 4.2,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-prata-shark-3-4-frente.png",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "FTG-5852",
    ano: 2019,
    rating: 3.5,
  },
  {
    name: "Chevrolet Onix",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/mov/06-images/versiones-2025/onix-lt.jpg?imwidth=960",
    price: "R$ 130,00/dia",
    marca: "Chevrolet",
    placa: "FTG-5852",
    ano: 2024,
    rating: 5.0,
  },
  {
    name: "Toyota Corolla",
    image: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=2400",
    price: "R$ 150,00/dia",
    marca: "Toyota",
    placa: "FTH-5452",
    ano: 2021,
    rating: 4.1,
  },
];

export default function CarRentalPage() {
  return (
    <div className="">
      <div className="min-h-screen w-full bg-gray-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 p-6">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full object-cover"
                />
                <CardContent >
                  <h3 className="text-gray-600">{car.name}</h3>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => {
                      const rating = car.rating || 0;
                      if (rating >= i + 1) {
                        return <Star key={i} className="w-4 h-4 text-blue-600 fill-blue-600" />;
                      } else if (rating >= i + 0.5) {
                        return <StarHalf key={i} className="w-4 h-4 text-blue-600" />;
                      } else {
                        return <StarOff key={i} className="w-4 h-4 text-gray-400" />;
                      }
                    })}
                  </div>
                  <p className="text-gray-600">{car.price}</p>
                  <p className="text-gray-600">{car.marca}</p>
                  <p className="text-gray-600">{car.placa}</p>
                  <p className="text-gray-600">{car.ano}</p>
                  <CardModal />
                  {/* <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Alugar
                </Button> */}
                </CardContent>
              </Card>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
