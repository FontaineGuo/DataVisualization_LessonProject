import csv  

exportCountry = 'US'


import_country = dict()
for index in range(2000, 2018):
    print('now is processing ' + str(index) + ' data')
    input_file = csv.reader(open('./short/' + str(index) + '_CitesTradeData.csv' , 'r', encoding='utf-8'))
    input_data = next(input_file)
    ## count export
    for data in input_file:
        if exportCountry == str(data[5]):
            im = str(data[4])
            if im in import_country:
                import_country[im] =  import_country[im] + 1
            else:
                import_country.update({im:1})
index = 0      
for key, value in sorted(import_country.items(),key = lambda x:x[1],reverse = True):
    if index <= 19:
        print(str(key) + ' : ' + str(value) + '\n')
        index = index + 1