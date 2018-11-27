(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('汝南县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411727","properties":{"name":"汝南县","cp":[114.362379,33.006729],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@@@@@@A@@@AAAAC@A@A@A@@AA@@@@AA@BA@@@AA@@@A@@@@A@A@@@A@@@@@A@@@AAAA@@@@ABAACB@AA@@@AACAAA@@@AA@@@CAA@AAABCAA@AAA@A@@@C@AAA@A@@@A@AA@@BA@@@@@@@@A@@B@@AB@@ABABA@@@@@A@@@AB@@A@AB@@@@A@A@@B@@AAA@AA@@BCAAAABI@@MC@BI@@FEABEA@AA@BC@@DE@A@@FA@@DC@@B@@@D@@C@@CC@@DC@@GD@@CG@@FC@@BB@@HCBAB@@AB@@@@@@@@A@A@@BG@@AA@@BC@@@BAA@@A@@@A@@@@@A@@@C@A@@@A@@@A@A@AAAABADCA@CAAE@ABOA@HA@@@A@A@@CC@@F@BB@@BF@@FD@ABC@AD@B@B@B@B@BAF@BIF@DB@AFA@@B@B@@@@B@B@ABD@@@@B@@@@@@@B@@D@@BAJB@@AB@@BADB@@BBBB@@@@@@BB@B@@@@AD@@B@A@@B@@@@@D@ADF@@BBB@@B@@BD@@@@B@@B@B@@@BB@@B@@B@@@BA@@@BB@@E@@@@D@@@BBF@B@@@B@@@@@B@BA@@D@@C@AB@@@B@DM@BAA@GA@BC@@@@B@@@@@@M@@@@@@E@@A@@@@G@@@AE@@@AE@@AAC@CAA@@C@AC@EA@B@@C@@CC@@AB@@@BCE@@B@BC@A@@AA@@B@BAA@A@@G@@DIAABB@B@@DA@A@@@@F@@A@AH@@A@@BA@A@@BAB@BA@@BABAB@@@BA@@B@@@BA@@@@BAB@BB@BB@D@B@BB@BBD@DB@BFD@B@@@BAB@D@FB@@BBBB@@ADC@ADAB@D@B@@BFDDFBDBBB@BBD@B@@E@@F@B@AD@@D@@@@AD@@@@@@@B@@@@@@@@@@@B@@@BD@@L@@@@N@@BB@@@BAB@@@@@D@@@@BD@B@B@B@@ABA@CBABAB@@@B@BBBDB@B@@@B@B@@A@ABA@ICC@@@AB@@@B@@A@@@@AA@@@@@@BA@GF@@@F@BA@@@A@AA@@AA@@@@A@@@@@AB@@@@A@A@A@@@A@A@A@@@@@BA@@@A@@A@A@@A@@AA@@A@@AA@@@ABA@@@@@A@@A@@@A@A@@A@@@A@@@@@@B@@B@AB@@@BAAA@@B@@@@@B@BA@ABA@@@A@@B@BA@A@@@@@@B@@@@@@A@@@@BAB@@@B@B@B@@@DAB@@A@A@@@@D@B@@F@@@@BB@DBB@@A@@B@@@@@B@JB@@@@@DA@ALAFABC@@D@@A@ABBB@@@@@JAF@@B@@BB@@@@@BCDA@C@@H@@@@CF@@CB@B@F@@BF@@EJ@@@B@B@@@@@@@BA@@BA@@E@@GDAH@@@@B@@A@@D@@D@@HA@@DC@@AA@@B@@D@BD@F@BBBDH@@@@@B@@BD@@D@@JAA@JG@@D@@IA@B@H@@C@@B@P@B@@B@@@@DG@@F@@A@ABCBA@@DC@@H@BA@@@C@AA@@@@A@@@@@A@A@ABA@@@@C@@C@@BA@@D@@A@@@A@@@AB@@C@AA@@A@C@A@C@ABA@A@A@@@A@@AA@@@C@@@A@@@@B@@@B@@ABA@A@CB@@@B@@LBGJBB@@B@@A@@DB@@@@B@@AB@@@B@BB@BBB@@@@B@B@B@@@BB@@@@@B@@C@@JDB@B@FCA@@ABABB@@@@B@DC@ADCAABAD@@CAA@@@AH@@D@@DA@@B@@D@@B@BB@@E@@B@B@@@@EB@DD@B@@A@BDC@@BC@@DHB@@BKB@BB@DBBBC@AFDAB@BABABB@B@D@AH@@CC@@@H@@A@A@A@AH@D@@A@ADA@@D@@@CA@@D@@@@@@ABDP@JBJBF@DDBBBDDFD@@BBB@B@FCBAFCFCD@B@B@BBB@BBDHBBBBB@D@B@BADABAD@B@BBDBB@BBH@FBH@F@B@DA@ABADE@@@AFABADA@@FBFDFDDB@@BBB@@DB@B@B@AHB@@FBFBDBDFDLJ@@BBCDABA@@B@@@@BB@@@@@B@@B@@@@B@B@@@@@BA@@@BB@@@@A@@@A@@@AB@@BBBB@BBB@BA@B@A@C@C@A@@@@AA@@B@@@B@@@AA@AA@B@@DBA@A@@@@B@@B@B@@@@B@@@@@D@@ADBB@B@DBBBDDH@D@@@B@DABAJ@@ADCDMTADGHC@E@KBGAGAOAEAEAEECA@AAAA@E@A@E@I@E@E@@@D@@BC@@@@B@B@@@BDB@@@B@B@@D@@@@@BJA@A@@@@D@@B@@@@@AD@@@@C@E@@@GAKAA@G@@@IAA@A@AE@@@@C@A@@@AB@@@B@@BB@B@@A@@BC@@@@B@F@@ABA@@D@@A@@@@H@@@@G@C@@@AAA@A@@A@A@A@@K@A@@F@@C@@@@D@@A@A@A@@B@B@@G@@@@@AD@B@B@B@@C@A@@BD@@@@B@BB@A@D@@@@DBD@@@FA@A@@@A@@@A@@@@B@@AB@F@@B@DBADD@@BBB@@ABA@A@@@@FFA@@@B@D@D@J@@A@@@BB@@AB@@@@AB@@@@AJ@@B@B@@@@D@@@@LB@@B@@@F@B@@DF@@B@BB@B@@@@B@@A@@D@@A@C@@@@BC@@@@AC@@@@B@B@@@@B@@D@@B@@@B@D@@@B@@@@@D@@@@B@F@@C@@@AB@B@@A@A@@@@BH@@@BB@@@@F@BB@@@B@@D@@B@D@BB@@@B@@@@B@@BBB@@@FADA@A@E@@A@@A@@AAB@@@B@@ABE@A@@B@F@B@F@B@BBB@B@D@B@B@@@@@@BBB@@BB@@@@GDAB@@@@@@D@B@@B@B@BB@@B@B@@@D@@I@CC@@A@@BBB@F@@B@@@@D@@E@@@@BND@@BA@D@@@DB@@B@@B@D@H@@@@AB@D@D@D@D@@BDBDDDB@@DAF@@AB@DE@@@@B@D@@B@@B@@D@B@D@D@DADAF@BAB@B@@@BBB@B@@@F@@@B@@B@B@B@B@B@@BB@@BDDBB@@B@D@@BB@@@JB`@F@@@@OH@B@@@@B@@F@@B@B@@N@BBD@D@@@D@B@@@@A@A@@@@@@@AB@DB@@H@BBD@B@@A@@@@@E@A@@N@FA@@@E@AB@F@B@@@BA@AB@F@@CBC@EJ@@@@BF@@@@BAJ@DB@D@@FJ@@A@@F@D@B@@AF@D@AH@@F@@@BB@@D@@FF@@@B@BBBBB@F@B@@@B@BBB@B@HAD@DAD@L@FB@@@D@@D@@F@@H@D@B@@BD@HB@@DEBBD@@@H@@HF@AFB@@BB@@@D@AHD@B@@HB@J@BBAH@@FDJFABB@B@BB@A@A@CB@B@NBD@B@@@FCBA@A@@@@A@@A@CB@@@B@D@@B@BHGB@@@@DP@D@@DF@B@@A@A@A@@CAB@@IB@D@@@@AB@B@@C@@D@@BF@@@BGAO@@@AF@@BBDB@FBBBD@@@@B@@@BAB@BBHF@@AB@B@F@@@@C@@BAF@DCAGA@@E@ABAHA@@@CB@AABC@E@AEAJK@@EEA@@AAE@C@C@A@@AA@@C@@@@A@@BA@A@A@@@A@A@C@AA@@@A@@A@@@@@A@A@G@@AAA@A@@@@AB@@@@A@@ACAA@A@@@@B@B@@A@@@AA@@@@C@@A@@B@@@@A@AAA@I@@@A@@G@@B@@@@C@C@@DA@@BAB@@@@A@G@@@@@@DAB@B@@AAE@ABA@A@@@@D@\\@J@J@F@@@@C@@C@@AA@@A@@C@@AAAAAAA@@@C@C@@@@B@@G@A@@DA@@@A@A@@CCAA@AAGAA@G@AA@CCA@@@@A@AAA@CBEBE@A@AA@ACAAEAGAC@GCA@AA@@@A@A@@@AA@A@@ABA@@@A@@@A@@@ABAB@DA@@B@@A@@BC@@BC@@@A@@@@DEDG@ABCC@@@@KI@@@@@@C@AAACCAACECIAE@CAAAAACCC@ACCA@CAA@EAA@AAA@AA@@AA@A@AAA@A@A@E@@AA@AAAA@CAA@A@A@CBA@AAA@@ACAAAAAA@A@E@A@A@@BC@@@@@@C@@@ADA@@@@@@@A@A@ABA@@B@B@B@B@BA@A@@@@AC@@AC@@BC@ABADA@A@@@@@A@AAA@@A@A@@@ABAB@BA@AA@@AAAAA@@CA@@C@@BA@@BAB@B@B@F@B@@AB@@@BABA@AB@@AB@@@@AA@@ACAAA@A@@@C@A@ABC@ABA@A@@AAAC@@@A@@@@@@BAB@DBB@BA@@@BB@D@B@B@BBBBBBBDBB@DB@BB@@@B@AB@@@@ABCBEBG@A@AAECE@A@@BA@@BADAPADAB@BADC@@D@NBB@D@BB@@BA@@B@@A@@@C@@@A@@@@D@F@B@@@B@@A@@AAACA@AAA@A@@@A@ABAB@@A@@@AA@ABCBABAB@@AD@BAB@D@D@DBB@DDDBBBBBBBBD@BB@B@FAD@DBD@@B@@BB@B@BBB@B@B@B@@@B@@BB@@B@B@BADC@@DA@@@@B@BB@DBBB@@@B@B@BB@@DB@@B@BCBA@A@@@A@A@AAAEE@@@A@A@@B@DA@@@@B@@A@@@AA@@AAA@@A@CCA@@@AA@A@@BA@@BABA@@BA@@@@AA@@A@A@A@CBA@A@AAA@@AA@@A@A@AB@@A@@BA@@B@BBB@BBB@B@H@BB@@B@@B@@@B@@@B@B@@@BDDDBDBBBBB@BB@@B@@B@BADAB@FAB@@@D@B@B@@B@@B@@F@D@BA@@BA@C@@@@@@D@BBBBBBB@@DBDBB@B@@@DAD@BADCDALCBADABABA@@BCBA@ABC@I@C@@AA@AA@@@C@AAA@A@CAA@@@C@CBA@AB@@AAA@@@AAAA@@@AAC@AA@EA@@@@@A@ABABCBABA@@BA@A@@A@AA@@A@A@@BA@A@AB@DCD@@@@A@A@A@AAAA@@@A@A@@DCDCDAFI@AB@BCB@BAFAF@BADAB@B@B@BBB@@BB@@BBB@B@D@B@B@BA@ADA@@@BB@BD@BBB@DAD@FBF@B@@@B@B@@AHC@A@AAA@AAA@AA@@@EA@@A@@A@@BA@@HCDAB@B@@@@@B@@D@@@B@@BABABAA@@ACEAE@@@C@@@CB@@AB@B@@B@@BB@DBF@B@B@DBBB@@@B@B@DAB@BADABCB@@A@A@ACC@A@A@@@A@@BC@@@AI@KCEA@@@A@ABC@ABAA@A@@@A@@CA@@AABA@@@@B@@@B@B@@@B@B@BA@@@CBA@AA@@@@@A@@BA@@@@AAG@AC@@@@A@@DA@@C@@BA@@@A@@AB@@AB@@A@@BA@@AAA@C@@A@@AB@@@@A@@G@@BAB@B@D@@@@BBAB@@E@@BC@C@@@@@BAB@@@@AA@A@@@@@@@AA@B@@@@A@@@@B@@@@A@@@@@A@@A@@@@A@A@A@A@@@@@@B@@@@@@@B@@A@ABA@@A@@@@@@@@B@@A@@AAA@@A@@BC@@CC@@@@A@A@@@@@AA@ABA@@@A@@@@@A@BA@ACB@@@@AA@@@@@A@@@A@AB@C@@B@@AB@@A@@C@A@AE@A@AA@@@@BABBDAAA@@@A@@B@@@@B@@B@@A@BB@B@BA@@@@@AA@@@A@@A@@@AB@B@AAAA@@@@C@@@@AAAB@@AAA@AA@@A@@BA@@BAA@@AA@@@AA@@@@@C@@@A@@@@A@@@@BA@@IA@BCA@AB@@AA@EC@AAA@@@DC@@@EAGD@AABA@@@A@@@@@AA@@@@A@@B@@@@@@@BAA@@A@@@@B@@@B@B@@CBA@@@AA@@@@A@A@AAAA@@@@@A@AA@@@@@@BABA@@B@A@@AA@@@@@@@BA@AB@@A@@@@A@@@@A@AA@@@@A@AD@@CBA@@@@@@@@A@@@@@@C@C@@@A@@A@@@@A@@@@A@@B@@@@@@A@@@@@@@@@@A@@@@@CA@@A@@A@@@A@@@AA@C@A@@@A@@@@@@A@@@A@@@@C@A@@A@@@A@A@@@@B@@@@@@@@A@@@@B@@AA@@@AA@@AB@@CA@@AA@BG@@B@@@@A@@BA@@@@AAA@@@@B@@A@A@@@A@A@@@A@A@A@@CAA@@@A@BC@@A@@AA@@C@@AAA@@@@A@@@A@C@@@AB@A@@A@@@A@A@@B@BA@@@@@@@@A@A@@@@@@A@A@@@@A@@@A@@A@AA@@A@@BA@@@@A@@AA@A@AA@@@@AAGC@@CB@@@@@@@A@@A@AA@@@@@@@AB@@@@@A@@@A@@A@@@A@@@AB@AA@@@@A@@ACB@@ABA@A@A@E@@@AAABA@CA@@C@A@@@AA@@@A@A@A@@BA@@@@@A@@A@@@@C@@@@A@CA@@ACA@@@A@AA@A@@@@@A@@@@A@@A@@B@@A@@A@@@@@A@@B@AA@A@@A@@B@@@@A@@@A@@@@AB@@AAA@@AB@@@B@@@@@AA@@@A@@@@A@@@AA@@@@@A@@@@@AA@C@AA@@@@AA@@@AA@AB@@A@@AA@@@A@@@A@@@CC@@@A@@A@@A@@@A@E@A@@@@@@A@@@@CA@@@C@@ACAAAA@@A@@@@@A@@AA@AA@AA@@@A@@A@A@A@CAAAAAAA@AA@@@@BA@AA@A@@@@@A@@A@@A@@B@@@AA@BA@@@AAB@@AA@AA@@CAC@@@A@@@BA@@@@@AA@C@@@A@A@@A"],"encodeOffsets":[[117073,33442]]}}],"UTF8Encoding":true});}));