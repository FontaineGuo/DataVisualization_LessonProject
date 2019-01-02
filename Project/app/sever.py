from flask import Flask,request
from flask_bootstrap import Bootstrap
from flask import render_template
from app.dataprocess import countryInfo
from . import app
import json


import os
current_path = os.path.dirname(__file__)


@app.route("/")
def hello():
    # print(countryInfo.get_country_location('US'))
    return render_template('index.html')




@app.route("/importdata", methods=['POST'])
def getImdata():
    data = request.get_json()
    # print(data)
    year = data['selectyear']
    path = current_path + '\\dataprocess\\DataSrc\\jsonPreData\\Importer\\import_country_' + str(year)+ '.json'
    json_data = open(path).read()
    return json_data



@app.route("/exportdata", methods=['POST'])
def getExdata():
    data = request.get_json()
    # print(data)
    year = data['selectyear']

    path = current_path + '\\dataprocess\\DataSrc\\jsonPreData\\Exporter\\export_country_' + str(year)+ '.json'
    json_data = open(path).read()
    return json_data

@app.route("/globaldata", methods=['POST'])
def getglobaldata():

    path = current_path + '\\dataprocess\\DataSrc\\jsonPreData\\Global\\global_trade_data.json'
    json_data = open(path).read()
    return json_data