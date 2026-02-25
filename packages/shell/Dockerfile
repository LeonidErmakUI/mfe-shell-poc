FROM node:20-alpine AS builder
WORKDIR /app
COPY packages/shell ./packages/shell
WORKDIR /app/packages/shell
RUN npm install
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/packages/shell/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]