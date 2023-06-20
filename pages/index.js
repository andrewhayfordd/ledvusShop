import HeroBanner from "../Components/HeroBanner";
import Product from "@/Components/Product";
import { client } from "@/lib/client";


function Home({ products, bannerData }) {
  return (
    <div className='Home'>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {console.log(bannerData)}

      <div className="producthead">
        <h1>Shop Here for Best Products</h1>
        <p>Shop with us to get the best from us</p>
      </div>

      <div className="productscontainer">
        {products?.map((product) => <Product key={product._id} 
        product={product}/>)}
      </div>

    </div>
  )
}

export const getServerSideProps = async () =>{
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
      props: { products, bannerData }
  }
}

export default Home;
