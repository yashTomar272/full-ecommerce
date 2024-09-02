import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

export default function BuyNowModels({ addressInfo, setaddressInfo, BuyNowFunction }) {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await BuyNowFunction();
      setOpen(false);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <>
      <button onClick={handleOpen} className='btnn w-100 rounded' style={{ height: "47px" }}>Buy now</button>
      {open && (
        <div className="heloo">
          <div 
            className="modal-overlay" 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
              zIndex: 1000
            }}
          >
            <div 
              className="modal-content p-3" 
              style={{
                width: '380px',
                borderRadius: '7px',
                backgroundColor: '#ffd6d6',
                border: '2px solid #e6e5e5',
                zIndex: 1001,
                position: 'relative'
              }}
            >
              <div style={{ height: "30px" }}> 
                <RxCross2 
                  className='fs-5 mb-5' 
                  style={{ 
                    position: "absolute", 
                    right: "20px", 
                    top: "20px", 
                    cursor: "pointer" 
                  }} 
                  onClick={() => setOpen(false)} // Close the modal when this icon is clicked
                />
              </div>
              <form onSubmit={handleSubmit} className="d-flex align-items-center flex-column w-100 mb-5" style={{ gap: "9px" }}>
                <div className="username position-relative mt-2">
                  <input
                    className="iinputt"
                    type="text"
                    value={addressInfo.name}
                    onChange={(e) => setaddressInfo({ ...addressInfo, name: e.target.value })}
                    required
                  />
                  <label className="lable" htmlFor="username">Enter your name</label>
                </div>
                <div className="username position-relative mt-2">
                  <input
                    className="iinputt"
                    type="text"
                    value={addressInfo.address}
                    onChange={(e) => setaddressInfo({ ...addressInfo, address: e.target.value })}
                    required
                  />
                  <label className="lable" htmlFor="username">Enter your address</label>
                </div>
                <div className="username position-relative mt-2">
                  <input
                    className="iinputt"
                    type="text"
                    value={addressInfo.pincode}
                    onChange={(e) => setaddressInfo({ ...addressInfo, pincode: e.target.value })}
                    required
                  />
                  <label className="lable" htmlFor="username">Enter your pincode</label>
                </div>
                <div className="username position-relative mt-2">
                  <input
                    className="iinputt"
                    type="text"
                    value={addressInfo.mobilenumber}
                    onChange={(e) => setaddressInfo({ ...addressInfo, mobilenumber: e.target.value })}
                    required
                  />
                  <label className="lable" htmlFor="username">Enter your mobile number</label>
                </div>
                <button type='submit' className="btnn w-100" style={{ height: "48px", borderRadius: "8px" }}>
                  Buy Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
