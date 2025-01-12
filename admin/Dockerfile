# Use an official Node.js runtime as a base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the admin panel runs on
EXPOSE 3001

# Start the admin panel React development server
CMD ["npm", "run", "dev"]