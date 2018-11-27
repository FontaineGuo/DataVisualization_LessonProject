(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('开远市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532502","properties":{"name":"开远市","cp":[103.266624,23.714523],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@C@@E@E@@@A@ACAACGAECG@CBKBGBCDE@CBE@CB@@GJAH@D@HDLDNTVDDBB@BABCBQFIFGFEBABE@QAI@EACAAGAGCG@@A@ACCUCCAAA@CB@@@BBB@BAB@@@B@@@@@@BB@@BB@@@BA@@BA@ABAAA@@@@@C@@@A@A@@BA@A@@BA@@B@BA@AB@B@@@BA@@@AB@@A@AB@@A@@BA@A@BJ@HADGFC@C@ABCBABE@GAA@EAC@E@EFCBCDCFADBDDDBB@DBBDB@BCBABADABBJ@D@BAD@D@BABADBF@BBBD@DBFDDDDF@J@DCF@BBDBBBDDBD@B@@B@@CBCBEBCBADAD@F@@C@CBC@CB@BABA@E@E@AD@B@HBH@D@FAB@BAD@BBD@BBDDDBDDDBBD@BF@FAFAHEJCDABEFA@ADCFCDCHABADCBABC@CBABAB@B@@BB@@FFB@BB@DBDBDBB@B@F@FADCDAD@F@DBDD@D@DBBBHHFJFDFFFHBHBH@F@HBDBDBDBD@@@BB@H@D@B@DABBB@D@BABCD@BD@BBDBB@DBFDBDBBB@BB@B@BB@B@BBDBBBBBBDBB@D@BAB@BAD@@@BBB@BAB@B@BBFFBBDDBBHDDFHDD@DBD@FABADBBBDBH@FHBA@ABCBA@A@ABC@ABC@AAAAAAA@@DABEDIDKBI@G@UBMDGFEFAHAH@H@PD@@hHHBDFBFDFJFPBLBDDDHBHDDDBHBDBDBBBDDDBB@BA@CBEBCBA@CBA@GB@B@@ABA@AB@BAD@DAB@H@JAFAB@B@D@B@@@B@BB@@B@@@B@@@B@@@B@B@BAD@@@BB@@B@B@BA@@B@@@@A@@D@B@@AB@@AB@B@DCBA@@B@B@@@B@@@B@DAB@@@B@@@@@BA@@@A@@B@B@@@B@@@BBDA@@B@@@@A@@@@FA@@B@@@BB@@B@@B@@DD@@@@@B@DA@@B@@B@@B@B@BDFBBBBFDB@@@@B@@@@@B@@BB@@B@B@B@@@DBBBB@B@B@B@B@B@@@@@BBBB@@B@F@B@LDB@DDB@DBB@DDDBB@FBB@@BDDBD@@B@@@@BDD@@@@@B@@BB@@B@@@@@B@@@B@@@@@B@B@B@@@B@@@B@BA@@B@@@DAB@BB@@D@B@@@FBFDDBB@@BBB@B@BBB@BDB@@B@@@@@@@B@@@B@@A@@B@@@@@B@@@B@B@@@B@B@B@@AB@FEBABAB@@ABABA@@BABCDGB@@AD@BAB@@@@@BB@@@@@@DBB@B@@AD@@@D@B@B@BBB@B@@@B@@A@@@@DA@@@@B@BAD@BADAB@@A@ABA@@B@FABA@@B@D@BBB@B@@AB@@@@@BA@@D@D@@@B@@@DAB@DAD@@AB@@@BAB@@BB@BB@@B@B@B@D@BAB@@BB@@@@@@@B@D@FBDBDB@@B@@B@@D@BBBBBBDBBB@@BBDDB@BD@@DDB@BBF@B@B@D@D@B@D@B@B@@BB@@@B@B@B@B@@BBB@BBBDDBBD@DBB@BBB@H@BBB@B@B@@@@B@@BD@@BB@B@@BBA@@D@D@B@D@BABADCFADAB@B@@@B@B@D@@@@@B@B@@@BAD@B@BAB@B@B@@@@BB@BBB@BB@@BB@@BBBB@BBBDB@BBBBB@B@@BBD@B@B@DA@@@@@AB@@@B@BBD@@BH@BB@B@B@@D@BBBBD@D@B@B@@BDB@@@@B@B@@A@@B@BF@BBREJAHCFCHGHIHCDCFCJKDC@@BAD@DBLHHBDCFGHI@I[QBCDE@@DCHEFAFCDCBC@CCGACACBCFABABACAECMEECEBCA@EAEAAECEAO@KAGCCEBCDEBG@E@GAEGGCGEGAK@@AC@ECAABABC@GEAGBCB@H@F@FBBACEEG@C@E@GAGAGCCAE@K@KBGAI@GEICEEEEEGEHIFEDCBBJDBCCICEJGBMDIBAACCCAA@CFCDABE@CACACCC@EDADGE@E@@G@C@CBCBCFEHCFADCAIBE@@BCBGEIEGAAIKAE@GACCC@ASQGKCG@GCEEGQI@AAGECAAI@GCGACAM@CACCAADGDCDGBIAI@QBIDEVKTMJEDABABE@E@@CBC@@@A@EEE@C@CFEBCAEGGKAAAAECCBEBADABCDADABADCBEBEBCDABE@CBCDAAE@CFADCDCDGF@BCBEDGDEBC@EAGAABADABC@CACAC@CBGFIDA@CBC@E@C@C@I@E@IBCBEBCDCBCFA@CBCFEBGDEBCBC@EBG@CBCBI@E@C@E@C@G@EBC@CAEBCBA@ABGBG@CAGCEGCA@@AAAAEAEB@@IGCEAAAAEAGAQCGAGAACE@E@C@C@AAGACAEB@A@@A@@B@@@@@@A@AB@@@BBB@@@@@B@@@B@@@@B@@@A@@@@@@@@@A@@@A@@@@@A@@@@A@@@@@@@@@@AB@@@@@@A@A@@@@@A@@@@@@@@@@@@@@@A@@E@EACAACAC@CBCBCBC@A@A@CBCD@BCDABGDA@CBCBG@CAEAGDEFBB@B@B@BADCDCDABA@E@GACBABEDCBE@CAGAA@C@AB"],"encodeOffsets":[[105720,24136]]}}],"UTF8Encoding":true});}));