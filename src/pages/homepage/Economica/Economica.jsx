import React from "react";

import farmer from "./farmer.png";
import meteor from "./meteor.jpeg";
import background from "./background.png";
export default class Economica extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-5"><a href="https://economicaiitd.wordpress.com/">Economica</a></h1>
        
        
        <div className="card mb-4">
          <div className="row ">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">India's New Farm Bills: A Step Forward or Back?(2020)</h5>
                <p className="card-text">
                By Economics Club IITD
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    <p>
                    Recently the Government of India passed three historic legislation aimed at how the agricultural sector is financed, sold and stored. Following is a brief introduction of each bill, followed by its impact on various stakeholders:
                    </p>
                    <p>
                    The Farmers’ (Empowerment and Protection) Agreement on Price Assurance and Farm Services Bill 
                    </p>
                    <p>This bill aims to devise a framework to facilitate contractual farming. This means that agribusiness firms, wholesalers or exporters can now directly enter into a collaboration with farmers and decide crop prices before the sowing process, in exchange for an exclusive right over the produce after the harvest.
                    </p>
                    <p>
                    Example:
                    Think of a large tomato sauce company (say Kissan). Currently, Kissan has to buy tomatoes using government-regulated Mandis wherein they have to give a certain commission to them. After this law, Kissan can directly ask some farmers to grow a certain quality of tomatoes in return of a pre-fixed price. The company might even choose to lend some money as well as some technical support to the farmer for better produce.
                    </p>
                    <p><a href="https://economicaiitd.wordpress.com/2020/12/13/indias-new-farm-bills-a-step-forward-or-back/">Read More</a></p>  
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={farmer} className="card-img" alt="img-here" />
            </div>
          </div>
        </div>

        {/* <div className="card mb-4">
          <div className="row ">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">Natsukashii – A Reminiscent of Good Times</h5>
                <p className="card-text">
                By Shitij Malik, IITD.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                 <p>Japan since the last 15 years has been experiencing what is known as negative inflation or deflation. It is a situation in a country’s economy where the prices of products in general in an economy start decreasing. More specifically it’s a scenario when an economy experiences a severe recession or depression, economic output slows as demand for consumption and investments drop, as a consequence, consumers and investors alike begin holding onto liquid money reserves to cushion against further financial loss. As more money is saved, less money is spent, further decreasing aggregate demand.</p>
                 <p>Japan in its second quarter of this year registered a slower economic growth, reduction in exports, reduction in capital expenditure and contraction of the manufacturing industry in general. Manufacturing industry in Japan has severely been affected by external factors such as the US-China trade which has further slowed down Japan’s economic growth. Since the US has imposed high tariffs on exports from China it has directly impacted the production of commodities like smartphones, laptop computers and apparel. Indirect effect of this tax-war has shrunk Japan’s manufacturing sector since Japan was one of the major exporters of fabrication devices and crucial electronic parts which were required by China to produce the above-stated products. As a result of the increase in prices in the US market of these products, the demand has reduced and hence the production of these goods has taken a substantial hit.</p>
                 <p><a href ="https://economicaiitd.wordpress.com/2019/12/24/natsukashii-a-reminiscent-of-good-times/">Read More</a></p>
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={meteor} className="card-img" alt="img-here" />
            </div>
          </div>
        </div> */}

        <div className="grid-container">
          {/* <div className="item card sado">
            <p className="text-muted top">Behavior and Markets.</p>
            <h3 className="content">Content description</h3>
          </div>
          <div className="item card sado">
            <p className="text-muted top">Behavior and Markets</p>
            <h3 className="content">Content description</h3>
          </div>
          <div className="item card sado">
            <p className="text-muted top">Behavior and Markets</p>
            <h3 className="content">Content description</h3>
          </div>
          <div className="item card sado">
            <p className="text-muted top">Behavior and Markets</p>
            <h3 className="content">Content description</h3>
          </div> */}
        </div>
        <br />
        <br />
      </div>

    );
  }
}