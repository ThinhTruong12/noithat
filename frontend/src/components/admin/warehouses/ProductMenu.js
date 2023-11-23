import React, { Fragment, useContext } from "react";
import { ProductContext } from "./index";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";

const ProductMenu = (props) => {
  // eslint-disable-next-line
  const { dispatch } = useContext(ProductContext);
  return (
    <Fragment>
      <div className="col-span-1 flex justify-between items-center">
        <AddProductModal />
        <EditProductModal />
      </div>
    </Fragment>
  );
};

export default ProductMenu;
