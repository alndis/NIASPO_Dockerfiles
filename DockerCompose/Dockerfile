#alndis
FROM node:14

WORKDIR /api

RUN apt-get update
# Устанавливаем зависимости


# Копируем остальные файлы в рабочую директорию
COPY ./api/package.json /api/package.json 
COPY ./api/server.js /api/server.js

RUN npm install

EXPOSE 3001 

CMD ["node", "/api/server.js"]
