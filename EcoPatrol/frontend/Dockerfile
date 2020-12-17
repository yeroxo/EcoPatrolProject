FROM node

WORKDIR /api_locator/frontend
COPY package.json /api_locator/frontend

RUN npm install --legacy-peer-deps

EXPOSE 3000
CMD ["npm", "start"]