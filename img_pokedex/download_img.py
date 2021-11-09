import requests

for num in range(1, 899):
    response = requests.get(f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{num}.png")
    file = open(f"{num}.png", "wb")
    file.write(response.content)
    file.close()