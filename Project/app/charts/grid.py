import random

from pyecharts import Bar, Line, Scatter, EffectScatter, Pie, Kline, HeatMap
from pyecharts import Grid, Page, Overlap
from app.charts.constants import X_TIME, Y_WEEK

WIDTH = 1100


def create_charts():
    page = Page()

    attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    v1 = [5, 20, 36, 10, 75, 90]
    v2 = [10, 25, 8, 60, 20, 80]
    bar = Bar("柱状图示例")
    bar.add("商家A", attr, v1, is_stack=True)
    bar.add("商家B", attr, v2, is_stack=True)
    line = Line("折线图示例", title_top="50%")
    attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
             mark_point=["max", "min"], mark_line=["average"])
    line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0],
             mark_point=["max", "min"], mark_line=["average"],
             legend_top="50%")
    chart = Grid(height=800, width=WIDTH)
    chart.add(bar, grid_bottom="60%")
    chart.add(line, grid_top="60%")
    page.add(chart)

    v1 = [5, 20, 36, 10, 75, 90]
    v2 = [10, 25, 8, 60, 20, 80]
    scatter = Scatter("散点图示例", title_pos="55%")
    scatter.add("scatter", v1, v2, legend_pos="70%")
    es = EffectScatter("动态散点图示例")
    es.add("effectScatter", [11, 11, 15, 13, 12, 13, 10],
           [1, -2, 2, 5, 3, 2, 0], effect_scale=6, legend_pos="20%")
    chart = Grid(width=WIDTH)
    chart.add(scatter, grid_left="60%")
    chart.add(es, grid_right="60%")
    page.add(chart)

    attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    v1 = [5, 20, 36, 10, 75, 90]
    v2 = [10, 25, 8, 60, 20, 80]
    bar = Bar("柱状图示例", title_pos="65%")
    bar.add("商家A", attr, v1, is_stack=True)
    bar.add("商家B", attr, v2, is_stack=True, legend_pos="80%")
    line = Line("折线图示例")
    attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
             mark_point=["max", "min"], mark_line=["average"])
    line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0],
             mark_point=["max", "min"], mark_line=["average"],
             legend_pos="20%")
    v1 = [5, 20, 36, 10, 75, 90]
    v2 = [10, 25, 8, 60, 20, 80]
    scatter = Scatter("散点图示例", title_top="50%", title_pos="65%")
    scatter.add("scatter", v1, v2, legend_top="50%", legend_pos="80%")
    es = EffectScatter("动态散点图示例", title_top="50%")
    es.add("es", [11, 11, 15, 13, 12, 13, 10], [1, -2, 2, 5, 3, 2, 0],
           effect_scale=6, legend_top="50%", legend_pos="20%")
    chart = Grid(height=740, width=WIDTH)
    chart.add(bar, grid_bottom="60%", grid_left="60%")
    chart.add(line, grid_bottom="60%", grid_right="60%")
    chart.add(scatter, grid_top="60%", grid_left="60%")
    chart.add(es, grid_top="60%", grid_right="60%")
    page.add(chart)

    line = Line("折线图示例")
    attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
             mark_point=["max", "min"], mark_line=["average"])
    line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0],
             mark_point=["max", "min"], mark_line=["average"],
             legend_pos="20%")
    attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    v1 = [11, 12, 13, 10, 10, 10]
    pie = Pie("饼图示例", title_pos="55%")
    pie.add("", attr, v1, radius=[45, 65], center=[70, 50],
            legend_pos="85%", legend_orient='vertical')
    chart = Grid(width=WIDTH)
    chart.add(line, grid_right="55%")
    chart.add(pie, grid_left="60%")
    page.add(chart)

    line = Line("折线图示例")
    attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
             mark_point=["max", "min"], mark_line=["average"])
    line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0],
             mark_point=["max", "min"], mark_line=["average"],
             legend_pos="20%")
    v1 = [[2320.26, 2320.26, 2287.3, 2362.94],
          [2300, 2291.3, 2288.26, 2308.38],
          [2295.35, 2346.5, 2295.35, 2345.92],
          [2347.22, 2358.98, 2337.35, 2363.8],
          [2360.75, 2382.48, 2347.89, 2383.76],
          [2383.43, 2385.42, 2371.23, 2391.82],
          [2377.41, 2419.02, 2369.57, 2421.15],
          [2425.92, 2428.15, 2417.58, 2440.38],
          [2411, 2433.13, 2403.3, 2437.42],
          [2432.68, 2334.48, 2427.7, 2441.73],
          [2430.69, 2418.53, 2394.22, 2433.89],
          [2416.62, 2432.4, 2414.4, 2443.03],
          [2441.91, 2421.56, 2418.43, 2444.8],
          [2420.26, 2382.91, 2373.53, 2427.07],
          [2383.49, 2397.18, 2370.61, 2397.94],
          [2378.82, 2325.95, 2309.17, 2378.82],
          [2322.94, 2314.16, 2308.76, 2330.88],
          [2320.62, 2325.82, 2315.01, 2338.78],
          [2313.74, 2293.34, 2289.89, 2340.71],
          [2297.77, 2313.22, 2292.03, 2324.63],
          [2322.32, 2365.59, 2308.92, 2366.16],
          [2364.54, 2359.51, 2330.86, 2369.65],
          [2332.08, 2273.4, 2259.25, 2333.54],
          [2274.81, 2326.31, 2270.1, 2328.14],
          [2333.61, 2347.18, 2321.6, 2351.44],
          [2340.44, 2324.29, 2304.27, 2352.02],
          [2326.42, 2318.61, 2314.59, 2333.67],
          [2314.68, 2310.59, 2296.58, 2320.96],
          [2309.16, 2286.6, 2264.83, 2333.29],
          [2282.17, 2263.97, 2253.25, 2286.33],
          [2255.77, 2270.28, 2253.31, 2276.22]]
    kline = Kline("K 线图示例", title_pos="60%")
    kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)], v1,
              legend_pos="80%")
    chart = Grid(width=WIDTH)
    chart.add(line, grid_right="60%")
    chart.add(kline, grid_left="55%")
    page.add(chart)

    data = [
        [i, j, random.randint(0, 50)] for i in range(24) for j in range(7)]
    heatmap = HeatMap("热力图示例")
    heatmap.add("热力图直角坐标系", X_TIME, Y_WEEK, data, is_visualmap=True,
                visual_top="45%", visual_text_color="#000",
                visual_orient='horizontal')
    attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    v1 = [5, 20, 36, 10, 75, 90]
    v2 = [10, 25, 8, 60, 20, 80]
    bar = Bar("柱状图示例", title_top="52%")
    bar.add("商家A", attr, v1, is_stack=True)
    bar.add("商家B", attr, v2, is_stack=True, legend_top="50%")
    chart = Grid(width=WIDTH, height=700)
    chart.add(heatmap, grid_bottom="60%")
    chart.add(bar, grid_top="60%")
    page.add(chart)

    line = Line("折线图示例")
    attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
             mark_point=["max", "min"], mark_line=["average"])
    line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0],
             mark_point=["max", "min"], legend_top="50%",
             mark_line=["average"], is_datazoom_show=True,
             datazoom_xaxis_index=[0, 1])

    v1 = [[2320.26, 2320.26, 2287.3, 2362.94],
          [2300, 2291.3, 2288.26, 2308.38],
          [2295.35, 2346.5, 2295.35, 2345.92],
          [2347.22, 2358.98, 2337.35, 2363.8],
          [2360.75, 2382.48, 2347.89, 2383.76],
          [2383.43, 2385.42, 2371.23, 2391.82],
          [2377.41, 2419.02, 2369.57, 2421.15],
          [2425.92, 2428.15, 2417.58, 2440.38],
          [2411, 2433.13, 2403.3, 2437.42],
          [2432.68, 2334.48, 2427.7, 2441.73],
          [2430.69, 2418.53, 2394.22, 2433.89],
          [2416.62, 2432.4, 2414.4, 2443.03],
          [2441.91, 2421.56, 2418.43, 2444.8],
          [2420.26, 2382.91, 2373.53, 2427.07],
          [2383.49, 2397.18, 2370.61, 2397.94],
          [2378.82, 2325.95, 2309.17, 2378.82],
          [2322.94, 2314.16, 2308.76, 2330.88],
          [2320.62, 2325.82, 2315.01, 2338.78],
          [2313.74, 2293.34, 2289.89, 2340.71],
          [2297.77, 2313.22, 2292.03, 2324.63],
          [2322.32, 2365.59, 2308.92, 2366.16],
          [2364.54, 2359.51, 2330.86, 2369.65],
          [2332.08, 2273.4, 2259.25, 2333.54],
          [2274.81, 2326.31, 2270.1, 2328.14],
          [2333.61, 2347.18, 2321.6, 2351.44],
          [2340.44, 2324.29, 2304.27, 2352.02],
          [2326.42, 2318.61, 2314.59, 2333.67],
          [2314.68, 2310.59, 2296.58, 2320.96],
          [2309.16, 2286.6, 2264.83, 2333.29],
          [2282.17, 2263.97, 2253.25, 2286.33],
          [2255.77, 2270.28, 2253.31, 2276.22]]
    kline = Kline("K 线图示例", title_top="50%")
    kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)], v1,
              is_datazoom_show=True)

    chart = Grid(width=WIDTH, height=700)
    chart.add(line, grid_top="60%")
    chart.add(kline, grid_bottom="60%")
    page.add(chart)

    attr = ['{}天'.format(i) for i in range(1, 31)]
    line_top = Line("折线图示例")
    line_top.add("最高气温", attr,
                 [random.randint(20, 100) for i in range(30)],
                 mark_point=["max", "min"], mark_line=["average"],
                 legend_pos='38%')
    line_bottom = Line()
    line_bottom.add("最低气温", attr,
                    [random.randint(20, 100) for i in range(30)],
                    mark_point=["max", "min"], mark_line=["average"],
                    is_yaxis_inverse=True, xaxis_pos='top')
    chart = Grid(width=WIDTH, height=700)
    chart.add(line_top, grid_bottom='60%')
    chart.add(line_bottom, grid_top='50%')
    page.add(chart)

    attr = ["{}月".format(i) for i in range(1, 13)]
    v1 = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    v2 = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    v3 = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    bar = Bar("Overlap+Grid 示例", title_pos="40%")
    bar.add("蒸发量", attr, v1)
    bar.add("降水量", attr, v2, yaxis_formatter=" ml", yaxis_max=250,
            legend_pos="85%", legend_orient="vertical", legend_top="45%")
    line = Line()
    line.add("平均温度", attr, v3, yaxis_formatter=" °C")
    overlap = Overlap()
    overlap.add(bar)
    overlap.add(line, is_add_yaxis=True, yaxis_index=1)

    chart = Grid(width=1100, height=600)
    chart.add(overlap, grid_right='20%')
    page.add(chart)

    return page
