cd api
gunicorn -w 4 "app:app"
