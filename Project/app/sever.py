from flask import Flask
from flask_bootstrap import Bootstrap
from flask import render_template
import app.charts as charts

from . import app




@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/bar')
def bar():
    _bar = charts.bar.create_charts()
    return render_template('base.html',
                           title='柱状图',
                           source_file='bar',
                           myechart=_bar.render_embed(),
                           script_list=_bar.get_js_dependencies())





