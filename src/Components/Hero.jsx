import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BarChart3, CheckCircle2, X, Play } from "lucide-react";

const Hero = () => {
    // State to manage the video modal visibility
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white" dir="rtl">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-sm font-semibold text-teal-600 mb-8 shadow-sm"
                >
                    <span className="relative flex h-2.5 w-2.5 ml-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                    </span>
                    أسهل منصة للتجارة الإلكترونية في الجزائر
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]"
                >
                    أطلق متجرك الإلكتروني<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-400 to-purple-600">
                        دون أي خبرة تقنية.
                    </span>
                </motion.h1>

                {/* --- UPDATED TEXT HERE --- */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
                >
                    كن من <b>الرواد الأوائل</b> الذين يكتشفون مستقبل التجارة مع "متجري".
                    ابدأ مجاناً اليوم، وادفع فقط عندما تنجح.
                </motion.p>
                {/* ------------------------- */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        target='_blank'
                        href='https://custem-dashboard.onrender.com/sinin'
                        rel="noreferrer"
                        className="w-full sm:w-auto px-10 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-1 relative overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                        <span className="relative">جرب المنصة مجاناً</span>
                    </a>

                    {/* --- VIDEO BUTTON --- */}
                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="w-full sm:w-auto px-10 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 hover:border-gray-300 hover:text-purple-600 group"
                    >
                        شاهد كيف تعمل
                        <span className="bg-gray-100 p-1 rounded-full group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                            <Play size={14} className="fill-gray-600 group-hover:fill-purple-600" />
                        </span>
                    </button>
                </motion.div>

                {/* Dashboard Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 mx-auto max-w-5xl rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none" />
                    <div className="h-12 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2 flex-row-reverse justify-end">
                        <div className="flex gap-1.5 flex-row-reverse">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                    </div>

                    <div className="p-8 md:p-12 text-right">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><BarChart3 size={24} /></div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-medium">مبيعات هذا الشهر</h3>
                                        <p className="text-3xl font-bold text-gray-900 mt-1">45,200 د.ج</p>
                                    </div>
                                </div>
                                <div className="h-32 flex items-end justify-between gap-2 px-2">
                                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                        <div key={i} className="w-full bg-teal-500/10 rounded-t-lg relative group transition-all hover:bg-teal-500/20" style={{ height: `${h}%` }}>
                                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-lg transition-all duration-1000" style={{ height: '0%', animation: `grow 1s forwards ${i * 0.1}s` }} />
                                            <style>{`@keyframes grow { to { height: 100%; } }`}</style>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg shadow-purple-500/20">
                                <div>
                                    <h3 className="font-bold text-lg mb-4">خطواتك التالية</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                            <div className="bg-white/20 p-1.5 rounded-full"><CheckCircle2 size={14} /></div>
                                            <span className="text-sm font-medium">إضافة أول منتج</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm opacity-60">
                                            <div className="border border-white/40 p-1.5 rounded-full w-7 h-7" />
                                            <span className="text-sm font-medium">تخصيص التصميم</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-white text-purple-600 rounded-xl font-bold text-sm hover:bg-purple-50 transition-colors mt-4">
                                    إكمال الإعدادات
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- VIDEO MODAL OVERLAY --- */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setIsVideoOpen(false)} // Close when clicking background
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-video"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
                            >
                                <X size={24} />
                            </button>

                            {/* Video Player */}
                            <video
                                src="https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/WhatsApp%20Video%202025-11-23%20at%202.55.55%20AM.mp4?alt=media&token=3c071f65-e13e-4991-9153-955b5abeda0a"
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                            >
                                المتصفح الخاص بك لا يدعم تشغيل الفيديو.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;