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
    for item in data:
        print(item)
    cursor.close()
    conn.close()

def get_import_src_country_list(countryCode):
    conn = sqlite3.connect(current_path + '\\DataSrc\\trade_data\\CitesTradeData.db')

    cursor = conn.execute("SELECT Exporter, count(Exporter) from CitesTradeData where CitesTradeData.Importer='"+ countryCode + "'group by Exporter" )
    for item in cursor:
        print(item)
    cursor.close()
    conn.close()
# test for get_country_data
# get_country_data('AL')

# test for get_cites_list_data
# get_cites_list_data('Bos gaurus')

# test for get_import_src_country_list()
get_import_src_country_list('US')