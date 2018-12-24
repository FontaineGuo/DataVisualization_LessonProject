import pandas
import csv, sqlite3
conn= sqlite3.connect("./CitesTradeData.db")


for year in range(2000,2018):
    print(year)
    seasonData = pandas.read_csv('./' + str(year) + '_CitesTradeData.csv')
    seasonData.to_sql('CitesTradeData', conn, if_exists='append', index=False)

print('ok')