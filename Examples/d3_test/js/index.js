var width = 500,
height = 250,
margin = {left:50, top:30, right:20, bottom:20},
g_width = width - margin.left - margin.right,
g_height = height - margin.top - margin.bottom;
//svg
var svg = d3.select("#container")   //选择container容器
.append("svg")  //添加svg元素
//定义宽高
.attr("width",width)    
.attr("height",height);

var g = d3.select("svg")
.append("g")
.attr("transform","translate("+margin.left+","+margin.top+")");//g元素偏移

//数据
var data = [1, 2, 4, 8, 3, 2, 5];

// 缩放函数，X轴线性缩放
var scale_x = d3.scale.linear()
.domain([0,data.length-1])  // 输入范围
.range([0,g_width]);    //输出范围
//Y轴缩放函数
var scale_y = d3.scale.linear()
.domain([0,d3.max(data)])
.range([g_height,0]);//倒着写是为了让纵坐标在显示的时候是从下往上增大的（因为浏览器的左边原点在左上而数学习惯是在左下）  

//绘制函数，line_generator是我们指定的绘制函数
var line_generator = d3.svg.line()
.x(function(d,i) { return scale_x(i);})//X轴的点用数据的下标来表示
.y(function(d) { return scale_y(d);})
.interpolate("cardinal");//指定拟合方式，如果没有它，图是折线形式的，有了它就很圆润了

//添加path路径，就可以绘图啦
d3.select("g")
.append("path")
.attr("d",line_generator(data));

//绘制X轴和Y轴
var x_axis = d3.svg.axis().scale(scale_x),
y_axis = d3.svg.axis().scale(scale_y).orient("left");   //orient("left")确定左边方向

g.append("g")
.call(x_axis)
.attr("transform","translate(0,"+g_height+")"); //偏移

g.append("g")
.call(y_axis)
//添加文字元素
.append("text")
.text("Price($)")
.attr("transform","rotate(-90)")    //Y轴旋转-90°
.attr("text-anchor","end")
.attr("dy","1em");
