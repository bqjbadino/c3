import React from 'react';

import Container from 'react-bootstrap/Container';

const Contact = () => {
    return (
        <Container>
            <div className="calendly-inline-widget" data-url="https://calendly.com/jpbadino"></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

        </Container>
    )
}

export default Contact;