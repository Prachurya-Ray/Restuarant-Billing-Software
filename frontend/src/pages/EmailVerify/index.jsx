// import { useState, useEffect, Fragment } from 'react';
// import { Link, useParams } from 'react-router-dom';
// // import success from "../../assets/"; 
// import styles from './styles.modules.css';
// import axios from 'axios';

// const Index = () => {
//     const [validUrl, setValidUrl] = useState(false);
//     const params = useParams();

//     useEffect(() => {
//         const verifyEmailUrl = async () => {
//             try {
//                 const url = `http://localhost:8050/api/users/${params.id}/verify/${params.token}`;
//                 const { data } = await axios.get(url);
//                 console.log(data);
                
//                 setValidUrl(true);
//             } catch (error) {
//                 console.log(error);
//                 setValidUrl(false);
//                 console.error('Response error:', error.response.data);
//                 console.error('Status code:', error.response.status);
//                 console.error('Headers:', error.response.headers);
//             }
//         };
//         verifyEmailUrl();
//     }, [params]);

//     return (
//         <>
//             <Fragment>
//                 {
//                     validUrl ? (
//                         <div className={styles.container}>
//                             {/* <img src={success} alt="success" /> */}
//                             <h1>Email Verified Successfully</h1>
//                             <Link to="/login">
//                                 <button className={styles.green_btn}>Login</button>
//                             </Link>
//                         </div>
//                     ) : (
//                         <h1>404 Not Found</h1>
//                     )
//                 }
//             </Fragment>
//         </>
//     );
// }

// export default Index;



import { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
// import success from "../../assets/"; 
import styles from './styles.modules.css'; 
import axios from 'axios';

const Index = () => {
    const [validUrl, setValidUrl] = useState(false);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:8080/api/users/${params.id}/verify/${params.token}`;
                const { data } = await axios.get(url);
                console.log('Verification Data:', data);
                
                setValidUrl(true);
            } catch (error) {
                console.error('Error verifying email:', error);
                setValidUrl(false);
                console.error('Response error:', error?.response?.data);
                console.error('Status code:', error?.response?.status);
                console.error('Headers:', error?.response?.headers);
            } finally {
                setLoading(false);
            }
        };

        verifyEmailUrl();
    }, [params]);

    return (
        <Fragment>
            {loading ? (
                <h1>Loading...</h1>
            ) : validUrl ? (
                <div className={styles.container}>
                    {/* <img src={success} alt="success" /> */}
                    <h1>Email Verified Successfully</h1>
                    <Link to="/login">
                        <button className={styles.green_btn}>Login</button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </Fragment>
    );
}

export default Index;
