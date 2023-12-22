import CommonSection from "../UI/CommonSection";
import Helmet from '../../Components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../../Styles/Shop.css';
import products from '../../assets/Data/products';
import { useState } from "react";
import ProductsList from '../../Components/UI/ProductsList';
const Shop=()=> {
const[productsData,setProductsData]=useState(products)
const handleFilter=e=>{
  const filterVaue=e.target.value
  if(filterVaue==="sofa"){
    const filteredProducts=productsData.filter(
      item=>item.category==="sofa")
      setProductsData(filteredProducts);
  }
  if(filterVaue==="mobile"){
    const filteredProducts=productsData.filter(
      item=>item.category==="mobile")
      setProductsData(filteredProducts);
  }
  if(filterVaue==="watch"){
    const filteredProducts=productsData.filter(
      item=>item.category==="watch")
      setProductsData(filteredProducts);
  }
  if(filterVaue==="chair"){
    const filteredProducts=productsData.filter(
      item=>item.category==="chair")
      setProductsData(filteredProducts);
  }
  if(filterVaue==="wireless"){
    const filteredProducts=productsData.filter(
      item=>item.category==="wireless")
      setProductsData(filteredProducts);
  }





}
const handleSearch=e=>{
  const searchTerm=e.target.value


  const searchedProducts=products.filter(item=>item.productName.
    toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setProductsData(searchedProducts)
}

 return (
    <Helmet title='Shop'>
      <CommonSection title="products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter_widget">
                <select>
                  <option>Filter By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search_box">
                <input type="text" placeholder="Search...."  onChange={handleSearch}/>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
<Row>
  {
    productsData.length===0?<h1 className="text-center fs-4">No products are found!</h1>:
    <ProductsList data={productsData}/>
  }
</Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Shop;
