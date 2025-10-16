# horse-club
Конный-клуб-рыба

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
