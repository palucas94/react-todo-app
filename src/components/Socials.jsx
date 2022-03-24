import React from 'react';

function Socials() {
	return (
		<div className='socials-container'>
			<a
        href='https://www.linkedin.com/in/lucas-pontes-arruda/'
        target='_blank'
        rel='noreferrer'
        className='social-item'
      >
				<i className="fa-brands fa-linkedin"></i>
			</a>
			<a
        href='https://github.com/palucas94'
        target='_blank'
        rel='noreferrer'
        className='social-item'
      >
				<i className="fa-brands fa-github"></i>
			</a>
		</div>
	);
}

export default Socials;