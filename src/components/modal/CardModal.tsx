import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";

import { Star, StarHalf, StarOff } from "lucide-react";

export const CardModal = () => {

    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    function handleError() {
        alert('Servidor indisponível, tente novamente mais tarde.')
    }





    const [emailUserType, setuserEmail] = useState('');

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setuserEmail(e.target.value);
    }

    const carRating = 4.5; // Exemplo de rating, você pode substituir pelo valor real


    return (
        <div>

            <Button
                onClick={open}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none " onClose={close} __demoMode>
                <div className="fixed inset-0 z-10  overflow-y-auto backdrop-blur-2xl bg-white/5">
                    <div className="flex min-h-full items-center justify-center">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                            </DialogTitle>
                            <div className="grid grid-cols-1  place-items-center  ">
                                <div className="max-w-2xl mx-auto ">
                                    <div className="bg-white shadow-md border border-gray-200 rounded-lg sm:p-6 lg:p-8 dark:bg-white-100 dark:border-gray-700">
                                        <div className='flex justify-between'>
                                            <Button
                                                className="text-gray-400 dark:text-white"
                                                onClick={close}
                                            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </Button>
                                        </div>
                                        <div className="space-y-6 p-10"  >
                                            <Card className="overflow-hidden rounded-2xl p-5 shadow-lg">
                                                <img
                                                    src="https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/cars/2023-onix/mov/06-images/versiones-2025/onix-lt.jpg?imwidth=960"
                                                    alt=""
                                                    className="w-full object-cover"
                                                />
                                                <h3 className="text-gray-600">Toyota Corolla</h3>
                                                <div className="flex items-center gap-1">
                                                    {Array.from({ length: 5 }, (_, i) => {
                                                        const rating = carRating || 0;
                                                        if (rating >= i + 1) {
                                                            return <Star key={i} className="w-4 h-4 text-blue-600 fill-blue-600" />;
                                                        } else if (rating >= i + 0.5) {
                                                            return <StarHalf key={i} className="w-4 h-4 text-blue-600" />;
                                                        } else {
                                                            return <StarOff key={i} className="w-4 h-4 text-gray-400" />;
                                                        }
                                                    })}
                                                </div>
                                                <p className="text-gray-600">R$ 150,00/dia</p>
                                                <p className="text-gray-600">Toyota</p>
                                                <p className="text-gray-600">ABC-1234</p>
                                                <p className="text-gray-600">2023</p>

                                                <Button onClick={handleError} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Alugar
                                                </Button>

                                            </Card>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>



        </div>
    )
}