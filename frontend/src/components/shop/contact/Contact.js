import React, { Fragment } from "react";
import Layout from "../layout";
import ContactScreen from "./ContactScreen";

const Contact = () => {
  return (
    <Fragment>
      <Layout children={<ContactScreen />} />
    </Fragment>
  );
};

export default Contact;