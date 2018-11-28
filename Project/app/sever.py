from flask import Flask
from flask_bootstrap import Bootstrap
from flask import render_template
import app.charts as charts

from . import app




@app.route("/")
def hello():
    _map = charts.map.create_charts()
    return render_template('index.html',
                            source_file='map',
                            myechart=_map.render_embed(),
                            script_list=_map.get_js_dependencies())

@app.route('/bar')
def bar():
    _bar = charts.bar.create_charts()
    return render_template('base.html',
                           title='柱状图',
                           source_file='bar',
                           myechart=_bar.render_embed(),
                           script_list=_bar.get_js_dependencies())


@app.route('/parallel')
def parallel():
    _parallel = charts.parallel.create_charts()
    return render_template('base.html',
                           title='平行坐标系',
                           source_file='parallel',
                           myechart=_parallel.render_embed(),
                           script_list=_parallel.get_js_dependencies())



@app.route('/wordcloud')
def wordcloud():
    _wordcloud = charts.wordcloud.create_charts()
    return render_template('base.html',
                           title='词云图',
                           source_file='wordcloud',
                           myechart=_wordcloud.render_embed(),
                           script_list=_wordcloud.get_js_dependencies())


@app.route('/map')
def map():
    _map = charts.map.create_charts()
    return render_template('base.html',
                           title='地图',
                           source_file='map',
                           myechart=_map.render_embed(),
                           script_list=_map.get_js_dependencies())

                           
@app.route('/geolines')
def geolines():
    _geolines = charts.geolines.create_charts()
    return render_template('base.html',
                           title='地理坐标系线图',
                           source_file='geolines',
                           myechart=_geolines.render_embed(),
                           script_list=_geolines.get_js_dependencies())

@app.route('/sankey')
def sankey():
    _sankey = charts.sankey.create_charts()
    return render_template('base.html',
                           title='桑基图',
                           source_file='sankey',
                           myechart=_sankey.render_embed(),
                           script_list=_sankey.get_js_dependencies())

@app.route('/grid')
def grid():
    _grid = charts.grid.create_charts()
    return render_template('base.html',
                           title='Grid类',
                           source_file='grid',
                           myechart=_grid.render_embed(),
                           script_list=_grid.get_js_dependencies())

@app.route('/overlap')
def overlap():
    _overlap = charts.overlap.create_charts()
    return render_template('base.html',
                           title='Overlap类',
                           source_file='overlap',
                           myechart=_overlap.render_embed(),
                           script_list=_overlap.get_js_dependencies())

@app.route('/timeline')
def timeline():
    _timeline = charts.timeline.create_charts()
    return render_template('base.html',
                           title='Timeline类',
                           source_file='timeline',
                           myechart=_timeline.render_embed(),
                           script_list=_timeline.get_js_dependencies())