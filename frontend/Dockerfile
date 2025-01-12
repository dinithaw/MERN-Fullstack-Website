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

# Expose the port the frontend runs on
EXPOSE 3000

# Start the React development server
CMD ["npm", "run", "dev"]