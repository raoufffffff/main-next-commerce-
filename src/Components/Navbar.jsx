import { useEffect, useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const Navbar = () => {
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
                    <Link to="/" className="hover:text-teal-500 transition-colors">الرئيسية</Link>
                    <Link to="/#features" className="hover:text-teal-500 transition-colors">المميزات</Link>
                    <Link to="/#pricing" className="hover:text-teal-500 transition-colors">الأسعار</Link>
                    <Link to="/about" className="hover:text-teal-500 transition-colors">من نحن</Link>
                    <Link to="/contact" className="hover:text-teal-500 transition-colors">تواصل معنا</Link>
                    <Link to="/Tutorial" className="hover:text-teal-500 transition-colors">المدونة التعليمية</Link>
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
                    <Link
                        onClick={() => {
                            setMobileMenuOpen(false)
                        }}
                        to="/" className="text-gray-600 font-medium">الرئيسية</Link>
                    <Link
                        onClick={() => {
                            setMobileMenuOpen(false)
                        }}
                        to="/#features" className="text-gray-600 font-medium">المميزات</Link>
                    <Link
                        onClick={() => {
                            setMobileMenuOpen(false)
                        }}
                        to="/#pricing" className="text-gray-600 font-medium">الأسعار</Link>

                    <Link
                        onClick={() => {
                            setMobileMenuOpen(false)
                        }}
                        to="/about" className="text-gray-600 font-medium">من نحن</Link>
                    <Link
                        onClick={() => {
                            setMobileMenuOpen(false)
                        }}
                        to="/contact" className="text-gray-600 font-medium">تواصل معنا</Link>
                    <Link
                        onClick={() => {
                            setMobileMenuOpen(false)
                        }}
                        to="/Tutorial" className="text-gray-600 font-medium">المدونة التعليمية</Link>
                    <div className="h-px bg-gray-100 w-full my-2" />
                    <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-purple-600 rounded-xl text-white font-bold shadow-lg shadow-purple-500/30">
                        أنشئ متجرك الآن
                    </button>
                </motion.div>
            )}
        </nav>
    );
};