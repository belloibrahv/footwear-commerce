'use client';

import { useEffect, useState, use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  ArrowLeft,
  MessageSquare,
  Star,
} from 'lucide-react';

interface OrderStatus {
  status: string;
  timestamp: string;
  description: string;
}

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const orderId = resolvedParams.id;
  const [order, setOrder] = useState<any>(null);
  const [orderStatuses, setOrderStatuses] = useState<OrderStatus[]>([]);
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [complaintText, setComplaintText] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('kidsteps-orders') || '[]');
    const foundOrder = orders.find((o: any) => o.orderId === orderId);
    
    if (foundOrder) {
      setOrder(foundOrder);
      
      // Load or generate order status timeline
      const savedStatuses = localStorage.getItem(`order-status-${orderId}`);
      if (savedStatuses) {
        setOrderStatuses(JSON.parse(savedStatuses));
      } else {
        // Generate initial statuses
        const now = new Date();
        const statuses: OrderStatus[] = [
          {
            status: 'Order Placed',
            timestamp: foundOrder.date,
            description: 'Your order has been successfully placed',
          },
          {
            status: 'Payment Confirmed',
            timestamp: new Date(new Date(foundOrder.date).getTime() + 60000).toISOString(),
            description: 'Payment received and confirmed',
          },
          {
            status: 'Processing',
            timestamp: new Date(new Date(foundOrder.date).getTime() + 300000).toISOString(),
            description: 'Your order is being prepared',
          },
        ];
        
        // Simulate order progression based on age
        const orderAge = now.getTime() - new Date(foundOrder.date).getTime();
        const hoursOld = orderAge / (1000 * 60 * 60);
        
        if (hoursOld > 1) {
          statuses.push({
            status: 'Ready for Shipment',
            timestamp: new Date(new Date(foundOrder.date).getTime() + 3600000).toISOString(),
            description: 'Order packed and ready for pickup',
          });
        }
        
        if (hoursOld > 2) {
          statuses.push({
            status: 'Shipped',
            timestamp: new Date(new Date(foundOrder.date).getTime() + 7200000).toISOString(),
            description: 'Out for delivery',
          });
        }
        
        if (hoursOld > 24) {
          statuses.push({
            status: 'Out for Delivery',
            timestamp: new Date(new Date(foundOrder.date).getTime() + 86400000).toISOString(),
            description: 'Your package is on its way',
          });
        }
        
        setOrderStatuses(statuses);
        localStorage.setItem(`order-status-${orderId}`, JSON.stringify(statuses));
      }
    }
  }, [orderId]);

  const markAsDelivered = () => {
    const newStatus: OrderStatus = {
      status: 'Delivered',
      timestamp: new Date().toISOString(),
      description: 'Package delivered successfully',
    };
    
    const updatedStatuses = [...orderStatuses, newStatus];
    setOrderStatuses(updatedStatuses);
    localStorage.setItem(`order-status-${orderId}`, JSON.stringify(updatedStatuses));
    
    // Update order
    const orders = JSON.parse(localStorage.getItem('kidsteps-orders') || '[]');
    const updatedOrders = orders.map((o: any) =>
      o.orderId === orderId ? { ...o, status: 'delivered', deliveredAt: new Date().toISOString() } : o
    );
    localStorage.setItem('kidsteps-orders', JSON.stringify(updatedOrders));
    setOrder({ ...order, status: 'delivered', deliveredAt: new Date().toISOString() });
  };

  const submitComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    
    const complaint = {
      orderId,
      text: complaintText,
      date: new Date().toISOString(),
    };
    
    const complaints = JSON.parse(localStorage.getItem('kidsteps-complaints') || '[]');
    complaints.push(complaint);
    localStorage.setItem('kidsteps-complaints', JSON.stringify(complaints));
    
    alert('Complaint submitted successfully! Our team will contact you within 24 hours.');
    setComplaintText('');
    setShowComplaintForm(false);
  };

  const submitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    
    const feedbackData = {
      orderId,
      rating,
      feedback,
      date: new Date().toISOString(),
    };
    
    const feedbacks = JSON.parse(localStorage.getItem('kidsteps-feedbacks') || '[]');
    feedbacks.push(feedbackData);
    localStorage.setItem('kidsteps-feedbacks', JSON.stringify(feedbackData));
    
    alert('Thank you for your feedback! Your review helps us improve.');
    setRating(0);
    setFeedback('');
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  const currentStatus = orderStatuses[orderStatuses.length - 1]?.status || 'Processing';
  const isDelivered = currentStatus === 'Delivered' || order.status === 'delivered';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-6xl">
        <Link
          href="/orders"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Orders</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Details</h1>
              <p className="text-xl text-gray-600">Order ID: {order.orderId}</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <span className={`px-6 py-3 rounded-full text-lg font-semibold ${
                isDelivered
                  ? 'bg-green-100 text-green-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {isDelivered ? 'Delivered' : currentStatus}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Order Tracking Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Truck className="w-6 h-6 text-primary-600" />
                <span>Order Tracking</span>
              </h2>

              <div className="relative">
                {orderStatuses.map((status, index) => (
                  <div key={index} className="flex gap-4 pb-8 last:pb-0">
                    <div className="relative flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index === orderStatuses.length - 1
                          ? 'bg-primary-600 text-white'
                          : 'bg-green-500 text-white'
                      }`}>
                        {index === orderStatuses.length - 1 ? (
                          <Clock className="w-6 h-6" />
                        ) : (
                          <CheckCircle className="w-6 h-6" />
                        )}
                      </div>
                      {index < orderStatuses.length - 1 && (
                        <div className="w-0.5 h-full bg-green-500 absolute top-12" />
                      )}
                    </div>

                    <div className="flex-1 pb-4">
                      <h3 className="text-lg font-bold text-gray-900">{status.status}</h3>
                      <p className="text-sm text-gray-600 mb-1">{status.description}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(status.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {!isDelivered && (
                <button
                  onClick={markAsDelivered}
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Mark as Received</span>
                </button>
              )}
            </motion.div>

            {/* Order Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Package className="w-6 h-6 text-primary-600" />
                <span>Order Items</span>
              </h2>

              <div className="space-y-4">
                {order.items.map((item: any, index: number) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{item.product.name}</h3>
                      <p className="text-sm text-gray-600">
                        Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                      </p>
                      <p className="text-lg font-bold text-gray-900 mt-1">
                        ₦{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Feedback & Complaint Section */}
            {isDelivered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Star className="w-6 h-6 text-primary-600" />
                  <span>Rate Your Order</span>
                </h2>

                <form onSubmit={submitFeedback} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Rating
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Feedback
                    </label>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Tell us about your experience..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={rating === 0}
                    className="btn-primary w-full"
                  >
                    Submit Feedback
                  </button>
                </form>
              </motion.div>
            )}

            {/* Complaint Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-primary-600" />
                <span>Need Help?</span>
              </h2>

              {!showComplaintForm ? (
                <div>
                  <p className="text-gray-600 mb-4">
                    Have an issue with your order? Let us know and we'll resolve it quickly.
                  </p>
                  <button
                    onClick={() => setShowComplaintForm(true)}
                    className="btn-secondary"
                  >
                    File a Complaint
                  </button>
                </div>
              ) : (
                <form onSubmit={submitComplaint} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Describe Your Issue
                    </label>
                    <textarea
                      value={complaintText}
                      onChange={(e) => setComplaintText(e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Please provide details about your concern..."
                      required
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button type="submit" className="btn-primary flex-1">
                      Submit Complaint
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowComplaintForm(false);
                        setComplaintText('');
                      }}
                      className="btn-secondary flex-1"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    ₦{order.items.reduce((sum: number, item: any) => sum + item.product.price * item.quantity, 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">Included</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-green-600">₦{order.payment.amount.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span>Delivery Address</span>
                  </h3>
                  <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">{order.shipping.firstName} {order.shipping.lastName}</p>
                    <p>{order.shipping.address}</p>
                    <p>{order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}</p>
                    <p className="mt-2">{order.shipping.phone}</p>
                    <p>{order.shipping.email}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 space-y-2 pt-4 border-t">
                  <p>Order Date: {new Date(order.date).toLocaleDateString()}</p>
                  <p>Payment: <span className="capitalize">{order.payment.method}</span></p>
                  {isDelivered && order.deliveredAt && (
                    <p className="text-green-600 font-semibold">
                      Delivered: {new Date(order.deliveredAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
