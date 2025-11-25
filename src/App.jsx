import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
import './index.css';
/* --- المكونات (Components) --- */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`} dir="rtl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* الشعار */}
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight cursor-pointer">
          <img
            src="/logo.png"
            alt="next-commerce-logo"
            className="w-24 h-24 object-contain"
          />

        </div>

        {/* روابط سطح المكتب */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-teal-500 transition-colors">الرئيسية</a>
          <a href="#features" className="hover:text-teal-500 transition-colors">المميزات</a>
          <a href="#pricing" className="hover:text-teal-500 transition-colors">الأسعار</a>
        </div>

        {/* أزرار الإجراءات */}
        <div className="hidden md:flex items-center gap-4">
          <a
            target='_blank'
            href="https://custem-dashboard.onrender.com/login"
            className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors">تسجيل الدخول</a>
          <a
            target='_blank'
            href='https://custem-dashboard.onrender.com/sinin'
            className="group relative px-6 py-2.5 bg-gray-900 hover:bg-gray-800 rounded-full text-sm font-medium text-white transition-all shadow-lg shadow-gray-900/20">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              ابدأ مجاناً <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* زر القائمة للموبايل */}
        <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* قائمة الموبايل */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          <a href="#" className="text-gray-600 font-medium">الرئيسية</a>
          <a href="#features" className="text-gray-600 font-medium">المميزات</a>
          <a href="#pricing" className="text-gray-600 font-medium">الأسعار</a>
          <div className="h-px bg-gray-100 w-full my-2" />
          <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-purple-600 rounded-xl text-white font-bold shadow-lg shadow-purple-500/30">
            أنشئ متجرك الآن
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white" dir="rtl">
      {/* خلفية جمالية */}
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

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          صمم متجرك، أضف منتجاتك، وابدأ البيع فوراً.
          نوفر لك كل الأدوات اللازمة للنجاح، من الدفع الإلكتروني إلى الشحن، في منصة واحدة سهلة الاستخدام.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            target='_blank'
            href='https://custem-dashboard.onrender.com/sinin'
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-1 relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity" />
            <span className="relative">جرب المنصة مجاناً</span>
          </a>
          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 hover:border-gray-300">
            شاهد كيف تعمل <span className="bg-gray-100 p-1 rounded-full"><Zap size={14} className="fill-gray-600" /></span>
          </button>
        </motion.div>

        {/* صورة توضيحية للوحة التحكم المبسطة */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 mx-auto max-w-5xl rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none" />

          {/* شريط المتصفح الوهمي */}
          <div className="h-12 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2 flex-row-reverse justify-end">
            <div className="flex gap-1.5 flex-row-reverse">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>

          {/* محتوى لوحة التحكم المبسطة */}
          <div className="p-8 md:p-12 text-right">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* بطاقة المبيعات */}
              <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><BarChart3 size={24} /></div>
                  <div>
                    <h3 className="text-gray-400 text-sm font-medium">مبيعات هذا الشهر</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-1">45,200 د.ج</p>
                  </div>
                </div>
                {/* رسم بياني بسيط */}
                <div className="h-32 flex items-end justify-between gap-2 px-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="w-full bg-teal-500/10 rounded-t-lg relative group transition-all hover:bg-teal-500/20" style={{ height: `${h}%` }}>
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-lg transition-all duration-1000" style={{ height: '0%', animation: `grow 1s forwards ${i * 0.1}s` }} />
                      <style>{`@keyframes grow { to { height: 100%; } }`}</style>
                    </div>
                  ))}
                </div>
              </div>

              {/* قائمة المهام السريعة */}
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
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="text-gray-900" size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

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

/* --- قسم الأسعار الجديد --- */
const PricingCard = ({ title, price, period, description, features, recommended = false, buttonText, buttonVariant }) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${recommended ? 'bg-gray-900 text-white shadow-2xl scale-105 border border-gray-800 z-10' : 'bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl'}`}>
      {recommended && (
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
          <Star size={12} className="fill-white" /> خيار التوفير
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-xl font-bold mb-2 ${recommended ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`text-sm ${recommended ? 'text-gray-400' : 'text-gray-500'}`}>{description}</p>
      </div>

      <div className="mb-8 flex items-baseline">
        <span className="text-4xl font-black tracking-tight">{price}</span>
        <span className={`text-sm mr-2 ${recommended ? 'text-gray-400' : 'text-gray-500'}`}>{period}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className={`mt-0.5 min-w-[18px] ${feature.unavailable ? 'text-red-400' : (recommended ? 'text-teal-400' : 'text-teal-600')}`}>
              {feature.unavailable ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
            </div>
            <span className={`${recommended ? 'text-gray-300' : 'text-gray-600'} ${feature.unavailable ? 'opacity-70 line-through decoration-red-400/50' : ''}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-xl font-bold transition-all ${buttonVariant === 'primary'
        ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/30'
        : (recommended ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-teal-50 text-teal-700 hover:bg-teal-100')
        }`}>
        {buttonText}
      </button>
    </div>
  );
};

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
          انضم للآلاف التجار الجزائريين الذين يثقون في منصة "متجري".
          ابدأ مجاناً اليوم، وادفع فقط عندما تنجح.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10">
            أنشئ متجرك مجاناً
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-gray-700 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
            تواصل معنا واتساب
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-gray-900 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-purple-600 flex items-center justify-center text-white">
                <Store size={18} />
              </div>
              متجري.كوم
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              المنصة الجزائرية الأولى المتكاملة لإنشاء المتاجر الإلكترونية. نساعدك في تحويل فكرتك إلى براند حقيقي.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">المنتج</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-teal-500">واجهة المتجر</a></li>
              <li><a href="#" className="hover:text-teal-500">الأسعار</a></li>
              <li><a href="#" className="hover:text-teal-500">شركات التوصيل</a></li>
              <li><a href="#" className="hover:text-teal-500">تطبيق التاجر</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">المصادر</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-teal-500">المدونة التعليمية</a></li>
              <li><a href="#" className="hover:text-teal-500">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-teal-500">كيف أبدأ؟</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">الشركة</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-teal-500">من نحن</a></li>
              <li><a href="#" className="hover:text-teal-500">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-teal-500">الشروط والأحكام</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 متجري.كوم. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-teal-500 transition-colors">فيسبوك</a>
            <a href="#" className="hover:text-teal-500 transition-colors">انستقرام</a>
            <a href="#" className="hover:text-teal-500 transition-colors">لينكد إن</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <Hero />
      <Features />
      <SimplicitySection />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;