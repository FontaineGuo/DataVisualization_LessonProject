(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('盘山县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"211122","properties":{"name":"盘山县","cp":[121.996411,41.242639],"childNum":8},"geometry":{"type":"MultiPolygon","coordinates":[["@@C@KBDTBDFA@A@CHA@@CC@CBA@@AE"],["@@E@E@IAABBDFFDFLLDLFC@@@ACG@@@A@A@AB@@ABC@@@A@BDGB@@@@A@A@@@@AA@@@@@AA@CCCDCB"],["@@^EF@@CAEAI@@ACCACGAAAA@@C@EBE@C@@@ABA@A@GBSBA@A@@FFX@BBB@FDAB@@@H@D@B@FBB@BBBD@@@@@AAG@@@@B@@@@@"],["@@LA@FJAJA@@@@@@CE@@@@@AAC@@HA@@BB@@JA@@LAB@`GvG@@LC@@BFŠAS[A@@AWgIQIK_QeSMEICMBIBKN}OC]QaWQMACBWAEE@EBMREBAAAC@MCKGCSEQ@UCIE@GCCSC@YFEH@JKFi@KAOEQ@KAACGKCGYOICG@CB@BADBDPRHP@DCFAD@BBBDDJDHLFRDF@@@BFHRTPRJFPHJDHFJDN@F@DDDHDFDH@BDBBHDFFFDFDFBF@FAD@FBB@BDDDBDDHBJDAXDLDTFBFABFV@AJQBBHBF@@@@@LGTABGRCJABEDA\\DDJA@@"],["@@@DBBDA@DC@CA@BD@BB@DAB@DB@H@X@B@@@@@@@B@@@@@BBB@JLBJDA@@BBB@BA@A@ACC@@EE@A@@C@AAFAAAB@@ABABBJA@@B@DFB@DBBCBBDBABCDHEAAACA@@A@@AAAAA@@@AA@@A@@AA@@@A@@AA@@A@@AAA@@AC@C@@@A@@@AAA@@@A@C@A@CAEAE@EACAKCAAAB@B@DAH"],["@@CCPGISAAIQ`@ACAQAMACCEIIEKEU@CCGBW@MKMKCOGMAOCA@KAEAACPKDAHILMDEPEPCLCLAXBHGJMRJNG^LTE`JXGNL@@@@HFSLdFB@JHDHBFVJLDFPPPNPFFDBLKRIBZNCZA@@RAJALPdAPGIISGSSIGCCIKKKWCSAO@E@CK@@@@AEIGKEQ@A@WICAQOCKDSHI\\C@S@CAS@KFGFGLIAE@MBQPOB@LEHMAI@CAMBE@UEQCSBGBKHKRSMUIKEIEACBKPCBE@EAAC@Q@ASDGDEDGHCFEDE@CAGCA@MKKI@AC@A@A@ABA@CFEFCDABCBC@C@AA@@@B@B@BELCFAJ@PAVAB@@@BCXBP@REP@B@DIHKJCL@DBZANOHOFGDeP@BGDABCDEBEDCB@@YLMDKDWDCBC@MDEB@@EDE@KBCBMBKBEBIBKCAAcM@DBDC@C@[D@JB@@DB@@B@B@@B@B@@@@C@AB@B@@@B@@BB@ABEB@B@B@FE@@LK@@B@@@HB@ALD@@L@BDDHFHHBHBJBF@BBDCHCLEH@B@@EHENI@G@GBMDA@@@CBEDIHMHMBIAGG@I@@KOIKGIA@@@C@A@CAILADGH@@@@ABADGFABCBABABIFA@GFACB@@A@@B@AIIKA@ADA@ABCB@CB@@C@@B@@AW@G@@JF@@DCB@BDABBCBG@ADABAAA@FC@@@C@E@@C@@CCA@AAAACH@AGAA@AH@@A@@@A@ABBBGCA@A@AD@BAEAA@CA@AFIM@M@@@EKGOAAEGIECAmEA@C@C@G@EBE@GBBDDPB@DALAJ@@FBFDDBDBDC@DJq@K@C@K@E@@B@@AB@@@@LPA@K@MACA@BBBABA@@BAB@DAB@@CGMWAAECEACAAA@A@ACA@@@AD@F@BAD@@AA@C@AA@@@ABAB@CCKEAAE@ICCCBK@CBAFCD@BA@AGAAADE@AEACAAAACMUAAE@GAE@CC@CCAAAEFA@AB@@AA@@GEAAA@ABA@CDUJA@AA@A@AAGAABAB@FBFBD@DCBA@CAAC@E@A@CACAAACE@A@AB@B@B@FADABA@CBCBAB@@ADGBCBABADABADCBEDAHAFADCDCBA@A@CBADADAFADAD@HBFCBCBABCHGGAIAQCQKGECEAC@EDEDGBAD@n@RBb@D@XAFCDEAG@AEOEMşBC@GB@@@AAAuHBDBA@BBBMD@CKB@@A@DFGBBFGBED@@BBDLJTO@CG@@@@CEGKCG@@ABA@C@AB@@AA@@@CIB@@A@ABDD@BDDMDDHC@@@RbFJK@CNPBB@@DJD@DD@@AHA@ED@DCD@L@BFF@@@@@@EN@@GR@XAVAD@BHTABP@D@@@B@@D@DB@@@BEBABCBGDCBGFIFGDBAFM@@UBK@E@A@@EC@@@CAA@@@A@C@G@MBG@@@@AA@EBEAMEGAA@A@]AWDaBU@SBK@OB@@@@@@EB]FMP@@EJ@@@@CFKRAD@L@@@@@BDBBB@B@BCBFHBB@@@@@@PPDDLJFFPP@@@@HJ\\BFJDB@BA@BR@B@D@LWFKDWCGDMJADAB@F@@@@AH@@AN@FBJFRNH\\HDDJFB@@@@B@@NFLLNHBBADLHJFHCHBHD@JBDJBLARHLHDBNFZRFDHBHBD@LAHDFHDFDBBDLHLFLDFALAHA@EN@D@D@JBBDAJ`@JLFDFDF@B@DC@GPB@B@@@DODVDNBF@RB@@N@F@BAHCFCB@ZM@A@A@@@A@@BABMA@DAB@PIJCHDFHDDDBBBBBB@BBB@DBDD@@@B@BABABAB@B@@BBBD@@DB@BBB@D@@EFA@@B@@N@DBB@DDFBBBBB@@BD@B@@DBDBDBB@BA@@BABBDBB@B@B@@@BBABD@RBB@BB@@@BAB@BHDBB@B@D@DLJXANAL@H@LBVBR@JCJCHEDOFAH@H@HBHFDBTHDBTF`JJDLH@B@@@@@B@B@@BB@B@@@B@@B@F@B@JFBBFBDBDDFHBBDBJDPFTGLEEE@CB@@ABAEGPIGEACJCBABA@A^KB@CEFA@KB@BADCXECGAACGA@@ACGCEJACIH@BBHAACR@DBFAL@@DF@HBfCEI@@JCFLB@PJB@@@@@@BHGGBAE@@A@@CEBEKZE@DB@@B@@B@@DB@@BDAB@@B@@@@B@"],["@@BDDDDD@@BBABB@BBBA@@BBBB@@@A@@@ED@ACAA@A@AICQC@@@@BB@@B@BBBB"],["@@BBC@@A@@@@AB@BB@@@@@@BA@@@@@@@A@@B@@GDGHA@@BA@@@@ABAOIA@IBeDGAE@@CK@EBCAQ@BDGBAAG@DJIBDFDH@BB@DHBBDHWFCDABA@@LEBDFA@]L@BABABIDBDHFOJFHAB@BA@@DFFKFSHD@THKL@BJBRHNFDBDDJJFCBBDFJH@BPEHHJNLCKMCCB@JEB@CCBAFA@AAAEGAA@@BABC@ADCA@LMBABA@@@@@@JOJINOJMHKNMLM\\OTILEHADCBAAAACAA@ABABA@A@C@ABAB@BA@@AAA@AA@G@@CECCEABCBK@CCE@@@@IK_@JRBBJTDAD@B@@@B@@B@@@B@@A@ABAAABAAKFB@A@ABB@ABA@"]],"encodeOffsets":[[[124809,42107]],[[124814,42091]],[[124811,42144]],[[124588,42035]],[[124915,42220]],[[125192,42329]],[[125019,42197]],[[125191,42329]]]}}],"UTF8Encoding":true});}));