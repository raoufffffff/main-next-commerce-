import React from 'react'
import FeatureCard from './FeatureCard';
import {
    Store,
    Zap,
    Globe,
    BarChart3,
    MousePointer2,
    ArrowLeft,
    Menu,
    X,
    Smartphone,
    CheckCircle2,
    LayoutTemplate,
    AlertCircle,
    Star,
    ShieldCheck
} from 'lucide-react';
const Features = () => {
    return (
        <section id="features" className="py-24 bg-gray-50/50" dir="rtl">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        كل ما تحتاجه للنجاح <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">في منصة واحدة</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        لا داعي للتعامل مع البرمجة أو الاستضافة أو التصميم المعقد. ركز على منتجاتك، واترك الباقي لنا.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={LayoutTemplate}
                        title="تصاميم جاهزة احترافية"
                        description="اختر من بين مئات القوالب المصممة بعناية لتناسب هويتك التجارية. عدّل الألوان والنصوص بالسحب والإفلات فقط."
                        color="bg-purple-100 text-purple-600"
                    />
                    <FeatureCard
                        icon={Smartphone}
                        title="متجر في جيبك"
                        description="أدر طلباتك، تواصل مع عملائك، وتابع أرباحك من هاتفك المحمول عبر تطبيقنا المخصص للتجار."
                        color="bg-teal-100 text-teal-600"
                    />
                    <FeatureCard
                        icon={Globe}
                        title="بيع في كل مكان"
                        description="اربط متجرك بـ انستقرام، تيك توك، وفيسبوك بضغطة زر. وسّع نطاق وصولك لعملاء جدد بسهولة."
                        color="bg-orange-100 text-orange-600"
                    />
                    <FeatureCard
                        icon={MousePointer2}
                        title="محرر السحب والإفلات"
                        description="غيّر شكل متجرك بسهولة تامة. لا تحتاج لكتابة سطر كود واحد. ما تراه هو ما يحصل عليه عميلك."
                        color="bg-green-100 text-green-600"
                    />
                    <FeatureCard
                        icon={Zap}
                        title="سرعة فائقة"
                        description="استضافة سحابية عالمية تضمن سرعة تصفح عالية لمتجرك، مما يحسن تجربة العميل ويزيد المبيعات."
                        color="bg-yellow-100 text-yellow-600"
                    />
                    <FeatureCard
                        icon={BarChart3}
                        title="تقارير ذكية"
                        description="افهم سلوك عملائك واعرف المنتجات الأكثر مبيعاً من خلال لوحة تحليلات مبسطة ومباشرة."
                        color="bg-pink-100 text-pink-600"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features