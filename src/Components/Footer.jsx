import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10" dir="rtl">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-900 mb-6">
                            <img src="/logo.png" alt="متجري.كوم" className="w-16 h-16" />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            المنصة الجزائرية الأولى المتكاملة لإنشاء المتاجر الإلكترونية. نساعدك في تحويل فكرتك إلى براند حقيقي.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">المنتج</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a
                                target="_blank"
                                href="https://raoufhamoudi-nc.vercel.app/" className="hover:text-teal-500">واجهة المتجر</a></li>
                            <li><a href="#" className="hover:text-teal-500">الأسعار</a></li>
                            {/* <li><a href="#" className="hover:text-teal-500">تطبيق التاجر</a></li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">المصادر</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/tutorial" className="hover:text-teal-500">المدونة التعليمية</Link></li>
                            <li><a
                                target="_blank"
                                href="https://api.whatsapp.com/send/?phone=213776966468" className="hover:text-teal-500">مركز المساعدة</a></li>
                            <li><a href="https://custem-dashboard.onrender.com/" className="hover:text-teal-500">كيف أبدأ؟</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">الشركة</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/about" className="hover:text-teal-500">من نحن</Link></li>
                            <li><Link to="/contact" className="hover:text-teal-500">اتصل بنا</Link></li>
                            <li><Link to="/terms" className="hover:text-teal-500">الشروط والأحكام</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© {currentYear} next_commerce.com جميع الحقوق محفوظة.</p>
                    <div className="flex gap-6 text-gray-400">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=61583832365605&rdid=DB30jYOqb5nh2KaY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17s7YeQ8ZH%2F#" className="hover:text-teal-500 transition-colors">فيسبوك</a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/next_comerce/#" className="hover:text-teal-500 transition-colors">انستقرام</a>
                        <a
                            target="_blank"
                            href="https://www.tiktok.com/@nextcomerce?is_from_webapp=1&sender_device=pc" className="hover:text-teal-500 transition-colors">تيك توك</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer