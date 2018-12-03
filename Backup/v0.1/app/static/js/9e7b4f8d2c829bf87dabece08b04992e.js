(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('乐安县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"361025","properties":{"name":"乐安县","cp":[115.83048,27.428765],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAA@@@EAA@A@A@@@AAA@A@@AAAAA@@A@A@AA@@@@@AA@A@@@@BAB@@@@ADCAA@AB@@@@@B@B@@@@@B@BAB@B@@A@@@AB@@@@AB@@@B@B@@@BB@BB@@@B@@@BBB@BB@@@@B@@ABA@@BA@@ACA@@A@A@A@@@AAA@A@@@E@@A@@ABAB@@@B@@CB@BC@@@@@AD@@CA@@A@@@@@AD@@AB@@@@AB@@B@@@@B@B@B@@@B@BA@@B@@@@A@A@@@@BADBBB@DB@@@@B@@B@@@B@@@B@B@B@@@B@@@@ABA@@BA@ABA@A@@@AB@@@B@@@@AB@DBB@@AB@B@B@@A@AB@@AB@@@@BD@@@@@@@B@D@BAB@B@D@@A@@@AB@@@@A@@AA@@A@@@@@@@B@BBBDDBBDBB@@@@@AB@@@B@@@BBBBB@@@B@B@B@ACAA@A@AAEA@@@AA@A@@@@B@B@@@B@B@B@@BBB@@@BB@B@@AB@B@B@B@BAB@@CBAB@B@@@B@@@BA@@@@@A@A@A@ABAB@@@B@@A@A@@BA@A@CB@BA@A@@B@@C@ABA@@@AB@BAB@B@@@B@@@D@D@B@@ABABAB@BA@@@@B@@@B@BABBB@B@@@@BBAD@B@@@@ABA@@@@@@BAB@@AB@B@@@BA@@@A@@@A@A@@@A@CB@@@@@@@@A@@@A@@BA@@@A@@@@@A@@@A@@@A@@AA@ABC@@@@BA@@@A@A@@BABA@AB@AA@@@@@A@AA@@C@A@A@@@@@CAA@A@@@AA@AA@@@CA@@A@A@@@A@A@A@CAA@@BC@A@@@C@@@A@A@A@CAA@A@@AABA@A@A@@@A@A@@@A@AAAAAAA@AB@@AAA@@AA@A@CA@@A@@AAAA@C@A@A@@AA@AAA@AB@AA@A@AAC@@@A@@@AB@@AAA@@@ABA@@@C@AD@@@B@@@BBBAB@BAB@BAB@@@BA@A@@@@@@@@B@B@@@@AB@B@B@@@@A@@@@@@A@@@BA@@AA@@@@@A@@@@BA@B@@BA@@@@@@@@@A@@@@@A@@@@B@@A@B@@@AB@@@BA@A@@@@AC@CB@@@@@BA@@B@D@@@B@B@@@BA@A@ABC@ABA@ABA@@@A@@B@@@@AA@@ABAB@@AB@@AB@@AB@@@B@@@BA@@@@BA@@@@B@@AB@B@@AB@BA@@B@BAB@B@@BB@B@@@@@@@B@@BBB@B@@B@B@@A@@@AA@@@@A@@@ADABA@@B@@A@@@AB@BBB@B@BB@@B@@CBA@@B@@AB@@@B@@CDABAB@@@@AB@@@B@BBBABBBBB@B@BAB@BC@@@@B@@@@A@@@@@A@@B@@@@@BA@@B@@@B@@@@@B@@A@B@@B@B@@@@@BABA@A@@B@BB@@@BD@@@@CBA@@AA@@@A@@A@@AB@@C@@@A@AA@@BA@@AAA@AA@@A@@@C@@@@@AB@B@@@@A@@@@A@@@AAABA@@@A@@EBA@A@@@@B@@@BA@@BBB@@BB@@@@@B@@@@@B@@@@@BA@@@@B@@@@A@@D@@A@@BA@@B@@@B@@A@@BB@ABBB@@@B@@@D@@AB@@AB@@ABC@@BAB@@@@BB@@AB@@B@@BAB@B@B@D@@@B@BB@@B@B@@AB@@@BABAB@B@@B@BB@@BB@B@@@B@BAB@@AB@BA@AB@@@B@@@@AB@@@B@B@B@@@B@@@@AB@B@B@@@@@@@DBB@@@@BBD@B@B@@A@@@@BBB@DB@@@@AB@@B@@BB@@@B@@@@@B@@@@@@@B@B@B@B@@@@@@@@@@B@@@B@BBBA@@B@@@@B@@@@BB@@BBB@@B@@AB@@@B@B@B@@AB@@@@@BB@B@B@@BA@@@@BD@@A@@B@@@@B@B@@@@@@B@@BBB@@@BAB@@@@AB@@AB@@@@@BB@@@B@@BABABB@@@@BB@@B@B@B@@BB@B@@@B@@@B@@A@@B@B@@@B@@@@ABAB@@@@B@@B@@AB@B@B@@B@@AB@@@B@@@B@@B@@@@@BB@@BABB@@@@BB@ABA@@@@D@B@@@@@@BB@@BB@@@BB@B@@@@B@@@B@B@BB@@@B@B@@@@D@@@@@B@@@@BA@@BA@@@AB@@A@A@@@@B@@@BBB@@@BA@@@BB@B@@@@@@B@@B@@@@@@AB@@@B@@@@@BA@@@A@A@@@AB@@BB@@ABA@@BA@@@@BA@@@ABA@A@@BA@@B@@BB@@BB@@@BAD@DABBBAB@B@BA@@BAD@D@F@BBF@B@BABCF@B@@@BAB@@@B@B@@@@@BB@@@A@A@@@@@B@@@@B@B@BA@@@A@@B@@@B@@@B@@A@@B@@@@@@@@@B@B@@@@@DBB@@@@B@@BBD@B@B@@@B@@@@@@@@BBF@B@@B@@@BAB@B@DA@@B@@@@D@@@@B@@@@@B@@@B@@@B@@BB@@BBB@@@BB@@@@BB@@@@AB@@@B@@@@@B@@B@D@@@B@B@@@BBB@@AB@B@@@BA@@BB@@B@@@@@BB@B@BBB@@B@@@@@@BAB@B@@@B@B@B@@@B@@@BA@@B@@@@BB@B@B@B@@@BBB@@@@@B@@@@AB@B@@AA@@@B@@AB@B@BAB@F@B@B@@A@@BAB@@@B@@AB@B@B@@BB@@BBBDB@@B@BB@@@BA@@@@BB@@A@@@@@B@@@AF@@BB@@D@BB@@@@BA@@DD@@B@@@@BB@@B@@BAB@@@@B@B@@@@D@@@BB@@@@B@@@@@BB@B@B@BB@@@@B@@@@@@@B@@@B@@BB@B@@@B@@@@@@DB@@@B@B@B@@@B@@@@@D@B@@@@BBB@@@@B@B@BB@AB@@B@@@B@BB@@A@@BA@@BA@@@@@CB@AA@AB@@AB@@@B@BABA@@B@@@B@@A@ABC@@@@@BD@@A@@BA@@B@@A@ABA@A@A@C@AB@@AAA@@@@AAA@@A@AAA@@@@@A@@@A@@@@A@@A@@@C@@@@A@@CAA@@@A@@@A@ABAB@@AB@@@@@@AA@@@@BABA@A@@@@A@@A@@@A@@@@A@A@@B@@ABABA@@@@@@A@@@AC@A@@B@B@BABA@@@@@A@A@A@@AA@@AAC@@AA@@AA@@E@ABA@@@@B@BA@@@A@C@@BA@@A@@@AA@A@A@AB@@ABAB@@B@@BA@@@@BA@@@A@@@ABA@@@A@@BB@ABBB@@@BA@ABABABCBABA@AB@@@BA@@@@@A@ABA@A@@@AB@@@@@BA@@@A@@BA@@@@B@@@@B@@@@@AB@@@@A@@B@@@BA@@BA@@@@B@@@B@@@@B@@@@BB@@@@BA@@B@@@@@@@@AB@@@@ABA@@@@@AB@@@@A@@@BB@B@@@@AA@BA@@@@@@@@@A@@@A@@@A@@@@@@@@B@@@B@@B@@@@B@@@@@B@@@@@BAB@AA@A@A@@BA@@@@@ABABA@@B@BDDA@@B@@@@AB@@@@AB@@@@@@ABA@@B@@@@AB@@@@ABBBAB@@@B@@@@AB@D@@AB@@@@@@A@@B@B@@@@CD@@@@@@AB@AA@@BA@@@AB@@@B@@ABA@AB@@AB@@A@A@@DAB@@AB@@@B@B@@BB@@@BB@@@B@BBBB@@B@BBDB@@@BB@DB@BB@@@@DA@BB@@@@@BA@@@@BA@@B@@@@@BB@@BBB@@B@@B@B@@@B@@ABB@@D@@@@@B@@@B@@@B@@@@BB@@@D@@AB@B@BB@@B@BBB@BA@@B@@@@@B@@@@BD@@BD@BBB@B@@@B@@@@@B@@@@@@A@@B@@A@@B@@@@A@@@ABB@@B@@@DB@@@B@@@@BA@@BB@@B@@DD@@@BBB@@@@B@@@B@@@@B@B@@B@@@@B@@@@B@@@B@@@@BB@@@@@@@@B@@@BB@@@@BB@@B@B@@B@@@@@@@B@@@@@@@BB@@@@@BB@@BB@@@AB@@@@ABB@@B@@B@BB@@@B@@@@@B@@BBBBBBBBBD@@B@BB@@B@B@@@DB@@@B@@ADAB@@@B@@@BC@@@BB@@B@@@BA@@B@@D@B@@BB@@@B@B@@B@@@BB@@DD@@B@@BBB@@@B@@B@@@@BBBBB@@AB@@BBB@@B@@B@@@BBDBB@BD@@BBB@@B@@@@BBB@B@@B@@B@@B@BB@@@@@B@BBB@B@@B@@@B@@AB@@@@@DBB@B@BD@@@BB@@@@DAB@D@B@@@BAB@@@@B@@BBBD@BB@@@@@B@B@@@@@BB@@@B@@B@@@@@@@@@B@B@@A@@@A@@@@@@BB@@@B@@@@@@@@@B@B@@@@A@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@BB@@@BBB@@@B@@BB@@@@@BBB@B@@BB@@@@B@BB@@BBBBBB@B@B@@@D@BBBB@@@@BBB@BBB@@B@@@@@BBBB@B@@BBFDB@@BB@BBB@B@B@@BDBBBB@@@@BB@@B@B@@BB@@@B@BDF@BB@DB@@BDBBB@@DBBDD@@@B@BB@@B@@BB@@@@@B@@@B@@@B@BBB@@@@@B@@@BBDB@@@B@@B@B@@@BB@@B@@B@@@BB@@BB@@@@B@BBDBB@B@B@@@B@BB@@B@BBBB@@DBB@BBBB@@@BB@@B@BBB@@@B@@BB@@BB@@@@@B@@@@B@B@DB@@B@BBB@@@B@@ADA@@B@BABA@@@@B@B@B@B@DAB@B@BABA@@@@B@DBB@@@B@@@B@DB@@BC@A@AAA@@B@BA@@@BB@BA@@B@B@@@B@@@@A@@DA@@@@BABABA@@BCB@@@B@@@BA@@B@B@@@@AB@@AB@B@BB@@BB@@@@B@@BB@@@BA@BB@@@@BB@@AB@@B@@@B@BB@@@@@@@B@@@@AB@@@@A@@@@@B@@B@@A@@B@@@@A@@@@@@@@@A@@B@@@@@B@@@@B@@BB@B@@@AB@BB@@@BA@@BBB@@@@@@BB@@@AB@@@@@@@@@A@@@AA@@@@@A@@BA@@@@@B@@@B@@B@B@@@@@@@@@B@@@@@AAA@@@@@@ABB@@@@@A@@@@A@@A@@@@@@@@@@B@@@@@@@@@B@@A@@@A@A@@BAB@@@@AB@@BB@@ABAB@@ABA@@A@@A@A@@@AA@@@@A@A@A@@AAB@@A@@AAA@@@A@@@AAA@AA@@@@A@@@A@@@@A@@@C@@@A@@BA@@@AB@@AB@@@B@@@@@B@@A@@B@BA@@B@@A@@BAD@B@@ABABA@ABC@A@@@A@@@A@A@@@@@A@@BABA@@@A@AB@@A@@@C@AB@@@BA@@@A@@@@@A@@@@@A@@@AD@@@B@@@@@@ABAB@B@@@@A@@@@@A@@@@BA@AB@BABA@@B@B@BAB@@@DCBA@@B@B@B@BBDB@BD@B@@B@@DD@@@D@@@@DBDB@@BB@@@@@B@B@@@D@D@B@@@BB@@@BBB@B@DD@@@B@B@@@BBB@@@B@@@@BB@B@@@@@BA@@@BD@BBBBBB@B@BDB@@@BAB@BBDB@@BB@B@@@BB@@@BA@@@@BB@@BB@@@@B@@A@@B@@@B@DCB@B@@@@A@@@ABA@@@AB@@@@A@ABA@@@@@A@@@@BA@A@A@C@CB@@A@@D@@@@@@@BBDBBD@@BA@@@A@AAE@@@AA@AA@@@A@@BABA@@B@@A@@A@@AA@@B@@@@@A@@CABA@@@AB@@A@@@AB@BA@A@A@@@@@A@@@A@AB@@A@A@@B@@A@@@@B@BA@A@ABABABA@@BA@AB@BA@@B@BB@@@@@AB@@@@@B@B@B@BA@@B@@@B@@@@@B@@@@@@@@@D@BB@A@@@@@C@A@@D@@A@@BC@AB@B@@@@A@ABA@@B@@@B@B@@@@AB@@@B@@@@AB@@BB@@@@@B@@@B@DB@@BB@B@@BA@@BA@@@@B@B@@@@ABA@@@A@@@A@ABA@A@@@A@@@C@A@@@@@AA@@@@A@A@A@A@A@AAA@@BA@@@@@@@@AA@C@@B@BAB@@@@@B@AABC@@BAA@AA@A@A@@AA@A@@AA@CA@@A@@@@@A@@@@@@@@BC@@@AAA@AA@AA@AA@A@A@A@C@@@AAAA@@@@@A@@BA@@@A@@AAA@@@@A@CBA@A@AB@B@B@@@@A@@AA@@@C@@@A@@@@BA@@@A@@@A@@@@@@@AA@BA@A@A@A@@A@AC@@AA@@@@@C@A@A@AACA@B@@ADCBAB@@A@A@@@A@A@@@AB@@A@A@@@@@ABA@@@AB@@@DA@A@@@AA@@@@AA@AA@A@EA@@A@A@A@@BA@@@@AA@A@C@@@A@@@@A@@AA@AA@@A@@@A@@@@@A@@AC@CA@AA@A@@@@@@BAAAB@@@@A@@@@@AA@A@@@@A@@A@@@AA@@@@AA@@A@@BAA@AAA@@@AA@@@@@A@AA@@@@AA@@AAA@@@AA@AAAAAA@@AAA@CA@@AA@@AC@@AA@@@@AC@@@@@A@A@@AABA@@@A@A@A@@DE@ABA@@@CBA@@BABA@@@AAA@A@A@ABAA@B@@C@@BA@@@@@A@@@A@@@@@A@@@@@A@AB@B@@@BB@@B@B@@@BA@@AA@@@A@@BA@ABC@AAA@AB@@ABABE@@@A@@AA@@@AAA@A@ABA@@BA@@@A@@B@B@B@@@BA@@@@BA@@B@@@B@@AB@@A@@@@@ABA@@@@B@B@@AB@BADAB@B@B@BAD@FA@@@@B@BB@@@B@@@B@@@@@D@@@B@@@B@@@B@@@B@BAB@@BBBBB@D@@@@@BA@A@AB@@A@@B@@ABA@@BA@@@AB@B@BA@@@A@@@AB@@@BAB@@@@@@@BAB@B@B@@@@A@@@A@@@@AA@@BA@A@AB@@@@ADC@@@@BB@@B@@@@@BA@@B@@ABAB@DA@@DBB@@@@@B@@@@@@@@ABCD@FC@@B@@@B@@@@@@@B@DBBBB@@@DBB@@@B@@@DCBA@A@@B@B@B@@@@BB@@@BBB@@BB@@BBD@@@@BBB@D@@BB@BBDA@@@@B@B@B@B@@@B@B@@A@@@A@A@AB@@@@A@C@A@@@@B@@B@@B@@@B@@BB@DA@@@@BB@@@BB@B@B@B@B@@ABB@@B@@@B@@A@@DBB@@@DADCB@B@BAB@B@@@B@B@@@BBB@@@@A@@A@@@BA@@@@@@@AAA@A@A@A@@@ABA@ABA@@@@@@@@@ABAA@B@@A@A@A@A@A@@BA@A@@BABA@@@@@A@AB@BA@A@@@A@@@@@A@A@@A@@@BG@@BAA@BC@A@A@@B@BA@A@@AAA@@AA@@AA@@@A@CA@A@A@AACC@@A@A@A@@AA@@@@@A@@@@@AA@AA@AC@@A@A@@@AAB@AAA@ABA@@@AAAB@@A@@@A@@@A@E@@@A@@AC@A@A@A@@@AA@AAA@AA@AA@@A@@AA@@@A@@@A@@@ABA@A@@@AAA@@BA@@A@@A@A@AAABAA@BAB@@@@@AA@@@A@@@C@@A@@@AA@@@@A@@@@@AA@@@@AB@@@AA@A@AAA@@@A@@@@@@@A@@@@@A@A@@@@AA@@A@@@A@@AAA@@AA@@ACA@AA@@A@@AB@@@A@AA@A@@@A@A@AA@@A@@@A@A@A@@@@AAAA@@AAAA@@A@A@A@@@ABA@AB@BA@@@A@@@@BABC@ABC@@@A@@AA@@AA@A@@A@@@@@AA@@BA@A@@BABAB@BAB@BA@@B@@AB@B@@@@A@@@@@A@@@A@@@@@@B@@A@A@AA@@A@A@@@@@AB@@@@A@@@A@AAA@@@C@A@@BCA@@A@@@ABC@@@A@@B@@@@A@AB@@A@@@A@@@A@A@A@C@@@@BA@@AC@@A@@A@@AA@@@A@@A@@A@@BA@@@@@AAA@AAA@@AA@@@@@@AA@C@@@AB@@A@@@@AA@A@@@A@@@@A@AA@@@A@@@@@@A@@A@@@@@ABAAC@A@@@A@@@C@ABC@C@ABAB@@AB@@@@A@@@@DAB@@@@AB@@@@@@AAAA@AA@AAA@@A@@A@A@@@@A@@@@@@A@@@AA@@@A@@@@@@@A@AB@@@AA@@@@BA@@@AA@C@@@A@@@AA@@A@@A@@AAB@@@@@@@A@@@@B@@ABA@@@A@A@@@CAA@@@AB@AC@AB@@AB@@@@ABCBA@A@AB@@A@@AA@@@@BA@@BA@@@@@@@@DC@@@AB@@A@@@A@@BA@A@C@CB@@AAAAA@@@A@@@A@@@C@@CC@@@@@A@AA@@ABA@@@A@@@@@AA@@@@@@@@A@@@@@AA@@@@@@A@@@@BAB@B@@A@@BAD@@A@@@@@A@@B@@A@@@@@@@A@A@A@A@@@@AC@CAAAA@A@@@AA@@@@C@A@@@A@@@@@@@BA@@@AAA@AAA@@@A@AA@@AA@@AA@@@A@@@AB@BA@@@@AA@@@A@@@A@A@@A@@AC@AAA@@AA@A@A@@@A@A@@@A@A@@@@@A@@@AA@@AA@@@AB@@@BA@AA@@@@AB@@A@A@A@@B@@A@@@A@@A@@A@@@@AA@@A@@A@@AAAA@@BA@A@A@@@A@@A@@C@@@@@A@A@@@@@A@@AA@C@@B@@A@@A@@AA@@A@A@@@A@A@A@A@CAAAA@@A@@A@@@@D@D@B@@AB@BAFAB@B@@@@@@A@@AA@@@@B@@@BA@@@@BA@@A@@@AA@@@AA@@@@@@AAB@@@AA@@AAA@@@@AA@A@A@@@@@@@@A@A@@A@AA@@AB@AC@A@@@ACC@@@A@@A@@A@A@A@@@AAA@@A@AA@@@@AAA@@@AA@@A@@AA@@@@AAA@A@@@A@@A@@@@AA@@A@@@A@@@AA@@A@@A@@@A@A@@B@AA@@A@@AA@@A@@@A@@@@@AA@@@A@A@@@AAA@@@@@A@@AC@@@@AAAA@@AA@BA@@A@@@A@AA@AA@@AA@A@@AA@@AA@@AA@@@@@AA@@A@A@A@@@A@A@A@@AA@A@@ACAAA@CA@@@AA@@@@@A@@@@@A@@A@A@@AC@A@@@@BA@A@@CAA@AAA@A@@@AAA@@AA@A@@AA@AAA@@A@AAAAA@@AC@@BAAA@A@C@A@A@@@@AA@@AA@@AA@@AA@AA@A@@AA@@@AAA@@@A@B@A@ABA@@@@B@@AB@@AB@@@BDB@@@@C@A@AB@@@BAB@@AB@@AB@@A@@@@@A@@B@@A@@@AB@@@@A@A@@B@@A@@B@@A@@BA@@@A@@@@DAB@@EB@@A@@BA@@@"],"encodeOffsets":[[118693,27634]]}}],"UTF8Encoding":true});}));