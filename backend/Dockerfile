# Use official Node.js image (Alpine for a smaller size)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm ci

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 8000

# Start the backend application
CMD ["npm", "start"]