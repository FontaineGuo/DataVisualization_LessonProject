import csv

csv_file= csv.reader(open('2010-2011.csv', 'r', encoding='utf-8'))
for game in csv_file:
    print(game)