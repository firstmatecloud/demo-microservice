# Stage 1: Build Stage
FROM node:20-alpine AS build
WORKDIR /usr/src/app
RUN apk add --no-cache git
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production Stage
FROM node:20-alpine
ENV PORT 8080
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .

# Create a user for improved security
RUN addgroup -S usergroup \
    && adduser -S -D -h /usr/src/app appuser usergroup \
    && chown -R appuser:usergroup /usr/src/app
USER appuser

EXPOSE 8080
CMD ["npm", "start", "--no-update-notifier"]