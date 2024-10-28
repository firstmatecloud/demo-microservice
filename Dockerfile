# Build Stage
FROM node:14-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Runtime Stage
FROM node:14-alpine

WORKDIR /usr/src/app

# Copy built files from the build stage
COPY --from=build /usr/src/app ./

# Set environment variables
ENV PORT 8080

# Expose the application port
EXPOSE 8080

# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Command to start the application
CMD ["npm", "start", "--no-update-notifier"]
