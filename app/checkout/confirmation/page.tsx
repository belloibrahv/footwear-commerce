'use client';

import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Package, Mail, ArrowRight, Download } from 'lucide-react';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    if (orderId) {
      const orders = JSON.parse(localStorage.getItem('kidsteps-orders') || '[]');
      const order = orders.find((o: any) => o.orderId === orderId);
      setOrderData(order);
    }
  }, [orderId]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  const total = orderData.payment.amount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6"
          >
            <CheckCircle className="w-16 h-16 text-white" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-lg text-gray-500">
            Order ID: <span className="font-bold text-primary-600">{orderData.orderId}</span>
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Package className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
            </div>

            <div className="space-y-4 mb-6">
              {orderData.items.map((item: any) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex justify-between items-start py-3 border-b"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{item.product.name}</p>
                    <p className="text-sm text-gray-600">
                      Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-gray-900">
                    ₦{(item.product.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total Paid:</span>
                <span className="text-green-600">₦{total.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Shipping Information</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Name:</strong> {orderData.shipping.firstName} {orderData.shipping.lastName}
              </p>
              <p>
                <strong>Email:</strong> {orderData.shipping.email}
              </p>
              <p>
                <strong>Phone:</strong> {orderData.shipping.phone}
              </p>
              <p>
                <strong>Address:</strong> {orderData.shipping.address}
              </p>
              <p>
                <strong>City:</strong> {orderData.shipping.city}, {orderData.shipping.state}{' '}
                {orderData.shipping.zipCode}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-6"
          >
            <div className="flex items-start space-x-3">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">What's Next?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span>1.</span>
                    <span>
                      You will receive an order confirmation email at{' '}
                      <strong>{orderData.shipping.email}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>2.</span>
                    <span>Your order will be processed and shipped within 2-3 business days</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>3.</span>
                    <span>Track your order status in the Orders section</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>4.</span>
                    <span>Delivery typically takes 3-5 business days</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/orders" className="btn-primary flex-1 text-center inline-flex items-center justify-center space-x-2">
              <Package className="w-5 h-5" />
              <span>View My Orders</span>
            </Link>

            <Link
              href="/products"
              className="btn-secondary flex-1 text-center inline-flex items-center justify-center space-x-2"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center text-gray-600"
          >
            <p>Need help? Contact us at support@kidsteps.com or call +234 800 000 0000</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading...</h2>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
