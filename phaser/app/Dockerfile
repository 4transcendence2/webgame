FROM debian:stable

WORKDIR /home
RUN apt-get update \
	&& apt-get install -y curl git vim\
  && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs \
	&& apt-get clean -y \
	&& apt-get autoremove -y
ENV LC_ALL=C.UTF-8
WORKDIR /home
# COPY ./package*.json	/home
# RUN npm i
EXPOSE 5500
CMD tail -f /dev/null
