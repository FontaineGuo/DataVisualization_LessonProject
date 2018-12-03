(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('平川区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"620403","properties":{"name":"平川区","cp":[104.825208,36.728304],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@ABA@A@@@A@A@@@ABA@ABA@@@BB@BA@@@AB@A@@A@@@AB@@@BA@@@ABA@@@AB@@ADA@@D@@@@AB@@AD@D@@AA@@@@AAABCDCD@BABAAA@ABC@C@A@A@@DAB@@ACB@@A@@BCBCDABEFABIFCBABA@@@A@@ACAA@CA@BABCB@BA@ADABABABA@@@@@ADAB@BABABCBA@AD@@A@@@@AA@AA@@@C@@ACEE@AEEAAC@CAAA@@@A@A@G@A@C@@A@AA@@ACA@@@A@@@AD@B@@A@A@@BA@@@@@A@A@A@AAA@A@@@A@@@@@@@@@ABA@ABA@@@A@@AA@A@@@A@@@@@@@AB@@@BABAB@@@@@B@@@B@B@B@@@@@@@B@@@@A@A@@@A@@@@@AA@@@@@ABA@@A@@@@@@@@@A@@@@@AB@@@@@@A@@@@@@B@@@@@@A@@CA@@A@@@AB@@@@AA@@@@@@@@@AB@@@B@@A@@@@A@@@@A@@B@@AB@@@@A@@@@@@@A@@AA@@@@A@@@@@A@@BA@@@@@@@AA@@@@@@@AB@BABAB@BCBABABABAB@BAB@B@BA@AB@@@@C@A@A@@@@@@@A@@B@B@@@F@@AFAD@BA@@BC@AB@@@@@D@@A@@B@D@@BB@@@F@B@@@D@DA@@BAB@@AF@@@B@@AB@BA@@@A@@@@@A@@A@@@@A@@@@B@BA@A@CBA@@@EA@@A@A@A@A@AAC@A@@@@@AB@B@B@F@BAB@@AB@@@B@BABA@@B@B@F@@AB@D@@@BA@C@@BA@@D@@@BA@A@A@@@A@@BA@@BABA@@B@B@@AB@@ABA@@B@D@B@B@B@@@B@@@B@B@D@B@@AB@@@@AB@@C@@@ABCB@@@BAB@B@@A@@AA@A@AB@@@@A@@@@B@BAAA@AAA@AAAAAAA@A@@@A@@@@A@@A@@@@@A@@@@@C@A@@BA@@@A@AA@@C@ABA@@BAB@@ABAB@@@BA@A@A@@A@@AABA@CAF@BA@@BCBA@CBE@C@@BA@AB@HA@@BEB@BC@A@@BABA@@@@D@B@@A@GFKHIJIHGHCDEFAB@@@BAB@DA@@@C@EBA@C@CBAB@@@B@@@DBB@B@BADABCHADCDEHEFIFABA@C@K@C@A@CBCDIFIHAB@B@B@D@F@FBB@B@BBBDD@D@B@@ABA@I@C@GBA@A@A@@BABAD@BAB@@ABA@G@ABA@@@@A@A@AAEAAA@AAAAE@A@E@C@CBCBGDCBADA@@@AB@@CBC@CB@@C@I@CAA@A@I@A@EBGB@@@@AAAAAAA@C@A@CBOFEBA@A@EBCB@@CHADAB@@ABA@@@A@CDCBCDABABAB@@@BCB@@@@@@AB@@A@@BCDABEB@@ADAB@@OJCBC@CBA@A@@BA@AFAB@@AB@@C@A@GBA@C@A@CBC@A@A@A@@@CAAAAACA@@EBA@A@AACACAA@CC@AAACCA@@AACAA@AACA@EECACA@BCDABA@ABE@C@EAA@AAA@AAKGQK@AA@CAA@@@CAA@AACACAA@@@A@A@A@A@A@@AA@@@A@A@CDCD@@@BAB@B@B@BBB@D@B@D@BAD@@BFBL@BAFBB@DBB@D@@@BAB@DAD@B@B@@DL@B@@@DABCD@BA@@@CAE@@@ABG@AB@@A@A@ABA@ABABABAB@BABCDADCB@@A@@BABA@EJABAD@DAB@F@F@J@@BBD@BBBB@@@@@F@D@B@FBB@D@BA@CH@B@JADAB@BDL@F@BABIBOKICSABJFFHJHJIDABCDCDCBABA@C@C@C@IAA@ABADGLABAB@B@@AF@BAD@@EBABCBABEBABABABCD@@AF@J@B@H@HAH@BABABGDA@ABC@I@I@A@AACAAA@@AAAICK@ACGACEOEIAGAA@@AC@CEKCE@AAAMD@@GDC@@BE@A@IDA@G@A@CBC@KDABAB@@AD@B@B@B@D@@BF@D@BAB@BCDCBG@EBA@ABC@ABABCBC@EDEDABA@@B@BAB@BED@BEDEFCBA@C@ABCBC@ABCBA@ABADADABCLABA@ABA@ABCDA@ADADA@AB@@A@@@AA@@@@C@AAA@ACCAAAA@@AAA@A@@@@@A@@@@A@A@@A@@A@@@@@@@ABB@@@AB@@@@AA@@@@@@CB@@@@A@@A@A@@@@A@@@A@@@A@@AAA@AA@@@A@CA@A@@@@@AA@AB@AA@A@A@@@@A@@@@@@AAAA@@A@@BA@@@@@@A@@@@@@ABA@@@@B@@@@A@@CAAA@@@A@@B@@@@A@@@@@@B@@@@@@AAA@A@@@A@AB@@AB@@A@@@A@@@A@@A@A@@@AA@@@AA@@A@EC@@A@A@@BC@ABABADAB@@EB@@@BAF@BA@ABEDA@@BAB@BAB@BCBADA@ABADAB@@A@EA@BA@@@@@@D@B@BABA@ABC@ABA@CAAAA@A@I@A@@@@BA@@@C@E@A@@BA@@@A@A@@@A@A@@@A@@@A@@@A@@@A@ABA@@BA@A@ABA@C@CAA@EBC@@@@AC@@@@@A@@ACAA@CA@BA@@BA@@@A@ABC@C@AAC@AACAAAACA@AEAEAC@@@A@C@A@@@AA@AAAA@@@BA@ABCFABAB@@@D@B@@AB@@@B@B@D@BBDABBD@@@B@B@B@@BBBB@BB@@B@D@B@BAB@BCDAB@@@DAFADAB@BABGDA@EBA@@BABAB@@C@A@AB@@@B@@@@@BBBB@BBB@DBBB@@B@@@@B@B@B@@B@@B@@@BB@@BBDAB@BADAD@D@F@D@BBDBDBBBBBDHJF@D@HBFBD@D@D@JBDBB@DBB@B@HBBBB@@@FAD@LALADADAFAD@DAF@DAFAB@B@F@FBDBD@@AB@D@BB@@@B@B@@@B@@BBB@@@@D@B@BA@@@A@@@A@@@@@@@@@@B@@@BB@@BBBDD@DBB@BBB@B@@@F@B@@@BBBHH@B@B@FBBBDBB@B@B@@@BAD@@BDBBBBBB@B@@ABCA@@A@@B@@@B@B@FBD@BA@@BAB@@BFAFBB@@BBBBFBBDB@@B@BAF@BBDBD@@B@@@J@F@@@BAHEBAB@DAB@D@DAD@B@@@BABABAB@@@B@BDDDBB@BBBBBBBB@B@@@D@BAD@B@B@BAB@@BB@@B@B@@ADAB@B@@@B@B@B@B@@ABABAB@@ABAHADAD@@ABAHAB@BABBFABAD@@ABAB@B@@@BBB@@DBFBB@B@B@FAHAD@HAB@HAFCDAF@PCLCB@DA@@DCDA@@B@D@@@BBDDBBBDBB@@BB@@D@D@BAB@DC@@B@D@D@BBDB@BBBB@BBB@D@BA@@D@BB@@B@BBB@B@@AB@@@B@@@BB@ADAB@@@B@B@B@B@B@B@B@@@DBB@@@D@B@B@B@@BB@BA@@@@B@@BB@BBB@B@@@DA@@@@DDB@@@B@@@BA@@B@@@B@NDBBB@B@BAB@@AB@B@BBB@DBB@J@@@DBDBD@B@F@B@B@DBJ@B@F@BA@@B@B@B@DCB@@@LDDBB@D@N@B@DBB@B@BA@@DC@A@A@A@AACBA@ABC@C@ABA@ABA@@B@B@DBDBD@BBDDHHFDFBHBD@F@D@B@FCBA@A@@@AAAAACC@@@AACBA@CBCDC@@B@BA@@B@@C@ABCBEBC@A@C@A@ACCAAEGAA@@@C@A@AB@D@B@NAD@B@BBFDDDFDH@NFD@FBD@D@DAD@B@HEDABAFEBABE@A@@@C@A@A@G@C@@BM@A@@@CAC@ACAEEAAGIAACCACAAA@AAA@@@@AGO@C@A@A@ABABI@CDC@A@@@A@@ACCK@ACAAEAA@@AA@@AACACA@@AA@AA@@AA@AAGBAACA@@@ABCBCBADABCDAD@FADAH@B@DADADADADA@@D@B@@@B@DAHABAB@@@DAB@BADADAB@@@BAB@@AB@BA@@LAD@B@FB@@BAFAFC@@BBDDDBBB@@B@FG@@B@BA@@DADC@ADAHCFA@@B@@@@@FFDBB@FBB@B@@@BAFABA@ADC@@BA@@B@J@F@D@D@B@BABABA@ABC@@BA@@D@B@BAD@D@B@DAD@@@JAB@FAB@B@DCB@@ABADA@ABABC@AA@AC@@@@BA@A@@BA@A@@BBBBB@B@B@@@D@DAD@B@B@BAB@@@D@B@B@@@@@BABGBC@A@A@@@@CC@@AC@ACE@CAA@A@A@A@AB@@AB@B@BAH@FA@@P@B@DAHAB@DAD@B@BADADABADAB@B@D@F@@BDBBB@BB@@@B@@@FABCDABC@@B@B@B@DBB@@@JCBAB@@@BBB@BDBBDDHFBBHD@@B@B@B@B@@@B@BBB@@@@AB@DAB@@AB@B@B@B@B@B@@@B@B@BAB@FC@@B@B@B@B@DC@AB@@A@@B@BAB@BABC@A@AB@DC@AB@@@BB@@B@@A@@DA@@B@@@@@@@BABABA@@D@@@@@BABC@ABA@@B@@@B@B@@@BB@@@@B@@@B@@@@@@@D@@@BB@@B@@@BA@AB@B@B@@@@@@@B@@@FAB@DCDABADCDAB@@C@@@AB@@ABAF@BCB@DA@@DC@AB@B@BAHAB@DAFADCHCBAB@@@BA@@AA@AAABC@A@A@C@A@CBABCBCDE@ABC@ABCBABADCDCFCDCDCBADCBABABCBA@A@AAACEAE@MCEACBC@A@A@@@@CA@AAA@ABADADBD@B@BCF@BA@CDAD@D@FBBA@A@C@M@C@AF@@@BCBCBCBCBC@@BCFBB@B@FBF@DCLIBC@AAAA@CCAA@@BCBABCBEDABABABABA@CAAAE@A@ABCBABEAAA@C@C@CAAACCE@CCA@CAEACACEAA@CAAB@B@D@DADAB@@ABA@C@C@ABA@A@ABA@@B@@@@@BBB@B@BABABABA@@B@B@BBB@@AB@@A@A@@@ABABAB@@@B@B@@BB@@@BA@@@@BA@A@AB@@@@@DB@BDBB@BBF@DADBD@BAB@BABAD@DBBBBBBD@@BBBBDBBBFBDBDBB@B@B@BADABCBEDABABABA@ABAB@DABEBADCB@B@BADABADCDCBAFCDCDCDCDABABCBCBCBCBC@ABC@C@ABC@CACAAAE@E@CDEBA@AB@B@@A@@@A@@@AAA@C@EACAAAC@CAAACACAC@ABA@CBABABA@@DCBABB@@@B@F@BB@B@DBFBD@BBD@D@BB@AB@DABEDABABAB@FABCDA@E@AAC@CAC@CAG@A@C@E@CBC@CBA@@BC@C@C@C@CBCBA@E@@B@B@FAF@F@D@BCDCBCBA@ACAAC@CCAAAC@A@A@A@A@C@A@C@A@A@@@@A@AB@"],"encodeOffsets":[[107932,37241]]}}],"UTF8Encoding":true});}));