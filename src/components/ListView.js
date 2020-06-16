import React, { Component } from 'react';
import { connect } from 'react-redux';
import './listview.css';

class ListView extends Component {
	render() {
		const { isLoading, items, error } = this.props;
		const gradeHandler = () => {};
		return (
			<div>
				{error ? <p>{error}</p> : null}
				<div className="count">
					<h4>{items.length} Students</h4>
				</div>
				<div className="main">
					<div className="label">
						<label className="label-inline">NOT YET INTRODUCED</label>

						<label className="label-inline">EMERGING SKILL</label>

						<label className="label-inline">DEVELOPING SKILL</label>

						<label className="label-inline">CAPABLE</label>
					</div>
					{!isLoading ? (
						items.map((item) => {
							const { Class, name, img, id } = item;
							return (
								<div key={id} className="box">
									<table>
										<tbody>
											<tr className="item">
												<td>
													<img src={img} alt={name} height="100" width="100" />
												</td>
												<td className="names">
													<h4> {name}</h4>
													<h5> {Class}</h5>
												</td>
												<th className="radio-line">
													<div className="radio">
														<label className="radio-inline">
															<input type="radio" name="gradeSelection" />
														</label>
														<label className="radio-inline">
															<input type="radio" name="gradeSelection" />
														</label>
														<label className="radio-inline">
															<input type="radio" name="gradeSelection" />
														</label>
														<label className="radio-inline">
															<input type="radio" name="gradeSelection" />
														</label>
													</div>
												</th>
											</tr>
										</tbody>
									</table>
								</div>
							);
						})
					) : (
						<h3>Loading...</h3>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	items: state.students.items
});

export default connect(mapStateToProps, null)(ListView);
