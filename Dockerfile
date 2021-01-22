FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
ENV REACT_APP_API_BASE_URL=http://localhost:3002

CMD ["npm", "start"]