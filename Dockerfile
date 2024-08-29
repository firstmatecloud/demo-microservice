# Stage 1: Build Stage
FROM node:19-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production Stage
FROM node:19-alpine

ENV PORT 8080

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/src/app

# Copy only the necessary artifacts from the build stage
COPY --from=builder /usr/src/app .

# Change ownership to the non-root user
RUN chown -R appuser:appgroup /usr/src/app

USER appuser

EXPOSE 8080
CMD ["npm", "start", "--no-update-notifier"]