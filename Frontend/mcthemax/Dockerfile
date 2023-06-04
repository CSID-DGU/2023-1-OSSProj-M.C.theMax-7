FROM node:16-alpine as builder 

WORKDIR .

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# EXPOSE 3000

# CMD "npm" "run" "start"

FROM nginx:1.19-alpine

COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]