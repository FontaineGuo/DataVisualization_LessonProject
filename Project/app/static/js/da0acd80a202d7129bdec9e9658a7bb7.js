(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('昌邑市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"370786","properties":{"name":"昌邑市","cp":[119.403069,36.843319],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@EBAAGCAA@@@CBG@A@@AMB@BGBEAAC@AE@@B@@@BC@@DEBKF@BCBA@A@A@MABFI@@NDA@BBBKB@DE@MA@@KBDPDFJBBD@LBJBBF@@DL@@LKBO@@@CLED@DDB@DD@FB@DL@@FSH@DAN@@AHBRC@@BG@MACEAACBEDA@M@A@@RIAADC@CDE@CE@@G@A@AJA@A@C@ADC@@FO@@DGBAXJ@@FB@@F@HD@@LG@IB@DA@AE@@A@AFA@@@@BC@@DG@@FC@@@@FB@@J@H@BFB@BD@H@@FB@@AD@BTB@DBGF@HAH@FKAC@A@CE@BQHONA@@CI@C@K@@CC@@CA@@DA@@DI@C@@FI@E@@DI@A@@CQAAAKCA@@DABABC@ABCB@BAB@BADABADEB@@CBCBEBCDAB@@@B@BB@@@@B@@@@BBBB@BB@B@BBBBB@@B@@@@B@@@DF@@@BBBBB@B@@BBBBBB@@BB@BBB@@BB@B@B@@@BBDB@BBB@@BBBBBB@B@@@DB@B@@@@DB@BDDDDDH@@@@BB@BDBD@D@BBB@ABA@@B@@B@D@FBBBD@F@@@HADBD@DD@FBB@BBB@@@@BD@@@D@B@B@J@B@B@@A@@B@@AD@D@D@B@@@B@D@BBBBFBHBD@BAB@@@B@B@B@B@@@@AB@@@@@BBD@B@DABAB@@@B@B@@@B@@A@@@@@@@ADADABCFEDCBA@CBA@EDCDAB@B@DA@AAGBEBCBC@AAOIACAE@G@@E@E@A@ECEGAE@@G@C@CM@A@E@AMEC@E@G@A@GDCFC@@B@BADC@@BABI@@FEBA@BFABA@@@C@ECGBABAHA@@@@DB@BBNF@@BB@DB@D@AHC@CP@BCC@BE@@BA@E@@D@BD@BD@DAHBHCF@@@FQ@ABQ@@CE@AA@CC@@C@C@KAAC@C@ABGBIGGAA@@@AA@@@@@AB@@@ACE@BDA@OBGAA@ABCJ@@AAA@ABAFGAMBA@@@I@A@@J@D@BE@EB@@AB@@AB@BA@@BA@@B@BA@@B@@@B@@@B@B@@@B@D@BA@@@@@ABAB@DBFDFBBF@B@DFHFAB@B@JGD@BAFA@E@CBEBEF@FBBB@@@@A@@BCD@BDBHGBBFB@B@BEB@DADBBB@BA@CA@BAH@@BB@B@@AB@@ABAA@@@@BA@@@AA@EFBJBL@BE@DH@@D@D@B@D@BB@@DF@BBB@B@@@D@BBD@D@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@BB@B@@@B@BBB@B@BBB@FBB@D@@@B@B@D@@BD@B@B@B@B@@@BB@@B@BB@@BBB@@@BBBBB@@@B@@@@BBBDBB@B@@BB@@@B@@@B@B@B@D@D@B@BADBB@L@B@F@BBF@F@B@B@@@B@B@B@BBB@@@B@B@@@@@B@F@B@FBF@DBHDN@BBJ@B@B@LBH@B@B@@@B@L@FBJ@B@BAD@BCBCFCDAFCD@FAJDJBDDBDBDBHDJNBD@F@D@DDBF@DD@FBFDDHFBBBLJ@^RDBD@D@FCZaHEBADAD@D@HBH@FBDBHDFDJDLBHBL@hA|@J@F@FBHBJDLBRDXBVBP@F@D@@PADST@B@BDBBATSDC@UDAHCFCB@B@D@BBFFD@B@@@DAHAF@hALANALGHEBEBC@G@I@I@ABAD@JODI@CGGIEMMCIFKDEXG@@NGNGNCVGJGDE@CAQCK@A@CEYCG@CCAEECC@ACGEQEOACCI@ACIAAAC@C@ABADEJO@@HKBCDGBEBA@@@C@GAM@G@K@C@E@C@E@GBM@AAU@AAG@C@C@CCEGKACEIEKAAGOAA@@CGAA@AAAACACAAEIACAAEC@AA@A@C@CBA@A@A@@BA@AB@@ABA@@BA@AB@@E@@@@@AAA@A@@@A@A@@@AA@@A@A@@A@@@A@@@AB@B@@AB@BBB@@@B@BB@@B@B@@@BA@A@@@AA@@A@@A@AA@@A@AA@@A@ABA@@@A@A@@@AA@@BAB@@A@@@AAA@@A@A@@AB@@A@A@@AA@C@@BA@@BAECAAACCEAGAC@A@C@K@@@CBCBGBOBA@A@A@EBCFEBCBADGFEBCBCBA@@DAB@@@DAB@D@B@B@BAB@@@B@BCB@@ABABA@ABABA@@B@@@B@B@BBB@B@B@@AB@B@B@BA@@B@@@B@@ABA@A@A@@@@BAB@@C@@BA@A@@@A@@BA@AD@BA@@@A@@@A@A@@@A@@BADABADAB@BAB@@AAAAAC@AAAAI@EC@@A@AAA@ECA@YCE@A@CAAEDC@A@A@G@A@A@AIICEACCACA@G@G@@BEDSJCB@BA@@DA@@FEAABAHCF@@CDADC@ABA@CLG@AGAAE@C@AHBF@DABGBC@AFKDG@AF@D@B@BEFBB@BABAFOB@@GBI@AEAAA@@HMBCBCBE@@FQBEDIBGFKBGBC@CBC@@@@@AICAG@CBA@A@K@@@@BE@AB@HG@A@A@CB@AEKECA@AB@@AD@BC@E@GAAI@@C@@@C@I@C"],"encodeOffsets":[[122485,37328]]}}],"UTF8Encoding":true});}));