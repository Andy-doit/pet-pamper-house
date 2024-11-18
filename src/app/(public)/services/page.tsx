import SortService from "@/components/sortService/page";
import { ServiceCards } from "../../../components/card/data";
import CardService from "@/components/card/cart.service";

const ServicePage = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="w-full h-[40px] bg-black text-center flex items-center justify-center">
                <p className="text-xl font-semibold text-orange-500 uppercase">
                    Dịch vụ hoàn hảo – Vì thú cưng là gia đình!
                </p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Sort Service Section */}
                <div className="py-4">
                    <SortService />
                </div>

                {/* Service Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
                    {ServiceCards.map((serviceInfor, index) => (
                        <div
                            key={index}
                            className="flex justify-center">
                            <CardService {...serviceInfor} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
