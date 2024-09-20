import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						{/* <li className="social__item">
							<a href="#!">
								<img src={vk} alt="Link" />
							</a>
						</li> */}
						{/* <li className="social__item">
							<a href="#!">
								<img src={instagram} alt="Link" />
							</a>
						</li> */}
						{/* <li className="social__item">
							<a href="#!">
								<img src={twitter} alt="Link" />
							</a>
						</li> */}
						<li className="social__item">
							<a href="https://github.com/AnnetSkorik">
								<img src={gitHub} alt=" https://github.com/AnnetSkorik" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.linkedin.com/in/anna-skoryk-51aa80316/">
								<img src={linkedIn} alt="https://www.linkedin.com/in/anna-skoryk-51aa80316/" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2024</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;