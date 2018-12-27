import json
from collections import OrderedDict
import os
from app.dataprocess import getdbdata
current_path = os.path.dirname(__file__)


def edit_import_country_list_json():
    finalDict = OrderedDict()
    for year in range(2017, 2018):
        print('processing ' + str(year))
        path = current_path + '\\DataSrc\\jsonPreData\\Importer\\import_country_'+str(year)+'.json'
        json_data = open(path).read()
        data = json.loads(json_data)
        single_year_data_list = []
        for index in range(1,21):
            # print(index)
            tempDict = OrderedDict()
            dict = data[str(index)]
            print('processing ' + dict['name'])
            tempDict['name'] = dict['name']
            tempDict['num'] = dict['num']




            mainCountryInfo = getdbdata.get_country_data(dict['name'])
            tempDict['coord'] = [mainCountryInfo[3], mainCountryInfo[4]]
            tempDict['nameCN'] = mainCountryInfo[1]

            export_list = []
            for country in dict['import_src']:
                # print(country)
                info = getdbdata.get_country_data(country)

                countryDict = OrderedDict()
                # print('processing ' + info[2])
                countryDict['name'] = info[1]
                countryDict['coord'] = [info[3], info[4]]
                export_list.append(countryDict)
            tempDict['import_src_info'] = export_list


            purpose_list = []
            for p in dict['Purpose']:
                if p[0] == None:
                    purpose_list.append(['未知', p[1]])
                    continue
                pur = getdbdata.get_purpose_info(p[0])
                if pur == '':
                    purpose_list.append(['未知', p[1]])
                else:
                    purpose_list.append([pur, p[1]])
            tempDict['purpose_info'] = purpose_list

            trade_dict = getdbdata.get_import_list_by_listing_by_country(dict['name'], str(year))
            tempDict['I'] = trade_dict['I']
            tempDict['II'] = trade_dict['II']
            tempDict['III'] = trade_dict['III']

            single_year_data_list.append(tempDict)
        j = json.dumps(single_year_data_list)

        with open(path, 'w') as f:
          f.write(j)

def edit_export_country_list_json():
    finalDict = OrderedDict()
    for year in range(2000, 2018):
        print('processing ' + str(year))
        path = current_path + '\\DataSrc\\jsonPreData\\Exporter\\export_country_'+str(year)+'.json'
        json_data = open(path).read()
        data = json.loads(json_data)
        single_year_data_list = []
        for index in range(1,21):
            # print(index)
            tempDict = OrderedDict()
            dict = data[str(index)]
            print('processing ' + dict['name'])
            tempDict['name'] = dict['name']
            tempDict['num'] = dict['num']


            mainCountryInfo = getdbdata.get_country_data(dict['name'])
            tempDict['coord'] = [mainCountryInfo[3], mainCountryInfo[4]]
            tempDict['nameCN'] = mainCountryInfo[1]

            export_list = []
            for country in dict['export_tgt']:
                # print(country)
                info = getdbdata.get_country_data(country)

                countryDict = OrderedDict()
                # print('processing ' + info[2])
                countryDict['name'] = info[1]
                countryDict['coord'] = [info[3], info[4]]
                export_list.append(countryDict)

            tempDict['export_tgt_info'] = export_list

            purpose_list = []
            for p in dict['Purpose']:
                if p[0] == None:
                    purpose_list.append(['未知', p[1]])
                    continue
                pur = getdbdata.get_purpose_info(p[0])
                if pur == '':
                    purpose_list.append(['未知', p[1]])
                else:
                    purpose_list.append([pur, p[1]])
            tempDict['purpose_info'] = purpose_list

            trade_dict = getdbdata.get_import_list_by_listing_by_country(dict['name'], str(year))
            tempDict['I'] = trade_dict['I']
            tempDict['II'] = trade_dict['II']
            tempDict['III'] = trade_dict['III']

            single_year_data_list.append(tempDict)
        j = json.dumps(single_year_data_list)
        with open(path, 'w') as f:
            f.write(j)

def create_global_trade_data_json():
    path = current_path + '\\DataSrc\\jsonPreData\\Global\\global_trade_data.json'
    finalDict =[]
    json_data = open(path).read()
    data = json.loads(json_data)
    for year in range(2000, 2018):
        temp_yearDict = OrderedDict()
        dict = data[str(year)]
        temp_yearDict['year'] = str(year)
        tradedict = getdbdata.get_global_list_by_listing(str(year))
        temp_yearDict['I'] = tradedict['I']
        temp_yearDict['II'] = tradedict['II']
        temp_yearDict['III'] = tradedict['III']


        purpose_list = []
        for p in dict['purpose']:
            if p[0] == None:
                purpose_list.append(['未知', p[1]])
                continue
            pur = getdbdata.get_purpose_info(p[0])
            if pur == '':
                purpose_list.append(['未知', p[1]])
            else:
                purpose_list.append([pur, p[1]])
        temp_yearDict['purpose_info'] = purpose_list
        finalDict.append(temp_yearDict)
    j = json.dumps(finalDict)

    with open(path, 'w') as f:
         f.write(j)


edit_import_country_list_json()
edit_export_country_list_json()
create_global_trade_data_json()