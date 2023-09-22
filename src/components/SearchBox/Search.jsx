import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Search = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-3 mt-5 mb-4">Our Menu</h1>

      <div className="mx-auto w-75 mb-4">

        <input className="mb-3 w-75 py-3" type="search" name="" id="" /> <button className="py-3 px-5 border btn btn-success">Search </button>
      </div>
      <Navbar bg="light" data-bs-theme="light">
        <Container className='d-flex justify-content-center align-items-center'>
          <Nav className="">
            <div className="gap-5 d-flex justify-content-center align-items-center flex-wrap">
              <div>
                <button className="text-dark btn btn-outline-warning">All</button>
              </div>

              <div>
                <button className="text-dark btn btn-outline-warning">Beverages</button>
              </div>

              <div>
                <button className="text-dark btn btn-outline-warning">Meat</button>
              </div>

              <div>
                <button className="text-dark btn btn-outline-warning">Vegetarian</button>
              </div>

              <div>
                <button className="text-dark btn btn-outline-warning">Daily Special</button>
              </div>

              <div>
                <button className="text-dark btn btn-outline-warning">Deals</button>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Search;
