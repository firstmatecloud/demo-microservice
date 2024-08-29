# Stage 1: Build Stage
FROM node:19-alpine AS build

WORKDIR /usr/src/app

RUN apk add --no-cache git
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Stage 2: Production Stage
FROM node:19-alpine AS production

ENV PORT 8080

WORKDIR /usr/src/app
COPY --from=build /usr/src/app .

# Create a non-root user and use it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8080
CMD ["npm", "start", "--no-update-notifier"]