FROM node:alpine as frontend
WORKDIR /app/frontend
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build
CMD ["npm", "start"]
