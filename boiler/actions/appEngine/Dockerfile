FROM node:12.13.1-alpine3.10

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci --production
RUN apk add --no-cache tini

ENTRYPOINT ["/sbin/tini", "--"]

COPY . .
CMD ["node", "dist/server.js"]
