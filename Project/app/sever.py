from flask import Flask
from flask_bootstrap import Bootstrap
from flask import render_template
from app.inhousetools import countryInfo
from . import app




@app.route("/")
def hello():
    # print(countryInfo.get_country_location('US'))
    return render_template('index.html')




