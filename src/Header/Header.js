import React from "react";

import './Header.css';

class Header extends React.Component {

	state = {
		loading: [],
	}

	addingdata(param) {
		let x = this.state.loading;
		x.push(param);
		this.setState({ loading: x })
	}
	
	render() {
		return (
			<nav className="header">
				<div className="firstbox">
					<img className="desktop-logo" src="https://images.indianexpress.com/2021/01/myntra.png"></img>
					<div className="header_1"><span>Men</span></div>
					<div className="header_2"><span>WoMen</span></div>
					<div className="header_3"><span>kids</span></div>
					<div className="header_4"><span>HomenLiving</span></div>
					<div className="header_5">
						<span>Beauty</span>
					</div>
				</div>
				<div className="secondbox">
					<input placeholder="Search for fitting like casual" className="header_6" type="text" onChange={
						(el) => {
							if (!this.props.receivestringdata) {
								this.props.receivestringdata(el.currentTarget.value)
							}
						}
					}></input>
				</div>
				<div className="thirdbox">
					<i class="p-icon--user" style={{ cursor: "pointer" }} onClick={() => {
						alert("It is not working, it requires login ");
					}}></i>
					<span class="myntraweb-sprite desktop-iconWishlist sprites-headerWishlist" onClick={() => {
						alert("It is not working, it requires login ");
					}}></span>
					<div className="bag" onClick={() => {
						if (document.getElementById("modal").style.visibility !== "visible") {
							document.getElementById("modal").style.visibility = "visible";
						}
						console.log(window.$count);
						let x = [];
						for (let i = 0; i < window.$count; i++) {
							if (window.localStorage.getItem(`user${i}`)) {
								let obj = JSON.parse(window.localStorage.getItem(`user${i}`));

								x.push(obj);
								this.setState({ loading: x });
							}
						}
					}}>
						<span class="myntraweb-sprite desktop-iconBag sprites-headerBag" data-reactid="856" ></span>
						<span class="desktop-userTitle" data-reactid="858">Bag</span>
					</div>

					<div class="p-modal" id="modal">
						<section class="p-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
							<p id="modal-description">These are the items in your bag</p>
							<button class="p-modal__close" aria-label="Close active modal" aria-controls="modal"
								onClick={() => {
									document.getElementById("modal").style.visibility = "hidden";
								}}
							>Close</button>
							<div class="p-heading-icon--small">
								{
									this.state.loading.map((el) => {
										if (el) {
											return (
												<div class="p-heading-icon__header">
													<span>{el[2]}</span>
													<span>{el[0]}</span>
													<span>{el[1] + "Rs."}</span>
													<span>{el[3] + "%OFF"}</span>
													<span>{el[4]}</span>
													<span>{el[5]}</span>
													<span className="nameremove" onClick={() => {
														for (let i = 0; i < window.$count; i++) {
															if (window.localStorage.getItem(`user${i}`)) {
																let obj = JSON.parse(window.localStorage.getItem(`user${i}`))
																if (JSON.stringify(el) === JSON.stringify(obj)) {
																	localStorage.removeItem(`user${i}`);

																}
															}
														}
														let x = this.state.loading;
														let idx = x.indexOf(el);
														x.splice(idx, 1);
														this.setState({ loading: x })
														if (this.state.loading.length === 0) window.$count = 0;
													}}>REMOVE</span>
												</div>
											)
										}
									})

								}
							</div>
						</section>
					</div>
				</div>

			</nav>
		)
	}

}
export default Header;