# Используем базовый образ, поддерживающий Docker (например, docker:latest)
FROM docker:latest

# Копируем docker-compose.yml в контейнер
COPY . .

# Запускаем docker-compose
CMD ["sh", "-c", "docker-compose up"]
