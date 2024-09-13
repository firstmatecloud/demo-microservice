FROM node:14-alpine


WORKDIR /usr/src/app

RUN apk add --no-cache git
COPY . .

ENV PORT 8080
EXPOSE 8080
CMD ["npm", "start", "--no-update-notifier"]