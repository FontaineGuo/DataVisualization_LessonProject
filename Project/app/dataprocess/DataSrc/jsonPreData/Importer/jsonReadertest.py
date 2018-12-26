import json
import os

current_path = os.path.dirname(__file__)

json_data = open(current_path + '\\import_country_2000.json').read()
data = json.loads(json_data)

us_data = data['1']
print(us_data['name'])
print(us_data['import_src'])
print(us_data['N'])