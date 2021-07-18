FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

COPY ./api .
COPY ./.env .

CMD [ "python", "./api.py" ]
