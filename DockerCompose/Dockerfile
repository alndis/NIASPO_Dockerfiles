#alndis
FROM node:14

WORKDIR /api

RUN apt-get update
# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы в рабочую директорию
COPY ./api/package.json /api
COPY ./api/server.js /api

EXPOSE 3001 

CMD ["node", "server.js"]
