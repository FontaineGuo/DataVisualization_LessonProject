import csv




for index in range(2000, 2018):
   print(index)
   input_file = csv.reader(open('./long/' + str(index) + '_CitesTradeData.csv' , 'r', encoding='utf-8'))
   
   with open('./short/' + str(index) + '_CitesTradeData.csv' , 'w' , encoding='utf-8', newline='') as csvfile:
        writer = csv.writer(csvfile,dialect='excel')
        for _index, data in enumerate(input_file):
            # if index == 2014:
                #print(_index)
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
            writer.writerow([data[0], data[1],data[2], data[3],data[7],data[8],data[11],
                            data[12], data[14], data[15]])









# read specific column
# column = [row[2] for row in reader]