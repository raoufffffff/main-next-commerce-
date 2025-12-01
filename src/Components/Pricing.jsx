import React from 'react'
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-gray-50" dir="rtl">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        خطط تناسب <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">حجم تجارتك</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        ابدأ مجاناً واشترك عندما تحقق الأرباح. لا توجد عقود طويلة المدى أو رسوم مخفية.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

                    {/* الخطة المجانية */}
                    <PricingCard
                        title="تجربة مجانية"
                        price="0 د.ج"
                        period=""
                        description="مثالية لتجربة المنصة واستقبال أولى طلباتك."
                        buttonText="ابدأ الآن مجاناً"
                        buttonVariant="secondary"
                        features={[
                            { text: "استقبال حتى 30 طلب مجاناً" },
                            { text: "لوحة تحكم أساسية" },
                            { text: "تخصيص القوالب الجاهزة" },
                            { text: "اختفاء بيانات العملاء بعد تجاوز 30 طلب", unavailable: true },
                            { text: "اسم نطاق مخصص (Domain)", unavailable: true },
                        ]}
                    />

                    {/* خطة 3 أشهر - المميزة */}
                    <PricingCard
                        title="باقة 3 أشهر"
                        price="4900 د.ج"
                        period="/ 3 أشهر"
                        description="الخطة الأكثر توفيراً للنمو المستمر."
                        recommended={true}
                        buttonText="اشترك ووفر 20%"
                        buttonVariant="recommended"
                        features={[
                            { text: "خصم 20% مقارنة بالدفع الشهري" },
                            { text: "جميع مزايا الباقة الشهرية" },
                            { text: "عدد طلبات غير محدود" },
                            { text: "ظهور دائم لمعلومات العملاء" },
                            { text: "دعم فني ذو أولوية" },
                            { text: "إزالة شعار المنصة من متجرك" },
                        ]}
                    />

                    {/* الخطة الشهرية */}
                    <PricingCard
                        title="الباقة الشهرية"
                        price="1900 د.ج"
                        period="/ شهرياً"
                        description="مرونة كاملة مع دفع شهري بسيط."
                        buttonText="اشترك شهرياً"
                        buttonVariant="primary"
                        features={[
                            { text: "عدد طلبات غير محدود" },
                            { text: "بيانات العملاء متاحة دائماً" },
                            { text: "ربط اسم نطاق خاص (Domain)" },
                            { text: "تفعيل الدفع الإلكتروني" },
                            { text: "أدوات التسويق المتقدمة" },
                        ]}
                    />

                </div>
            </div>
        </section>
    );
};

export default Pricing