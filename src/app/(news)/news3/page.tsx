import Image from 'next/image';

const NewsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white mt-8 mb-8 shadow text-gray-700">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">सीएसजेएमयू और आर्ट ऑफ़ लिविंग के बीच एमओयू, छात्रों के समग्र विकास की दिशा में बड़ा कदम</h1>
            <div className="w-[400px] h-64 relative mb-4">
                <Image
                    src="/images/news3.jpg"
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <ul className="text-lg text-gray-700">
                <li>  छात्रों के मानसिक सशक्तिकरण और समग्र विकास की दिशा में एक अहम पहल करते हुए छत्रपति शाहू जी महाराज विश्वविद्यालय (सीएसजेएमयू), कानपुर ने आर्ट ऑफ़ लिविंग फाउंडेशन के साथ एक समझौता ज्ञापन (MoU) पर हस्ताक्षर किए। यह साझेदारी छात्रों को तनाव प्रबंधन, भावनात्मक मजबूती और ध्यान केंद्रित करने जैसी महत्वपूर्ण क्षमताएं विकसित करने में मदद करेगी।</li> 

                <li className='mt-5'>   विश्वविद्यालय के सेंटर फॉर एकेडेमिक्स भवन में आयोजित इस समारोह में कुलपति प्रो. विनय कुमार पाठक, प्रतिकुलपति प्रो. सुधीर कुमार अवस्थी, कुलसचिव डॉ. अनिल कुमार यादव, डीन स्टूडेंट वेलफेयर प्रो. अंशू यादव, प्रो. संदीप कुमार सिंह, डॉ. किरन झा, डॉ. मानस उपाध्याय समेत कई वरिष्ठ संकाय सदस्य मौजूद रहे। आर्ट ऑफ़ लिविंग की ओर से कार्यक्रम निदेशक श्री राजेश जगासिया, श्री दीप गर्ग और श्री अर्चित सक्सेना ने प्रतिनिधित्व किया।</li> 

                <li className='mt-5'>कुलपति प्रो. पाठक ने कहा, “हमारे छात्र देश का भविष्य हैं, और यह विश्वविद्यालय का दायित्व है कि हम उन्हें संतुलित और पूर्ण जीवन के लिए आवश्यक संसाधन उपलब्ध कराएं। आर्ट ऑफ़ लिविंग के साथ यह साझेदारी छात्रों के मानसिक स्वास्थ्य को मजबूती देने की दिशा में एक क्रांतिकारी कदम है।”</li> 

                <li className='mt-5'>इस कार्यक्रम के अंतर्गत विश्वविद्यालय में आर्ट ऑफ़ लिविंग के युवा केंद्रित कार्यक्रम आयोजित किए जाएंगे, जिनमें प्रमुख रूप से सुदर्शन क्रिया, माइंडफुलनेस और इंटरैक्टिव वर्कशॉप शामिल होंगी। श्री राजेश जगासिया ने कहा, “जैसा मन, वैसा जीवन। आज की सूचना-प्रधान दुनिया में हर छात्र को अपने मन को संभालना आना चाहिए। यही आत्मविश्वास, स्पष्टता और अनुशासन का मार्ग है।”</li> 

                <li className='mt-5'>कार्यक्रम का संचालन डॉ.मानस उपाध्याय ने किया और इस अवसर पर एनएसएस, एनसीसी और विश्वविद्यालय के विभिन्न संकायों के सदस्य भी उपस्थित रहे।</li > 

                <li className='mt-5'>यह साझेदारी छात्रों को न केवल शैक्षणिक बल्कि व्यक्तिगत जीवन में भी तनाव, अवसाद और अनिश्चितताओं से निपटने में मदद करेगी। शोध बताते हैं कि सुदर्शन क्रिया जैसी प्रथाएं एकाग्रता और रचनात्मकता को बढ़ाने में अत्यंत सहायक होती हैं।</li > 
            </ul>
              


        </div>
    );
};

export default NewsPage;
