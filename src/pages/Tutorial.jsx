import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
    Play,
    Search,
    BookOpen,
    Settings,
    ShoppingBag,
    BarChart,
    Truck,
    Palette,
    MonitorPlay
} from "lucide-react";

const Tutorial = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        window.document.title = "مركز التعليم - Next Commerce";
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    }, []);

    // Video Data with Categories
    const videos = [
        {
            id: 1,
            title: "كيفية التسجيل وإنشاء حساب جديد",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D9%83%D9%8A%D9%81%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B5%D8%A9%20nect%20comerce.mp4?alt=media&token=309d97ca-e324-42d3-8c61-2648e44dc834",
            category: "setup",
            duration: "01:30", // Estimated
            icon: <BookOpen size={20} className="text-purple-600" />
        },
        {
            id: 2,
            title: "إضافة شعار متجرك (Logo)",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D9%83%D9%8A%D9%81%D9%8A%D8%A9%20%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%B9%D9%84%D8%A7%D9%85%D8%AA%D9%83%D9%85%20%D8%A5%D9%84%D9%89%20%D9%85%D9%86%D8%B5%D8%A9%20%20next%20comerce.mp4?alt=media&token=411c4c73-cc0f-40c8-bbdf-8fdbbb5a1a7d",
            category: "design",
            duration: "02:15",
            icon: <Palette size={20} className="text-pink-600" />
        },
        {
            id: 5,
            title: "تخصيص تصميم ومظهر المتجر",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%AA%D8%B9%D8%AF%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9%20%D8%B9%D9%84%D9%89%20%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=b47fa1ad-5eba-47bf-a37b-4560615f0331",
            category: "design",
            duration: "04:20",
            icon: <Palette size={20} className="text-pink-600" />
        },
        {
            id: 7,
            title: "إضافة التصنيفات (Categories)",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D9%83%D9%8A%D9%81%D9%8A%D8%A9%20%D8%A5%D8%B8%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D9%81%D8%A6%D8%A7%D8%AA%20%D8%A7%D9%84%D9%89%20%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=86b3723e-7829-48be-8904-f60cf750aae2",
            category: "products",
            duration: "01:45",
            icon: <ShoppingBag size={20} className="text-teal-600" />
        },
        {
            id: 6,
            title: "كيفية إضافة منتج جديد",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D9%83%D9%8A%D9%81%D9%8A%D8%A9%20%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20%D9%85%D9%86%D8%AA%D8%AC%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=c588ea6d-ec59-42b4-8d7e-72100652d418",
            category: "products",
            duration: "03:10",
            icon: <ShoppingBag size={20} className="text-teal-600" />
        },
        {
            id: 3,
            title: "تعديل أسعار ومناطق التوصيل",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%AA%D8%B9%D8%AF%D9%8A%D9%84%20%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84%20next%20comerce.mp4?alt=media&token=9d932c1b-8284-48c6-8d8d-cadad861694f",
            category: "management",
            duration: "02:50",
            icon: <Truck size={20} className="text-orange-600" />
        },
        {
            id: 4,
            title: "إدارة وتأكيد الطلبات",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%AA%D8%A3%D9%83%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%D9%8A%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=1e03cbc7-3d5c-4c80-8ae5-8f6ce26ce449",
            category: "management",
            duration: "02:30",
            icon: <Settings size={20} className="text-blue-600" />
        },
        {
            id: 8,
            title: "إضافة Facebook Pixel",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20facebook%20pixel%20%D9%84%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=3bac7bd5-db6e-4a44-842d-0342b18acaa8",
            category: "marketing",
            duration: "01:50",
            icon: <BarChart size={20} className="text-blue-700" />
        },
        {
            id: 9,
            title: "إضافة TikTok Pixel",
            url: "https://firebasestorage.googleapis.com/v0/b/tawssilatrest.appspot.com/o/%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20%D8%AA%D9%8A%D9%83%D8%AA%D9%88%D9%83%20pixel%20%D9%84%D9%85%D9%86%D8%B5%D8%A9%20next%20comerce.mp4?alt=media&token=29fe7f6e-d318-42fa-a3b0-b3de7b0a1ca4",
            category: "marketing",
            duration: "01:55",
            icon: <BarChart size={20} className="text-black" />
        }
    ];

    const categories = [
        { id: "all", label: "الكل" },
        { id: "setup", label: "البداية والإعداد" },
        { id: "design", label: "التصميم" },
        { id: "products", label: "المنتجات" },
        { id: "management", label: "إدارة المتجر" },
        { id: "marketing", label: "التسويق والبيكسل" },
    ];

    // Filter Logic
    const filteredVideos = videos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "all" || video.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">

            {/* Header / Hero Section */}
            <div className="relative bg-gray-900 text-white pb-32 pt-20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-teal-300 mb-6 backdrop-blur-sm"
                    >
                        <MonitorPlay size={16} />
                        <span>أكاديمية Next Commerce</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        تعلم كيف تطلق وتدير <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-400 to-purple-400">
                            متجرك باحترافية
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        مجموعة من الفيديوهات التعليمية القصيرة لمساعدتك في كل خطوة، من التسجيل إلى أول طلب.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="عن ماذا تبحث؟ (مثال: بيكسل، منتج، شعار...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 pr-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-purple-500 transition-all shadow-xl"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-20">

                {/* Categories Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id
                                ? "bg-white text-purple-600 shadow-lg scale-105"
                                : "bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 shadow-sm"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Videos Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredVideos.map((video) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={video.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
                            >
                                {/* Video Container */}
                                <div className="relative aspect-video bg-gray-900 group-hover:opacity-100 transition-opacity">
                                    <video
                                        controls
                                        preload="metadata"
                                        className="w-full h-full object-cover"
                                        poster="" // You could add posters here if available
                                    >
                                        <source src={video.url} type="video/mp4" />
                                        متصفحك لا يدعم تشغيل الفيديو.
                                    </video>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-purple-50 transition-colors">
                                            {video.icon}
                                        </div>
                                        <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                            فيديو تعليمي
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-purple-700 transition-colors">
                                        {video.title}
                                    </h3>

                                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Play size={12} className="fill-gray-500" />
                                            شاهد الآن
                                        </span>
                                        {/* Optional: Add duration if you know it, otherwise remove */}
                                        {/* <span>{video.duration}</span> */}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredVideos.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <Search size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">لا توجد نتائج</h3>
                        <p className="text-gray-500">جرب البحث بكلمة أخرى أو تصفح جميع الفئات.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
                            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors"
                        >
                            إظهار الكل
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tutorial;