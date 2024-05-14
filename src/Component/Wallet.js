import React, { useState, useEffect } from 'react';
import Layout from './Layout';
const Wallet = (/*{ balance, transactions, user} */) => {
	return (
	 <>
    <Layout/> 
		<div className="wallet-container">
			<div className="wallet">
				<label>My Wallet</label>
				<br />
				<div style={{ color: "green", fontSize: "1.25rem", marginBottom: "1rem" }}>
					Balance: ₹1,00,000{/*balance*/}
				</div>
				<span
					style={{
						fontSize:
							"1rem" /*,color:`${(...transactions.slice(-1)).type == "credit" ? "green":"red"}`*/,
					}}
				>
					{/*transactions.slice(-1).amount*/}₹5000
				</span>
				<br />
				<span /*style={{color:`${...(transactions.slice(-1)).type == "credit" ? "green":"red"}`}}*/>
					Last Transaction
				</span>
			</div>
			<div className="transactions">
				<label>Latest Transactions</label>
				{/*transactions.slice(-5).map  --maps the last 5 transactions*/}
				<div className="transaction">
					<span>Transaction</span>
					<span>+₹5000</span>
				</div>
				<div className="transaction">
					<span>Transaction</span>
					<span>+₹5000</span>
				</div>
				<div className="transaction">
					<span>Transaction</span>
					<span>+₹5000</span>
				</div>
			</div>
			<div className="report">
				<label>Report</label>
			</div>
			<div className="income">
				<label>Total Balance</label>
				<br />
				<span style={{ fontWeight: "normal" }}>₹xxxxxxx-balance</span>
			</div>
			<div className="savings">
				<div>
					<label>Total Balance Left</label>
					<br />
					<span style={{ fontWeight: "normal" }}>₹xxxxxxx-balance</span>
				</div>
				<div>
					<label>Total Credit & Debit</label>
					<br />
					<span style={{ fontWeight: "normal" }}>₹xxxxxxx-credit</span>
				</div>
			</div>
		</div>
		</>
	);
};
export default Wallet;
