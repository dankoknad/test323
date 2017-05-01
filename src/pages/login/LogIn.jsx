import React from 'react';


const Login = ({handleSubmitLogin, loginEmailVal, loginPassVal, handleInputChange, token,children}) => {
	const hasErrorClass = token.length > 36 ? "form-group has-error clearfix" : "form-group clearfix";
	return (
		<div>	
			<h3>Log In</h3>		
			<div>
				<form onSubmit={handleSubmitLogin} className="login-form"  >
					<div className={hasErrorClass}>
						<div className="col-sm-4">Email address</div>
						<div className="col-sm-6 col-md-4">
							<input type="email" className="form-control" value={loginEmailVal} onChange={handleInputChange} placeholder="Email" required />
						</div>
					</div>
					<div className={hasErrorClass}>
 						<div className="col-sm-4">Password</div>
						<div className="col-sm-6 col-md-4">
							<input type="password" className="form-control" defaultValue={loginPassVal} onChange={handleInputChange} placeholder="Password" required />
						</div>
					</div>
					<div className="form-group clearfix">
						<div className="col-sm-6 col-md-4 col-sm-offset-4">
							<button type="submit" className="btn btn-default">Log In</button>
						</div>
					</div>
				</form>
			</div>
			{token.length > 36 && <div className="text-center text-danger">Invalid email or password</div>}

			<div>
				<h3>Sign In</h3>
				<p>You don't have an account? It's not a  problem. You can make one!</p><br/>
				{children}
			</div>
		</div>
	);
};

export default Login;