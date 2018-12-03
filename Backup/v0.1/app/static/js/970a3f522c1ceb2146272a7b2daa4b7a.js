(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('东源县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"441625","properties":{"name":"东源县","cp":[114.746344,23.788189],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AE@ADC@CDC@CHAACCACCACA@ECAEEAC@C@A@CBC@GA@CECC@EECEEBCAE@E@EAACCGBC@CA@EBEBA@ACKMABA@A@CAC@EB@DABA@EAEC@@AAEACDGBG@C@EFC@EBC@GHBDBBBDCFEF@FCDABM@E@A@@BCBCFE@CDGAGDADAFC@KBEB@@@FAHCFAHBDABC@EAEAEBC@@DCDCFBD@BCBEBABCBA@G@GGGGEBC@KCACCAE@ECBGCACE@IBA@C@@CAAADADA@AE@CBAACAAAA@CDCEAFCBBD@DCAC@AAA@@D@FFFBBCD@D@@GAGAC@EDABAB@DABADE@CBA@CBC@ECIAI@IDABAFABC@C@AEGAG@@@AACACDE@C@CC@ACAABC@C@CACBE@CEE@E@AA@BADABEDEA@@AECAEC@D@D@DABEDCFECICABCBEC@FEDC@ABCD@AAACCCAEA@AEAEAEAAEEAA@CDABCA@EAAABABCBEC@@ABCC@@A@ADA@CAC@CBABC@CDA@A@@AEE@@ACCCCDCDEDAFE@E@EF@@GA@FA@EBCBEBBDC@A@CBBBEBBFBBBHBB@BFLABABCAABAFCHCJCDCBBB@DD@AHABDBDB@D@@DCBBBDABAB@F@DBFD@@DCDEHIDCDABCD@B@B@DCBA@CBABADC@BDADBBBD@DE@ABAB@DEABCC@CAAB@DEAC@@@EBC@AC@A@EACE@@EBC@AACBABAD@@A@A@AC@CCAEF@BADC@CEBGDCEA@C@BCFABBFBDAEGAAGBG@CBCE@CCAACCAAEAACACBCDA@CBACCCACBE@ABABC@C@ECAEGBGD@AEG@CDA@@@AAIMC@ADCACBEBC@ADC@G@C@AA@CCA@CBAAACAEACACCE@A@AABEBCFCBAHEBCBEBABCCCGCC@GAEACE@ACAEGCCBABCBCDA@EAAC@FGBE@E@AEC@@@AACDEECCBABCAEACBC@GCG@ACC@E@ABG@EAA@GCAAAAAAACCACC@CCECCCCA@G@CAC@CBCB@@@CAAECEBCAE@@@ELADDDAHABABCFADBBA@C@EBEDABABG@A@ABABCDEBAAE@CBABADEAEBGBKECAGCEAGAGCA@AACCAACAGAA@A@CBCDA@GHACCB@@EA@B@DBB@DAD@D@B@BAD@BAB@BABCBA@A@@BCCGCI@GDCDBDCLADAFCDAFELABADABK@@DEFA@GMAAAAACAAAC@A@CAA@@@CC@ADABC@CBCD@DABA@CDBBBBFF@D@DAB@BABA@A@G@KBIF@HBBBD@B@@ABABCH@BAJ@B@DFFBDBBBBBBBBBBBD@BBD@B@DABEJE@AJDDCHE@KBAD@B@DADADEJD@@HCLDFDJ@D@J@F@FFDDBDD@@@FBBFDFFD@FBDBDAFDB@@DC@C@EFCDABAB@BBD@F@BFFBHDBD@B@DBBDDDBDBB@D@D@BCBCB@BDDH@BBB@BBBBBDCDDNBFFBD@JBDFCHAFBFCB@HBHBBHDDFEH@HBDBDBBB@BBD@AFCBABCHAF@DDF@B@J@DBAFAFADDKHADAB@DADBDBFFHFBFBDBDDABABCD@D@B@@DBL@JDH@FCDGFCB@BJDL@@BDLBNAFBB@@B@DAHCJCFAFBF@@@BBDAFBDBDB@BBBDBBBBDDFDHBDBDBH@F@FDDBFBHDBBDBFFDHBHDFBDFDFF@BBDCDAFAD@@@FDDH@BADAFGFGFCB@@ABBBBBB@@@@B@@BHHAFFJJFFJDNFFF@@@BEAI@GDED@FDDHD@D@FADEFCD@F@BF@D@B@BDFBBFBFEHCBABAD@DA@AB@HC@CAE@E@@@A@AB@@A@@D@FCDEBIBI@EBCDAFBF@DBBDBBBBBDDBFFBBDJFBHBFBFBDCDAJAL@D@BDADAD@FDF@D@@@H@FCDEFEBCBCDCDEFEFCDCDAD@F@B@D@B@@BDFFHBHBNEFEDEDADCBA@AAC@C@ABAFGHEDCFADCFA@AB@@C@AAEAE@C@CBABA@CBCBG@@B@PAF@JDPDF@FAFCFAH@FBDBDDDFB@B@BAB@BADAB@@@D@BB@BBDBDDFDFDDDD@@@BA@ABAD@F@BBB@@BBDBNBJBDBFDBFFB@@D@DAD@DBDDFDHDBBB@BAB@FADAFEFCD@D@@@@B@B@BBFBDBBBBD@FBD@D@BBB@BBBD@BBDBBBBFDFFBBB@R@FBFDBDAHEFEHAHDJFBH@FDHDHBD@F@FABCBEBGBEBAB@DC@ABA@@B@D@DBBDBBDFDHDHDHDJBBBBDFBBBB@D@F@B@BBD@F@B@DAD@D@B@DDDFBBBD@FBB@B@D@DBN@NBNDNFDDFFB@DBDAD@DCDCBCBC@CBADADAHAH@FADABABA@C@EBCBCBCDEAC@@@A@C@CHEBCACACBCDCBABANEJAFBFBFDFBFDBBD@FCHEFEFEBG@A@E@@BADABCDCB@D@DAB@FAHCHAH@B@@@FBF@HADCBIBI@G@A@ADAB@F@LBJDFBAC@ECG@G@G@G@EAAAAECECCACAAA@CAE@GAECCACCCCAACAA@ADCB@DCB@BG@CBAFCHBF@FDJDJBJ@J@BBD@BBDD@DBDDDDFDBDB@AAC@G@C@ABGDEFEFCBAB@@CCCCCCCA@AA@C@A@CB@DADABADA@E@CAGAGD@DBB@B@B@BA@IBGBCDCHAHAHBFABA@C@EBEBCDCBABABCBABEBCBCB@BC@@LEFCBC@ABCDAFC@@BCBCCEACCAC@CBC@C@CACDCDCFAFABCBEAEA@@EBC@CA@A@@FGBAEEAC@CBA@AD@B@DADBB@BA@C@A@@DADAB@@A@@@CBAD@BC@AB@DA@A@@DAB@BCBABAB@BBBBD@DBD@B@BCB@B@BB@A@A@A@C@ACC@@A@A@CAAC@@BC@AB@@@AACAAAABAA@C@ACA@ABC@@@AAA@C@AB@D@FB@@BA@@@ABABABBB@BA@@BB@A@ABADAB@B@@@BA@AAAD@@AB@BAB@@BB@BBB@B@@@@CBCB@BBD@BA@AAAAA@AB@BBBB@BD@DBBDD@DDB@B@DBBAB@BAFB@BBBBBBBBADABCBBB@D@D@FA@@DA@B@B@D@DDBDD@@BB@BD@B@BADCBA@AAA@AB@BAD@BAB@F@F@BABBB@BCDA@CAAAA@AFC@CH@DDFA@A@CAACAACACDADA@AFAD@BABCAA@AFABABA@A@CBAB@FABBDBD@BAD@BB@AD@B@@A@@@AAAAA@E@CBAFADCD@@ABA@CD@BEBCBABAB@@ABCDA@A@ADA@@BA@ADCBBB@B@DABA@EAA@A@A@A@A@ABCBAD@DA@AFAHAJCB@DCDABAFAB@DABA@AACAAC@CA@C@E@EAA@AFGBAAAAA@CAAA@AA@ACC@@@C@AFAD@F@DAAA@C@@BCBCCAD@DC@@@ACAA@@CC@C@ABCDCA@A@@@AFEDCBCDAAAG@AAAA@CCGAAG@GIECA@ECECAAAAECCCCCCAEAAA@C@A@AGBABG@@BAB@BA@E@@DC@E@EA@@ACEAACAAACECEEGAA@A@A@MACDEB@@A@EDAD@HC@E@EAGBE@ECABCAI@CAADCBCCGGCAGA@C@CAAC@CBECAEEAC@CB@@EDCEAAA@A@CA"],"encodeOffsets":[[117957,24310]]}}],"UTF8Encoding":true});}));