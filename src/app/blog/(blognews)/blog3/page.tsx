import Image from 'next/image';

const NewsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white mt-8 mb-8 shadow">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">साइबर क्राइम की अंधेरी दुनिया: हकीकत, खतरे और सुरक्षा की जरूरत</h1>
            <div className="w-[400px] h-64 relative mb-4">
                <Image
                    src="/images/blog3.jpg"
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <p className="text-lg text-gray-700">
                भारत सहित पूरी दुनिया में साइबर अपराध एक गंभीर और तेजी से बढ़ती हुई चुनौती बन चुका है। तकनीकी विकास ने जहां जीवन को आसान बनाया है, वहीं अपराधियों को भी नए तरीके और मंच प्रदान किए हैं। आज के दौर में अपराध केवल हथियार या ठगी तक सीमित नहीं रह गए हैं, बल्कि वे हमारे मोबाइल, कंप्यूटर और इंटरनेट कनेक्शन के जरिए हमारी जिंदगी में घुसपैठ कर रहे हैं।
                एक अनुभवी साइबर क्राइम एक्सपर्ट, अमित दुबे , ने बताया कि वे अब तक लगभग 750 से 800 करोड़ रुपये की रिकवरी में मदद कर चुके हैं। उन्होंने कई हाई-प्रोफाइल मामलों की जांच की है, जिनमें सरकार से जुड़े लोग, कॉरपोरेट जगत के दिग्गज और आम नागरिक सभी शामिल रहे हैं।
            </p>
        </div>
    );
};

export default NewsPage;
