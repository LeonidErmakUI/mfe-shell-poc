FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json ./
COPY packages/workbench-shared ./packages/workbench-shared
COPY packages/workbench-marine ./packages/workbench-marine

WORKDIR /app/packages/workbench-shared
RUN npm install

WORKDIR /app/packages/workbench-marine
RUN npm install
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/packages/workbench-marine/dist ./dist

EXPOSE 3001
CMD ["http-server", "dist", "-p", "3001", "--cors", "-c-1"]