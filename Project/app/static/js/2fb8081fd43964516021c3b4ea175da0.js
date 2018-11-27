(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('沅陵县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"431222","properties":{"name":"沅陵县","cp":[110.393844,28.452686],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GACCCCGGACGCG@GBGFGDIDK@I@GF@@GFEHGDGCICG@G@IAGBCD@HB@@@SDMNANAF@LBH@BD@LBH@FBDBBBDB@@@D@FABGHKHABAB@BDL@D@DCDSHEDCDKFEDGEAECE@M@KCGGDCFALBNBLBJ@HCJEBCBCBCBCHADCBGDEBCBEDCFC@A@E@EAC@MCOGAAA@@B@DBBDDFDDBBDBBGBIFIBIEEEE@CBAJGLCH@B@@DBBBABADGFEBKFA@C@AAC@ADCBA@ABCAA@C@CB@BCJ@DAB@@A@A@C@EBEBMFEDADCDAB@B@BB@BB@B@@ABEHEFADAF@D@BDBB@F@B@D@B@@BBD@DCHEHEJ@N@N@DD@BBBB@@BDBLBLFFHBHBD@@@B@B@B@DBFFLJBD@B@DEDAD@FADCDC@EAE@E@IBEJGHCHABE@GBEBA@ABEFCDCDIHEBCBCACCACAGAAA@EBCFGHADMRA@ADEBEDGHGLAH@L@DDJBFBF@DAFCFCDEFGD@@@@DFBNFBF@FAHAFBDAD@BABA@ABA@CCIAABAB@PCFBBD@DBFDDDBHBJDJBDDFFBBADABGBEDEHADCH@B@TBLBfBLAHDFFDRBFB@PC^@NBJBLDHDHBDFBB@B@HAJCFOB@LBJAF@DBDADEDIBCXCHFLDFL@DGPEH@DBD@DABEH@@@@@@ALCL@DFBFBBB@BABGDGDMDCBAD@BBDBFFNBLBDBBFJFBF@DAFGDCHCD@DB@B@HAFBF@DDBBAFBDBLZFBDAHAD@D@BD@HDPBHAF@@@@@FALDPBNDBBBBD@J@FDDDDDLBNCNAH@JBHDDFDD@DALGJEHCH@N@LBNDFDNPBNBJ@JAJ@HALBHDHBJ@BBLHHVZJNBDDBH@B@BBHDLNNFJBBF@BCHGL@BBDAB@FBLBFDDHFDBJBF@HBHDFDD@FAFGJIDADAN@J@D@DA@A@C@C@ADAHAPAD@D@BBBDDHBBDBJ@D@BDBBAB@DCDEBABABBBBBDDBHDBBDDBB@D@B@FCLEFELILGJELKHKFKLHJHFNARCNEHGJKNGLGN@DBHLHLFJFNDLFDDBHAHGLGJCJCFJJFFFFLFJDLFH@LONYDAFG@@FKJCRCPBLAFENMLKPILINILMHIHM@KFCJEL@HBFBBJ@LALDBFCHAHILEPAFDFDHHFJJ@JCNMRKFEJENALBNHLHFJHJBPBBBH@P@J@NFFJAJCLGLEPGLENDLFFJ@JALALGLCFCHENBJNFRFJ@P@TGVCB@FBBB@B@B@B@BDDBB@@B@B@@A@ABE@AB@@@B@B@@@D@@@BBB@@DBDBFD@DBFF@BGHMJCH@JBN@DDBF@L@@A@@@CAC@@@AB@BCDA@A@A@@@ABAB@BA@@B@@@BABADAB@B@B@BABADADABABAB@DAB@B@B@@@D@BABA@@@AB@BA@ADAB@@AB@@BB@@@@ABABA@@BA@@A@@AABA@A@AA@@@@AA@CAA@A@@B@@@@A@@BB@@@@@B@@BB@@B@@@B@B@BA@@B@@@B@B@B@@@B@@B@@B@@@B@BA@@BA@@@AB@@A@A@@@@B@B@B@B@B@@@@A@@@@@A@@AA@@@@AAA@C@@AA@@@B@@A@@B@@@B@BBD@BBB@B@B@B@B@@@BA@A@@B@@@@@@@@B@D@@@@BB@@BAB@@@BA@A@@BAB@B@@@B@B@@BB@@A@@@@A@@AA@@A@@@A@ABAAACC@AACA@E@E@C@EGGICEIACAA@AACC@ABEBC@C@C@CCCCECCAE@CDCBCBADC@A@C@ADCDABA@@@ADG@AEGCC@CBCFCFAJ@H@JA@@BAFAFADADABABC@EDGBCDC@@@ADEFEDC@ABCACAAAA@A@@B@D@@@BABC@@BABEBCFEBABE@AB@BABAB@B@DAB@BAB@DCDCBABADCBA@C@CBEBEDCDCBADAD@BBJDH@NAJAHGFEDMBAFAFCBC@CACCEBC@CFEDCFEDCHCNCDABA@A@@CEAAAC@CBA@ABABCDADCBAB@@CBCBI@A@@BADC@ADABA@A@@ACA@EC@@CCECAAAAAABA@ADEBA@AA@EE@CAE@ABCACECCC@@@E@I@@@AAAAAGAICEEAAC@G@GFC@EBABC@CAEAEAICEC@ACE@A@@BA@ABABCBABAHGDCD@DEBA@A@E@AFA@@@AB@@AAACAIEMGIAO@KBK@A@IAKAGEAAACCAAAA@@@EAEAECA@AA@C@C@E@EACAC@CACA@CAC@C@EBCBC@C@EACBE@EBABC@A@A@CCCAA@A@A@C@CBCBC@C@A@EA@@EAAAAA@CBC@CBADADAB@DEBCBE@CACAE@E@CBCBCBEDCBC@A@C@E@CBC@AB@F@DBDBFFDDHDDDHBDFBBDDFBFBD@D@B@H@H@HADADABADBBBBBBB@FAFAD@D@BBBHBD@BAAEBCDEBABAB@B@D@B@BBBBB@BD@BB@B@B@B@@ABA@AB@@@@@BB@@@B@D@BB@@BB@@@BA@@DC@@@@B@@B@@@@@BAB@B@BBBBBBB@BB@@@B@BADCB@B@@@BB@@@B@BA@AB@B@B@B@B@@@@BBB@B@B@F@@AB@@A@AAAAE@CBA@ABA@A@A@@A@A@AA@@@@@A@A@AB@@ABADCFCDADC@ECEACCAECCAAC@CBCDAD@@@DEBCFGHE@@@ABCFEFGDEDC@AAEACCCC@C@G@GDEDABEAA@A@CBCDA@A@C@EAEA@DADABC@CBEBABCBC@A@EACACBCBCBCBA@A@ECAACCAA@@A@AAAACCAEACACAAAAAC@AAA@AAACAECCACACA@@@A@A@A@@C@G@G@C@A@CAACACAE@CAC@CCEACAACCECCACCAACCACACCACBE@CBCDCBABCBC@AACA@C@ACE@E@AAACAA@CCAACCCEGGCEAACCEACAEAEAAAEA@CAA@A@CBC@@@@AAAAACEACCGCECCCAA@CAACAC@CACAAC@A@@AC@C@C@C@C@A@AAA@@@@CEAAACC@CAABE@C@ECIAECCGAE@G@ECGII[QcQWGYICACAMACAGEA@@GACAAMGECCGCC@C@A@A@CCACCEAEAEEEIA@EAEAECA@A@C@GBGDCAC@KCEAA@ABCBC@K@A@CAGGACAAAC@OAI@AACCC@A@A@CACACAA@ABCAAAE@IBCBAFEH@D@DADABABE@ACGAEKGMICECEEGKGGESKMGOGEAMIMKKGMKG@KCIBMCEEEEIMEIIKGKCGGGICGGA@SOCCGGIKIIEGG@K@KAKAKAOCGAIBEF"],"encodeOffsets":[[113105,28769]]}}],"UTF8Encoding":true});}));