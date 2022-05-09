/** @format */

import express, { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Customer } from '../entity/Customer';

const Customercontroller = {
	async createCustomer(req: Request, res: Response, next: NextFunction) {
		try {
			const data = {
				title: req.body.title,
				content: req.body.content,
			};
			const newCustomer = getRepository(Customer).create(data);

			const result = await getRepository(Customer).save(newCustomer);

			return res.json({
				message: 'data insert',
				data: result,
			});
		} catch (err) {
			return next(err);
		}
	},

	async getCustomer(req: Request, res: Response, next: NextFunction) {
		try {
			const allCustomer = await getRepository(Customer).find();
			// console.log(allCustomer);
			if (allCustomer.length == 0) {
				res.json({
					message: 'user is not found',
				});
			}
			return res.json({
				message: 'get all customer data',
				data: allCustomer,
			});
		} catch (err) {
			return next(err);
		}
	},

	async getCustomerById(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;
			const getCustomer = await getRepository(Customer).findOne(id);
			if (!getCustomer) {
				res.json({
					message: "it's customer no found",
				});
			}
			return res.json({
				message: 'get customer using id',
				data: getCustomer,
			});
		} catch (err) {
			return next(err);
		}
	},

	async updateCustomer(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;
			const findcustomer = await getRepository(Customer).findOne(id);
			console.log(findcustomer);
			if (findcustomer) {
				getRepository(Customer).merge(findcustomer, req.body);
				const result = await getRepository(Customer).save(findcustomer);
				return res.json({
					message: 'data update',
					data: result,
				});
			}
			return res.json({
				message: 'customer is not found',
			});
		} catch (err) {
			return next(err);
		}
	},

	async deleteCustomer(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;
			const getCustomer = await getRepository(Customer).findOne(id);
			if (!getCustomer) {
				res.json({
					message: "it's customer no found",
				});
			}
			await getRepository(Customer).delete(id);
			return res.json({
				message: 'delete customer',
			});
		} catch (err) {
			return next(err);
		}
	},
};
export default Customercontroller;
