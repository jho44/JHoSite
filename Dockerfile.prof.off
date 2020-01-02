FROM jho44/node-vim-nginx
# Remove the default nginx index.html
RUN rm -rf /var/www/
# Copy the contents of the dist directory over to the nginx web root
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
# Start server
CMD ["nginx", "-g", "daemon off;"]