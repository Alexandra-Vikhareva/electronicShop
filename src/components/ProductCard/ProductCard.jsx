export default function ProductCard() {
    return (
        <div className="product-card">
            <img src="src/assets/images/headphones.png" alt="headphones image" />
            <div className="info">
                <div className="col1">
                    <div className="itemName">Apple BYZ S8521</div>
                    <div className="star">
                        <img src="src/assets/images/Star.svg" alt="star icon" className="icon" />
                        <span className="rating">4.7</span>
                    </div>
                </div>

                <div className="col2">
                    <div className="price">2927 P</div>
                    <button className="btn_buy">Купить</button>
                </div>
            </div>
        </div>
    )
}