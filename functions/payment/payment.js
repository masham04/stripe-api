
const stripe = require("stripe")(
  "sk_test_51IfNcCGQJFOR3XETGAik7AFQBHQadEi8xygV9VqdXjjIXc8nWWjQvTOfHCAvzv1NrY3dVBN2ZFDkwPk7wjMIZdoG00wMjQLRqZ"
);
const handler = async (event) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: "usd",
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: "accept_a_payment" },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
