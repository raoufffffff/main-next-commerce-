import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import {
    Shield,
    Lock,
    Eye,
    Database,
    Server,
    Share2,
    Cookie,
    UserCheck,
    RefreshCcw,
    Mail,
    FileText
} from "lucide-react";

const Terms = () => {

    useEffect(() => {
        window.document.title = "سياسة الخصوصية - Next Commerce";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const sections = [
        {
            icon: <Eye className="w-5 h-5 text-purple-600" />,
            title: "1. المقدمة",
            content: (
                <p>
                    مرحباً بكم في <span className="font-bold text-gray-900">Next Commerce</span> ("نحن" / "لنا" / "منصتنا").
                    تُوضح هذه السياسة كيف نجمع، نستخدم، نخزن، ونشارك المعلومات التي نحصل عليها من المستخدمين عند استخدامهم لمنصتنا.
                    باستخدامك لـ Next Commerce، فإنك توافق على جمع ومعالجة بياناتك وفقاً للشروط الواردة أدناه.
                </p>
            )
        },
        {
            icon: <Database className="w-5 h-5 text-teal-600" />,
            title: "2. ما المعلومات التي نجمعها",
            content: (
                <div className="space-y-3">
                    <p>قد نقوم بجمع أنواع مختلفة من المعلومات حسب كيفية استخدامك للمنصة، تشمل على سبيل المثال:</p>
                    <ul className="list-disc list-inside space-y-2 marker:text-teal-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <li><span className="font-semibold">معلومات الحساب:</span> مثل الاسم، البريد الإلكتروني، رقم الهاتف، العنوان (إذا مطلوب)، بيانات الدفع (إن كانت متاحة).</li>
                        <li><span className="font-semibold">معلومات الاستخدام:</span> مثل نشاطاتك على المنصة (متاجر، طلبات، تسجيل دخول، تفضيلات).</li>
                        <li><span className="font-semibold">بيانات تقنية:</span> مثل عنوان IP، نوع المتصفح، نظام التشغيل، نشاط التصفح داخل المنصة.</li>
                        <li>معلومات أخرى تختار تقديمها طوعاً، مثل عند التواصل مع فريق الدعم أو ملء استبيانات.</li>
                    </ul>
                </div>
            )
        },
        {
            icon: <Server className="w-5 h-5 text-blue-600" />,
            title: "3. لماذا وكيف نُعالج معلوماتك",
            content: (
                <div className="space-y-3">
                    <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            "تشغيل المنصة وتقديم الخدمات (إنشاء حساب، معالجة طلبات).",
                            "تحسين تجربة المستخدم وتحليل السلوك.",
                            "لأغراض الدفع والفوترة.",
                            "للتواصل معك (إشعارات، تحديثات، دعم فني).",
                            "لأغراض الأمان ومنع الاحتيال.",
                            "لأغراض تسويقية (شريطة موافقتك الصريحة)."
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="min-w-[6px] h-[6px] rounded-full bg-purple-500 mt-1.5" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            icon: <Share2 className="w-5 h-5 text-orange-500" />,
            title: "4. مشاركة المعلومات مع أطراف ثالثة",
            content: (
                <p>
                    لن نقوم ببيع أو تأجير بياناتك الشخصية لأغراض دعائية بدون موافقتك. قد نشارك المعلومات مع مقدمي خدمات نعتمد عليهم لتشغيل المنصة
                    (مثل الاستضافة، معالجة الدفع)، أو جهات قانونية عند الضرورة القصوى والامتثال للقوانين.
                </p>
            )
        },
        {
            icon: <Lock className="w-5 h-5 text-red-500" />,
            title: "5. تخزين وحماية البيانات",
            content: (
                <p>
                    نحتفظ ببياناتك فقط طالما كانت ضرورية. نتخذ إجراءات تقنية وأمنية صارمة لمنع الوصول غير المصرح به.
                    في حال رغبتك بحذف بياناتك، يمكنك طلب ذلك عبر قنوات الاتصال الرسمية.
                </p>
            )
        },
        {
            icon: <Cookie className="w-5 h-5 text-yellow-600" />,
            title: "6. ملفات تعريف الارتباط (Cookies)",
            content: (
                <p>
                    قد نستخدم "كوكيز" أو تقنيات مماثلة لجمع بيانات الاستخدام وتحسين الأداء. سيتم إعلامك عند الدخول لأول مرة، وقد يُطلب منك الموافقة.
                </p>
            )
        },
        {
            icon: <UserCheck className="w-5 h-5 text-green-600" />,
            title: "7. حقوقك كمستخدم",
            content: (
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>الوصول إلى البيانات التي نحتفظ بها عنك.</li>
                    <li>طلب تصحيح أو تحديث بياناتك.</li>
                    <li>طلب حذف بياناتك أو تقييد معالجتها.</li>
                    <li>الاعتراض على المعالجة أو سحب الموافقة.</li>
                </ul>
            )
        },
        {
            icon: <RefreshCcw className="w-5 h-5 text-indigo-500" />,
            title: "8. التعديلات على السياسة",
            content: (
                <p>
                    قد نحدّث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر المنصة أو البريد الإلكتروني. يُنصح بمراجعة هذه الصفحة دورياً.
                </p>
            )
        },
        {
            icon: <Mail className="w-5 h-5 text-gray-700" />,
            title: "9. جهات الاتصال",
            content: (
                <div className="bg-gradient-to-r from-teal-50 to-purple-50 p-6 rounded-xl border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="font-semibold text-gray-900 mb-1">لديك استفسار حول خصوصيتك؟</p>
                        <p className="text-sm text-gray-600">نحن هنا للمساعدة في أي وقت.</p>
                    </div>
                    <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors font-medium text-sm">
                        تواصل معنا
                    </button>
                </div>
            )
        }
    ];

    return (
        <div className="relative min-h-screen bg-gray-50/50 font-sans" dir="rtl">

            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg shadow-purple-500/10 mb-6 text-teal-600">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                        سياسة الخصوصية
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        نحن نلتزم بحماية بياناتك وخصوصيتك. توضح هذه الوثيقة بشفافية كيف نتعامل مع معلوماتك في Next Commerce.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                        <FileText size={14} />
                        <span>آخر تحديث: 2025/12/01</span>
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-50">
                                <div className="p-2 bg-gray-50 rounded-lg">
                                    {section.icon}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                            </div>
                            <div className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {section.content}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center text-gray-400 text-sm"
                >
                    <p>© 2024 Next Commerce. جميع الحقوق محفوظة.</p>
                </motion.div>

            </div>
        </div>
    )
}

export default Terms;