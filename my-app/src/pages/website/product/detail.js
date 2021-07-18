import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductApi from '../../../api/ProductApi'
const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}); // 1
    // 3
    useEffect(() => {
        // didMount 
        const getProduct = async () => {
            try {
                // neu thanh cong
                const { data } = await ProductApi.get(id);
                setProduct(data);
            } catch (error) {
                //neu that bai
                console.log(error)
            }
        }
        getProduct();
    }, [])
    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: "\n* {\n\tbox-sizing: border-box;\n}\nbody {\n\theight: 100%;\n}\n\nbody {\n\tdisplay: grid;\n\tgrid-template-rows: 1fr;\n\tfont-family: \"Raleway\", sans-serif;\n}\n\nh3 {\n\tfont-size: 1.7em;\n\tletter-spacing: 1.2px;\n    color: #000000;\n}\n\n/* ----- Product Section ----- */\n.product {\n\tdisplay: grid;\n\tgrid-template-columns: 0.9fr 1fr;\n\tmargin: auto;\n\tpadding: 2.5em 0;\n\tmin-width: 600px;\n\tborder-radius: 5px;\n}\n\n/* ----- Photo Section ----- */\n.product__photo {\n\tposition: relative;\n}\n.photo-container {\n\tposition: absolute;\n\tleft: -2.5em;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 6px;\n    margin-bottom: 20px; \n\n}\n.photo-main {\n\tborder-radius: 6px 6px 0 0;\n\timg {\n\t\tposition: absolute;\n\t\tleft: -3.5em;\n\t\ttop: 2em;\n\t\tmax-width: 70%;\n        margin-bottom: 20px; \n\n\t}\n\n}\n/* ----- Informations Section ----- */\n.product__info {\n\tpadding: 0.8em 0;\n}\n\n.title {\n\th1 {\n\t\tmargin-bottom: 0.1em;\n\t\tcolor: #000000;\n\t\tfont-size: 1.5em;\n\t\tfont-weight: 900;\n\t}\n\n\tspan {\n\t\tfont-size: 0.7em;\n\t\tcolor: $color-secondary;\n\t}\n}\n\n.price {\n\tmargin: 1.5em 0;\n\tcolor: $color-highlight;\n\tfont-size: 1.2em;\n\n\tspan {\n\t\tpadding-left: 0.15em;\n\t\tfont-size: 2.9em;\n\t}\n}\n\n.variant {\n\toverflow: auto;\n\n\th3 {\n\t\tmargin-bottom: 1.1em;\n\t}\n\n\tli {\n\t\tfloat: left;\n\t\twidth: 35px;\n\t\theight: 35px;\n\t\tpadding: 3px;\n\t\tborder: 1px solid transparent;\n\t\tborder-radius: 3px;\n\t\tcursor: pointer;\n\n\t\t&:first-child,\n\t\t&:hover {\n\t\t\tborder: 1px solid $color-secondary;\n\t\t}\n\t}\n\n\tli:not(:first-child) {\n\t\tmargin-left: 0.1em;\n\t}\n}\n\n.description {\n\tclear: left;\n\tmargin: 2em 0;\n\n\th3 {\n        color: #000000\n\t\tmargin-bottom: 1em;\n\t}\n\n\tul {\n\t\tfont-size: 0.8em;\n\t\tlist-style: disc;\n\t\tmargin-left: 1em;\n\t}\n\n\tli {\n\t\ttext-indent: -0.6em;\n\t\tmargin-bottom: 0.5em;\n        margin-left: 0.5em;\n\n        \n\t}\n}\n\n.buy--btn {\n\tpadding: 1.5em 3.1em;\n\tborder: none;\n\tborder-radius: 7px;\n\tfont-size: 0.8em;\n\tfont-weight: 700;\n\tletter-spacing: 1.3px;\n\tcolor: #fff;\n\tbackground-color:#E31C23;\n\tbox-shadow: 2px 2px 25px -7px $color-primary;\n\tcursor: pointer;\n\n\t&:active {\n\t\ttransform: scale(0.97);\n\t}\n}\n        " }} />
            <section className="product">
                <div className="product__photo">
                    <div className="photo-container">
                        <div className="photo-main">
                            <img src={product.photo} width="480px"></img>

                        </div>
                    </div>
                </div>
                <div className="product__info">
                    <div className="title">
                        <h1>{product.name} </h1>
                    </div>
                    <div className="price">
                        R$ <span>{product.price}</span>
                    </div>
                    <div className="description">
                        <h3>BENEFITS</h3>
                        <ul>
                            <li>{product.description}</li>
                        </ul>
                    </div>
                    <button className="buy--btn">ADD TO CART</button>
                </div>
            </section>


        </div>
    )
}

export default Detail
