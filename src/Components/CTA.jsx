import React from 'react'

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gray-900" dir="rtl">
            {/* عناصر الخلفية */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-900/40 via-gray-900 to-gray-900" />
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-teal-600/10 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    جاهز لإطلاق متجرك؟
                </h2>
                <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                    كن من الرواد الأوائل الذين يكتشفون مستقبل التجارة مع "next comerce".
                    ابدأ مجاناً اليوم، وادفع فقط عندما تنجح.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        target='_blank'
                        href='https://custem-dashboard.onrender.com/sinin'
                        className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10">
                        أنشئ متجرك مجاناً
                    </a>
                    <a
                        target='_blank'
                        href='https://api.whatsapp.com/send/?phone=213776966468'
                        className="w-full sm:w-auto px-10 py-4 bg-transparent border border-gray-700 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
                        تواصل معنا واتساب
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA