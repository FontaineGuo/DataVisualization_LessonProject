(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('张家川回族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"620525","properties":{"name":"张家川回族自治县","cp":[106.204517,34.988037],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACAE@AA@EB@@@@@B@@@@@B@B@@ABA@CBABABA@A@A@@@@@@B@@@BAF@D@B@@@B@BBB@B@@@BA@CD@@@@@DBF@B@@@D@B@@@B@B@B@BADABEBABABABABA@AD@@@B@B@B@B@@@B@BAB@@AB@@AB@@@DB@@BB@@BB@@@BDBBBBBB@B@B@BA@@@A@@@A@A@AACAC@A@@@@@BB@@DD@B@B@B@@@BAB@B@B@B@BAB@BAB@B@@@BCB@B@B@B@@ADAF@B@DA@ABC@@@A@AACCA@@@@@CBABADAB@@C@A@@@A@AB@@AB@@AB@@@@ABC@AB@@A@@AA@@A@A@@@@EDEBA@ABAB@@A@A@@@ABADED@@@B@@@B@@B@BBDBD@D@DBD@@@B@BB@@B@B@@@BB@@@BA@A@@B@@@@@FAB@BAB@@A@A@A@A@@@C@A@@AA@A@A@@@@B@@A@@@A@A@A@A@C@@@C@CAC@AA@@A@CBE@A@@@A@@A@@A@@A@CBA@A@@@@@A@AAAA@A@ABA@@@CA@@A@A@A@CAA@C@AAAAAA@@A@@@ABA@@@CDCB@BA@@@EBE@ABA@C@A@A@A@C@EAAA@@ABA@CBA@A@ABA@CB@BAAA@A@@@A@A@ABA@A@A@A@ABAB@@A@@@@@A@@@@CA@@@A@@@C@A@A@@@A@A@C@@@C@EAA@@@ADAD@@ABA@@BA@@BA@CB@@CB@BA@@BA@A@A@ABA@@BA@@BC@A@ABC@@B@@AB@BA@@@C@@@ABABA@CD@@@@@B@@@@DD@@B@AB@@A@ABA@A@@AA@AA@@A@ABC@AB@@A@A@A@ABEB@ACC@AA@A@AAC@A@@@ABA@@BA@CDA@A@@@A@A@C@AA@@A@@A@@@AA@A@A@@AA@@@A@A@@BA@@@@D@@BB@BEF@@@B@B@BAD@@ACA@AAA@A@@@ABA@A@@BA@@B@@BD@H@@AB@D@@@B@@@@BD@@DFBF@B@@@B@BA@@B@BA@@B@BADADABAB@DAB@@A@@@A@A@CAAAA@C@AAA@AAAACA@@A@@@A@@DABCDABABA@A@A@A@@@@@AB@@A@@@A@A@@@AAAAAA@@@@@ABA@A@A@@AA@@B@@AB@B@@BBAB@@@B@@@DBD@BB@@B@DAD@BABC@@@C@ABA@AA@@@EA@@@@@@AA@C@A@A@@@AA@AAAAC@A@C@A@E@@BC@@@A@@@@@@A@C@@@CAA@@A@AA@@@@@ABA@@AACC@AA@A@A@@@AAA@@@A@AB@@A@@AAA@@C@C@AAA@CB@@ADAFAD@@ADA@A@@B@@AB@@@B@B@D@BBBAB@B@D@B@@A@@@C@@BA@@B@@A@@@@AAAAACAA@AA@A@A@AA@@@@A@@A@ABCBA@@@CC@@A@AA@BC@@@CDA@@@CA@@CAAAAACAA@A@A@C@C@CAA@@@AA@@@@@ACA@@C@A@@@ABA@A@A@AAA@@@@@CB@BA@@@A@@@AAAAAACAAAAAA@@@A@A@@@CBAB@@A@@@CA@A@@@C@C@@@@@@A@ABA@CBABA@@@@@@D@@@B@D@B@@@B@@@@AB@@@@A@@A@@A@@@@@@BB@ABB@@BA@@@A@A@A@A@@@@@@BAB@@@BB@@@@BBB@B@FAD@B@@@B@@BB@B@BA@@BB@@@D@BBD@@BB@@@B@@@D@DA@@DCB@BBB@B@@@BAD@BB@@B@B@@@B@@@BB@@@B@B@@@B@@@@BB@@AB@@@@@BB@@B@@@B@B@@BB@B@@CD@@@BBBB@@@@B@@@@@BA@B@@B@@A@AAA@AAABC@C@A@A@C@A@C@C@A@@@A@@@A@A@A@AAA@@AAAA@@BA@@@@@@@@A@A@@A@A@A@@@AA@@A@@@AB@@@@ADA@@B@@@@@BB@@DB@@B@D@HDHDB@D@B@B@@@@@BB@BB@@@DBDABBB@@@BB@BDB@@@@B@@A@G@A@C@@AAAA@A@@DA@@@CA@@@B@@@B@@AB@@AACAGA@AA@A@A@@@@@BA@@@@@@AAA@@@A@@B@@@B@@@BA@ABEB@B@@@@@B@@@BA@CBB@F@@@B@@@@B@B@@@BA@@@@BAAE@A@@@A@ABA@@BAB@B@@AB@BBB@BB@AD@@@DAD@DABABA@@B@B@BA@AD@BAB@BAD@@@B@@CAC@A@A@ABCD@@A@A@A@@@AD@@A@@A@@AE@AAAAAAAA@@@@BAB@BABADAB@F@@AB@@@@BD@@@@@B@@A@AAA@A@@BA@@B@@@B@@DDED@@@B@@@@@BBB@@B@@@DCB@B@@@@@B@B@B@@@@@BB@@B@@BA@@B@@@@AD@B@@@B@@@BA@@@C@ABEAA@A@A@ABA@C@@BA@@@A@A@C@C@A@AA@A@AA@BCA@@A@@A@@@@BAD@BAB@BAB@BADCF@@ABA@ABA@@@A@CBCBA@CB@@@@EA@@CA@@@@@@A@CBA@C@@BAB@@@BFF@B@@@B@B@@CBCB@BA@@@B@DBBBBB@@@BA@A@A@@BA@@BB@@BB@@@@B@@@@@BB@@B@@@@AB@@@@@@@@BB@@@BABCDAB@@@B@@A@@BA@A@@@G@E@@@C@E@A@ABA@A@A@CB@@A@@AA@@A@@AA@AA@@AAA@@AAAA@AAC@@@B@D@@@@@B@B@@@@@B@@B@@@@B@@@@@@@B@B@@@@@@A@@B@@@@@@@B@@@@A@@B@@@@@@A@@B@@@@AB@@@@AB@@BBDF@@@B@@@@@B@F@D@D@B@B@B@DAD@D@B@@A@@B@@@B@@@@BBDAH@B@@A@@BB@@BBB@B@@@@@@AB@@AJ@B@@@@@HDD@D@B@@@B@BA@@B@@B@@@@@B@@BB@BBB@@@BBBBD@BDB@BFBHFB@B@@B@@@BA@@B@@@@@B@@B@BCB@B@@@@@@BDDBBB@@BBAB@@@B@B@DB@BBAD@@@BA@AB@@A@C@CBA@@B@@@BCB@BABAD@@AD@@@B@@AB@@@B@@A@A@A@A@@@@B@@@DB@@B@@@B@B@@@B@@@B@@A@C@AAA@A@@A@@@@@@A@@@AAA@@@A@@A@@@AAA@@AA@@@@@AB@@A@@AA@@@AAA@@@AC@A@A@A@@B@@BB@D@FBFDBB@BB@ABB@@@@@B@@ABA@AB@B@B@@B@@@@@BA@@BB@D@B@B@B@B@B@D@B@BBBB@BB@@@B@@B@@@@@BBB@BB@BBB@DBBBBB@@BDBBFB@@DBB@FFB@DD@BBB@@BBB@BB@B@@@B@@BBBB@BDBB@BBBB@ABA@@BA@@B@DAH@BABADAHAB@DA@@B@BA@@B@B@FBB@B@B@DBB@@BD@DBDBDBD@B@FBD@BBB@B@DBDBDD@@DBLFFDB@HBFBD@@@B@@BB@AB@@@BABA@A@BD@@@@@D@B@BB@JFDBFA@@@@@A@A@@BCA@BCAA@AACAA@@AA@A@ABAB@BABAB@B@@ABE@AB@BADG@@B@@@B@@@B@B@BBD@BB@@@B@@AB@DAB@D@@@BAD@@@B@@@BB@@DBB@BBBD@DD@DBBAD@@BBBBB@BBB@BBBB@@BBBB@B@B@BBD@B@DB@@D@B@BBB@@B@B@@@B@DCDAD@D@B@FEB@D@BAB@@@B@B@B@B@@@BABCDED@BAB@BDBBB@BABAB@@BB@BB@@BBD@@@B@@B@@F@D@D@FDB@@@D@B@@BB@BBD@@@BB@@DD@@FD@@@B@B@B@@@@FB@AB@@@BA@@B@@@DBB@B@BABA@@B@BBBBBBB@@B@BBB@@DABAB@B@DBBBB@@@@@@A@@B@BCBAB@@A@A@@@AB@DGDCBADAHAD@B@@@B@@A@@DAB@BABABAB@BADABA@AB@@C@@@@@A@C@G@A@CBCBA@@D@BBB@@@F@B@BBB@@ABC@@@@@AA@@@AA@@@@@A@@@ABA@A@AAA@ACE@ABCBABA@@@@BD@@B@B@B@@B@@BBD@DBDB@BB@B@@@B@DAB@@@B@DBB@@B@B@@B@DBBBB@@B@B@@DB@BDB@@BBB@@AB@B@@@B@@@@@@B@@@@DB@@B@BB@@BBB@@A@@BAB@@@B@BBB@B@B@BDB@@BBB@@B@@@BABA@@@@BBB@B@DAB@@A@A@@@A@AAA@@@A@ABA@@BA@@@AAA@A@A@AAA@@@ABC@ADEBA@C@AB@@@@@BA@@@A@A@@@AB@D@@@@@AAG@A@C@@A@@AA@A@AAAA@@@A@@@BABAFG@@@A@A@@BA@@@@@@@C@A@@@A@A@@@@BA@@@@D@@@B@@@@@D@@AB@D@D@B@HAD@FA@@@@@@AA@AGG@AAA@@AA@@AAA@AA@@A@@AA@@@A@@AA@@AAA@C@@AA@AAA@A@C@A@A@@@A@@B@D@@@BABABA@A@A@A@@B@D@@@BA@@B@D@B@@@@A@A@A@AAA@A@A@@B@@@BBBAB@B@@A@ABA@A@ABABA@@BABABAB@F@B@@@B@BADA@@B@FBBBB@B@BBD@BBB@BBB@B@B@BB@@B@D@@AD@D@B@@@BAB@BABAD@B@DAB@DBFBBB@@B@@@BBB@BBBB@@B@B@@BB@@@@B@@BABAD@@ABA@@BAB@BAB@B@BA@@BA@AB@@@B@@@BABA@@@AB@@A@@BA@ABA@C@@B@@@@@B@@A@@B@@AD@B@BAB@@@@@BABADCB@B@B@B@B@BAAA@AACAEAE@@@@@@@@@@@A@@@@@@@@@@@@@AB@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@A@@A@@@@@@@@@@@@@A@AB@@@@@@@@A@@@@BAB@@@@@@@@AB@@@@@@@@@B@@@@@BA@@B@B@@@@@@@AA@A@AA@@A@@@@@@@@@A@@A@@@@AA@@@A@@A@@@@A@@A@@A@A@@@A@@@A@@A@@@@C@@@A@@@A@@@@@A@@@@@@A@@@@A@@AA@AA@@@@@@@@@AAA@@@@@@@A@@A@@A@@@@@@BA@@@A@@BA@@BA@@@@@@@@@AB@@A@@@AB@@@@AB@BA@@@@@@@A@@@@@A@@@@@@@A@@@@@A@A@@B@@A@@@@@@@A@@B@@A@@@AB@@@@@BI@A@C@G@E@AAKHG@AFEHCNKBGBCBCBEBE@ABG@IBIBIBGDEFEBCFGHCHEHAFCHCJCFCDCDEDMAG@@EIAK@IBAA@C@A@A@@A@ABA@A@CBCBCBA@A@C@AAAA@BADADAB@D@@@HE@E@@BC@A@@@A@AAEBCHCD@BADCDADC@A@C@@@GBA@A@AAAAAAEAA@C@@AAAACACAA@ECCAC@ABCBE@EC@@IC@AB@DEDC@ICACAAACACCI@G@I@E@K@I@IBE@G@CCEA"],"encodeOffsets":[[109057,35578]]}}],"UTF8Encoding":true});}));