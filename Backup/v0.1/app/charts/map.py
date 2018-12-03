from pyecharts import Map, Page, Style


def create_charts():
    page = Page()

    style = Style(
        width=800, height=600
    )


    value = [95.1, 23.2, 43.3, 66.4, 88.5, 0.1]
    attr = ["China", "Canada", "Brazil", "Russia",
            "United States", "Unknown Country"]
    chart = Map("世界地图 - 带标记点", **style.init_style)
    chart.add("", attr, value, maptype="world", is_visualmap=True,
              visual_text_color='#000')
    page.add(chart)

    chart = Map("世界地图 - 不带标记点", **style.init_style)
    chart.add("", attr, value, maptype="world", is_visualmap=True,
              is_map_symbol_show=False, visual_text_color='#000')
    page.add(chart)

    return page
