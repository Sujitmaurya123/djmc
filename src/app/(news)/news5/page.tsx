import Image from 'next/image';

const NewsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white mt-8 mb-8 shadow text-gray-700">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">सीएसजेएमयू में ‘एक राष्ट्र एक चुनाव’ विषय पर जिला स्तरीय यूथ पार्लियामेंट प्रतियोगिता का समापन</h1>
            <div className="w-[400px] h-64 relative mb-4">
                <Image
                    src="/images/news5.jpg"
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <ul className="text-lg text-gray-700">
                <li>   कानपुर, 20 मार्च 2025। युवा कार्यक्रम एवं खेल मंत्रालय, भारत सरकार के राष्ट्रीय सेवा योजना विभाग द्वारा आयोजित विकसित भारत यूथ पार्लियामेंट 2025 के अंतर्गत “एक राष्ट्र एक चुनाव” विषय पर आयोजित जिला स्तरीय द्विदिवसीय भाषण प्रतियोगिता का समापन छत्रपति शाहू जी महाराज विश्वविद्यालय, कानपुर के सेनानायक तात्या टोपे सीनेट हॉल में हुआ।</li>

                <li className='mt-5'>  यह आयोजन विश्वविद्यालय के कुलपति प्रो. विनय कुमार पाठक के संरक्षण में संपन्न हुआ। समापन दिवस पर मुख्य अतिथि एवं सभापति के रूप में उत्तर प्रदेश विधान परिषद सदस्य श्री अरुण पाठक, निदेशक महाविद्यालय विकास परिषद प्रो. राजेश कुमार द्विवेदी, अधिष्ठाता वाणिज्य संकाय प्रो. के. एन. मिश्रा, उच्च शिक्षा अधिकारी श्री मुरलीधर राम गुप्ता और कुलसचिव डॉ. अनिल कुमार यादव उपस्थित रहे।</li>

                <li className='mt-5'>राष्ट्रीय सेवा योजना के समन्वयक डॉ. श्याम मिश्रा ने बताया कि कानपुर नगर, कानपुर देहात, उन्नाव और फर्रुखाबाद जनपदों से कुल 130 छात्रों का ऑनलाइन स्क्रीनिंग के माध्यम से चयन किया गया था, जिनमें से 26 प्रतिभागियों ने अंतिम चरण में भौतिक रूप से भाग लिया।</li>

                <li className='mt-5'> प्रतियोगिता के निर्णायक मंडल में श्री अरुण पाठक(विधायक, विधान परिषद), प्रो.राजेश कुमार द्विवेदी, श्री रतन कुमार श्रीवास्तव(सेवानिवृत्त आई.पी.एस.), श्री गणेश तिवारी एवं श्रीमती प्रिया तिवारी(नेहरू युवा केंद्र, कानपुर देहात) शामिल रहे।</li >

                <li className='mt-5'>  तृतीय चरण के लिए चयनित प्रतिभागियों के नाम हैं: नीरू भदौरिया, सुदीप कृष्णा, रूपल श्रीवास्तव, खिजरा खान, वैष्णवी गुप्ता, हिया मिश्रा, सिदरा हरीम, कार्तिक रावत, अदीबा सिद्दीकी, और अनुष्का शुक्ला।</li >

                <li className='mt-5'>मुख्य अतिथि श्री अरुण पाठक ने प्रतिभागियों को एक राष्ट्र एक चुनाव विषय पर मौलिक चिंतन करने और लोकतांत्रिक प्रक्रियाओं में अपनी भागीदारी को मजबूत करने की सलाह दी। उन्होंने विषय पर अपने विचार भी साझा किए।</li >

                <li className='mt-5'>कार्यक्रम का संयोजन डॉ.प्रवीण कटियार एवं उनकी टीम द्वारा किया गया। धन्यवाद ज्ञापन कुलसचिव डॉ.अनिल कुमार यादव ने किया।</li >

                <li className='mt-5'>  इस अवसर पर डॉ.पुष्पा मेमोरिया, डॉ.राम मनोहर, डॉ.पंकज द्विवेदी सहित विश्वविद्यालय के विभिन्न विभागों के शिक्षकगण एवं विद्यार्थी उपस्थित रहे।</li >
           
            </ul>
              


        </div>
    );
};

export default NewsPage;
