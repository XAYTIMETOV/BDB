import requests

endpoint = 'http://localhost:8000/ru/api'

get_response = requests.get(endpoint)
print(get_response.json())
