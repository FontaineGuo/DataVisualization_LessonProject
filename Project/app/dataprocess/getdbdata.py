import os
current_path = os.path.dirname(__file__)
import sqlite3
from collections import OrderedDict

def get_country_data(code):
    conn = sqlite3.connect(current_path + '\\DataSrc\\countryCode_data\\country_info.db')
    cursor = conn.cursor()
    data = cursor.execute("SELECT * from geoinfo where geoinfo.Alpha2code='" + code +"'" )
    for item in data:
        info = list(item)
    nameData = cursor.execute("SELECT * from nameinfo where nameinfo.code='" + code + "'")

    for item in nameData:
        countryInfo = list(item)

    cursor.close()
    conn.close()
    countryInfo.append(info[5])
    countryInfo.append(info[4])
    # print(countryInfo)
    return countryInfo


def get_cites_list_data(sciName):
    conn = sqlite3.connect(current_path + '\\DataSrc\\species_data\\cites_listings.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * from cites_listings where cites_listings.ScientificName='" + sciName + "'")
    data = cursor.fetchone()
    if data == None:
        return []
    # for item in data:
    #     print(list(item))
    cursor.close()
    conn.close()
    return list(data)

def get_import_src_country_list(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')

    cursor = conn.execute("SELECT Exporter, count(Exporter) from CitesTradeData where CitesTradeData.Importer='"+ countryCode + "' and year ='"+ year + "' group by Exporter order by count(Exporter) desc limit 20" )
    country_list = []
    for item in cursor:
        # print(item)
        country_list.append(list(item))
    # print(country_list)
    cursor.close()
    conn.close()
    return country_list

def get_exporter_tgt_country_list(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')

    cursor = conn.execute("SELECT Importer, count(Importer) from CitesTradeData where CitesTradeData.Exporter='"+ countryCode + "' and year ='"+ year +"'group by Importer order by count(Importer) desc limit 20" )
    country_list = []
    for item in cursor:
        # print(item)
        country_list.append(list(item))
    # print(country_list)
    cursor.close()
    conn.close()
    return country_list

def get_export_list_by_country(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Taxon, count(Taxon) from CitesTradeData where CitesTradeData.Exporter='" + countryCode + "' and year ='"+ year + "'group by Taxon order by count(Taxon) desc limit 28")
    export_list = []
    for item in cursor:
        # print(item)
        export_list.append(list(item))
    # print(export_list)
    cursor.close()
    conn.close()
    return export_list

def get_import_list_by_country(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Taxon, count(Taxon) from CitesTradeData where CitesTradeData.Importer='" + countryCode + "' and year ='"+ year + "'group by Taxon order by count(Taxon) desc limit 28")
    import_list = []
    for item in cursor:
        # print(item)
        import_list.append(list(item))
    cursor.close()
    conn.close()
    return import_list

def get_import_purpose_list_by_country(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Purpose, count(Purpose) from CitesTradeData where CitesTradeData.Importer='" + countryCode +  "' and year ='"+ year + "' group by Purpose order by count(Purpose) desc")
    purpose_list = []
    for item in cursor:
        # print(item)
        purpose_list.append(list(item))
    # print(purpose_list)
    cursor.close()
    conn.close()
    return purpose_list


def get_export_purpose_list_by_country(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Purpose, count(Purpose) from CitesTradeData where CitesTradeData.Exporter='" + countryCode +  "' and year ='"+ year + "' group by Purpose order by count(Purpose) desc")
    purpose_list = []
    for item in cursor:
        # print(item)
        purpose_list.append(list(item))
    # print(purpose_list)
    cursor.close()
    conn.close()
    return purpose_list


def get_exporter_quantity(countryCode, year, sciName):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT sum(Exporter_reported_quantity)  from CitesTradeData where "
                          "CitesTradeData.Exporter='" +
                          countryCode +  "' and year ='"+
                          year + "' and Taxon='" +
                          sciName + "'")
    num = 0
    for item in cursor:
        # print(item)
        num =list(item)[0]
    # print(num)
    cursor.close()
    conn.close()
    return num

def get_importer_quantity(countryCode, year, sciName):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT sum(Exporter_reported_quantity)  from CitesTradeData where "
                          "CitesTradeData.Importer='" +
                          countryCode +  "' and year ='"+
                          year + "' and Taxon='" +
                          sciName + "'")
    num = 0
    for item in cursor:
        # print(item)
        num =list(item)[0]
    # print(num)
    cursor.close()
    conn.close()
    return num

def get_export_rank():
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Importer, count(Importer)  from CitesTradeData group by Importer order by count(Importer) desc limit 20")
    for item in cursor:
        print(item)
    cursor.close()
    conn.close()

def get_import_rank():
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT EXporter, count(Exporter)  from CitesTradeData group by Exporter order by count(Exporter) desc limit 20")
    for item in cursor:
        print(item)
    cursor.close()
    conn.close()

def get_export_country_rank_by_year(year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Exporter, count(Exporter)  from CitesTradeData where year ='"+ year + "' group by Exporter order by count(Exporter) desc limit 20")
    export_list = []
    for item in cursor:
        export_list.append(list(item))
    # print(export_list)
    cursor.close()
    conn.close()
    return export_list

def get_import_country_rank_by_year(year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Importer, count(Importer)  from CitesTradeData where year ='"+ year + "' group by Importer order by count(Importer) desc limit 20")
    import_list = []
    for item in cursor:
        # print(item)
        import_list.append(list(item))
    # print(import_list)
    cursor.close()
    conn.close()
    return import_list


def get_import_list_by_listing_by_country(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT App, Taxon, count(Taxon) from CitesTradeData where CitesTradeData.Importer='" + countryCode + "' and year ='" + year + "'group by Taxon order by count(Taxon) desc")
    one_export_list = []
    two_export_list = []
    three_export_list = []
    n_export_list = []
    one_index = 0
    two_index = 0
    three_index = 0
    n_index = 0
    for item in cursor:
        # import_num = get_importer_quantity(countryCode, year, list(item)[1])
        # export_num = get_exporter_quantity(countryCode, year, list(item)[1])
        single = list(item)
        if one_index == 7 and two_index == 7 and three_index == 7 and n_index == 7:
            break;

        if single[0] == 'I':
            if one_index < 7:
                one_export_list.append(single)
                one_index = one_index + 1
        elif single[0] == 'II':
            if two_index < 7:
                two_export_list.append(single)
                two_index = two_index + 1
        elif single[0] == 'III':
            if three_index < 7:
                three_export_list.append(single)
                three_index = three_index + 1
        elif single[0] == 'N':
            if n_index <= 7:
                n_export_list.append(single)
                n_index = n_index + 1

    dict = OrderedDict()
    dict['I'] = one_export_list
    dict['II'] = two_export_list
    dict['III'] = three_export_list
    dict['N'] = n_export_list
    for item in dict.values():
        for single_dict in item:
            temp = single_dict
            import_num = get_importer_quantity(countryCode, year, temp[1])
            export_num = get_exporter_quantity(countryCode, year, temp[1])

            import_num = (import_num if import_num != None else 0)
            export_num = (export_num if export_num != None else 0)
            temp.append(int(import_num))
            temp.append(int(export_num))
            single_dict = temp

    # for item in dict.values():
    #     for single_dict in item:
    #         print(single_dict)
    cursor.close()
    conn.close()
    return dict


def get_export_list_by_listing_by_country(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT App, Taxon, count(Taxon) from CitesTradeData where CitesTradeData.Exporter='" + countryCode + "' and year ='" + year + "'group by Taxon order by count(Taxon) desc")
    one_export_list = []
    two_export_list = []
    three_export_list = []
    n_export_list = []
    one_index = 0
    two_index = 0
    three_index = 0
    n_index = 0
    for item in cursor:
        # import_num = get_importer_quantity(countryCode, year, list(item)[1])
        # export_num = get_exporter_quantity(countryCode, year, list(item)[1])
        single = list(item)
        if one_index == 7 and two_index == 7 and three_index == 7 and n_index == 7:
            break;

        if single[0] == 'I':
            if one_index < 7:
                one_export_list.append(single)
                one_index = one_index + 1
        elif single[0] == 'II':
            if two_index < 7:
                two_export_list.append(single)
                two_index = two_index + 1
        elif single[0] == 'III':
            if three_index < 7:
                three_export_list.append(single)
                three_index = three_index + 1
        elif single[0] == 'N':
            if n_index <= 7:
                n_export_list.append(single)
                n_index = n_index + 1

    dict = OrderedDict()
    dict['I'] = one_export_list
    dict['II'] = two_export_list
    dict['III'] = three_export_list
    dict['N'] = n_export_list
    for item in dict.values():
        for single_dict in item:
            temp = single_dict
            import_num = get_importer_quantity(countryCode, year, temp[1])
            export_num = get_exporter_quantity(countryCode, year, temp[1])

            import_num = (import_num if import_num != None else 0)
            export_num = (export_num if export_num != None else 0)
            temp.append(int(import_num))
            temp.append(int(export_num))
            single_dict = temp
    #
    # for item in dict.values():
    #     for single_dict in item:
    #         print(single_dict)
    cursor.close()
    conn.close()
    return dict

def get_global_purpose_list():
    print()

def get_global_list_by_listing():
    print()
# test for get_country_data
# get_country_data('AL')

# test for get_cites_list_data
# get_cites_list_data('Bos gaurus')

# test for get_import_src_country_list()
#
# get_import_src_country_list('US', '2000')

# test for get_export_tgt_country_list
# get_exporter_tgt_country_list('US', '2000')

# test for get_export_list_by_country(countryCode)
# get_export_list_by_country('US', '2000')

# test for get_import_list__by_country(countryCode)
# get_import_list_by_country('US', '2000')

# test for get_purpose_list_by_country(countryCode)
# get_purpose_list_by_country('US', '2000')

# get_exporter_quantity('US', '2000', 'Loxodonta africana')

# test for get_import_rank
# get_export_rank()

# test for get_export_rank
# get_import_rank()

# test for get_import_rank_by_year
# get_import_country_rank_by_year('2000')

# test for get_exporter_rank_by_year
# get_export_rank__country_by_year('2000')

# test for get_import_list_by_listing_by_country
# get_import_list_by_listing_by_country('US', '2000')
# get_export_list_by_listing_by_country('US', '2000')