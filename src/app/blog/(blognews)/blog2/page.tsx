import Image from 'next/image';

const NewsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white mt-8 mb-8 shadow">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">विश्वविद्यालय में विकसित करने योग्य कौशल जो संचार उद्योग में नियोक्ताओं द्वारा मांगे जाते हैं</h1>
            <div className="w-[400px] h-64 relative mb-4">
                <Image
                    src="/images/blog2.png"
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <ul className="text-lg text-gray-700">
                <li>  आजकल के मुकाबले वाले दौर में, अगर आप संचार के क्षेत्र में नौकरी करना चाहते हैं तो सिर्फ डिग्री होना काफी नहीं है। आपको कुछ खास हुनर सीखने होंगे जो नौकरी देने वाले लोग ढूंढते हैं। जनसंपर्क, पत्रकारिता, डिजिटल मार्केटिंग, कॉर्पोरेट कम्युनिकेशन या ऐसे ही दूसरे क्षेत्रों में सफल होने के लिए, आपको कॉलेज के दिनों में ही कुछ जरूरी हुनर सीखने होंगे ताकि आप दूसरों से आगे निकल सकें। इस लेख में हम उन्हीं जरूरी हुनर के बारे में बात करेंगे।मौखिक और लिखित संचार कौशल: सफलता के लिए स्पष्ट और प्रभावी ढंग से संवाद करना ज़रूरी है।</li>
                <li className='mt-5'>बोलने और लिखने की कला: संचार के क्षेत्र में सफल होने के लिए, अपनी बात को स्पष्ट और प्रभावशाली ढंग से रखना ज़रूरी है। क्या करें: नियमित रूप से लेखन का अभ्यास करें (ब्लॉग, लेख, रिपोर्ट लिखें), सार्वजनिक भाषण और प्रस्तुति देने की कला में सुधार करें, और औपचारिक लेखन (जैसे ईमेल, रिपोर्ट) में निपुणता हासिल करें।</li>
                <li className='mt-5'> क्या न करें: अस्पष्ट भाषा का इस्तेमाल न करें और व्याकरण या वर्तनी की गलतियाँ करने से बचें।</li>

                <li className='mt-5'>डिजिटल और सोशल मीडिया कौशल</li >
                <li className='mt-5'>आजकल संचार जगत में डिजिटल माध्यमों का बहुत महत्व है, इसलिए सोशल मीडिया की जानकारी आवश्यक है।</li >

                <li className='mt-5'><strong>क्या करें:</strong></li >

                <li className='mt-5'>  विभिन्न सोशल मीडिया प्लेटफ़ॉर्म(जैसे फेसबुक, लिंक्डइन, ट्विटर, इंस्टाग्राम) के लिए प्रभावी रणनीति बनाना सीखें।</li >
                <li className='mt-5'> आकर्षक सामग्री(कंटेंट) बनाना और सोशल मीडिया मार्केटिंग का अभ्यास करें।</li >
                <li className='mt-5'> एसईओ(सर्च इंजन ऑप्टिमाइजेशन) और डेटा विश्लेषण की समझ विकसित करें।</li >
                <li className='mt-5'>  <strong>क्या न करें:</strong></li >

                <li className='mt-5'>  सोशल मीडिया को केवल मनोरंजन का साधन न समझें, बल्कि इसे एक महत्वपूर्ण व्यावसायिक कौशल के रूप में विकसित करें।</li >
                <li className='mt-5'> भ्रामक या अपूर्ण जानकारी साझा न करें।</li >
                <li className='mt-5'>आलोचनात्मक सोच और समस्या का समाधान</li >
                <li className='mt-5'>संचार उद्योग में तुरंत फैसले लेने और समस्याओं को हल करने की क्षमता ज़रूरी है।</li >

                <li className='mt-5'>  <strong>क्या  करें:</strong></li >

                <li className='mt-5'>न्यूज़ रिपोर्ट और संचार अभियानों का विश्लेषण करें।</li >
                <li className='mt-5'> अलग - अलग नज़रियों से सोचकर सही फैसले लें।</li >
                <li className='mt-5'><strong>क्या न करें:</strong></li >

                <li className='mt-5'> पूरी जानकारी के बिना जल्दबाज़ी में समस्या न सुलझाएं।</li >
                <li className='mt-5'>  बिना सोचे - समझे किसी नतीजे पर न पहुंचें।</li >
                <li className='mt-5'>नेटवर्किंग और पारस्परिक कौशल(Networking and Interpersonal Skills)</li >
                <li className='mt-5'>  संचार क्षेत्र में संबंध बनाना और बनाए रखना बहुत महत्वपूर्ण है।</li >
                <li className='mt-5'><strong>क्या करें:</strong></li >

                <li className='mt-5'>उद्योग से जुड़े पेशेवरों से मिलें और कनेक्ट करें।</li >

                <li className='mt-5'>टीमवर्क और सहयोग(Collaboration) की भावना विकसित करें।</li >

                <li className='mt-5'>इंटर्नशिप और कार्यशालाओं(Workshops) में भाग लें।</li >

                <li className='mt-5'><strong>क्या न करें:</strong></li >

                <li className='mt-5'>नेटवर्किंग को केवल लाभ के रूप में न देखें; सच्चे और मजबूत संबंध बनाएं।</li >

                <li className='mt-5'>संचार में केवल औपचारिकता न रखें, बल्कि विश्वास भी बनाएँ।</li >

                <li className='mt-5'>  रचनात्मकता और कहानी कहने की कला: संचार के क्षेत्र में अच्छी कहानियाँ सुनाना बहुत ज़रूरी है।</li >
                <li className='mt-5'>  क्या करें: कहानियाँ लिखें, नए विचार सोचें, और तस्वीरों, वीडियो और मीम्स से कहानी कहना सीखें।</li >

                <li className='mt-5'>क्या न करें: सिर्फ पुराने तरीकों पर ही निर्भर न रहें, और ऐसा कंटेंट न बनाएं जो उबाऊ हो।</li >

                <li className='mt-5'>अनुकूलन क्षमता और नवीनतम रुझानों के बारे में जानकारी:</li >
                <li className='mt-5'>संचार उद्योग में लगातार बदलाव होते रहते हैं, इसलिए नई तकनीकों और रुझानों के साथ तालमेल बनाए रखना ज़रूरी है।</li >

                <li className='mt-5'><strong>क्या करें:</strong></li >

                <li className='mt-5'>उद्योग की खबरों और नए रुझानों के बारे में नियमित रूप से जानकारी प्राप्त करते रहें।</li >
                <li className='mt-5'>संचार के विभिन्न माध्यमों(पुराने और नए) को समझें।</li >
                <li className='mt-5'>AI, डेटा विज़ुअलाइज़ेशन, पॉडकास्टिंग, वीडियो एडिटिंग जैसे नए उपकरणों और तकनीकों को सीखने के लिए तैयार रहें।</li >
                <li className='mt-5'> <strong>क्या न करें:</strong></li >

                <li className='mt-5'>  पुरानी रणनीतियों से चिपके न रहें; हमेशा नई चीजें सीखने के लिए तैयार रहें।</li >
                <li className='mt-5'>बदलते रुझानों को नज़रअंदाज़ न करें।</li >
                <li className='mt-5'>  अनुसंधान और विश्लेषण कौशल:</li >
                <li className='mt-5'>  संचार के क्षेत्र में डेटा और अनुसंधान का बहुत महत्व है। नियुक्तिकर्ता ऐसे उम्मीदवार चाहते हैं जो डेटा के आधार पर रणनीतियां और अभियान बना सकें।</li >

                <li className='mt-5'> <strong>  क्या करें:</strong></li >

                <li className='mt-5'>अपनी शोध करने और रिपोर्ट लिखने की क्षमता को बेहतर बनाएं।</li >
                <li className='mt-5'>डेटा के स्रोतों(जैसे कि सर्वेक्षण, बाजार अनुसंधान और मीडिया विश्लेषण) को समझें।</li >
                <li className='mt-5'>जानकारी को कम शब्दों में और प्रभावशाली तरीके से पेश करें।</li >
                <li className='mt-5'> <strong> क्या न करें:</strong></li >

                <li className='mt-5'>बिना तथ्यों की जांच किए कोई भी जानकारी आगे न फैलाएं।</li >
                <li className='mt-5'>सिर्फ ऊपरी तौर पर जानकारी हासिल न करें, बल्कि गहराई से अध्ययन करें।</li >
                <li className='mt-5'>संचार उद्योग में सफल होने के लिए अपने कॉलेज के दिनों का सही इस्तेमाल करें। किताबों से ज्ञान लेने के साथ - साथ, व्यावहारिक कौशल भी विकसित करें। लेखन, बोलने की कला, अनुसंधान, डिजिटल प्लेटफॉर्म का ज्ञान और लोगों से संपर्क(नेटवर्किंग) बनाने की क्षमता आपके करियर को बेहतर बनाएगी</li >
            </ul>
        </div>
    );
};

export default NewsPage;
