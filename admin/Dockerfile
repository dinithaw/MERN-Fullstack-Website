# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies and vite globally
RUN npm install && npm install -g vite

# Copy the rest of the application code
COPY . .

# Expose the admin panel port
EXPOSE 5174

# Start the admin panel React development server
CMD ["npm", "run", "dev"]