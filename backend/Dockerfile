# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies and nodemon globally
RUN npm install && npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 4000

# Start the backend server
CMD ["npm", "run", "server"]