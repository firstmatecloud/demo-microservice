FROM node:19-alpine

WORKDIR /usr/src/app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

RUN apk add --no-cache git
COPY . .
CMD ["npm", "start", "--no-update-notifier"]