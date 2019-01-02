//自适应
window.onresize = function(){
    Chart1.resize();
    Chart2.resize();
    Chart3.resize();
    Chart4.resize();
    Chart5.resize();
};

var Chart1 = echarts.init(document.getElementById("c1"));
var Chart2 = echarts.init(document.getElementById('c2'));
var Chart3 = echarts.init(document.getElementById('c3'));
var Chart4 = echarts.init(document.getElementById('c4'));
var Chart5 = echarts.init(document.getElementById('c5'));
//航线图区块选择计数
var clicktime = 0;
//航线图区块选择区块记忆
var remembername = '';
//年份选择
var yeartime = 2000;
var jinchu = 'in';

//图表配色方案
var colorglobal = ['#60ACFC', '#27A1EA','#35C5EA','#4EBECD','#40CEC7',
    '#63D5B2', '#5BC49F','#9CDC82','#D4EC59','#FFDA43',
    '#FEB64D', '#FF9F69','#FA816D','#FB6E6C','#FF7B7B',
    '#E9668E', '#9287E7','#747BE1','#6370DE','#668ED6',];
var color0 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color1 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color2 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color3 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color4 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color5 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color6 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color7 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color8 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];
//var color9 = ['#5298EA', '#32D3EB','#64DF86','#FEB64D','#FF7B7B'];

//数据处理函数
var airname1 = [];
var airdata1 = [];
var airdata2 = [];
var airname2 = [];

// 用来存储地图数据
var pathes1 = [];
var pathes2 = [];

var piedata1 = [];
var pielengend1 = [];
var piedata2 = [];
var pielengend2 = [];
var piedata3 = [];

var barname = [];
var barinport = [];
var barexport = [];

var barpiedataI = ['附录I'];
var barpiedataII = ['附录II'];
var barpiedataIII = ['附录III'];

var treedata = [];

//chart1 航线图
// 小飞机的图标，可以用其他图形替换
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

// 获取地图中起点和终点的坐标，以数组形式保存下来
var convertData = function(data) {
    var res = [];
    for(var i = 0; i < data.length; i++) {
        var fromCoord = data[i][1];
        var toCoord = data[i][2];
        if(fromCoord && toCoord) {
            res.push([{
                coord: fromCoord // 起点坐标
            }, {
                coord: toCoord // 终点坐标
            }])
        }
    }
    return res;
};
//获取年份数据
var yearchangedata = function () {
    Chart1.clear();
    Chart2.clear();
    Chart3.clear();
    Chart4.clear();
    Chart5.clear();
    airname1 = [];
    airdata1 = [];
    airdata2 = [];
    airname2 = [];

    pathes1 = [];
    pathes2 = [];

    piedata1 = [];
    pielengend1 = [];
    piedata2 = [];
    pielengend2 = [];
    piedata3 = [];

    barname = [];
    barinport = [];
    barexport = [];

    barpiedataI = ['附录I'];
    barpiedataII = ['附录II'];
    barpiedataIII = ['附录III'];

    treedata = [];

    Chart1.setOption(option1);
    Chart2.setOption(option2);
    Chart3.setOption(option3);
    Chart4.setOption(option4);
    Chart5.setOption(option5);
    $.ajax({
        type: 'get',
        url: '../json/import/import_country_'+yeartime+'.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                pielengend1.push(item.name);
                piedata1.push({name:item.name,value:item.num,nameCN:item.nameCN});
                airname1.push(item.nameCN);
                // console.log(Object.keys(item.import_src_info).length)
                for(var i = 0; i<Object.keys(item.import_src_info).length;i++) {
                    airdata1.push([item.nameCN, item.import_src_info[i].coord, item.coord])
                }
                [airdata1].forEach(function(item, i) {
                    pathes1.push(
                        {
                            name:item[i][0],
                            type: 'lines',
                            zlevel: 1,                    // 用于分层，z-index的效果
                            effect: {
                                show: true,               // 动效是否显示
                                period: 10,                // 特效动画时间
                                trailLength: 0.2,         // 特效尾迹的长度
                                color: '#fff',            // 特效颜色
                                symbolSize: 1             // 特效大小
                            },
                            lineStyle: {
                                normal: {                 // 正常情况下的线条样式
                                    color: colorglobal[i],
                                    width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                                    curveness: -0.2       // 线条曲度
                                }
                            },
                            data: convertData(item)    // 特效的起始、终点位置
                        },{
                            name:item[i][0],
                            type: 'lines',
                            zlevel: 2,
                            symbolSize: 10,
                            effect: {
                                show: true,
                                period: 10,
                                trailLength: 0,
                                symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
                                symbolSize: 1
                            },
                            lineStyle: {
                                normal: {
                                    color: colorglobal[i],
                                    width: 0.5,
                                    opacity: 0.6,
                                    curveness: -0.2
                                },
                                emphasis:{
                                    color: colorglobal[i],
                                    width:1,
                                    opacity: 0.7,
                                    curveness: -0.2
                                }
                            },
                            data: convertData(item)   // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
                        });
                });
                airdata1 = [];
            });
            Chart2.setOption({
                legend:[{
                    data:pielengend1
                }],
                series:[{
                    data:piedata1
                }]
            })
        }
    });
    $.ajax({
        type: 'get',
        url: '../json/export/export_country_' + yeartime + '.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                pielengend2.push(item.name);
                piedata2.push({name: item.name, value: item.num, nameCN: item.nameCN});
                airname2.push(item.nameCN);
                for(var i = 0; i<Object.keys(item.export_tgt_info).length;i++) {
                    airdata2.push([item.nameCN, item.coord, item.export_tgt_info[i].coord])
                }
                [airdata2].forEach(function(item, i) {
                    pathes2.push(
                        {
                            name:item[i][0],
                            type: 'lines',
                            zlevel: 1,                    // 用于分层，z-index的效果
                            effect: {
                                show: true,               // 动效是否显示
                                period: 10,                // 特效动画时间
                                trailLength: 0.2,         // 特效尾迹的长度
                                color: '#fff',            // 特效颜色
                                symbolSize: 1             // 特效大小
                            },
                            lineStyle: {
                                normal: {                 // 正常情况下的线条样式
                                    color: colorglobal[i],
                                    width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                                    curveness: -0.2       // 线条曲度
                                }
                            },
                            data: convertData(item)    // 特效的起始、终点位置
                        },{
                            name:item[i][0],
                            type: 'lines',
                            zlevel: 2,
                            symbolSize: 10,
                            effect: {
                                show: true,
                                period: 10,
                                trailLength: 0,
                                symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
                                symbolSize: 1
                            },
                            lineStyle: {
                                normal: {
                                    color: colorglobal[i],
                                    width: 0.5,
                                    opacity: 0.6,
                                    curveness: -0.2
                                },
                                emphasis:{
                                    color: colorglobal[i],
                                    width:1,
                                    opacity: 0.7,
                                    curveness: -0.2
                                }
                            },
                            data: convertData(item)   // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
                        });
                });
                airdata2 = [];
            });
            for(var i = 0;i < pielengend1.length; i++){
                for(var j = 0;j<pielengend2.length; j++){
                    if(pielengend1[i] === pielengend2[j]){
                        piedata3.push({name:pielengend1[i], value:piedata1[i].value+piedata2[i].value})
                    }
                }
            }
            Chart2.setOption({
                legend: [{}, {
                    data: pielengend2
                }],
                series: [{}, {
                    data: piedata2
                }]
            });
            Chart2.setOption({
                series:[{},{},{
                    data:piedata3,
                }]
            });
        }
    });
    $.ajax({
        type: 'get',
        url: '../json/global/global_trade_data.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                for (var i = 0; i < 5; i++) {
                    if(item.year === yeartime) {
                        barname.push(item.I[i][1]);
                        barinport.push(item.I[i][2]);
                        barexport.push(item.I[i][3]);
                    }
                }
                for (var i = 0; i < 5; i++) {
                    if(item.year === yeartime) {
                        barname.push(item.II[i][1]);
                        barinport.push(item.II[i][2]);
                        barexport.push(item.II[i][3]);
                    }
                }
                for (var i = 0; i < 5; i++) {
                    if(item.year === yeartime) {
                        barname.push(item.III[i][1]);
                        barinport.push(item.III[i][2]);
                        barexport.push(item.III[i][3]);
                    }
                }
                for (var i = 0; i < 13; i++) {
                    if(item.year === yeartime) {
                        treedata.push({name:item.purpose_info[i][0], value:item.purpose_info[i][1]});
                    }
                }
                barpiedataI.push(item.I_num);
                barpiedataII.push(item.II_num);
                barpiedataIII.push(item.III_num);
                Chart3.setOption({
                    dataset:{
                        source:[
                            ['product', '2000', '2001', '2002','2003', '2004', '2005','2006', '2007', '2008',
                                '2009', '2010', '2011','2012', '2013','2014', '2015','2016', '2017'],
                            barpiedataI,
                            barpiedataII,
                            barpiedataIII,
                        ]
                    }
                });
                Chart4.setOption({
                    yAxis: {
                        data: barname,
                    },
                    series: [{
                        data:barinport,
                    }, {
                        data: barexport,
                    }]
                })
            });
            Chart5.setOption({
                series:[{
                    data:[{
                        children: treedata,
                    }]
                }]
            });
        }
    });
};

var option1 = {
        legend: {
            orient: 'vertical',
            left: 'right',
            itemGap: 2,
            itemWidth: 8,
            itemHeight: 5,
            data: [],
            textStyle: {
                color: '#fff',
                fontSize: 10,
            },
        },
        //地图
        geo: {
            name: '2000',
            map: 'world',       // 与引用进来的地图js名字一致
            roam: true,        // 开启缩放平移
            //center:[115.97, 29.71],  //视角中心(随便写的位置——可用于交互定位)
            zoom: 1.15,           //当前视角的缩放比例（可用于交互定位后放大）
            nameMap: {
                //地名映射（需要就往上加即可）
                'Singapore Rep.': '新加坡',
                'Dominican Rep.': '多米尼加',
                'Palestine': '巴勒斯坦',
                'Bahamas': '巴哈马',
                'Timor-Leste': '东帝汶',
                'Afghanistan': '阿富汗',
                'Guinea-Bissau': '几内亚比绍',
                "Côte d'Ivoire": '科特迪瓦',
                'Siachen Glacier': '锡亚琴冰川',
                "Br. Indian Ocean Ter.": '英属印度洋领土',
                'Angola': '安哥拉',
                'Albania': '阿尔巴尼亚',
                'United Arab Emirates': '阿联酋',
                'Argentina': '阿根廷',
                'Armenia': '亚美尼亚',
                'French Southern and Antarctic Lands': '法属南半球和南极领地',
                'Australia': '澳大利亚',
                'Austria': '奥地利',
                'Azerbaijan': '阿塞拜疆',
                'Burundi': '布隆迪',
                'Belgium': '比利时',
                'Benin': '贝宁',
                'Burkina Faso': '布基纳法索',
                'Bangladesh': '孟加拉国',
                'Bulgaria': '保加利亚',
                'The Bahamas': '巴哈马',
                'Bosnia and Herz.': '波斯尼亚和黑塞哥维那',
                'Belarus': '白俄罗斯',
                'Belize': '伯利兹',
                'Bermuda': '百慕大',
                'Bolivia': '玻利维亚',
                'Brazil': '巴西',
                'Brunei': '文莱',
                'Bhutan': '不丹',
                'Botswana': '博茨瓦纳',
                'Central African Rep.': '中非',
                'Canada': '加拿大',
                'Switzerland': '瑞士',
                'Chile': '智利',
                'China': '中国',
                'Ivory Coast': '象牙海岸',
                'Cameroon': '喀麦隆',
                'Dem. Rep. Congo': '刚果民主共和国',
                'Congo': '刚果',
                'Colombia': '哥伦比亚',
                'Costa Rica': '哥斯达黎加',
                'Cuba': '古巴',
                'N. Cyprus': '北塞浦路斯',
                'Cyprus': '塞浦路斯',
                'Czech Rep.': '捷克',
                'Germany': '德国',
                'Djibouti': '吉布提',
                'Denmark': '丹麦',
                'Algeria': '阿尔及利亚',
                'Ecuador': '厄瓜多尔',
                'Egypt': '埃及',
                'Eritrea': '厄立特里亚',
                'Spain': '西班牙',
                'Estonia': '爱沙尼亚',
                'Ethiopia': '埃塞俄比亚',
                'Finland': '芬兰',
                'Fiji': '斐',
                'Falkland Islands': '福克兰群岛',
                'France': '法国',
                'Gabon': '加蓬',
                'United Kingdom': '英国',
                'Georgia': '格鲁吉亚',
                'Ghana': '加纳',
                'Guinea': '几内亚',
                'Gambia': '冈比亚',
                'Guinea Bissau': '几内亚比绍',
                'Eq. Guinea': '赤道几内亚',
                'Greece': '希腊',
                'Greenland': '格陵兰',
                'Guatemala': '危地马拉',
                'French Guiana': '法属圭亚那',
                'Guyana': '圭亚那',
                'Honduras': '洪都拉斯',
                'Croatia': '克罗地亚',
                'Haiti': '海地',
                'Hungary': '匈牙利',
                'Indonesia': '印度尼西亚',
                'India': '印度',
                'Ireland': '爱尔兰',
                'Iran': '伊朗',
                'Iraq': '伊拉克',
                'Iceland': '冰岛',
                'Israel': '以色列',
                'Italy': '意大利',
                'Jamaica': '牙买加',
                'Jordan': '约旦',
                'Japan': '日本',
                'Kazakhstan': '哈萨克斯坦',
                'Kenya': '肯尼亚',
                'Kyrgyzstan': '吉尔吉斯斯坦',
                'Cambodia': '柬埔寨',
                'Korea': '韩国',
                'Kosovo': '科索沃',
                'Kuwait': '科威特',
                'Lao PDR': '老挝',
                'Lebanon': '黎巴嫩',
                'Liberia': '利比里亚',
                'Libya': '利比亚',
                'Sri Lanka': '斯里兰卡',
                'Lesotho': '莱索托',
                'Lithuania': '立陶宛',
                'Luxembourg': '卢森堡',
                'Latvia': '拉脱维亚',
                'Morocco': '摩洛哥',
                'Moldova': '摩尔多瓦',
                'Madagascar': '马达加斯加',
                'Mexico': '墨西哥',
                'Macedonia': '马其顿',
                'Mali': '马里',
                'Myanmar': '缅甸',
                'Montenegro': '黑山',
                'Mongolia': '蒙古',
                'Mozambique': '莫桑比克',
                'Mauritania': '毛里塔尼亚',
                'Malawi': '马拉维',
                'Malaysia': '马来西亚',
                'Namibia': '纳米比亚',
                'New Caledonia': '新喀里多尼亚',
                'Niger': '尼日尔',
                'Nigeria': '尼日利亚',
                'Nicaragua': '尼加拉瓜',
                'Netherlands': '荷兰',
                'Norway': '挪威',
                'Nepal': '尼泊尔',
                'New Zealand': '新西兰',
                'Oman': '阿曼',
                'Pakistan': '巴基斯坦',
                'Panama': '巴拿马',
                'Peru': '秘鲁',
                'Philippines': '菲律宾',
                'Papua New Guinea': '巴布亚新几内亚',
                'Poland': '波兰',
                'Puerto Rico': '波多黎各',
                'Dem. Rep. Korea': '朝鲜',
                'Portugal': '葡萄牙',
                'Paraguay': '巴拉圭',
                'Qatar': '卡塔尔',
                'Romania': '罗马尼亚',
                'Russia': '俄罗斯',
                'Rwanda': '卢旺达',
                'W. Sahara': '西撒哈拉',
                'Saudi Arabia': '沙特阿拉伯',
                'Sudan': '苏丹',
                'S. Sudan': '南苏丹',
                'Senegal': '塞内加尔',
                'Solomon Is.': '所罗门群岛',
                'Sierra Leone': '塞拉利昂',
                'El Salvador': '萨尔瓦多',
                'Somaliland': '索马里兰',
                'Somalia': '索马里',
                'Serbia': '塞尔维亚',
                'Suriname': '苏里南',
                'Slovakia': '斯洛伐克',
                'Slovenia': '斯洛文尼亚',
                'Sweden': '瑞典',
                'Swaziland': '斯威士兰',
                'Syria': '叙利亚',
                'Chad': '乍得',
                'Togo': '多哥',
                'Thailand': '泰国',
                'Tajikistan': '塔吉克斯坦',
                'Turkmenistan': '土库曼斯坦',
                'East Timor': '东帝汶',
                'Trinidad and Tobago': '特里尼达和多巴哥',
                'Tunisia': '突尼斯',
                'Turkey': '土耳其',
                'Tanzania': '坦桑尼亚',
                'Uganda': '乌干达',
                'Ukraine': '乌克兰',
                'Uruguay': '乌拉圭',
                'United States': '美国',
                'Uzbekistan': '乌兹别克斯坦',
                'Venezuela': '委内瑞拉',
                'Vietnam': '越南',
                'Vanuatu': '瓦努阿图',
                'West Bank': '西岸',
                'Yemen': '也门',
                'South Africa': '南非',
                'Zambia': '赞比亚',
                'Zimbabwe': '津巴布韦'
            },
            itemStyle: {        // 每个区域的样式
                normal: {
                    areaColor: 'rgb(255,255,255,0.01)',
                    borderColor: '#4e5565',
                    borderWidth: 0.5
                },
                emphasis: {
                    areaColor: '#acc1c4',
                    borderColor: '#acc1c4',
                    borderWidth: 0.5
                },
            },
            selectedMode: 'single',
            label: {
                normal: {
                    textStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                    }
                },
                emphasis: {
                    color: '#fff'
                }
            },
        },
        series: [],   // 将之前处理的数据放到这里
};

var clearchart = function(){
    Chart2.clear();
    Chart4.clear();
    //Chart5.clear();
    piedata1 = [];
    pielengend1 = [];
    piedata2 = [];
    pielengend2 = [];
    piedata3 = [];

    barname = [];
    barinport = [];
    barexport = [];
    //treedata = [];

    Chart2.setOption(option2);
    Chart4.setOption(option4);
    //Chart5.setOption(option5);
};

var fanhui = function () {
    clearchart();
    $.ajax({
        type: 'get',
        url: '../json/import/import_country_'+yeartime+'.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                pielengend1.push(item.name);
                piedata1.push({name:item.name,value:item.num,nameCN:item.nameCN});
            });
            Chart2.setOption({
                title:[{
                    text:'进口总量前20国家或地区'
                }],
                legend:[{
                    data:pielengend1
                }],
                series:[{
                    data:piedata1
                }]
            })
        }
    });
    $.ajax({
        type: 'get',
        url: '../json/export/export_country_' + yeartime + '.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                pielengend2.push(item.name);
                piedata2.push({name: item.name, value: item.num, nameCN: item.nameCN});
            });
            Chart2.setOption({
                title:[{},{
                    text:'出口数量前20国家或地区'
                }],
                legend: [{}, {
                    data: pielengend2
                }],
                series: [{}, {
                    data: piedata2
                }]
            })
        }
    });
    $.ajax({
        type: 'get',
        url: '../json/global/global_trade_data.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                for (var i = 0; i < 5; i++) {
                    if(item.year === yeartime) {
                        barname.push(item.I[i][1]);
                        barinport.push(item.I[i][2]);
                        barexport.push(item.I[i][3]);
                    }
                }
                for (var i = 0; i < 5; i++) {
                    if(item.year === yeartime) {
                        barname.push(item.II[i][1]);
                        barinport.push(item.II[i][2]);
                        barexport.push(item.II[i][3]);
                    }
                }
                for (var i = 0; i < 5; i++) {
                    if(item.year === yeartime) {
                        barname.push(item.III[i][1]);
                        barinport.push(item.III[i][2]);
                        barexport.push(item.III[i][3]);
                    }
                }
                Chart4.setOption({
                    yAxis: {
                        data: barname,
                    },
                    series: [{
                        data:barinport,
                    }, {
                        data: barexport,
                    }]
                })
            });
        }
    });
};

//获取国家数据
Chart1.on('click', function (params) {
    if(params.name !== remembername && clicktime === 0 && jinchu === 'in'){
        remembername = params.name;
        clicktime = 1;

        clearchart();

        $.ajax({
            type: 'get',
            url: '../json/import/import_country_' + yeartime + '.json',//请求数据的地址
            dataType: "json",
            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    if(item.nameCN === params.name) {
                        for (var i = 0; i < Object.keys(item.I).length; i++) {
                            pielengend1.push(item.I[i][1]);
                            piedata1.push({name:item.I[i][1], value:item.I[i][3]});
                            piedata2.push({name:item.I[i][1], value:item.I[i][4]});
                            piedata3.push({name:item.I[i][1], value:item.I[i][5]});
                            barinport.push(item.I[i][3]);
                            barexport.push(item.I[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.II).length; i++) {
                            pielengend1.push(item.II[i][1]);
                            piedata1.push({name:item.II[i][1], value:item.II[i][3]});
                            piedata2.push({name:item.II[i][1], value:item.II[i][4]});
                            piedata3.push({name:item.II[i][1], value:item.II[i][5]});
                            barinport.push(item.II[i][3]);
                            barexport.push(item.II[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.III).length; i++) {
                            pielengend1.push(item.III[i][1]);
                            piedata1.push({name:item.III[i][1], value:item.III[i][3]});
                            piedata2.push({name:item.III[i][1], value:item.III[i][4]});
                            piedata3.push({name:item.III[i][1], value:item.III[i][5]});
                            barinport.push(item.III[i][3]);
                            barexport.push(item.III[i][5]);
                        }
                        /*for(var i = 0; i < 13; i++){
                            treedata.push({name:item.purpose_info[i][0], value:item.purpose_info[i][1]});
                        }*/
                    }
                });
                Chart2.setOption({
                    title:[{
                        text:'该国家进口前20的物种'
                    }],
                    legend:[{
                        data:pielengend1
                    }],
                    series:[{
                        data:piedata1,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                    }
                    }]
                });
                Chart2.setOption({
                    title:[{},{
                        text:'进口前20物种的出口数目'
                    }],
                    legend: [{}, {
                        data: pielengend1
                    }],
                    series: [{}, {
                        data: piedata2,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{},{
                        text:'进口前20物种的交易总量'
                    }],
                    series: [{}, {},{
                        data: piedata3,
                    }]
                });
                Chart4.setOption({
                    yAxis: {
                        data: pielengend1,
                    },
                    legend:{
                        data:['进口','总交易']
                    },
                    series: [{
                        name:'进口',
                        data:barinport,
                    }, {
                        name:'总交易',
                        data: barexport,
                    }]
                });
                /*(Chart5.setOption({
                    series:[{
                        data:[{
                            children: treedata,
                        }]
                    }]
                });*/
            }
        });
    }
    else if (params.name === remembername && clicktime === 1 && jinchu === 'in'){
        clicktime = 0;
        fanhui();
    }
    else if (params.name === remembername && clicktime === 0 && jinchu === 'in'){
        clicktime = 1;

        clearchart();

        $.ajax({
            type: 'get',
            url: '../json/import/import_country_' + yeartime + '.json',//请求数据的地址
            dataType: "json",
            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    if(item.nameCN === params.name) {
                        for (var i = 0; i < Object.keys(item.I).length; i++) {
                            pielengend1.push(item.I[i][1]);
                            piedata1.push({name:item.I[i][1], value:item.I[i][3]});
                            piedata2.push({name:item.I[i][1], value:item.I[i][4]});
                            piedata3.push({name:item.I[i][1], value:item.I[i][5]});
                            barinport.push(item.I[i][3]);
                            barexport.push(item.I[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.II).length; i++) {
                            pielengend1.push(item.II[i][1]);
                            piedata1.push({name:item.II[i][1], value:item.II[i][3]});
                            piedata2.push({name:item.II[i][1], value:item.II[i][4]});
                            piedata3.push({name:item.II[i][1], value:item.II[i][5]});
                            barinport.push(item.II[i][3]);
                            barexport.push(item.II[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.III).length; i++) {
                            pielengend1.push(item.III[i][1]);
                            piedata1.push({name:item.III[i][1], value:item.III[i][3]});
                            piedata2.push({name:item.III[i][1], value:item.III[i][4]});
                            piedata3.push({name:item.III[i][1], value:item.III[i][5]});
                            barinport.push(item.III[i][3]);
                            barexport.push(item.III[i][5]);
                        }
                        /*for(var i = 0; i < 13; i++){
                            treedata.push({name:item.purpose_info[i][0], value:item.purpose_info[i][1]});
                        }*/
                    }
                });
                Chart2.setOption({
                    title:[{
                        text:'该国家进口前20的物种'
                    }],
                    legend:[{
                        data:pielengend1
                    }],
                    series:[{
                        data:piedata1,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{
                        text:'进口前20物种的出口数目'
                    }],
                    legend: [{}, {
                        data: pielengend1
                    }],
                    series: [{}, {
                        data: piedata2,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{},{
                        text:'进口前20物种的交易总量'
                    }],
                    series: [{}, {},{
                        data: piedata3,
                    }]
                });
                Chart4.setOption({
                    yAxis: {
                        data: pielengend1,
                    },
                    legend:{
                        data:['进口','总交易']
                    },
                    series: [{
                        name:'进口',
                        data:barinport,
                    }, {
                        name:'总交易',
                        data: barexport,
                    }]
                });
                /*(Chart5.setOption({
                    series:[{
                        data:[{
                            children: treedata,
                        }]
                    }]
                });*/
            }
        });
    }
    else if(params.name !== remembername && clicktime === 1 && jinchu === 'in'){
        remembername = params.name;
        clicktime = 1;

        clearchart();

        $.ajax({
            type: 'get',
            url: '../json/import/import_country_' + yeartime + '.json',//请求数据的地址
            dataType: "json",
            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    if(item.nameCN === params.name) {
                        for (var i = 0; i < Object.keys(item.I).length; i++) {
                            pielengend1.push(item.I[i][1]);
                            piedata1.push({name:item.I[i][1], value:item.I[i][3]});
                            piedata2.push({name:item.I[i][1], value:item.I[i][4]});
                            piedata3.push({name:item.I[i][1], value:item.I[i][5]});
                            barinport.push(item.I[i][3]);
                            barexport.push(item.I[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.II).length; i++) {
                            pielengend1.push(item.II[i][1]);
                            piedata1.push({name:item.II[i][1], value:item.II[i][3]});
                            piedata2.push({name:item.II[i][1], value:item.II[i][4]});
                            piedata3.push({name:item.II[i][1], value:item.II[i][5]});
                            barinport.push(item.II[i][3]);
                            barexport.push(item.II[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.III).length; i++) {
                            pielengend1.push(item.III[i][1]);
                            piedata1.push({name:item.III[i][1], value:item.III[i][3]});
                            piedata2.push({name:item.III[i][1], value:item.III[i][4]});
                            piedata3.push({name:item.III[i][1], value:item.III[i][5]});
                            barinport.push(item.III[i][3]);
                            barexport.push(item.III[i][5]);
                        }
                        /*for(var i = 0; i < 13; i++){
                            treedata.push({name:item.purpose_info[i][0], value:item.purpose_info[i][1]});
                        }*/
                    }
                });
                Chart2.setOption({
                    title:[{
                        text:'该国家进口前20的物种'
                    }],
                    legend:[{
                        data:pielengend1
                    }],
                    series:[{
                        data:piedata1,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{
                        text:'进口前20物种的出口数目'
                    }],
                    legend: [{}, {
                        data: pielengend1
                    }],
                    series: [{}, {
                        data: piedata2,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{},{
                        text:'进口前20物种的交易总量'
                    }],
                    series: [{}, {},{
                        data: piedata3,
                    }]
                });
                Chart4.setOption({
                    yAxis: {
                        data: pielengend1,
                    },
                    legend:{
                        data:['进口','总交易']
                    },
                    series: [{
                        name:'进口',
                        data:barinport,
                    }, {
                        name:'总交易',
                        data: barexport,
                    }]
                });
                /*(Chart5.setOption({
                    series:[{
                        data:[{
                            children: treedata,
                        }]
                    }]
                });*/
            }
        });
    }

    else if(params.name !== remembername && clicktime === 0 && jinchu === 'ex'){
        remembername = params.name;
        clicktime = 1;

        clearchart();

        $.ajax({
            type: 'get',
            url: '../json/export/export_country_' + yeartime + '.json',//请求数据的地址
            dataType: "json",
            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    if(item.nameCN === params.name) {
                        for (var i = 0; i < Object.keys(item.I).length; i++) {
                            pielengend1.push(item.I[i][1]);
                            piedata1.push({name:item.I[i][1], value:item.I[i][3]});
                            piedata2.push({name:item.I[i][1], value:item.I[i][4]});
                            piedata3.push({name:item.I[i][1], value:item.I[i][5]});
                            barinport.push(item.I[i][3]);
                            barexport.push(item.I[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.II).length; i++) {
                            pielengend1.push(item.II[i][1]);
                            piedata1.push({name:item.II[i][1], value:item.II[i][3]});
                            piedata2.push({name:item.II[i][1], value:item.II[i][4]});
                            piedata3.push({name:item.II[i][1], value:item.II[i][5]});
                            barinport.push(item.II[i][3]);
                            barexport.push(item.II[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.III).length; i++) {
                            pielengend1.push(item.III[i][1]);
                            piedata1.push({name:item.III[i][1], value:item.III[i][3]});
                            piedata2.push({name:item.III[i][1], value:item.III[i][4]});
                            piedata3.push({name:item.III[i][1], value:item.III[i][5]});
                            barinport.push(item.III[i][3]);
                            barexport.push(item.III[i][5]);
                        }
                        /*for(var i = 0; i < 13; i++){
                            treedata.push({name:item.purpose_info[i][0], value:item.purpose_info[i][1]});
                        }*/
                    }
                });
                Chart2.setOption({
                    title:[{
                        text:'该国家出口前20的物种'
                    }],
                    legend:[{
                        data:pielengend1
                    }],
                    series:[{
                        data:piedata1,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{
                        text:'出口前20物种的出口数目'
                    }],
                    legend: [{}, {
                        data: pielengend1
                    }],
                    series: [{}, {
                        data: piedata2,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{},{
                        text:'出口前20物种的交易总量'
                    }],
                    series: [{}, {},{
                        data: piedata3,
                    }]
                });
                Chart4.setOption({
                    yAxis: {
                        data: pielengend1,
                    },
                    legend:{
                        data:['出口','总交易']
                    },
                    series: [{
                        name:'出口',
                        data:barinport,
                    }, {
                        name:'总交易',
                        data: barexport,
                    }]
                });
                /*(Chart5.setOption({
                    series:[{
                        data:[{
                            children: treedata,
                        }]
                    }]
                });*/
            }
        });
    }
    else if(params.name === remembername && clicktime === 1 && jinchu === 'ex'){
        clicktime = 0;
        fanhui();
    }
    else if (params.name === remembername && clicktime === 0 && jinchu === 'ex'){
        clicktime = 1;

        clearchart();

        $.ajax({
            type: 'get',
            url: '../json/export/export_country_' + yeartime + '.json',//请求数据的地址
            dataType: "json",
            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    if(item.nameCN === params.name) {
                        for (var i = 0; i < Object.keys(item.I).length; i++) {
                            pielengend1.push(item.I[i][1]);
                            piedata1.push({name:item.I[i][1], value:item.I[i][3]});
                            piedata2.push({name:item.I[i][1], value:item.I[i][4]});
                            piedata3.push({name:item.I[i][1], value:item.I[i][5]});
                            barinport.push(item.I[i][3]);
                            barexport.push(item.I[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.II).length; i++) {
                            pielengend1.push(item.II[i][1]);
                            piedata1.push({name:item.II[i][1], value:item.II[i][3]});
                            piedata2.push({name:item.II[i][1], value:item.II[i][4]});
                            piedata3.push({name:item.II[i][1], value:item.II[i][5]});
                            barinport.push(item.II[i][3]);
                            barexport.push(item.II[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.III).length; i++) {
                            pielengend1.push(item.III[i][1]);
                            piedata1.push({name:item.III[i][1], value:item.III[i][3]});
                            piedata2.push({name:item.III[i][1], value:item.III[i][4]});
                            piedata3.push({name:item.III[i][1], value:item.III[i][5]});
                            barinport.push(item.III[i][3]);
                            barexport.push(item.III[i][5]);
                        }
                        /*for(var i = 0; i < 13; i++){
                            treedata.push({name:item.purpose_info[i][0], value:item.purpose_info[i][1]});
                        }*/
                    }
                });
                Chart2.setOption({
                    title:[{
                        text:'该国家出口前20的物种'
                    }],
                    legend:[{
                        data:pielengend1
                    }],
                    series:[{
                        data:piedata1,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{
                        text:'出口前20物种的出口数目'
                    }],
                    legend: [{}, {
                        data: pielengend1
                    }],
                    series: [{}, {
                        data: piedata2,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{},{
                        text:'出口前20物种的交易总量'
                    }],
                    series: [{}, {},{
                        data: piedata3,
                    }]
                });
                Chart4.setOption({
                    yAxis: {
                        data: pielengend1,
                    },
                    legend:{
                        data:['出口','总交易']
                    },
                    series: [{
                        name:'出口',
                        data:barinport,
                    }, {
                        name:'总交易',
                        data: barexport,
                    }]
                });
                /*(Chart5.setOption({
                    series:[{
                        data:[{
                            children: treedata,
                        }]
                    }]
                });*/
            }
        });
    }
    else if(params.name !== remembername && clicktime === 1 && jinchu === 'in'){
        remembername = params.name;
        clicktime = 1;

        clearchart();

        $.ajax({
            type: 'get',
            url: '../json/export/export_country_' + yeartime + '.json',//请求数据的地址
            dataType: "json",
            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                $.each(result, function (index, item) {
                    if(item.nameCN === params.name) {
                        for (var i = 0; i < Object.keys(item.I).length; i++) {
                            pielengend1.push(item.I[i][1]);
                            piedata1.push({name:item.I[i][1], value:item.I[i][3]});
                            piedata2.push({name:item.I[i][1], value:item.I[i][4]});
                            piedata3.push({name:item.I[i][1], value:item.I[i][5]});
                            barinport.push(item.I[i][3]);
                            barexport.push(item.I[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.II).length; i++) {
                            pielengend1.push(item.II[i][1]);
                            piedata1.push({name:item.II[i][1], value:item.II[i][3]});
                            piedata2.push({name:item.II[i][1], value:item.II[i][4]});
                            piedata3.push({name:item.II[i][1], value:item.II[i][5]});
                            barinport.push(item.II[i][3]);
                            barexport.push(item.II[i][5]);
                        }
                        for (var i = 0; i < Object.keys(item.III).length; i++) {
                            pielengend1.push(item.III[i][1]);
                            piedata1.push({name:item.III[i][1], value:item.III[i][3]});
                            piedata2.push({name:item.III[i][1], value:item.III[i][4]});
                            piedata3.push({name:item.III[i][1], value:item.III[i][5]});
                            barinport.push(item.III[i][3]);
                            barexport.push(item.III[i][5]);
                        }
                        /*for(var i = 0; i < 13; i++){
                            treedata.push({name:item.purpose_info[i][0], value:item.purpose_info[i][1]});
                        }*/
                    }
                });
                Chart2.setOption({
                    title:[{
                        text:'该国家出口前20的物种'
                    }],
                    legend:[{
                        data:pielengend1
                    }],
                    series:[{
                        data:piedata1,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{
                        text:'出口前20物种的出口数目'
                    }],
                    legend: [{}, {
                        data: pielengend1
                    }],
                    series: [{}, {
                        data: piedata2,
                        label: {
                            normal: {
                                formatter: function(params){
                                    var str = "";
                                    str += params.name;
                                    return str;
                                },
                                show: false,
                                position: 'center'
                            }
                        }
                    }]
                });
                Chart2.setOption({
                    title:[{},{},{
                        text:'出口前20物种的交易总量'
                    }],
                    series: [{}, {},{
                        data: piedata3,
                    }]
                });
                Chart4.setOption({
                    yAxis: {
                        data: pielengend1,
                    },
                    legend:{
                        data:['出口','总交易']
                    },
                    series: [{
                        name:'出口',
                        data:barinport,
                    }, {
                        name:'总交易',
                        data: barexport,
                    }]
                });
                /*(Chart5.setOption({
                    series:[{
                        data:[{
                            children: treedata,
                        }]
                    }]
                });*/
            }
        });
    }
});
Chart1.setOption(option1);

//chart2 饼图组
//进口饼图
var option2 = {
    title:[{
        text: ['进口总量前20国家或地区'],
        textStyle: {
            color: '#fff',
            fontSize:15
        },
        x: '11%',
        y: '3%'
    }],
    legend: [{
        orient: 'vertical',
        x: '0.01%',
        y: '0%',
        itemGap: 2,
        itemWidth: 10,
        itemHeight: 5,
        textStyle: {
            color: '#fff',
            fontSize:10
        },
        data:[]
    }],
    series:[
        {
            name:'进口',
            type:'pie',
            radius: ['50%', '70%'],
            center : [ '23%' , '55%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    formatter: function(params){
                        var str = "";
                        str += params.data.nameCN;
                        return str;
                    },
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[]
        }]
};
//出口饼图
var title2 = {
    text: '出口总量前20国家或地区',
    textStyle: {
        color: '#fff',
        fontSize:15
    },
    x: '48%',
    y: '3%'
};
var legend2 = {
    orient: 'vertical',
    x: '34.5%',
    y: '0%',
    itemGap: 2,
    itemWidth: 10,
    itemHeight: 5,
    textStyle: {
        color: '#fff',
        fontSize:10
    },
    data:[]
};
var series2 = {
    name:'出口',
    type:'pie',
    radius: ['50%', '70%'],
    center : [ '58%', '55%' ],
    avoidLabelOverlap: false,
    label: {
        normal: {
            show: false,
            position: 'center',
            formatter: function(params) {
                var str = "";
                str += params.data.nameCN;
                return str;
            }
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '15',
                fontWeight: 'bold'
            }
        }
    },
    labelLine: {
        normal: {
            show: false
        }
    },
    data:[]
};
option2.title.push(title2);
option2.legend.push(legend2);
option2.series.push(series2);

//进出口饼图
var title3 = {
    text: '进出口总量前20国家',
    textStyle: {
        color: '#fff',
        fontSize:15
    },
    x: '77%',
    y: '3%'
};
var series3 = {
    name:'访问',
    type:'pie',
    radius : '85%',
    center: ['87%', '59%'],
    data:[].sort(function (a, b) { return a.value - b.value; }),
    roseType: 'radius',
    label: {
        normal: {
            show:false,
            position: 'inside'
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '20',
                fontWeight: 'bold',
                color: '#fff'
            }
        }
    },
    itemStyle: {
        normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
        }
    },
    animationType: 'scale',
    animationEasing: 'elasticOut',
    animationDelay: function (idx) {
        return Math.random() * 200;
    }
};
option2.title.push(title3);
option2.series.push(series3);
Chart2.setOption(option2);

//chart3 饼图线图组
var option3 = {
    legend: {
        textStyle: {
            color:'#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        showContent: false
    },
    dataset: {
        source: []
    },
    xAxis: {
        type: 'category',
        axisLine:{
            lineStyle:{color:'#fff'}
        }},
    yAxis: {
        type: 'log',
        gridIndex: 0,
        axisLine:{lineStyle:{color:'#fff'}
        },
        axisLabel: {
            formatter:function (value) {
                var str = "";
                if(value >= 10000){
                    str += value/10000 + "万";
                }
                else{
                    str += value;
                }
                return str;
            }
        }
        },
    grid: {top: '55%'},
    series: [
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '30%'],
            label: {
                formatter: '{b}: {@2000} ({d}%)',
            },
            encode: {
                itemName: 'product',
                value: '2000',
                tooltip: '2000'
            }
        }
    ],
};
Chart3.on('updateAxisPointer', function (event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        Chart3.setOption({
            series: {
                id: 'pie',
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                    value: dimension,
                    tooltip: dimension
                }
            }
        });
    }
});
Chart3.setOption(option3);

//chart4 柱图
var option4 ={
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        data:['交易次数', '交易总量'],
        textStyle:{
            color:'#fff'
        }
    },
    grid: {
        left: '8%',
        right: '8%',
        bottom: '8%',
        containLabel: false
    },
    xAxis : [
        {
            axisTick : {show: false},
            type : 'log',
            axisLine:{
                lineStyle:{color:'#fff'},
            },
            axisLabel:{
                formatter:function(value){
                    var str = "";
                    if(value >= 10000 && value < 10000000){
                        str += value/10000 + "万";
                    }
                    else if(value>=10000000){
                        str += value/10000000 + "千万";
                    }
                    else{
                        str += value;
                    }
                    return str;
                },
                color:'#fff',
            }
        }
    ],
    yAxis : [
        {
            show:false,
            type : 'category',
            axisTick : {show: false},
            boundaryGap : false,
            axisLine: {
                lineStyle: {color: '#fff'},
            },
            data : []
        }
    ],
    series : [
        {
            name:'交易次数',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                }
            },
            data:[]
        },
        {
            name:'交易总量',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                }
            },
            data:[]
        }
    ]
};
Chart4.setOption(option4);

//chart5 树图
var option5 = {
    name: '交易目的',
    series: [{
        type: 'treemap',
        data: [{
            children: []
        }]
    }]
};
Chart5.setOption(option5);

var import_data = function () {
    $.ajax({
        type: 'get',
        url: '../json/import/import_country_'+'2000'+'.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                pielengend1.push(item.name);
                piedata1.push({name:item.name,value:item.num,nameCN:item.nameCN});
                airname1.push(item.nameCN);
                for(var i = 0; i<Object.keys(item.import_src_info).length;i++) {
                    airdata1.push([item.nameCN, item.import_src_info[i].coord, item.coord])
                }
                [airdata1].forEach(function(item, i) {
                    pathes1.push(
                        {
                            name:item[i][0],
                            type: 'lines',
                            zlevel: 1,                    // 用于分层，z-index的效果
                            effect: {
                                show: true,               // 动效是否显示
                                period: 10,                // 特效动画时间
                                trailLength: 0.2,         // 特效尾迹的长度
                                color: '#fff',            // 特效颜色
                                symbolSize: 1             // 特效大小
                            },
                            lineStyle: {
                                normal: {                 // 正常情况下的线条样式
                                    color: colorglobal[i],
                                    width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                                    curveness: -0.2       // 线条曲度
                                }
                            },
                            data: convertData(item)    // 特效的起始、终点位置
                        },{
                            name:item[i][0],
                            type: 'lines',
                            zlevel: 2,
                            symbolSize: 10,
                            effect: {
                                show: true,
                                period: 10,
                                trailLength: 0,
                                symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
                                symbolSize: 1
                            },
                            lineStyle: {
                                normal: {
                                    color: colorglobal[i],
                                    width: 0.5,
                                    opacity: 0.6,
                                    curveness: -0.2
                                },
                                emphasis:{
                                    color: colorglobal[i],
                                    width:1,
                                    opacity: 0.7,
                                    curveness: -0.2
                                }
                            },
                            data: convertData(item)   // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
                        });
                });
                airdata1 = [];
            });
            Chart2.setOption({
                legend:[{
                    data:pielengend1
                }],
                series:[{
                    data:piedata1
                }]
            })
        }
    });
    $.ajax({
        type: 'get',
        url: '../json/export/export_country_' + '2000' + '.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                pielengend2.push(item.name);
                piedata2.push({name: item.name, value: item.num, nameCN: item.nameCN});
                airname2.push(item.nameCN);
                for(var i = 0; i<Object.keys(item.export_tgt_info).length;i++) {
                    airdata2.push([item.nameCN, item.coord,item.export_tgt_info[i].coord])
                }
                [airdata2].forEach(function(item, i) {
                    pathes2.push(
                        {
                            name:item[i][0],
                            type: 'lines',
                            zlevel: 1,                    // 用于分层，z-index的效果
                            effect: {
                                show: true,               // 动效是否显示
                                period: 10,                // 特效动画时间
                                trailLength: 0.2,         // 特效尾迹的长度
                                color: '#fff',            // 特效颜色
                                symbolSize: 1             // 特效大小
                            },
                            lineStyle: {
                                normal: {                 // 正常情况下的线条样式
                                    color: colorglobal[i],
                                    width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                                    curveness: -0.2       // 线条曲度
                                }
                            },
                            data: convertData(item)    // 特效的起始、终点位置
                        },{
                            name:item[i][0],
                            type: 'lines',
                            zlevel: 2,
                            symbolSize: 10,
                            effect: {
                                show: true,
                                period: 10,
                                trailLength: 0,
                                symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
                                symbolSize: 1
                            },
                            lineStyle: {
                                normal: {
                                    color: colorglobal[i],
                                    width: 0.5,
                                    opacity: 0.6,
                                    curveness: -0.2
                                },
                                emphasis:{
                                    color: colorglobal[i],
                                    width:1,
                                    opacity: 0.7,
                                    curveness: -0.2
                                }
                            },
                            data: convertData(item)   // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
                        });
                });
                airdata2 = [];
            });
            for(var i = 0;i < pielengend1.length; i++){
                for(var j = 0;j<pielengend2.length; j++){
                    if(pielengend1[i] === pielengend2[j]){
                        piedata3.push({name:pielengend1[i], value:piedata1[i].value+piedata2[i].value})
                    }
                }
            }
            Chart2.setOption({
                legend: [{}, {
                    data: pielengend2
                }],
                series: [{}, {
                    data: piedata2
                }]
            });
            Chart2.setOption({
                series:[{},{},{
                    data:piedata3,
                }]
            });
        }
    });
    $.ajax({
        type: 'get',
        url: '../json/global/global_trade_data.json',//请求数据的地址
        dataType: "json",
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                for (var i = 0; i < 5; i++) {
                    if(item.year === '2000') {
                        barname.push(item.I[i][1]);
                        barinport.push(item.I[i][2]);
                        barexport.push(item.I[i][3]);
                    }
                }
                for (var i = 0; i < 5; i++) {
                    if(item.year === '2000') {
                        barname.push(item.II[i][1]);
                        barinport.push(item.II[i][2]);
                        barexport.push(item.II[i][3]);
                    }
                }
                for (var i = 0; i < 5; i++) {
                    if(item.year === '2000') {
                        barname.push(item.III[i][1]);
                        barinport.push(item.III[i][2]);
                        barexport.push(item.III[i][3]);
                    }
                }
                for (var i = 0; i < 13; i++) {
                    if(item.year === '2000') {
                        treedata.push({name:item.purpose_info[i][0], value:item.purpose_info[i][1]});
                    }
                }
                barpiedataI.push(item.I_num);
                barpiedataII.push(item.II_num);
                barpiedataIII.push(item.III_num);
                Chart3.setOption({
                    dataset:{
                        source:[
                            ['product', '2000', '2001', '2002','2003', '2004', '2005','2006', '2007', '2008',
                                '2009', '2010', '2011','2012', '2013','2014', '2015','2016', '2017'],
                            barpiedataI,
                            barpiedataII,
                            barpiedataIII,
                        ]
                    }
                });
                Chart4.setOption({
                    yAxis: {
                        data: barname,
                    },
                    series: [{
                        data:barinport,
                    }, {
                        data: barexport,
                    }]
                })
            });
            Chart5.setOption({
               series:[{
                   data:[{
                       children: treedata,
                   }]
               }]
            });
        }
    });
};
import_data();

var showin = function(){
    Chart1.clear();
    Chart1.setOption(option1);
    Chart1.setOption({
        legend:{
            data:airname1,
        },
        series:pathes1,
    });
    jinchu = 'in';
};
var showex = function(){
    Chart1.setOption({
        legend:{
            data:airname2,
        },
        series:pathes2,
    });
    jinchu = 'ex';
};
var clickbutton = function(){
    var arr = document.getElementsByClassName('b2');
    for(var i = 0;i<arr.length;i++){
        arr[i].onclick = function(){
            yeartime = this.id;
            yearchangedata();
        }
    }
};
clickbutton();

