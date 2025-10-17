# horse-club
Конный-клуб-рыба

Важный момент. Когда скачаете файл с проектом, вы не сможете сразу его запустить командой npm run build. ДЛЯ НАЧАЛА ВАМ НАДО УСТАНОВИТЬ ЗАВИСИМОСТИ В ПАПКУ /client и в папку /server. чтобы установить зависимости надо ввести команду npm run install, в ОБЕ ПАПКИ	. После установки появится папка node_modules. Ее трогать не нужно. 

После того как вы будете загружать к себе на гитхаб готовый проект, перед загрузкой в репозиторий, node_modules нужно будет удалить из 2 папок т.к они не дадут вам загрузить основной проект. Удаление не страшно т.к node modules должны устанавливаться каждый раз как кто то захочет запустить ваш проект. Я не смогу отвечать на сообщенияв в тг поэтому этот readme единственное что у вас есть. Если у вас возникнут сложности... 
они у вас не возникнут потому что какого фига я тут все писал вам

---
# ПРОЧИТАТЬ!
## 📂 Структура проекта (простыми словами)

```
horse-club/
│
├── client/                 # Фронтенд — то, что видит пользователь
│   ├── public/             # Картинки, иконки, статические файлы
│   ├── src/                # Весь код React
│   │   ├── components/     # Детали интерфейса (кнопки, карточки, формы и т.п.)
│   │   ├── pages/          # Целые страницы (Главная, Лошади, Наездники, Бронирование)
│   │   ├── App.jsx         # Главный компонент приложения
│   │   ├── main.jsx        # Запуск React-приложения
│   │   └── styles/         # Стили (CSS или Tailwind)
│   └── package.json        # Список библиотек, нужных фронтенду
│
├── server/                 # Бэкенд — логика и база данных
│   ├── models/             # "Схемы" для базы данных (лошади, наездники, бронирования)
│   ├── routes/             # Пути API (например /api/horses, /api/riders)
│   ├── controllers/        # Код, который выполняется при запросах (добавить лошадь, получить список)
│   ├── index.js            # Главный файл, который запускает сервер
│   ├── package.json        # Список библиотек, нужных серверу
│   └── .env.example        # Настройки (порт, адрес базы) — надо скопировать в .env
│
└── README.md               # Документация, как запускать проект
```

---

⚡ В двух словах:

* **client/** → это "картинка" (то, что видит человек в браузере).
* **server/** → это "мозги" (отвечает за данные, запросы и работу с базой).
* **models/** → описывают данные.
* **routes/** → список адресов API.
* **controllers/** → что именно делать, когда на эти адреса приходят запросы.

---
# ЕСЛИ ЗАХОТИТЕ ПОДКЛЮЧИТЬ К БАЗЕ MONGO DB 
---
### 1️⃣ Установить MongoDB

**Локально:**

* Windows: [MongoDB Community Server](https://www.mongodb.com/try/download/community) → установить.
* macOS (через Homebrew):

```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
```

* Linux (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install -y mongodb
sudo systemctl start mongodb
```

**Проверка, что MongoDB работает:**

```bash
mongosh
```

Если зашли в Mongo Shell — MongoDB работает.

---

### 2️⃣ Создать базу данных

В твоем проекте в `server/.env.example` указано:

```
MONGO_URI=mongodb://localhost:27017/horse_club
```

Это значит:

* `localhost` → база данных у тебя на компьютере
* `27017` → стандартный порт MongoDB
* `horse_club` → название базы данных (будет создана автоматически при первом подключении)

Можно использовать MongoDB Atlas (облако):

1. Зарегистрироваться на [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Создать Cluster → Database → User
3. Скопировать **Connection String**, например:

```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/horse_club?retryWrites=true&w=majority
```

4. Подставить вместо `MONGO_URI` в `.env`:

```
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/horse_club?retryWrites=true&w=majority
```

---

### 3️⃣ Настроить `.env`

Перейди в папку `server/`:

```bash
cd server
cp .env.example .env
```

Открой `.env` и проверь:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/horse_club
```

* Если используешь Atlas — вставь свой `MONGO_URI`
* Если локально — оставь как есть

---

### 4️⃣ Установить зависимости и запустить сервер

```bash
npm install
npm run dev
```

Если всё настроено правильно, в консоли будет сообщение:

```
Mongo connected
Server running on 5000
```

---

### 5️⃣ Проверка подключения

Открой браузер и перейди:

```
http://localhost:5000/api/horses
```

* Если база пустая → вернётся `[]`
* Можно добавлять лошадей через фронтенд или Postman

---

### 6️⃣ (Опционально) Проверить в MongoDB

Открой Mongo Shell:

```bash
mongosh
use horse_club
db.horses.find()
```

* `horses` → коллекция лошадей
* `riders` → коллекция наездников
* `bookings` → коллекция бронирований

---

💡 **Примечание для новичков**

* База данных создаётся автоматически, когда ты впервые добавляешь данные через сервер
* Не нужно вручную создавать таблицы/коллекции

---

---

# 🐎 Horse Club РЫБА

Полный стек-проект для управления конным клубом:

* **Frontend**: React + Vite
* **Backend**: Node.js + Express
* **Database**: MongoDB

---

## 📦 Установка и запуск

### 1. Клонировать или распаковать проект

```bash
unzip horse-club.zip
cd horse-club
```

---

### 2. Настройка бэкенда

Перейти в папку **server**:

```bash
cd server
```

Скопировать файл окружения:

```bash
cp .env.example .env
```

В `.env` можно задать свои параметры:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/horse_club
```

Установить зависимости:

```bash
npm install
```

Запустить сервер:

```bash
npm run dev   # запуск с hot reload (nodemon)
# или
npm start     # обычный запуск
```

Бэкенд будет доступен по адресу:
👉 [http://localhost:5000](http://localhost:5000)

---

### 3. Настройка фронтенда

В новом терминале перейти в папку **client**:

```bash
cd ../client
npm install
npm run dev
```

Фронтенд доступен по адресу:
👉 [http://localhost:5173](http://localhost:5173)

---

### 4. API Endpoints

* `GET /api/horses` — список лошадей
* `POST /api/horses` — добавить лошадь
* `GET /api/riders` — список наездников
* `POST /api/bookings` — запись на занятие

---

## 🛠 Требования

* Node.js >= 18
* MongoDB >= 6.0
* npm или yarn

---
