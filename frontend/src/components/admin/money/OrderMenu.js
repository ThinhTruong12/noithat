import React, { Fragment, useState, useContext } from "react";
import { OrderContext } from "./index";
import UpdateOrderModal from "./UpdateOrderModal";

const OrderMenu = (props) => {
  // eslint-disable-next-line
  const { data, dispatch } = useContext(OrderContext);
  // eslint-disable-next-line
  const [dropdown, setDropdown] = useState(false);
  return (
    <Fragment>
      <div className="col-span-1 flex items-center">
        {/*<AddCategoryModal/>*/}
        <UpdateOrderModal />
      </div>
    </Fragment>
  );
};

export default OrderMenu;
