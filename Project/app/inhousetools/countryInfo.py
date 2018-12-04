import csv
import os
def get_country_location(isocode):
    info_file =  csv.reader(open('app/static/DataSrc/countryCode_data/country_info.csv' , 'r', encoding='utf-8'))
    # skip the first line
    next(info_file)
   
    for info_pair in info_file:
        if info_pair[1] == isocode:
            return [info_pair[5], info_pair[4]]
            break
        # print(str(info_pair[1]) + ' latitude: ' +  str(info_pair[4])
        #      + ' longtitude: ' +  str(info_pair[5]))

    return 'error: couldn\'t find the country'

# TEST
# info = get_country_location('APT')
# if isinstance(info, str):
#     print(info)
# else:
#     print(info)