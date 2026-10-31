/* ============================================================
   I LIKE EXAM — content store
   Yahi ek file hai jisme sara data rehta hai. Naya note/prashn
   add karna ho to sirf neeche ke arrays me lines badhni hain,
   code (js/app.js) ko chhune ki zaroorat nahi.
   ============================================================ */
window.DATA = {

  site: {
    name: "I LIKE EXAM",
    tag: "Taiyari ka bharosemand saathi",
    notes: "Is site ka sara likha hua content original hai. Factual data (jile, rajya, samvidhan ke anuched) sarkari/jan-sansmrutik strot se hai."
  },

  /* ---------- 15 SUBJECTS ---------- */
  subjects: [
    {
      id: "rajasthan", name: "Rajasthan GK", hi: "राजस्थान अध्ययन", icon: "🏰",
      notes: [
        {
          id: "raj-geo", title: "Rajasthan ka Bhugol — Poori Parichay", hi: "राजस्थान का भूगोल", mins: 6,
          html: `
<h3>Kshetra aur sthiti</h3>
<p>Rajasthan bharat ka <b>kshetraफल me sabse bada rajya</b> hai — lagbhag 3.42 lakh varg km. Ye des ke uttar-pashchim me hai aur iski sima Pakistan (Punjab aur Sindh prant) se milti hai.</p>
<dl class="kv">
  <dt>Sthapna</dt><dd>30 March 1949 (Matsya Sangh ka vilayan)</dd>
  <dt>Raj Diwas</dt><dd>30 March</dd>
  <dt>Rajdhani</dt><dd>Jaipur (Pink City)</dd>
  <dt>Jile / Divisions</dt><dd>41 jile, 7 divisions (2025 ke baad)</dd>
  <dt>Lok Sabha / Rajya Sabha</dt><dd>25 / 10</dd>
  <dt>Vidhan Sabha</dt><dd>200 siatein</dd>
  <dt>Uchchatam shikhar</dt><dd>Guru Shikhar, Mount Abu (1722 m)</dd>
</dl>
<div class="box"><b>Padosi:</b> Uttar-pashchim me Pakistan, uttar me Punjab aur Haryana, purab me Uttar Pradesh, dakshin-purab me Madhya Pradesh aur dakshin-pashchim me Gujarat. Sabse lambi sima Madhya Pradesh ke sath.</div>
<h3>Prakritik bhatte</h3>
<ul>
  <li><b>Thar ka marusthal</b> — pashchimi Rajasthan, sanstharit marusthal.</li>
  <li><b>Aravalli parvatmala</b> — bharat ki sabse purani fold mountain range, state ko do bhaagon me baantti hai.</li>
  <li><b>Hadoti aur Mewar ka patharili zameen</b> — purab-dakshin me chambal-banas ki ghati.</li>
  <li><b>South-eastern plain</b> — ghaggar aur chhote nadi-marg.</li>
</ul>
<h3>Nadiyan</h3>
<ul>
  <li><b>Banas</b> — rajasthan ki sabse lambi nadi, jo poori state ke andar behti hai ("Rajasthan ki Lekhwani").</li>
  <li><b>Luni</b> — state ki akeli khare paani ki nadi, jo sirf Rajasthan me behkar Rann of Kutch me khatam hoti hai.</li>
  <li><b>Chambal</b> — Yamuna ki sahayak, ravine erosion (badlands) ke liye mashhoor.</li>
  <li><b>Mahi, Sabarmati, Mahi ka muhana, Betw, Kali Sindh, Parvati, Manas, Ghaggar</b> — baaki mukhya jal-pravah.</li>
</ul>
<h3>Sarovar</h3>
<ul>
  <li><b>Sambhar</b> (Nagaur/Ajmer/Jaipur) — bharat ki sabse badi inland salt lake.</li>
  <li><b>Jaipur ke jal-sarovar</b> — Man Sagar, Galta; <b>Udaipur</b> — Pichola, Fateh Sagar (isliye "City of Lakes").</li>
  <li><b>Kanjhal</b> (Bharatpur) aur <b>Chhapar</b> (Jaipur) — pakshi-parikshon ke liye mahatvapurn.</li>
</ul>`
        },
        {
          id: "raj-culture", title: "Rajasthan ki Kala, Sanskriti aur Tyohar", hi: "कला एवं संस्कृति", mins: 5,
          html: `
<h3>Rajya-chinh</h3>
<dl class="kv">
  <dt>Pashu</dt><dd>Chinkara (Indian Gazelle)</dd>
  <dt>Pakshi</dt><dd>Godawan (Great Indian Bustard)</dd>
  <dt>Vriksh</dt><dd>Khejri</dd>
  <dt>Pushp</dt><dd>Rohida</dd>
  <dt>Krida</dt><dd>Polo (Pushkar ka polo ground Guinness list me)</dd>
  <dt>Sarisp</dt><dd>Goh (Monitor Lizard)</dd>
</dl>
<h3>Lok nritya</h3>
<ul>
  <li><b>Ghoomar</b> — Mewar/Marwar ki ghoomar, aurton ka samuhik nritya.</li>
  <li><b>Kalbeliya</b> — Saptaswara jati; UNESCO ki Intangible Cultural Heritage list me (2010).</li>
  <li><b>Bhavai</b> — maathe par ghate/teerate rakhar nritya; <b>Gair</b> — Mewar ka dandiya-jaisa nritya; <b>Kachhi Ghodi</b> — Braj/Hadoti.</li>
</ul>
<h3>Sangeet</h3>
<p>Manganiyar aur Laganer (Langhiya) — Marwar ke paramparik gharane. Bhairon Raval (Bhatiana) aur Ghevar ke gait kinchon ke liye jaane jaate hain.</p>
<h3>Chitrashaili (schools of painting)</h3>
<ul>
  <li><b>Mewar</b> — dharmik aur veer ras, Rajasthani miniatures ki sabse purani shaili.</li>
  <li><b>Marwar</b> — tej rang, Osian aur Nagaur ki deewarein.</li>
  <li><b>Bundi</b> — "Chataen ka Mahal" aur "Badal Mahal" ke chitr.</li>
  <li><b>Kishangarh</b> — Bani Thani ("bharat ki Monalisa"), madhyam avayav.</li>
  <li><b>Phad</b> — Shahpura (Bhilwara) me kapdas par Pabuji ki parikatha.</li>
</ul>
<h3>Hastakala aur GI tag</h3>
<p>Jaipur ka blue pottery, Sanganer/Bagru ka block print, Sikar ka bandhej, Kota kadoria, Jodhpur ke mojari, Bikaneri bhujia, Makrana ka marble (Taj Mahal ki sangemarmar), Nathdwara ki pichhwai, Sojat ki mehandi.</p>
<h3>Mele</h3>
<ul>
  <li><b>Pushkar Mela</b> (Kartik Purnima) — othon ka mela aur Brahma mandir.</li>
  <li><b>Desert Festival</b> — Jaisalmer, February.</li>
  <li><b>Sahapakh ka Mela</b> — Bansiwar (Bhilwara), Asia ka sabse bada pashu-mela.</li>
  <li><b>Gangaur</b> (Chaitra), <b>Teej</b> (Shravan), <b>Ghmar</b> (Bharatpur).</li>
</ul>`
        },
        {
          id: "raj-forts", title: "Kile, Mahal aur Virasat Sthal", hi: "दुर्ग एवं विरासत", mins: 5,
          html: `
<h3>UNESCO World Heritage</h3>
<p>2013 me "Hill Forts of Rajasthan" ke naam se 6 kile UNESCO list me daale gaye: <b>Chittor, Kumbhalgarh, Ranthambore, Sissingh, Jaigarh aur Amer</b>. Inke alawa Jantar Mantar (Jaipur, 2010) aur Keoladeo (Bharatpur, 1985) bhi World Heritage hain.</p>
<h3>Mukhya kile</h3>
<table class="tb"><tr><th>Kila</th><th>Jila</th><th>Yaad rakhne layak</th></tr>
<tr><td>Chittorgarh</td><td>Chittorgarh</td><td>Bharat ka sabse bada kila; Kirti Stambha aur Vijay Stambha</td></tr>
<tr><td>Kumbhalgarh</td><td>Rajsamand</td><td>Maharana Kumbha ka banaya; 36 km lambi deewar</td></tr>
<tr><td>Ranthambore</td><td>Sawai Madhopur</td><td>Bakumain + vyaghra abhayaranya</td></tr>
<tr><td>Mehrangarh</td><td>Jodhpur</td><td>Rao Jodha, 1459; 5 kile ki deewarein</td></tr>
<tr><td>Sonar Qila</td><td>Jaisalmer</td><td>"Living fort" — aaj bhi log rehte hain</td></tr>
<tr><td>Amer / Jaigarh</td><td>Jaipur</td><td>Man Singh I; Jaigarh me duniya ka sabse bada topkhana pahiya</td></tr>
<tr><td>Gagron</td><td>Sikar</td><td>Rajput-Maratha architecture ka mishran</td></tr>
<tr><td>Bhatner (Hanumangarh)</td><td>Hanumangarh</td><td>Bharat ke sabse purane kilon me se ek</td></tr>
</table>
<h3>Any mahatvapurn sthal</h3>
<ul>
  <li><b>Hawa Mahal</b> (1799, Sawai Pratap Singh) — 953 jharokhe.</li>
  <li><b>Jantar Mantar</b> — Sawai Jai Singh II ka rashtriy vigyan vedhshala.</li>
  <li><b>Abhaneri ka Chand Baori</b> (Dausa) — duniya ke sabse gehre seedhi-dar stepwell me se ek.</li>
  <li><b>Dilwara ke Jain mandir</b> (Sirohi) aur <b>Ranakpur</b> (Pali) — 1444 marble ke amb.</li>
  <li><b>Desert National Park</b> (Jaisalmer) — Godawan ka mukhya vasasthan.</li>
</ul>`
        }
      ],
      sets: [], nsets: 2, nq: 18
    },

    {
      id: "india", name: "India GK", hi: "भारत का सामान्य ज्ञान", icon: "🇮",
      notes: [
        {
          id: "ind-parichay", title: "Bharat ka Samanya Parichay — Naam, Sthiti, Simayein", hi: "भारत का सामान्य परिचय", mins: 8,
          html: `
<h3>नाम कैसे पड़ा — भारत, हिन्दुस्तान, इण्डिया</h3>
<ul>
  <li><b>भारत</b> — आर्य राजा <b>भरत</b> के नाम पर। उसी की स्मृति में यह भूमि "भरतवर्ष" / "भरतसंमत" कही गई।</li>
  <li><b>हिन्दुस्तान</b> — सिन्धु (इण्डस) नदी का फ़ारसी रूप <b>"हिन्दु"</b>, और उसमें "स्थान" जुड़ने से हिन्दुस्तान बना।</li>
  <li><b>इण्डिया (India)</b> — यूनानियों ने सिन्धु को <b>"इण्डस"</b> कहा; उसी नाम से अंग्रेज़ी का India बना।</li>
</ul>
<div class="notice">तीनों नाम एक ही जगह से आते हैं — <b>सिन्धु नदी</b> या <b>राजा भरत</b>। प्रश्न में अक्सर "भारत नाम किसके नाम पर पड़ा" पूछा जाता है — उत्तर <b>राजा भरत</b>।</div>

<h3>भारतीय उपमहाद्वीप की प्राकृतिक सीमाएँ</h3>
<dl class="kv">
  <dt>उत्तर</dt><dd>हिमालय पर्वत श्रेणी</dd>
  <dt>पश्चिम</dt><dd>हिन्दुकुश और सुलेमान पर्वत</dd>
  <dt>दक्षिण</dt><dd>हिन्दु महासागर</dd>
  <dt>इस उपमहाद्वीप के देश</dt><dd>भारत, पाकिस्तान, नेपाल, भूटान, बांग्लादेश</dd>
</dl>
<p>उपमहाद्वीप का सबसे बड़ा देश भारत है, इसीलिए पूरे क्षेत्र को <b>भारतीय उपमहाद्वीप</b> कहा जाता है।</p>

<h3>गणितीय स्थिति और माप</h3>
<table class="tb"><tr><th>क्या मापा जाए</th><th>मान</th></tr>
<tr><td>अक्षांशीय विस्तार</td><td>6°4′ उत्तर से 37°6′ उत्तर तक</td></tr>
<tr><td>देशांतरीय विस्तार</td><td>68°9′ पूर्व से 97°25′ पूर्व तक</td></tr>
<tr><td>उत्तर—दक्षिण लम्बाई</td><td>लगभग 3,214 किमी</td></tr>
<tr><td>पूर्व—पश्चिम चौड़ाई</td><td>लगभग 2,933 किमी</td></tr>
<tr><td>कुल क्षेत्रफल</td><td>32,87,263 वर्ग किमी</td></tr>
<tr><td>कृषि योग्य भूमि</td><td>विश्व में <b>सातवाँ</b> सबसे बड़ा देश (कुल भूमि का 2.43%)</td></tr>
</table>

<div class="box"><b>दक्षिण के दो बिन्दु उलझन वाले हैं — अलग से याद करें:</b><br>
मुख्य भूमि का दक्षिणतम बिन्दु — <b>कन्याकुमारी (8°4′ उत्तर)</b><br>
पूरे देश का दक्षिणतम बिन्दु — <b>इन्दिरा प्वाइण्ट, ग्रेट निकोबार (6°4′ उत्तर)</b><br>
मानचित्र पर <b>इण्डिया प्वाइण्ट 6°45′ उत्तर</b> पर अंकित मिलता है।</div>

<h3>चारों ओर जल</h3>
<ul>
  <li><b>पश्चिम</b> में अरब सागर, <b>पूर्व</b> में बंगाल की खाड़ी, <b>दक्षिण</b> में हिन्दु महासागर।</li>
  <li>भारत को "महासागर में उभरा हुआ स्थलखण्ड" कहा जाता है — दक्षिण एशिया का सबसे बड़ा प्रायद्वीप।</li>
</ul>

<h3>भारत का मानक समय</h3>
<dl class="kv">
  <dt>मानक देशांतर</dt><dd>82°30′ पूर्व — इलाहाबाद (नैनी) / मिर्जापुर के पास से गुजरता है</dd>
  <dt>IST और GMT में अंतर</dt><dd>IST = GMT <b>+ 5 घंटे 30 मिनट</b> (भारत GMT से आगे)</dd>
  <dt>82°30′ पर आने वाले राज्य</dt><dd>उत्तर प्रदेश, मध्य प्रदेश, छत्तीसगढ़, ओडिशा, आंध्र प्रदेश</dd>
</dl>

<h3>कर्क रेखा (23°30′ उत्तर) — 8 राज्य</h3>
<p>कर्क रेखा इन आठ राज्यों से होकर गुजरती है — <b>गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखण्ड, पश्चिम बंगाल, त्रिपुरा, मिजोरम</b>। इनके उत्तर वाले सभी राज्य कर्क रेखा के उत्तर में हैं।</p>
<ul>
  <li>रेखा के सबसे नजदीक की राजधानियाँ — <b>गांधीनगर, भोपाल, राँची, अगरतला, आइजोल</b>।</li>
  <li><b>राँची</b> कर्क रेखा से सबसे नजदीकी राज्यधान है।</li>
  <li>राज्य में नजदीकी स्थान — <b>बाँसवाड़ा (राजस्थान)</b>।</li>
</ul>

<h3>देश के चारों अंतिम सीमा बिन्दु</h3>
<table class="tb"><tr><th>दिशा</th><th>बिन्दु</th></tr>
<tr><td>उत्तर</td><td>इन्दिरा कॉल (लद्दाख) — 82°05′ उत्तर</td></tr>
<tr><td>दक्षिण</td><td>इन्दिरा प्वाइण्ट (ग्रेट निकोबार)</td></tr>
<tr><td>पूर्व</td><td>किबिथु (अरुणाचल प्रदेश)</td></tr>
<tr><td>पश्चिम</td><td>गोरेमोटा (गुजरात)</td></tr>
</table>
<p>इन्दिरा प्वाइण्ट भूमध्य रेखा से लगभग <b>876 किमी</b> उत्तर में है। इसका पुराना नाम <b>पिगमेल्ियन प्वाइण्ट</b> (पाइरस प्वाइण्ट) रहा है।</p>

<h3>भूमीय सीमा की लम्बाई — कौन-किस देश से</h3>
<table class="tb"><tr><th>देश</th><th>सीमा (किमी)</th></tr>
<tr><td>बांग्लादेश</td><td>4,096</td></tr>
<tr><td>चीन</td><td>3,917</td></tr>
<tr><td>पाकिस्तान</td><td>3,310</td></tr>
<tr><td>नेपाल</td><td>1,752</td></tr>
<tr><td>म्यांमार</td><td>1,458</td></tr>
<tr><td>भूटान</td><td>587</td></tr>
<tr><td>अफगानिस्तान</td><td>80 (सबसे छोटी सीमा)</td></tr>
</table>
<div class="notice">सबसे लम्बी सीमा — <b>बांग्लादेश</b> से। सबसे छोटी — <b>अफगानिस्तान</b> (80 किमी, गिलगित-बालतिस्तान के पास)।</div>

<h3>प्रसिद्ध सीमा रेखाएँ</h3>
<dl class="kv">
  <dt>डूरण्ड रेखा</dt><dd>पाकिस्तान — अफगानिस्तान के बीच (1893, मॉर्टिमर डूरण्ड)</dd>
  <dt>मैकमोहन रेखा</dt><dd>भारत — चीन की सीमा (1914, शिमला सम्मेलन)</dd>
  <dt>रेडक्लिफ रेखा</dt><dd>भारत — पाकिस्तान विभाजन (17 अगस्त 1947); बाद में यह निःशस्त्रीकरण रेखा बनी और <b>1972 के शिमला समझौते</b> से "नियंत्रण रेखा" (LoC)</dd>
  <dt>शून्य रेखा</dt><dd>त्रिपुरा — बांग्लादेश के बीच</dd>
  <dt>पाक अधिकृत कश्मीर</dt><dd>पाकिस्तान के अधिकार में रहा कश्मीर का भाग</dd>
</dl>`,
        },
        {
          id: "ind-geo", title: "Bharat ka Bhugol — Mukhya Ankde", hi: "भारत का भूगोल", mins: 5,
          html: `
<dl class="kv">
  <dt>Kshetraफल</dt><dd>32.87 lakh varg km — Asia me 3rd, duniya me 7th</dd>
  <dt>Rajya / UT</dt><dd>28 rajya + 8 kendrashit kshetra</dd>
  <dt>Bhumi sima</dt><dd>lagbhag 15,106 km (7 deson se milati hai)</dd>
  <dt>Samudri tat</dt><dd>lagbhag 11,098 km (dweep-samuhon samet)</dd>
  <dt>Sabse bada rajya (kshetra)</dt><dd>Rajasthan</dd>
  <dt>Sabse chhota rajya (kshetra)</dt><dd>Goa</dd>
  <dt>Sabse adhik jansankhya</dt><dd>Uttar Pradesh</dd>
  <dt>Sabse adhik saksarata</dt><dd>Kerala</dd>
</dl>
<h3>Rekhayein</h3>
<ul>
  <li><b>Kark Rekha (Tropic of Cancer)</b> 8 rajyon se hokar guzarti hai — Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.</li>
  <li><b>Prathamik meridian (82°30' E)</b> — Mirzapur (UP) ke paas se; ye IS ka adhar hai.</li>
  <li>Bharat ka sabse purva-pashchim vistar Kashmir se Kanyakumari tak — lagbhag 3,214 km.</li>
</ul>
<h3>Nadiyan, pahad, van</h3>
<ul>
  <li><b>Ganga</b> — rashtriya nadi; sabse lambi nadi jo Bharat me behti hai.</li>
  <li><b>Kanchanjunga</b> — Bharat ki sarvuchch choti (8,586 m); Everest nepal/China ki sima par hai.</li>
  <li><b>Western Ghats (Sahyadri)</b> — Narmada, Tapi, Mahanadi, Godavari, Krishna, Kaveri sab yahan se nikalti hain.</li>
  <li><b>Dekkan ka pathar</b> — basalt lava se bana; kala-kali mitti (black soil) kapas ke liye shreshth.</li>
</ul>
<div class="box"><b>Mitti ke prakar:</b> alluvial (sabse faili hui), black/regur, red, laterite, arid, forest — kul 8 prakar, NCERT ke anusaar mukhya 6.</div>`
        },
        {
          id: "ind-symbols", title: "Rashtriya Chinh aur Pratham", hi: "राष्ट्रीय प्रतीक", mins: 3,
          html: `
<table class="tb"><tr><th>Chinh</th><th>Kya hai</th></tr>
<tr><td>Rashtriya pashu</td><td>Bakumain (Panthera tigris)</td></tr>
<tr><td>Rashtriya pakshi</td><td>Mor (Pavo cristatus)</td></tr>
<tr><td>Rashtriya phool</td><td>Kamal</td></tr>
<tr><td>Rashtriya vriksh</td><td>Vad</td></tr>
<tr><td>Rashtriya drishya</td><td>National Emblem — Ashoka ke Sarnath Singhshashe par 3 sher</td></tr>
<tr><td>Rashtriya gaatha</td><td>'Vaishnava Jana To' — Gandhi ji ka priya</td></tr>
<tr><td>Rashtriya geet</td><td>'Jana Gana Mana' — Rabindranath Tagore</td></tr>
<tr><td>Rashtriya nishan</td><td>'Satyameva Jayate' — Mundaka Upanishad</td></tr>
<tr><td>Rashtriya khel</td><td>Koi bhi khel officially "rashtriya khel" ghoshit nahi hai (ye ek prachalit bhranti hai)</td></tr>
</table>
<h3>Jhande ke niyam</h3>
<ul>
  <li>Flag Code of India 2002; triranga ka anupat 2:3.</li>
  <li>Khadi se bana, deep saffron — white — India green; chakra 24 taiye.</li>
  <li>Rashtriya Flag Adoption Day — 22 July.</li>
</ul>`
        }
      ],
      sets: [], nsets: 2, nq: 16
    },

    {
      id: "constitution", name: "Indian Constitution", hi: "भारतीय संविधान", icon: "📜",
      notes: [
        {
          id: "con-basic", title: "Samvidhan ka Structure — Part, Schedule, Anuched", hi: "संविधान का परिचय", mins: 6,
          html: `
<dl class="kv">
  <dt>Handwritten</dt><dd>Bezwada Dasgupta — 5 saal, English + Hindi donon</dd>
  <dt>Pages</dt><dd>~448 (mool), ab 100+ sanshodhan</dd>
  <dt>Parts / Schedules / Articles</dt><dd>22 Part, 12 Schedule, 470+ anuched</dd>
  <dt>Preamble ke shabd</dt><dd>Sovereign, Socialist, Secular, Democratic, Republic</dd>
</dl>
<h3>Mukhya anuched ek nazar me</h3>
<table class="tb"><tr><th>Anuched</th><th>Kya deta hai</th></tr>
<tr><td>12–35 (Part III)</td><td>Maulik Adhikar (Fundamental Rights)</td></tr>
<tr><td>14</td><td>Kanoon ke samne barabari</td></tr>
<tr><td>17</td><td>Chhuwa-chhat ka pratibandh</td></tr>
<tr><td>19</td><td>Swatantrata ke 6 adhikar</td></tr>
<tr><td>21</td><td>Jivan aur swatantrata ka adhikar</td></tr>
<tr><td>21A</td><td>6–14 varsh ko shiksha (86th sanshodhan, 2002)</td></tr>
<tr><td>32</td><td>Samvidhan ka "dil aur atma" — SC tak direct pravesh</td></tr>
<tr><td>36–51 (Part IV)</td><td>DPSP — rajya ki niti ke nirdeshak siddhant</td></tr>
<tr><td>51A</td><td>Maulik Kartavya (42nd sanshodhan se)</td></tr>
<tr><td>61</td><td>Rashtrapati ka mahabhishandhan</td></tr>
<tr><td>74</td><td>PM ke netritva me mantri-parishad</td></tr>
<tr><td>89</td><td>VP = Rajya Sabha ke adhyaksh</td></tr>
<tr><td>110</td><td>Dhan-vidheyak (Money Bill) ki paribhasha</td></tr>
<tr><td>243–243ZG</td><td>Panchayati Raj aur nagar nikay (73rd/74th sanshodhan)</td></tr>
<tr><td>356</td><td>Rajya me Rashtrapati shasan</td></tr>
<tr><td>368</td><td>Samvidhan sanshodhan ki prakriya</td></tr>
</table>
<div class="box"><b>Sanvidhan ke janak:</b> Dr. B. R. Ambedkar (drafting chairman). <b>Constituent Assembly ki pehli baithak:</b> 9 December 1946 — isi din "Constitution Day" (26 November) se alag, 9 Dec "Legal Services Day" hai.</div>`
        },
        {
          id: "con-amend", title: "Mahatvapurn Sanshodhan (Amendments)", hi: "महत्वपूर्ण संशोधन", mins: 4,
          html: `
<table class="tb"><tr><th>Sanshodhan</th><th>Vishay</th></tr>
<tr><td>1st (1951)</td><td>Anuched 19 par vyavaharik pabandi; 9th Schedule</td></tr>
<tr><td>7th (1956)</td><td>Rajyon ka punarrang (States Reorganisation)</td></tr>
<tr><td>24th (1971)</td><td>Parliament par samvidhan badalne ka poora adhikar</td></tr>
<tr><td>42nd (1976)</td><td>"Mini Constitution" — Preamble me Socialist, Secular, Integrity; 51A kartavya</td></tr>
<tr><td>44th (1978)</td><td>Anuched 31 hataya; Right to Property ab Article 300A (kanooni adhikar)</td></tr>
<tr><td>73rd / 74th (1992)</td><td>Panchayat aur Nagar Nikay ko samvidhanik darja</td></tr>
<tr><td>86th (2002)</td><td>Anuched 21A — shiksha ka adhikar</td></tr>
<tr><td>99th (2014)</td><td>NJAC (baad me SC ne radd kiya, collegium wapas)</td></tr>
<tr><td>101st (2016)</td><td>GST — Anuched 246A</td></tr>
<tr><td>103rd (2019)</td><td>EWS 10% aarakshan</td></tr>
<tr><td>104th (2020)</td><td>Anglo-Indian ka nomination band; LS aarakshan 15 saal aur</td></tr>
<tr><td>105th/106th (2021/2023)</td><td>OBC commission / Nari Shakti Vandan — mahilaon ke liye 1/3 aarakshan</td></tr>
</table>`
        }
      ],
      sets: [], nsets: 1, nq: 10
    },

    {
      id: "science", name: "General Science", hi: "सामान्य विज्ञान", icon: "🔬",
      notes: [
        {
          id: "sci-body", title: "Manav Sharir — Zaroori Tathya", hi: "मानव शरीर", mins: 4,
          html: `
<table class="tb"><tr><th>Ang</th><th>Tathya</th></tr>
<tr><td>Sabse bada ang</td><td>Tvak (skin)</td></tr>
<tr><td>Sabse bada internal ang</td><td>Yakrit (liver)</td></tr>
<tr><td>Sabse chhota haddi</td><td>Stapes — kaan me (kuli ke barabar)</td></tr>
<tr><td>Haddiyon ki sankhya</td><td>206 (vanaspati) ; shishu me ~300</td></tr>
<tr><td>Rakt ka normal pressure</td><td>120/80 mmHg</td></tr>
<tr><td>Dil ki dhadkan</td><td>~72/min (resting)</td></tr>
<tr><td>Rakt samuh</td><td>A, B, AB, O — O donor, AB receiver</td></tr>
<tr><td>Hemoglobin</td><td>Iron wala protein, O2 le jaata hai</td></tr>
<tr><td>WBC</td><td>Bedi rog se larne wale kanika</td></tr>
</table>
<h3>Vitamin aur kami</h3>
<table class="tb"><tr><th>Vitamin</th><th>Kami se rog</th><th>Strot</th></tr>
<tr><td>A (Retinol)</td><td>Rat-blindness</td><td>Gajar, doodh, kale patte</td></tr>
<tr><td>B1</td><td>Beri-beri</td><td>Dal, sabut anaaj</td></tr>
<tr><td>B12</td><td>Pernicious anaemia</td><td>Anda, mangso, doodh</td></tr>
<tr><td>C</td><td>Scurvy (masudo se khoon)</td><td>Nimbu, amla</td></tr>
<tr><td>D</td><td>Rickets / osteomalacia</td><td>Dhoop, machhli</td></tr>
<tr><td>K</td><td>Khoon na jamna</td><td>Hare sabzi</td></tr>
<tr><td>Iodine</td><td>Ghoqa (goitre)</td><td>Iodised namak, samudri khana</td></tr>
</table>`
        },
        {
          id: "sci-phy", title: "Bhautiki — SI Units aur Formula", hi: "भौतिकी", mins: 4,
          html: `
<table class="tb"><tr><th>Rashi</th><th>SI Unit</th></tr>
<tr><td>Force</td><td>Newton (N)</td></tr>
<tr><td>Energy / Work</td><td>Joule (J)</td></tr>
<tr><td>Power</td><td>Watt (W)</td></tr>
<tr><td>Pressure</td><td>Pascal (Pa)</td></tr>
<tr><td>Current</td><td>Ampere (A)</td></tr>
<tr><td>Resistance</td><td>Ohm (Ω)</td></tr>
<tr><td>Frequency</td><td>Hertz (Hz)</td></tr>
<tr><td>Luminous intensity</td><td>Candela (cd)</td></tr>
<tr><td>Amount of substance</td><td>Mole (mol)</td></tr>
<tr><td>Temperature</td><td>Kelvin (K)</td></tr>
</table>
<div class="box"><b>Yaad rakho:</b> 1 kWh = 3.6 × 10⁶ J · light-year samay ki nahi, <b>doori</b> ki ikai hai · dhvani ke liye madhyam chahiye, prakash ko nahi · dhvani ki gati thos &gt; drav &gt; gas.</div>
<h3>Formula</h3>
<ul>
  <li>v = u + at · s = ut + ½at² · v² = u² + 2as</li>
  <li>F = ma · W = F·s · P = W/t</li>
  <li>V = IR · P = VI · Ohm ka niyam</li>
  <li>Density = m/V · Pressure = F/A</li>
</ul>`
        }
      ],
      sets: [], nsets: 1, nq: 10
    },

    {
      id: "computer", name: "Computer", hi: "संगणक", icon: "💻",
      notes: [
        {
          id: "comp-basics", title: "Computer ke Basic — Full Forms aur Shortcut", hi: "परिचय", mins: 4,
          html: `
<table class="tb"><tr><th>Short</th><th>Full form</th></tr>
<tr><td>CPU</td><td>Central Processing Unit</td></tr>
<tr><td>RAM</td><td>Random Access Memory (volatile)</td></tr>
<tr><td>ROM</td><td>Read Only Memory (non-volatile)</td></tr>
<tr><td>ALU</td><td>Arithmetic Logic Unit</td></tr>
<tr><td>GPU</td><td>Graphics Processing Unit</td></tr>
<tr><td>LAN / WAN</td><td>Local / Wide Area Network</td></tr>
<tr><td>HTTP / HTTPS</td><td>HyperText Transfer (Secure) Protocol</td></tr>
<tr><td>URL</td><td>Uniform Resource Locator</td></tr>
<tr><td>PDF</td><td>Portable Document Format</td></tr>
<tr><td>BIOS</td><td>Basic Input Output System</td></tr>
</table>
<h3>Peedhi (Generations)</h3>
<table class="tb"><tr><th>Peedhi</th><th>Taknik</th></tr>
<tr><td>1st</td><td>Vacuum tube · machine language</td></tr>
<tr><td>2nd</td><td>Transistor · assembly language</td></tr>
<tr><td>3rd</td><td>IC (integrated circuit) · high-level language</td></tr>
<tr><td>4th</td><td>Microprocessor · VLSI · PC era</td></tr>
<tr><td>5th</td><td>AI, quantum, parallel processing</td></tr>
</table>
<h3>Memory units</h3>
<p>1 bit &lt; 1 byte (8 bits) &lt; 1 KB (1024 B) &lt; 1 MB &lt; 1 GB &lt; 1 TB. Number system: Binary base-2, Octal base-8, Decimal base-10, Hexadecimal base-16.</p>
<div class="box"><b>Shortcut:</b> Ctrl+C copy · Ctrl+V paste · Ctrl+X cut · Ctrl+Z undo · Ctrl+S save · Ctrl+A select all · Alt+F4 band karo · F1 help.</div>`
        }
      ],
      sets: [], nsets: 1, nq: 8
    },

    {
      id: "math", name: "Maths (Quantitative)", hi: "गणित", icon: "➗",
      notes: [
        {
          id: "math-form", title: "Formula Sheet — %, Profit, SI/CI, Speed", hi: "सूत्र", mins: 5,
          html: `
<h3> Pratishat (Percentage)</h3>
<ul>
  <li>x% of y = xy/100 · vridhi x% = ×(100+x)/100 · kami x% = ×(100−x)/100</li>
  <li>A, B se R% jyada hai to B, A se [R/(100+R)]×100 kam hai.</li>
  <li>Common fractions: 1/2=50%, 1/3≈33.33%, 1/4=25%, 1/5=20%, 1/6≈16.67%, 1/8=12.5%, 1/12≈8.33%, 1/16=6.25%</li>
</ul>
<h3> Labh-Hani</h3>
<ul><li>Profit% = (CP se SP ka antar)/CP × 100 · same SP par x% labh aur x% hani to total x²% hani.</li></ul>
<h3> Byaj (Interest)</h3>
<ul><li>SI = PRT/100 · CI = P(1+R/100)^T − P · do varsh me CI aur SI ka antar = P(R/100)²</li></ul>
<h3>Char, Gati aur Samay</h3>
<ul><li>D = S × T · km/h → m/s me ×5/18 · train crossing: total doori = train ki lambai + platform</li></ul>
<h3>Geometry</h3>
<ul>
  <li>Triangle ka kon-jod 180°, quadrilateral 360°.</li>
  <li>Area: triangle ½bh · rectangle lb · circle πr² · circumference 2πr · parallelogram bh.</li>
  <li>Volume: cube a³ · cuboid lbh · cylinder πr²h · cone ⅓πr²h · sphere 4/3πr³.</li>
  <li>Pythagoras: a² + b² = c² (samkon tri) — 3-4-5, 5-12-13, 8-15-17, 7-24-25.</li>
</ul>
<h3>Algebra</h3>
<ul><li>(a+b)² = a²+2ab+b² · (a−b)² = a²−2ab+b² · a²−b² = (a+b)(a−b) · (a+b+c)² = a²+b²+c²+2(ab+bc+ca)</li></ul>`
        }
      ],
      sets: [], nsets: 1, nq: 10
    },

    {
      id: "reasoning", name: "Reasoning", hi: "तर्कशक्ति", icon: "🧩",
      notes: [
        {
          id: "rea-types", title: "Reasoning ke Prakar aur Tareeke", hi: "प्रकार", mins: 4,
          html: `
<table class="tb"><tr><th>Topic</th><th>Kaise solve kare</th></tr>
<tr><td>Series</td><td>Diff le (2, 5, 9, 14 → +3,+4,+5); ratio dekho; alternating series alag-alag line.</td></tr>
<tr><td>Coding-Decoding</td><td>Position value (A=1 … Z=26) ya reverse (A=26) ya +1/+n shift. Word length match karo.</td></tr>
<tr><td>Blood relation</td><td>Family tree banao: male = +, female = −, generation me gap.</td></tr>
<tr><td>Direction</td><td>North upar, East daayen. "Left" = anticlockwise. Final displacement = √(x²+y²).</td></tr>
<tr><td>Syllogism</td><td>Venn diagram banao; "All A are B" = A ke andar B.</td></tr>
<tr><td>Odd one out</td><td>Prime/square, ya sam/visham, ya varg (fruit vs vegetable).</td></tr>
<tr><td>Analogy</td><td>Reshte ka type pehchano (capital : country, doctor : hospital).</td></tr>
</table>
<div class="box"><b>Alphabet trick:</b> EJOTY — E=5, J=10, O=15, T=20, Y=25. CFILORUX se 3-6-9… positions. CFILORUX + reverse position (A↔Z) dono practice me kaam aate hain.</div>`
        }
      ],
      sets: [], nsets: 1, nq: 7
    },

    {
      id: "hindi", name: "Hindi Vyakaran", hi: "हिन्दी व्याकरण", icon: "📖",
      notes: [
        {
          id: "hin-sandhi", title: "Sandhi aur Samas — Udaharan Sahit", hi: "संधि एवं समास", mins: 5,
          html: `
<h3>Sandhi ke bhed</h3>
<table class="tb"><tr><th>Prakar</th><th>Niyam</th><th>Udaharan</th></tr>
<tr><td>दीर्घ सवर्ण संधि</td><td>अ+अ=आ, इ+इ=ई, उ+उ=ऊ</td><td>विद्या + आलय = विद्यालय</td></tr>
<tr><td>गुण संधि</td><td>अ/आ + इ → ए · अ/आ + उ → ओ</td><td>राम + इन्द्र = रामेन्द्र · सूर्य + उदय = सूर्योदय</td></tr>
<tr><td>वृद्धि संधि</td><td>अ/आ + ओ/औ → औ</td><td>महा + ओषधि = महौषधि</td></tr>
<tr><td>यण संधि</td><td>इ/ई + परस्वर → य्</td><td>रवि + अंशु = रव्यांशु</td></tr>
<tr><td>विसर्ग संधि</td><td>ः का बदलना परोक्षर पर</td><td>रामः + च = रामश्च</td></tr>
</table>
<div class="box">Exam me sabse zyada <b>दीर्घ</b> aur <b>गुण</b> संधि पूछी जाती है — पहले इन्हें पक्का करो।</div>
<h3>Samas ke bhed (6 mukhya)</h3>
<table class="tb"><tr><th>Samas</th><th>Pahachaan</th><th>Udaharan</th></tr>
<tr><td>अव्ययीभाव</td><td>pehla shabd avyay, ant me arth badal jata hai</td><td>आ + प्रभात = आप्रभात, यथाशक्ति</td></tr>
<tr><td>तत्पुरुष</td><td>bee me "का/की/के" (vibhakti) chhupi ho</td><td>देवता का मंदिर → देवमंदिर (षष्ठी तत्पुरुष)</td></tr>
<tr><td>कर्मधारण</td><td>विशेषण + विशेष्य (ek hi padarth)</td><td>महा + आत्मा = महात्मा, नीलकमल</td></tr>
<tr><td>द्विगु</td><td>poorva shabd sankhyavachak</td><td>त्रिलोक, नवरात्र</td></tr>
<tr><td>द्वंद्व</td><td>donon shabd ke beech "और" lag sake</td><td>माता-पिता, रात-दिन</td></tr>
<tr><td>बहुव्रीहि</td><td>teesra arth nikle (any padarth ka boodhak)</td><td>दशानन = दस मुख वाला = रावण</td></tr>
</table>
<div class="box"><b>Ek line trick:</b> beech me "का/की/के" lage → तत्पुरुष; "और" lage → द्वंद्व; sankhya lage → द्विगु; visheshan ho → कर्मधारण; "जैसे" ya koi teesra arth lage → बहुव्रीहि; pehla shabd avyay ho → अव्ययीभाव.</div>`
        },
        {
          id: "hin-muhavare", title: "Mukhya Muhavre aur Arth", hi: "मुहावरे", mins: 3,
          html: `
<table class="tb"><tr><th>Muhavara</th><th>Arth</th></tr>
<tr><td>आँखों का तारा</td><td>बहुत प्रिय</td></tr>
<tr><td>अंगूठा दिखाना</td><td>इनकार करना</td></tr>
<tr><td>नाक में दम करना</td><td>परेशान करना</td></tr>
<tr><td>आँचल में बाँधना</td><td>छिपाकर रखना</td></tr>
<tr><td>कान पकड़ना</td><td>पश्चाताप कराना</td></tr>
<tr><td>जीभ काटना</td><td>चापलूसी करना</td></tr>
<tr><td>हाथ पीछे होना</td><td>घूस लेना</td></tr>
<tr><td>सिर पर चढ़ना</td><td>अहंकार बढ़ना</td></tr>
<tr><td>अधजल गगरी छलकत जाय</td><td>अधूरी विद्या का घमंड</td></tr>
</table>`
        }
      ],
      sets: [], nsets: 1, nq: 8
    },

    {
      id: "english", name: "English Grammar", hi: "अंग्रेज़ी व्याकरण", icon: "🔤",
      notes: [
        {
          id: "eng-err", title: "Common Errors, Prepositions, Phrasal Verbs", hi: "त्रुटियाँ", mins: 4,
          html: `
<h3>Prepositions — fixed use</h3>
<table class="tb"><tr><th>Word</th><th>Correct preposition</th></tr>
<tr><td>superior / inferior</td><td>to (not "than")</td></tr>
<tr><td>prefer</td><td>A to B (not "than")</td></tr>
<tr><td>married</td><td>to (not "with")</td></tr>
<tr><td>comprise</td><td>of (when "consist of")</td></tr>
<tr><td>good / bad</td><td>at (skill), for (health)</td></tr>
<tr><td>angry</td><td>with a person, at a thing</td></tr>
<tr><td>listen</td><td>to</td></tr>
<tr><td>enter</td><td>no preposition (enter the room)</td></tr>
<tr><td>discuss</td><td>no "about"</td></tr>
</table>
<h3>Phrasal verbs</h3>
<ul>
  <li>put off = postpone · put up with = tolerate · put across = explain</li>
  <li>call off = cancel · call on = visit · call up = telephone</li>
  <li>give up = leave · give in = surrender · give out = distribute/exhaust</li>
  <li>look after = take care · look into = investigate · look down on = despise</li>
  <li>bring up = raise a child · come across = meet by chance · run out of = finish</li>
</ul>
<h3>Tense quick rule</h3>
<p>since + point of time → perfect (I have lived here <b>since</b> 2010) · for + duration (I have lived here <b>for</b> ten years). No future tense in "when/if/after" clause: "When he <b>comes</b>, I will leave."</p>`
        }
      ],
      sets: [], nsets: 1, nq: 8
    },

    {
      id: "current", name: "Current Affairs", hi: "समसामयिकी", icon: "📰",
      notes: [
        {
          id: "ca-how", title: "Current Affairs Padhne ka Tareeka", hi: "पढ़ने की विधि", mins: 3,
          html: `
<p>Current affairs ka sabse bada tuta-ta hua hissa ye hai ki data purana ho jata hai. Isliye:</p>
<ul>
  <li><b>Stati GK</b> (symbols, capitals, constitution) — kabhi purana nahi hota; ise pehle pakka karo.</li>
  <li><b>Gati-shil GK</b> (appointments, awards, sports, summits) — mahine ke hisab se update karo.</li>
  <li>Har din 10 minute notebook me 5 line likho: <i>kya hua · kahan · kaun · kyun mahatvapurn · exam me kaise puchha ja sakta hai</i>.</li>
  <li>Exam se 6 mahine pehle tak ki ghatnayein sabse zyada puchhi jaati hain.</li>
</ul>
<div class="box"><b>Naya data add karna ho to:</b> admin panel ke <b>MCQ</b> tab me set banao aur Publish se <code>js/questions.js</code> download karo — ya seedhe <code>js/questions.js</code> me is subject ke array me naya set daal do — page apne aap ban jayega.</div>`
        }
      ],
      sets: [], nsets: 0, nq: 0
    },

    {
      id: "rajca", name: "Rajasthan Current Affairs", hi: "राजस्थान समसामयिकी", icon: "🗞️",
      notes: [
        {
          id: "rajca-districts", title: "Rajasthan ke 41 Jile, 7 Division — Naya Map", hi: "नए जिले", mins: 4,
          html: `
<p>Rajasthan ke jilon ki sankhya 33 se badhkar <b>41</b> ho gayi hai aur divisions 5 se <b>7</b>. 2025 me ghatit kuchh naye jile baad me vilayan (dissolve) kar diye gaye, isliye final list hi padhna zaroori hai.</p>
<h3>7 Divisions</h3>
<p>Ajmer, Bharatpur, Bikaner, Jaipur, Jodhpur, Kota, Udaipur.</p>
<h3>Naye jile jo exam me sabse jyada puchhe ja rahe hain</h3>
<table class="tb"><tr><th>Jila</th><th>Headquarters</th><th>Division</th></tr>
<tr><td>Beawar</td><td>Beawar</td><td>Ajmer</td></tr>
<tr><td>Didwana-Kuchaman</td><td>Kuchaman City</td><td>Ajmer</td></tr>
<tr><td>Deeg</td><td>Deeg</td><td>Bharatpur</td></tr>
<tr><td>Khairthal-Tijara</td><td>Khairthal</td><td>Jaipur</td></tr>
<tr><td>Kotputli-Behror</td><td>Kotputli</td><td>Jaipur</td></tr>
<tr><td>Balotra</td><td>Balotra</td><td>Jodhpur</td></tr>
<tr><td>Phalodi</td><td>Phalodi</td><td>Jodhpur</td></tr>
<tr><td>Salumbar</td><td>Salumbar</td><td>Udaipur</td></tr>
</table>
<div class="box">Poori 41 jile ki list aur drill ke liye <a href="#/districts">Districts &amp; Map Practice</a> page kholo.</div>`
        }
      ],
      sets: [], nsets: 1, nq: 6
    },

    {
      id: "world", name: "World GK", hi: "विश्व का सामान्य ज्ञान", icon: "🌍",
      notes: [
        {
          id: "wld-basic", title: "World ke Mukhya Tathya", hi: "विश्व", mins: 4,
          html: `
<table class="tb"><tr><th>Vishay</th><th>Tathya</th></tr>
<tr><td>Mahadeesh</td><td>7 — Asia, Africa, North America, South America, Antarctica, Europe, Australia</td></tr>
<tr><td>Mahasaagar</td><td>5 — Pacific sabse bada, Arctic sabse chhota</td></tr>
<tr><td>Sabse bada des (kshetra)</td><td>Russia</td></tr>
<tr><td>Sabse chhota des</td><td>Vatican City</td></tr>
<tr><td>Sabse zyada jansankhya</td><td>Bharat (2023 se China ko paar karke)</td></tr>
<tr><td>Sabse uncha pahad</td><td>Everest (8,848.86 m)</td></tr>
<tr><td>Sabse lambi nadi</td><td>Nile (Amazon jal-pravah me sabse bada)</td></tr>
<tr><td>Sabse bada marusthal (garam)</td><td>Sahara</td></tr>
<tr><td>Sabse gehri jhheel</td><td>Baikal (Russia)</td></tr>
</table>
<h3>Antarrashtriya sansthaen</h3>
<table class="tb"><tr><th>Sanstha</th><th>Sthapna / Headquarters</th></tr>
<tr><td>United Nations (UN)</td><td>1945 · New York · 193 sadasya</td></tr>
<tr><td>UNESCO</td><td>1945 · Paris</td></tr>
<tr><td>WHO</td><td>1948 · Geneva</td></tr>
<tr><td>WTO</td><td>1995 · Geneva (pehle GATT 1948)</td></tr>
<tr><td>IMF / World Bank</td><td>1944 Bretton Woods · Washington DC</td></tr>
<tr><td>NATO</td><td>1949 · Brussels</td></tr>
<tr><td>BRICS</td><td>2009 · 2024 me vistrit sadasyata</td></tr>
<tr><td>ASEAN</td><td>1967 · Jakarta</td></tr>
<tr><td>EU</td><td>Maastricht 1993 · Brussels</td></tr>
</table>`
        }
      ],
      sets: [], nsets: 1, nq: 7
    },

    {
      id: "criminal", name: "Criminal Laws", hi: "अपराध विधि", icon: "⚖️",
      notes: [
        {
          id: "cri-bns", title: "BNS, BNSS aur BSA — Kya Badla", hi: "नए कानून", mins: 4,
          html: `
<p>1 July 2024 se teen purane kanoon ki jagah teen naye sanhita laagu ho gayi:</p>
<table class="tb"><tr><th>Purana</th><th>Naya</th></tr>
<tr><td>Indian Penal Code, 1860 (IPC)</td><td>Bharatiya Nyaya Sanhita, 2023 (BNS)</td></tr>
<tr><td>Code of Criminal Procedure, 1973 (CrPC)</td><td>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</td></tr>
<tr><td>Indian Evidence Act, 1872</td><td>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</td></tr>
</table>
<div class="box">IPC 1860 me Lord Macaulay ki adhyakshata me bani samvidhanik angrezi kanoon ki devali thi; naye sanhitaon me anuchedon ka number punarrang hua hai — exam me purana/new dono puchhe jaate hain.</div>
<h3>Mahatvapurn parivartan</h3>
<ul>
  <li>Community service ki saza (petty offences) pariyojit.</li>
  <li>Organised crime aur terrorist act ke liye alag prakriti.</li>
  <li>SOP/FRS — zero FIR ki vidhiyata, e-FIR.</li>
  <li>Mahilaon par apradh ke mamle me sakht saza.</li>
  <li>Custody remand ki avadhi me chhote badlav.</li>
</ul>
<h3>Any mukhya kanoon</h3>
<ul>
  <li>POCSO Act, 2012 — 18 varsh se kam balak/balikaon ka yon-apradh se sanrakshan.</li>
  <li>Protection of Women from Domestic Violence Act, 2005.</li>
  <li>Sexual Harassment of Women at Workplace Act, 2013 — Vishaka judgment (1997) ki guidelines par aadhrit.</li>
  <li>SC/ST (Prevention of Atrocities) Act, 1989.</li>
  <li>NDPS Act, 1985 · Prevention of Money Laundering Act (PMLA), 2002.</li>
</ul>`
        }
      ],
      sets: [], nsets: 1, nq: 6
    },

    {
      id: "crime_wc", name: "Crime Against Women & Child", hi: "स्त्री एवं बाल अपराध", icon: "🛡️",
      notes: [
        {
          id: "wc-acts", title: "Mahila aur Balak Sanrakshan Kanoon", hi: "कानून", mins: 4,
          html: `
<table class="tb"><tr><th>Kanoon</th><th>Mukhya baat</th></tr>
<tr><td>Dowry Prohibition Act, 1961</td><td>Dahej lena-dena apradh; minimum 5 varsh saza ya 15,000 ka jurmana</td></tr>
<tr><td>Indecent Representation of Women Act, 1986</td><td>Prakashan/vitran me ashalin pratimandalan par pabandi</td></tr>
<tr><td>Protection of Women from Domestic Violence Act, 2005</td><td>Grihasth himsha; Protection Officer, Magistrate, residence ka adhikar</td></tr>
<tr><td>POCSO Act, 2012</td><td>Gender-neutral nahi (bachcha koi bhi); mandatory reporting; special court; child-friendly trial</td></tr>
<tr><td>Juvenile Justice Act, 2015 (2021 amendment)</td><td>16-18 umra ko "heinous offence" me adult trial ki sambhavna; CWC/JJB</td></tr>
<tr><td>Prohibition of Child Marriage Act, 2006</td><td>Kanya 18, var 21 varsh; kelasi adhikari</td></tr>
<tr><td>Maternity Benefit (Amendment) Act, 2017</td><td>Crèche suvidha, 26 hafte chhutti</td></tr>
<tr><td>Nari Shakti Vandan Adhiniyam, 2023</td><td>LS aur Vidhan Sabha me mahilaon ke liye 1/3 aarakshan</td></tr>
</table>
<h3>Sahayata number</h3>
<ul>
  <li>1091 — Mahila helpline · 181 — State women helpline</li>
  <li>1098 — Childline · 112 — Emergency</li>
  <li>NIRBHAYA Fund — bal-atyachar pidit ki madad</li>
</ul>`
        }
      ],
      sets: [], nsets: 1, nq: 6
    },

    {
      id: "education", name: "Education", hi: "शिक्षा", icon: "🎓",
      notes: [
        {
          id: "edu-nep", title: "NEP 2020 aur Shiksha ke Mukhya Kanoon", hi: "शिक्षा नीति", mins: 4,
          html: `
<h3>Rashtriya Shiksha Neeti 2020</h3>
<ul>
  <li><b>5 + 3 + 3 + 4</b> pathyakram — Foundational (age 3-8), Preparatory (8-11), Middle (11-14), Secondary (14-18).</li>
  <li>Madhyamik star par multidisciplinary, no hard separation between streams.</li>
  <li>Board pariksha do baar; competency-based assessment (PARAKH).</li>
  <li>GER lakshya: school me 100%, higher education me 50% tak 2035.</li>
  <li>NCF (National Curriculum Framework) NCERT banata hai; NCF 2023 aaya.</li>
</ul>
<h3>RTE Act, 2009</h3>
<ul>
  <li>Anuched 21A ke tahat — 6 se 14 varsh tak nishulk anivarya shiksha.</li>
  <li>Private schools me 25% EWS/gareeb bachchon ke liye aasan.</li>
  <li>CCE aur "no detention" shuru me; rajyon ne baad me badla.</li>
  <li>Laagu hua: 1 April 2010.</li>
</ul>
<h3>Sansthaen</h3>
<table class="tb"><tr><th>Sanstha</th><th>Kaam</th></tr>
<tr><td>NCERT (1961)</td><td>Paathya-pustak aur NCF</td></tr>
<tr><td>NIOS (1979)</td><td>Open aur distance school shiksha</td></tr>
<tr><td>UGC (1956)</td><td>University grant aur manata</td></tr>
<tr><td>NCTE (1993)</td><td>Teacher education ke niyam</td></tr>
<tr><td>NAAC / NBA</td><td>Guñatta pramanpan</td></tr>
<tr><td>NIRF</td><td>Ranking Framework (2015 se)</td></tr>
<tr><td>Nipun Bharat (2021)</td><td>Class 1-3 tak foundational literacy & numeracy</td></tr>
<tr><td>Samagra Shiksha</td><td>Samagra (pre-school se class 12) ekikrit yojaana</td></tr>
</table>
<div class="box"><b>Tareekh:</b> Rashtriya Shiksha Diwas — 11 May (Maulana Abul Kalam Azad ka janm-din) · Teacher's Day — 5 Sept (Dr. Radhakrishnan) · National Education Policy 2020 — 29 July ko ghoshit.</div>`
        }
      ],
      sets: [], nsets: 1, nq: 8
    }
  ],

  /* ---------- RAJASTHAN: 41 DISTRICTS (2025 ke baad) ---------- */
  districts: [
    { n:"Ajmer", hi:"अजमेर", hq:"Ajmer", div:"Ajmer", x:4, y:4 },
    { n:"Beawar", hi:"बीवर", hq:"Beawar", div:"Ajmer", x:4, y:5 },
    { n:"Bhilwara", hi:"भीलवाड़ा", hq:"Bhilwara", div:"Ajmer", x:5, y:5 },
    { n:"Didwana-Kuchaman", hi:"दीडवा-कुचामन", hq:"Kuchaman City", div:"Ajmer", x:4, y:3 },
    { n:"Nagaur", hi:"नागौर", hq:"Nagaur", div:"Ajmer", x:3, y:3 },
    { n:"Tonk", hi:"टोंक", hq:"Tonk", div:"Ajmer", x:5, y:4 },
    { n:"Bharatpur", hi:"भरतपुर", hq:"Bharatpur", div:"Bharatpur", x:8, y:4 },
    { n:"Deeg", hi:"डीग", hq:"Deeg", div:"Bharatpur", x:8, y:3 },
    { n:"Dholpur", hi:"धौलपुर", hq:"Dholpur", div:"Bharatpur", x:8, y:5 },
    { n:"Karauli", hi:"करौली", hq:"Karauli", div:"Bharatpur", x:7, y:5 },
    { n:"Sawai Madhopur", hi:"सवाई माधोपुर", hq:"Sawai Madhopur", div:"Bharatpur", x:7, y:4 },
    { n:"Bikaner", hi:"बीकानेर", hq:"Bikaner", div:"Bikaner", x:3, y:2 },
    { n:"Churu", hi:"चूरू", hq:"Churu", div:"Bikaner", x:4, y:2 },
    { n:"Hanumangarh", hi:"हनुमानगढ़", hq:"Hanumangarh", div:"Bikaner", x:3, y:1 },
    { n:"Sri Ganganagar", hi:"श्री गंगानगर", hq:"Sri Ganganagar", div:"Bikaner", x:2, y:1 },
    { n:"Alwar", hi:"अलवर", hq:"Alwar", div:"Jaipur", x:7, y:3 },
    { n:"Dausa", hi:"दौसा", hq:"Dausa", div:"Jaipur", x:6, y:4 },
    { n:"Jaipur", hi:"जयपुर", hq:"Jaipur", div:"Jaipur", x:6, y:3 },
    { n:"Jhunjhunu", hi:"झुंझुनूं", hq:"Jhunjhunu", div:"Jaipur", x:5, y:2 },
    { n:"Khairthal-Tijara", hi:"खैरथल-तिजारा", hq:"Khairthal", div:"Jaipur", x:7, y:2 },
    { n:"Kotputli-Behror", hi:"कोटपूतली-बेहरोड़", hq:"Kotputli", div:"Jaipur", x:7, y:4 },
    { n:"Sikar", hi:"सीकर", hq:"Sikar", div:"Jaipur", x:5, y:3 },
    { n:"Balotra", hi:"बालोतरा", hq:"Balotra", div:"Jodhpur", x:2, y:4 },
    { n:"Barmer", hi:"बाड़मेर", hq:"Barmer", div:"Jodhpur", x:1, y:4 },
    { n:"Jaisalmer", hi:"जैसलमेर", hq:"Jaisalmer", div:"Jodhpur", x:1, y:2 },
    { n:"Jalore", hi:"जालौर", hq:"Jalore", div:"Jodhpur", x:2, y:5 },
    { n:"Jodhpur", hi:"जोधपुर", hq:"Jodhpur", div:"Jodhpur", x:2, y:3 },
    { n:"Pali", hi:"पाली", hq:"Pali", div:"Jodhpur", x:3, y:5 },
    { n:"Phalodi", hi:"पालोदी", hq:"Phalodi", div:"Jodhpur", x:2, y:2 },
    { n:"Sirohi", hi:"सीरोही", hq:"Sirohi", div:"Jodhpur", x:2, y:6 },
    { n:"Baran", hi:"बारां", hq:"Baran", div:"Kota", x:7, y:6 },
    { n:"Bundi", hi:"बूंदी", hq:"Bundi", div:"Kota", x:6, y:6 },
    { n:"Jhalawar", hi:"झालावाड़", hq:"Jhalawar", div:"Kota", x:7, y:7 },
    { n:"Kota", hi:"कोटा", hq:"Kota", div:"Kota", x:6, y:7 },
    { n:"Banswara", hi:"बांसवाड़ा", hq:"Banswara", div:"Udaipur", x:4, y:7 },
    { n:"Chittorgarh", hi:"चित्तौड़गढ़", hq:"Chittorgarh", div:"Udaipur", x:4, y:6 },
    { n:"Dungarpur", hi:"डूंगरपुर", hq:"Dungarpur", div:"Udaipur", x:3, y:7 },
    { n:"Pratapgarh", hi:"प्रतापगढ़", hq:"Pratapgarh", div:"Udaipur", x:5, y:6 },
    { n:"Rajsamand", hi:"राजसमंद", hq:"Rajsamand", div:"Udaipur", x:4, y:5.5 },
    { n:"Salumbar", hi:"सालूम्बड़", hq:"Salumbar", div:"Udaipur", x:3, y:6 },
    { n:"Udaipur", hi:"उदयपुर", hq:"Udaipur", div:"Udaipur", x:3, y:6.5 }
  ],

  /* ---------- 28 STATES + 8 UT ---------- */
  states: [
    { n:"Andhra Pradesh", hi:"आंध्र प्रदेश", cap:"Amaravati", region:"South" },
    { n:"Arunachal Pradesh", hi:"अरुणांचल प्रदेश", cap:"Itanagar", region:"Northeast" },
    { n:"Assam", hi:"असम", cap:"Dispur", region:"Northeast" },
    { n:"Bihar", hi:"बिहार", cap:"Patna", region:"East" },
    { n:"Chhattisgarh", hi:"छत्तीसगढ़", cap:"Raipur", region:"Central" },
    { n:"Goa", hi:"गोवा", cap:"Panaji", region:"West" },
    { n:"Gujarat", hi:"गुजरात", cap:"Gandhinagar", region:"West" },
    { n:"Haryana", hi:"हरियाणा", cap:"Chandigarh", region:"North" },
    { n:"Himachal Pradesh", hi:"हिमाचल प्रदेश", cap:"Shimla", region:"North" },
    { n:"Jharkhand", hi:"झारखंड", cap:"Ranchi", region:"East" },
    { n:"Karnataka", hi:"कर्नाटक", cap:"Bengaluru", region:"South" },
    { n:"Kerala", hi:"केरल", cap:"Thiruvananthapuram", region:"South" },
    { n:"Madhya Pradesh", hi:"मध्य प्रदेश", cap:"Bhopal", region:"Central" },
    { n:"Maharashtra", hi:"महाराष्ट्र", cap:"Mumbai", region:"West" },
    { n:"Manipur", hi:"मणिपुर", cap:"Imphal", region:"Northeast" },
    { n:"Meghalaya", hi:"मेघालय", cap:"Shillong", region:"Northeast" },
    { n:"Mizoram", hi:"मिजोरम", cap:"Aizawl", region:"Northeast" },
    { n:"Nagaland", hi:"नागालैंड", cap:"Kohima", region:"Northeast" },
    { n:"Odisha", hi:"ओडिशा", cap:"Bhubaneswar", region:"East" },
    { n:"Punjab", hi:"पंजाब", cap:"Chandigarh", region:"North" },
    { n:"Rajasthan", hi:"राजस्थान", cap:"Jaipur", region:"North" },
    { n:"Sikkim", hi:"सिक्किम", cap:"Gangtok", region:"Northeast" },
    { n:"Tamil Nadu", hi:"तमिलनाडु", cap:"Chennai", region:"South" },
    { n:"Telangana", hi:"तेलंगाना", cap:"Hyderabad", region:"South" },
    { n:"Tripura", hi:"त्रिपुरा", cap:"Agartala", region:"Northeast" },
    { n:"Uttar Pradesh", hi:"उत्तर प्रदेश", cap:"Lucknow", region:"North" },
    { n:"Uttarakhand", hi:"उत्तराखंड", cap:"Dehradun", region:"North" },
    { n:"West Bengal", hi:"पश्चिम बंगाल", cap:"Kolkata", region:"East" },
    { n:"Delhi", hi:"दिल्ली", cap:"New Delhi", region:"UT" },
    { n:"Jammu & Kashmir", hi:"जम्मू और कश्मीर", cap:"Srinagar (summer), Jammu (winter)", region:"UT" },
    { n:"Ladakh", hi:"लद्दाख", cap:"Leh", region:"UT" },
    { n:"Chandigarh", hi:"चंडीगढ़", cap:"Chandigarh", region:"UT" },
    { n:"Puducherry", hi:"पुडुचेरी", cap:"Puducherry", region:"UT" },
    { n:"Andaman & Nicobar", hi:"अंडमान और निकोबार", cap:"Port Blair", region:"UT" },
    { n:"Dadra & Nagar Haveli and Daman & Diu", hi:"दादरा और नगर हवेली एवं दमन और दीव", cap:"Dadra & Nagar Haveli / Daman", region:"UT" },
    { n:"Lakshadweep", hi:"लक्षद्वीप", cap:"Kavaratti", region:"UT" }
  ],

  /* ---------- EXAM GROUPS (test series filter) ---------- */
  exams: [
    { id:"general", name:"Recently Added Papers", hi:"हाल के प्रश्न पत्र" },
    { id:"rajgk", name:"Rajasthan GK Test", hi:"राजस्थान GK" },
    { id:"reet", name:"REET Exam", hi:"रीट परीक्षा" },
    { id:"patwar", name:"Rajasthan Patwar Exam", hi:"पटवारी" },
    { id:"constable", name:"Rajasthan Constable Exam", hi:"राजस्थान कांस्टेबल" },
    { id:"slst", name:"School Lecturer Exam", hi:"स्कूल व्याख्याता" },
    { id:"steno", name:"Stenographer Exam", hi:"शorthand (स्टेनोग्राफर)" },
    { id:"agri", name:"Agriculture Exam", hi:"कृषि" },
    { id:"forest", name:"Forest Exam", hi:"वन विभाग" },
    { id:"librarian", name:"Librarian Exam", hi:"पुस्तकालयाध्यक्ष" },
    { id:"jailer", name:"Jailor Exam", hi:"जेलर" },
    { id:"informatics", name:"Informatics Assistant Exam", hi:"सूचना सहायक" },
    { id:"labassist", name:"Lab Assistant Exam", hi:"प्रयोगशाला सहायक" },
    { id:"clct", name:"College Lecturer Exam", hi:"कॉलेज व्याख्याता" },
    { id:"warder", name:"Rajasthan Jail Warder Exam", hi:"जेल वार्डन" },
    { id:"psi", name:"Police SI Exam", hi:"POLICE SI" },
    { id:"ras", name:"RAS Exam", hi:"RAS" },
    { id:"gr2", name:"Teacher GR II Exam", hi:"शिक्षक ग्रेड-II" },
    { id:"jracc", name:"Junior Accountant Exam", hi:"जूनियर अकाउंटेंट" },
    { id:"vanrakshak", name:"Vanpal / Vanrakshak Exam", hi:"वनपाल / वनरक्षक" },
    { id:"ca", name:"Current Affairs", hi:"समसामयिकी" },
    { id:"clerk", name:"Clerk / LDC Exam", hi:"लिपिक / LDC" },
    { id:"tax", name:"Tax Assistant Exam", hi:"कर सहायक" },
    { id:"compiler", name:"Compiler Exam", hi:"कम्पाइलर" },
    { id:"vdo", name:"Village Development Officer Exam", hi:"ग्रां. विक. अधिकारी" },
    { id:"hcl", name:"High Court LDC Exam", hi:"हाईकोट LDC" },
    { id:"cinstr", name:"Computer Instructor Exam", hi:"कम्प्यूटर प्रशिक्षक" },
    { id:"pti", name:"Physical Training Instructor Exam", hi:"शारीरिक प्रशिक्षक" },
    { id:"lsa", name:"Livestock Assistant (LSA) Exam", hi:"पशुधन सहायक" },
    { id:"je", name:"Junior Engineer (JEN) Exam", hi:"जूनियर इंजीनियर" },
    { id:"jsa", name:"Junior Scientific Assistant (JSA)", hi:"जूनियर वैज्ञानिक सहायक" },
    { id:"jinstr", name:"Junior Instructor Exam", hi:"जूनियर प्रशिक्षक" },
    { id:"hk", name:"House Keeper Exam", hi:"हाउस कीपर" },
    { id:"cet", name:"Rajasthan CET Exam", hi:"CET" },
    { id:"g3t", name:"3rd Grade Teacher Exam", hi:"तृतीय श्रेणी शिक्षक" },
    { id:"roeo", name:"RPSC RO and EO Exam", hi:"RPSC RO/EO" },
    { id:"hmaster", name:"RPSC Head Master Exam", hi:"हेड मास्टर" },
    { id:"evaloff", name:"Evaluation Officer Exam", hi:"मूल्यांकन अधिकारी" },
    { id:"prooff", name:"RPSC Protection Officer Exam", hi:"संरक्षण अधिकारी" },
    { id:"computor", name:"Computor Exam", hi:"कम्प्यूटर" },
    { id:"jlo", name:"Junior Legal Officer Exam", hi:"जूनियर विधि अधिकारी" },
    { id:"cbank", name:"Rajasthan Cooperative Bank Exam", hi:"सहकारी बैंक" },
    { id:"aat", name:"Animal Attendant Exam", hi:"पशु परिचर" },
    { id:"supv", name:"RSMSSB Supervisor Exam", hi:"सुपरवाइजर" }
  ],

  /* ---------- TRICKS (short-cut notes) ---------- */
  tricks: [
    { id:1, sub:"Maths", title:"Pratishat ko Bhatt mein badalna", html:"<p>1/2=50%, 1/3=33⅓%, 1/4=25%, 1/5=20%, 1/6=16⅔%, 1/8=12½%, 1/12=8⅓%, 1/16=6¼%, 1/20=5%, 1/25=4%. Inhe yaad kar lo to data interpretation aur profit-loss donon tez ho jaate hain.</p>" },
    { id:2, sub:"Reasoning", title:"Alphabet position — EJOTY", html:"<p>E=5, J=10, O=15, T=20, Y=25. Beech ke akshar 3-6-9 (CFILORUX) se nikalo. Reverse position = 27 − position (A ka reverse 26).</p>" },
    { id:3, sub:"Rajasthan", title:"7 Divisions yaad rakhne ka mantra", html:"<p><b>A-J-B-K-B-J-U</b> → <b>A</b>jmer, <b>B</b>haratpur, <b>B</b>ikaner, <b>J</b>aipur, <b>J</b>odhpur, <b>K</b>ota, <b>U</b>daipur. Alphabet me gino: Ajmer, Bharatpur, Bikaner, Jaipur, Jodhpur, Kota, Udaipur.</p>" },
    { id:4, sub:"Constitution", title:"Maulik Adhikar ka order", html:"<p>12-13 samata ke adhikaar · 14-18 samata · 19-22 swatantrata · 23-24 shoshan ke viruddh · 25-28 dharmik svatantrata · 29-30 sanskrutik · 32 sanvidhanik upchar. Yaad ka mantra: <b>S-S-S-S-D-S-U</b>.</p>" },
    { id:5, sub:"Rajasthan", title:"Nadiyan — kin se milti hain", html:'<p>Chambal → Yamuna · Banas → Chambal · Mahi → Arabian Sea · Luni → Rann of Kutch · Sabarmati → Gulf of Khambhat · Betw, Kali Sindh, Parvati → Chambal. Chambal ka network Rajasthan ka sabse bada jal-pravah hai.</p>' },
    { id:6, sub:"Science", title:"Vitamin — naam aur kami", html:"<p>A = rat-blindness · B1 = Beri-beri · B2 = cheenchak (cracked lips) · B12 = pernicious anaemia · C = Scurvy · D = Rickets · E = banjhpan · K = khoon na jamna. Mantra: <b>A-R, B1-B, C-S, D-R, K-N</b>.</p>" },
    { id:7, sub:"Hindi", title:"Samas pahchanne ka 3-step", html:'<p>(1) Beech me "और" daalo → dvandv. (2) "का/की/के" lage → tatpurush. (3) Visheshan-visheshya ho → karmadharan. (4) Sankhya lage → dvigu. (5) Pehla shabd avyay ho → avyayibhav. (6) Teesra arth nikle → bahuvrihi.</p>' },
    { id:8, sub:"Current", title:"Rajasthan ke jile — group trick", html:"<p>Marwar = Jodhpur area, Mewar = Udaipur/Chittor, Hadoti = Kota/Bundi/Baran/Jhalawar, Dhundhar = Jaipur/Amber, Shekhawati = Sikar/Jhunjhunu, Mewat = Alwar/Bharatpur, Bani = Bikaner area, Bhaat = Jaisalmer, Bhopalgarh = Bikaner-Churu. Region ke naam se jila yaad karo.</p>" },
    { id:9, sub:"Maths", title:"Square aur Cube yaad rakhna", html:"<p>Square 1-30 aur cube 1-15 table likho. 25 ka square = 625 (2×3=6, 25 lagao). 45² = 2025 (4×5=20, 25). Isi tarah 95² = 9025. Ye trick x5 par khatam hone wali har sankhya par lagti hai.</p>" },
    { id:10, sub:"Reasoning", title:"Direction me displacement", html:'<p>Uttar-dakshin ko ek axis, purab-pashchim ko doosri. Sab kadam jodo-baat lo, phir √(x²+y²). Agar "South-West" puchha ho to tan (tan θ) se angle nikalo. Yaad: left = anticlockwise, right = clockwise.</p>' }
  ],

  /* ---------- IMPORTANT DAYS ---------- */
  calendar: {
    January: [ {d:12,t:"National Youth Day (Vivekananda jayanti)"}, {d:15,t:"Indian Army Day"}, {d:23,t:"Parakram Diwas (Subhas Chandra Bose)"}, {d:24,t:"National Girl Child Day"}, {d:25,t:"National Voters' Day"}, {d:26,t:"Republic Day"}, {d:30,t:"Martyrs' Day (Gandhi ji ki shahadat)"} ],
    February: [ {d:11,t:"Int'l Day of Women & Girls in Science"}, {d:13,t:"World Radio Day"}, {d:20,t:"World Social Justice Day"}, {d:21,t:"International Mother Language Day"} ],
    March: [ {d:3,t:"World Wildlife Day"}, {d:8,t:"International Women's Day"}, {d:14,t:"Int'l Day of Mathematics (Pi Day)"}, {d:21,t:"World Poetry Day; Int'l Day of Forests"}, {d:22,t:"World Water Day"}, {d:23,t:"Shaheed Diwas (Bhagat Singh)"}, {d:30,t:"Rajasthan Diwas"} ],
    April: [ {d:2,t:"World Autism Awareness Day"}, {d:11,t:"National Safe Motherhood Day"}, {d:14,t:"Dr. B. R. Ambedkar Jayanti"}, {d:18,t:"World Heritage Day"}, {d:22,t:"World Earth Day"}, {d:25,t:"World Malaria Day"} ],
    May: [ {d:1,t:"Maharashtra Day; Int'l Workers' Day"}, {d:11,t:"National Education Day (Maulana Azad)"}, {d:12,t:"International Nurses Day"}, {d:21,t:"National Anti-Terrorism Day"}, {d:31,t:"World No Tobacco Day"} ],
    June: [ {d:5,t:"World Environment Day"}, {d:8,t:"World Oceans Day"}, {d:14,t:"World Blood Donor Day"}, {d:20,t:"World Refugee Day"}, {d:21,t:"International Day of Yoga"} ],
    July: [ {d:1,t:"National Doctors' Day"}, {d:11,t:"World Population Day"}, {d:26,t:"Kargil Vijay Diwas"} ],
    August: [ {d:6,t:"Hiroshima Day"}, {d:12,t:"International Youth Day"}, {d:15,t:"Independence Day"}, {d:19,t:"World Photography Day"}, {d:29,t:"National Sports Day (Dhyan Chand)"} ],
    September: [ {d:5,t:"Teacher's Day (Dr. Radhakrishnan)"}, {d:8,t:"World Literacy Day"}, {d:14,t:"Hindi Diwas"}, {d:16,t:"World Ozone Day"}, {d:17,t:"World Patient Safety Day"}, {d:28,t:"World Rabies Day"} ],
    October: [ {d:1,t:"Int'l Day of Older Persons"}, {d:2,t:"Gandhi Jayanti; Int'l Day of Non-Violence"}, {d:8,t:"Indian Air Force Day"}, {d:10,t:"World Mental Health Day"}, {d:24,t:"United Nations Day"}, {d:31,t:"Rashtriya Ekta Diwas (Sardar Patel)"} ],
    November: [ {d:9,t:"National Legal Services Day"}, {d:14,t:"Children's Day (Nehru jayanti)"}, {d:19,t:"International Men's Day"}, {d:26,t:"National Constitution Day"} ],
    December: [ {d:1,t:"World AIDS Day"}, {d:3,t:"Int'l Day of Disabled Persons"}, {d:4,t:"Indian Navy Day"}, {d:10,t:"Human Rights Day"}, {d:22,t:"National Mathematics Day (Ramanujan)"}, {d:25,t:"Christmas"}, {d:31,t:"National Remembrance Day for Victims of Terrorism"} ]
  },

  /* ---------- TOOLS ---------- */
  tools: [
    { id:"percent", name:"Percent ↔ Fraction", hi:"प्रतिशत", desc:"x% ka fraction aur fraction ka percent turant." },
    { id:"si", name:"SI / CI Calculator", hi:"साधारण-चक्रवृद्धि", desc:"Byaj, amount aur monthly EMI jaisa comparison." },
    { id:"avg", name:"Average & Percentage Change", hi:"माध्य", desc:"Aur B ka % change, average of numbers." },
    { id:"flash", name:"India GK Flashcards", hi:"भारत GK", desc:"Tap karo, answer palto — 40 cards." },
    { id:"flashraj", name:"Rajasthan GK Flashcards", hi:"राजस्थान GK", desc:"Jile, kile, nadiyan — 40 cards." },
    { id:"alphabet", name:"Alphabet Position Game", hi:"अक्षर", desc:"A=1 … Z=26 drill, timer ke sath." },
    { id:"map", name:"District Map Practice", hi:"मानचित्र", desc:"Schematic map par jila dhoondo." },
    { id:"crossword", name:"Crossword", hi:"शब्दपहेली", desc:"GK terms par chhoti puzzle." },
    { id:"jokes", name:"Fun Break", hi:"व्यंग्य", desc:"Padhai ke beech 2 minute ka break." }
  ],

  flashcards: {
    india: [
      ["Rashtriya pashu","Bakumain"],["Rashtriya pakshi","Mor"],["Rashtriya phool","Kamal"],["Rashtriya vriksh","Vad"],
      ["Sabse lambi nadi","Ganga"],["Sabse unchi choti (India)","Kanchanjunga"],["Sabse bada rajya","Rajasthan"],["Sabse chhota rajya","Goa"],
      ["Kark rekha kitne rajyon se","8"],["Samvidhan laagu","26 Jan 1950"],["Rashtriya geet","Jana Gana Mana"],["Rashtriya nishan","Satyameva Jayate"],
      ["Sabse zyada jansankhya wala rajya","Uttar Pradesh"],["Sabse adhik saksarata","Kerala"],["Sabse purana Jain sthan?","Ranakpur"],["Bharat ke kul UT","8"],
      ["Parliament ka upper house","Rajya Sabha"],["Lok Sabha ki avadhi","5 varsh"],["CAG kisni niyukt karte hain","Rashtrapati"],["Attorney General ka anuched","76"],
      ["NITI Aayog ke chairperson","Prime Minister"],["GST Council ke chairperson","Union Finance Minister"],["RBI ki sthapna","1935"],["RBI ka nationalised bank?","1955 (SBI sthapna)"],
      ["Project Tiger","1973"],["Pehla national park","Jim Corbett (1936)"],["Standard meridian","82°30' E"],["National aquatic animal","Ganga dolphin"],
      ["Official languages (Union)","Hindi + English"],["Scheduled languages","22"],["Sundarban kis rajya me","West Bengal"],["Bharat ke kul kendrashit kshetra","8"]
    ],
    rajasthan: [
      ["Rajya pashu","Chinkara"],["Rajya pakshi","Godawan"],["Rajya vriksh","Khejri"],["Rajya pushp","Rohida"],
      ["Rajya khel","Polo"],["Rajdhani","Jaipur"],["Jile","41"],["Divisions","7"],
      ["Sabse bada jila (kshetra)","Jaisalmer"],["Sabse uncha shikhar","Guru Shikhar"],["Sabse lambi nadi","Banas"],["Khari nadi","Luni"],
      ["Sabse bada kila","Chittorgarh"],["36 km deewar wala kila","Kumbhalgarh"],["Living fort","Jaisalmer"],["UNESCO hill forts kitne","6"],
      ["Pushkar ka mandir","Brahma"],["City of Lakes","Udaipur"],["Pink City","Jaipur"],["Hawa Mahal varsh","1799"],
      ["Jantar Mantar banaya","Sawai Jai Singh II"],["Abhaneri stepwell jila","Dausa"],["Dilwara jila","Sirohi"],["Ranakpur jila","Pali"],
      ["Sambhar kis liye","Namak sarovar"],["Desert NP jila","Jaisalmer"],["Keoladeo jila","Bharatpur"],["Sariska jila","Alwar"],
      ["Ranthambore jila","Sawai Madhopur"],["Bikaneri bhujia","GI tag"],["Makrana","Marble"],["Kota","Doria kapda"],
      ["Sanganer/Bagru","Block print"],["Bansiwar ka mela","Asia ka sabse bada pashu mela"],["Kalbeliya","UNESCO (2010)"],["Ghoomar","Mewar ka nritya"],
      ["Bani Thani","Kishangarh shaili"],["Phad painting","Shahpura, Bhilwara"],["Raj Diwas","30 March"],["Vidhan Sabha seats","200"]
    ]
  },

  crossword: {
    title: "Rajasthan GK — 6 terms",
    clues: [
      { a:"CHINKARA", c:"Rajasthan ka rajya-pashu" },
      { a:"LUNI", c:"Rajasthan ki khare paani ki nadi" },
      { a:"JAISALMER", c:"Sonar Qila ka jila" },
      { a:"KHEJRI", c:"Rajya vriksh" },
      { a:"BANAS", c:"State ki sabse lambi nadi" },
      { a:"AJMER", c:"Dargah nagar" }
    ]
  },

  jokes: [
    "Teacher: Batao, Rajasthan ki rajdhani kaunsi hai? Pappu: Sir, aap hi bata dijiye — main to padhne hi usliye aaya hoon.",
    "Patwar bharti ka result aaya to ghar me tyohar — kyunki ab form bharne ka mauka dobara mil gaya.",
    "GK teacher: 'Aravalli' ka matlab? Chhatra: 'Bahut purane pahad'. Teacher: Sahi, aur bharat ka sabse purana — jaise hamara syllabus.",
    "Hindi: 'आँखों का तारा' का अर्थ? Student: बहुत प्रिय। Teacher: बिल्कुल — और 'आँख का पुतला' भी वही है, पर 'आँख में धूल झोंकना' बिल्कुल अलग।"
  ]
};
