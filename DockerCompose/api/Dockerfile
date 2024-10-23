#alndis
FROM node:14

WORKDIR /usr/src/app
COPY ./server.js /usr/src/app/server.js

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы в рабочую директорию
COPY . .

EXPOSE 3001 

CMD ["node", "server.js"]
