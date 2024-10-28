# FROM node:22
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "start"]

# stage 1 - react app
FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Збілдити проєкт in folder builder
RUN npm run build

# Stage 2 Working image - for run in container
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
# Відкрити порт
EXPOSE 80
# Запустіть програму
CMD ["nginx", "-g", "daemon off"]