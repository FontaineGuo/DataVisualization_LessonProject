(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('石鼓区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430407","properties":{"name":"石鼓区","cp":[112.597992,26.943755],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@AAA@@@C@GA@@C@AH@@@J@@@@BD@B@B@@@@BDBDA@ABA@@@ABCD@@CBA@C@@@G@A@A@A@C@@@ABEBGFEDEDA@@D@@ADC@EFKLCFEFINGLHFBD@FHDDB@DCHK@CBAD@JAB@BCDA@EBCDAD@BDHLBB@F@B@F@DAF@D@BBD@J@B@DADDBD@DFFFDFDB@BBD@B@B@FABABAB@BAFCD@FABBBBBB@@@B@BADAFBB@B@@DDFBF@@@B@B@D@B@@@B@BA@A@@@@AACAAA@AB@BAF@DADCBADBD@D@B@B@@@B@BBBBB@BABC@AB@B@@BBBB@BB@@BDBBF@BBBD@BB@B@B@HA@AAC@Q@CBE@@BA@@@@@A@@@@@@@@@@@@@A@@@@B@@@@A@@@A@A@AB@@C@@@A@A@@BA@A@@@A@@@A@@@A@@BA@A@A@A@ABA@@@A@@BA@A@@@A@@@A@@@AB@@A@@@@@A@A@@@@@@@A@A@A@@@@@@BA@A@A@@@A@@@A@A@@@A@@@@BA@@@@@@@@@A@@@@@A@@@@AA@@@A@A@@@A@A@@AA@@@A@@AC@@AA@AA@@@@AAA@@@@AAA@@A@@AAAAAAAAAACAAAAA@@@@@AA@@AA@AA@@@@AA@@@AA@CC@@@@AAA@@AA@@AA@@@A@AA@@@@A@AAAA@@@@A@@@@@AA@@A@@@AA@@@@A@@@AA@@A@A@@AA@@AA@@@A@@A@@AAA@@AACA@@C@A@@@@@A@@@A@A@@@@@A@C@@@@@A@@@A@@@@@A@@C@@@@@@@C@@@"],"encodeOffsets":[[115316,27543]]}}],"UTF8Encoding":true});}));