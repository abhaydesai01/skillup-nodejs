FROM node:latest
WORKDIR /app
COPY index.js .
RUN npm install express mysql body-parser
EXPOSE 9595
CMD ["node", "index.js"]