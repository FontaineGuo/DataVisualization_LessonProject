(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('袁州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360902","properties":{"name":"袁州区","cp":[114.427858,27.797091],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CAA@@@@B@B@@@@C@CAAAA@@@@@@B@@@@AB@@AA@AA@@@AABA@C@A@AA@@A@@@A@@@AAAAAAAA@@@A@@@@B@@AB@@A@AB@@@BA@A@@BA@@BA@CB@@AB@@A@A@@B@B@@CB@B@@@@@D@@@BA@@@CBAB@BAB@BAB@@@@CA@@AAA@AAAAAAC@AAA@ECA@@@A@@B@B@@CDEDA@CBABC@ABA@@@A@@@A@@B@BAB@@@B@BCBA@@@@BA@CBA@ABA@C@CDA@EBABG@C@A@A@C@A@CBAAE@@@AA@@A@@BAAA@@BA@BB@@@BA@@@@A@A@@A@CAA@CA@@@@A@@BA@CDA@@DB@BBB@@@@BEAA@AB@@@B@B@@@@@BA@@@C@@BA@AB@@AB@@@@A@@@C@C@ABA@@@A@A@@@@B@B@B@BAB@@@@EB@@CBC@ABAB@@@B@@@@@@@B@@A@@B@@AB@@AAA@A@@B@@AA@@@@@BB@@B@@@B@@A@A@@@AB@@AB@@A@@B@@@B@@@B@B@@@@@@ABA@AB@@@@ABA@@@A@A@A@A@AAA@@@A@AA@@@BA@A@A@@B@@BBDA@@@BBD@BAB@@@B@@@@@B@@B@@BA@@B@@@BA@AB@@CBA@@@ABBB@B@B@B@@@BA@AB@@@@A@A@AB@@@BBB@@@B@@ABA@ABA@AAA@AB@@A@@@A@@@A@@@A@@B@@C@ABA@@B@@@@B@@@@B@BB@@@B@@@DAB@@B@@B@@@@@B@@@BAB@@@@BBBB@AB@@BB@@@@@@BB@BB@@@@BB@@BB@@@ABBB@BB@BBBB@@@BB@@B@@@B@BB@@@@B@@@DBD@@A@@B@@B@@@BB@@@@A@@B@@@@@BA@A@@BB@@@A@A@@B@@@DA@@@@@AB@@ABAB@@A@@@A@@A@A@@A@@BA@@B@@AB@@@B@@@B@@A@AB@@A@AB@@@BB@@B@@BB@@@B@@A@@B@B@@@@AB@@A@@BA@@@AB@BAB@@A@C@@BB@@B@B@@A@A@AA@@@@AB@@@@@B@@A@@B@@AB@@@B@B@@@@@@B@BB@@@A@@@ABA@@@@@AB@BB@@B@@@@@BB@@@BBBAB@BA@AB@@A@A@@@@BA@@B@@@B@@B@B@@@@B@@@@AB@@A@@BA@AB@@@@AB@BAB@@@BAB@@ABABADA@@B@@ABABABAB@@@@AB@B@@BD@@AB@B@@@@@A@A@@@@@@@BAB@@B@@BB@@B@@AD@@BB@@@@@B@@@B@@@B@@@@@B@@A@@@@@AA@@BA@@AAA@@@A@@@@@@@@BA@@@@@@BA@A@A@AB@@C@C@@@@@ABA@C@@AA@AA@@@@A@@@@AA@@@BA@@@@A@EAA@AAAB@@@B@@@@@@BB@@@@@@@B@BBB@@B@@A@@BB@@@BB@B@@@@@@@@BBB@@B@@B@@@BAB@@A@@@@@@@A@AD@@A@B@BB@@AB@B@@@B@@A@@@A@@@@A@@C@@@A@@@A@@A@@@@@@@@A@@@A@@@@@@B@@@@B@@@D@B@@BB@@@B@@B@@@@A@@B@@BA@@@@@@B@@@B@@@@@@@B@@@@@@BAB@@@B@AAA@@@@A@AB@@CAAB@AAAAD@BA@@B@@@@A@@@@B@BA@@B@BA@@AA@B@@A@@@@@@@A@A@@A@A@@@@@@B@@@@@FA@@B@@@B@@AB@@ABA@A@C@@@@AA@@@AB@@AA@@@@A@@AAB@@@@AB@@@@@@@B@@@B@@@@A@@A@@A@@B@B@@@@BBABB@@BB@@@@B@@A@@@@@A@@@A@@A@@A@@@@@A@@@@@@@@@AB@@@A@@BA@@A@@@B@@A@@C@@@@BABABAB@@@B@@@@@@@@A@@@A@A@A@A@@@A@@B@@@@@@@A@@ABA@A@@A@@@@B@@@@@@@B@@@@A@@@@@@@@@@BA@@@AA@@@A@@AA@A@@@BA@@@@@AD@A@A@AA@@@@@@A@@ABA@AB@@@B@@@@@@@B@@A@@BAB@BA@A@@@@AAA@AAA@AAC@CCA@A@A@@@A@@@@@A@@B@@@@@BA@@@@B@@@@@@@BA@@@@@A@@@@@@@@@@@@A@@@AAB@A@@B@@@@AA@@@@@@@@@A@AA@@@@@BA@@@@B@B@B@@@@@@A@@@A@AAAAA@@AA@@A@@B@@@B@@@@A@@@@A@A@@@@B@@A@@@@@A@@@AAA@@@@A@@B@@BB@@@@@@@@@@@AAA@@A@@AC@@A@@@AA@BA@A@A@CAAAA@AAA@AAAAA@AA@@A@@B@@A@ABC@@@AB@@@A@@@@AAC@@@@@A@AAA@AB@B@@A@@BAAAAA@@@AAA@CBA@A@A@@@A@CA@@@@@A@@@@@C@@@@@@AB@@@@@B@B@@A@@B@BA@@@@BADA@@B@@BB@@@B@@@@@@@@@B@@B@@B@@@@AA@@ABA@@B@@C@@@A@@@AB@B@@@B@@ABC@@A@@A@@BA@AAAA@@A@@A@@@@@@A@@@@@@@B@@AA@@B@@@@@BB@AB@@B@@B@@A@@BA@@@@@@BAB@@AB@@@@A@AB@@@BA@AAA@@@A@@@A@@@A@@A@@AA@B@@@@@@@@@A@@A@@@@B@@@A@@@A@@AAA@A@@@CA@@@A@@@A@@@AA@@@@@A@@BA@A@@@@A@@AA@@@@@AA@A@A@A@@@@@A@A@A@@@@B@BA@@@@BABA@ABABA@@@@@A@@BCB@@AB@B@@ABC@@BA@A@AA@@A@@AAACAA@@@AB@BA@A@@@AB@@@B@B@@@B@@@B@B@BA@@@@BBB@B@@HDB@@B@@@@@@@@ABA@A@@AA@AAB@@BA@ABA@ADA@@B@@AA@@A@@@AAA@@@@@@B@@AB@@A@@@@@A@@@@@@@@B@@@@@@AA@BB@@BAA@BA@AA@B@@BB@@@@@B@@@@A@@B@@@@@B@BBB@@BBB@@@@@B@@B@@@@AA@@BB@@@@A@@@A@@A@BA@@@@B@@@BA@@@@BB@@@@@@BBBA@BB@B@@AB@@@@@@B@B@DB@B@@@B@@B@@@B@@@B@B@BBB@@BB@@B@@@B@@@@@BCBA@@@@D@@@@@BA@DBBB@@@B@B@@@@BB@@@B@B@@@@@@A@@@A@A@A@@A@BA@AAAAA@@AA@@@AA@@A@@@@B@@@BB@A@A@@@@@@@DB@B@@@@@BA@@@@A@@A@@@A@@B@AA@A@@@AAA@@@AA@AA@@@@@CAA@A@A@@BA@@AA@@@A@@@@AA@@@@@@A@A@@B@@@@@@A@A@@A@AAAA@@@@@@@A@@ABEA@@A@@@A@@@ABA@@@@B@@ADAB@@BB@BB@@BB@B@@@B@@BB@@@B@BBB@B@@@BD@@@@@@@B@@@@@@A@AA@@AB@@A@@@@@A@A@@@@B@@@DBB@@@@BB@@A@@BB@AB@@@@@@@@A@A@A@@AA@@@@B@@@B@@@@@@@BB@@B@@A@@@@@A@@@A@@@@BBDBB@B@B@B@@@@A@@@@BA@@BA@AAA@A@A@@@A@AA@@AA@A@@A@A@@AA@AA@@@@A@AAAA@@@@@B@@@@@B@@B@AB@@@@@B@@BB@BADA@@@@BA@@@@@@CAA@@@@ED@@@A@@B@@A@@A@@AA@AB@@AB@@@@@B@@AAA@@A@@@@A@@@A@A@CC@@A@@@@B@@@@@B@@B@BBB@@@BD@B@@@@GBAB@BA@A@@@@@@B@@@@@B@@@B@@ABABDB@BBBB@@@BABA@@B@DCB@@@B@@A@A@@@@BBB@@@B@BB@@@@@@@B@@@B@@BB@@DDA@@B@B@@AB@@ABAB@B@B@@AAA@@@A@CA@@@@@A@@A@@@@@A@@@A@@@A@@BAB@@B@BBB@@@DB@@BB@ABB@@B@@@B@@B@@@@@BB@@@@@@BB@BB@@B@@@@BA@@@@B@@@BAB@@A@@B@@C@@BA@@@AB@@A@@@@@A@A@@@A@ABAB@B@@@@AB@@@@AAA@@@ABAA@AA@AB@@A@@@A@@@@AA@@@@@@B@@BB@@@@BBB@ABB@@@BB@@B@@@@@@@B@@@@@B@@B@@B@@B@@@@B@@@@@@BB@@@DBB@@@B@@BBBB@@BB@@@ABB@@@@B@@@@@B@@@BA@@@BB@@@B@BB@@BB@@@@B@@B@@BB@@BB@@@BB@@@B@@B@@@BBB@BBBB@@B@BBDDBBBDB@@B@@B@DB@BBBB@BBBBBBBB@@B@BB@@BB@BD@@B@@B@@B@@BB@@B@@@@@@@@ABC@A@@@@AA@@@A@@B@B@@AB@@B@BBB@@@D@@@@B@@@BB@@BA@ABA@@A@@AA@@@@AAA@A@@A@@@A@A@AA@@AAAA@@@ABA@@@A@@@AA@@AB@@AB@B@@@BA@@BBB@@@BB@@@@BBB@@B@@BBABB@@@B@BB@@AB@@@@@@F@BA@BBBB@@@@@@@BB@B@@A@@BA@AB@@@@@B@@B@@@BB@@A@@@@@BB@@BB@@@@@@B@BB@BB@BBB@BB@@B@@@BB@@@@B@B@B@DD@@@@@A@@BA@@@@@@BA@@@@B@@@BA@@@@BA@@@@BB@@@@B@@@@B@D@@B@B@@@B@B@@@ABA@@@@BAB@@A@@@A@@@C@@@@BB@@@@B@@@@@@@BB@@@BB@@B@AB@@@@BB@@B@@ABB@@@@B@B@B@BD@@DB@@@@BB@@BB@@@BBBBD@@@BB@BB@@@@@@@D@@@@BB@@@@BA@@@A@@B@@@B@@@B@BAB@B@BBBB@@@@@@@B@B@B@@@B@@@@@B@B@@@B@@@B@@@@@B@@DDBBB@BB@BBBB@@@A@A@AB@@@B@@A@@AA@@@A@@@@@@@A@A@@@@D@@CB@@@@@@@@@A@@A@@@@BAB@@BB@B@B@B@@@B@@@BA@@@@B@BB@@@@B@@B@@@@@@@@BA@@@@B@BB@@@@BA@@@@@AE@@@@A@@@A@@@AB@B@@A@B@AB@@@BA@@@BA@AC@@@@BA@BB@B@@A@@@@@@AAAA@A@@@AAAA@@AB@@C@@@@@@ABACB@@@B@@@D@@A@@@A@@A@A@@A@BA@A@@@A@A@AAA@@@B@@@@@@A@@@@@@AB@@@A@@AA@@@A@A@@@AA@AA@@BA@@@A@A@A@A@@@ABA@@@@A@@A@@@A@A@@B@@AB@@A@@@ABA@ABA@AB@@@B@@@B@B@@@@AD@@A@AB@@@@@@A@@B@@@@BB@@@@@B@@A@@B@@@BA@@BA@@B@B@@@@@BB@@@BB@@@B@@@@@B@@A@@B@BA@@@@@A@@@@@@@A@@A@@@@ABCA@@@B@@@@A@@@A@@@A@@@ABA@@@@A@@@@@AB@@@B@@@A@A@AA@@@@@@A@@A@@A@@A@@@AA@@@@@A@@@AB@@@@@@AA@@@A@@ABA@@@A@A@A@@@@@C@@@@@AA@@@@@B@@A@@@A@@@BBA@B@AB@@@@@@A@@@@@BB@@BB@B@B@@@BA@@BA@@@@@ABA@@@@@AA@@@@BA@@@AAAA@@@A@@@@B@B@@@BA@@B@@@DBBBDBDBB@@@@BB@@B@DBDBDDFJ@HBBB@DDBBD@@ADADADABAD@D@B@@@D@F@D@D@FBD@DBBBBB@@@B@BA@@BCDCDCBCD@@AB@B@B@BBD@BBBDDBBDBBBD@B@DBB@D@DAD@D@F@FAFAF@B@HBFBD@B@DABAB@DADBDAD@FAFCB@BA@@BA@@B@F@BA@@B@BF@D@@@BA@BB@@@B@@@B@@@B@@@@@@@@B@@BB@@@DDBDB@@B@B@@@BB@@B@@B@@BB@B@@@B@@@B@@@B@BB@@B@@@B@B@@BB@@@@@@@@@@@@@@B@B@@@@@B@@@B@@B@@@B@@@@@B@B@BB@@B@B@@A@@BA@@B@B@A@@@B@@@@BD@@@@@B@B@@B@@B@B@@@B@B@B@@@BD@@@B@@@AB@@@@A@@@@B@@@@@B@BB@BB@@B@@@@@@@@@BBB@@BBB@@BB@@@BBADB@BB@B@@B@@@BB@@@AB@@A@@@@@BB@A@@@@@@@@B@@@B@@@B@B@BBA@@@@BA@@@A@@BABAB@@@B@B@@@B@@@@@B@B@@BB@@@B@@@@@B@B@BBB@@@@@@AB@BA@CB@B@@A@@A@@A@AB@@AB@B@@@B@@B@@BAB@@@B@@@@@@A@@@A@@@@@AA@@@@@BA@@@@@@@A@@BBB@@@@@@@@A@@A@@@@A@@@A@@@A@@BAB@@ABB@@@B@@A@@B@@@@B@@@@@B@@AD@@A@A@@@A@@@B@@B@@@BA@@@ABA@A@ABA@AC@@@A@@AA@@@@AAB@@@@@AA@@@@@@@@AA@@@@@@A@@A@@@A@@A@@DA@AAC@@@AAA@@A@@@@BA@@@@@@@@@@A@@A@@@@A@@A@@@@A@@ABAA@@@@BA@@@@A@@@A@@AAAAC@@@ABA@@AC@C@A@@B@@A@@A@@@A@@@A@@@A@AB@@@A@@@@@@@@@A@@@A@@B@@@@@A@BCB@B@B@B@@@@@B@@B@@BAB@@@@A@@B@@BB@@@@@B@@@B@@A@@@@@B@@BA@@BABB@@@@BA@@@@@A@BB@@@@@BB@@BC@@@@B@@@BC@@@@A@@AB@@@@@BB@@@@@A@@B@@B@@@@B@@@@BBB@@@A@@@@B@@@@@@A@@@A@@@@@@@@@@@@@@B@@@BA@@@@@@@@@A@@@@B@B@@@B@@A@@@@@@@A@@@@B@B@@@@@@A@@AA@A@@@@@@A@@@BCAC@@A@@A@@A@A@@A@@@A@@A@@@@AB@@@@@@A@A@@@A@CB@@@B@@BBA@@B@@@@@@@BC@@@ABB@@B@@BB@@@@@BB@@@B@@@AB@@@@@BB@B@@@@@BB@@@@B@BBAB@BA@@@@A@@@@AB@@@B@@A@@B@B@BB@@@@@@B@@@B@@B@B@@ABB@@B@@BB@@BBB@AAB@@B@@B@@AB@@A@AB@@BB@@B@A@@@@@ABB@@BBDBBB@@B@@@B@@@AA@@BA@@B@B@@@@@B@@A@B@BBA@@B@ABB@@@B@@@@@@@BA@@@@@@B@@@@@@@@A@@BBB@@@@@@@@@B@@BA@@@@@BB@A@@B@@AB@@@@@@ABB@@@@A@@B@@B@BB@@@@@B@@B@@B@@B@B@@B@@B@@@@@@@B@@@BB@@BBD@@BD@@@@@B@BBB@BB@@BAB@@@@@@AA@B@@@@@B@@@@@BABBBBB@@@@B@@@@B@@@@@@B@@BB@@@B@@B@B@@@@BA@A@@B@@B@@B@B@@AB@@@@@B@B@@@@AB@B@@AB@@@@@BAB@@BD@BB@BBB@BB@@B@BB@BBB@@D@@@AAB@@@@@AA@@@@B@@@A@@@@A@@@@@@@@@@@@BABBB@@@AB@@@B@@BBB@@B@@@BB@@@BB@@@@@BBB@@@@B@B@@@B@@B@@@@@BB@B@@@@@@@B@@B@@@@AB@@A@@B@@BB@@BBB@@B@@@@BB@@@ABA@@B@@A@AB@@AB@@A@@@BB@@@@@@@BA@A@@@BACAB@A@@@@B@B@@@B@@@BAA@@@A@@AB@BA@A@@@@BA@@@BB@@@@@@BB@@AA@@@B@@@BBBAAB@@@@@B@@@AB@DA@@@BB@@@@@@@@AD@@@@@B@@@@@BA@@@@A@@@@A@AB@@B@@B@B@B@BA@@AB@@AB@@A@@@BD@@@@D@@A@@B@@@@@@@@@@@AA@AB@@@B@@ABB@@A@B@BBB@@@@@B@@@@B@@B@@B@@@@@A@@AB@A@B@@@@@@@@@B@@@AB@@@B@@BB@@B@@@@A@@@A@A@@@@@@@A@BB@@B@@@B@@@@@@BB@@@@@@@B@@@B@@@@AB@@A@A@@B@@@@@@BB@@A@@@AA@B@@@B@@@@@@@B@@@@@BA@@@@@B@BA@@@BDB@@@@@ABED@@@BB@@BB@@@B@BB@@@@@@B@@@B@B@@@@@B@@@B@B@B@@@@@B@B@@@@@@A@@@@B@BBB@@@B@@@@@BB@B@@BB@@@@@@@B@@DA@@@C@@@A@@@@BA@AB@DA@AB@@@B@@@@@B@BA@A@@BA@@DA@A@AB@@BB@BBB@B@@@B@@@B@ABAB@@@@A@CB@@@@@B@@A@@@A@@@@@@@B@B@BBB@B@@@DA@@A@@@@@@@AABA@@@ABA@@B@@@B@@B@BB@B@@@@@B@B@@@@@BB@@@BB@B@@B@@BA@ADB@@@@BA@@A@@A@@@A@@BAB@@@BAB@A@BAA@@@@@@@@@@A@@@@A@@A@@@AA@B@@@BB@@B@@@BB@@BB@@@@B@BBB@B@@@B@B@BBD@B@BB@@B@@@@@BB@@B@@ADB@A@@B@B@@@@@D@@A@@@@BB@@@@B@@@@@@@@@B@B@@@@@B@@A@@@A@@@@B@@A@@@@@@BA@@B@@@BA@@@AB@BBB@DBD@@@@@AA@@BA@@@@BA@@BA@AB@@C@@@@@BB@F@BB@@B@B@B@@@@A@@B@@@@A@@@A@A@@AAAAA@@A@@B@@AB@B@B@@@@@@B@@B@@@@B@@@@@@BA@@B@BB@@@@@BB@BB@@BB@@@B@@B@B@@@B@@@@@BB@@@B@@DA@@@@AAA@@@@@AA@@A@AA@@@@B@@@@@@@@A@A@@@@@@B@@BB@BB@BB@@B@@BB@@@B@@DB@@@B@@@B@@@@B@@AB@@@@@B@@@B@B@@@@@BAB@@@@@@AA@@AB@@@@@A@@@@@@A@@@A@@@A@@@@@@B@B@B@@@B@@@@B@@B@@@B@@@BB@A@@@@B@@@@BB@@@@A@@@@@BB@@@@@B@B@@@B@BAB@@BB@B@BBD@B@@BB@@@@@B@@@BB@ABB@@BABABA@@BA@BB@@A@@BA@@@B@@@BB@B@BC@@@@BB@@AB@@BBB@@@B@BB@BB@DD@@@AB@@@@@@B@@@@@B@@BA@@B@@A@@@A@@@@@@B@@@@@@AA@@AA@@@@@AA@@@@D@@@B@@A@@BB@@BB@@B@B@BB@A@@@@DBD@@@@@@@BB@AB@@@@@AB@B@@B@@B@@B@@A@A@@@B@@D@@@B@@@@@@B@@@BBB@B@@A@@@@@B@@B@@CB@@@@BBBAB@B@@A@@DA@@@@@A@A@@@@@A@BAB@A@@A@@A@@@@@@B@@A@@@@@A@ABA@@BCB@@A@BB@@DBB@@B@@@@DA@@@@BB@@@@@@D@@B@@BB@BA@@@B@@B@@@@@@@@@@@@BBB@@BA@B@@@@B@@@B@@@@@BB@@@BB@@@@@BB@@@@B@@B@@B@@B@@B@@B@@B@@@@A@@@@BB@@@@@@@@B@@@@@@@@@@BB@@A@@@AA@B@@@@@@A@@B@@@@@@@@BH@@@@A@@DA@@@@BC@@BB@@@@@@@B@@B@@@B@BB@@B@@@@A@@@@B@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@BB@@A@@@@@@B@B@@@@@A@@B@@@@BB@B@BC@ABA@A@@BB@@BBD@@@@A@@AA@@BA@@@@BA@@B@@B@@B@@A@@BABBDA@@@B@@@B@@BA@@A@@A@@B@@A@A@@@AB@@@BA@@BA@@B@@@@@@B@@@@B@@@@@@@BAB@@@@A@@B@B@@@@@B@@@B@@B@@@@B@D@BAB@@@@@@B@B@BBBB@@@BB@@@A@@BB@@AB@@@BB@B@B@BB@@@@B@@B@AB@@A@@D@@AB@BBB@ABBBA@A@@@@B@@@@@@BB@BD@@@@AB@@A@@@@BA@@BDBB@@@@B@@B@BB@@B@@@@B@@@@@@B@@@@B@B@B@@@@@@@B@@@B@B@@D@@@@B@@@@BA@@B@@B@BB@@D@B@@@B@@@BB@BDB@@BBA@@BB@BB@BB@@@B@@BB@@@@@B@@AB@BCB@B@@@@BB@@@@@@@B@BA@AB@@@BAB@@@B@FBD@@@@@@@BA@ABAB@B@@@BA@@A@@@D@B@B@BA@@@A@A@@DB@A@AD@B@BAB@@@@@AAA@@AD@D@AC@ABABABA@A@@B@@@BA@@@A@@@AA@AA@@A@@A@AA@@@@A@@@ABA@@@A@ABA@@@@@A@@A@@@@@C@A@A@@B@@@BA@A@A@@@@@@A@@A@@@@AA@@@@A@@@@DB@A@@BBB@@AB@B@B@B@B@@@@@@@BA@AB@@@@C@ADA@@@A@A@@DA@@@ADE@@BCBA@@@A@C@AB@BA@@BA@@@A@@AA@@@@@AA@@ADAD@@@BC@A@AB@@AB@@@B@@@@AA@@@A@@BA@@B@@AA@@@A@@@A@@@B@@@@@@@@@@@B@@A@@@@@C@@@BCA@@@@A@@BA@@@@B@@@AABA@@@@D@B@D@BBBBBBB@DA@@@@@@@@B@@@@@@A@@A@@A@@@ABA@A@@A@@A@@@@@B@@AB@@AA@@@AB@BA@@@@A@AB@@A@@@A@@AA@@@@@AB@@@B@@C@@@@@@@AA@@@AA@@A@@AA@@@A@@@A@@@@@A@@BA@CA@@@@@@@@A@@@@A@@BA@A@@@@@AB@@A@@@@@A@A@@AA@@A@@AABA@AA@@AA@@@@AA@@@@@A@@@A@@AB@@A@@AA@@AAA@A@@@AA@AA@A@@@A@@A@@AAACA@@AAA@A@@@@@A@@@@@@C@@@BBAB@B@@A@@@@@@B@@A@A@@@@@@D@@A@@AB@AA@@B@@AB@@@A@AABAA@@A@A@@C@E@ADA@@BA@ABA@@@A@A@@@A@@D@@C@AAAB@@AA@@AA@@@A@@B@@@CA@@@@CA@@@B@@A@@BC@@B@@AB@@AB@@A@@@@@A@@@@@@@@A@@A@@@@@@@BAA@@@@AA@@@AB@@AA@@@@A@@@@B@@A@@@@@A@@@A@@@A@@@@A@AA@@@@@A@@@@@AB@@A@@@@@@AA@@@A@AA@@A@CB@@@@@@AB@@@@A@@@@A@@@@A@@@@@@A@AA@@A@B@@A@@@@@@@@A@A@@@@@@A@@@@@A@@@@A@@AA@@@A@@@@A@@@@B@@AA@@AA@BA@@A@A@@@@@@@A@@@AB@@@BC@@A@@AB@BEBA@@@@B@@AB@@@BA@@@@B@@A@@B@@@@A@@A@@@@@@@A@@@A@@A@@@@@@BA@AB@@@@@@A@@@@@A@@@@B@@@B@@@BB@@@@@A@@A@@@@@BABB@@B@@@BCACAA@A@CA@@A@@A@A@AD@@@BBA@B@@BBA@B@@B@B@@A@@@@A@@A@A@@@@@A@@@@@A@A@@@@@A@@A@@@C@@@@@A@@@BA@AAA@@@@@A@@@@@@B@@@@ABA@A@@BAB@AA@@@@@AA@B@@AAA@BAA@@A@@@@AB@@@@@@@@@B@@@@@@@A@@@@@A@@@@AAA@@A@@A@ABA@@@@@AA@@@@AB@@@@@B@@AA@@@B@@@@@B@@A@@AB@@A@A@@A@@@@@@B@@A@@A@@@@@@A@@@AA@BAA@@@@@@@@BA@@B@@@@@@A@@B@@AA@@@@A@AA@AAB@B@@@BA@@@AAA@A@@@A@@AB@@@A@@@@A@@@A@@BCB@@BBA@@@BBA@A@A@@@@CB@BABAB@@@@A@@BA@@@A@A@C@@@@@@A@@@A@@@@A@@@@AA@@@@@AA@@@@@@@@A@@@@A@@@A@A@@@@@AA@AB@B@@BB@@A@@B@@AB@@B@@@@@A@@@@AABA@@@@AAABA@@AAA@@B@B@@ABA@AAA@@@@B@B@@@@A@A@@@A@@@A@@@A@@B@@@@A@A@@@A@@@@@@@A@@@@@@@AAB@A@@B@@@@@@AA@@AA@B@@@B@A@@A@ABA@B@@@@AB@@@@B@@@@@@A@@@@B@@@@AA@@@BC@@@@@A@@@@BB@@@B@@@A@@@@@@@@B@@@@@@@@@B@@@@A@AB@@@A@@A@B@@A@@@@@@AA@@A@@@@@@B@@@B@@@AA@@B@B@@A@@BA@@@@@A@A@@BA@@@@@AB@A@BA@A@ABAA@@@@@@A@@@A@@A@A@@A@@D@@@@@@@BABA@@B@@@B@@@@@@@BA@A@ABC@@BA@@@@@@AB@@@A@@@@@@@A@@@@BBB@@@AABAAA@@@@@AB@@AB@@ABAA@@C@@AA@@AA@@@@BAB@@@BA@@B@B@@ABBB@B@B@B@@ABA@@AA@@@@BABA@@B@B@B@B@B@DBD@DBB@@A@AB@@@@@@ABA@@@AB@@@B@@B@@B@B@@@BB@@BA@B@@B@@A@@@@B@@@B@BABCBAFE@@B@BA@@DBB@@@BBFF@@BB@B@@B@@@@B@@ABB@@@@@@@A@ABA@@@A@@@AB@BB@@@@BA@@BA@@@@@BBB@@@@@B@@@@BB@@BB@@B@B@@@@@@@@@@BB@@@@@@BB@@B@BA@@@@B@@@BB@@B@@B@@BB@@BBBB@@@B@@@AB@B@@@B@BB@@B@@BB@B@@@BBB@@@@ABAAA@@B@@ADBB@@C@A@@@@@AB@@BB@@A@@@A@ABA@@@@@@@A@@BA@A@A@ABA@@@BB@@@@@BA@@@@@A@@B@@@@A@@A@@A@A@A@A@@@A@C@A@A@@@@BAD@@@@EA@@A@A@AB@@@B@BA@A@@A@@AAAAAB@AABC@@A@@A@@@@@@@@A@@AB@@AC@A@AAAAA@AA@AA@A@A@@@CA@C@@@@A@@@A@@@@@A@@@@@@A@@A@BB@@@@A@@A@AC@AA@@@@@ECC@A@@B@B@B@@@@@@@BA@@@@B@@@VU@@@@@@@@A@@@@@A@@@A@@@@@@@AA@@@@@@@@@A@@@@B@@@@@@BB@@@@@@@@A@@@@@@@@@A@@@@AA@@A@@@B@@@@@@@@@AC@@@@@@@@BA@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@@B@@A@A@@@@@@@@@@@@B@@@@@BABABA@@@@@@@@B@@A@@IYH{AAA@@B@@@@A@A@@A@@AABA@@@@@AB@@@@@AA@@B@@AB@@@B@@@B@@@A@@@AAA@@@@A@A@@BA@@@@@A@@A@@@AA@A@@@AA@@@AA@@A@@AB@BAB@@@@@A@@A@A@@AB@AA@@AAB@@@BAB@@@A@@@@@@@@AA@@@@@@A@@@@@B@@AB@@@@A@@@@A@A@A@AB@A@@A@C@A@A@@@CAA@@A@AA@@@AA@@AA@@A@AA@A@AB@@@@A@@@@A@@AA@@A@A@@@A@ABA@@AAB@@@BAA@@@@@@BA@@@@A@@A@A@@AA@AAA@@@AA@@@A@AAA@@@AA@@@AA@@AAB@@@@@@A@ADCBCA@A@A@A@A@BA@@@@B@@A@@@A@@@@A@A@@@@@AB@@A@@@AA@AA@@@A@@AA@@@@@@A@A@@BA@A@@@A@@B@@@BC@A@@@A@@@@@AAA@@B@@A@@@A@A@@@A@@A@@A@@@@AAA@A@AAAA@AAAA@AAB@@@@@AA@AA@@@@A@@@AAA@@@AAA@A@@@AAA@AA@@A@A@C@@AA@@@@BADA@ABA@@B@@A@@@@@AF@@A@@BA@@@A@@@A@A@@AA@@B@@@@AB@@@B@@AB@B@B@@@AAB@@@@@@@@AB@@@A@@AA@@@@@@@A@A@@AA@@@@A@@@@A@AA@@A@@@@AC@@@@A@A@@AA@AA@C@@BA@@B@@@BCBCBCBC@AB@@@@A@AAAAA@AA@@AA@AA@@@A@@@CAA@@A@A@A@A@@C@@@ACAA@@@@CBA@A@@@@ABABC@@@A@A@@@ABA@@BC@@BA@@@G@A@AA@@@GAABA@CB@@@@A@@@A@A@AAAAA@A@CDA@A@A@A@CA@@@@@@@@@ABC@@@CAC@AA@AAC@@@AAAACAAEA@A@@AA@A@A@@@A@A@@@@A@@AC@AAE@@@@@@AB@B@@@B@@BBA@@@A@ABA@@@AA@@A@A@ABABA@@B@D@B@@@@ABA@C@A@C@@@A@A@AA@A@@A@A@@AAA@@@@@@E@E@A@@@@B@B@B@@A@@@EE@A@A@@@AA@A@AAE@AA@@ACAA@A@AAABA@AAACA@A@@A@@@A@A@A@A@A@A@EBABA@A@CBA@@@@A@@AA@@A@A@CBE@A@A@@@A@@AAB@@@@A@AA@@A@A@@@@@ABAD@B@D@B@B@@"],"encodeOffsets":[[117132,28219]]}}],"UTF8Encoding":true});}));