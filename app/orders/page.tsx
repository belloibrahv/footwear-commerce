'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Package, Calendar, CreditCard, MapPin, ShoppingBag } from 'lucide-react';

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('kidsteps-orders') || '[]');
    setOrders(savedOrders.reverse());
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Orders
          </h1>
          <p className="text-xl text-gray-600">
            {orders.length === 0 ? 'You haven\'t placed any orders yet' : `${orders.length} order${orders.length > 1 ? 's' : ''} found`}
          </p>
        </motion.div>

        {orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-12 text-center"
          >
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">
              Start shopping to see your orders here
            </p>
            <Link href="/products" className="btn-primary inline-block">
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <motion.div
                key={order.orderId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Package className="w-5 h-5 text-primary-600" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Order {order.orderId}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(order.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CreditCard className="w-4 h-4" />
                        <span className="capitalize">{order.payment.method}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center space-x-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor('processing')}`}>
                      Processing
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      ₦{order.payment.amount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {order.items.map((item: any, itemIndex: number) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center py-2"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">{item.product.name}</p>
                        <p className="text-sm text-gray-600">
                          Size: {item.size} | Color: {item.color} | Quantity: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-gray-900">
                        ₦{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-start space-x-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Shipping to:</p>
                    <p>
                      {order.shipping.firstName} {order.shipping.lastName}
                    </p>
                    <p>
                      {order.shipping.address}, {order.shipping.city}, {order.shipping.state}
                    </p>
                    <p>{order.shipping.phone}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex space-x-4">
                  <Link
                    href={`/orders/${order.orderId}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex-1"
                  >
                    Track Order →
                  </Link>
                  <Link
                    href={`/checkout/confirmation?orderId=${order.orderId}`}
                    className="text-secondary-600 hover:text-secondary-700 font-semibold text-sm"
                  >
                    View Receipt →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
