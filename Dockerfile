# Use an official Node runtime as a parent image
FROM node:15.0.0-alpine3.12

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./
<<<<<<< HEAD

# Install dependencies
# Note: Using npm ci instead of npm install to ensure that package-lock.json is used
RUN npm ci --only=production

# Copy the rest of your app's source code
=======
RUN npm install --force
>>>>>>> 09d4e2838df85d27da15af9e9dcb09527b8fa00e
COPY . .

# Build the React app
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Command to serve the app on container startup
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port the app runs on
EXPOSE 3000