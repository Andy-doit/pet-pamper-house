import CardShop from "@/components/card/card.shop"
import { Shop } from "../../../components/card/data"
import SortService from "@/components/sortService/page"
const ShopPage = () => {
    return (
        <div className="h-screen">
            {/* Header Section */}
            <div className="w-full h-[40px] bg-black text-center flex items-center justify-center ">
                <p className="text-xl font-semibold text-orange-500 uppercase">
                    Lấy chữ tín đặt lên hàng đầu
                </p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-4">
                    <SortService />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
                    {Shop.map((shopInfor, index) => (
                        <div
                            key={index}
                            className="flex justify-center">
                            <CardShop {...shopInfor} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ShopPage 