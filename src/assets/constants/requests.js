import { useEffect } from 'react';
import ApiActions from '../../redux/actions/apiAction';
import { useDispatch } from 'react-redux';

export const apiMain = (setProduct) => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://if-modnikky-api.onrender.com/api/catalog')
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                dispatch(ApiActions.requestedProduct(data));
            });
    }, []);
};

export const sendProduct = (bagItem, setProductSend) => {
    fetch(`https://if-modnikky-api.onrender.com/api/cart`, {
        method: 'POST',
        body: JSON.stringify({ products: bagItem }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            setProductSend(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

// export const sendEmail = (inputEmail, setEmailSend) => {
//     fetch(`https://if-modnikky-api.onrender.com/api/subscription`, {
//         method: 'POST',
//         body: JSON.stringify({ email: inputEmail }),
//         headers: {
//             'Content-type': 'application/json',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             setEmailSend(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };
