# Stage 1: Build
FROM node:19-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application (if applicable)
# RUN npm run build

# Stage 2: Production
FROM node:19-alpine AS production

# Set working directory
WORKDIR /usr/src/app

# Copy only necessary files from build stage
COPY --from=build /usr/src/app .

# Add a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the application port
ENV PORT 8080
EXPOSE 8080

# Start the application
CMD ["npm", "start", "--no-update-notifier"]