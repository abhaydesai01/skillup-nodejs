FROM node:latest
WORKDIR /Skillup-nodejs project
COPY index.js /Skillup-nodejs project
CMD ["node", "index.js"]
EXPOSE 9595
