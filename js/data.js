/* ============================================================
   I LIKE EXAM — content store (admin panel se bani)
   Notes, jile, rajya, exams, tricks — prashn js/questions.js me hain.
   ============================================================ */
window.DATA = {
 "site": {
  "name": "I LIKE EXAM",
  "tag": "Taiyari ka bharosemand saathi",
  "notes": "Is site ka sara likha hua content original hai. Factual data (jile, rajya, samvidhan ke anuched) sarkari/jan-sansmrutik strot se hai."
 },
 "subjects": [
  {
   "id": "rajasthan",
   "name": "Rajasthan GK",
   "hi": "राजस्थान अध्ययन",
   "icon": "🏰",
   "notes": [],
   "sets": [],
   "nsets": 2,
   "nq": 19
  },
  {
   "id": "india",
   "name": "India GK",
   "hi": "भारत का सामान्य ज्ञान",
   "icon": "🇮",
   "notes": [
    {
     "id": "ind-parichay",
     "title": "Bharat ka Samanya Parichay — Naam, Sthiti, Simayein",
     "hi": "भारत का सामान्य परिचय",
     "mins": 8,
     "html": "\n\u003ch3>नाम कैसे पड़ा — भारत, हिन्दुस्तान, इण्डिया\u003c/h3>\n\u003cul>\n  \u003cli>\u003cb>भारत\u003c/b> — आर्य राजा \u003cb>भरत\u003c/b> के नाम पर। उसी की स्मृति में यह भूमि \"भरतवर्ष\" / \"भरतसंमत\" कही गई।\u003c/li>\n  \u003cli>\u003cb>हिन्दुस्तान\u003c/b> — सिन्धु (इण्डस) नदी का फ़ारसी रूप \u003cb>\"हिन्दु\"\u003c/b>, और उसमें \"स्थान\" जुड़ने से हिन्दुस्तान बना।\u003c/li>\n  \u003cli>\u003cb>इण्डिया (India)\u003c/b> — यूनानियों ने सिन्धु को \u003cb>\"इण्डस\"\u003c/b> कहा; उसी नाम से अंग्रेज़ी का India बना।\u003c/li>\n\u003c/ul>\n\u003cdiv class=\"notice\">तीनों नाम एक ही जगह से आते हैं — \u003cb>सिन्धु नदी\u003c/b> या \u003cb>राजा भरत\u003c/b>। प्रश्न में अक्सर \"भारत नाम किसके नाम पर पड़ा\" पूछा जाता है — उत्तर \u003cb>राजा भरत\u003c/b>।\u003c/div>\n\n\u003ch3>भारतीय उपमहाद्वीप की प्राकृतिक सीमाएँ\u003c/h3>\n\u003cdl class=\"kv\">\n  \u003cdt>उत्तर\u003c/dt>\u003cdd>हिमालय पर्वत श्रेणी\u003c/dd>\n  \u003cdt>पश्चिम\u003c/dt>\u003cdd>हिन्दुकुश और सुलेमान पर्वत\u003c/dd>\n  \u003cdt>दक्षिण\u003c/dt>\u003cdd>हिन्दु महासागर\u003c/dd>\n  \u003cdt>इस उपमहाद्वीप के देश\u003c/dt>\u003cdd>भारत, पाकिस्तान, नेपाल, भूटान, बांग्लादेश\u003c/dd>\n\u003c/dl>\n\u003cp>उपमहाद्वीप का सबसे बड़ा देश भारत है, इसीलिए पूरे क्षेत्र को \u003cb>भारतीय उपमहाद्वीप\u003c/b> कहा जाता है।\u003c/p>\n\n\u003ch3>गणितीय स्थिति और माप\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>क्या मापा जाए\u003c/th>\u003cth>मान\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>अक्षांशीय विस्तार\u003c/td>\u003ctd>6°4′ उत्तर से 37°6′ उत्तर तक\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>देशांतरीय विस्तार\u003c/td>\u003ctd>68°9′ पूर्व से 97°25′ पूर्व तक\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>उत्तर—दक्षिण लम्बाई\u003c/td>\u003ctd>लगभग 3,214 किमी\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>पूर्व—पश्चिम चौड़ाई\u003c/td>\u003ctd>लगभग 2,933 किमी\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>कुल क्षेत्रफल\u003c/td>\u003ctd>32,87,263 वर्ग किमी\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>कृषि योग्य भूमि\u003c/td>\u003ctd>विश्व में \u003cb>सातवाँ\u003c/b> सबसे बड़ा देश (कुल भूमि का 2.43%)\u003c/td>\u003c/tr>\n\u003c/table>\n\n\u003cdiv class=\"box\">\u003cb>दक्षिण के दो बिन्दु उलझन वाले हैं — अलग से याद करें:\u003c/b>\u003cbr>\nमुख्य भूमि का दक्षिणतम बिन्दु — \u003cb>कन्याकुमारी (8°4′ उत्तर)\u003c/b>\u003cbr>\nपूरे देश का दक्षिणतम बिन्दु — \u003cb>इन्दिरा प्वाइण्ट, ग्रेट निकोबार (6°4′ उत्तर)\u003c/b>\u003cbr>\nमानचित्र पर \u003cb>इण्डिया प्वाइण्ट 6°45′ उत्तर\u003c/b> पर अंकित मिलता है।\u003c/div>\n\n\u003ch3>चारों ओर जल\u003c/h3>\n\u003cul>\n  \u003cli>\u003cb>पश्चिम\u003c/b> में अरब सागर, \u003cb>पूर्व\u003c/b> में बंगाल की खाड़ी, \u003cb>दक्षिण\u003c/b> में हिन्दु महासागर।\u003c/li>\n  \u003cli>भारत को \"महासागर में उभरा हुआ स्थलखण्ड\" कहा जाता है — दक्षिण एशिया का सबसे बड़ा प्रायद्वीप।\u003c/li>\n\u003c/ul>\n\n\u003ch3>भारत का मानक समय\u003c/h3>\n\u003cdl class=\"kv\">\n  \u003cdt>मानक देशांतर\u003c/dt>\u003cdd>82°30′ पूर्व — इलाहाबाद (नैनी) / मिर्जापुर के पास से गुजरता है\u003c/dd>\n  \u003cdt>IST और GMT में अंतर\u003c/dt>\u003cdd>IST = GMT \u003cb>+ 5 घंटे 30 मिनट\u003c/b> (भारत GMT से आगे)\u003c/dd>\n  \u003cdt>82°30′ पर आने वाले राज्य\u003c/dt>\u003cdd>उत्तर प्रदेश, मध्य प्रदेश, छत्तीसगढ़, ओडिशा, आंध्र प्रदेश\u003c/dd>\n\u003c/dl>\n\n\u003ch3>कर्क रेखा (23°30′ उत्तर) — 8 राज्य\u003c/h3>\n\u003cp>कर्क रेखा इन आठ राज्यों से होकर गुजरती है — \u003cb>गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखण्ड, पश्चिम बंगाल, त्रिपुरा, मिजोरम\u003c/b>। इनके उत्तर वाले सभी राज्य कर्क रेखा के उत्तर में हैं।\u003c/p>\n\u003cul>\n  \u003cli>रेखा के सबसे नजदीक की राजधानियाँ — \u003cb>गांधीनगर, भोपाल, राँची, अगरतला, आइजोल\u003c/b>।\u003c/li>\n  \u003cli>\u003cb>राँची\u003c/b> कर्क रेखा से सबसे नजदीकी राज्यधान है।\u003c/li>\n  \u003cli>राज्य में नजदीकी स्थान — \u003cb>बाँसवाड़ा (राजस्थान)\u003c/b>।\u003c/li>\n\u003c/ul>\n\n\u003ch3>देश के चारों अंतिम सीमा बिन्दु\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>दिशा\u003c/th>\u003cth>बिन्दु\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>उत्तर\u003c/td>\u003ctd>इन्दिरा कॉल (लद्दाख) — 82°05′ उत्तर\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>दक्षिण\u003c/td>\u003ctd>इन्दिरा प्वाइण्ट (ग्रेट निकोबार)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>पूर्व\u003c/td>\u003ctd>किबिथु (अरुणाचल प्रदेश)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>पश्चिम\u003c/td>\u003ctd>गोरेमोटा (गुजरात)\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cp>इन्दिरा प्वाइण्ट भूमध्य रेखा से लगभग \u003cb>876 किमी\u003c/b> उत्तर में है। इसका पुराना नाम \u003cb>पिगमेल्ियन प्वाइण्ट\u003c/b> (पाइरस प्वाइण्ट) रहा है।\u003c/p>\n\n\u003ch3>भूमीय सीमा की लम्बाई — कौन-किस देश से\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>देश\u003c/th>\u003cth>सीमा (किमी)\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>बांग्लादेश\u003c/td>\u003ctd>4,096\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>चीन\u003c/td>\u003ctd>3,917\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>पाकिस्तान\u003c/td>\u003ctd>3,310\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>नेपाल\u003c/td>\u003ctd>1,752\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>म्यांमार\u003c/td>\u003ctd>1,458\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>भूटान\u003c/td>\u003ctd>587\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>अफगानिस्तान\u003c/td>\u003ctd>80 (सबसे छोटी सीमा)\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"notice\">सबसे लम्बी सीमा — \u003cb>बांग्लादेश\u003c/b> से। सबसे छोटी — \u003cb>अफगानिस्तान\u003c/b> (80 किमी, गिलगित-बालतिस्तान के पास)।\u003c/div>\n\n\u003ch3>प्रसिद्ध सीमा रेखाएँ\u003c/h3>\n\u003cdl class=\"kv\">\n  \u003cdt>डूरण्ड रेखा\u003c/dt>\u003cdd>पाकिस्तान — अफगानिस्तान के बीच (1893, मॉर्टिमर डूरण्ड)\u003c/dd>\n  \u003cdt>मैकमोहन रेखा\u003c/dt>\u003cdd>भारत — चीन की सीमा (1914, शिमला सम्मेलन)\u003c/dd>\n  \u003cdt>रेडक्लिफ रेखा\u003c/dt>\u003cdd>भारत — पाकिस्तान विभाजन (17 अगस्त 1947); बाद में यह निःशस्त्रीकरण रेखा बनी और \u003cb>1972 के शिमला समझौते\u003c/b> से \"नियंत्रण रेखा\" (LoC)\u003c/dd>\n  \u003cdt>शून्य रेखा\u003c/dt>\u003cdd>त्रिपुरा — बांग्लादेश के बीच\u003c/dd>\n  \u003cdt>पाक अधिकृत कश्मीर\u003c/dt>\u003cdd>पाकिस्तान के अधिकार में रहा कश्मीर का भाग\u003c/dd>\n\u003c/dl>"
    },
    {
     "id": "ind-geo",
     "title": "Bharat ka Bhugol — Mukhya Ankde",
     "hi": "भारत का भूगोल",
     "mins": 5,
     "html": "\n\u003cdl class=\"kv\">\n  \u003cdt>Kshetraफल\u003c/dt>\u003cdd>32.87 lakh varg km — Asia me 3rd, duniya me 7th\u003c/dd>\n  \u003cdt>Rajya / UT\u003c/dt>\u003cdd>28 rajya + 8 kendrashit kshetra\u003c/dd>\n  \u003cdt>Bhumi sima\u003c/dt>\u003cdd>lagbhag 15,106 km (7 deson se milati hai)\u003c/dd>\n  \u003cdt>Samudri tat\u003c/dt>\u003cdd>lagbhag 11,098 km (dweep-samuhon samet)\u003c/dd>\n  \u003cdt>Sabse bada rajya (kshetra)\u003c/dt>\u003cdd>Rajasthan\u003c/dd>\n  \u003cdt>Sabse chhota rajya (kshetra)\u003c/dt>\u003cdd>Goa\u003c/dd>\n  \u003cdt>Sabse adhik jansankhya\u003c/dt>\u003cdd>Uttar Pradesh\u003c/dd>\n  \u003cdt>Sabse adhik saksarata\u003c/dt>\u003cdd>Kerala\u003c/dd>\n\u003c/dl>\n\u003ch3>Rekhayein\u003c/h3>\n\u003cul>\n  \u003cli>\u003cb>Kark Rekha (Tropic of Cancer)\u003c/b> 8 rajyon se hokar guzarti hai — Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.\u003c/li>\n  \u003cli>\u003cb>Prathamik meridian (82°30' E)\u003c/b> — Mirzapur (UP) ke paas se; ye IS ka adhar hai.\u003c/li>\n  \u003cli>Bharat ka sabse purva-pashchim vistar Kashmir se Kanyakumari tak — lagbhag 3,214 km.\u003c/li>\n\u003c/ul>\n\u003ch3>Nadiyan, pahad, van\u003c/h3>\n\u003cul>\n  \u003cli>\u003cb>Ganga\u003c/b> — rashtriya nadi; sabse lambi nadi jo Bharat me behti hai.\u003c/li>\n  \u003cli>\u003cb>Kanchanjunga\u003c/b> — Bharat ki sarvuchch choti (8,586 m); Everest nepal/China ki sima par hai.\u003c/li>\n  \u003cli>\u003cb>Western Ghats (Sahyadri)\u003c/b> — Narmada, Tapi, Mahanadi, Godavari, Krishna, Kaveri sab yahan se nikalti hain.\u003c/li>\n  \u003cli>\u003cb>Dekkan ka pathar\u003c/b> — basalt lava se bana; kala-kali mitti (black soil) kapas ke liye shreshth.\u003c/li>\n\u003c/ul>\n\u003cdiv class=\"box\">\u003cb>Mitti ke prakar:\u003c/b> alluvial (sabse faili hui), black/regur, red, laterite, arid, forest — kul 8 prakar, NCERT ke anusaar mukhya 6.\u003c/div>"
    },
    {
     "id": "ind-symbols",
     "title": "Rashtriya Chinh aur Pratham",
     "hi": "राष्ट्रीय प्रतीक",
     "mins": 3,
     "html": "\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Chinh\u003c/th>\u003cth>Kya hai\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya pashu\u003c/td>\u003ctd>Bakumain (Panthera tigris)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya pakshi\u003c/td>\u003ctd>Mor (Pavo cristatus)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya phool\u003c/td>\u003ctd>Kamal\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya vriksh\u003c/td>\u003ctd>Vad\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya drishya\u003c/td>\u003ctd>National Emblem — Ashoka ke Sarnath Singhshashe par 3 sher\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya gaatha\u003c/td>\u003ctd>'Vaishnava Jana To' — Gandhi ji ka priya\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya geet\u003c/td>\u003ctd>'Jana Gana Mana' — Rabindranath Tagore\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya nishan\u003c/td>\u003ctd>'Satyameva Jayate' — Mundaka Upanishad\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rashtriya khel\u003c/td>\u003ctd>Koi bhi khel officially \"rashtriya khel\" ghoshit nahi hai (ye ek prachalit bhranti hai)\u003c/td>\u003c/tr>\n\u003c/table>\n\u003ch3>Jhande ke niyam\u003c/h3>\n\u003cul>\n  \u003cli>Flag Code of India 2002; triranga ka anupat 2:3.\u003c/li>\n  \u003cli>Khadi se bana, deep saffron — white — India green; chakra 24 taiye.\u003c/li>\n  \u003cli>Rashtriya Flag Adoption Day — 22 July.\u003c/li>\n\u003c/ul>"
    }
   ],
   "sets": [],
   "nsets": 2,
   "nq": 16
  },
  {
   "id": "constitution",
   "name": "Indian Constitution",
   "hi": "भारतीय संविधान",
   "icon": "📜",
   "notes": [
    {
     "id": "con-basic",
     "title": "Samvidhan ka Structure — Part, Schedule, Anuched",
     "hi": "संविधान का परिचय",
     "mins": 6,
     "html": "\n\u003cdl class=\"kv\">\n  \u003cdt>Handwritten\u003c/dt>\u003cdd>Bezwada Dasgupta — 5 saal, English + Hindi donon\u003c/dd>\n  \u003cdt>Pages\u003c/dt>\u003cdd>~448 (mool), ab 100+ sanshodhan\u003c/dd>\n  \u003cdt>Parts / Schedules / Articles\u003c/dt>\u003cdd>22 Part, 12 Schedule, 470+ anuched\u003c/dd>\n  \u003cdt>Preamble ke shabd\u003c/dt>\u003cdd>Sovereign, Socialist, Secular, Democratic, Republic\u003c/dd>\n\u003c/dl>\n\u003ch3>Mukhya anuched ek nazar me\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Anuched\u003c/th>\u003cth>Kya deta hai\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>12–35 (Part III)\u003c/td>\u003ctd>Maulik Adhikar (Fundamental Rights)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>14\u003c/td>\u003ctd>Kanoon ke samne barabari\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>17\u003c/td>\u003ctd>Chhuwa-chhat ka pratibandh\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>19\u003c/td>\u003ctd>Swatantrata ke 6 adhikar\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>21\u003c/td>\u003ctd>Jivan aur swatantrata ka adhikar\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>21A\u003c/td>\u003ctd>6–14 varsh ko shiksha (86th sanshodhan, 2002)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>32\u003c/td>\u003ctd>Samvidhan ka \"dil aur atma\" — SC tak direct pravesh\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>36–51 (Part IV)\u003c/td>\u003ctd>DPSP — rajya ki niti ke nirdeshak siddhant\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>51A\u003c/td>\u003ctd>Maulik Kartavya (42nd sanshodhan se)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>61\u003c/td>\u003ctd>Rashtrapati ka mahabhishandhan\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>74\u003c/td>\u003ctd>PM ke netritva me mantri-parishad\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>89\u003c/td>\u003ctd>VP = Rajya Sabha ke adhyaksh\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>110\u003c/td>\u003ctd>Dhan-vidheyak (Money Bill) ki paribhasha\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>243–243ZG\u003c/td>\u003ctd>Panchayati Raj aur nagar nikay (73rd/74th sanshodhan)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>356\u003c/td>\u003ctd>Rajya me Rashtrapati shasan\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>368\u003c/td>\u003ctd>Samvidhan sanshodhan ki prakriya\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"box\">\u003cb>Sanvidhan ke janak:\u003c/b> Dr. B. R. Ambedkar (drafting chairman). \u003cb>Constituent Assembly ki pehli baithak:\u003c/b> 9 December 1946 — isi din \"Constitution Day\" (26 November) se alag, 9 Dec \"Legal Services Day\" hai.\u003c/div>"
    },
    {
     "id": "con-amend",
     "title": "Mahatvapurn Sanshodhan (Amendments)",
     "hi": "महत्वपूर्ण संशोधन",
     "mins": 4,
     "html": "\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Sanshodhan\u003c/th>\u003cth>Vishay\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>1st (1951)\u003c/td>\u003ctd>Anuched 19 par vyavaharik pabandi; 9th Schedule\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>7th (1956)\u003c/td>\u003ctd>Rajyon ka punarrang (States Reorganisation)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>24th (1971)\u003c/td>\u003ctd>Parliament par samvidhan badalne ka poora adhikar\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>42nd (1976)\u003c/td>\u003ctd>\"Mini Constitution\" — Preamble me Socialist, Secular, Integrity; 51A kartavya\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>44th (1978)\u003c/td>\u003ctd>Anuched 31 hataya; Right to Property ab Article 300A (kanooni adhikar)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>73rd / 74th (1992)\u003c/td>\u003ctd>Panchayat aur Nagar Nikay ko samvidhanik darja\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>86th (2002)\u003c/td>\u003ctd>Anuched 21A — shiksha ka adhikar\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>99th (2014)\u003c/td>\u003ctd>NJAC (baad me SC ne radd kiya, collegium wapas)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>101st (2016)\u003c/td>\u003ctd>GST — Anuched 246A\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>103rd (2019)\u003c/td>\u003ctd>EWS 10% aarakshan\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>104th (2020)\u003c/td>\u003ctd>Anglo-Indian ka nomination band; LS aarakshan 15 saal aur\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>105th/106th (2021/2023)\u003c/td>\u003ctd>OBC commission / Nari Shakti Vandan — mahilaon ke liye 1/3 aarakshan\u003c/td>\u003c/tr>\n\u003c/table>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 10
  },
  {
   "id": "science",
   "name": "General Science",
   "hi": "सामान्य विज्ञान",
   "icon": "🔬",
   "notes": [
    {
     "id": "sci-body",
     "title": "Manav Sharir — Zaroori Tathya",
     "hi": "मानव शरीर",
     "mins": 4,
     "html": "\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Ang\u003c/th>\u003cth>Tathya\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>Sabse bada ang\u003c/td>\u003ctd>Tvak (skin)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse bada internal ang\u003c/td>\u003ctd>Yakrit (liver)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse chhota haddi\u003c/td>\u003ctd>Stapes — kaan me (kuli ke barabar)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Haddiyon ki sankhya\u003c/td>\u003ctd>206 (vanaspati) ; shishu me ~300\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rakt ka normal pressure\u003c/td>\u003ctd>120/80 mmHg\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Dil ki dhadkan\u003c/td>\u003ctd>~72/min (resting)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Rakt samuh\u003c/td>\u003ctd>A, B, AB, O — O donor, AB receiver\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Hemoglobin\u003c/td>\u003ctd>Iron wala protein, O2 le jaata hai\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>WBC\u003c/td>\u003ctd>Bedi rog se larne wale kanika\u003c/td>\u003c/tr>\n\u003c/table>\n\u003ch3>Vitamin aur kami\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Vitamin\u003c/th>\u003cth>Kami se rog\u003c/th>\u003cth>Strot\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>A (Retinol)\u003c/td>\u003ctd>Rat-blindness\u003c/td>\u003ctd>Gajar, doodh, kale patte\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>B1\u003c/td>\u003ctd>Beri-beri\u003c/td>\u003ctd>Dal, sabut anaaj\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>B12\u003c/td>\u003ctd>Pernicious anaemia\u003c/td>\u003ctd>Anda, mangso, doodh\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>C\u003c/td>\u003ctd>Scurvy (masudo se khoon)\u003c/td>\u003ctd>Nimbu, amla\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>D\u003c/td>\u003ctd>Rickets / osteomalacia\u003c/td>\u003ctd>Dhoop, machhli\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>K\u003c/td>\u003ctd>Khoon na jamna\u003c/td>\u003ctd>Hare sabzi\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Iodine\u003c/td>\u003ctd>Ghoqa (goitre)\u003c/td>\u003ctd>Iodised namak, samudri khana\u003c/td>\u003c/tr>\n\u003c/table>"
    },
    {
     "id": "sci-phy",
     "title": "Bhautiki — SI Units aur Formula",
     "hi": "भौतिकी",
     "mins": 4,
     "html": "\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Rashi\u003c/th>\u003cth>SI Unit\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>Force\u003c/td>\u003ctd>Newton (N)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Energy / Work\u003c/td>\u003ctd>Joule (J)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Power\u003c/td>\u003ctd>Watt (W)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Pressure\u003c/td>\u003ctd>Pascal (Pa)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Current\u003c/td>\u003ctd>Ampere (A)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Resistance\u003c/td>\u003ctd>Ohm (Ω)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Frequency\u003c/td>\u003ctd>Hertz (Hz)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Luminous intensity\u003c/td>\u003ctd>Candela (cd)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Amount of substance\u003c/td>\u003ctd>Mole (mol)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Temperature\u003c/td>\u003ctd>Kelvin (K)\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"box\">\u003cb>Yaad rakho:\u003c/b> 1 kWh = 3.6 × 10⁶ J · light-year samay ki nahi, \u003cb>doori\u003c/b> ki ikai hai · dhvani ke liye madhyam chahiye, prakash ko nahi · dhvani ki gati thos &gt; drav &gt; gas.\u003c/div>\n\u003ch3>Formula\u003c/h3>\n\u003cul>\n  \u003cli>v = u + at · s = ut + ½at² · v² = u² + 2as\u003c/li>\n  \u003cli>F = ma · W = F·s · P = W/t\u003c/li>\n  \u003cli>V = IR · P = VI · Ohm ka niyam\u003c/li>\n  \u003cli>Density = m/V · Pressure = F/A\u003c/li>\n\u003c/ul>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 10
  },
  {
   "id": "computer",
   "name": "Computer",
   "hi": "संगणक",
   "icon": "💻",
   "notes": [
    {
     "id": "comp-basics",
     "title": "Computer ke Basic — Full Forms aur Shortcut",
     "hi": "परिचय",
     "mins": 4,
     "html": "\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Short\u003c/th>\u003cth>Full form\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>CPU\u003c/td>\u003ctd>Central Processing Unit\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>RAM\u003c/td>\u003ctd>Random Access Memory (volatile)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>ROM\u003c/td>\u003ctd>Read Only Memory (non-volatile)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>ALU\u003c/td>\u003ctd>Arithmetic Logic Unit\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>GPU\u003c/td>\u003ctd>Graphics Processing Unit\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>LAN / WAN\u003c/td>\u003ctd>Local / Wide Area Network\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>HTTP / HTTPS\u003c/td>\u003ctd>HyperText Transfer (Secure) Protocol\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>URL\u003c/td>\u003ctd>Uniform Resource Locator\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>PDF\u003c/td>\u003ctd>Portable Document Format\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>BIOS\u003c/td>\u003ctd>Basic Input Output System\u003c/td>\u003c/tr>\n\u003c/table>\n\u003ch3>Peedhi (Generations)\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Peedhi\u003c/th>\u003cth>Taknik\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>1st\u003c/td>\u003ctd>Vacuum tube · machine language\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>2nd\u003c/td>\u003ctd>Transistor · assembly language\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>3rd\u003c/td>\u003ctd>IC (integrated circuit) · high-level language\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>4th\u003c/td>\u003ctd>Microprocessor · VLSI · PC era\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>5th\u003c/td>\u003ctd>AI, quantum, parallel processing\u003c/td>\u003c/tr>\n\u003c/table>\n\u003ch3>Memory units\u003c/h3>\n\u003cp>1 bit &lt; 1 byte (8 bits) &lt; 1 KB (1024 B) &lt; 1 MB &lt; 1 GB &lt; 1 TB. Number system: Binary base-2, Octal base-8, Decimal base-10, Hexadecimal base-16.\u003c/p>\n\u003cdiv class=\"box\">\u003cb>Shortcut:\u003c/b> Ctrl+C copy · Ctrl+V paste · Ctrl+X cut · Ctrl+Z undo · Ctrl+S save · Ctrl+A select all · Alt+F4 band karo · F1 help.\u003c/div>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 8
  },
  {
   "id": "math",
   "name": "Maths (Quantitative)",
   "hi": "गणित",
   "icon": "➗",
   "notes": [
    {
     "id": "math-form",
     "title": "Formula Sheet — %, Profit, SI/CI, Speed",
     "hi": "सूत्र",
     "mins": 5,
     "html": "\n\u003ch3> Pratishat (Percentage)\u003c/h3>\n\u003cul>\n  \u003cli>x% of y = xy/100 · vridhi x% = ×(100+x)/100 · kami x% = ×(100−x)/100\u003c/li>\n  \u003cli>A, B se R% jyada hai to B, A se [R/(100+R)]×100 kam hai.\u003c/li>\n  \u003cli>Common fractions: 1/2=50%, 1/3≈33.33%, 1/4=25%, 1/5=20%, 1/6≈16.67%, 1/8=12.5%, 1/12≈8.33%, 1/16=6.25%\u003c/li>\n\u003c/ul>\n\u003ch3> Labh-Hani\u003c/h3>\n\u003cul>\u003cli>Profit% = (CP se SP ka antar)/CP × 100 · same SP par x% labh aur x% hani to total x²% hani.\u003c/li>\u003c/ul>\n\u003ch3> Byaj (Interest)\u003c/h3>\n\u003cul>\u003cli>SI = PRT/100 · CI = P(1+R/100)^T − P · do varsh me CI aur SI ka antar = P(R/100)²\u003c/li>\u003c/ul>\n\u003ch3>Char, Gati aur Samay\u003c/h3>\n\u003cul>\u003cli>D = S × T · km/h → m/s me ×5/18 · train crossing: total doori = train ki lambai + platform\u003c/li>\u003c/ul>\n\u003ch3>Geometry\u003c/h3>\n\u003cul>\n  \u003cli>Triangle ka kon-jod 180°, quadrilateral 360°.\u003c/li>\n  \u003cli>Area: triangle ½bh · rectangle lb · circle πr² · circumference 2πr · parallelogram bh.\u003c/li>\n  \u003cli>Volume: cube a³ · cuboid lbh · cylinder πr²h · cone ⅓πr²h · sphere 4/3πr³.\u003c/li>\n  \u003cli>Pythagoras: a² + b² = c² (samkon tri) — 3-4-5, 5-12-13, 8-15-17, 7-24-25.\u003c/li>\n\u003c/ul>\n\u003ch3>Algebra\u003c/h3>\n\u003cul>\u003cli>(a+b)² = a²+2ab+b² · (a−b)² = a²−2ab+b² · a²−b² = (a+b)(a−b) · (a+b+c)² = a²+b²+c²+2(ab+bc+ca)\u003c/li>\u003c/ul>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 4
  },
  {
   "id": "reasoning",
   "name": "Reasoning",
   "hi": "तर्कशक्ति",
   "icon": "🧩",
   "notes": [
    {
     "id": "rea-types",
     "title": "Reasoning ke Prakar aur Tareeke",
     "hi": "प्रकार",
     "mins": 4,
     "html": "\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Topic\u003c/th>\u003cth>Kaise solve kare\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>Series\u003c/td>\u003ctd>Diff le (2, 5, 9, 14 → +3,+4,+5); ratio dekho; alternating series alag-alag line.\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Coding-Decoding\u003c/td>\u003ctd>Position value (A=1 … Z=26) ya reverse (A=26) ya +1/+n shift. Word length match karo.\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Blood relation\u003c/td>\u003ctd>Family tree banao: male = +, female = −, generation me gap.\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Direction\u003c/td>\u003ctd>North upar, East daayen. \"Left\" = anticlockwise. Final displacement = √(x²+y²).\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Syllogism\u003c/td>\u003ctd>Venn diagram banao; \"All A are B\" = A ke andar B.\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Odd one out\u003c/td>\u003ctd>Prime/square, ya sam/visham, ya varg (fruit vs vegetable).\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Analogy\u003c/td>\u003ctd>Reshte ka type pehchano (capital : country, doctor : hospital).\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"box\">\u003cb>Alphabet trick:\u003c/b> EJOTY — E=5, J=10, O=15, T=20, Y=25. CFILORUX se 3-6-9… positions. CFILORUX + reverse position (A↔Z) dono practice me kaam aate hain.\u003c/div>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 7
  },
  {
   "id": "hindi",
   "name": "Hindi Vyakaran",
   "hi": "हिन्दी व्याकरण",
   "icon": "📖",
   "notes": [
    {
     "id": "hin-sandhi",
     "title": "Sandhi aur Samas — Udaharan Sahit",
     "hi": "संधि एवं समास",
     "mins": 5,
     "html": "\n\u003ch3>Sandhi ke bhed\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Prakar\u003c/th>\u003cth>Niyam\u003c/th>\u003cth>Udaharan\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>दीर्घ सवर्ण संधि\u003c/td>\u003ctd>अ+अ=आ, इ+इ=ई, उ+उ=ऊ\u003c/td>\u003ctd>विद्या + आलय = विद्यालय\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>गुण संधि\u003c/td>\u003ctd>अ/आ + इ → ए · अ/आ + उ → ओ\u003c/td>\u003ctd>राम + इन्द्र = रामेन्द्र · सूर्य + उदय = सूर्योदय\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>वृद्धि संधि\u003c/td>\u003ctd>अ/आ + ओ/औ → औ\u003c/td>\u003ctd>महा + ओषधि = महौषधि\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>यण संधि\u003c/td>\u003ctd>इ/ई + परस्वर → य्\u003c/td>\u003ctd>रवि + अंशु = रव्यांशु\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>विसर्ग संधि\u003c/td>\u003ctd>ः का बदलना परोक्षर पर\u003c/td>\u003ctd>रामः + च = रामश्च\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"box\">Exam me sabse zyada \u003cb>दीर्घ\u003c/b> aur \u003cb>गुण\u003c/b> संधि पूछी जाती है — पहले इन्हें पक्का करो।\u003c/div>\n\u003ch3>Samas ke bhed (6 mukhya)\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Samas\u003c/th>\u003cth>Pahachaan\u003c/th>\u003cth>Udaharan\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>अव्ययीभाव\u003c/td>\u003ctd>pehla shabd avyay, ant me arth badal jata hai\u003c/td>\u003ctd>आ + प्रभात = आप्रभात, यथाशक्ति\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>तत्पुरुष\u003c/td>\u003ctd>bee me \"का/की/के\" (vibhakti) chhupi ho\u003c/td>\u003ctd>देवता का मंदिर → देवमंदिर (षष्ठी तत्पुरुष)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>कर्मधारण\u003c/td>\u003ctd>विशेषण + विशेष्य (ek hi padarth)\u003c/td>\u003ctd>महा + आत्मा = महात्मा, नीलकमल\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>द्विगु\u003c/td>\u003ctd>poorva shabd sankhyavachak\u003c/td>\u003ctd>त्रिलोक, नवरात्र\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>द्वंद्व\u003c/td>\u003ctd>donon shabd ke beech \"और\" lag sake\u003c/td>\u003ctd>माता-पिता, रात-दिन\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>बहुव्रीहि\u003c/td>\u003ctd>teesra arth nikle (any padarth ka boodhak)\u003c/td>\u003ctd>दशानन = दस मुख वाला = रावण\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"box\">\u003cb>Ek line trick:\u003c/b> beech me \"का/की/के\" lage → तत्पुरुष; \"और\" lage → द्वंद्व; sankhya lage → द्विगु; visheshan ho → कर्मधारण; \"जैसे\" ya koi teesra arth lage → बहुव्रीहि; pehla shabd avyay ho → अव्ययीभाव.\u003c/div>"
    },
    {
     "id": "hin-muhavare",
     "title": "Mukhya Muhavre aur Arth",
     "hi": "मुहावरे",
     "mins": 3,
     "html": "\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Muhavara\u003c/th>\u003cth>Arth\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>आँखों का तारा\u003c/td>\u003ctd>बहुत प्रिय\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>अंगूठा दिखाना\u003c/td>\u003ctd>इनकार करना\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>नाक में दम करना\u003c/td>\u003ctd>परेशान करना\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>आँचल में बाँधना\u003c/td>\u003ctd>छिपाकर रखना\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>कान पकड़ना\u003c/td>\u003ctd>पश्चाताप कराना\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>जीभ काटना\u003c/td>\u003ctd>चापलूसी करना\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>हाथ पीछे होना\u003c/td>\u003ctd>घूस लेना\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>सिर पर चढ़ना\u003c/td>\u003ctd>अहंकार बढ़ना\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>अधजल गगरी छलकत जाय\u003c/td>\u003ctd>अधूरी विद्या का घमंड\u003c/td>\u003c/tr>\n\u003c/table>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 8
  },
  {
   "id": "english",
   "name": "English Grammar",
   "hi": "अंग्रेज़ी व्याकरण",
   "icon": "🔤",
   "notes": [
    {
     "id": "eng-err",
     "title": "Common Errors, Prepositions, Phrasal Verbs",
     "hi": "त्रुटियाँ",
     "mins": 4,
     "html": "\n\u003ch3>Prepositions — fixed use\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Word\u003c/th>\u003cth>Correct preposition\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>superior / inferior\u003c/td>\u003ctd>to (not \"than\")\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>prefer\u003c/td>\u003ctd>A to B (not \"than\")\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>married\u003c/td>\u003ctd>to (not \"with\")\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>comprise\u003c/td>\u003ctd>of (when \"consist of\")\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>good / bad\u003c/td>\u003ctd>at (skill), for (health)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>angry\u003c/td>\u003ctd>with a person, at a thing\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>listen\u003c/td>\u003ctd>to\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>enter\u003c/td>\u003ctd>no preposition (enter the room)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>discuss\u003c/td>\u003ctd>no \"about\"\u003c/td>\u003c/tr>\n\u003c/table>\n\u003ch3>Phrasal verbs\u003c/h3>\n\u003cul>\n  \u003cli>put off = postpone · put up with = tolerate · put across = explain\u003c/li>\n  \u003cli>call off = cancel · call on = visit · call up = telephone\u003c/li>\n  \u003cli>give up = leave · give in = surrender · give out = distribute/exhaust\u003c/li>\n  \u003cli>look after = take care · look into = investigate · look down on = despise\u003c/li>\n  \u003cli>bring up = raise a child · come across = meet by chance · run out of = finish\u003c/li>\n\u003c/ul>\n\u003ch3>Tense quick rule\u003c/h3>\n\u003cp>since + point of time → perfect (I have lived here \u003cb>since\u003c/b> 2010) · for + duration (I have lived here \u003cb>for\u003c/b> ten years). No future tense in \"when/if/after\" clause: \"When he \u003cb>comes\u003c/b>, I will leave.\"\u003c/p>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 8
  },
  {
   "id": "current",
   "name": "Current Affairs",
   "hi": "समसामयिकी",
   "icon": "📰",
   "notes": [
    {
     "id": "ca-how",
     "title": "Current Affairs Padhne ka Tareeka",
     "hi": "पढ़ने की विधि",
     "mins": 3,
     "html": "\n\u003cp>Current affairs ka sabse bada tuta-ta hua hissa ye hai ki data purana ho jata hai. Isliye:\u003c/p>\n\u003cul>\n  \u003cli>\u003cb>Stati GK\u003c/b> (symbols, capitals, constitution) — kabhi purana nahi hota; ise pehle pakka karo.\u003c/li>\n  \u003cli>\u003cb>Gati-shil GK\u003c/b> (appointments, awards, sports, summits) — mahine ke hisab se update karo.\u003c/li>\n  \u003cli>Har din 10 minute notebook me 5 line likho: \u003ci>kya hua · kahan · kaun · kyun mahatvapurn · exam me kaise puchha ja sakta hai\u003c/i>.\u003c/li>\n  \u003cli>Exam se 6 mahine pehle tak ki ghatnayein sabse zyada puchhi jaati hain.\u003c/li>\n\u003c/ul>\n\u003cdiv class=\"box\">\u003cb>Naya data add karna ho to:\u003c/b> admin panel ke \u003cb>MCQ\u003c/b> tab me set banao aur Publish se \u003ccode>js/questions.js\u003c/code> download karo — ya seedhe \u003ccode>js/questions.js\u003c/code> me is subject ke array me naya set daal do — page apne aap ban jayega.\u003c/div>"
    }
   ],
   "sets": [],
   "nsets": 0,
   "nq": 0
  },
  {
   "id": "rajca",
   "name": "Rajasthan Current Affairs",
   "hi": "राजस्थान समसामयिकी",
   "icon": "🗞️",
   "notes": [
    {
     "id": "rajca-districts",
     "title": "Rajasthan ke 41 Jile, 7 Division — Naya Map",
     "hi": "नए जिले",
     "mins": 4,
     "html": "\n\u003cp>Rajasthan ke jilon ki sankhya 33 se badhkar \u003cb>41\u003c/b> ho gayi hai aur divisions 5 se \u003cb>7\u003c/b>. 2025 me ghatit kuchh naye jile baad me vilayan (dissolve) kar diye gaye, isliye final list hi padhna zaroori hai.\u003c/p>\n\u003ch3>7 Divisions\u003c/h3>\n\u003cp>Ajmer, Bharatpur, Bikaner, Jaipur, Jodhpur, Kota, Udaipur.\u003c/p>\n\u003ch3>Naye jile jo exam me sabse jyada puchhe ja rahe hain\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Jila\u003c/th>\u003cth>Headquarters\u003c/th>\u003cth>Division\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>Beawar\u003c/td>\u003ctd>Beawar\u003c/td>\u003ctd>Ajmer\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Didwana-Kuchaman\u003c/td>\u003ctd>Kuchaman City\u003c/td>\u003ctd>Ajmer\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Deeg\u003c/td>\u003ctd>Deeg\u003c/td>\u003ctd>Bharatpur\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Khairthal-Tijara\u003c/td>\u003ctd>Khairthal\u003c/td>\u003ctd>Jaipur\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Kotputli-Behror\u003c/td>\u003ctd>Kotputli\u003c/td>\u003ctd>Jaipur\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Balotra\u003c/td>\u003ctd>Balotra\u003c/td>\u003ctd>Jodhpur\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Phalodi\u003c/td>\u003ctd>Phalodi\u003c/td>\u003ctd>Jodhpur\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Salumbar\u003c/td>\u003ctd>Salumbar\u003c/td>\u003ctd>Udaipur\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"box\">Poori 41 jile ki list aur drill ke liye \u003ca href=\"#/districts\">Districts &amp; Map Practice\u003c/a> page kholo.\u003c/div>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 6
  },
  {
   "id": "world",
   "name": "World GK",
   "hi": "विश्व का सामान्य ज्ञान",
   "icon": "🌍",
   "notes": [
    {
     "id": "wld-basic",
     "title": "World ke Mukhya Tathya",
     "hi": "विश्व",
     "mins": 4,
     "html": "\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Vishay\u003c/th>\u003cth>Tathya\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>Mahadeesh\u003c/td>\u003ctd>7 — Asia, Africa, North America, South America, Antarctica, Europe, Australia\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Mahasaagar\u003c/td>\u003ctd>5 — Pacific sabse bada, Arctic sabse chhota\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse bada des (kshetra)\u003c/td>\u003ctd>Russia\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse chhota des\u003c/td>\u003ctd>Vatican City\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse zyada jansankhya\u003c/td>\u003ctd>Bharat (2023 se China ko paar karke)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse uncha pahad\u003c/td>\u003ctd>Everest (8,848.86 m)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse lambi nadi\u003c/td>\u003ctd>Nile (Amazon jal-pravah me sabse bada)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse bada marusthal (garam)\u003c/td>\u003ctd>Sahara\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Sabse gehri jhheel\u003c/td>\u003ctd>Baikal (Russia)\u003c/td>\u003c/tr>\n\u003c/table>\n\u003ch3>Antarrashtriya sansthaen\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Sanstha\u003c/th>\u003cth>Sthapna / Headquarters\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>United Nations (UN)\u003c/td>\u003ctd>1945 · New York · 193 sadasya\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>UNESCO\u003c/td>\u003ctd>1945 · Paris\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>WHO\u003c/td>\u003ctd>1948 · Geneva\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>WTO\u003c/td>\u003ctd>1995 · Geneva (pehle GATT 1948)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>IMF / World Bank\u003c/td>\u003ctd>1944 Bretton Woods · Washington DC\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>NATO\u003c/td>\u003ctd>1949 · Brussels\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>BRICS\u003c/td>\u003ctd>2009 · 2024 me vistrit sadasyata\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>ASEAN\u003c/td>\u003ctd>1967 · Jakarta\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>EU\u003c/td>\u003ctd>Maastricht 1993 · Brussels\u003c/td>\u003c/tr>\n\u003c/table>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 7
  },
  {
   "id": "criminal",
   "name": "Criminal Laws",
   "hi": "अपराध विधि",
   "icon": "⚖️",
   "notes": [
    {
     "id": "cri-bns",
     "title": "BNS, BNSS aur BSA — Kya Badla",
     "hi": "नए कानून",
     "mins": 4,
     "html": "\n\u003cp>1 July 2024 se teen purane kanoon ki jagah teen naye sanhita laagu ho gayi:\u003c/p>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Purana\u003c/th>\u003cth>Naya\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>Indian Penal Code, 1860 (IPC)\u003c/td>\u003ctd>Bharatiya Nyaya Sanhita, 2023 (BNS)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Code of Criminal Procedure, 1973 (CrPC)\u003c/td>\u003ctd>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Indian Evidence Act, 1872\u003c/td>\u003ctd>Bharatiya Sakshya Adhiniyam, 2023 (BSA)\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"box\">IPC 1860 me Lord Macaulay ki adhyakshata me bani samvidhanik angrezi kanoon ki devali thi; naye sanhitaon me anuchedon ka number punarrang hua hai — exam me purana/new dono puchhe jaate hain.\u003c/div>\n\u003ch3>Mahatvapurn parivartan\u003c/h3>\n\u003cul>\n  \u003cli>Community service ki saza (petty offences) pariyojit.\u003c/li>\n  \u003cli>Organised crime aur terrorist act ke liye alag prakriti.\u003c/li>\n  \u003cli>SOP/FRS — zero FIR ki vidhiyata, e-FIR.\u003c/li>\n  \u003cli>Mahilaon par apradh ke mamle me sakht saza.\u003c/li>\n  \u003cli>Custody remand ki avadhi me chhote badlav.\u003c/li>\n\u003c/ul>\n\u003ch3>Any mukhya kanoon\u003c/h3>\n\u003cul>\n  \u003cli>POCSO Act, 2012 — 18 varsh se kam balak/balikaon ka yon-apradh se sanrakshan.\u003c/li>\n  \u003cli>Protection of Women from Domestic Violence Act, 2005.\u003c/li>\n  \u003cli>Sexual Harassment of Women at Workplace Act, 2013 — Vishaka judgment (1997) ki guidelines par aadhrit.\u003c/li>\n  \u003cli>SC/ST (Prevention of Atrocities) Act, 1989.\u003c/li>\n  \u003cli>NDPS Act, 1985 · Prevention of Money Laundering Act (PMLA), 2002.\u003c/li>\n\u003c/ul>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 6
  },
  {
   "id": "education",
   "name": "Education",
   "hi": "शिक्षा",
   "icon": "🎓",
   "notes": [
    {
     "id": "edu-nep",
     "title": "NEP 2020 aur Shiksha ke Mukhya Kanoon",
     "hi": "शिक्षा नीति",
     "mins": 4,
     "html": "\n\u003ch3>Rashtriya Shiksha Neeti 2020\u003c/h3>\n\u003cul>\n  \u003cli>\u003cb>5 + 3 + 3 + 4\u003c/b> pathyakram — Foundational (age 3-8), Preparatory (8-11), Middle (11-14), Secondary (14-18).\u003c/li>\n  \u003cli>Madhyamik star par multidisciplinary, no hard separation between streams.\u003c/li>\n  \u003cli>Board pariksha do baar; competency-based assessment (PARAKH).\u003c/li>\n  \u003cli>GER lakshya: school me 100%, higher education me 50% tak 2035.\u003c/li>\n  \u003cli>NCF (National Curriculum Framework) NCERT banata hai; NCF 2023 aaya.\u003c/li>\n\u003c/ul>\n\u003ch3>RTE Act, 2009\u003c/h3>\n\u003cul>\n  \u003cli>Anuched 21A ke tahat — 6 se 14 varsh tak nishulk anivarya shiksha.\u003c/li>\n  \u003cli>Private schools me 25% EWS/gareeb bachchon ke liye aasan.\u003c/li>\n  \u003cli>CCE aur \"no detention\" shuru me; rajyon ne baad me badla.\u003c/li>\n  \u003cli>Laagu hua: 1 April 2010.\u003c/li>\n\u003c/ul>\n\u003ch3>Sansthaen\u003c/h3>\n\u003ctable class=\"tb\">\u003ctr>\u003cth>Sanstha\u003c/th>\u003cth>Kaam\u003c/th>\u003c/tr>\n\u003ctr>\u003ctd>NCERT (1961)\u003c/td>\u003ctd>Paathya-pustak aur NCF\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>NIOS (1979)\u003c/td>\u003ctd>Open aur distance school shiksha\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>UGC (1956)\u003c/td>\u003ctd>University grant aur manata\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>NCTE (1993)\u003c/td>\u003ctd>Teacher education ke niyam\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>NAAC / NBA\u003c/td>\u003ctd>Guñatta pramanpan\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>NIRF\u003c/td>\u003ctd>Ranking Framework (2015 se)\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Nipun Bharat (2021)\u003c/td>\u003ctd>Class 1-3 tak foundational literacy & numeracy\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Samagra Shiksha\u003c/td>\u003ctd>Samagra (pre-school se class 12) ekikrit yojaana\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cdiv class=\"box\">\u003cb>Tareekh:\u003c/b> Rashtriya Shiksha Diwas — 11 May (Maulana Abul Kalam Azad ka janm-din) · Teacher's Day — 5 Sept (Dr. Radhakrishnan) · National Education Policy 2020 — 29 July ko ghoshit.\u003c/div>"
    }
   ],
   "sets": [],
   "nsets": 1,
   "nq": 8
  }
 ],
 "districts": [
  {
   "n": "Ajmer",
   "hi": "अजमेर",
   "hq": "Ajmer",
   "div": "Ajmer",
   "x": 4,
   "y": 4
  },
  {
   "n": "Beawar",
   "hi": "बीवर",
   "hq": "Beawar",
   "div": "Ajmer",
   "x": 4,
   "y": 5
  },
  {
   "n": "Bhilwara",
   "hi": "भीलवाड़ा",
   "hq": "Bhilwara",
   "div": "Ajmer",
   "x": 5,
   "y": 5
  },
  {
   "n": "Didwana-Kuchaman",
   "hi": "दीडवा-कुचामन",
   "hq": "Kuchaman City",
   "div": "Ajmer",
   "x": 4,
   "y": 3
  },
  {
   "n": "Nagaur",
   "hi": "नागौर",
   "hq": "Nagaur",
   "div": "Ajmer",
   "x": 3,
   "y": 3
  },
  {
   "n": "Tonk",
   "hi": "टोंक",
   "hq": "Tonk",
   "div": "Ajmer",
   "x": 5,
   "y": 4
  },
  {
   "n": "Bharatpur",
   "hi": "भरतपुर",
   "hq": "Bharatpur",
   "div": "Bharatpur",
   "x": 8,
   "y": 4
  },
  {
   "n": "Deeg",
   "hi": "डीग",
   "hq": "Deeg",
   "div": "Bharatpur",
   "x": 8,
   "y": 3
  },
  {
   "n": "Dholpur",
   "hi": "धौलपुर",
   "hq": "Dholpur",
   "div": "Bharatpur",
   "x": 8,
   "y": 5
  },
  {
   "n": "Karauli",
   "hi": "करौली",
   "hq": "Karauli",
   "div": "Bharatpur",
   "x": 7,
   "y": 5
  },
  {
   "n": "Sawai Madhopur",
   "hi": "सवाई माधोपुर",
   "hq": "Sawai Madhopur",
   "div": "Bharatpur",
   "x": 7,
   "y": 4
  },
  {
   "n": "Bikaner",
   "hi": "बीकानेर",
   "hq": "Bikaner",
   "div": "Bikaner",
   "x": 3,
   "y": 2
  },
  {
   "n": "Churu",
   "hi": "चूरू",
   "hq": "Churu",
   "div": "Bikaner",
   "x": 4,
   "y": 2
  },
  {
   "n": "Hanumangarh",
   "hi": "हनुमानगढ़",
   "hq": "Hanumangarh",
   "div": "Bikaner",
   "x": 3,
   "y": 1
  },
  {
   "n": "Sri Ganganagar",
   "hi": "श्री गंगानगर",
   "hq": "Sri Ganganagar",
   "div": "Bikaner",
   "x": 2,
   "y": 1
  },
  {
   "n": "Alwar",
   "hi": "अलवर",
   "hq": "Alwar",
   "div": "Jaipur",
   "x": 7,
   "y": 3
  },
  {
   "n": "Dausa",
   "hi": "दौसा",
   "hq": "Dausa",
   "div": "Jaipur",
   "x": 6,
   "y": 4
  },
  {
   "n": "Jaipur",
   "hi": "जयपुर",
   "hq": "Jaipur",
   "div": "Jaipur",
   "x": 6,
   "y": 3
  },
  {
   "n": "Jhunjhunu",
   "hi": "झुंझुनूं",
   "hq": "Jhunjhunu",
   "div": "Jaipur",
   "x": 5,
   "y": 2
  },
  {
   "n": "Khairthal-Tijara",
   "hi": "खैरथल-तिजारा",
   "hq": "Khairthal",
   "div": "Jaipur",
   "x": 7,
   "y": 2
  },
  {
   "n": "Kotputli-Behror",
   "hi": "कोटपूतली-बेहरोड़",
   "hq": "Kotputli",
   "div": "Jaipur",
   "x": 7,
   "y": 4
  },
  {
   "n": "Sikar",
   "hi": "सीकर",
   "hq": "Sikar",
   "div": "Jaipur",
   "x": 5,
   "y": 3
  },
  {
   "n": "Balotra",
   "hi": "बालोतरा",
   "hq": "Balotra",
   "div": "Jodhpur",
   "x": 2,
   "y": 4
  },
  {
   "n": "Barmer",
   "hi": "बाड़मेर",
   "hq": "Barmer",
   "div": "Jodhpur",
   "x": 1,
   "y": 4
  },
  {
   "n": "Jaisalmer",
   "hi": "जैसलमेर",
   "hq": "Jaisalmer",
   "div": "Jodhpur",
   "x": 1,
   "y": 2
  },
  {
   "n": "Jalore",
   "hi": "जालौर",
   "hq": "Jalore",
   "div": "Jodhpur",
   "x": 2,
   "y": 5
  },
  {
   "n": "Jodhpur",
   "hi": "जोधपुर",
   "hq": "Jodhpur",
   "div": "Jodhpur",
   "x": 2,
   "y": 3
  },
  {
   "n": "Pali",
   "hi": "पाली",
   "hq": "Pali",
   "div": "Jodhpur",
   "x": 3,
   "y": 5
  },
  {
   "n": "Phalodi",
   "hi": "पालोदी",
   "hq": "Phalodi",
   "div": "Jodhpur",
   "x": 2,
   "y": 2
  },
  {
   "n": "Sirohi",
   "hi": "सीरोही",
   "hq": "Sirohi",
   "div": "Jodhpur",
   "x": 2,
   "y": 6
  },
  {
   "n": "Baran",
   "hi": "बारां",
   "hq": "Baran",
   "div": "Kota",
   "x": 7,
   "y": 6
  },
  {
   "n": "Bundi",
   "hi": "बूंदी",
   "hq": "Bundi",
   "div": "Kota",
   "x": 6,
   "y": 6
  },
  {
   "n": "Jhalawar",
   "hi": "झालावाड़",
   "hq": "Jhalawar",
   "div": "Kota",
   "x": 7,
   "y": 7
  },
  {
   "n": "Kota",
   "hi": "कोटा",
   "hq": "Kota",
   "div": "Kota",
   "x": 6,
   "y": 7
  },
  {
   "n": "Banswara",
   "hi": "बांसवाड़ा",
   "hq": "Banswara",
   "div": "Udaipur",
   "x": 4,
   "y": 7
  },
  {
   "n": "Chittorgarh",
   "hi": "चित्तौड़गढ़",
   "hq": "Chittorgarh",
   "div": "Udaipur",
   "x": 4,
   "y": 6
  },
  {
   "n": "Dungarpur",
   "hi": "डूंगरपुर",
   "hq": "Dungarpur",
   "div": "Udaipur",
   "x": 3,
   "y": 7
  },
  {
   "n": "Pratapgarh",
   "hi": "प्रतापगढ़",
   "hq": "Pratapgarh",
   "div": "Udaipur",
   "x": 5,
   "y": 6
  },
  {
   "n": "Rajsamand",
   "hi": "राजसमंद",
   "hq": "Rajsamand",
   "div": "Udaipur",
   "x": 4,
   "y": 5.5
  },
  {
   "n": "Salumbar",
   "hi": "सालूम्बड़",
   "hq": "Salumbar",
   "div": "Udaipur",
   "x": 3,
   "y": 6
  },
  {
   "n": "Udaipur",
   "hi": "उदयपुर",
   "hq": "Udaipur",
   "div": "Udaipur",
   "x": 3,
   "y": 6.5
  }
 ],
 "states": [
  {
   "n": "Andhra Pradesh",
   "hi": "आंध्र प्रदेश",
   "cap": "Amaravati",
   "region": "South"
  },
  {
   "n": "Arunachal Pradesh",
   "hi": "अरुणांचल प्रदेश",
   "cap": "Itanagar",
   "region": "Northeast"
  },
  {
   "n": "Assam",
   "hi": "असम",
   "cap": "Dispur",
   "region": "Northeast"
  },
  {
   "n": "Bihar",
   "hi": "बिहार",
   "cap": "Patna",
   "region": "East"
  },
  {
   "n": "Chhattisgarh",
   "hi": "छत्तीसगढ़",
   "cap": "Raipur",
   "region": "Central"
  },
  {
   "n": "Goa",
   "hi": "गोवा",
   "cap": "Panaji",
   "region": "West"
  },
  {
   "n": "Gujarat",
   "hi": "गुजरात",
   "cap": "Gandhinagar",
   "region": "West"
  },
  {
   "n": "Haryana",
   "hi": "हरियाणा",
   "cap": "Chandigarh",
   "region": "North"
  },
  {
   "n": "Himachal Pradesh",
   "hi": "हिमाचल प्रदेश",
   "cap": "Shimla",
   "region": "North"
  },
  {
   "n": "Jharkhand",
   "hi": "झारखंड",
   "cap": "Ranchi",
   "region": "East"
  },
  {
   "n": "Karnataka",
   "hi": "कर्नाटक",
   "cap": "Bengaluru",
   "region": "South"
  },
  {
   "n": "Kerala",
   "hi": "केरल",
   "cap": "Thiruvananthapuram",
   "region": "South"
  },
  {
   "n": "Madhya Pradesh",
   "hi": "मध्य प्रदेश",
   "cap": "Bhopal",
   "region": "Central"
  },
  {
   "n": "Maharashtra",
   "hi": "महाराष्ट्र",
   "cap": "Mumbai",
   "region": "West"
  },
  {
   "n": "Manipur",
   "hi": "मणिपुर",
   "cap": "Imphal",
   "region": "Northeast"
  },
  {
   "n": "Meghalaya",
   "hi": "मेघालय",
   "cap": "Shillong",
   "region": "Northeast"
  },
  {
   "n": "Mizoram",
   "hi": "मिजोरम",
   "cap": "Aizawl",
   "region": "Northeast"
  },
  {
   "n": "Nagaland",
   "hi": "नागालैंड",
   "cap": "Kohima",
   "region": "Northeast"
  },
  {
   "n": "Odisha",
   "hi": "ओडिशा",
   "cap": "Bhubaneswar",
   "region": "East"
  },
  {
   "n": "Punjab",
   "hi": "पंजाब",
   "cap": "Chandigarh",
   "region": "North"
  },
  {
   "n": "Rajasthan",
   "hi": "राजस्थान",
   "cap": "Jaipur",
   "region": "North"
  },
  {
   "n": "Sikkim",
   "hi": "सिक्किम",
   "cap": "Gangtok",
   "region": "Northeast"
  },
  {
   "n": "Tamil Nadu",
   "hi": "तमिलनाडु",
   "cap": "Chennai",
   "region": "South"
  },
  {
   "n": "Telangana",
   "hi": "तेलंगाना",
   "cap": "Hyderabad",
   "region": "South"
  },
  {
   "n": "Tripura",
   "hi": "त्रिपुरा",
   "cap": "Agartala",
   "region": "Northeast"
  },
  {
   "n": "Uttar Pradesh",
   "hi": "उत्तर प्रदेश",
   "cap": "Lucknow",
   "region": "North"
  },
  {
   "n": "Uttarakhand",
   "hi": "उत्तराखंड",
   "cap": "Dehradun",
   "region": "North"
  },
  {
   "n": "West Bengal",
   "hi": "पश्चिम बंगाल",
   "cap": "Kolkata",
   "region": "East"
  },
  {
   "n": "Delhi",
   "hi": "दिल्ली",
   "cap": "New Delhi",
   "region": "UT"
  },
  {
   "n": "Jammu & Kashmir",
   "hi": "जम्मू और कश्मीर",
   "cap": "Srinagar (summer), Jammu (winter)",
   "region": "UT"
  },
  {
   "n": "Ladakh",
   "hi": "लद्दाख",
   "cap": "Leh",
   "region": "UT"
  },
  {
   "n": "Chandigarh",
   "hi": "चंडीगढ़",
   "cap": "Chandigarh",
   "region": "UT"
  },
  {
   "n": "Puducherry",
   "hi": "पुडुचेरी",
   "cap": "Puducherry",
   "region": "UT"
  },
  {
   "n": "Andaman & Nicobar",
   "hi": "अंडमान और निकोबार",
   "cap": "Port Blair",
   "region": "UT"
  },
  {
   "n": "Dadra & Nagar Haveli and Daman & Diu",
   "hi": "दादरा और नगर हवेली एवं दमन और दीव",
   "cap": "Dadra & Nagar Haveli / Daman",
   "region": "UT"
  },
  {
   "n": "Lakshadweep",
   "hi": "लक्षद्वीप",
   "cap": "Kavaratti",
   "region": "UT"
  }
 ],
 "exams": [
  {
   "id": "general",
   "name": "Recently Added Papers",
   "hi": "हाल के प्रश्न पत्र"
  },
  {
   "id": "rajgk",
   "name": "Rajasthan GK Test",
   "hi": "राजस्थान GK"
  },
  {
   "id": "reet",
   "name": "REET Exam",
   "hi": "रीट परीक्षा"
  },
  {
   "id": "patwar",
   "name": "Rajasthan Patwar Exam",
   "hi": "पटवारी"
  },
  {
   "id": "constable",
   "name": "Rajasthan Constable Exam",
   "hi": "राजस्थान कांस्टेबल"
  },
  {
   "id": "slst",
   "name": "School Lecturer Exam",
   "hi": "स्कूल व्याख्याता"
  },
  {
   "id": "steno",
   "name": "Stenographer Exam",
   "hi": "शorthand (स्टेनोग्राफर)"
  },
  {
   "id": "agri",
   "name": "Agriculture Exam",
   "hi": "कृषि"
  },
  {
   "id": "forest",
   "name": "Forest Exam",
   "hi": "वन विभाग"
  },
  {
   "id": "librarian",
   "name": "Librarian Exam",
   "hi": "पुस्तकालयाध्यक्ष"
  },
  {
   "id": "jailer",
   "name": "Jailor Exam",
   "hi": "जेलर"
  },
  {
   "id": "informatics",
   "name": "Informatics Assistant Exam",
   "hi": "सूचना सहायक"
  },
  {
   "id": "labassist",
   "name": "Lab Assistant Exam",
   "hi": "प्रयोगशाला सहायक"
  },
  {
   "id": "clct",
   "name": "College Lecturer Exam",
   "hi": "कॉलेज व्याख्याता"
  },
  {
   "id": "warder",
   "name": "Rajasthan Jail Warder Exam",
   "hi": "जेल वार्डन"
  },
  {
   "id": "psi",
   "name": "Police SI Exam",
   "hi": "POLICE SI"
  },
  {
   "id": "ras",
   "name": "RAS Exam",
   "hi": "RAS"
  },
  {
   "id": "gr2",
   "name": "Teacher GR II Exam",
   "hi": "शिक्षक ग्रेड-II"
  },
  {
   "id": "jracc",
   "name": "Junior Accountant Exam",
   "hi": "जूनियर अकाउंटेंट"
  },
  {
   "id": "vanrakshak",
   "name": "Vanpal / Vanrakshak Exam",
   "hi": "वनपाल / वनरक्षक"
  },
  {
   "id": "ca",
   "name": "Current Affairs",
   "hi": "समसामयिकी"
  },
  {
   "id": "clerk",
   "name": "Clerk / LDC Exam",
   "hi": "लिपिक / LDC"
  },
  {
   "id": "tax",
   "name": "Tax Assistant Exam",
   "hi": "कर सहायक"
  },
  {
   "id": "compiler",
   "name": "Compiler Exam",
   "hi": "कम्पाइलर"
  },
  {
   "id": "vdo",
   "name": "Village Development Officer Exam",
   "hi": "ग्रां. विक. अधिकारी"
  },
  {
   "id": "hcl",
   "name": "High Court LDC Exam",
   "hi": "हाईकोट LDC"
  },
  {
   "id": "cinstr",
   "name": "Computer Instructor Exam",
   "hi": "कम्प्यूटर प्रशिक्षक"
  },
  {
   "id": "pti",
   "name": "Physical Training Instructor Exam",
   "hi": "शारीरिक प्रशिक्षक"
  },
  {
   "id": "lsa",
   "name": "Livestock Assistant (LSA) Exam",
   "hi": "पशुधन सहायक"
  },
  {
   "id": "je",
   "name": "Junior Engineer (JEN) Exam",
   "hi": "जूनियर इंजीनियर"
  },
  {
   "id": "jsa",
   "name": "Junior Scientific Assistant (JSA)",
   "hi": "जूनियर वैज्ञानिक सहायक"
  },
  {
   "id": "jinstr",
   "name": "Junior Instructor Exam",
   "hi": "जूनियर प्रशिक्षक"
  },
  {
   "id": "hk",
   "name": "House Keeper Exam",
   "hi": "हाउस कीपर"
  },
  {
   "id": "cet",
   "name": "Rajasthan CET Exam",
   "hi": "CET"
  },
  {
   "id": "g3t",
   "name": "3rd Grade Teacher Exam",
   "hi": "तृतीय श्रेणी शिक्षक"
  },
  {
   "id": "roeo",
   "name": "RPSC RO and EO Exam",
   "hi": "RPSC RO/EO"
  },
  {
   "id": "hmaster",
   "name": "RPSC Head Master Exam",
   "hi": "हेड मास्टर"
  },
  {
   "id": "evaloff",
   "name": "Evaluation Officer Exam",
   "hi": "मूल्यांकन अधिकारी"
  },
  {
   "id": "prooff",
   "name": "RPSC Protection Officer Exam",
   "hi": "संरक्षण अधिकारी"
  },
  {
   "id": "computor",
   "name": "Computor Exam",
   "hi": "कम्प्यूटर"
  },
  {
   "id": "jlo",
   "name": "Junior Legal Officer Exam",
   "hi": "जूनियर विधि अधिकारी"
  },
  {
   "id": "cbank",
   "name": "Rajasthan Cooperative Bank Exam",
   "hi": "सहकारी बैंक"
  },
  {
   "id": "aat",
   "name": "Animal Attendant Exam",
   "hi": "पशु परिचर"
  },
  {
   "id": "supv",
   "name": "RSMSSB Supervisor Exam",
   "hi": "सुपरवाइजर"
  }
 ],
 "tricks": [
  {
   "id": 1,
   "sub": "Maths",
   "title": "Pratishat ko Bhatt mein badalna",
   "html": "\u003cp>1/2=50%, 1/3=33⅓%, 1/4=25%, 1/5=20%, 1/6=16⅔%, 1/8=12½%, 1/12=8⅓%, 1/16=6¼%, 1/20=5%, 1/25=4%. Inhe yaad kar lo to data interpretation aur profit-loss donon tez ho jaate hain.\u003c/p>"
  },
  {
   "id": 2,
   "sub": "Reasoning",
   "title": "Alphabet position — EJOTY",
   "html": "\u003cp>E=5, J=10, O=15, T=20, Y=25. Beech ke akshar 3-6-9 (CFILORUX) se nikalo. Reverse position = 27 − position (A ka reverse 26).\u003c/p>"
  },
  {
   "id": 3,
   "sub": "Rajasthan",
   "title": "7 Divisions yaad rakhne ka mantra",
   "html": "\u003cp>\u003cb>A-J-B-K-B-J-U\u003c/b> → \u003cb>A\u003c/b>jmer, \u003cb>B\u003c/b>haratpur, \u003cb>B\u003c/b>ikaner, \u003cb>J\u003c/b>aipur, \u003cb>J\u003c/b>odhpur, \u003cb>K\u003c/b>ota, \u003cb>U\u003c/b>daipur. Alphabet me gino: Ajmer, Bharatpur, Bikaner, Jaipur, Jodhpur, Kota, Udaipur.\u003c/p>"
  },
  {
   "id": 4,
   "sub": "Constitution",
   "title": "Maulik Adhikar ka order",
   "html": "\u003cp>12-13 samata ke adhikaar · 14-18 samata · 19-22 swatantrata · 23-24 shoshan ke viruddh · 25-28 dharmik svatantrata · 29-30 sanskrutik · 32 sanvidhanik upchar. Yaad ka mantra: \u003cb>S-S-S-S-D-S-U\u003c/b>.\u003c/p>"
  },
  {
   "id": 5,
   "sub": "Rajasthan",
   "title": "Nadiyan — kin se milti hain",
   "html": "\u003cp>Chambal → Yamuna · Banas → Chambal · Mahi → Arabian Sea · Luni → Rann of Kutch · Sabarmati → Gulf of Khambhat · Betw, Kali Sindh, Parvati → Chambal. Chambal ka network Rajasthan ka sabse bada jal-pravah hai.\u003c/p>"
  },
  {
   "id": 6,
   "sub": "Science",
   "title": "Vitamin — naam aur kami",
   "html": "\u003cp>A = rat-blindness · B1 = Beri-beri · B2 = cheenchak (cracked lips) · B12 = pernicious anaemia · C = Scurvy · D = Rickets · E = banjhpan · K = khoon na jamna. Mantra: \u003cb>A-R, B1-B, C-S, D-R, K-N\u003c/b>.\u003c/p>"
  },
  {
   "id": 7,
   "sub": "Hindi",
   "title": "Samas pahchanne ka 3-step",
   "html": "\u003cp>(1) Beech me \"और\" daalo → dvandv. (2) \"का/की/के\" lage → tatpurush. (3) Visheshan-visheshya ho → karmadharan. (4) Sankhya lage → dvigu. (5) Pehla shabd avyay ho → avyayibhav. (6) Teesra arth nikle → bahuvrihi.\u003c/p>"
  },
  {
   "id": 8,
   "sub": "Current",
   "title": "Rajasthan ke jile — group trick",
   "html": "\u003cp>Marwar = Jodhpur area, Mewar = Udaipur/Chittor, Hadoti = Kota/Bundi/Baran/Jhalawar, Dhundhar = Jaipur/Amber, Shekhawati = Sikar/Jhunjhunu, Mewat = Alwar/Bharatpur, Bani = Bikaner area, Bhaat = Jaisalmer, Bhopalgarh = Bikaner-Churu. Region ke naam se jila yaad karo.\u003c/p>"
  },
  {
   "id": 9,
   "sub": "Maths",
   "title": "Square aur Cube yaad rakhna",
   "html": "\u003cp>Square 1-30 aur cube 1-15 table likho. 25 ka square = 625 (2×3=6, 25 lagao). 45² = 2025 (4×5=20, 25). Isi tarah 95² = 9025. Ye trick x5 par khatam hone wali har sankhya par lagti hai.\u003c/p>"
  },
  {
   "id": 10,
   "sub": "Reasoning",
   "title": "Direction me displacement",
   "html": "\u003cp>Uttar-dakshin ko ek axis, purab-pashchim ko doosri. Sab kadam jodo-baat lo, phir √(x²+y²). Agar \"South-West\" puchha ho to tan (tan θ) se angle nikalo. Yaad: left = anticlockwise, right = clockwise.\u003c/p>"
  }
 ],
 "calendar": {
  "January": [
   {
    "d": 12,
    "t": "National Youth Day (Vivekananda jayanti)"
   },
   {
    "d": 15,
    "t": "Indian Army Day"
   },
   {
    "d": 23,
    "t": "Parakram Diwas (Subhas Chandra Bose)"
   },
   {
    "d": 24,
    "t": "National Girl Child Day"
   },
   {
    "d": 25,
    "t": "National Voters' Day"
   },
   {
    "d": 26,
    "t": "Republic Day"
   },
   {
    "d": 30,
    "t": "Martyrs' Day (Gandhi ji ki shahadat)"
   }
  ],
  "February": [
   {
    "d": 11,
    "t": "Int'l Day of Women & Girls in Science"
   },
   {
    "d": 13,
    "t": "World Radio Day"
   },
   {
    "d": 20,
    "t": "World Social Justice Day"
   },
   {
    "d": 21,
    "t": "International Mother Language Day"
   }
  ],
  "March": [
   {
    "d": 3,
    "t": "World Wildlife Day"
   },
   {
    "d": 8,
    "t": "International Women's Day"
   },
   {
    "d": 14,
    "t": "Int'l Day of Mathematics (Pi Day)"
   },
   {
    "d": 21,
    "t": "World Poetry Day; Int'l Day of Forests"
   },
   {
    "d": 22,
    "t": "World Water Day"
   },
   {
    "d": 23,
    "t": "Shaheed Diwas (Bhagat Singh)"
   },
   {
    "d": 30,
    "t": "Rajasthan Diwas"
   }
  ],
  "April": [
   {
    "d": 2,
    "t": "World Autism Awareness Day"
   },
   {
    "d": 11,
    "t": "National Safe Motherhood Day"
   },
   {
    "d": 14,
    "t": "Dr. B. R. Ambedkar Jayanti"
   },
   {
    "d": 18,
    "t": "World Heritage Day"
   },
   {
    "d": 22,
    "t": "World Earth Day"
   },
   {
    "d": 25,
    "t": "World Malaria Day"
   }
  ],
  "May": [
   {
    "d": 1,
    "t": "Maharashtra Day; Int'l Workers' Day"
   },
   {
    "d": 11,
    "t": "National Education Day (Maulana Azad)"
   },
   {
    "d": 12,
    "t": "International Nurses Day"
   },
   {
    "d": 21,
    "t": "National Anti-Terrorism Day"
   },
   {
    "d": 31,
    "t": "World No Tobacco Day"
   }
  ],
  "June": [
   {
    "d": 5,
    "t": "World Environment Day"
   },
   {
    "d": 8,
    "t": "World Oceans Day"
   },
   {
    "d": 14,
    "t": "World Blood Donor Day"
   },
   {
    "d": 20,
    "t": "World Refugee Day"
   },
   {
    "d": 21,
    "t": "International Day of Yoga"
   }
  ],
  "July": [
   {
    "d": 1,
    "t": "National Doctors' Day"
   },
   {
    "d": 11,
    "t": "World Population Day"
   },
   {
    "d": 26,
    "t": "Kargil Vijay Diwas"
   }
  ],
  "August": [
   {
    "d": 6,
    "t": "Hiroshima Day"
   },
   {
    "d": 12,
    "t": "International Youth Day"
   },
   {
    "d": 15,
    "t": "Independence Day"
   },
   {
    "d": 19,
    "t": "World Photography Day"
   },
   {
    "d": 29,
    "t": "National Sports Day (Dhyan Chand)"
   }
  ],
  "September": [
   {
    "d": 5,
    "t": "Teacher's Day (Dr. Radhakrishnan)"
   },
   {
    "d": 8,
    "t": "World Literacy Day"
   },
   {
    "d": 14,
    "t": "Hindi Diwas"
   },
   {
    "d": 16,
    "t": "World Ozone Day"
   },
   {
    "d": 17,
    "t": "World Patient Safety Day"
   },
   {
    "d": 28,
    "t": "World Rabies Day"
   }
  ],
  "October": [
   {
    "d": 1,
    "t": "Int'l Day of Older Persons"
   },
   {
    "d": 2,
    "t": "Gandhi Jayanti; Int'l Day of Non-Violence"
   },
   {
    "d": 8,
    "t": "Indian Air Force Day"
   },
   {
    "d": 10,
    "t": "World Mental Health Day"
   },
   {
    "d": 24,
    "t": "United Nations Day"
   },
   {
    "d": 31,
    "t": "Rashtriya Ekta Diwas (Sardar Patel)"
   }
  ],
  "November": [
   {
    "d": 9,
    "t": "National Legal Services Day"
   },
   {
    "d": 14,
    "t": "Children's Day (Nehru jayanti)"
   },
   {
    "d": 19,
    "t": "International Men's Day"
   },
   {
    "d": 26,
    "t": "National Constitution Day"
   }
  ],
  "December": [
   {
    "d": 1,
    "t": "World AIDS Day"
   },
   {
    "d": 3,
    "t": "Int'l Day of Disabled Persons"
   },
   {
    "d": 4,
    "t": "Indian Navy Day"
   },
   {
    "d": 10,
    "t": "Human Rights Day"
   },
   {
    "d": 22,
    "t": "National Mathematics Day (Ramanujan)"
   },
   {
    "d": 25,
    "t": "Christmas"
   },
   {
    "d": 31,
    "t": "National Remembrance Day for Victims of Terrorism"
   }
  ]
 },
 "tools": [
  {
   "id": "percent",
   "name": "Percent ↔ Fraction",
   "hi": "प्रतिशत",
   "desc": "x% ka fraction aur fraction ka percent turant."
  },
  {
   "id": "si",
   "name": "SI / CI Calculator",
   "hi": "साधारण-चक्रवृद्धि",
   "desc": "Byaj, amount aur monthly EMI jaisa comparison."
  },
  {
   "id": "avg",
   "name": "Average & Percentage Change",
   "hi": "माध्य",
   "desc": "Aur B ka % change, average of numbers."
  },
  {
   "id": "flash",
   "name": "India GK Flashcards",
   "hi": "भारत GK",
   "desc": "Tap karo, answer palto — 40 cards."
  },
  {
   "id": "flashraj",
   "name": "Rajasthan GK Flashcards",
   "hi": "राजस्थान GK",
   "desc": "Jile, kile, nadiyan — 40 cards."
  },
  {
   "id": "alphabet",
   "name": "Alphabet Position Game",
   "hi": "अक्षर",
   "desc": "A=1 … Z=26 drill, timer ke sath."
  },
  {
   "id": "map",
   "name": "District Map Practice",
   "hi": "मानचित्र",
   "desc": "Schematic map par jila dhoondo."
  },
  {
   "id": "crossword",
   "name": "Crossword",
   "hi": "शब्दपहेली",
   "desc": "GK terms par chhoti puzzle."
  },
  {
   "id": "jokes",
   "name": "Fun Break",
   "hi": "व्यंग्य",
   "desc": "Padhai ke beech 2 minute ka break."
  }
 ],
 "flashcards": {
  "india": [
   [
    "Rashtriya pashu",
    "Bakumain"
   ],
   [
    "Rashtriya pakshi",
    "Mor"
   ],
   [
    "Rashtriya phool",
    "Kamal"
   ],
   [
    "Rashtriya vriksh",
    "Vad"
   ],
   [
    "Sabse lambi nadi",
    "Ganga"
   ],
   [
    "Sabse unchi choti (India)",
    "Kanchanjunga"
   ],
   [
    "Sabse bada rajya",
    "Rajasthan"
   ],
   [
    "Sabse chhota rajya",
    "Goa"
   ],
   [
    "Kark rekha kitne rajyon se",
    "8"
   ],
   [
    "Samvidhan laagu",
    "26 Jan 1950"
   ],
   [
    "Rashtriya geet",
    "Jana Gana Mana"
   ],
   [
    "Rashtriya nishan",
    "Satyameva Jayate"
   ],
   [
    "Sabse zyada jansankhya wala rajya",
    "Uttar Pradesh"
   ],
   [
    "Sabse adhik saksarata",
    "Kerala"
   ],
   [
    "Sabse purana Jain sthan?",
    "Ranakpur"
   ],
   [
    "Bharat ke kul UT",
    "8"
   ],
   [
    "Parliament ka upper house",
    "Rajya Sabha"
   ],
   [
    "Lok Sabha ki avadhi",
    "5 varsh"
   ],
   [
    "CAG kisni niyukt karte hain",
    "Rashtrapati"
   ],
   [
    "Attorney General ka anuched",
    "76"
   ],
   [
    "NITI Aayog ke chairperson",
    "Prime Minister"
   ],
   [
    "GST Council ke chairperson",
    "Union Finance Minister"
   ],
   [
    "RBI ki sthapna",
    "1935"
   ],
   [
    "RBI ka nationalised bank?",
    "1955 (SBI sthapna)"
   ],
   [
    "Project Tiger",
    "1973"
   ],
   [
    "Pehla national park",
    "Jim Corbett (1936)"
   ],
   [
    "Standard meridian",
    "82°30' E"
   ],
   [
    "National aquatic animal",
    "Ganga dolphin"
   ],
   [
    "Official languages (Union)",
    "Hindi + English"
   ],
   [
    "Scheduled languages",
    "22"
   ],
   [
    "Sundarban kis rajya me",
    "West Bengal"
   ],
   [
    "Bharat ke kul kendrashit kshetra",
    "8"
   ]
  ],
  "rajasthan": [
   [
    "Rajya pashu",
    "Chinkara"
   ],
   [
    "Rajya pakshi",
    "Godawan"
   ],
   [
    "Rajya vriksh",
    "Khejri"
   ],
   [
    "Rajya pushp",
    "Rohida"
   ],
   [
    "Rajya khel",
    "Polo"
   ],
   [
    "Rajdhani",
    "Jaipur"
   ],
   [
    "Jile",
    "41"
   ],
   [
    "Divisions",
    "7"
   ],
   [
    "Sabse bada jila (kshetra)",
    "Jaisalmer"
   ],
   [
    "Sabse uncha shikhar",
    "Guru Shikhar"
   ],
   [
    "Sabse lambi nadi",
    "Banas"
   ],
   [
    "Khari nadi",
    "Luni"
   ],
   [
    "Sabse bada kila",
    "Chittorgarh"
   ],
   [
    "36 km deewar wala kila",
    "Kumbhalgarh"
   ],
   [
    "Living fort",
    "Jaisalmer"
   ],
   [
    "UNESCO hill forts kitne",
    "6"
   ],
   [
    "Pushkar ka mandir",
    "Brahma"
   ],
   [
    "City of Lakes",
    "Udaipur"
   ],
   [
    "Pink City",
    "Jaipur"
   ],
   [
    "Hawa Mahal varsh",
    "1799"
   ],
   [
    "Jantar Mantar banaya",
    "Sawai Jai Singh II"
   ],
   [
    "Abhaneri stepwell jila",
    "Dausa"
   ],
   [
    "Dilwara jila",
    "Sirohi"
   ],
   [
    "Ranakpur jila",
    "Pali"
   ],
   [
    "Sambhar kis liye",
    "Namak sarovar"
   ],
   [
    "Desert NP jila",
    "Jaisalmer"
   ],
   [
    "Keoladeo jila",
    "Bharatpur"
   ],
   [
    "Sariska jila",
    "Alwar"
   ],
   [
    "Ranthambore jila",
    "Sawai Madhopur"
   ],
   [
    "Bikaneri bhujia",
    "GI tag"
   ],
   [
    "Makrana",
    "Marble"
   ],
   [
    "Kota",
    "Doria kapda"
   ],
   [
    "Sanganer/Bagru",
    "Block print"
   ],
   [
    "Bansiwar ka mela",
    "Asia ka sabse bada pashu mela"
   ],
   [
    "Kalbeliya",
    "UNESCO (2010)"
   ],
   [
    "Ghoomar",
    "Mewar ka nritya"
   ],
   [
    "Bani Thani",
    "Kishangarh shaili"
   ],
   [
    "Phad painting",
    "Shahpura, Bhilwara"
   ],
   [
    "Raj Diwas",
    "30 March"
   ],
   [
    "Vidhan Sabha seats",
    "200"
   ]
  ]
 },
 "crossword": {
  "title": "Rajasthan GK — 6 terms",
  "clues": [
   {
    "a": "CHINKARA",
    "c": "Rajasthan ka rajya-pashu"
   },
   {
    "a": "LUNI",
    "c": "Rajasthan ki khare paani ki nadi"
   },
   {
    "a": "JAISALMER",
    "c": "Sonar Qila ka jila"
   },
   {
    "a": "KHEJRI",
    "c": "Rajya vriksh"
   },
   {
    "a": "BANAS",
    "c": "State ki sabse lambi nadi"
   },
   {
    "a": "AJMER",
    "c": "Dargah nagar"
   }
  ]
 },
 "jokes": [
  "Teacher: Batao, Rajasthan ki rajdhani kaunsi hai? Pappu: Sir, aap hi bata dijiye — main to padhne hi usliye aaya hoon.",
  "Patwar bharti ka result aaya to ghar me tyohar — kyunki ab form bharne ka mauka dobara mil gaya.",
  "GK teacher: 'Aravalli' ka matlab? Chhatra: 'Bahut purane pahad'. Teacher: Sahi, aur bharat ka sabse purana — jaise hamara syllabus.",
  "Hindi: 'आँखों का तारा' का अर्थ? Student: बहुत प्रिय। Teacher: बिल्कुल — और 'आँख का पुतला' भी वही है, पर 'आँख में धूल झोंकना' बिल्कुल अलग।"
 ]
};
