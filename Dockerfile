# Multi-stage build to reduce image size and improve build efficiency
FROM node:14-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Second stage
FROM node:14-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy files from build stage
COPY --from=build /usr/src/app .

# Add non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Set environment variable
ENV PORT 8080

# Expose port
EXPOSE 8080

# Command to run the application
CMD ["npm", "start", "--no-update-notifier"]