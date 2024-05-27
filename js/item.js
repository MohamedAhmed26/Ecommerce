let item = `            
    <div class="product_imagesss">
        <div class="imageeeeee"><img src="../Img/image 63.png" alt="" /></div>
        </div>

        <div class="product_desc">
        <h2>Havic HV G-92 Gamepad</h2>

        <div class="revvv">
            <img src="../img/Four Star.png" alt="" />
            <p>(150 Reviews) | <span>In Stock</span></p>
        </div>

        <p class="pric_e" id="pric_e">$192.00</p>
        <p class="des_c">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
        </p>
        <hr />

        <div class="btns_size">
            <p>Size:</p>
            <button onclick="xs()" id="xs" class="btn_small">XS</button>
            <button onclick="s()" id="s" class="btn_small">S</button>
            <button onclick="m()" id="m" class="btn_small">M</button>
            <button onclick="l()" id="l" class="btn_small">L</button>
            <button onclick="xl()" id="xl" class="btn_small">XL</button>
        </div>

        <div class="controllllls">
            <div class="incre_decre">
                <button onclick="decre()" class="decreee">-</button>
                <p id="resulttt">1</p>
                <button onclick="incre()" class="increee">+</button>
            </div>

            <button class="buy_nowww">Buy Now</button>

            <input type="checkbox" name="" id="heartt" />
            <label for="heartt" class="hearttt"><i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-heart"></i></label>
        </div>

        <div class="deliveryy">
            <div class="parttt">
                <i class="fa-solid fa-truck-fast"></i>
                <div class="txt">
                    <p>Free Delivery</p>
                    <a href="#postal">Enter your postal code for Delivery Availability</a>
                </div>
            </div>
            <hr />
            <div class="parttt">
                <i class="fa-solid fa-arrows-rotate"></i>
                <div class="txt">
                    <p>Return Delivery</p>
                    <span>Free 30 Days Delivery Returns.<a href="#postal">Details</a></span>
                </div>
            </div>
        </div>
    </div>`;
let parent = document.querySelectorAll(".product_infor")[0];
parent.innerHTML = item;

// console.log(parent);





// export {default} from './item';









