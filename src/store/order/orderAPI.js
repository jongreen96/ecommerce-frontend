import api from '../../utilities/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOrders = createAsyncThunk('order/getOrders', async () => {
	try {
		const response = await api.get('/orders');
		return response.data;
	} catch (err) {
		throw err;
	}
});

export const createOrder = createAsyncThunk(
	'order/createOrder',
	async (paymentIntent) => {
		try {
			const response = await api.post('/carts/checkout', {
				paymentIntent,
			});
			return response.data;
		} catch (err) {
			throw err;
		}
	}
);

export const setDownloaded = createAsyncThunk(
	'order/setDownloaded',
	async ({ id, productId }) => {
		try {
			const response = await api.post(`/orders/downloaded`, {
				id,
				productId,
			});
			return response.data;
		} catch (err) {
			throw err;
		}
	}
);
