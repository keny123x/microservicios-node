FROM node:22
WORKDIR /app
COPY . .
EXPOSE 3001
CMD ["node", "usuarios.js"]