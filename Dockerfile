# Stage 1: Build Stage
FROM node:14-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Stage 2: Runtime Stage
FROM node:14-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy built application from build stage
COPY --from=build /usr/src/app .

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch to non-root user
USER appuser

# Set environment variables
ENV PORT 8080

# Expose the port
EXPOSE 8080

# Command to run the application
CMD ["npm", "start", "--no-update-notifier"]