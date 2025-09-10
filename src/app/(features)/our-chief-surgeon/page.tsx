import Link from "next/link";
import { BookNowButton } from "../../shared/components";

export default function OurChiefSurgeonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Meet Our Expert
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {" "}
              Chief Surgeon
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A Leading Dental Surgeon in Pune Specializing in Advanced
            Implantology and Cosmetic Dentistry
          </p>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-1 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform -rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-pink-100">
                <img
                  src="/images/doctors/sunny.jpeg"
                  alt="Dr. Sunny Sancheti - Dental Surgeon"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                {/* Credentials Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-pink-100">
                  <div className="text-center">
                    <div className="text-sm font-bold text-pink-600">
                      Implantologist
                    </div>
                    <div className="text-xs text-gray-600">
                      Cosmetic Dentist
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Chief Surgeon & Owner
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Dr. Sunny Sancheti
              </h2>

              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
                Advanced Implantology & Cosmetic Dentistry
              </h3>

              <div className="space-y-4 text-gray-600 mb-8">
                <p className="text-lg font-medium text-gray-700">
                  Distinguished dental surgeon and owner of Kia Dental Clinic,
                  specializing in implantology and cosmetic dentistry.
                </p>

                <p className="leading-relaxed">
                  Dr. Sunny Sancheti is a prominent figure in the field of
                  implantology and cosmetic dentistry with a remarkable track
                  record of over 3,000 successful implant placements. He is
                  recognized for his expertise in complex procedures, including
                  All-on-4 and All-on-6 implant techniques.
                </p>

                <p className="leading-relaxed">
                  His commitment to integrating digital technology into his
                  practice has resulted in a highly predictable treatment model
                  with a reported success rate of 97.5%, ensuring patient
                  comfort and a virtually pain-free experience. He is also
                  highly skilled in aesthetic procedures such as veneers and
                  cosmetic fillings.
                </p>

                <p className="leading-relaxed font-medium text-gray-700">
                  Dr. Sancheti&apos;s dedication to leveraging advanced dental
                  technologies has made Kia Dental Clinic a preferred choice for
                  patients seeking comprehensive and predictable dental
                  solutions in Pune.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookNowButton variant="primary" size="large">
                  Book Consultation
                </BookNowButton>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-2 text-pink-600 font-semibold rounded-lg border-2 border-pink-200 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300"
                >
                  Our Services
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Areas of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {" "}
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized skills in advanced implantology, cosmetic dentistry,
              and digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise Items */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Advanced Implantology (All-on-4 & All-on-6)
              </h3>
              <p className="text-gray-600">
                Expert in complex full-arch rehabilitations with over 3,000
                successful implant placements.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Digital Dentistry & Predictable Outcomes
              </h3>
              <p className="text-gray-600">
                Utilizing modern technology for precise treatment planning and a
                97.5% success rate.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cosmetic Dentistry & Smile Makeovers
              </h3>
              <p className="text-gray-600">
                Highly skilled in aesthetic procedures like veneers and anterior
                cosmetic fillings to create beautiful smiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Procedures Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {" "}
                Procedures
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Offering a range of high-quality, predictable dental solutions for
              optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    All-on-4® & All-on-6® Dental Implants
                  </h3>
                  <p className="text-gray-600">
                    Revolutionary solutions for patients with significant tooth
                    loss, providing a stable, long-term result.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Dental Veneers & Cosmetic Fillings
                  </h3>
                  <p className="text-gray-600">
                    Popular cosmetic solutions for enhancing the appearance of
                    teeth, with high long-term success rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100 md:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Patient-Centric Care
                  </h3>
                  <p className="text-gray-600">
                    Focused on providing a comfortable, virtually pain-free
                    experience with a friendly and cooperative team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <BookNowButton variant="primary" size="large">
              Schedule Consultation with Dr. Sancheti
            </BookNowButton>
          </div>
        </div>
      </section>
    </main>
  );
}
