import { Fragment } from 'react';

import Navbar from './Navbar';

const Wrapper = (props) => {
    return (
        <Fragment>
            <Navbar />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Wrapper;
