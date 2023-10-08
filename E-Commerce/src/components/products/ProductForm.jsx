import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { addNewProduct, editProduct, getProductById } from '../../API/ProductWithServer';

export function ProductForm() {
  let { id } = useParams();
  // Convert id to a number and set it to 0 if it's not provided or not a valid number
  id = parseInt(id) || 0;
  
  const navigate = useNavigate();
  
  const [formValue, setFormValue] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const [product, setProduct ] = useState({})

  useEffect(() => {
    if( id != 0){
      let fetchData = async () => {
        // Fetch the existing product data using getProductById
        try {
          const responce = await getProductById(id)
          setProduct( responce.data)
          setFormValue(responce.data);
        } catch (error) {
          console.log('error Get product by id');
        }
      }
      fetchData()
      }
  }, [id]);

  const getInputValue = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const formOperation = (e) => {
    e.preventDefault();
    if (id !== 0) {
      // If in edit mode, call editProduct
      editProduct(id , formValue).then(()=>{
        navigate('/products');
      })
    } else {
      // If in add mode, call addNewProduct
      addNewProduct( formValue ).then(() =>{
        navigate('/products')
      })
    }
  };

  return (
    <section className="bg-dark text-light m-5 p-5 fs-3 rounded">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0 rounded"
              src="https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="..."
            />
          </div>
          <div className="col-md-6 ">
            <h1>{id !== 0 ? 'Edit Product' : 'Add New Product'}</h1>
            <Form onSubmit={formOperation}>
              <div className="small mb-1">
                {/* <input
                  name="id"
                  className="form-control mb-3"
                  onChange={getInputValue}
                  value={formValue.id}
                  type="number"
                  placeholder="Enter product id"
                  readOnly={id !== 0}
                /> */}
              </div>
              <h1 className="display-5 fw-bolder">
                <input
                  name="name"
                  className="form-control mb-3"
                  onChange={getInputValue}
                  value={formValue.name}
                  type="text"
                  placeholder="Enter product name"
                />
              </h1>
              <div className="small mb-1">
                <input
                  name="price"
                  className="form-control mb-3"
                  onChange={getInputValue}
                  value={formValue.price}
                  type="number"
                  placeholder="Enter product price"
                />
              </div>
              <div className="small mb-1">
                <input
                  name="quantity"
                  className="form-control mb-3"
                  onChange={getInputValue}
                  value={formValue.quantity}
                  type="number"
                  placeholder="Enter product quantity"
                />
              </div>
              <button className="btn btn-outline-warning mt-3" type="submit">
                {id === 0 ? 'Add New Product' : 'Save Changes'}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
