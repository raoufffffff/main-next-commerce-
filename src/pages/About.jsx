import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import {
    Rocket,
    ShieldCheck,
    LayoutDashboard,
    Users,
    Zap,
    Target,
    Globe2,
    ArrowLeft
} from "lucide-react";

const About = () => {
    // Animation variants for stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const features = [
        {
            icon: <Rocket className="w-6 h-6 text-purple-600" />,
            title: "نظام إنشاء متاجر فوري",
            description: "متجر جاهز وسريع الإعداد، يمكنك إطلاقه في دقائق دون أي تعقيد."
        },
        {
            icon: <LayoutDashboard className="w-6 h-6 text-teal-600" />,
            title: "لوحة تحكم ذكية",
            description: "إدارة شاملة للمنتجات والطلبات من مكان واحد وبكل سهولة."
        },
        {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "تجربة مستخدم سلسة",
            description: "تصميم مدروس يضمن تجربة مريحة للبائع والمشتري على حد سواء."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
            title: "أمان واستضافة سريعة",
            description: "حماية عالية للبيانات واستضافة تعتمد على أحدث تقنيات الويب."
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
            title: "تحديثات مستمرة",
            description: "نعمل دائماً على تحسين الأداء وإضافة ميزات جديدة تواكب السوق."
        }
    ];
    useEffect(() => {
        window.document.title = "من نحن - Next Commerce";
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    })
    return (
        <div className="relative min-h-screen bg-white overflow-hidden font-sans" dir="rtl">
            {/* Background Aesthetics (Consistent with Hero) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-teal-100/30 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-sm font-bold text-purple-700 mb-6">
                        <span>🚀</span>
                        <span>قصتنا وطموحنا</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        تمكين التجارة الإلكترونية <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-500 to-purple-600">
                            ببساطة واحترافية.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        <span className="font-bold text-gray-900">Next Commerce</span> هي منصة مصممة لتمكين أصحاب المتاجر وروّاد الأعمال من إطلاق مشاريعهم الإلكترونية بسرعة،
                        بدون تعقيد تقني وبدون تكلفة مبالغ فيها. رؤيتنا بسيطة: أي شخص يقدر يفتح متجر إلكتروني احترافي في دقائق... ويبدأ البيع فوراً.
                    </p>
                </motion.div>

                {/* Main Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            نعمل على توفير أدوات <span className="text-teal-600">جاهزة وذكية</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            تجمع منصتنا بين السرعة، الأداء، والتصميم العصري. سواء كنت بائعاً جديداً أو صاحب نشاط تجاري قائم،
                            تقدم لك Next Commerce الأساس المتين لإدارة منتجاتك، طلباتك، وعمليات الدفع والشحن — <span className="font-mono font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">all in one place</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                <Zap size={18} className="text-yellow-500 fill-yellow-500" />
                                <span className="font-semibold text-gray-700">سرعة فائقة</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                <ShieldCheck size={18} className="text-green-500 fill-green-500/20" />
                                <span className="font-semibold text-gray-700">حماية متكاملة</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual/Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-600 rounded-3xl rotate-3 opacity-20 blur-lg transform translate-y-4"></div>
                        <div className="relative bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden p-8 min-h-[400px] flex flex-col justify-center items-center text-center">
                            <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                                <LayoutDashboard size={48} className="text-teal-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">لوحة تحكم واحدة</h3>
                            <p className="text-gray-500 max-w-sm">
                                تحكم في كل تفاصيل متجرك من مكان واحد، صممنا الواجهة لتكون بديهية وسهلة للجميع.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Features Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">مميزاتنا</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">ماذا نقدّم في Next Commerce؟</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Globe2 className="text-teal-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                خلق بيئة تجارية رقمية تساعد أصحاب المشاريع على النمو بدون قيود تقنية،
                                ودفع التجارة الإلكترونية في المنطقة إلى مستوى جديد من الاحتراف والبساطة.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-gray-200 rounded-3xl p-10 relative overflow-hidden shadow-lg"
                    >
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                                <Target className="text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                تقديم منصة قوية وسهلة تفتح الباب أمام أي شخص يرغب في دخول عالم التجارة الإلكترونية،
                                مهما كانت خبرته التقنية.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-r from-teal-50 to-purple-50 rounded-3xl p-12 md:p-20 border border-white shadow-sm"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                        جاهز تبدأ رحلتك؟
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        انضم للآلاف من التجار الذين يثقون في Next Commerce لبناء مستقبلهم الرقمي.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href='https://custem-dashboard.onrender.com/sinin'
                            target='_blank'
                            className="px-10 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                        >
                            ابدأ مجاناً الآن
                            <ArrowLeft size={20} className="rtl:rotate-0 ltr:rotate-180" />
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;