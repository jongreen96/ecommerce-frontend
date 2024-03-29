import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Order from '../components/Order';
import { selectUser } from '../store//auth/authSlice';
import { logout } from '../store/auth/authAPI';
import { getOrders } from '../store/order/orderAPI';
import { selectOrders, clearOrders } from '../store/order/orderSlice';
import '../styles/account.css';
import { UpdateDetails } from '../components/UpdateDetails';
import { clearCart } from '../store/cart/cartSlice';
import Back from '../components/Back';

export default function Account() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const orders = useSelector(selectOrders);

	const [updateDetails, setUpdateDetails] = useState(false);
	const toggleUpdateDetails = () => setUpdateDetails(!updateDetails);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(clearOrders());
		dispatch(clearCart());
		navigate('/');
	};

	useEffect(() => {
		dispatch(getOrders());
	}, []);

	return (
		<div className='page'>
			<Back />
			<div className='account'>
				<div className='account-info'>
					<h1 className='font-one'>Account Info</h1>
					<div className='tile flex-column'>
						{!updateDetails ? (
							<>
								<div>
									<h3 className='font-three'>Name:</h3>
									<p className='font-four'>
										{user.first_name} {user.last_name}
									</p>
								</div>

								<div>
									<h3 className='font-three'>Email:</h3>
									<p className='font-four'>{user.email}</p>
								</div>

								<div>
									<h3 className='font-three'>Username:</h3>
									{user.username ? (
										<p className='font-four'>{user.username}</p>
									) : (
										<p className='font-five'>None</p>
									)}
								</div>

								<div>
									<h3 className='font-three'>Address:</h3>
									{user.address ? (
										<p className='font-four'>{user.address}</p>
									) : (
										<p className='font-five'>None</p>
									)}
								</div>
							</>
						) : (
							<UpdateDetails toggleUpdateDetails={toggleUpdateDetails} />
						)}
					</div>
				</div>

				<div className='account-settings'>
					<h2 className='font-one'>Settings</h2>
					<div className='tile flex-column'>
						<div className='font-four'>
							<p className='special-link' onClick={() => toggleUpdateDetails()}>
								Change account details
							</p>
							<p className='special-link' onClick={() => handleLogout()}>
								Logout
							</p>
						</div>
					</div>
				</div>

				<div className='account-orders'>
					<h2 className='font-one'>Order History</h2>
					{orders ? (
						orders.map((order, i) => (
							<Order key={i} orderDetails={order} user={user} />
						))
					) : (
						<p className='font-five'>No orders found</p>
					)}
				</div>
			</div>
		</div>
	);
}
