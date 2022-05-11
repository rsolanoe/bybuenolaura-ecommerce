import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductInfo from "../components/ProductInfo";


const Product = () => {

   window.scrollTo(0, 0)

   return (
         <>
            <Announcement />
            <Navbar />
            <ProductInfo />
            <Newsletter />
            <Footer />
         </>
   );
};

export default Product;
