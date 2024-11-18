import CardGroup from "@/components/main/card.group";

const AboutPage = () => {
    return (
        <div className="bg-gradient-to-tr from-pink-400 to-yellow-500 shadow-lg min-h-screen">
            <main className="container mx-auto px-6 sm:px-10 py-16 flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
                {/* Image and Text Overlay */}
                <div className="relative w-full lg:w-1/2">
                    <CardGroup />
                </div>

                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    {/* Section Title */}
                    <p className="font-bold text-4xl sm:text-5xl lg:text-6xl uppercase text-white mb-6">
                        Về Chúng Tôi
                    </p>

                    {/* Introductory Sentence */}
                    <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium italic">
                        Tại PetPamperHouse, chúng tôi không chỉ kết nối mà còn chăm sóc!
                    </p>

                    {/* Description */}
                    <p className="text-white mt-6 text-base sm:text-lg lg:text-xl font-light leading-relaxed italic">
                        Là nền tảng trung gian chuyên biệt dành riêng cho thú cưng, chúng tôi tự hào mang đến giải pháp tiện lợi, minh bạch và đáng tin cậy để bạn tìm kiếm các dịch vụ chăm sóc thú cưng tốt nhất. Từ spa, grooming, đến chăm sóc y tế – tất cả đều được tối ưu hóa để đảm bảo sự hài lòng của bạn và sự thoải mái cho thú cưng.
                    </p>

                    {/* Why Choose Us Section */}
                    <p className="text-white mt-8 text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed">
                        Tại sao chọn chúng tôi?
                    </p>
                    <p className="text-white mt-4 text-sm sm:text-base lg:text-lg font-light leading-relaxed italic">
                        🌟 **Đa dạng lựa chọn**: Hàng trăm dịch vụ từ những đối tác spa thú cưng uy tín. <br />
                        🌟 **Đặt lịch nhanh chóng**: Chỉ vài cú nhấp chuột, thú cưng của bạn đã có buổi spa lý tưởng. <br />
                        🌟 **Cam kết chất lượng**: Đội ngũ đối tác của chúng tôi được kiểm duyệt nghiêm ngặt, đảm bảo an toàn và chất lượng.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
