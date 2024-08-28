FROM node:20-alpine
ENV PORT 8080

WORKDIR /usr/src/app

RUN apk add --no-cache git
COPY . .


EXPOSE 8080
CMD ["npm", "start"]