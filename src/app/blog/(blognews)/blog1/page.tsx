import Image from 'next/image';

const NewsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white mt-8 mb-8 shadow">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">भ्रामक खबरों व वीडियो की सत्यता की जांच</h1>
            <div className="w-[400px] h-64 relative mb-4">
                <Image
                    src="/images/blog1.png"
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <ul className="text-lg text-gray-700">
                <li>  यू पी जर्नलिस्ट एसोसिएशन (UPJA), और डाटा लीडस् संस्था द्वारा गूगल न्यूज इनिश्यटिव – भारत के तकनीकी सहयोग से भ्रामक खबरों व वीडियो की सत्यता की जांच के लिए पत्रकार प्रशिक्षण फैक्ट चेक कार्यशाला आयोजित की गई। गूगल न्यूज़ इनिशिएटिव इंडिया के विश्व-व्यापी फैक्ट चेक कार्यक्रम द्वारा समर्थित इस कार्यशाला में पत्रकारों को ऑनलाइन फैक्ट चेक टूल्स पर प्रक्षिक्षण दिया गया। कोरोना काल में स्वास्थ्य सम्बन्धी झूठी जानकारियों, अफवाहों, भ्रामक व तोड़-मोड़ के बनाई गई ख़बरों, फोटो, वीडियो और स्रोत की जांच के लिए गूगल रिवर्स इमेज सर्च, इनविड सॉफ्टवेयर, वाच फ्रेम बाय फ्रेम, जेफ़री इमेज मेटा डाटा व्यूअर आदि टूल्स की व्यापक जानकारी व डेमो दिया गया। जेफरी इमेज मेटा डाटा व्यूअर के माध्यम से फोटो को सुरक्षित तरीके से वेबपोर्टल से साझा करने की जानकारी दी गई।</li>
                <li className='mt-6'>प्रेम किशोर शुक्ल ने तथ्यों की जांच को आवश्यक बताते हुए फेक न्यूज के खिलाफ सभी पत्रकारों को एकजुट होने का संदेश दिया। । मुख्य वक्ता एवं प्रक्षिशक के तौर पर श्री निमिष कपूर, प्रधान वैज्ञानिक, विज्ञान प्रसार शामिल हुए। गूगल न्यूज इनिश्यटिव इंडिया ट्रेनिंग नेटवर्क के सदस्य श्री कपूर ने सहभागियों को विस्तार से फैक्ट चेक टूल्स की जानकारी दी एवं तमाम प्रश्नों व जिज्ञासाओं का समाधान भी किया। श्री कपूर ने कहा कि आज स्वास्थ्य सम्बन्धी भ्रामक खबरों के साथ ही सोशल मीडिया जैसे व्हाट्स-एप आदि पर वायरल फोटो व विडियो की जांच आवश्यक है। उसके बाद ही मुख्य धारा रिपोर्टिंग में इसे शामिल किया जाना चाहिए। यदि खबर फर्जी हो तो भी मीडिया द्वारा पाठकों व दर्शकों को सावधान करने की आवश्यकता है।</li>
            </ul>
        </div>
    );
};

export default NewsPage;
