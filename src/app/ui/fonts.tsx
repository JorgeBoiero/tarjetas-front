import {Lusitana, Montserrat} from 'next/font/google'// para importar cualquier fuente de google fonts

export const montserrat = Montserrat({ subsets:['latin']}) //subset para que reconozca los simbolos especiales del latín

export const lusitana =  Lusitana({
    weight:['400', '700'],
    subsets:['latin']
})