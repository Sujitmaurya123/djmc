import Image from 'next/image';

const NewsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white mt-8 mb-8 shadow text-gray-700">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">CSJMU presents Kanpur&apos;s first-ever film-making workshop! 🎬📽 We&apos;re hosting a 3-day extravaganza of creativity and learning, starting from April 15th.</h1>
            <div className="w-[400px] h-64 relative mb-4">
                <Image
                    src="/images/news9.jpg"
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <ul className="text-lg text-gray-700">
                <li><strong>Lights, Camera, Action!</strong></li>
                <li>  CSJMU presents Kanpur&apos;s first-ever film-making workshop! 🎬📽 We&apos;re hosting a 3-day extravaganza of creativity and learning, starting from April 15th.</li>

                <li className='mt-5'>Unleash Your Inner Filmmaker</li>

                <li className='mt-5'>We&apos;re providing hands-on experience in film-making, guided by industry experts. Learn the art of storytelling, cinematography, and more. Join us and bring your vision to life! 🌟</li>

                <li className='mt-5'>Workshop Highlights</li >

                <li className='mt-5'> - Expert guidance from renowned filmmakers</li >
                <li className='mt-5'>- Hands-on experience in film-making</li>
                <li className='mt-5'>- Networking opportunities with fellow creatives</li>
                <li className='mt-5'>- Takeaway skills and memories to last a lifetime</li>
                <li className='mt-5'>Join Us!</li>
                <li className='mt-5'>We&apos;re excited to have you as part of Kanpur&apos;s film-making revolution! Don&apos;t miss out on this chance to kickstart your film-making journey. #FilmMakingWorkshop #CSJMU #Kanpur #AsimBajaj #Cinematography #FilmSchool #CreativeLearning #MakeYourMark #FilmIndustry #WorkshopAlert</li>
                <li className='mt-5'>Go to - <a className=' cursor-pointer text-blue-500' href="https://www.instagram.com/reel/DIf5dA4ymoA/?igsh=cnZxMzR2Ymw1OGUy">https://www.instagram.com/reel/DIf5dA4ymoA/?igsh=cnZxMzR2Ymw1OGUy</a></li>
            </ul>
              


        </div>
    );
};

export default NewsPage;
