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
            <p className="text-lg text-gray-700">
                आजकल के मुकाबले वाले दौर में, अगर आप संचार के क्षेत्र में नौकरी करना चाहते हैं तो सिर्फ डिग्री होना काफी नहीं है। आपको कुछ खास हुनर सीखने होंगे जो नौकरी देने वाले लोग ढूंढते हैं। जनसंपर्क, पत्रकारिता, डिजिटल मार्केटिंग, कॉर्पोरेट कम्युनिकेशन या ऐसे ही दूसरे क्षेत्रों में सफल होने के लिए, आपको कॉलेज के दिनों में ही कुछ जरूरी हुनर सीखने होंगे ताकि आप दूसरों से आगे निकल सकें। इस लेख में हम उन्हीं जरूरी हुनर के बारे में बात करेंगे।मौखिक और लिखित संचार कौशल: सफलता के लिए स्पष्ट और प्रभावी ढंग से संवाद करना ज़रूरी है।
            </p>
        </div>
    );
};

export default NewsPage;
