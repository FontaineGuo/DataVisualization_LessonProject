import json
from collections import OrderedDict
import os
from app.dataprocess import getdbdata
current_path = os.path.dirname(__file__)




def create_folder():
    for year in range(2000,2018):
        path = current_path + '\\DataSrc\\jsonPreData\\Importer\\'+str(year)
        if not os.path.exists(path):
            os.mkdir(path)

    for year in range(2000,2018):
        path = current_path + '\\DataSrc\\jsonPreData\\Exporter\\'+str(year)
        if not os.path.exists(path):
            os.mkdir(path)

def create_import_country_list_json():
    for year in range(2000, 2018):
        print('processing ' + str(year))
        path = current_path + '\\DataSrc\\jsonPreData\\Importer\\import_country_'+str(year)+'.json'
        temp_yearDict = OrderedDict()
        country_list = getdbdata.get_import_country_rank_by_year(str(year))
        index = 1
        for country in country_list:
            single_country_dict = OrderedDict()
            print('processing ' + country[0])
            single_country_dict['name'] = country[0]
            single_country_dict['num'] = int(country[1])
            import_src_country_list = getdbdata.get_import_src_country_list(country[0], str(year))
            src_country_list = []
            for src_country in import_src_country_list:
                src_country_list.append(src_country[0])
            single_country_dict['import_src'] = src_country_list
            list_dict = getdbdata.get_import_list_by_listing_by_country(country[0], str(year))
            single_country_dict['I'] = list_dict['I']
            single_country_dict['II'] = list_dict['II']
            single_country_dict['III'] = list_dict['III']
            single_country_dict['N'] = list_dict['N']
            temp_yearDict[str(index)] = single_country_dict
            index = index+1
        j = json.dumps(temp_yearDict)
        with open(path, 'w') as f:
            f.write(j)


def create_export_country_list_json():
    for year in range(2000, 2018):
        print('processing ' + str(year))
        path = current_path + '\\DataSrc\\jsonPreData\\Exporter\\export_country_'+str(year)+'.json'
        temp_yearDict = OrderedDict()
        country_list = getdbdata.get_export_country_rank_by_year(str(year))
        index = 1
        for country in country_list:
            single_country_dict = OrderedDict()
            print('processing ' + country[0])
            single_country_dict['name'] = country[0]
            single_country_dict['num'] = int(country[1])
            import_src_country_list = getdbdata.get_exporter_tgt_country_list(country[0], str(year))
            tgt_country_list = []
            for src_country in import_src_country_list:
                tgt_country_list.append(src_country[0])
            single_country_dict['export_tgt'] = tgt_country_list
            list_dict = getdbdata.get_export_list_by_listing_by_country(country[0], str(year))
            single_country_dict['I'] = list_dict['I']
            single_country_dict['II'] = list_dict['II']
            single_country_dict['III'] = list_dict['III']
            single_country_dict['N'] = list_dict['N']
            temp_yearDict[str(index)] = single_country_dict
            index = index+1
        j = json.dumps(temp_yearDict)
        with open(path, 'w') as f:
            f.write(j)

    print('done')


create_import_country_list_json()
create_export_country_list_json()