FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:18-alpine
WORKDIR /app
COPY --from=build /node_modules ./node_modules
EXPOSE 8080
CMD ["npm", "start", "--no-update-notifier"]