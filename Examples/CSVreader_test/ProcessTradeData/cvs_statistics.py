import csv


export_country = dict()
import_country = dict()
for index in range(2000, 2018):
    print('now is processing ' + str(index) + ' data')
    input_file = csv.reader(open('./short/' + str(index) + '_CitesTradeData.csv' , 'r', encoding='utf-8'))
    input_data = next(input_file)
    ## count export
    for data in input_file:
        ex = str(data[5])
        im = str(data[4])
        if ex in export_country:
            export_country[ex] =  export_country[ex] + 1
        else:
            export_country.update({ex:1})
        
        if im in import_country:
            import_country[im] =  import_country[im] + 1
        else:
            import_country.update({im:1})





# sum = 0
# for key in export_country.keys():
#     print(key + ' : ' + str(export_country[key]))
#     sum = sum + export_country[key]
# print("export zong liang : " + str(sum))


# sum = 0
# for key in import_country.keys():
#     print(key + ' : ' + str(import_country[key]))
#     sum = sum + import_country[key]
# print("export zong liang : " + str(sum))

with open('./import_country_list.txt' , 'w' , encoding='utf-8', newline='') as resfile:
    index = 0
    for key, value in sorted(import_country.items(),key = lambda x:x[1],reverse = True):
        if index <= 19:
            resfile.write(str(key) + ' : ' + str(value) + ' \r\n')
            index = index + 1

with open('./export_country_list.txt' , 'w' , encoding='utf-8', newline='') as resfile:
    index = 0
    for key, value in sorted(export_country.items(),key = lambda x:x[1],reverse = True):
        if index <= 19:
            resfile.writelines(str(key) + ' : ' + str(value) + ' \r\n')
            index = index + 1