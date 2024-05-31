import logo from "../../../public/images/frontalicious/logo.webp";
import logo2x from "../../../public/images/frontalicious/logo@2x.webp";
import { css } from "../../../styled-system/css";

const container = css`
    color: #fff;
    background: #192c5a;
    background: linear-gradient(to top, #2b4e92, #192c5a);
`;

const inner = css`
    max-width: 68ch;
    margin: 0 auto;
    padding: 40px 0;
    text-align: center;
`;

export const Hero = () => {
	return (
		<div className={container}>
			<div className={inner}>
				<img
					className="logo"
					src={logo}
					srcSet={`${logo2x} 800w`}
					alt="Frontalicious logo"
					width="400"
					height="119"
				/>
				<div className="logo-tagline">Tasty Interfaces</div>
				<p>
					Front-end Web Development for delicious web apps. Specialised in
					beautiful, fast, responsive user interfaces using maintainable clean
					code.
				</p>
				<a href="#contact" className="btn btn-hero">
					Get in touch
				</a>
			</div>
		</div>
	);
};
