import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from  "@reach/router";
// import { BiStrikethrough } from 'react-icons/bi';

const ProductCard = (props) => {
    let { image, price, title, id} = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }
    return (
        <Card 
            style={{ width: '18rem', height: 'auto' }}
            className={`${theme? 'bg-light-black text-light':'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <Link to={`/product-details/${id}`}>
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '9rem'}}>
                        <Card.Img variant="top" src={image} className="img-fluid" />
                    </div>
                </div>
            </Link>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {title}
                </Card.Title>
              <div style={{padding:'8px 8px', display:'flex', marginBottom:'-15px',justifyContent:'space-between'}}className='add-cart'>
                <Button
                    onClick={()=> addToCart()}
                    className={`${theme? 'bg-dark-primary text-black':'bg-light-primary' } d-flex align-item-center m-auto border-0`}
                >
                    <BsCartPlus size="2rem" />
                   
                </Button>
                <Card.Title>
                   &nbsp; Rs. <span className="h5" style={{color:'green'}}><strike>{(Math.floor(price/10))+12}</strike></span>
                </Card.Title>
                <Card.Title>
                &nbsp; Rs. <span className="h3">{Math.floor(price)+100}</span>
                </Card.Title>
               
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;