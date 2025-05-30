import Image from 'next/image';

const NewsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white mt-8 mb-8 shadow text-gray-700">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">नाट्य प्रतियोगिता में सीएसजेएमयू को प्रथम स्थान, भाषण में दूसरा स्थान; राजभवन में हुआ राज्यस्तरीय आयोजन</h1>
            <div className="w-[400px] h-64 relative mb-4">
                <Image
                    src="/images/event3.jpg"
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <ul className="text-lg text-gray-700">
                <li>   कानपुर, 8 मार्च 2025। उत्तर प्रदेश की राज्यपाल और कुलाधिपति श्रीमती आनंदीबेन पटेल के मार्गदर्शन में अंतर्राष्ट्रीय महिला दिवस के उपलक्ष्य में राजभवन, लखनऊ में आयोजित राज्यस्तरीय भाषण एवं नाट्य प्रतियोगिता में छत्रपति शाहू जी महाराज विश्वविद्यालय, कानपुर के छात्रों ने उत्कृष्ट प्रदर्शन करते हुए नाट्य प्रतियोगिता में प्रथम और भाषण प्रतियोगिता में द्वितीय स्थान प्राप्त किया।</li>

                <li className='mt-5'>   इस राज्य स्तरीय फाइनल प्रतियोगिता में प्रदेश के विभिन्न विश्वविद्यालयों के प्रतिभागी छात्रों ने भाग लिया। सीएसजेएमयू की नाट्य टीम ने अपनी प्रस्तुति के माध्यम से निर्णायक मंडल और दर्शकों को प्रभावित करते हुए सभी विश्वविद्यालयों में सर्वोच्च स्थान प्राप्त किया। टीम में कांची त्रिपाठी, सुन्दरम मिश्रा, ओजस्वी दीक्षित, शरद, आदर्श सिंह चौहान, विभांश वर्मा, अनंत सक्सेना, सुमित तिवारी और अथर्व मिश्रा शामिल थे।</li>

                <li className='mt-5'>भाषण प्रतियोगिता में विश्वविद्यालय की छात्रा नंदिनी दुबे ने दमदार वक्तव्य के साथ दूसरा स्थान प्राप्त किया। भाषणों के विषयों में दहेज प्रथा उन्मूलन, विकसित भारत और बाल विवाह जैसे सामाजिक मुद्दे शामिल थे, जबकि नाट्य प्रस्तुतियों में द्रौपदी वस्त्रहरण, राम वनवास और अहिल्याबाई होलकर जैसे पौराणिक और ऐतिहासिक विषयों को मंचित किया गया।</li>

                <li className='mt-5'>इस प्रतियोगिता की रूपरेखा तीन स्तरों पर निर्धारित की गई थी। पहले स्तर पर संबद्ध महाविद्यालयों में प्रतियोगिता हुई, दूसरे स्तर पर ग्रुप के अंतर्गत आने वाले विश्वविद्यालयों में, और तृतीय एवं अंतिम स्तर पर राज्य के छह ग्रुपों के विजेता विश्वविद्यालयों के मध्य राजभवन लखनऊ में फाइनल मुकाबला हुआ।</li >

                <li className='mt-5'>राज्यपाल श्रीमती आनंदीबेन पटेल ने सभी विजयी छात्रों को शुभकामनाएं देते हुए कहा कि विश्वविद्यालयों के छात्र आज शिक्षा के साथ - साथ विभिन्न कौशलों में भी आगे बढ़ रहे हैं, जो समाज के लिए सकारात्मक संकेत है।</li >

                <li className='mt-5'>सीएसजेएमयू के कुलपति प्रो.विनय कुमार पाठक ने विद्यार्थियों को बधाई देते हुए कहा कि यह उपलब्धि न केवल उनकी तर्कशक्ति और अभिव्यक्ति क्षमता का प्रमाण है, बल्कि उनकी सांस्कृतिक चेतना और सामूहिक रचनात्मकता को भी दर्शाती है।</li >

                <li className='mt-5'>इस अवसर पर क्राइस्ट चर्च कॉलेज से प्रो.मीत कमल और विश्वविद्यालय परिसर से डॉ.रश्मि गोरे भी छात्र प्रतिनिधियों के साथ उपस्थित रहीं।</li >
            </ul>
              


        </div>
    );
};

export default NewsPage;
