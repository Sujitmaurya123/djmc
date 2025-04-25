import Image from 'next/image';

const NewsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white mt-8 mb-8 shadow text-gray-700">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">दिनांक 23 अप्रैल 2025 को विवेकानंद युवा सशक्तिकरण योजना के अंतर्गत छत्रपति शाहू जी महाराज विश्वविद्यालय कानपुर के पत्रकारिता एवं जनसंचार विभाग में सत्र  2024- 2025 के बीएजेएम,एमएजेएमसी, पीएचडी के छात्र छात्राओं को टेबलेट/स्मार्टफोन का वितरित किये गए </h1>
            <div className="w-[400px] h-64 relative mb-4">
                <Image
                    src="/images/news8.jpg"
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
           
              


        </div>
    );
};

export default NewsPage;
