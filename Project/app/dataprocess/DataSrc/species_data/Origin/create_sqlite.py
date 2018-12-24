import pandas
import csv, sqlite3
conn= sqlite3.connect("./cites_listings.db")
listData = pandas.read_csv('./cites_listings_short.csv')
listData.to_sql('cites_listings', conn, if_exists='append', index=False)

print('ok')