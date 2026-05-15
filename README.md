# 🛒 Electronics Shop — Интернет-магазин на React

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245)](https://reactrouter.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-222222)](https://alexandra-vikhareva.github.io/electronicStore/)

**[Посмотреть демо](https://alexandra-vikhareva.github.io/electronicShop/)** | **[Задание (The Odin Project)](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart)**

## 📖 О проекте

Полноценное одностраничное приложение (SPA) интернет-магазина электроники. Проект создан в рамках обучения и демонстрирует навыки работы с современным React, маршрутизацией, глобальным состоянием, интеграцией с API и адаптивной вёрсткой.

**Ключевая функциональность:**
- 🏠 Домашняя страница с информацией о магазине.
- 🛍️ Страница каталога с карточками товаров, загружаемыми из внешнего API.
- 📦 Корзина с добавлением, удалением, изменением количества и автоматическим подсчётом итогов.
- 💾 Сохранение состояния корзины в `sessionStorage` (данные не теряются при перезагрузке страницы).
- 📱 Адаптивный дизайн (десктоп → мобильные устройства).

## 🛠️ Стек технологий

| Категория            | Технологии                                                                 |
|----------------------|----------------------------------------------------------------------------|
| **Фронтенд**         | React 19, React Router v6, Vite, JavaScript (ES6+)                         |
| **Стилизация**       | CSS Modules (scoped styles), адаптивная вёрстка (Flexbox, Grid)             |
| **Управление состоянием** | Context API + кастомные хуки (useCart, useFetchProducts)                 |
| **Работа с API**     | Fetch API (FakeStoreAPI)                                                   |
| **Хранение данных**  | sessionStorage (сохранение корзины)                                        |
| **Деплой**           | GitHub Pages + пакет gh-pages                                              |
| **Контроль версий**  | Git, GitHub (feature-ветки, pull requests)                                 |

## ⚙️ Установка и запуск

1. **Клонировать репозиторий:**
   ```bash
   git clone https://github.com/Alexandra-Vikhareva/electronicStore.git
   cd electronicStore
   ```

2. **Установить зависимости:**
   ```bash
   npm install
   ```

3. **Запустить в режиме разработки:**
   ```bash
   npm run dev
   ```
   Приложение будет доступно по адресу `http://localhost:5173`.

4. **Собрать для продакшена:**
   ```bash
   npm run build
   ```

5. **Деплой на GitHub Pages (при наличии прав на запись в репозиторий):**
   ```bash
   npm run deploy
   ```

## 🧩 Структура проекта (основные модули)

```
src/
├── components/
│   ├── CartItem/         # Элемент корзины (картинка, название, цена, кнопки +/-)
│   ├── Navbar/           # Навигационная панель, отображает количество товаров
│   ├── ProductCard/      # Карточка товара (интегрирует QuantitySelector)
│   └── QuantitySelector/ # Переиспользуемый компонент выбора количества
├── context/
│   └── CartContext.jsx   # Глобальное состояние корзины (Context API)
├── hooks/
│   ├── useCart.js        # Кастомный хук для доступа к контексту
│   └── useFetchProducts.js # Загрузка товаров из API
├── pages/
│   ├── Cart/             # Страница корзины (список товаров + итоги)
│   ├── Home/             # Домашняя страница
│   ├── Shop/             # Страница каталога
│   └── ErrorPage/        # Страница 404
├── services/
│   └── api.js            # Функции для запросов к FakeStoreAPI
├── utils/
│   └── storage.js        # Работа с sessionStorage (опционально)
└── App.jsx               # Корневой компонент, роутер, провайдер контекста
```

## 🚀 Особенности реализации, которые стоит отметить

- **Чистая архитектура**: разделение на компоненты, хуки, контекст и сервисы — код легко масштабировать.
- **Кастомный хук `useFetchProducts`**: инкапсулирует логику загрузки данных, состояния загрузки и ошибок.
- **QuantitySelector без useEffect**: управление количеством реализовано через события `onChange`.
- **Синхронизация количества в карточке и корзине**: количество товара в `ProductCard` подтягивается из глобального состояния и обновляется при изменениях из любой точки приложения.
- **Персистентность корзины**: данные сохраняются в `sessionStorage`, поэтому корзина не исчезает после обновления страницы.
- **Адаптивная вёрстка**: на мобильных устройствах блок с итогами в корзине опускается под список товаров.

## 🔗 Ссылки

- [Демо на GitHub Pages](https://alexandra-vikhareva.github.io/electronicShop/)
- [Репозиторий](https://github.com/Alexandra-Vikhareva/electronicShop)
- [Исходное задание (The Odin Project)](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart)

## 📬 Контакты

Автор: **Александра Вихарева**  
Email: [vihsacha@yandex.ru]  
Telegram: [@Utya_V_Kayute](@Utya_V_Kayute)  
GitHub: [Alexandra-Vikhareva](https://github.com/Alexandra-Vikhareva)

---

_Этот проект создан в учебных целях. Все товары и изображения являются вымышленными или взяты из тестового API._