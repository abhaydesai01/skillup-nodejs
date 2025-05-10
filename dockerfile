FROM node:latest
WORKDIR /akshay
COPY index.js /akshay
CMD ["node", "index.js"]
EXPOSE 9595