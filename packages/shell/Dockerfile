FROM node:20-alpine AS builder
WORKDIR /app
RUN npm config set strict-ssl false
COPY packages/shell ./packages/shell
WORKDIR /app/packages/shell
RUN npm install
ARG VITE_OKTA_ISSUER
ARG VITE_OKTA_CLIENT_ID
ARG VITE_BFF_URL
ENV VITE_OKTA_ISSUER=$VITE_OKTA_ISSUER
ENV VITE_OKTA_CLIENT_ID=$VITE_OKTA_CLIENT_ID
ENV VITE_BFF_URL=$VITE_BFF_URL
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm config set strict-ssl false && npm install -g serve
COPY --from=builder /app/packages/shell/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]