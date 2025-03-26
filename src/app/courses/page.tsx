
import ProgramAccordion from "@/components/Program-accordion"
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <main className="min-h-screen ">
            <header className="bg-primary text-white p-6 shadow-md">
                <div className="container mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold">Department of Journalism and Mass Communication</h1>
                    <p className="mt-2 text-sm md:text-base">Cultivating creative expression and media professionals</p>
                </div>
            </header>

            <section className="container mx-auto py-8 px-4">
                <div className="bg-red-50 p-4 rounded-md mb-6 border-l-4 border-red-500">
                    <p className="text-red-600 font-medium">
                        Note : 200/- towards library fee will be added in the programme fee.
                    </p>
                </div>

                <div className="space-y-4">
                    <ProgramAccordion
                        title="B.A. Journalism and Mass Communication (BAJMC)"
                        defaultOpen={true}
                        content={
                            <div className="space-y-4">
                                <p className="text-white">
                                    The Primary objective of Designing the programme curriculum for the undergrad is to cultivate within
                                    them an artistic perception to be whichever medium of creative expression they admire. The course also
                                    intends to create high functioning professionals in the Media industry. The Undergraduate coursework
                                    is specifically customised to ascertain that the students are equipped with the knowledge of the
                                    latest hardware used in the media industry along with imparting journalistic ethics and morality to
                                    the young mind. This personality building is done by performing fieldwork, social responsibilities
                                    assignments and inviting intellectuals from across the globe to interact with the students. Department
                                    of Journalism and Mass Communication invites applications for the program.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Eligibility</h3>
                                        <p>Intermediate from any recognized Board.</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Duration</h3>
                                        <p>3 Years</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Intake</h3>
                                        <p>50</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Program Fee</h3>
                                        <p>30,200/- Yearly</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Syllabus</h3>
                                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                                        Effective from : 2021-22
                                    </Button>
                                </div>
                            </div>
                        }
                    />

                    <ProgramAccordion
                        title="Post Graduate Diploma Programme in Journalism and Mass Communication (PGDJMC)"
                        content={
                            <div className="space-y-4">
                                <p className="text-white">
                                    The Post Graduate Diploma Programme in Journalism and Mass Communication is 1-year job-oriented diploma course. The Diploma Course is designed to impart professional skills to the student so that they can maneuver the Challenges of the fast-paced Media Industry. The Course is extensively crafted to provide technical skills required to secure quality jobs in the sector. A balance of field activities and theoretical knowledge provides an upper edge to the students while securing a job. Department of Journalism and Mass Communication invites applications for the program.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Eligibility</h3>
                                        <p className="text-white">Graduation in any stream from any  UGC recognized university/institute</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Duration</h3>
                                        <p>1 Years</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Intake</h3>
                                        <p>30</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Program Fee</h3>
                                        <p>40,200/- Yearly</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Syllabus</h3>
                                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                                        Effective from : 2019-20
                                    </Button>
                                </div>
                            </div>
                        }
                    />

                    <ProgramAccordion
                        title="Ph.D in Journalism and Mass Communication"
                        content={
                            <div className="p-4 text-white">
                                <p>Eligibility: The applicant should possess a Master’s Degree or equivalent from a recognized University/ Institution.</p>
                                <p>

                                    Department of Mass Communication offers Ph. D. program in Print Media, Broadcast Media, New Media, Film Studies, Integrated Marketing Communication. We especially focus on interdisciplinary research. Department of Journalism and Mass Communication invites applications for the program.
                                </p>
                            </div>
                        }
                    />

                    <ProgramAccordion
                        title="M.A. Journalism and Mass Communication (MAJMC)"
                        content={
                            <div className="space-y-4">
                                <p className="text-white">
                                    The inclination for higher learning in the field of Media and Communication sciences is the driving force in designing of Curriculum for the Post Graduate courses. In this course, the students customised to more serious and volatile issues looming within our society. As students from all educational backgrounds are admitted to this course the paradigm of learning also increases phenomenally. To ensure that every individual student can utilize the course to the fullest only a limited number of seats are released every academic year.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Eligibility</h3>
                                        <p>Graduation in any stream from a recognized university/Institute</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Duration</h3>
                                        <p>2 Years</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Intake</h3>
                                        <p>50</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Program Fee</h3>
                                        <p>40,200/- Yearly</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Syllabus</h3>
                                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                                        Effective from : 2022-23
                                    </Button>
                                </div>
                            </div>
                        }
                    />

                    <ProgramAccordion
                        title="M.A. Journalism and Mass Communication (MAJMC)- Lateral Entry"
                        content={
                            <div className="space-y-4">
                                <p className="text-white">
                                    The programme will focus on students seeking to further enhance their knowledge in the field after completing their diplomas.  This course will be focused on acquiring deeper Knowledge and understanding of advancements in technologies.

                                    Besides this, it also ensures the eligibility of the student for examinations seeking post-graduation. Department of Mass Communication invites applications for the program.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Eligibility</h3>
                                        <p>Any Post Graduate diploma from Journalism and Mass Communication/ Equivalent from UGC recognized university/institute.</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Duration</h3>
                                        <p>1 Years</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Intake</h3>
                                        <p>10</p>
                                    </div>
                                    <div className=" p-4 rounded-md">
                                        <h3 className="font-medium">Program Fee</h3>
                                        <p>41,000/- Yearly</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-2">Syllabus</h3>
                                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                                        POs COs PSOs
                                    </Button>
                                </div>
                            </div>
                        }
                    />
                </div>
            </section>

            {/* <footer className="bg-gray-800 text-white p-6 mt-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <p>Department of Journalism and Mass Communication</p>
                            <p>Email: journalism@example.edu</p>
                            <p>Phone: +91 1234567890</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Programs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Faculty
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Admissions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-primary">
                                    Facebook
                                </a>
                                <a href="#" className="hover:text-primary">
                                    Twitter
                                </a>
                                <a href="#" className="hover:text-primary">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-gray-700 text-center">
                        <p>© {new Date().getFullYear()} Department of Journalism and Mass Communication. All rights reserved.</p>
                    </div>
                </div>
            </footer> */}
        </main>
    )
}

