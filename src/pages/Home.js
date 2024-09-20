import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend/FullStack</h2>
							<p>
								JavaScript, React.js, HTML, CSS, MySQL, MongoDB, Node.js
							</p>
						</li>
						
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;