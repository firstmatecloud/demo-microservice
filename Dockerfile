FROM node:20-alpine
ENV PORT 8080

WORKDIR /usr/src/app


RUN apk add --no-cache git
RUN apt-get update
COPY . .


# Create a user for improved security
RUN addgroup -S usergroup
RUN adduser -S -D -h /usr/app/src appuser usergroup
RUN chown -R appuser:usergroup /usr/app
USER appuser

EXPOSE 8080
CMD ["npm", "start", "--no-update-notifier"]