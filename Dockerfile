# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install
