import csv  

importCountry = 'US'


export_country = dict()
for index in range(2000, 2018):
    print('now is processing ' + str(index) + ' data')
    input_file = csv.reader(open('./short/' + str(index) + '_CitesTradeData.csv' , 'r', encoding='utf-8'))
    input_data = next(input_file)
    ## count export
    for data in input_file:
        if importCountry == str(data[4]):
            ex = str(data[5])
            if ex in export_country:
                export_country[ex] =  export_country[ex] + 1
            else:
                export_country.update({ex:1})
index = 0      
for key, value in sorted(export_country.items(),key = lambda x:x[1],reverse = True):
    if index <= 19:
        print(str(key) + ' : ' + str(value) + '\n')
        index = index + 1