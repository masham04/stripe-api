import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import "./App.css";

const promise = loadStripe(
  "pk_test_51IfNcCGQJFOR3XETq8ow4kZ8ARrBNIuKMOrVJ8JqlKIKPbQQJViXUCXV0Vm8VJ9wda6B0zETfPVUOFEWRS99Pezs00AiDTTvsA"
);

const IndexPage = () => {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default IndexPage;
