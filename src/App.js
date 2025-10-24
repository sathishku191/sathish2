
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Linguistic from "./Event/Lingusitic";
// import Logical from "./Event/Logical";
// import Musical from "./Event/Musical";
// import Kinesthetic from "./Event/Kinesthetic";
// import Spatial from "./Event/Spatial";
// import Interpersonnal from "./Event/Interpersonal";
// import Nature from "./Event/Nature";
import Gallery from "./home/Gallery";


import Home from "./home/home.js";
import Linguistic from "./home/Linguistic.js";
import Poetic from "./home/Poetic.js";
import ShortStory from "./home/Short-story.js";
import Bodcast from "./home/Bodcast.js";
import Speech from "./home/Speech.js";
import Commentary from "./home/Commentary.js";
import Logical from "./home/Logical.js";
import Musical from "./home/Musical.js";
import Kinesthetic from "./home/Kinesthetic.js";
import Spatial from "./home/Spatial.js";
import Interpersonal from "./home/Interpersonal.js";
import Nature from "./home/Nature.js";
import Budgetbattle from "./home/Budgetbattle.js";






function App() {
 
 
  
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
        <Route path="/linguistic" element={<Linguistic />} />
        <Route
          path="/poetic"
          element={
            <Poetic
              title="🎙 Poetry Contest – கவிதைப் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Style="Free Style – Classical or Modern"
              AcceptedForms="All forms of poetry – Haiku, Long Form,
                Traditional, Free Verse, New Age, Experimental, etc."
              Description="Participants are invited to submit original poems in either Tamil or English. You are free to explore any form or style – be it haiku, long form, or even new‑age formats. The focus is on creativity, expression, and originality. Let your poetic imagination fly!"
              Titletamil="🎙 கவிதைப் போட்டி – Poetry Contest"
              வகை=" தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              பாணி="சுதந்திர பாணி – பாரம்பரியமாகவோ, நவீனமாகவோ"
              வடிவங்கள்="ஹைக்கூ, நீண்ட கவிதை, பாரம்பரிய
                கவிதை, புதிய வகை, இலக்கணக்கேடான கவிதைகள் உள்ளிட்ட அனைத்து
                வடிவங்களும்"
              விவரம்="பங்கேற்பாளர்கள் தமிழ் அல்லது ஆங்கிலத்தில் தாங்கள் இயற்றிய அசல்
              கவிதைகளை சமர்ப்பிக்கலாம். ஹைக்கூ, நீண்ட வடிவம் அல்லது புதிய
              பாணி என எந்தவொரு கவிதை வடிவத்திலும் நீங்கள் எழுதலாம். படைப்பாற்றல்,
              உணர்வுப் பொழிவு மற்றும் தனிப்பட்டக் குரல்தான் முக்கியம். உங்கள் கவிதை
              எண்ணங்களை பறக்க விடுங்கள்!"
              Formlink="https://forms.gle/9Fk7aPzpVu6ykWWE9"
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்
"
              Note="Poetry can be written in Tamil or English. All forms are welcome — classical, modern, haiku, long form, traditional, experimental, or new-age styles."
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route
          path="/shortstory"
          element={
            <ShortStory
              title="📖 Short Story Writing – சுருக்கக் கதைப்போட்டி"
              type="Individual"
              Language="Tamil or English"
              Theme="Migration – இடப்பெயர்"
              Style="Narrative or Creative Writing"
              AcceptedForms="Short story writing (Tamil/English) based on given social theme"
              Description="Participants must craft an original short story centered on the theme of migration. Stories can be in Tamil or English and should reflect human experiences, emotions, and imagination. Use your creativity to bring characters and journeys to life."
              Titletamil="📖 சுருக்கக் கதைப்போட்டி – Short Story Contest"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              வடிவங்கள்="சமூகத்தை ஒட்டிய ஒரு தலைப்பை ஒட்டிய ஒரு சிறுகதை எழுதும் போட்டி"
              தைலம்="இடப்பெயர்"
              விவரம்="‘இடப்பெயர்’ என்ற தலைப்பை மையமாகக் கொண்டு ஒரு சிறுகதை எழுத வேண்டும். கதை மனித உணர்வுகள், அனுபவங்கள், மற்றும் சிந்தனைகளை வெளிப்படுத்த வேண்டும். உங்கள் கற்பனை மூலம் ஒரு வாழ்க்கை பயணத்தை உருவாக்குங்கள்."
              Formlink="https://forms.gle/Mz2DLUSjbKCQQ3pz6"
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              Note="Stories must be original. Maximum word limit: 1000 words."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்
"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route
          path="/Bodcast"
          element={
            <Bodcast
              title="🎧 Podcast Competition – போட்காஸ்ட் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Theme="Democracy in Today’s India – ஜனநாயகம் இன்றைய இந்தியாவில்"
              Style="Audio Presentation / Storytelling"
              AcceptedForms="Record & play 1-minute Tamil/English audio describing a given theme. The podcast can be one person monologue or two person dialogue."
              Description="Create a one-minute Tamil or English podcast based on the theme of democracy in modern India. You can perform solo or as a duo. Use your voice, ideas, and storytelling to express how democracy shapes our world today."
              Titletamil="🎧 போட்காஸ்ட் போட்டி – Podcast Competition"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              வடிவங்கள்="ஒருவர் அல்லது இருவர் பேசக்கூடியதாக ஒரு நிமிடம்  நீளமுள்ள ஒரு பொட்காஸ்ட்டை பதிவு செய்ய வேண்டு"
              தைலம்="ஜனநாயகம் இன்றைய இந்தியாவில்"
              விவரம்="இன்றைய இந்தியாவின் ஜனநாயகத்தைப் பற்றி ஒரு நிமிட ஆடியோ பதிவு உருவாக்குங்கள். தனியாக அல்லது இருவர் சேர்ந்து பேசலாம். ஜனநாயகத்தின் மகத்துவத்தை வெளிப்படுத்தும் ஒரு குரலாக இருங்கள்."
              Formlink="https://forms.gle/y1Pm7wqwV1gLb2RS6"
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              Note="Audio must be in MP3 format. Maximum duration: 1 minute."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route
          path="/Speech"
          element={
            <Speech
              title="🗣 Speech Contest – பேச்சுப் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Theme="My Dream World – என் கனவு உலகம்"
              Style="Speech / Oral Presentation"
              Description="Deliver a powerful speech in Tamil or English on the topic ‘My Dream World’. Focus on your aspirations, vision, and creative thoughts for a better future. Your words should inspire change and imagination."
              Titletamil="🗣 பேச்சுப் போட்டி – Speech Contest"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              தைலம்="என் கனவு உலகம்"
              விவரம்="‘என் கனவு உலகம்’ என்ற தலைப்பில் ஒரு உற்சாகமான பேச்சு வழங்குங்கள். உங்கள் கனவுகள், கற்பனை, மற்றும் சிறந்த எதிர்காலக் காட்சிகளை வெளிப்படுத்துங்கள். உங்கள் சொற்கள் மாற்றத்தைத் தூண்டட்டும்."
              Formlink="https://forms.gle/AQnZnt8QBcGRrTh96"
              பாணி="பேச்சு / உரை"
              வடிவங்கள்="கொடுக்கப்பட்ட தலைப்பை ஒட்டி கொடுக்கப்பட்ட கால அளவில் தமிழிலோ ஆங்கிலத்திலோ பேச வேண்டும்."
              AccepteForms="Speech about a given theme in Tamil/English."
              venue="Mini Seminar Hall(GF18)"
              date="16.10.2025"
              time="11:00 AM – 12:00 PM"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              Note="Speeches must be 3–5 minutes. Judges will assess content, delivery, and creativity."
              இடம்="மினி செமினார் ஹால் (GF18)"
              தேதி="16.10.2025"
              நேரம்="காலை 11:00 – 12:00"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route
          path="/Commentary"
          element={
            <Commentary
              title="🎙 Commentary Contest – வர்ணனைப் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Theme="From Home to College – வீட்டிலிருந்து கல்லூரி வரை"
              Style="Oral Commentary / Speech"
              AcceptedForms="commentary describing your journey from home to college, this can be your actual travel from home to college or describing the transition from school to college life, or any other meanings too"
              Description="Share your commentary about your journey from home to college — either literally or symbolically. Capture the emotions, experiences, and transition of entering a new phase of life. Express it with liveliness and creativity."
              Titletamil="🎙 வர்ணனைப் போட்டி – Commentary Contest"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              வடிவங்கள்="நடத்தல் உண்ணுதல் மற்றும் உறங்குதல் போன்ற தலைப்புகள் நடுவர்களால் வழங்கப்பட்டு அதற்கான வர்ணனை போட்டியாளர்களால் வழங்கப்பட வேண்டும்"
              விவரம்="வீட்டிலிருந்து கல்லூரி வரையிலான உங்கள் பயணத்தை வர்ணியுங்கள் — அது உண்மையானதோ அல்லது உணர்வுப்பூர்வமானதோ இருக்கலாம். உங்கள் அனுபவங்களையும் உணர்வுகளையும் படைப்பாற்றலுடன் வெளிப்படுத்துங்கள்."
              Formlink="https://forms.gle/nkqGHs7LZebcjjZeA"
              venue="Multi-purpose Hall(FF16)"
              date="17.10.2025"
              பாணி="வாய்மொழி வர்ணனை / பேச்சு"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              Note="Maximum duration: 4 minutes. Creativity and expression will be evaluated."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="17.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route path="/logical" element={<Logical />} />

        {/* 6️⃣ Budget Battle */}
        <Route
          path="/budgetbattle"
          element={
            <Budgetbattle
              title="💰 Budget Battle – பட்ஜெட் போர்"
              type="Team"
              Language="Tamil or English"
              Theme="One Year Budget of the College – ஒரு ஆண்டுக்கான கல்லூரி பட்ஜெட்"
              Style="Budget Planning / Presentation"
              Description="Teams will design and present a creative, realistic one-year budget plan for the college. Consider all departments, cultural activities, and student needs while maintaining financial balance. Present your plan with clarity, creativity, and logic!"
              Titletamil="💰 பட்ஜெட் போர் – Budget Battle"
              வகை="அணி (Team)"
              பாணி="ஒரு ஆண்டுக்கான கல்லூரி பட்ஜெட்"
              விவரம்="அணிகள் கல்லூரிக்கான ஒரு ஆண்டுக்கால பட்ஜெட் திட்டத்தை வடிவமைத்து வழங்க வேண்டும். கல்வி, கலாச்சாரம், மாணவர் நலன் ஆகியவற்றை கருத்தில் கொண்டு சமநிலை பட்ஜெட்டை உருவாக்குங்கள். படைப்பாற்றலுடன், நியாயத்துடன் உங்கள் திட்டத்தைப் பிரதிபலிக்குங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              வடிவங்கள்="பட்ஜெட் திட்டமிடல் மற்றும் முன்னோட்டக் காட்சி"
              Formlink="https://forms.gle/Q8y8dXYGPqmCQRgFA"
              AcceptedForms="Team competition – Design model budget for the college with a given amount"
              AcceptedFormsTamil="குழு செயல்பாடு – போட்டியாளர்கள் கொடுக்கப்பட்ட தொகையுடன் கல்லூரிக்கான மாதிரி பட்ஜெட்டை வடிவமைக்க வேண்டும்"
              venue="Conference Hall(GF16)"
              date="27.10.2025"
              time="2:00 PM – 3:30 PM"
              coordinator="Dr.S.S.Darly, AP/EEE."
              Note="Teams of 3–5. Presentations must include visual aids or charts."
              இடம்="கான்ஃபரன்ஸ் ஹால் (GF16)"
              தேதி="27.10.2025"
              நேரம்="மாலை 2:00 – 3:30"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். எஸ். டார்லி, உதவி பேராசிரியர், மின்சாரம் மற்றும் மின்மாணவர்கல் துறை"
            />
          }
        />

        {/* 7️⃣ Treasure Hunt */}
        <Route
          path="/treasurehunt"
          element={
            <Budgetbattle
              title="🗺 புதையல் வேட்டை – Treasure Hunt"
              type="Team"
              Language="Tamil or English"
              Theme="Campus Adventure – கல்லூரி வளாக வேட்டை"
              Style="Campus Exploration / Team Challenge"
              Description="Teams of 4 to 6 will solve clever clues hidden across the campus. Each riddle leads you closer to the final treasure. Use teamwork, reasoning, and quick thinking to conquer this exciting challenge!"
              Titletamil="🗺 புதையல் வேட்டை – Treasure Hunt"
              வகை="அணி (Team)"
              பாணி="கல்லூரி வளாக வேட்டை"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              வடிவங்கள்="வளாகம் முழுவதும் மறைக்கப்பட்டுள்ள இடங்களைத் தேடுவதற்கு ஒவ்வொரு குறிப்பையும் ஒன்றன் பின் ஒன்றாக பின்பற்றி செல்லும் ஒரு குழு நிகழ்ச்சி (4 முதல் 6 உறுப்பினர்கள்)."
              விவரம்="நான்கு முதல் ஆறு பேர்கள் கொண்ட அணிகள் கல்லூரி வளாகத்தின் பல இடங்களில் வைக்கப்பட்டுள்ள குறிப்புகளைத் தேடி புதிர்களைத் தீர்க்க வேண்டும். ஒவ்வொரு குறிப்பும் இறுதிச் செல்வத்துக்கு வழிகாட்டும். குழுத் திறன் மற்றும் சிந்தனையால் வெற்றி பெறுங்கள்!"
              Formlink="https://forms.gle/b1tKdKJizBfBK8y6A"
              AcceptedForms="Follow the clues one by one to search different places across the campus. A team event for 4–6 members."
              AcceptedFormsTamil="கல்லூரி வளாகத்தில் பல்வேறு இடங்களில் வைக்கப்பட்டுள்ள குறிப்புகளைக் கொண்டு புதிர்களை தீர்க்க வேண்டும். 4–6 பேர் கொண்ட அணிகளுக்கான போட்டி."
              venue="Open Ground"
              date="16.10.2025"
              time="3:30 PM – 4:30 PM"
              coordinator="Dr.S.S.Darly, AP/EEE."
              Note="Team size: 4–6. Mobile phones allowed for hints only."
              இடம்="திறந்த மைதான்"
              தேதி="16.10.2025"
              நேரம்="மாலை 3:30 – 4:30"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். எஸ். டார்லி, உதவி பேராசிரியர், மின்சாரம் மற்றும் மின்மாணவர்கல் துறை"
            />
          }
        />

        {/* 8️⃣ Tech Challenge – College 2.0 */}
        <Route
          path="/college2.0"
          element={
            <Budgetbattle
              title="💡 Tech Challenge – டெக் சாலஞ்ச் (College 2.0)"
              type="Team"
              Language="தமிழ்"
              Theme="Problems in Your College – கல்லூரி அளவிலான பிரச்சனைகள்"
              Style="Technical Innovation / Prototype Presentation"
              Description="Identify a real problem in your college and design a simple technical solution — for example, a digital attendance system or a waste-management tool. Teams must present their working concept or prototype creatively."
              Titletamil="💡 டெக் சாலஞ்ச் – College 2.0"
              வகை="அணி (Team)"
              பாணி="கல்லூரி அளவிலான பிரச்சனைகள்"
              விவரம்="கல்லூரியில் நிலவும் ஒரு சரியான பிரச்சனையை அடையாளம் கண்டு அதற்கான எளிய தொழில்நுட்பத் தீர்வை உருவாக்குங்கள் — உதாரணமாக டிஜிட்டல் அட்டென்டன்ஸ் அமைப்பு அல்லது கழிவுநீர் நிர்வாகம். உங்கள் யோசனையை புதுமையுடன் வழங்குங்கள்!"
              Formlink="https://forms.gle/RjW67pEg2iL98kAy5"
              AcceptedForms="Build simple solutions to solve local college-level problems (e.g., digital attendance, food waste). Problem statements must be provided by the college."
              வடிவங்கள்="கல்லூரி அளவிலான பிரச்சனைகளை தீர்ப்பதற்கான எளிய தொழில்நுட்பத் தீர்வுகளை உருவாக்குங்கள் (உதாரணமாக டிஜிட்டல் அட்டென்டன்ஸ், உணவுக் கழிவு). பிரச்சனைக் குறிப்புகள் கல்லூரியால் வழங்கப்பட வேண்டும்."
              venue="Conference Hall(GF16)"
              date="27.10.2025"
              time="1:30 PM – 2:30 PM"
              coordinator="Dr.S.S.Darly, AP/EEE."
              Note="Teams of 3–5. Prototype or concept demonstration is mandatory."
              இடம்="கான்ஃபரன்ஸ் ஹால் (GF16)"
              தேதி="27.10.2025"
              நேரம்="மாலை 1:30 – 2:30"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். எஸ். டார்லி, உதவி பேராசிரியர், மின்சாரம் மற்றும் மின்மாணவர்கல் துறை"
            />
          }
        />

        <Route path="/musical" element={<Musical />} />

        {/* 9️⃣ Solo Singing Competition */}
        <Route
          path="/SoloSinging"
          element={
            <Budgetbattle
              title="🎤 Solo Singing – தனிப்பாடல் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Style="Free Style – Film, Folk, or Fusion"
              Description="Showcase your vocal talent through any form — film, gaana, folk, or fusion. The performance can be classical, modern, or free style. Let your voice express the rhythm and emotion of music!"
              Titletamil="🎤 தனிப்பாடல் போட்டி – Solo Singing"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              பாணி="சுதந்திர பாணி – திரைப்படம், நாட்டுப்புறம் அல்லது கலவை"
              விவரம்="நீங்கள் விரும்பிய பாணியில் பாடுங்கள் — திரைப்படம், நாட்டுப்புறம், கானா அல்லது கலவை. குரலில் உணர்ச்சி, லயம், இசை அழகை வெளிப்படுத்துங்கள்!"
              Formlink="https://forms.gle/LtaN1CiRsbtWVp697"
              AcceptedForms="Singing competition can include film songs, gaana songs, or folk songs. Solo performance only."
              வடிவங்கள்="சினிமாப்பாடல், கானா பாடல் அல்லது நாட்டுப்புற பாடல்களை தனியாக பாடும் போட்டி."
              venue="Mini Seminar Hall(GF18)"
              date="27.10.2025"
              time="11:00 AM – 12:00 PM"
              coordinator="Dr.S.Sivasubraminiyan, Prof.&HoD., Science and Humanities."
              Note="Performance duration: 3–5 minutes. Participants must bring their own accompaniment if needed."
              இடம்="மினி செமினார் ஹால் (GF18)"
              தேதி="27.10.2025"
              நேரம்="காலை 11:00 – 12:00"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        {/* 🔟 Musical Instrument Performance */}
        <Route
          path="/Instruments"
          element={
            <Budgetbattle
              title="🎼 Instrumental Performance – வாத்திய இசை போட்டி"
              type="Individual"
              Style="Free Style – String, Wind, Percussion, or Keyboard"
              Description="Perform a solo instrumental piece using any instrument of your choice — guitar, violin, flute, tabla, or keyboard. Blend skill and melody to create a soulful performance that connects with the audience."
              Titletamil="🎼 வாத்திய இசை போட்டி – Instrumental Competition"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              பாணி="சுதந்திர பாணி – நரம், காற்று, தோல் அல்லது கீபோர்டு வாத்தியங்கள்"
              விவரம்="உங்களுக்கு பிடித்த எந்தவொரு வாத்தியத்தையும் கொண்டு இசை விழாவை நடத்துங்கள் — கிதார், வயலின், புல்லாங்குழல், தபேலா அல்லது கீபோர்டு. உங்கள் திறமையும் இசை ஆற்றலையும் இணைத்து மனதை தொடும் நிகழ்ச்சியாக்குங்கள்!"
              Formlink="https://forms.gle/AerJgK49mN2DVFT69"
              AcceptedForms="Competition of musical instruments such as Guitar, Violin, Sitar, Veena (string); Flute, Saxophone, Clarinet (wind); Drum, Parai, Tabla, Mridangam (percussion); Piano, Harmonium, Keyboard (keyboard)."
              வடிவங்கள்="கிட்டார், வயலின், சிதார், வீணை போன்ற நரம்பு வாத்தியங்கள்; புல்லாங்குழல், நாதஸ்வரம் போன்ற காற்று வாத்தியங்கள்; மேளம், பறை, தப்லா, மிருதங்கம் போன்ற தோல் வாத்தியங்கள்; பியானோ, ஹார்மோனியம், கீபோர்டு போன்ற கீபோர்டு வாத்தியங்கள்."
              venue="Mini Seminar Hall(GF18)"
              date="27.10.2025"
              time="12:00 PM – 12:30 PM"
              coordinator="Dr.S.Sivasubraminiyan, Prof.&HoD., Science and Humanities."
              Note="Maximum performance duration: 5 minutes. Ensure instrument setup is ready before the performance."
              இடம்="மினி செமினார் ஹால் (GF18)"
              தேதி="27.10.2025"
              நேரம்="மாலை 12:00 – 12:30"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        {/* 11️⃣ Musical Storytelling */}
        <Route
          path="/MusicalStorytelling"
          element={
            <Budgetbattle
              title="🎶 Musical Storytelling – சொல்லிசைப் போட்டி"
              type="Team"
              Language="Tamil or English"
              Theme="College Life – கல்லூரி வாழ்க்கை"
              Style="Musical Storytelling / Performance"
              Description="Compose and perform a short musical story based on the theme of college life. Blend narration and melody to capture the emotions, humor, and rhythm of student days. Use instruments or simple beats to make your story come alive!"
              Titletamil="🎶 சொல்லிசைப் போட்டி – Musical Storytelling"
              வகை="அணி (Team)"
              பாணி="🎵 இசை வழி கதை சொல்லல் / நிகழ்ச்சி"
              விவரம்="கல்லூரி வாழ்க்கையை மையமாகக் கொண்டு ஒரு குறுகிய இசை கதையை உருவாக்குங்கள். கதையும் இசையும் இணைத்து மாணவர் வாழ்க்கையின் உணர்ச்சிகளையும் நகைச்சுவையையும் வெளிப்படுத்துங்கள். எளிய இசைக்கருவிகள் அல்லது தாளங்களைப் பயன்படுத்தி கதையை உயிர்ப்பாக்குங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/BF6nsegbeXD1ktX39"
              AcceptedForms="Compose a short musical storytelling song on the given theme. Team size 3–5."
              வடிவங்கள்="ஒரு சிறிய கதையை மையப்படுத்தி சொல்லிசை பாடலை கொடுக்கப்பட்ட தலைப்பின் கீழ் உருவாக்க வேண்டும். குழு அளவு: 3–5 பேர்."
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan, Prof.&HoD., Science and Humanities."
              Note="Team size: 3–5. Narration must be clear and audible."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              நேரம்="Submission on or Before 21.10.2025"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        {/* 12️⃣ Lyrics Writing with Tune */}
        <Route
          path="/LyricsWriting"
          element={
            <Budgetbattle
              title="📝 Lyrics Writing with Tune – பாடல்வரிகள் & இசை போட்டி"
              type="Team"
              Language="Tamil or English"
              Theme="Friendship – நட்பு"
              Style="Lyrics Writing & Musical Composition"
              Description="Write original lyrics around the theme of friendship, compose your own tune, and perform it as a group. Showcase your creativity through heartfelt words and harmonies that celebrate the spirit of friendship."
              Titletamil="📝 பாடல்வரிகள் & இசை போட்டி – Lyrics Writing"
              வகை="அணி (Team)"
              பாணி="🎵 பாடல் வரிகள் எழுதுதல் & இசை அமைத்தல்"
              விவரம்="நட்பை மையமாக கொண்டு புதிய பாடல்வரிகளை எழுதுங்கள், அதற்கேற்ப இசையமைத்து குழுவாகப் பாடுங்கள். உணர்ச்சிமிக்க வரிகளும் இனிய இசையும் மூலம் நட்பின் இனிமையை வெளிப்படுத்துங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/Y2ujGp5yfxB2JyzG7"
              AcceptedForms="Write lyrics on the given theme, compose a tune, and perform as a team. Team size: 3–6."
              வடிவங்கள்="கொடுக்கப்பட்ட தலைப்பை மையமாக வைத்து பாடல் வரிகள் எழுதி இசையமைத்து குழு செயல்பாடாகப் பாட வேண்டும். குழு அளவு: 3–6."
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan, Prof. & HoD, Science and Humanities."
              Note="Team size: 3–6. Lyrics and tune must be original."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              நேரம்="Submission on or Before 21.10.2025"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        {/* 13️⃣ Music Around You */}
        <Route
          path="/MusicAroundYou"
          element={
            <Budgetbattle
              title="🥁 Music Around You – வாழ்கையின் இசை"
              type="Team"
              Language="Tamil or English"
              Theme="Music from Daily Life – தினசரி வாழ்வின் இசை"
              Style="Free Style – Everyday Objects Music"
              Description="Create rhythm and melody using everyday objects — desks, buckets, bottles, or utensils. Let your team turn the sounds of life into an energetic musical performance full of fun and creativity."
              Titletamil="🥁 வாழ்கையின் இசை – Music Around You"
              வகை="அணி (Team)"
              பாணி="சுதந்திர பாணி – தினசரி பொருட்களைப் பயன்படுத்தி இசை"
              விவரம்="நாளந்தோறும் உங்களைச் சுற்றியுள்ள பொருட்களைப் பயன்படுத்தி இசையை உருவாக்குங்கள் — மேஜை, பாத்திரம், பாட்டில், வாளி போன்றவற்றின் ஒலிகளை ஒருங்கிணைத்து ஓர் ஆற்றல்மிக்க இசை நிகழ்ச்சியை உருவாக்குங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/YTNfHUe2VG2dUhMz9"
              AcceptedForms="Create rhythm and music using everyday objects (desks, vessels, bottles, etc.). Team size: 3–5."
              வடிவங்கள்="நாள்தோறும் பயன்படுத்தும் பொருட்களைப் பயன்படுத்தி இசை உருவாக்குங்கள் (மேஜை, பாத்திரம், பாட்டில் போன்றவை). குழு அளவு: 3–5."
              venue="Mini-seminar Hall(GF18)"
              date="27.10.2025"
              time="1.30 PM – 2.00 PM"
              coordinator="Dr.S.Sivasubraminiyan, Prof. & HoD, Science and Humanities."
              Note="Team size: 3–5. Everyday objects allowed only for musical instruments."
              இடம்="சின்ன செமினார் ஹால் (GF18)"
              தேதி="27.10.2025"
              நேரம்="1.30 PM – 2.00 PM"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route path="/kinesthetic" element={<Kinesthetic />} />

        {/* 14️⃣ Solo Dance */}
        <Route
          path="/DanceSolo"
          element={
            <Poetic
              title="💃 Solo Dance – தனி நடனம்"
              type="Individual"
              Language="Tamil or English"
              Theme="Dance Performance – நடனப் பாணி"
              Style="Free Style – Classical, Western or Folk"
              Description="Perform a solo dance in any style — classical, western, or folk. Express emotion and rhythm through movement and energy. Captivate the audience with your grace and stage presence!"
              Titletamil="💃 தனி நடனம் – Solo Dance"
              வகை="தனிப்பட்ட (Individual)"
              பாணி="சுதந்திர பாணி – பாரம்பரிய, மேற்கு, அல்லது நாட் புறம்"
              விவரம்="பாரம்பரிய, மேற்கு அல்லது நாட் புற பாணியில் தனிநடனம் ஆடுங்கள். உடல் அசைவுகளால் உணர்ச்சியையும் லயத்தையும் வெளிப்படுத்துங்கள். மேடை உங்களின் ஆற்றலால் ஒளிரட்டும்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/bxcWJSFuKabRjrddA"
              AcceptedForms="Perform a solo dance in any style (classical, western, or folk). Duration: 3–5 minutes. Costume and props allowed."
              வடிவங்கள்="ஏதேனும் பாணியில் தனிநடனம் ஆடுங்கள் (பாரம்பரிய, மேற்கு அல்லது நாட் புறம்). கால அளவு: 3–5 நிமிடங்கள். உடை மற்றும் பொருட்கள் பயன்படுத்தலாம்."
              venue="Conference Hall(GF16)"
              date="27.10.2025"
              time="10.00 – 11.00"
              coordinator="Dr.S.Milton Ganesh, AP & HoD, Dept of Information Tech."
              Note="Performance duration: 3–5 minutes. Costume and props allowed."
              இடம்="கான்பெரன்ஸ் ஹால் (GF16)"
              தேதி="27.10.2025"
              நேரம்="10.00 – 11.00"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். மில்டன் கணேஷ், உதவி பேராசிரியர் மற்றும் தலைவர், தகவல் தொழில்நுட்பத் துறை"
            />
          }
        />

        {/* 15️⃣ Group Dance */}
        <Route
          path="/GroupDance"
          element={
            <Poetic
              title="🕺 Group Dance – குழு நடனம்"
              type="Team"
              Language="Tamil or English"
              Theme="Dance Performance – நடனப் பாணி"
              Style="Free Style – Classical, Western or Folk"
              Description="Teams will perform coordinated dance routines that can blend classical, western, or folk styles. Choreograph creative moves that tell a story, celebrate culture, and fill the stage with vibrant energy!"
              Titletamil="🕺 குழு நடனம் – Group Dance"
              வகை="அணி (Team)"
              பாணி="சுதந்திர பாணி – பாரம்பரிய, மேற்கு, அல்லது நாட் புறம்"
              விவரம்="அணியாக இணைந்து ஒருங்கிணைந்த நடன நிகழ்ச்சியை உருவாக்குங்கள். பாரம்பரிய, மேற்கு, அல்லது நாட் புற பாணிகளை இணைத்து, கலை, கலாச்சாரம் மற்றும் ஆற்றலை வெளிப்படுத்துங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/9wEfV4fqproxLj5e6"
              AcceptedForms="Perform a coordinated group dance in any style (classical, western, or folk). Team size: 3–8. Choreography must be original."
              வடிவங்கள்="ஏதேனும் பாணியில் குழு இணைந்த நடன நிகழ்ச்சி ஆடுங்கள் (பாரம்பரிய, மேற்கு, அல்லது நாட் புறம்). குழு அளவு: 3–8. நடன அமைப்பு புதுமையானதாக இருக்க வேண்டும்."
              venue="Conference Hall(GF16)"
              date="27.10.2025"
              time="2.00 – 3.30"
              coordinator="Dr.S.Milton Ganesh, AP & HoD, Dept of Information Tech."
              Note="Team size: 3–8. Choreography must be original."
              இடம்="கான்பெரன்ஸ் ஹால் (GF16)"
              தேதி="27.10.2025"
              நேரம்="2.00 – 3.30"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். மில்டன் கணேஷ், உதவி பேராசிரியர் மற்றும் தலைவர், தகவல் தொழில்நுட்பத் துறை"
            />
          }
        />

        {/* 16️⃣ Performative Martial Arts */}
        <Route
          path="/MartialArts"
          element={
            <Poetic
              title="🥋 Performative Martial Arts – தற்காப்புக்கலைப் போட்டி"
              type="Individual / Team"
              Language="Tamil or English"
              Theme="Martial Arts Performance – தற்காப்புக்கலை நிகழ்ச்சி"
              Style="Free Style – Traditional or Modern"
              Description="Showcase your martial arts talent — be it Silambam, Kalaripayattu, Taekwondo, or Adimurai. The act can be solo or team-based, performed within 2 minutes. Display strength, discipline, and artistic movement through your skill."
              Titletamil="🥋 தற்காப்புக்கலைப் போட்டி – Martial Arts"
              வகை="தனிப்பட்ட / அணி"
              பாணி="சுதந்திர பாணி – பாரம்பரிய அல்லது நவீன"
              விவரம்="சிலம்பம், களரிப்பயிற்சி, டேக்வாண்டோ, அடிமுறை போன்ற தற்காப்புக் கலைகளை 2 நிமிட நிகழ்ச்சியாகக் காட்சிப்படுத்துங்கள். உடல் ஒழுக்கம், தைரியம், மற்றும் கலை உணர்வை வெளிப்படுத்துங்கள்."
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/ME7ACDBjSdjQPP8Y8"
              AcceptedForms="Perform martial arts solo or in a team (Silambam, Kalaripayattu, Taekwondo, Adimurai). Duration: 2 minutes."
              வடிவங்கள்="சிலம்பம், களரிப்பயிற்சி, டேக்வாண்டோ, அடிமுறை போன்ற தற்காப்புக் கலைகளை தனியாகவோ குழுவாகவோ 2 நிமிட நிகழ்ச்சியாகக் காட்சிப்படுத்துங்கள்."
              venue="Open Ground"
              date="27.10.2025"
              time="3.00 – 3.30"
              coordinator="Dr.S.Milton Ganesh, AP & HoD, Dept of Information Tech."
              Note="Participants should wear proper attire and bring necessary props or weapons."
              இடம்="ஒப்பன் கிரவுண்ட்"
              தேதி="27.10.2025"
              நேரம்="3.00 – 3.30"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். மில்டன் கணேஷ், உதவி பேராசிரியர் மற்றும் தலைவர், தகவல் தொழில்நுட்பத் துறை"
            />
          }
        />

        {/* 17️⃣ Mime – Silent Drama */}
        <Route
          path="/Mime"
          element={
            <Poetic
              title="🤫 Mime – மெளன நாடகம்"
              type="Team"
              Language="Tamil or English"
              Theme="Climate Change – காலநிலை மாற்றம்"
              Style="Silent Performance"
              Description="Perform a silent act using only expressions and gestures — no words, no sounds. The mime must follow the theme of climate change and creatively convey awareness within 1–3 minutes. Let your expressions speak louder than words!"
              Titletamil="🤫 மெளன நாடகம் – Mime"
              வகை="அணி (Team)"
              பாணி="மௌன நிகழ்ச்சி"
              விவரம்="வார்த்தைகள் இல்லாமல் முகபாவங்கள் மற்றும் உடல் அசைவுகளால் செய்தி கூறும் மெளன நாடகம். ‘காலநிலை மாற்றம்’ என்ற தலைப்பை மையமாகக் கொண்டு 1–3 நிமிடங்களில் படைப்பாற்றலுடன் செய்தி வழங்குங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/ujHbjo4YXf1ZTRt16"
              AcceptedForms="Perform a silent act using expressions and gestures without speaking or making sound. Team size: 3–6. Duration: 1–3 minutes."
              வடிவங்கள்="முகபாவங்கள் மற்றும் உடல் அசைவுகளைக் கொண்டு வார்த்தைகள் மற்றும் ஒலி இல்லாமல் 1–3 நிமிட மெளன நாடகத்தை அணியுடன் (3–6 பேர்) அரங்கேற்றுங்கள்."
              venue="Conference Hall(GF16)"
              date="27.10.2025"
              time="11.00 – 12.00"
              coordinator="Dr.S.Milton Ganesh, AP & HoD, Dept of Information Tech."
              Note="Team size: 3–6 members. Props allowed but no sound-making objects."
              இடம்="கான்பெரன்ஸ் ஹால் (GF16)"
              தேதி="27.10.2025"
              நேரம்="11.00 – 12.00"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். மில்டன் கணேஷ், உதவி பேராசிரியர் மற்றும் தலைவர், தகவல் தொழில்நுட்பத் துறை"
            />
          }
        />

        {/* 18️⃣ Puppetry */}
        <Route
          path="/Puppet"
          element={
            <Poetic
              title="🪆 Puppetry – பொம்மலாட்டம்"
              type="Team"
              Language="Tamil or English"
              Theme="Folk Stories – நாட்டுப்புறக் கதைகள்"
              Style="Puppet Performance / Folk Art"
              Description="Perform a creative puppet show inspired by traditional forms like Bommalaattam or Thol Bommalaattam. Bring folk tales to life using handmade puppets, props, and narration. Celebrate Tamil culture through movement and storytelling."
              Titletamil="🪆 பொம்மலாட்டம் – Puppetry"
              வகை="அணி (Team)"
              பாணி="🎭 கூடல்/வாத்தியக் கலைநிகழ்ச்சி"
              விவரம்="பாரம்பரிய பொம்மலாட்டம், தோல் பொம்மலாட்டம் போன்ற வடிவங்களில் நாட்டுப்புறக் கதையை அரங்கேற்றுங்கள். கைத்தயாரிப்பு பொம்மைகள், பொருட்கள், கதைப்பாடல்கள் மூலம் கலைநயத்துடன் நிகழ்த்துங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/Kr4warkQcVPXxP456"
              AcceptedForms="Perform a theme-based puppet act using simple puppet techniques or traditional puppet art forms such as Bommalaattam, Thol Bommalaattam, Marapaavai, etc."
              வடிவங்கள்="ஒரு தலைப்பை ஒட்டிய மண் சார்ந்த பொம்மலாட்ட நாடகத்தை அரங்கேற்றலாம். பொம்மலாட்டம், தோல் பொம்மலாட்டம், மரப்பாவை போன்ற பாரம்பரிய வடிவங்களில் நிகழ்த்தலாம்."
              venue="Conference Hall(GF16)"
              date="17.10.2025"
              time="11:00 AM – 12:00 PM"
              coordinator="Dr.S.Milton Ganesh, AP & HoD, Dept of Information Tech."
              Note="Use handmade puppets only. Narration can be bilingual (Tamil/English)."
              இடம்="கான்ஃபரன்ஸ் ஹால் (GF16)"
              தேதி="17.10.2025"
              நேரம்="காலை 11:00 – 12:00"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். மில்டன் கணேஷ், உதவி பேராசிரியர் மற்றும் தலைவர், தகவல் தொழில்நுட்பத் துறை"
            />
          }
        />

        <Route path="/spatial" element={<Spatial />} />
        {/* 1⿩ Art Competition */}
        <Route
          path="/Art"
          element={
            <Poetic
              title="🎨 Art Competition – ஓவியப் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Theme="Forgotten Artforms – மறந்த கலைகள்"
              Style="Drawing / Painting – Traditional or Modern"
              Description="Show your creativity through drawing or painting inspired by traditional or forgotten artforms. Use any medium — acrylic, watercolour, pencil, or digital — to express your imagination, culture, and artistry."
              Titletamil="🎨 ஓவியப் போட்டி – Art Competition"
              வகை="தனிப்பட்ட (Individual)"
              பாணி="🎨 வரைவு / ஓவியம் – பாரம்பரியமோ நவீனமோ"
              விவரம்="பாரம்பரிய அல்லது மறந்த கலை வடிவங்களை மையமாகக் கொண்டு ஓவியம் அல்லது வரைவில் படைப்பாற்றலை வெளிப்படுத்துங்கள். அக்ரிலிக், வாட்டர் கலர், பென்சில், அல்லது டிஜிட்டல் வடிவம் — எதிலும் உருவாக்கலாம்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/e9x2qYjKvc9Tnq4n7"
              AcceptedForms="Drawing or painting in any medium using any type of paint — acrylic, poster colours, colour pencils, or even line drawing."
              வடிவங்கள்="ஓவியம் வரைதல் – அனைத்து விதமான ஓவியங்களும் வரவேற்கப்படுகின்றன. அக்ரிலிக், போஸ்டர் கலர், கலர் பேன்சில்கள், அல்லது கோடு வரைவு போன்ற எந்த வடிவத்திலும் செய்யலாம்."
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.R.Gopinath, AP & HoD, Dept. of Civil."
              Note="Bring your own materials. Judges will assess creativity, technique, and adherence to theme."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              நேரம்="Submission on or Before 21.10.2025"
              ஒழுங்குபடுத்துபவர்="டா. ஆர். கோபிநாத், உதவி பேராசிரியர் மற்றும் தலைமை, சிவில் துறை"
            />
          }
        />

        {/* 20️⃣ Short Film Contest */}
        <Route
          path="/ShortFilm"
          element={
            <Poetic
              title="🎬 Short Film Contest – குறும்படப் போட்டி"
              type="Team"
              Language="Tamil or English"
              Theme="Mental Health – மனநலம்"
              Style="Short Film Production / Team Event"
              Description="Create a short film up to 5 minutes exploring the theme of mental health. You can script, act, shoot, and edit as a team. The film should deliver a strong message about awareness, empathy, and emotional wellbeing."
              Titletamil="🎬 குறும்படப் போட்டி – Short Film Contest"
              வகை="அணி (Team)"
              பாணி="🎬 குறும்பட தயாரிப்பு / குழு நிகழ்ச்சி"
              விவரம்="‘மனநலம்’ என்ற தலைப்பில் 5 நிமிட குறும்படம் தயாரிக்குங்கள். கதை, நடிப்பு, எடிட்டிங் ஆகியவற்றில் அணி ஒத்துழைப்பை வெளிப்படுத்துங்கள். மனநலத்தின் முக்கியத்துவத்தை உணர்த்தும் வலிமையான செய்தி வழங்குங்கள்."
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/Pg3qbVa1m6ZJcq3N6"
              AcceptedForms="A short film for the given theme, up to 5 minutes. Team event where each member may take one or multiple roles."
              வடிவங்கள்="கொடுக்கப்பட்ட தலைப்பை ஒட்டிய ஒரு குறும்படம், அதிகபட்சம் 5 நிமிடங்கள். இது குழு நிகழ்வு; ஒவ்வொரு மாணவரும் ஒரு அல்லது பல பங்குகளில் ஈடுபடலாம்."
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.R.Gopinath, AP & HoD, Dept. of Civil."
              Note="Maximum duration: 5 mins. Film must be submitted digitally before screening."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              நேரம்="Submission on or Before 21.10.2025"
              ஒழுங்குபடுத்துபவர்="டா. ஆர். கோபிநாத், உதவி பேராசிரியர் மற்றும் தலைமை, சிவில் துறை"
            />
          }
        />


        {/* 2️⃣ Fashion Designing */}
<Route path="/FashionDesigning" element={
  <Poetic
    title="👗 Fashion Designing – கலை வடிவமைப்பு போட்டி"
    type="Team"
    Language="Tamil or English"
    Theme="Modern-Traditional Fusion – நவீனமும் பாரம்பரியமும் இணைத்தல்"
    Style="Creative Design / Presentation"
    Description="Design and present a fashion concept that creatively merges modern and traditional styles. It could be clothing, accessories, or even body art. Highlight your artistic vision and how it blends heritage with innovation."
    Titletamil="👗 கலை வடிவமைப்பு போட்டி – Fashion Designing"
    வகை="அணி (Team)"
    பாணி="படைப்பாற்றல் வடிவமைப்பு / வழங்கல்"
    விவரம்="நவீன மற்றும் பாரம்பரிய பாணிகளை இணைத்து ஒரு கலைவினைமைப் படைப்பை வடிவமைக்குங்கள். அது ஆடை, அலங்காரம் அல்லது உடல் ஓவியம் என எதுவாகவும் இருக்கலாம். உங்கள் கற்பனை திறனையும் பாரம்பரியத்தையும் இணைத்து புதிய கலைநயத்தை வெளிப்படுத்துங்கள்!"
    மொழி="தமிழ் அல்லது ஆங்கிலம்"
    Formlink="https://forms.gle/i3KgAWUzgG9maSVB8"
    AcceptedForms="Pick your own concept and design a fashion product that reflects it best — it can be clothing, accessories, or body art. Present the design concept concisely on stage."
    வடிவங்கள்="உங்கள் சொந்த கருத்தை பிரதிபலிக்கும் வகையில் ஆடை, அலங்காரம் அல்லது உடல் ஓவியம் வடிவமைக்கலாம். உங்கள் கலை மற்றும் கருத்தை மேடையில் சுருக்கமாக வழங்குங்கள்."
    venue="Multi-purpose Hall (FF16)"
    இடம்="மல்டி-பர்பஸ் ஹால் (FF16)"
    date="27.10.2025"
    தேதி="27.10.2025"
    time="11.00 AM – 12.30 PM"
    நேரம்="11.00 AM – 12.30 PM"
    coordinator="Dr.R.Gopinath, AP & HoD, Dept. of Civil."
    ஒழுங்குபடுத்துபவர்="டா. ஆர். கோபிநாத், உதவி பேராசிரியர் மற்றும் தலைவர், சிவில் துறை"
    Note="Team size: 2–4 members. Present your concept clearly on stage with creativity and cultural fusion."
  />
} />




        {/* 22️⃣ 3D Art / Installation */}
        <Route
          path="/ThreeD"
          element={
            <Poetic
              title="🧱 3D Art – பரிமாணக் கலைப் படைப்புகள்"
              type="Individual / Team"
              Language="Tamil or English"
              Theme="3D Art / Installation"
              Style="Free Style – Sculpture or Installation"
              Description="Create a 3D art piece or installation using recycled or upcycled materials. Your artwork can represent a social idea, emotion, or abstract form. Show innovation, craftsmanship, and environmental awareness."
              Titletamil="🧱 பரிமாணக் கலை – 3D Art"
              வகை="தனிப்பட்ட / அணி"
              பாணி="சுதந்திர பாணி – சிலை அல்லது கலை அமைப்பு"
              விவரம்="மீள்பயன்பாட்டு பொருட்களைக் கொண்டு 3D கலைப்பணியை உருவாக்குங்கள். சமூகச் சிந்தனை, உணர்ச்சி, அல்லது கற்பனை வடிவத்தை வெளிப்படுத்தலாம். புதுமையும் சூழல் உணர்வும் இணைந்த கலை உருவாக்குங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/jwka6UaucMssuUYJ8"
              AcceptedForms="Sculpture or installation created using recycled or upcycled materials. Can represent social ideas, emotions, or abstract concepts."
              வடிவங்கள்="மீள்பயன்பாட்டு அல்லது மறுசுழற்சி செய்யப்பட்ட பொருட்களைப் பயன்படுத்தி உருவாக்கப்பட்ட சிலை அல்லது கலை அமைப்பு. சமூகச் சிந்தனை, உணர்ச்சி அல்லது சிந்தனையான வடிவங்களை வெளிப்படுத்தலாம்."
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.R.Gopinath, AP & HoD, Dept. of Civil."
              Note="Participants should bring required materials. Setup time of 1 hour will be provided before judging."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              நேரம்="Submission on or Before 21.10.2025"
              ஒழுங்குபடுத்துபவர்="டா. ஆர். கோபிநாத், உதவி பேராசிரியர் மற்றும் தலைமை, சிவில் துறை"
            />
          }
        />

        {/* 23️⃣ Digital Poster Making */}
        <Route
          path="/DigitalPoster"
          element={
            <Poetic
              title="🖼 Digital Poster Making – டிஜிட்டல் போஸ்டர் வடிவமைப்பு"
              type="Individual / Team"
              Language="Tamil or English"
              Theme="Food Heritage of Tamil Nadu – தமிழ்நாட்டின் உணவுப் பாரம்பரியம்"
              Style="Digital Poster Design / Creative Visuals"
              Description="Design a digital poster using your preferred software that celebrates the rich food heritage of Tamil Nadu. Highlight regional delicacies, traditional cooking styles, and cultural values through creative visuals."
              Titletamil="🖼 டிஜிட்டல் போஸ்டர் – Digital Poster Making"
              வகை="தனிப்பட்ட / அணி"
              பாணி="🖥️ டிஜிட்டல் போஸ்டர் வடிவமைப்பு / சிருஷ்டிப்பூர்வமான காட்சிகள்"
              விவரம்="தமிழ்நாட்டின் பாரம்பரிய உணவுப் பண்பாட்டை மையமாகக் கொண்டு ஒரு டிஜிட்டல் போஸ்டரை வடிவமைக்குங்கள். பாரம்பரிய உணவுகள், சமையல் கலாச்சாரம் மற்றும் கலைநயத்தைக் காட்சிப்படுத்துங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/6WtkEHPyFZ1LpA3B8"
              AcceptedForms="Submit a digital poster (JPEG/PNG/PDF) celebrating Tamil Nadu's food heritage. Creativity, design, and cultural representation will be judged."
              வடிவங்கள்="தமிழ்நாட்டின் உணவுப் பாரம்பரியத்தை காட்சிப்படுத்தும் டிஜிட்டல் போஸ்டரை சமர்ப்பிக்கவும் (JPEG/PNG/PDF). படைப்பாற்றல், வடிவமைப்பு மற்றும் கலாச்சார பிரதிபலிப்பு மதிப்பீடு செய்யப்படும்."
              venue="Multi-purpose Hall(FF16)"
              date="27.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.R.Gopinath, AP & HoD, Dept. of Civil."
              Note="Submit your digital poster (JPEG/PNG/PDF) via the provided form before the deadline."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="27.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              நேரம்="Submission on or Before 21.10.2025"
              ஒழுங்குபடுத்துபவர்="டா. ஆர். கோபிநாத், உதவி பேராசிரியர் மற்றும் தலைமை, சிவில் துறை"
            />
          }
        />

        <Route path="/interpersonnal" element={<Interpersonal />} />

        {/* 24️⃣ Youth Parliament */}
        <Route
          path="/Youth"
          element={
            <Poetic
              title="🏛 Youth Parliament – இளைஞர் பாராளுமன்றம்"
              type="Team"
              Language="Tamil or English"
              Style="Debate & Role-play"
              Theme="Socio-Economic Development of Tamil Nadu – தமிழ்நாட்டின் சமூக பொருளாதார வளர்ச்சி"
              Description="Form a youth parliament to debate and discuss key issues related to Tamil Nadu’s socio-economic growth. Assume ministerial or representative roles and propose solutions that reflect democratic spirit and leadership."
              Titletamil="🏛 இளைஞர் பாராளுமன்றம் – Youth Parliament"
              வகை="அணி (Team)"
              பாணி="🗣️ வாதவிடி & கதாபாத்திர நாடகம்"
              விவரம்="தமிழ்நாட்டின் சமூக மற்றும் பொருளாதார வளர்ச்சியை மையமாகக் கொண்டு ஒரு இளைஞர் பாராளுமன்றத்தை அமைக்குங்கள். அமைச்சர் அல்லது பிரதிநிதி வேடத்தில் இருந்து தீர்வுகளை முன்வைத்து ஜனநாயக மனப்பான்மையை வெளிப்படுத்துங்கள்!"
              Formlink="https://forms.gle/cE38PW9prTAxqKzGA"
              AcceptedForms="Form a youth parliament with ministerial or representative roles. Teams of 5–8 members debate socio-economic issues of Tamil Nadu."
              ஏற்கப்படும்
              வடிவங்கள்="5–8 பேர் கொண்ட அணிகள் அமைச்சர்ச் அல்லது பிரதிநிதி வேடங்களில் பங்கேற்று, தமிழ்நாட்டின் சமூக மற்றும் பொருளாதார பிரச்சனைகளைப் பற்றி விவாதிக்க வேண்டும்."
              venue="Mini-Seminar Hall(GF18)"
              date="27.10.2025"
              time="2:00 – 3:30 PM"
              coordinator="Dr.S.Jegatha Deborah, AP & HoD, Dept. of C.S.E."
              Note="Each team must consist of 5–8 members. Formal attire recommended. Topics will be given prior to the event."
              இடம்="மினி-சேமினார் ஹால் (GF18)"
              தேதி="27.10.2025"
              நேரம்="2:00 – 3:30 PM"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். ஜெகதா டெபோரா, உதவி பேராசிரியர் மற்றும் தலைவர், கணினி அறிவியல் துறை"
            />
          }
        />

        {/* 25️⃣ Startup Siruthai */}
        <Route
          path="/Startup"
          element={
            <Poetic
              title="🚀 Startup Siruthai – தொடக்க நிறுவனம் யோசனை"
              type="Individual"
              Language="Tamil or English"
              Style="Free Style – Business or Innovation Idea"
              Description="Pitch your startup or entrepreneurial idea — from a small local business to a large-scale innovation. Present how your idea solves a real-world problem and has the potential to grow into a successful venture."
              Titletamil="🚀 ஸ்டார்ட்அப் சிறுத்தை – Startup Siruthai"
              வகை="தனிப்பட்ட (Individual)"
              பாணி="முட்டிமொழி – வணிகம் அல்லது புதுமைப் யோசனை"
              விவரம்="சிறிய வணிக யோசனையிலிருந்து பெரிய தொழில்நுட்ப புதுமை வரை எந்தவொரு ஸ்டார்ட்அப் யோசனையையும் முன்வையுங்கள். உங்கள் யோசனை சமூகத்தில் எவ்வாறு மாற்றத்தை ஏற்படுத்தும் என்பதையும் அதன் வளர்ச்சித் திறனையும் விளக்குங்கள்!"
              Formlink="https://forms.gle/EGG6Crn1MYiZ8qK99"
              AcceptedForms="Present ideas to judges that can become startups or companies in the future. The business idea may be as small as a juice shop to as big as a rocket part manufacturing company."
              வடிவங்கள்="எதிர்கால தேவைகளை கருத்தில் கொண்டு தொழில் தொடங்கும் யோசனைகளை மாணவர்கள் நடுவர்களிடம் முன்வைக்க வேண்டும். அது ஒரு டீக்கடை முதல் ராக்கெட் பாகங்கள் உருவாக்கும் தொழிற்சாலை வரை எந்த அளவிலும் இருக்கலாம்."
              venue="Mini-Seminar Hall(GF18)"
              date="27.10.2025"
              time="3:30 – 4:30 PM"
              coordinator="Dr.S.Jegatha Deborah, AP & HoD, Dept. of C.S.E."
              Note="Each participant must prepare a short presentation (5–7 mins). Best ideas may receive incubation support."
              இடம்="மினி-சேமினார் ஹால் (GF18)"
              தேதி="27.10.2025"
              நேரம்="3:30 – 4:30 PM"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். ஜெகதா டெபோரா, உதவி பேராசிரியர் மற்றும் தலைவர், கணினி அறிவியல் துறை"
            />
          }
        />

        {/* 26️⃣ Debate */}
        <Route
          path="/Debate"
          element={
            <Poetic
              title="⚖ Debate – விவாத மேடை "
              type="Team"
              Language="Tamil or English"
              Style="Debate / Public Speaking"
              Theme="Superstition vs Science – மூடநம்பிக்கை Vs அறிவியல்"
              Description="Form teams and debate passionately on the theme 'Superstition vs Science'. Each side must present logical arguments backed by facts and reasoning. Inspire the audience with clarity, respect, and critical thought."
              Titletamil="⚖ விவாதப் போட்டி – Debate"
              வகை="அணி (Team)"
              பாணி="வாதம் / பொது உரை"
              விவரம்="‘தெய்வ நம்பிக்கை vs அறிவியல்’ என்ற தலைப்பில் அணிகளாக பிரிந்து வாதிடுங்கள். ஒவ்வொரு பக்கமும் நியாயமான வாதங்களையும் ஆதாரங்களையும் முன்வைக்க வேண்டும். மரியாதையுடன், சிந்தனை ஊக்குவிக்கும் உரையாடலை வெளிப்படுத்துங்கள்!"
              Formlink="https://forms.gle/BprZvej4gHGfST2C9"
              AcceptedForms="Divide into teams and debate on a given topic. The debates should be over in 8 minutes and a winning team should be declared."
              வடிவங்கள்="பங்கேற்பாளர்கள் குழுக்களாக பிரிந்து கொடுக்கப்பட்ட தலைப்பின் கீழ் விவாதிக்க வேண்டும். விவாதம் 8 நிமிடங்களுக்கு மேல் இருக்க வேண்டும் மற்றும் வெற்றியாளர் குழுவை அறிவிக்க வேண்டும்."
              venue="Mini-Seminar Hall(GF18)"
              date="16.10.2025"
              time="1:30 – 2:30 PM"
              coordinator="Dr.S.Jegatha Deborah, AP & HoD, Dept. of C.S.E."
              Note="Team size: 2–4. Each participant should prepare 3–5 points."
              இடம்="மினி-சேமினார் ஹால் (GF18)"
              தேதி="16.10.2025"
              நேரம்="1:30 – 2:30 PM"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். ஜெகதா டெபோரா, உதவி பேராசிரியர் மற்றும் தலைவர், கணினி அறிவியல் துறை"
            />
          }
        />

        {/* 27️⃣ Roleplay */}
        <Route
          path="/Roleplay"
          element={
            <Poetic
              title="🎭 Roleplay – குழு நாடகம்"
              type="Team"
              Language="Tamil or English"
              Style="Theatre / Short Play"
              Theme="Gender Equality – பாலின சமத்துவம்"
              Description="Create and enact a short play based on the theme of gender equality. Use dialogues, expressions, and visuals to convey a powerful message about balance and inclusion. Perform as a team with creativity and impact."
              Titletamil="🎭 நாடகம் – Roleplay"
              வகை="அணி (Team)"
              பாணி="நாடகம் / குறும்படம்"
              விவரம்="‘பாலின சமத்துவம்’ என்ற தலைப்பை மையமாகக் கொண்டு ஒரு நாடகத்தை உருவாக்கி அரங்கேற்றுங்கள். உரையாடல், முகபாவம் மற்றும் காட்சி வடிவங்கள் மூலம் சமத்துவத்தின் முக்கியத்துவத்தை வெளிப்படுத்துங்கள்!"
              Formlink="https://forms.gle/gruisHBeCVtq2L6eA"
              AcceptedForms="Create and enact a play as a group with the given theme. Necessary props and audiovisual aids can be used. Time limit: 8 minutes."
              வடிவங்கள்="கொடுக்கப்படும் தலைப்பில் ஒரு குழு நாடகத்தை உருவாக்கி அரங்கேற்றுங்கள். தேவையான காட்சிப் பொருட்கள் மற்றும் ஒலி-காட்சி உதவிகள் பயன்படுத்தலாம். நேர வரம்பு: 8 நிமிடங்கள்."
              venue="Conference Hall(GF16)"
              date="27.10.2025"
              time="12:00 – 12:30 PM"
              coordinator="Dr.S.Jegatha Deborah, AP & HoD, Dept. of C.S.E."
              Note="Team size: 3–6. Performance duration: 4–6 minutes."
              இடம்="கான்பரன்ஸ் ஹால் (GF16)"
              தேதி="27.10.2025"
              நேரம்="12:00 – 12:30 PM"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். ஜெகதா டெபோரா, உதவி பேராசிரியர் மற்றும் தலைவர், கணினி அறிவியல் துறை"
            />
          }
        />

        {/* 28️⃣ Stand-up Comedy */}
        <Route
          path="/Comedy"
          element={
            <Poetic
              title="😂 Stand-up Comedy – நாலு விஷயம் பேசுவோம்"
              type="Individual"
              Language="Tamil or English"
              Theme="College Life, Employment or Daily Struggles – கல்லூரி வாழ்க்கை, வேலைவாய்ப்பு, அல்லது நாளந்தோறும் சவால்கள்"
              Style="Comedy Performance"
              Description="Perform a 3-minute clean, humorous stand-up act based on everyday student or work-life experiences. Make the audience laugh with relatable stories, wit, and original humor while keeping it positive and creative."
              Titletamil="😂 நாலு விஷயம் பேசுவோம் – Stand-up Comedy"
              வகை="தனிப்பட்ட (Individual)"
              பாணி="நகைச்சுவை நிகழ்ச்சி (Comedy Performance)"
              விவரம்="மாணவர் வாழ்க்கை அல்லது வேலைவாய்ப்பில் நிகழும் நகைச்சுவை சம்பவங்களை மையமாகக் கொண்டு 3 நிமிட ஸ்டாண்ட் அப் நிகழ்ச்சி வழங்குங்கள். நகைச்சுவையுடன், சுத்தமான மற்றும் சிந்தனைத் தூண்டும் கதைகளால் ரசிகர்களை மகிழ்விக்குங்கள்!"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              Formlink="https://forms.gle/eMLmtyHPAgAp7ykP7"
              AcceptedForms="Perform a 3-minute stand-up comedy act on themes of college life, employment, or daily struggles. Content must be clean, original, and suitable for all audiences."
              வடிவங்கள்="கல்லூரி வாழ்க்கை, வேலைவாய்ப்பு அல்லது தினசரி சவால்களை மையமாகக் கொண்டு 3 நிமிட ஸ்டாண்ட் அப் நிகழ்ச்சி நிகழ்த்த வேண்டும். நிகழ்ச்சி சுத்தமானதும், புதுமையானதும், எல்லா மக்களுக்கும் ஏற்றதாக இருக்க வேண்டும்."
              venue="Conference Hall (GF16)"
              இடம்="கான்பெரன்ஸ் ஹால் (GF16)"
              date="27.10.2025"
              தேதி="27.10.2025"
              time="12:30 – 1:30 PM"
              நேரம்="12:30 – 1:30 PM"
              coordinator="Dr.S.Jegatha Deborah, AP & HoD, Dept. of C.S.E."
              ஒழுங்குபடுத்துபவர்="டா. எஸ். ஜெகதா டெபோரா, உதவி பேராசிரியர் மற்றும் தலைவர், கணினி அறிவியல் துறை"
              Note="Each performance must be under 3 minutes. Avoid offensive content."
            />
          }
        />

        <Route path="/nature" element={<Nature />} />


        {/* 29️⃣ Nature Collage */}
<Route path="/NatureCollage" element={
  <Poetic
    title="🌿 Nature Collage – அவியல்"
    type="Individual"
    Language="Tamil or English"
    Theme="Free Style – Natural Materials"
    Style="Free Style – Natural Materials"
    Description="Use leaves, flowers, stones, or any natural objects found around you to create a collage that celebrates nature. Combine textures and colors to reflect beauty, balance, and environmental harmony."
    Titletamil="🌿 இயற்கை கலா தொகுப்பு – Nature Collage"
    வகை="தனிப்பட்ட (Individual)"
    பாணி="சுதந்திர பாணி – இயற்கை பொருட்கள்"
    விவரம்="இலைகள், மலர்கள், கற்கள் போன்ற இயற்கை பொருட்களைப் பயன்படுத்தி ஒரு அழகான கலா தொகுப்பை உருவாக்குங்கள். இயற்கையின் அழகையும் சமநிலையையும் வெளிப்படுத்தும் கலை வடிவத்தை உருவாக்குங்கள்!"
    மொழி="தமிழ் அல்லது ஆங்கிலம்"
    Formlink="https://forms.gle/fpdXNk7Fdvdc4LQX6"
    AcceptedForms="Create a collage using natural materials like leaves, flowers, stones, or other found objects. Focus on textures, colors, and composition to highlight nature."
    வடிவங்கள்="இலைகள், மலர்கள், கற்கள் போன்ற இயற்கை பொருட்களைக் கொண்டு இயற்கையின் அழகை வெளிப்படுத்தும் கலா தொகுப்பை உருவாக்குங்கள்."
    venue="Multi-purpose Hall (FF16)"
    இடம்="மல்டி-பர்பஸ் ஹால் (FF16)"
    date="27.10.2025"
    தேதி="27.10.2025"
    time="Submission on or before 21.10.2025"
    நேரம்="21.10.2025 க்குள் சமர்ப்பிக்கவும்"
    coordinator="Dr.K.Venkatalakshmi, AP & HoD, Dept. of E.C.E."
    ஒழுங்குபடுத்துபவர்="டா. K. வெங்கடலட்சுமி, உதவி பேராசிரியர் மற்றும் தலைவர், E.C.E துறை"
    Note="Individual participation only. Collage size: max 24x36 inches."
  />
} />


{/* 30️⃣ Cooking Without Fire */}
<Route path="/Cooking" element={
  <Poetic
    title="🥗 Cooking Without Fire – நெருப்பில்லாமல் சமைப்போம்"
    type="Team"
    Language="Tamil or English"
    Theme="Free Style – Healthy & Creative"
    Style="Free Style – Healthy & Creative"
    Description="Prepare healthy and delicious dishes without using fire. Use fresh ingredients to make salads, smoothies, or desserts. Showcase creativity, nutrition, and presentation in your culinary creation."
    Titletamil="🥗 நெருப்பில்லா சமையல் – Cooking Without Fire"
    வகை="அணி (Team)"
    பாணி="சுதந்திர பாணி – ஆரோக்கியமும் படைப்பாற்றலுமாக"
    விவரம்="நெருப்பைப் பயன்படுத்தாமல் ஆரோக்கியமான உணவுகளை உருவாக்குங்கள் — சாலட், ஸ்மூத்தி, இனிப்பு போன்றவற்றை புதுமையுடன் தயாரியுங்கள். சுவை, ஆரோக்கியம் மற்றும் கலைநயத்துடன் சமையல் திறனை வெளிப்படுத்துங்கள்!"
    மொழி="தமிழ் அல்லது ஆங்கிலம்"
    Formlink="https://forms.gle/1aAv8piwi9P1akFn7"
    AcceptedForms="Prepare healthy dishes without using fire. Use fresh ingredients to create salads, smoothies, or desserts. Focus on creativity, taste, and presentation."
    வடிவங்கள்="நெருப்பைப் பயன்படுத்தாமல் ஆரோக்கியமான மற்றும் சுவையான உணவுகளை தயாரிக்கவும். சுவை மற்றும் கலைநயத்தில் புதுமை காட்டவும்."
    venue="Multi-purpose Hall (FF16)"
    இடம்="மல்டி-பர்பஸ் ஹால் (FF16)"
    date="17.10.2025"
    தேதி="17.10.2025"
    time="1:30 – 2:00 PM"
    நேரம்="1:30 – 2:00 PM"
    coordinator="Dr.K.Venkatalakshmi, AP & HoD, Dept. of E.C.E."
    ஒழுங்குபடுத்துபவர்="டா. K. வெங்கடலட்சுமி, உதவி பேராசிரியர் மற்றும் தலைவர், E.C.E துறை"
    Note="Team size: 2–4 members. Ingredients must be fresh and uncooked."
  />
} />


{/* 31️⃣ Show and Tell */}
<Route path="/ShowAndTell" element={
  <Poetic
    title="🪴 Show and Tell – ஒவ்வொரு பூக்களுமே"
    type="Individual"
    Language="Tamil or English"
    Theme="Nature – இயற்கை"
    Style="Presentation"
    Description="Bring any natural element — a leaf, flower, stone, or shell — and share its story. Speak about its beauty, importance, or your personal connection with it. Inspire others to appreciate and protect nature through your words."
    Titletamil="🪴 இயற்கை உரையாடல் – Show and Tell"
    வகை="தனிப்பட்ட (Individual)"
    பாணி="வழங்கல் (Presentation)"
    விவரம்="இலை, மலர், கல் அல்லது இயற்கையில் காணப்படும் பொருளை கொண்டு வந்து அதன் கதையைப் பகிருங்கள். அதன் அழகு, முக்கியத்துவம் அல்லது உங்களுடன் உள்ள உறவைப் பற்றி பேசுங்கள். உங்கள் உரையால் இயற்கையை நேசிக்கவும் பாதுகாக்கவும் ஊக்குவிக்குங்கள்!"
    மொழி="தமிழ் அல்லது ஆங்கிலம்"
    Formlink="https://forms.gle/itJsURRfngk5dD6t5"
    AcceptedForms="Bring a natural element and speak about it—its story, beauty, significance, or your personal connection. Presentations should be 2–3 minutes and encourage creativity."
    வடிவங்கள்="இயற்கைப் பொருளைப் பற்றி 2–3 நிமிடங்களுக்குள் உரையாற்றவும். படைப்பாற்றல் மற்றும் கதை சொல்லும் திறனை வெளிப்படுத்தவும்."
    venue="Mini-Seminar Hall (GF18)"
    இடம்="மினி-சேமினார் ஹால் (GF18)"
    date="27.10.2025"
    தேதி="27.10.2025"
    time="2:30 – 3:30 PM"
    நேரம்="2:30 – 3:30 PM"
    coordinator="Dr.K.Venkatalakshmi, AP & HoD, Dept. of E.C.E."
    ஒழுங்குபடுத்துபவர்="டா. K. வெங்கடலட்சுமி, உதவி பேராசிரியர் மற்றும் தலைவர், E.C.E துறை"
    Note="Each presentation should be 2–3 minutes. Encourage creativity and storytelling."
  />
} />



{/* 32️⃣ Natural Photography */}
<Route path="/Photography" element={
  <Poetic
    title="📸 Natural Photography Contest – கவனிக்க மறந்த காட்சிகள்"
    type="Individual"
    Language="Tamil or English"
    Theme="Nature – இயற்கை"
    Style="Photography"
    Description="Capture the essence of nature through your lens. Photograph scenes, textures, or moments that express nature’s beauty and life. Build a short narrative or series that tells a meaningful visual story about the environment."
    Titletamil="📸 இயற்கைப் புகைப்படம் – Natural Photography"
    வகை="தனிப்பட்ட (Individual)"
    பாணி="புகைப்படக் கலை (Photography)"
    விவரம்="இயற்கையின் அழகை உங்கள் கேமரா மூலம் பதிவு செய்யுங்கள். காட்சிகள், வண்ணங்கள் மற்றும் அசைவுகள் மூலம் இயற்கையின் உயிர்த்தன்மையைக் காட்டுங்கள். ஒவ்வொரு புகைப்படத்திலும் ஒரு அர்த்தமுள்ள கதை சொல்லுங்கள்!"
    மொழி="தமிழ் அல்லது ஆங்கிலம்"
    Formlink="https://forms.gle/xvF7wUVBoTGTnZw2A"
    AcceptedForms="Submit 3–5 photos digitally. Include title and brief description for each photo. Build a visual narrative from your shots."
    வடிவங்கள்="3–5 புகைப்படங்களை டிஜிட்டல் வடிவில் சமர்ப்பிக்கவும். ஒவ்வொன்றிற்கும் தலைப்பு மற்றும் விளக்கம் சேர்க்கவும்."
    venue="Multi-Purpose Hall (GF16)"
    இடம்="பல்துறை ஹால் (GF16)"
    date="27.10.2025"
    தேதி="27.10.2025"
    time="Submitted on or before 21.10.2025"
    நேரம்="21.10.2025 க்குள் சமர்ப்பிக்க வேண்டும்"
    coordinator="Dr.K.Venkatalakshmi, AP & HoD, Dept. of E.C.E."
    ஒழுங்குபடுத்துபவர்="டா. K. வெங்கடலட்சுமி, உதவி பேராசிரியர் மற்றும் தலைவர், E.C.E துறை"
    Note="Each participant can submit 3–5 digital photos. Include title and short description for each photo."
  />
} />


      </Routes>
    </Router>
  );
}

export default App;
