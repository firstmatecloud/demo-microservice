# Stage 1: Build Stage
FROM node:14-alpine AS build

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Stage 2: Final Stage
FROM node:14-alpine

WORKDIR /usr/src/app

# Copy built files from the build stage
COPY --from=build /usr/src/app .

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch to the non-root user
USER appuser

ENV PORT 8080
EXPOSE 8080

CMD ["npm", "start", "--no-update-notifier"]