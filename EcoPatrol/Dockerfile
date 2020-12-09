FROM python:3.8.1-alpine
ENV PYTHONUNBUFFERED=1
ARG APP_DIR=/api_locator
WORKDIR "$APP_DIR"

# Обновляем пакетный менеджер

# Ставим зависимости GDAL, PROJ
RUN apk add --update --no-cache gdal binutils; \
    ln -s /usr/lib/libgdal.so.26 /usr/lib/libgdal.so; \
    ln -s /usr/lib/libgeos_c.so.1 /usr/lib/libgeos_c.so;

RUN apk add jpeg-dev zlib-dev libjpeg



RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev


COPY requirements.txt $APP_DIR/
RUN pip install -r requirements.txt
COPY . $APP_DIR/
