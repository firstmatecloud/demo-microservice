# Build Stage
FROM node:14-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

# Production Stage
FROM node:14-alpine

WORKDIR /usr/src/app
COPY --from=build /usr/src/app ./

# Set environment variable and expose port
ENV PORT 8080
EXPOSE 8080

# Add non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Start the application
CMD ["npm", "start", "--no-update-notifier"]
