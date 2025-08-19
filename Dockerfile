FROM node:22
WORKDIR /app
COPY . .
<<<<<<< HEAD
EXPOSE 3002
CMD ["node", "productos.js"]
=======
EXPOSE 3001
CMD ["node", "usuarios.js"]
>>>>>>> 5897ef5de76d0fd7bc264e436359bf7870aab882
