import csv

csv_file= csv.reader(open('cites_listings.csv', 'r', encoding='utf-8'))

with open('cites_listings_short.csv', 'w' , encoding='utf-8', newline='') as csvfile:
    writer = csv.writer(csvfile,dialect='excel')
    for index, data in enumerate(csv_file):
        # print(data[0])
        # print(data[1])
        # print(data[2])
        # print(data[3])
        # print(data[4])
        # print(data[5])
        # print(data[6])
        # print(data[7])
        # print(data[9])
        # print(data[12])
        # print(data[17])
        # print(data[18])
        # print(data[19])
        # print(data[20])
        # print(data[24])
        writer.writerow([data[0], data[1],data[2], data[3],data[4],data[5],data[6],
                        data[7], data[9], data[12], data[17], data[18], data[19], data[20],
                        data[24]])





# read specific column
# column = [row[2] for row in reader]