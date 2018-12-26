import csv

name = "Python reticulatus"

csv_file= csv.reader(open('cites_listings_short.csv', 'r', encoding='utf-8'))
input_data = next(csv_file)

for data in csv_file:
    if name == str(data[8]):
        print('App: ' + str(data[9]) + '  ' + 
                'Class: ' + str(data[3]))
   
