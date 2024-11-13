FROM node:19-alpine
ENV PORT 8080

WORKDIR /usr/src/app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

RUN apk add --no-cache git
COPY . .
EXPOSE 8080
CMD ["npm", "start", "--no-update-notifier"]