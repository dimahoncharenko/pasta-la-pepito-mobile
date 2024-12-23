const ua = {
  common: {
    ok: "OK!",
    cancel: "Скасувати",
    clearButton: "Очистити",
    mass: "Вага",
    back: "Назад",
    logOut: "Вийти",
    menuButton: "Подивитися меню",
    cartButton: "До кошика",
    orderButton: "Оформити замовлення",
    addIngredientButton: "Додати інгредієнти",
    weight: "Вага",
  },
  unsavedChangesDialog: {
    header: "Увага!",
    message: "У вас є не збережені зміни, дані зміни будуть скасовані! Продовжити?",
    confirmButton: "Продовжити",
    cancelButton: "Скасувати",
  },
  categories: {
    all: "Все меню",
    pasta: "Паста",
    risotto: "Ризотто",
    soups: "Супи",
    drinks: "Напої",
    other: "Інше",
  },
  screenHeaders: {
    menu: "Наше меню",
    cart: "Кошик",
    checkout: "Оплата замовника",
    profile: "Профіль",
    search: "Пошук",
  },
  tabs: {
    home: "Головна",
    cart: "Корзина",
    menu: "Меню",
    profile: "Профіль",
    search: "Пошук",
  },
  homeScreen: {
    introduction:
      "Відчуйте аромат і неперевершений смак італійських страв, якими тепер можна насолоджуватися прямо вдома.",
    features: {
      title: "Наші переваги",
      delivery_title: "Безкоштовна доставка",
      delivery_subtitle: "При замовленні від 700 грн",
      recipes_title: "Традиційні рецепти",
      recipes_subtitle: "Стравжня італійська кухня",
      personalization_title: "Персоналізація страв",
      personalization_subtitle: "Додай улюблений інгредієнт",
      payment_title: "Зручна оплата",
      payment_subtitle: "Безготівково або готівково",
    },
    newDishes: {
      title: "Новинки",
    },
    instagram: {
      title: "Приєднуйтесь до нас в ",
      link: "Instagram",
    },
    drawer: {
      title: "Корисні лінки",
      links: {
        about: "Про нас",
        recipes: "Рецепти",
        contacts: "Контакти",
        blog: "Наш блог",
        reviews: "Відгуки",
        terms: "Політика конфіденційності",
      },
    },
  },
  cartScreen: {
    tabs: {
      delivery: "Доставка",
      pickup: "Самовивіз",
    },
    deliverySection: {
      title: "Адреса доставки",
      fields: {
        city: "Місто",
        street: "Вулиця",
        houseNumber: "Номер будинку",
        entrance: "Під'їзд",
        apartmentNumber: "Номер квартири",
        story: "Поверх",
        code: "Код домофону",
      },
      fieldsErrors: {
        city: "Обов'язково введіть місто",
        street: "Обов'язково введіть вулицю",
        houseNumber: "Обов'язково введіть номер будинку",
      },
      fieldsPlaceholders: {
        city: "Введіть місто",
        street: "Введіть вулицю",
        houseNumber: "Введіть номер будинку",
        entrance: "Введіть номер під'їзду",
        apartmentNumber: "Введіть номер квартири",
        story: "Введіть номер поверху",
        code: "Введіть код домофону",
      },
    },
    emptyCart: {
      heading: "Кошик пустий.",
      content: "Твій кошик просто плаче від самотності. Закинь туди щось путнє!",
    },
    pickupSection: {
      title: "Адреса ресторану",
      location: "Київ",
      address: "вул. Еспланадна, буд. 34/2",
    },
    summarySection: {
      title: "Ваше замовлення",
      subtitle: "Мінімальна сума для безкоштовної доставки 700 грн",
      totalTitle: "Товарів на суму:",
      deliveryTitle: "Доставка:",
      totalPriceTitle: "Сума до оплати:",
      deliveryValue: "за тарифами оператора",
    },
    checkoutSection: {
      contacts: {
        title: "Контакти замовника",
        fields: {
          name: "Ім'я",
          phone: "Телефон",
          email: "Email",
        },
        fieldsPlaceholders: {
          name: "Ваше ім'я",
          phone: "380ХХХХХХХХХ",
          email: "Ваш email",
        },
        fieldsErrors: {
          name: "Обов'язково введіть ім'я",
          phone: "Обов'язково введіть телефон",
        },
      },
      deliveryTime: {
        title: "Час доставки",
        days: {
          today: "Сьогодні",
          mon: "Пн",
          tue: "Вт",
          wed: "Ср",
          thu: "Чт",
          fri: "Пт",
          sat: "Сб",
          sun: "Нд",
        },
        fields: {
          date: "Дата",
          time: "Час",
        },
        fieldsErrors: {
          date: "Обов'язково виберіть дату",
          time: "Обов'язково виберіть час",
        },
      },
      paymentMethods: {
        title: "Тип оплати",
        cash: {
          label: "Готівка",
          checkbox: "Без решти",
          exchange: "Решта з ",
        },
        card: "Карткою онлайн",
      },
    },
  },
  menuScreen: {
    moreButton: "Подивитись ще..",
  },
  searchScreen: {
    searchPlaceholder: "Шукайте страву",
  },
  loginScreen: {
    signIn: "Увійти",
    emailFieldLabel: "Пошта",
    emailFieldPlaceholder: "Введіть Вашу пошту...",
    passwordFieldLabel: "Пароль",
    passwordFieldPlaceholder: "Введіть Ваш пароль...",
    tapToSignIn: "Увійти",
    registerLinkLabel: "Немає акаунту?",
    registerLink: "Зареєструватись",
  },
}

export default ua
export type Translations = typeof ua
