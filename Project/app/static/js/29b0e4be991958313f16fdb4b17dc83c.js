(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('广河县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"622924","properties":{"name":"广河县","cp":[103.575834,35.488051],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AA@AAACA@AAAACCA@AAA@AACA@@AA@@AAC@AA@@CAC@@AA@A@@AA@AA@@@AA@A@@A@A@A@AA@@@@AA@@@A@@@@AA@@CAA@EA@B@@@B@BBFBB@BA@@BA@A@A@ABA@@B@@@D@@@@@BABB@@@@@@BAB@D@@BB@B@@@B@@@@@@AB@@ABB@ABBBAB@B@B@@@BABABAB@@A@AB@B@@@@@BAB@@@B@@@@@B@@@BBB@D@B@@@B@D@B@D@B@B@@BD@FADBB@B@B@B@@BBB@F@B@@@D@@@B@@@@BA@@B@B@@@@BBB@@@@BBDBF@HBF@B@@@BBD@D@@BD@JBFB@BDBFBD@BBB@BAB@BAB@BABBD@B@BA@@@GDEBABCB@@A@A@IGA@EAA@@@A@@@@B@B@BAF@DABAFA@@BEB@@@BA@BBAB@B@B@B@@@B@@@AKECCA@@@AB@@@B@@AB@@@@@@BD@B@@@B@@@B@@@B@B@@@BBB@BBB@B@B@@BB@@@@@@@B@@@B@@@B@@@@@B@@AB@@A@@B@@@@@B@@@B@B@B@@@@@@@B@@@@@@B@@@@B@@BB@@@@@B@BBB@B@B@@@@@B@@@@B@@B@D@@@@@BBB@@@BBB@@@B@@@@@BA@@@A@@@CA@@A@@@@@A@@@@@@@AB@@@@A@@@CB@@A@@@G@@AC@A@@@A@@B@@AB@@BB@@B@BBFAD@BA@@BBBB@B@@BBBBB@@@BAB@BA@@B@@@DB@@B@@AB@@@B@B@@@D@@A@@@@D@B@BB@@@@HA@@@@B@@B@@B@@@B@@@BA@@B@BAB@@B@@@@B@B@@@BAB@@@FB@@@B@@@D@DBB@B@@DB@@BD@BB@@@DF@DB@@BB@B@B@DAB@B@BBB@@@@BB@@B@@CB@BABAB@B@B@B@D@BAF@@AB@@ABA@@@@@AB@@A@@@AB@@@@AB@@A@@B@@@@@B@@@@B@BB@@@@B@BB@@B@D@B@BAB@B@HBFBB@B@@@@D@DBD@B@ABAB@@@@B@BB@@@B@@@BA@@BB@@AB@@@@ADA@@D@@@BB@B@B@@BB@@CBABABABA@AD@@@D@HDDBB@B@F@D@FAD@F@DBB@D@D@B@B@BAD@B@FABA@@B@DEBAB@@@B@@@B@HDD@B@DAB@@@BABA@@BABAFA@AB@B@H@FBB@@@B@@B@DBB@F@B@BB@@BDB@BB@@BB@DAB@B@FC@AB@@@@@BDB@B@DBB@BB@AB@B@B@B@BB@BB@DBDB@@B@BAD@@@B@D@BBBBB@@@BA@@B@DB@@B@B@DD@@@@B@D@@@B@@@B@@BB@@B@B@@@@BBB@D@@@B@@B@@BD@D@B@B@@B@B@B@@@B@@@D@@@@@@A@CA@@AB@@@BAB@@AB@@@B@@@@@BBBDB@B@B@@@B@@@@@BB@@BB@@D@D@B@@@BB@B@@BB@BB@@BB@B@@@@BAD@B@B@BBB@@B@@@@@BADA@@@@B@@@B@@ABABABABA@@@@BAB@@@BB@@B@@A@@B@@B@@@@@D@B@@@@@@B@@@B@DAB@@@HBB@B@@@@@@@@B@@@B@@BB@@@@B@DA@@B@B@@@BB@@@@@B@B@B@B@D@@@@BB@B@@AB@BAB@B@@BB@BFH@@@@@@@ABC@ABC@C@ADC@@B@B@BA@@BBB@@@@A@@@A@AB@@@B@@BB@@B@@B@@AB@@@@B@BB@@@D@BBB@HF@@BBD@DBDBBB@@BB@@@@B@@A@@@A@@@@B@D@@@NAD@FADAB@@BB@FD@BB@@@A@@@A@ABA@@@CBA@@BA@@@BB@@HCB@D@@@BB@@@@ABAB@B@BBD@B@BAB@B@B@BAF@DA@@B@@CBCBAB@@@F@F@B@DBB@@@BA@ABA@@@@@AF@D@F@@DFBDBBBB@@BB@@@@BBB@@B@@BB@BBDB@DDBBDBBBB@@BBD@@BBB@BBBBBB@@BBBBBB@B@BBBBBBDBD@@B@@@F@@@DB@BBDBAB@BABABCB@@ABA@ABABABAB@B@D@D@D@B@BADA@ADC@ADCDA@ABABA@ABA@C@A@ABCB@BA@AB@BA@@BABCBE@E@@BC@ABCBI@A@A@C@A@C@A@ABABA@AB@@A@A@@AAA@@A@@@A@@@ABAB@BA@@BADC@ABA@A@A@CBABABABABC@AB@BCDABEDEBA@A@ABA@AB@B@B@D@BBBABAB@FABCDE@A@@@ADEJY@CBA@AFABABA@ABCBCBA@AFAB@@@B@B@BB@@BD@B@BB@@@B@F@HAFA@@@@@A@@@AAAA@CCAAAA@A@AAA@AAA@@@A@ABA@@@AA@@@@A@CBA@@@@A@@@AA@@A@@@@A@@@@@AB@@A@@AA@@@@@BABA@@@A@@@@A@@A@AAA@CC@@C@AAA@@A@@@AAA@@A@AAAA@@CC@@AC@@AA@A@A@@@AAC@@@AAA@A@C@AAA@ACC@AA@AC@AA@AA@@A@@@C@C@@@A@ABA@C@A@A@AACAA@@@AA@AAA@@C@@@@AAAAACAA@A@AAA@@@AAAB@@A@@@A@AB@@A@ABA@A@@B@@A@A@A@A@EA@@AAA@AC@@@@A@@@A@A@@B@@ABADA@A@@BA@@@@B@@AB@BB@@BB@@@@B@@A@@@AB@@@@@AA@A@A@@@ABA@CD@BADA@@@AA@@ABABAB@@@B@@AB@AA@AA@@A@A@ABC@C@IDA@@@EAAA@@A@A@A@C@CAA@A@A@CBA@A@CBA@A@A@A@AACAECC@ABC@C@CBC@C@A@A@@@AA@@C@E@EAA@A@I@E@AAC@A@C@ECA@A@A@A@A@@@A@A@C@A@A@ABC@AAC@CAC@AAA@@@EAGAC@CAA@AAAAA@AAEC@@A@CAA@@AA@@@C@A@@AC@CA@@CAA@AAA@GACACAA@A@@@CACACACAC@AAC@A@CCAAEA@@CA@@A@G@A@IC@@CAEAA@C@CCEAAACCA@A@AAAAA@CACACC@@CCCCAA@@AAA@@@AA@@AA@AAAAAAA@AA@ACAAGCAACC@@A@A@@@A@A@A@@AA@@@@C@@@ACA@@AA@A@CAAACA@@@A@C@@AA@CAAACCCC@AACAA@@AA@@CCCC@@CAA@A@AA@AAAACAAAAAAAACAC@AAA@AAAA@AAA@C@C@CAA@AA@CGAA@AAA@AEE@AAA"],"encodeOffsets":[[105945,36165]]}}],"UTF8Encoding":true});}));