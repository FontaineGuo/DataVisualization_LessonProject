from flask import Flask
from flask_bootstrap import Bootstrap
from flask import render_template
import app.charts as charts

from . import app




@app.route("/")
def hello():
    return render_template('index.html')

