FROM node:20-alpine
WORKDIR /app
RUN npm config set strict-ssl false
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "index.js"]