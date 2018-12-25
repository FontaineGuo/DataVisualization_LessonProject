import os
current_path = os.path.dirname(__file__)
import sqlite3

def get_country_data(code):
    conn = sqlite3.connect(current_path + '\\DataSrc\\countryCode_data\\country_info.db')
    cursor = conn.cursor()
    geodata = []
    cursor.execute("SELECT * from geoinfo where geoinfo.Alpha2code='" + code +"'" )
    data = cursor.fetchall()
    for item in data:
        print(item)
    cursor.execute("SELECT * from nameinfo where nameinfo.code='" + code + "'")
    data = cursor.fetchall()
    for item in data:
        print(item)
    cursor.close()
    conn.close()


def get_cites_list_data(sciName):
    conn = sqlite3.connect(current_path + '\\DataSrc\\species_data\\cites_listings.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * from cites_listings where cites_listings.ScientificName='" + sciName + "'")
    data = cursor.fetchall()
    print(list(data))
    # for item in data:
    #     print(list(item))
    cursor.close()
    conn.close()

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

def get_import_list_by_country(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Taxon, count(Taxon) from CitesTradeData where CitesTradeData.Importer='" + countryCode + "' and year ='"+ year + "'group by Taxon order by count(Taxon) desc limit 28")
    import_list = []
    for item in cursor:
        # print(item)
        import_list.append(list(item))
    cursor.close()
    conn.close()


def get_purpose_list_by_country(countryCode, year):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')
    cursor = conn.execute("SELECT Purpose, count(Purpose) from CitesTradeData where CitesTradeData.Importer='" + countryCode +  "' and year ='"+ year + "' group by Purpose order by count(Purpose) desc")
    purpose_list = []
    for item in cursor:
        # print(item)
        purpose_list.append(list(item))
    # print(purpose_list)
    cursor.close()
    conn.close()


def get_exporter_quantity(countryCode, year, sciName):
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