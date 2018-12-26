import pandas
import csv, sqlite3
conn= sqlite3.connect("./PurSrc.db")
listData = pandas.read_csv('./Purpose.csv')
listData.to_sql('purpose', conn, if_exists='append', index=False)

listData = pandas.read_csv('./Sources.csv')
listData.to_sql('source', conn, if_exists='append', index=False)

print('ok')