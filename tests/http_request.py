import requests

url = "https://en.wikipedia.org/wiki/Cat"  # Replace with the desired URL

response = requests.get(url)
output = open("output.html", "w", encoding="utf-8")
output.write(response.text)

print(response.text)

# if response.status_code == 200:
#     # Request was successful
#     data = response.json()  # Convert the response to JSON
#     # Process the data as needed
# else:
#     # Request failed
#     print("Request failed with status code:", response.status_code)
