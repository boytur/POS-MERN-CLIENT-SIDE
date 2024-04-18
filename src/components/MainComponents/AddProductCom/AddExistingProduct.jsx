/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../../../assets/css/Login.css";
import AddByBarcode from "./AddExistingSubComponents/AddByBarcode";
import AddBySearch from "./AddExistingSubComponents/AddBySearch";
import instance from "../../../services/axios";


function AddExistingProduct() {
  const [products, setProducts] = useState([]);
  const [productsNobarcode, setProductsNobarcode] = useState([]);
  const [data, setData] = useState([]);
  const [loadings, setLoadings] = useState(false);

  /*
    Fecth data products
  */

  const fetchProducts = async () => {
    try {
      const response = await instance.get(`/view-product`);
      const data = response.data;


      setProducts(data.products);
      setProductsNobarcode(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    document.title = "POSYAYEE 📦 เพิ่มสินค้าเดิม";
    fetchProducts();
  }, []);

  /* Select method to add product */
  const [selectedMethod, setSelectedMethod] = useState("barcode");

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div className="w-[100%] flex bg-white h-full">
      <div className="mt-5 p-2 sm:w-full md:w-2/4">
        {/* ดรอปดาวน์ */}
        <div className=" flex items-center justify-between">
          <div className="h-[2.9rem] flex justify-center items-center rounded-md hover:scale-105">
            <select
              name="method"
              id="method"
              className="outline-none h-full appearance-none focus:ring-4 w-[15rem] border rounded-md cursor-pointer text-[1.2rem] text-center text-gray-500"
              onChange={handleMethodChange}
              value={selectedMethod}
            >
              <option value="barcode">🛒 เพิ่มสินค้าด้วยบาร์โค้ด</option>
              <option value="find">🔍 เพิ่มสินค้าด้วยการค้นหา</option>
            </select>
          </div>
          <div></div>
        </div>

        {selectedMethod === "barcode" ? (
          // เพิ่มสินค้าด้วยบาร์โค้ด
          <AddByBarcode products={products} fetchProducts={fetchProducts} />
        ) : (
          <AddBySearch productsNobarcode={productsNobarcode} />
        )}
      </div>
    </div>
  );
}

export default AddExistingProduct;
