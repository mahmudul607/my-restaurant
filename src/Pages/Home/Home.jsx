import BookTable from "../../components/BookTable/BookTable";
import CustomersSay from "../../components/CustomersSay/CustomersSay";
import Footer from "../../components/Footer/Footer";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import PopularProduct from "../../components/PopularProduct/PopularProduct";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
           <HeaderCard></HeaderCard>

           {/* services area */}
           <Services></Services>

           {/* popular products */}
           <PopularProduct></PopularProduct>

            {/* Book table */}
           <BookTable></BookTable>
            {/*Customers Say  */}
            <CustomersSay></CustomersSay>
            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default Home;