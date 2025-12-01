import React from 'react'
import { MousePointer2, CheckCircle2 } from 'lucide-react';
const SimplicitySection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" dir="rtl">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            {/* خلفية زخرفية */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-purple-100 rounded-3xl transform rotate-3 scale-105 opacity-50" />

                            {/* صورة المحرر البصري */}
                            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                                    <span className="font-bold text-gray-700">تخصيص الواجهة</span>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1 bg-teal-50 text-teal-600 rounded text-xs font-bold">حفظ</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-1/3 bg-gray-50 h-24 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-xs text-center p-2">
                                            اسحب صورة المنتج هنا
                                        </div>
                                        <div className="w-2/3 space-y-2">
                                            <div className="h-4 bg-gray-100 rounded w-3/4" />
                                            <div className="h-4 bg-gray-100 rounded w-1/2" />
                                            <div className="h-8 bg-purple-600 rounded-lg w-1/3 mt-4 opacity-20" />
                                        </div>
                                    </div>
                                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 flex items-center gap-3">
                                        <MousePointer2 className="text-yellow-600" size={20} />
                                        <span className="text-sm text-yellow-800">يمكنك تغيير ترتيب الأقسام بالسحب والإفلات</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
                            <CheckCircle2 size={16} /> سهولة مطلقة
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            صمم متجرك وكأنك ترتب <br />
                            <span className="text-purple-600">غرفتك الخاصة.</span>
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            نظامنا يعتمد على المرونة الكاملة. لا تحتاج لمصمم أو مبرمج لتغيير شكل موقعك.
                            قمنا بتبسيط كل شيء لتتمكن من إطلاق حملاتك وتعديل واجهتك في ثوانٍ.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "دعم كامل للغة العربية (يمين لليسار)",
                                "توصيل بوابات الدفع المحلية",
                                "قوالب متجاوبة مع جميع شاشات الجوال",
                                "دعم فني متاح 24/7 لمساعدتك"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SimplicitySection