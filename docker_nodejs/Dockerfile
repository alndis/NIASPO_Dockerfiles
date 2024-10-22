FROM node:16

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и index.js в рабочую директорию
COPY ./docker_nodejs/index.js .

# Устанавливаем зависимости (если есть package.json)
RUN npm install || true

# Открываем порт 3000
EXPOSE 3000

# Команда для запуска приложения
CMD ["node", "index.js"]
