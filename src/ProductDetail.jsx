import {Link} from 'react-router-dom';
import { useFirebase } from './Firebase';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"

export default function ProductDetail(){
const navigate= useNavigate();
  const firebase=useFirebase()
  const { getAllProductFunction, getAllProduct,deleteProduct  } = firebase;
  useEffect(() => {
    getAllProductFunction();
  }, []); 
  const handleDelete = async (productId) => {
    await deleteProduct(productId);
    getAllProductFunction(); // Refresh the product list after deletion
  };
  return(
    <><div className=" d-flex flex-column gap-3">
      <div className="d-flex justify-content-between align-item-center">
      <h4>All Product</h4>
        <Link to={'/full-ecommerce/AddProductPage'}>
          <button className="btn" style={{background:"#ffe5ec",border:"1px solid pink"}}>Add Product</button>
        </Link>
      </div>
    <table className="w-100" style={{border:"1px solid #ffd6d6"}}>
    <tr>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>S.No.</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Product Image</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Product title</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Product Price</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Product Category</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Product date</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Action</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Action</th>
    </tr>
      {getAllProduct.map((product, index) => (
        <tr key={product.id} style={{cursor:"pointer"}}>
          <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{index + 1}</td>
          <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>
            <img src={product.productImgUrl} alt="product_img" style={{width:"40px",aspectRatio:"1",borderRadius:"3px"}}  />
          </td>
          <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{product.title}</td>
          <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{product.price}</td>
          <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{product.category}</td>
          <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{product.date}</td>
          <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6",color:"Lightgreen"}} onClick={() => {
             
              navigate(`/full-ecommerce/UpdateProductPage/${product.id}`);
            }}>Edit</td>
           <td className="p-sm-2  p-1" style={{ border: "1px solid #ffd6d6", color: "red" }} onClick={() => handleDelete(product.id)}>Delete</td>
        </tr>
      ))}
    </table>
      </div>
    </>
  )
}