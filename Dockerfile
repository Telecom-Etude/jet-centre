FROM node:19

WORKDIR /app

COPY package.json ./

RUN npm install @next/swc-linux-x64-gnu

RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
