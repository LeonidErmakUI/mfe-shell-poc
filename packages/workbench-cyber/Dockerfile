FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build --configuration production

FROM node:20-alpine
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/dist/workbench-cyber ./dist
EXPOSE 3002
CMD ["http-server", "dist", "-p", "3002", "--cors", "-c-1"]