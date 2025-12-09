'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { CreditCard, Building2, Smartphone, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PaymentPage() {
  const { cart, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  
  const [checkoutData, setCheckoutData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [processing, setProcessing] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 10000 ? 0 : 1500;
  const tax = Math.round(subtotal * 0.075);
  const total = subtotal + shipping + tax;

  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('kidsteps-checkout-data');
    if (saved) {
      setCheckoutData(JSON.parse(saved));
    } else {
      router.push('/checkout');
    }
  }, [router]);

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const [processingStage, setProcessingStage] = useState('');

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate realistic payment processing stages
    setProcessingStage('Validating payment details...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setProcessingStage('Contacting payment gateway...');
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setProcessingStage('Authorizing transaction...');
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setProcessingStage('Processing payment...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setProcessingStage('Confirming order...');
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Create order data
    const orderData = {
      orderId: `ORD-${Date.now()}`,
      items: cart,
      shipping: checkoutData,
      payment: {
        method: paymentMethod,
        amount: total,
      },
      date: new Date().toISOString(),
      status: 'processing',
    };

    // Save order
    const existingOrders = JSON.parse(localStorage.getItem('kidsteps-orders') || '[]');
    existingOrders.push(orderData);
    localStorage.setItem('kidsteps-orders', JSON.stringify(existingOrders));

    // Clear cart and checkout data
    clearCart();
    localStorage.removeItem('kidsteps-checkout-data');

    // Redirect to confirmation
    router.push(`/checkout/confirmation?orderId=${orderData.orderId}`);
  };

  if (!checkoutData || cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Payment
          </h1>
          <p className="text-xl text-gray-600">
            Choose your payment method
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Payment Method</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  paymentMethod === 'card'
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-300 hover:border-primary-400'
                }`}
              >
                <CreditCard className={`w-8 h-8 mx-auto mb-3 ${
                  paymentMethod === 'card' ? 'text-primary-600' : 'text-gray-600'
                }`} />
                <p className="font-semibold text-center">Credit/Debit Card</p>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('bank')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  paymentMethod === 'bank'
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-300 hover:border-primary-400'
                }`}
              >
                <Building2 className={`w-8 h-8 mx-auto mb-3 ${
                  paymentMethod === 'bank' ? 'text-primary-600' : 'text-gray-600'
                }`} />
                <p className="font-semibold text-center">Bank Transfer</p>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('wallet')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  paymentMethod === 'wallet'
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-300 hover:border-primary-400'
                }`}
              >
                <Smartphone className={`w-8 h-8 mx-auto mb-3 ${
                  paymentMethod === 'wallet' ? 'text-primary-600' : 'text-gray-600'
                }`} />
                <p className="font-semibold text-center">Mobile Wallet</p>
              </button>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              {paymentMethod === 'card' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardData.cardNumber}
                      onChange={handleCardChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={cardData.cardName}
                      onChange={handleCardChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardData.expiryDate}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardData.cvv}
                        onChange={handleCardChange}
                        placeholder="123"
                        maxLength={4}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {paymentMethod === 'bank' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Bank Transfer Instructions</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Bank Name:</strong> First Bank of Nigeria</p>
                    <p><strong>Account Name:</strong> KidSteps Limited</p>
                    <p><strong>Account Number:</strong> 1234567890</p>
                    <p><strong>Amount:</strong> ₦{total.toLocaleString()}</p>
                    <p className="text-red-600 mt-4">
                      Please use your order ID as the transfer reference.
                    </p>
                  </div>
                </motion.div>
              )}

              {paymentMethod === 'wallet' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <p className="text-gray-700">Select your mobile wallet provider:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="p-4 border-2 border-gray-300 rounded-lg hover:border-primary-600 transition-all"
                    >
                      Paystack
                    </button>
                    <button
                      type="button"
                      className="p-4 border-2 border-gray-300 rounded-lg hover:border-primary-600 transition-all"
                    >
                      Flutterwave
                    </button>
                  </div>
                </motion.div>
              )}

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-800">
                    <p className="font-semibold mb-1">Secure Payment</p>
                    <p>Your payment information is encrypted with industry-standard security.</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-gray-900">Total Amount:</span>
                  <span className="text-3xl font-bold text-primary-600">₦{total.toLocaleString()}</span>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  {processing ? (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Processing Payment...</span>
                      </div>
                      {processingStage && (
                        <span className="text-sm opacity-90">{processingStage}</span>
                      )}
                    </div>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      <span>Complete Payment</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <Link
                  href="/checkout"
                  className="block text-center text-primary-600 hover:text-primary-700 font-medium py-4"
                >
                  ← Back to Shipping
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
