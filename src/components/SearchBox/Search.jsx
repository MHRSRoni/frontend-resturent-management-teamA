import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Search = () => {
    return (
        <div className='container '>
            <h1 className='text-center mb-3'>Our Menu</h1>
            <Navbar bg="light" data-bs-theme="light">
                <Container className="justify-content-center">

                    <Nav className="">

                        <div className="d-flex justify-content-center align-items-center gap-5">

                            <div>

                                <button className='text-dark btn btn-outline-warning'>All</button>
                            </div>

                            <div>

                                <button className='text-dark btn btn-outline-warning'>Beverages</button>
                            </div>

                            <div>

                                <button className='text-dark btn btn-outline-warning'>Meat</button>
                            </div>

                            <div>

                                <button className='text-dark btn btn-outline-warning'>Vegetarian</button>
                            </div>

                            <div>

                                <button className='text-dark btn btn-outline-warning'>Daily Special</button>
                            </div>

                            <div>

                                <button className='text-dark btn btn-outline-warning'>Deals</button>
                            </div>

                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Search;