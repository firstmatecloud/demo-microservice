FROM node:14-alpine AS build

WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY package*.json ./
RUN npm install

COPY . .

FROM node:14-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

ENV PORT 8080
EXPOSE 8080

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["npm", "start", "--no-update-notifier"]