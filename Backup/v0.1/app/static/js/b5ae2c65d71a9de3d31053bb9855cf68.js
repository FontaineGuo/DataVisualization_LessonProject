(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('什邡市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"510682","properties":{"name":"什邡市","cp":[104.167501,31.12678],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@A@@@@@@@@A@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@"],["@@@A@@DGBA@@@@CAA@@BA@@@@@A@@A@@A@@A@@@@C@AAA@@ADCBA@@@@CE@@A@ABA@A@@@AAAAA@C@A@@A@@@A@@@@@AA@A@ABABA@A@A@A@AAABA@A@ADABA@@@AAAE@A@AA@A@CA@@@@CC@@A@C@G@C@ECCAAC@@@ABABCDADA@@B@BABADADAB@@@FCDCDCBA@A@C@ABAH@BABABABA@@AA@@@AAAC@EBCACACAE@E@KAABAB@DADABA@@@@@AA@@@A@@AAA@AAIBC@EDA@C@EAC@A@A@A@A@A@C@A@E@@@AB@@@@@@@@B@@@@@@@@BA@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@C@@@@@@@@A@@@@@@@@@A@@@@A@@@@@@@@@@@A@@@@@B@@AB@@@A@@@@@A@A@@@GBIBCBA@@@@BAB@@@BA@C@CB@@@B@@BBBB@@@BA@@@AB@@@@@@@@@@@@B@@@@B@@@@A@@@@@@@@@@@@@@@@@AB@@@@A@@@@@@@@B@@@@@BA@ABA@@@AB@@ABA@@BA@@@@@@B@@@@@@B@@@@B@@@BBDAD@@@@@BA@ABCBA@AB@@ABCBA@C@ABE@C@A@@@@B@B@@@@@@@@@@A@@@@@@B@@B@@@@@@B@@@B@B@@@B@F@B@@@@@@@@AB@@@@@A@@@@A@@@@@@@@@@@@B@B@@@B@@@@AB@@A@A@@@A@@@A@CB@@@@A@IFC@@D@D@@A@@B@@A@@@BBBBB@@BA@@@@B@@EBA@A@@@AB@@A@@@A@@@A@@@AB@@@@@B@@A@AB@@@B@@@@AB@@@@@@@@@@A@A@@@@@@@A@@@@@DD@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@A@@@@@@B@@@B@@@@B@B@@@@@@B@@@@@@@@@BA@@@@@@@A@@B@@A@@@@@@@IAA@@@@@@@@B@BB@@BDBB@@BB@@@B@DBB@@@BB@B@@@@@@@@A@@@A@@@AB@@A@AB@@A@A@@@AA@@@@@@AB@@@@@@A@A@A@@@A@@B@@B@@BB@B@@@@BB@@@@@@DBBAB@@BB@@FB@B@@CD@B@@@@@@@BB@@@@@@BAB@@@@@@@@@A@@A@@@@B@@@@@@@@@BB@@@AB@B@@BB@BCB@B@@ABBD@BDFCDEDA@CBA@@@A@@@AB@@@@@BB@@@@BA@@@@@A@@@@@@@@@@@ADA@@B@@@@@B@@@BBD@@@B@@@B@@B@@B@BCBBB@@B@BBD@B@@B@D@@A@@B@@@@A@@B@@A@@BCB@@@BA@@B@@B@@@@@@@@B@@@@@BAB@BAB@@@@A@@@@@@@@@@AA@@@@@A@A@@@@@@@A@@@A@@@@@@@A@@BAB@BA@@@@B@@@B@B@@@@AB@BABAB@@A@@@@BCB@BA@@BCB@@A@@@AA@@A@AB@@@@@BBB@B@@GF@B@@@BAB@@A@@@@@C@@@A@@BA@@@A@@@@@A@@@@@@BB@@@@@@@@@@@@@@B@@AA@@@@@@A@@@@@@B@@@@A@@A@@@@A@@BBB@@@B@@@@AB@@@@ABA@@@A@@@@@@@A@CAACEH@@@@A@@AA@@@@@@A@@@@@ACC@@A@@@A@@AA@@@@BA@A@@B@@A@CAA@A@A@@@A@@BAD@B@@@B@B@@@BB@B@@@@B@@@B@B@@@@BBBB@@@@AB@@@@A@@@@@AA@@@@A@@@@@A@@@@B@@@@B@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@A@@B@@@@@@@BF@B@@@B@@@@@B@AB@@@@A@@B@@@BA@A@@@ADA@@@A@A@AAA@@@A@AB@@EJA@ADAD@FBBBDDDBBBFAB@BCDCDAB@BCDAD@FBDDBBBDBBB@B@BADCDADABIDEBGDCBADAD@BCBCBA@CFAB@BADABADABGBABCDABAF@B@F@D@D@H@HBFBFFHFDFFFFFDFFFDFBDBD@B@B@DBBDDF@F@DADCDCBA@A@AB@@AB@BBD@B@D@BCDEFCDAB@@ABA@ABABAB@B@D@F@DEFCFCDCDAB@FADABAB@B@BBD@BBB@DBBABCFC@CBA@@@AAAAAAAAAACAC@CAC@A@ABCBCBADCDA@A@CACACCCAECEAC@C@AAG@ABC@ABE@ECA@AAA@A@A@ABEFEDEFABAB@DAD@D@BAFCBA@@BA@ABC@C@@@A@@@@AAA@@@AAACA@@@@@BABAD@B@BBB@D@B@B@B@B@@@BCDABABA@@BBB@B@D@DBDBB@D@@ADADABAD@D@D@DBBBDHJBDJHDDFFDBLHBBFF@DBHBDDDFBJ@F@F@BBBB@HDJ@D@BDFBDDHBDHFBBB@B@BCHGJCDEBAD@BBD@D@DADAFGHCDCHGDAD@D@BHDBDBF@@@BBDRFHFDFBBB@@BB@@B@@A@A@@AAA@@@BEBAB@@AAA@@B@FCBA@@BABA@@@C@@AA@A@@BABA@ADABA@@@@AC@@BABAB@@A@@AA@ADA@AAABAD@BAB@@@@@@AAA@AC@AA@@@AB@@A@@D@BA@@@CBC@@@AB@@@DB@@BBBBB@@@B@@@@A@@AA@A@@B@B@B@BBB@@@BABA@@B@B@@@B@@ADAB@@A@@@A@A@@BAD@B@HBB@B@@@@B@@AB@@AB@@BDBD@B@@@B@@@BB@B@@@B@@A@@@@BAB@@A@A@A@@D@@A@@@A@A@C@@BAB@@@F@B@DDBBB@B@@B@BB@@@BBBA@@B@@AB@@@@AB@@A@A@@@A@AB@@@BAD@@A@C@A@AAAAA@@BAB@DAB@B@DAB@B@@A@ABA@@@A@@CA@A@@@@BC@@@AAABAB@BAB@@A@@@@AAA@ACA@AA@A@AA@AEACACACAAAA@@@C@@BCBABABCBABA@@D@D@D@B@@ABA@@DABADA@@BAD@@@BABA@@D@B@BBBAB@@A@ADABADEBA@AAC@CAA@CAA@AAAA@CA@@AACAAC@@@A@A@A@AAAAA@@@A@@BA@@DCDA@ABCBC@A@C@ABABA@CBA@ABAB@@A@C@CBC@AB@@A@@AAC@A@A@@A@CBABAB@BABA@@@ACACCAA@@BE@A@A@AD@FABAB@@A@A@@B@B@BDB@B@DAB@B@@ABCBC@A@C@AA@AAAAC@CAEAAAAAAC@ACCCAAAAAAA@AACAC@AEE@A@ABEBC@A@A@E@C@ABABEBC@C@@AABABCDADABABBBA@@@A@AF@BAD@DAB@DA@ABC@A@A@AAA@ACEAC@A@ABCB@B@BAFEBC@@DABAB@BADAD@BCDCFAFAFEB@DABABA@ADAD@BAFAB@BCBABBB@D@DAD@BADAF@@@DCB@D@B@DB@@D@BAF@BAB@DABCDABADABCB@DAD@B@DAB@B@B@DABADABABAD@HEDCB@FAFADAH@BABABCBABAD@BA@@DCD@D@@@B@JEB@F@DAB@BA@AB@BA@ADADABB@@B@B@BAB@F@FCD@DAB@D@B@D@BADABADABAD@FCDAFAB@BAD@DAFCBAD@DADA@@DEBABAB@BAD@DADCFCFGBA@A@@FC@@FABAB@B@BA@AAACE@A@@BAB@@@BA@AA@AAA@A@@BAB@@A@@A@@@AA@AAC@AAA@A@A@@@@AA@E@CAC@A@@A@A@AA@@@KB@BA@@BAB@BA@@@@@AAA@A@AA@@E@C@A@A@@@AA@@@@@AAAAE@@@AB@@@B@@CDG@A@A@AA@A@C@@@@C@C@AB@AAA@A@C@@@@ADEBA@@@AAACCCC@@AA@A@@@@A@@@@@AA@@@AA@A@A@A@A@C@@@A@@BAAA@A@A@CE@A@@@A@@AAAA@A@A@@@@BA@@@@AAAA@AA@A@@@AB@@A@@AAA@A@@CBC@AA@@"]],"encodeOffsets":[[[106606,31776]],[[106696,31831]]]}}],"UTF8Encoding":true});}));