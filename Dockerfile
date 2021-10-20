FROM nginx:latest
COPY /dist/customer-list /usr/share/nginx/html
EXPOSE 80