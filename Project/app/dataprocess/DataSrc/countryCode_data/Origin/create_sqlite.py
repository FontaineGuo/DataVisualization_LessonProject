import pandas
import csv, sqlite3
conn= sqlite3.connect("./country_info.db")
listData = pandas.read_csv('./country_info.csv')
listData.to_sql('geoinfo', conn, if_exists='append', index=False)

listData = pandas.read_csv('./CountryCode.csv')
listData.to_sql('nameinfo', conn, if_exists='append', index=False)
print('ok')