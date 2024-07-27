type Category = "Pasta" | "Risotto" | "Soup" | "Drink" | "Other"

type Ingredient = {
  name: string
  mass: number
  price: number
}

export type Dish = {
  name: string
  description: string
  mass: number
  price: number
  ingredients: Ingredient[]
  imageSrc: string
  category: Category
}

export const menu: Dish[] = [
  {
    name: "Паста Карбонара",
    description: "Класична італійська паста з беконом, яйцями та сиром пармезан.",
    mass: 350,
    price: 547.54,
    ingredients: [
      { name: "паста", mass: 200, price: 50 },
      { name: "бекон", mass: 50, price: 100 },
      { name: "яйця", mass: 50, price: 30 },
      { name: "сир пармезан", mass: 50, price: 50 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Ризотто з Грибами",
    description: "Кремове ризотто з свіжими грибами та сиром пармезан.",
    mass: 400,
    price: 620.74,
    ingredients: [
      { name: "рис", mass: 200, price: 40 },
      { name: "гриби", mass: 100, price: 100 },
      { name: "бульйон", mass: 50, price: 30 },
      { name: "сир пармезан", mass: 50, price: 50 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Risotto",
  },
  {
    name: "Мінестроне",
    description: "Традиційний італійський овочевий суп.",
    mass: 300,
    price: 328.04,
    ingredients: [
      { name: "овочі", mass: 200, price: 60 },
      { name: "бульйон", mass: 100, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Soup",
  },
  {
    name: "Фокачча з Розмарином",
    description: "Італійський плоский хліб з розмарином та оливковою олією.",
    mass: 250,
    price: 365.14,
    ingredients: [
      { name: "борошно", mass: 150, price: 20 },
      { name: "розмарин", mass: 50, price: 10 },
      { name: "оливкова олія", mass: 50, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Other",
  },
  {
    name: "Равіолі з М'ясом",
    description: "Фаршировані пасти з м'ясною начинкою, подаються з томатним соусом.",
    mass: 300,
    price: 547.54,
    ingredients: [
      { name: "равіолі", mass: 200, price: 100 },
      { name: "м'ясний фарш", mass: 50, price: 100 },
      { name: "томатний соус", mass: 50, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Паста з Томати та Базилік",
    description: "Проста і смачна паста з томатами та базиліком.",
    mass: 350,
    price: 474.34,
    ingredients: [
      { name: "паста", mass: 200, price: 50 },
      { name: "томати", mass: 100, price: 50 },
      { name: "базилік", mass: 50, price: 20 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Панна Котта",
    description: "Кремовий десерт з вершків, цукру та желатину.",
    mass: 200,
    price: 365.14,
    ingredients: [
      { name: "вершки", mass: 150, price: 50 },
      { name: "цукор", mass: 30, price: 10 },
      { name: "желатин", mass: 20, price: 5 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Other",
  },
  {
    name: "Піца Маргарита",
    description: "Класична піца з томатним соусом, моцарелою та базиліком.",
    mass: 400,
    price: 547.54,
    ingredients: [
      { name: "тісто", mass: 200, price: 50 },
      { name: "томатний соус", mass: 100, price: 30 },
      { name: "моцарела", mass: 50, price: 100 },
      { name: "базилік", mass: 50, price: 20 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Other",
  },
  {
    name: "Паста Путтанеска",
    description: "Паста з оливками, каперсами та анчоусами у томатному соусі.",
    mass: 350,
    price: 474.34,
    ingredients: [
      { name: "паста", mass: 200, price: 50 },
      { name: "оливки", mass: 50, price: 50 },
      { name: "каперси", mass: 50, price: 40 },
      { name: "томатний соус", mass: 50, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Різотто з Морепродуктами",
    description: "Кремове різотто з морепродуктами.",
    mass: 400,
    price: 658.54,
    ingredients: [
      { name: "рис", mass: 200, price: 40 },
      { name: "морепродукти", mass: 100, price: 200 },
      { name: "бульйон", mass: 50, price: 30 },
      { name: "сир пармезан", mass: 50, price: 50 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Risotto",
  },
  {
    name: "Спагеті Болоньєзе",
    description: "Класичні спагеті з м'ясним соусом болоньєзе.",
    mass: 350,
    price: 511.34,
    ingredients: [
      { name: "спагеті", mass: 200, price: 50 },
      { name: "м'ясний соус болоньєзе", mass: 100, price: 150 },
      { name: "сир пармезан", mass: 50, price: 50 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Тальятеле з Рагу",
    description: "Довга, пласка паста з багатим м'ясним соусом рагу.",
    mass: 400,
    price: 547.54,
    ingredients: [
      { name: "тальятеле", mass: 200, price: 50 },
      { name: "м'ясний соус рагу", mass: 150, price: 150 },
      { name: "томатний соус", mass: 50, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Тальятеле з Рагу",
    description: "Довга, пласка паста з багатим м'ясним соусом рагу.",
    mass: 400,
    price: 547.54,
    ingredients: [
      { name: "тальятеле", mass: 200, price: 50 },
      { name: "м'ясний соус рагу", mass: 150, price: 150 },
      { name: "томатний соус", mass: 50, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Фарфалле з Лососем",
    description: "Паста у формі метеликів з кремовим соусом та лососем.",
    mass: 350,
    price: 547.54,
    ingredients: [
      { name: "фарфалле", mass: 200, price: 50 },
      { name: "лосось", mass: 100, price: 200 },
      { name: "вершки", mass: 50, price: 50 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Брускетта з Печеними Перцями",
    description: "Хліб з печеними перцями, оливками та каперсами.",
    mass: 150,
    price: 219.49,
    ingredients: [
      { name: "хліб", mass: 80, price: 30 },
      { name: "печені перці", mass: 40, price: 40 },
      { name: "оливки", mass: 20, price: 20 },
      { name: "каперси", mass: 10, price: 20 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Other",
  },
  {
    name: "Різотто з Шафраном",
    description: "Класичне міланське різотто з шафраном.",
    mass: 400,
    price: 511.34,
    ingredients: [
      { name: "рис", mass: 200, price: 40 },
      { name: "шафран", mass: 5, price: 100 },
      { name: "бульйон", mass: 150, price: 30 },
      { name: "сир пармезан", mass: 45, price: 50 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Risotto",
  },
  {
    name: "Спагеті алла Путтанеска",
    description: "Паста з оливками, каперсами, анчоусами у гострому томатному соусі.",
    mass: 350,
    price: 474.34,
    ingredients: [
      { name: "спагеті", mass: 200, price: 50 },
      { name: "оливки", mass: 50, price: 50 },
      { name: "каперси", mass: 50, price: 40 },
      { name: "томатний соус", mass: 50, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Лимонний Сорбет",
    description: "Освіжаючий лимонний десерт.",
    mass: 150,
    price: 182.39,
    ingredients: [
      { name: "лимонний сік", mass: 100, price: 50 },
      { name: "цукор", mass: 30, price: 20 },
      { name: "вода", mass: 20, price: 10 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Other",
  },
  {
    name: "Тортелліні з Сиром",
    description: "Маленькі фаршировані пасти з сиром.",
    mass: 300,
    price: 511.34,
    ingredients: [
      { name: "тортелліні", mass: 200, price: 100 },
      { name: "сир рікотта", mass: 50, price: 100 },
      { name: "шпинат", mass: 50, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Гаспачо",
    description: "Освіжаючий холодний суп з томатів та овочів.",
    mass: 300,
    price: 328.04,
    ingredients: [
      { name: "томати", mass: 150, price: 60 },
      { name: "огірки", mass: 80, price: 30 },
      { name: "перець", mass: 50, price: 30 },
      { name: "часник", mass: 10, price: 8 },
      { name: "оливкова олія", mass: 10, price: 20 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Soup",
  },
  {
    name: "Каннолі",
    description: "Сицилійський десерт з хрусткою оболонкою та начинкою з рікотти.",
    mass: 200,
    price: 292.47,
    ingredients: [
      { name: "оболонка", mass: 100, price: 100 },
      { name: "рікотта", mass: 50, price: 100 },
      { name: "цукор", mass: 30, price: 10 },
      { name: "шоколад", mass: 20, price: 20 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Other",
  },
  {
    name: "Пастіцціо",
    description: "Грецько-італійська запіканка з макаронів, м'яса та бешамелю.",
    mass: 400,
    price: 547.54,
    ingredients: [
      { name: "макарони", mass: 200, price: 50 },
      { name: "м'ясний фарш", mass: 100, price: 150 },
      { name: "бешамель", mass: 50, price: 50 },
      { name: "сир пармезан", mass: 50, price: 50 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
  {
    name: "Паста з Сальсіче",
    description: "Паста з італійськими ковбасками та томатним соусом.",
    mass: 350,
    price: 474.34,
    ingredients: [
      { name: "паста", mass: 200, price: 50 },
      { name: "сальсіча", mass: 100, price: 100 },
      { name: "томатний соус", mass: 50, price: 30 },
    ],
    imageSrc: "https://placehold.co/600x400.png",
    category: "Pasta",
  },
]
