import csv  

Country = 'CN'


taxon = dict()
for index in range(2000, 2018):
    print('now is processing ' + str(index) + ' data')
    input_file = csv.reader(open('./short/' + str(index) + '_CitesTradeData.csv' , 'r', encoding='utf-8'))
    input_data = next(input_file)
    ## count export
    for data in input_file:
        if Country == data[4]:
            t = str(data[2])
            if t in taxon:
                taxon[t] =  taxon[t] + 1
            else:
                taxon.update({t:1})
index = 0      
for key, value in sorted(taxon.items(),key = lambda x:x[1],reverse = True):
    if index <= 19:
        print(str(key) + ' : ' + str(value) + '\n')
        index = index + 1