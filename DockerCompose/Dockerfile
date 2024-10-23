# Используем базовый образ, поддерживающий Docker (например, docker:latest)
FROM docker:latest

# Устанавливаем docker-compose
RUN apk add --no-cache py3-pip && \
    pip install docker-compose

# Копируем docker-compose.yml в контейнер
COPY . .

# Указываем рабочую директорию
WORKDIR /app

# Запускаем docker-compose
CMD ["docker-compose", "up"]
