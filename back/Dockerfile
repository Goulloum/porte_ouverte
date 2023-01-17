FROM php:8.0-apache

ENV COMPOSER_ALLOW_SUPERUSER=1
RUN apt-get update -qq && \
    apt-get install -qy \
    git \
    gnupg \
    unzip \
    zip && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*RUN composer --version
RUN docker-php-ext-install mysqli
COPY composer.json /var/www/html/
RUN composer install

COPY . /var/www/html/
WORKDIR /var/www/html/
RUN chmod 777 -R .


EXPOSE 80
# WORKDIR /app/

# RUN npm install && npm install -g ts-node

# COPY . /app/

# EXPOSE 8080


# CMD ["ts-node", "src/server.ts"]
