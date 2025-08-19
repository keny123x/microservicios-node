FROM node:22
WORKDIR /app
COPY . .
EXPOSE 3002
CMD ["node", "productos.js"]