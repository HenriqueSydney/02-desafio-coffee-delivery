import americano from '../assets/Type=Americano.png'
import arabe from '../assets/Type=Árabe.png'
import cafeComLeite from '../assets/Type=Café com Leite.png'
import cafeGelado from '../assets/Type=Café Gelado.png'
import cappuccino from '../assets/Type=Capuccino.png'
import cubano from '../assets/Type=Cubano.png'
import expresso from '../assets/Type=Expresso.png'
import havaiano from '../assets/Type=Havaiano.png'
import irlandes from '../assets/Type=Irlandês.png'
import latte from '../assets/Type=Latte.png'
import macchiato from '../assets/Type=Macchiato.png'
import mocaccino from '../assets/Type=Mochaccino.png'
import expressoCremoso from '../assets/Type=Expresso Cremoso.png'
import chocolateQuente from '../assets/Type=Chocolate Quente.png'

export type CoffeeData = {
  name: string
  description: string
  tags: string[]
  price: number
  img: string
}

export const products: CoffeeData[] = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
    img: expresso,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    img: americano,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    img: expressoCremoso,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida Preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
    img: cafeGelado,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    img: cafeComLeite,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    img: latte,
  },
  {
    name: 'Cappuccino',
    description: 'Bebida com canela de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    img: cappuccino,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    img: macchiato,
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    img: mocaccino,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
    img: chocolateQuente,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    img: cubano,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
    img: havaiano,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
    img: arabe,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
    img: irlandes,
  },
]
