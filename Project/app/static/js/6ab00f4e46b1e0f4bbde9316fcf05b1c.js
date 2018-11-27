(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('二道区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"220105","properties":{"name":"二道区","cp":[125.374327,43.865577],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@D@B@BAF@FA@@F@@BB@D@B@BA@@@@@E@ABAAAFCACBDB@@EAA@@B@BBBFBBBB@BADDB@@@@BB@@BBBFLCBB@B@BB@BB@HDB@BBB@BBB@DBB@@B@B@BB@@@B@B@B@@AB@BABAB@BA@@@A@@AAAAB@D@DAF@BABBDBBBBA@@DAB@@AB@@@BBB@BB@@B@@B@@@@DBB@DDD@BBB@BB@@@@A@@B@@@B@@BD@@@BBD@BBBBBB@BA@DAB@BB@DB@BA@@BBBB@BB@@A@AB@@AB@@@@BBD@BB@@@@@@BBD@@B@@@@@@@B@@@@BBDB@AB@@AA@@@@@@ABA@ABABA@BB@BB@@B@B@@@A@@AA@BA@@B@A@@A@A@@BBB@@@@BB@@@B@BBB@BAB@@@@@AA@@B@B@BAB@H@JADFDA@@@@B@B@HBB@BBB@H@@@J@HGHD@BBBEDB@DCFB@BGDFB@@@B@@BBB@BB@@BBF@F@@A@A@A@CB@BAB@DAFADAFA@@B@B@@@@BB@B@@BB@@@@@@B@@@@@@@@BB@A@@@@@@@BB@@@@@@@@@@C@A@@F@DBBEBEDABABAFC@@@@B@@@@@@DBBBAB@BBBD@B@B@@@@@B@@@@BBD@D@D@B@NDB@B@BBBBDB@@B@B@B@@@B@BBB@B@D@@@BBB@@@B@A@@A@@@@BAB@@BD@D@D@@@B@B@@@B@B@B@D@B@B@@@@B@B@DHBFBD@B@BB@B@@BBBB@@@B@BBB@@BD@@BBBD@B@@BB@@@@DJB@HDHDFBND@B@BABABB@BB@@B@@@@@@B@@@@@@@@@@B@@@B@@B@@B@@@@BB@@@@@B@@BB@B@@BB@B@@@BBB@@@BBB@@BB@@@B@BB@@B@BBB@@BB@A@@@@@A@@B@@A@@@@B@@@@@B@@A@@@@BA@@@@@AB@@A@@@@B@@A@@@B@@BDBABA@@BA@@@@@A@AB@@@BB@@@BBB@@@B@@@@BAB@@@BABAB@B@@DB@@@@B@HB@BB@@@AD@BBD@@ABADAB@BAB@B@@A@ABA@AD@BA@B@BB@@B@@@@@@@@B@@@BA@@@B@@@@@B@BBB@B@@@@@@@@@B@B@@@@BB@@B@@B@@BBAB@@@@BCDAD@@B@B@DGB@@@@B@@AB@@@@B@@@B@B@@@BB@@@@@A@ABABE@@@AB@@@FBFB@@BA@A@@@@@@@@@@@@A@@@@@@@@AA@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@A@@@@@@B@B@BAB@B@DBAA@@AA@@@A@AA@@A@@AA@@@AA@@C@@B@B@DBBBBBBBBBBBD@B@@BB@@A@@@A@@@@B@BBB@BA@@@AF@@E@A@AB@@FB@@@@@DBBBB@D@@@@@DBDB@@@@BB@@FDDBDBDBBADB@@@EACB@B@@@B@B@B@@@BAAAAACCAA@CBAB@F@DABABAAAC@A@CBE@C@A@AA@ABAHAFAB@B@@CACAA@AA@C@A@C@C@ACAA@A@ABA@C@AAC@ABABA@@BBBBDBBBD@B@DC@@@CCAAA@AA@@@AAABC@A@@@AAAABA@CFAB@D@D@@A@A@AA@ABC@AACA@A@ABAHABAAAAAEAA@CBABA@CA@A@A@AB@BABA@AACCAAA@ABAHABADCB@@E@E@A@A@ACEEG@ACA@CA@@AAA@A@@@CB@D@DBB@F@BA@@AAAAA@AAA@@A@ABA@ADCBABADCDADADA@C@C@ACAC@C@A@C@@@ACBADAB@J@D@@A@AA@CACC@A@A@AHEBA@@@CAAI@ABC@AABADAB@@A@AA@@CB@FA@ABCACAACAABC@CDABE@E@CAA@@A@ABAF@D@@ABABC@A@A@A@@EAA@@A@CAC@@GAAA@AAG@AAAC@AACC@ABCDABBDBBBBABAAG@AEEAA@AHGDEHCDCBC@AAACAAA@A@EACACAAA@AA@ABA@ABA@M@AAAAA@CA[@A@G@aD@D@B@@@J@F@B@BBB@B@DBDB@@BAB@B@B@F@B@B@BAHAD@B@B@B@B@@@B@BADADCHCHGFEFEFGFGBCBC@E@GAE@EAC@C@A@EBEBCBCDABCBAB@@A@@@EAC@CAA@CAAAE@AAEACCEAACEACAA@AAA@@@AAAAC@@CACACAA@AA@@@@@A@@D@D@B@@AB@@@BA@@@A@AA@AA@@@CAA@@@A@@B@B@B@BA@ABA@@BAB@@A@@@@@@A@@@A@@@@@AB@@A@@@A@@A@@AAA@A@@@@@@A@@@AB@@@@@@AA@@@A@@AA@@@@@@A@@@@BAA@@A@@@@AA@@@A@@@A@ABAB@@@B@BA@@@@BAA@AA@A@A@A@A@@@A@@@@AA@@@@AACAA@A@CAA@@@BCDCB@DABAB@@AA@AAAAAA@@BCA@A@AA@@@AAA@AA@ABCB@@AAAAA@A@E@C@E@C@@AA@A@AAG@C@@AAAAACAAB@@@@@@@@@@BB@@@@A@@B@BB@@@A@@@A@@@@BA@@@@@@@BBB@DB@@ABDBA@@BB@DBB@@@AB@B@@ABA@ABABIA@@@@@AGA@@BC@@@@@A@@A@@B@@AB@@AD@BA@@@@@A@@@BC@A@@@@EACABAB@A@@@@@GBABA@A@ABEBA@@@@@@@@@B@@@@@@B@@@@@@@B@@@@B@B@BAB@@BD@DA@B@B@@@BA@@@@@@@A@@B@@A@@@@BB@B@BB@@@@@B@@@B@@@@A@ECA@AAAAA@@AA@@@@@@@@B@BB@ABAB@BC@CB@B@@@BABABC@A@A@IAABA@A@A@A@ABA@A@A@A@@BC@@@A@A@ABA@A@CBCDABA@AA@A@@A@@@@@@A@@@@@A@A@@@@@A@A@@@@AA@@@@A@A@@@A@A@A@@@C@ABA@A@ABA@C@C@C@A@CAA@A@A@AA@@@@AA@AA@AAA@CAA@AA@@AAA@AA@AAAA@C@CAEAA@@@A@A@C@@@@B@BA@@BC@ABEBC@@@A@@@@AAA@A@AAA@@AAA@AAA@A@AA@@A@@AC@@@AAA@A@@AA@@@@@@@ABA@A@A@@@AA@@AAAAA@@@A@A@A@CBA@@@@@A@A@@@@@@@A@@ACAACA@@A@@@@@@B@@@B@@@BA@@B@@A@@CCACAA@@@A@@@A@AA@@A@@@@AA@@A@@A@@@@@@ABA@A@@@A@A@A@@@@@@@AB@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@A@@@A@@@A@@A@@A@@B@@A@@@@@@@@@A@A@@@A@@@A@@@A@@@@@A@@@A@@@AAA@A@@@A@A@EBA@A@A@@BA@@@A@@A@@@A@@@@@@@@AB@BA@BB@@@B@B@@@@A@@@A@@@@@@B@B@BAB@@@BA@@@BB@@@B@B@@@@AA@@@@A@@@@@@@AA@@@@@@@@@@@@A@@@AAA@@@@@@@@B@@@@AB@@@@B@@@@@@@@@@@B@@@@@@B@@A@@@A@BB@B@@@BA@CBC@AB@@@@@@BB@@@B@@BB@@B@BB@BB@B@@B@@@@@BAB@@BBBB@@B@@@@@@@BBBB@@DDBB@@BB@@B@@B@@BB@BBB@B@@BB@@@@B@@BB@B@@@B@@B@BB@@B@@B@@@@BBB@@A@A@@@A@@BA@@BA@A@@@A@@@A@@B@@A@@@AB@@A@@@@@AB@@@@@BA@@@@B@@A@B@@@@B@@@B@B@@A@@@AB@@A@@@@BA@@@@B@@@AA@@A@AAA@@@@@AA@@@@AA@A@AAA@@@@@A@@@@B@@@@A@CAC@C@C@C@@@A@A@@@A@A@A@A@A@@@A@AB@@C@@@AB@B@B@@@@@@@@@B@@A@@@@A@@@@@@AB@@@@@@@@@AAA@AA@AAC@AAA@@BA@@@@@@@@B@@AB@@@@ABAAA@CBC@A@@@AA@BA@B@@B@@BBA@A@C@@BC@A@A@ABC@@@@@@@@B@@A@BB@@@@B@@@@@@@BD@@@@@@@@@B@@A@@@@@@@@B@@@@B@@B@@A@@@@@@AA@@@@@@B@@B@@@@@@@A@@@@@@@@BB@@@BB@@@@@B@@@@BB@@B@@B@@BB@@B@@B@@B@@@DH@BBAB@@@BAB@@@BA@@@@B@@@BB@@@BB@@@BAB@B@B@B@B@B@@B@BB@@BADA@ABB@ABAB@@@B@@@B@@@@@@@@@B@@@@@@@@A@@@@@BB@@@@@@@B@AA@@AC@@@A@A@@B@@@B@BA@@@@AA@@@@@A@@@@B@B@@@@@B@@@@A@@@@@@@B@@@@BA@@@@AA@@@@@A@@@BB@@@@@@@@A@@@@@A@@B@@@B@@@@@@ABB@@@B@BBBB@@B@@@@B@@@@@@ABA@@@AB@@@@@@AB@@A@A@@B@@@@A@@@@@C@A@AA@@@AA@ABA@AB@BA@@BA@@K@@@@@@@@@@@@AB@@@@@@@@@AA@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@B@@@@A@@@@@A@@@@@@@A@@@A@@@@@A@@@@B@A@@A@@@@@@@A@@@@@@@@@@A@@AB@A@@@@@@@B@@AA@@@BA@@@A@@@@@A@@@A@@@AA@@@@@@A@AA@@AA@AA@@AA@AAC@A@AAA@@A@@@A@@A@A@@@@BA@@@C@C@A@@@@BABA@G@MBI@BIYJAA@AA@AAAA@@AAAA@AA@AA@@AA@@AAAAAAAAAAAAAAA@AA@A@@A@@AA@@@AA@@@@@@@A@@A@@@@AA@@@AA@@@@A@@AAA@@@@AB@D@DAB@B@BAB@B@BAB@BAD@BAB@BAB@DABAB@BADAB@BAB@@@DAB@B@BADC@C@A@C@C@C@@@A@A@E@C@G@E@E@C@K@@@@BA@AB@@@DAD@B@@@D@BBB@BABABAB@@CD@B@@@@@DDBBBBBD@@BB@BBBBB@@B@@@B@B@@ABA@@B@@CD@B@@BB@@B@@@@B@@B@@@D@B@BB@@@D@@@B@@ABA@@@@D@B@B@@@@@@@B@@AB@@@B@@BB@BAB@@B@@@@BAB@@BB@H@P@D@B@H@D@B@@BBBB@@BD@B@@BBAB@@@BA@ADAB@B@@@B@@@B@B@@AD@@@@@@@@BB@@@@B@@B@@B@BBB@B@@@BBB@DB@@BABC@@BABABCFCDCDGDCHGDAZBPB@OMAGAHG@E@G@AFBB@BEB@NLBCB@B@F@F@CHCDBBJFBARHJDHD@@B@@@DABAB@DAB@BAB@BA@@B@@AB@D@BB@@BBB@@@BB@BA@@B@@@@@BA@@@AB@@@@BB@@@B@@@@A@@B@@A@@@@@@@@BA@BBBDDAB@BABABAB@BAB@D@B@B@@@B@B@B@D@@@B@B@@AB@DB@@D@@@B@@@B@B@@@B@B@B@B@F@B@B@@A@@B@@@@A@ABA@@B@B@B@@@B@@ABA@@BA@EBA@@@AB@@@@A@@@@A@@AA@@@@AB@@@@AB@@@B@BBDDBBDBBB@@BB@@BBB@@BB@@BB@@BB@B@@@@@B@@@@@@B@@@@BB@B@B@@@@BB@@BB@B@@@@@@@B@@@@@BBB@@@@@@@BB@@B@@@BB@@@B@@BB@@@BB@BB@@B@BB@@B@B@B@B@@@B@B@@A@A@@BA@@B@@AB@B@@BB@@AB@@A@A@@@@B@@A@A@C@@@A@@@A@@@@@CB@BA@A@AB@@A@A@@@A@A@A@@BA@@@CACAA@@BGAABE@E@BB@BAD@@ABA@@B@@A@B@DDBDB@CBA@@@C@BC@@GAABC@@BB@BB@BB@CB@B@B@@@@@@ABADCD@@@BBB@DBB@DBD@@@BBB@B@@@B@@@B@@@@B@@B@B@B@@@B@@@@@@@BC@E@BFC@@GC@GA@DA@AAWD@@E@@AEB@@@@AAAAAAA@@@A@A@@@ACCA@@C@@@GAGC@DAB@@@@A@A@@@@@@A@C@A@@@@@B@B@@A@AD@@@@@B@@AH@B@@@FA@ABCF@B@@DB@@@B@@@BA@@AC@AA@BABJDB@@BB@DDBBABA@@@A@AB@@BBABCBADA@A@ABA@AD@B@B"],"encodeOffsets":[[128436,45094]]}}],"UTF8Encoding":true});}));