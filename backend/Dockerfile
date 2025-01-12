FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies and nodemon globally
RUN npm ci --legacy-peer-deps && npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Copy .env file
COPY .env .env

# Expose the port
EXPOSE 4000

# Start the server
CMD ["nodemon", "server.js"]