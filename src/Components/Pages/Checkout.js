import React from "react";
import "./Pages.css";

const Checkout = () => {
  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-50">
                <h3>Billing Address</h3>

                <label for="fname">
                  <i class="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Enter Your Full Name"
                />
                <label for="email">
                  <i class="fa fa-envelope"></i> Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <label for="adr">
                  <i class="fa fa-address-card-o"></i> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="Enter Your Address"
                />
                <label for="city">
                  <i class="fa fa-institution"></i> City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter Your City"
                />
                <div className="row">
                  <div className="col-50">
                    <label for="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="NY"
                    />
                  </div>
                  <div className="col-50">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>

              <div className="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div className="icon-container">
                  <i
                    class="fab fa-cc-visa"
                    style={{ color: "navy", paddingRight: "1%" }}
                  ></i>
                  <i
                    class="fab fa-cc-amex"
                    style={{ color: "blue", paddingRight: "1%" }}
                  ></i>
                  <i
                    class="fab fa-cc-mastercard"
                    style={{ color: "red", paddingRight: "1%" }}
                  ></i>
                  <i
                    class="fab fa-cc-discover"
                    style={{ color: "orange", paddingRight: "1%" }}
                  ></i>
                </div>
                <label for="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="XXXXXXXXXXXX"
                />
                <label for="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                />
                <label for="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                ></input>
                <div className="row">
                  <div className="col-50">
                    <label for="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="20XX"
                    />
                  </div>
                  <div classNmae="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="XXX" />
                  </div>
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr" />{" "}
              Shipping address same as billing
            </label>
            <input type="submit" value="PLACE ORDER" class="btn"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
