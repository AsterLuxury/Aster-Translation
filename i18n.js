/* ==========================================================
   ASTER LUXURY — Internationalisation (i18n)
   Languages: Kurdish Sorani (ku) · Arabic (ar) · English (en)
   Default language on first visit: Kurdish Sorani
   ========================================================== */

const I18N = {
    /* ----------------------------------------------------------
       KURDISH — SORANI (Central Kurdish, Arabic script)  ·  RTL
       Default language
    ---------------------------------------------------------- */
    ku: {
        dir: 'rtl',
        lang_name: 'کوردی (سۆرانی)',
        currency: 'دینار',
        page_title: 'ئاستەر لاکژەری — خشڵی نایاب و دەستچین',
        meta_desc: 'ئاستەر لاکژەری — خشڵی نایابی دەستچین. لەو شوێنەی کە جوانی بێدەنگ و دیزاینی هەمیشەیی پێکەوە دەگەن.',

        nav_home: 'سەرەکی',
        nav_shop: 'فرۆشگا',
        nav_story: 'چیرۆک',
        nav_contact: 'پەیوەندی',

        search_label: 'گەڕان',
        search_placeholder: "وەک 'AL-015'، 'تایبەت'، یان '10,000' تاقی بکەرەوە",
        search_try: 'تاقی بکەرەوە:',
        search_no_match: 'هیچ ئەنجامێک نەدۆزرایەوە — ژمارەیەکی وەک AL-015 بنووسە',

        chip_all: 'هەموو',
        chip_new: 'نوێ',
        chip_trending: 'بەناوبانگ',
        chip_exclusive: 'تایبەت',
        chip_limited: 'سنوردار',
        chip_namaya: 'نەمایا',

        cart_eyebrow: 'هەڵبژاردەکەت',
        cart_title: '<em>سەبەتە</em>',
        cart_empty_title: 'سەبەتەکەت بەتاڵە',
        cart_empty_text: 'بۆ زیادکردنی هەر پارچەیەک بۆ هەڵبژاردەکەت، کرتەی لێبکە',
        cart_browse: 'کۆکراوەکە ببینە',
        cart_items: 'پارچە',
        cart_total: 'کۆی گشتی',
        cart_note: '<i class="fas fa-info-circle"></i> کۆی کۆتایی لە واتساپ پشتڕاست دەکرێتەوە. گەیاندن لە سەرانسەری عێراق بەردەستە.',
        cart_send: '<i class="fab fa-whatsapp"></i> داواکاری بە واتساپ بنێرە',
        cart_clear: 'سەبەتە بەتاڵ بکەرەوە',
        cart_cleared: 'سەبەتە بەتاڵ کرایەوە',
        cart_confirm_clear: 'هەموو پارچەکان لە سەبەتەکەت لاببرێن؟',

        hero_tag: 'کۆکراوەی هەڵبژێردراو · لە ٢٠٢٣ـەوە',
        hero_headline: '<span class="hero-word">شکۆی</span> <span class="hero-word"><em>بێدەنگ،</em></span> <span class="hero-word">کاریگەری</span> <span class="hero-word"><em>بەهێز.</em></span>',
        hero_lede: 'هەڵبژاردەیەکی دەستچینی پارچە خشڵەکان — بە نیاز هەڵبژێردراون، بۆ ئەو ئافرەتەی کە شێوازی خۆی دەناسێت دیزاین کراون، و بە متمانەیەکی بێدەنگ دەپۆشرێن.',
        hero_explore: 'گەشت بە کۆکراوەکەدا بکە',
        hero_chat: '<i class="fab fa-whatsapp"></i> لەگەڵمان قسە بکە',
        scroll: 'بۆ خوارەوە',
        meta_pieces: 'پارچە',
        meta_authentic: 'ڕەسەن',
        meta_iraq: 'عێراق',
        meta_delivery: 'گەیاندنی بەرین',

        ribbon_delivery: 'گەیاندن لە سەرانسەری عێراق بەردەستە',
        ribbon_authentic: 'پارچەی <em>ڕەسەن</em> بە کوالیتی',
        ribbon_order: 'ڕاستەوخۆ لە واتساپ داوا بکە',

        about_label: 'ماڵ',
        about_title: 'بە وردی هەڵبژێردراو،<br><em>بە شانازی دەپۆشرێت.</em>',
        about_lede: 'ئاستەر لاکژەری بووتیکێکی خشڵی نایابی دەستچینە بە تەنها یەک خولیاوە: ئەوەی پارچە جوانەکان دەبێت هێندەی جوانییان کەسایەتییان هەبێت. هەر پارچەیەک لە کۆکراوەکەماندا بە وردی بۆ کوالیتی و کاراکتەر هەڵبژێردراوە، پاشان ڕاستەوخۆ دەگەیەنرێت بۆ ئەوانەی جیاوازییەکە دەزانن.',
        feat1_title: 'هەڵبژاردەی دەستچین',
        feat1_text: 'کۆکراوەیەکی بچووک، بۆ دەستکرد و کاراکتەر هەڵبژێردراو.',
        feat2_title: 'ڕاستەوخۆ بۆ تۆ',
        feat2_text: 'بەبێ ناوبژیوان. ڕاستەوخۆ داوا بکە، ڕاستەوخۆ قسە بکە، ڕاستەوخۆ پارە بپارێزە.',
        feat3_title: 'گەیاندن بۆ هەموو عێراق',
        feat3_text: 'گەیاندن لە هەموو پارێزگاکانی عێراق بەردەستە.',
        feat4_title: 'خزمەتگوزاری کەسی',
        feat4_text: 'هەموو کڕیارێک گرنگە. ڕاستەوخۆ لە واتساپ پەیوەندیمان پێوە بکە.',

        shop_label: 'کۆکراوەکە',
        shop_title: 'هەر پارچەیەک،<br><em>دەربڕینێکی بێدەنگ.</em>',
        shop_lede_text: ' پارچە، هەر یەکەیان ژمارەی ئاماژەی تایبەت بەخۆی هەیە. بۆ بینینی لە نزیکەوە کرتە لە هەر پارچەیەک بکە، یان ڕاستەوخۆ بە واتساپ داوای بکە.',
        empty_title: 'هێشتا هیچ پارچەیەک لەم فلتەرەدا نییە',
        view_all: 'هەموو پارچەکان ببینە',

        callout_label: 'خزمەتگوزاری کەسی',
        callout_title: 'بەدوای شتێکی <em>دیاریکراودا</em> دەگەڕێیت؟',
        callout_text: 'تیمەکەمان تەنها بە یەک نامەوە دوورە. پێمان بڵێ بەدوای چی دەگەڕێیت و یارمەتیت دەدەین پارچەکەت بدۆزیتەوە.',
        callout_open: '<i class="fab fa-whatsapp"></i> واتساپ بکەرەوە',

        footer_tag: 'خشڵی نایابی دەستچین بۆ ڕۆمانسی سەردەم.',
        footer_navigate: 'بەشەکان',
        footer_discover: 'بیدۆزەرەوە',
        footer_new_arrivals: 'نوێ گەیشتووەکان',
        footer_reach: 'پەیوەندیمان پێوە بکە',
        footer_delivery_note: 'گەیاندن لە سەرانسەری عێراق بەردەستە',
        footer_made: 'دروستکراوە بە <i class="fas fa-gem"></i> بۆ تۆ',

        piece: 'پارچە',
        modal_q1: 'پارچەی کوالیتی، بە وردی هەڵبژێردراو',
        modal_q2: 'گەیاندن لە سەرانسەری عێراق بەردەستە',
        modal_q3: '١٠٠٪ ڕەسەن، گەرەنتیکراو',
        quantity: 'بڕ',
        add_to_cart: '<i class="fas fa-plus"></i> زیادکردن بۆ سەبەتە',
        order_now: '<i class="fab fa-whatsapp"></i> ئێستا ئەم پارچەیە داوا بکە',

        view_detail: 'وردەکاری ببینە',
        added_view: 'زیادکرا · وردەکاری ببینە',
        in_cart: 'لە سەبەتەدا',
        add_to_cart_short: 'زیادکردن بۆ سەبەتە',
        favorite: 'دڵخواز',
        remove: 'لابردن',
        decrease: 'کەمکردنەوە',
        increase: 'زیادکردن',
        close: 'داخستن',
        ref: 'ژمارە',

        badge_limited: 'سنوردار',
        badge_exclusive: 'تایبەت',
        badge_namaya: 'نەمایا',
        badge_new: 'نوێ',
        badge_trending: 'بەناوبانگ',
        badge_featured: 'تایبەتمەند',

        fav_added: 'زیادکرا بۆ دڵخوازەکان',
        fav_removed: 'لابرا لە دڵخوازەکان',
        fav_none: 'هێشتا هیچ دڵخوازێک نییە — لەسەر دڵی هەر پارچەیەک کرتە بکە',
        fav_count: '{n} پارچەی دڵخواز',
        qty_updated: 'بڕ نوێکرایەوە · ژمارە {ref}',
        added_cart: 'زیادکرا بۆ سەبەتە · ژمارە {ref}',
        pieces_count: '{n} پارچە',
        search_result_name: 'پارچەی ئاستەر — ژمارە {ref}',

        wa_single: 'سڵاو ئاستەر لاکژەری،\n\nدەمەوێت ئەمە داوا بکەم:\n\nژمارە: {ref}\nنرخ: {price}\nبڕ: {qty}\n\nتکایە زانیاری زیاتر بنێرە. سوپاس!',
        wa_cart_intro: 'سڵاو ئاستەر لاکژەری،\n\nدەمەوێت ئەم پارچانە داوا بکەم:',
        wa_line: '{i}. ژمارە {ref}\n   بڕ: {qty}\n   نرخ: {price}\n   کۆی بەش: {sub}',
        wa_cart_outro: '────────────────\nکۆی پارچەکان: {totalQty}\nکۆی خەمڵێنراو: {total}\n\nتکایە بەردەستبوون و وردەکاری گەیاندن پشتڕاست بکەرەوە. سوپاس!'
    },

    /* ----------------------------------------------------------
       ARABIC (Modern Standard)  ·  RTL
    ---------------------------------------------------------- */
    ar: {
        dir: 'rtl',
        lang_name: 'العربية',
        currency: 'د.ع',
        page_title: 'أستر لاكشري — مجوهرات فاخرة منتقاة',
        meta_desc: 'أستر لاكشري — مجوهرات فاخرة منتقاة. حيث تلتقي الأناقة الهادئة بالتصميم الخالد.',

        nav_home: 'الرئيسية',
        nav_shop: 'المتجر',
        nav_story: 'قصتنا',
        nav_contact: 'تواصل معنا',

        search_label: 'بحث',
        search_placeholder: "جرّب 'AL-015' أو 'حصري' أو '10,000'",
        search_try: 'جرّب:',
        search_no_match: 'لا توجد نتائج — جرّب رقمًا مرجعيًا مثل AL-015',

        chip_all: 'الكل',
        chip_new: 'جديد',
        chip_trending: 'رائج',
        chip_exclusive: 'حصري',
        chip_limited: 'محدود',
        chip_namaya: 'نمايا',

        cart_eyebrow: 'مختاراتك',
        cart_title: '<em>السلة</em>',
        cart_empty_title: 'سلتك فارغة',
        cart_empty_text: 'اضغط على أي قطعة لإضافتها إلى مختاراتك',
        cart_browse: 'تصفّح المجموعة',
        cart_items: 'القطع',
        cart_total: 'المجموع',
        cart_note: '<i class="fas fa-info-circle"></i> يتم تأكيد المجموع النهائي عبر واتساب. التوصيل متاح في جميع أنحاء العراق.',
        cart_send: '<i class="fab fa-whatsapp"></i> إرسال الطلب عبر واتساب',
        cart_clear: 'تفريغ السلة',
        cart_cleared: 'تم تفريغ السلة',
        cart_confirm_clear: 'هل تريد إزالة جميع القطع من سلتك؟',

        hero_tag: 'مجموعة منتقاة · منذ 2023',
        hero_headline: '<span class="hero-word">فخامة</span> <span class="hero-word"><em>هادئة،</em></span> <span class="hero-word">حضور</span> <span class="hero-word"><em>لافت.</em></span>',
        hero_lede: 'تشكيلة منتقاة من قطع المجوهرات — مُختارة بعناية، ومصمَّمة للمرأة التي تعرف أناقتها، وتُرتدى بثقة هادئة.',
        hero_explore: 'استكشف المجموعة',
        hero_chat: '<i class="fab fa-whatsapp"></i> تحدّث معنا',
        scroll: 'مرّر',
        meta_pieces: 'قطعة',
        meta_authentic: 'أصلية',
        meta_iraq: 'العراق',
        meta_delivery: 'توصيل واسع',

        ribbon_delivery: 'التوصيل متاح في جميع أنحاء العراق',
        ribbon_authentic: 'قطع <em>أصلية</em> بجودة عالية',
        ribbon_order: 'اطلب مباشرة عبر واتساب',

        about_label: 'الدار',
        about_title: 'مُنتقاة بعناية،<br><em>تُرتدى بفخر.</em>',
        about_lede: 'أستر لاكشري بوتيك مجوهرات فاخرة منتقاة، بهَوَس واحد: أن تكون القطع الجميلة شخصية بقدر جمالها. كل قطعة في مجموعتنا مُختارة بعناية لجودتها وطابعها، ثم تُسلَّم مباشرة لمن يقدّرون الفرق.',
        feat1_title: 'تشكيلة منتقاة',
        feat1_text: 'مجموعة صغيرة، مُختارة لحرفيتها وطابعها.',
        feat2_title: 'مباشرة إليك',
        feat2_text: 'بلا وسطاء. اطلب مباشرة، تحدّث مباشرة، ووفّر مباشرة.',
        feat3_title: 'توصيل لكل العراق',
        feat3_text: 'التوصيل متاح في جميع المحافظات العراقية.',
        feat4_title: 'خدمة شخصية',
        feat4_text: 'كل عميل يهمّنا. تواصل معنا مباشرة عبر واتساب.',

        shop_label: 'المجموعة',
        shop_title: 'كل قطعة،<br><em>لمسة أناقة هادئة.</em>',
        shop_lede_text: ' قطعة، لكل منها رقمها المرجعي الخاص. اضغط على أي قطعة لرؤيتها عن قرب، أو اطلبها مباشرة عبر واتساب.',
        empty_title: 'لا توجد قطع في هذا التصنيف بعد',
        view_all: 'عرض كل القطع',

        callout_label: 'خدمة شخصية',
        callout_title: 'تبحث عن شيء <em>محدّد؟</em>',
        callout_text: 'فريقنا على بُعد رسالة واحدة. أخبرنا بما تبحث عنه وسنساعدك في العثور على قطعتك.',
        callout_open: '<i class="fab fa-whatsapp"></i> افتح واتساب',

        footer_tag: 'مجوهرات فاخرة منتقاة للرومانسي العصري.',
        footer_navigate: 'تصفّح',
        footer_discover: 'اكتشف',
        footer_new_arrivals: 'وصل حديثًا',
        footer_reach: 'تواصل معنا',
        footer_delivery_note: 'التوصيل متاح في جميع أنحاء العراق',
        footer_made: 'صُنع بـ <i class="fas fa-gem"></i> من أجلك',

        piece: 'قطعة',
        modal_q1: 'قطع عالية الجودة، مُختارة بعناية',
        modal_q2: 'التوصيل متاح في جميع أنحاء العراق',
        modal_q3: 'أصلية 100%، مضمونة',
        quantity: 'الكمية',
        add_to_cart: '<i class="fas fa-plus"></i> أضِف إلى السلة',
        order_now: '<i class="fab fa-whatsapp"></i> اطلب هذه القطعة الآن',

        view_detail: 'عرض التفاصيل',
        added_view: 'أُضيفت · عرض التفاصيل',
        in_cart: 'في السلة',
        add_to_cart_short: 'أضِف إلى السلة',
        favorite: 'المفضّلة',
        remove: 'إزالة',
        decrease: 'إنقاص',
        increase: 'زيادة',
        close: 'إغلاق',
        ref: 'مرجع',

        badge_limited: 'محدود',
        badge_exclusive: 'حصري',
        badge_namaya: 'نمايا',
        badge_new: 'جديد',
        badge_trending: 'رائج',
        badge_featured: 'مميّز',

        fav_added: 'أُضيفت إلى المفضّلة',
        fav_removed: 'أُزيلت من المفضّلة',
        fav_none: 'لا مفضّلات بعد — اضغط على القلب في أي قطعة',
        fav_count: '{n} قطعة مفضّلة',
        qty_updated: 'تم تحديث الكمية · مرجع {ref}',
        added_cart: 'أُضيفت إلى السلة · مرجع {ref}',
        pieces_count: '{n} قطعة',
        search_result_name: 'قطعة أستر — مرجع {ref}',

        wa_single: 'مرحبًا أستر لاكشري،\n\nأرغب في طلب:\n\nالمرجع: {ref}\nالسعر: {price}\nالكمية: {qty}\n\nيرجى مشاركة المزيد من التفاصيل. شكرًا!',
        wa_cart_intro: 'مرحبًا أستر لاكشري،\n\nأرغب في طلب القطع التالية:',
        wa_line: '{i}. مرجع {ref}\n   الكمية: {qty}\n   السعر: {price}\n   المجموع الجزئي: {sub}',
        wa_cart_outro: '────────────────\nإجمالي القطع: {totalQty}\nالمجموع التقديري: {total}\n\nيرجى تأكيد التوفّر وتفاصيل التوصيل. شكرًا!'
    },

    /* ----------------------------------------------------------
       ENGLISH  ·  LTR  (original copy)
    ---------------------------------------------------------- */
    en: {
        dir: 'ltr',
        lang_name: 'English',
        currency: 'IQD',
        page_title: 'Aster Luxury — Curated Fine Jewelry',
        meta_desc: 'Aster Luxury — Curated fine jewelry. Where quiet sophistication meets timeless design.',

        nav_home: 'Home',
        nav_shop: 'Shop',
        nav_story: 'Story',
        nav_contact: 'Contact',

        search_label: 'Search',
        search_placeholder: "Try 'AL-015', 'exclusive', or '10,000'",
        search_try: 'Try:',
        search_no_match: 'No matches — try a reference like AL-015',

        chip_all: 'All',
        chip_new: 'New',
        chip_trending: 'Trending',
        chip_exclusive: 'Exclusive',
        chip_limited: 'Limited',
        chip_namaya: 'Namaya',

        cart_eyebrow: 'Your Selection',
        cart_title: 'The <em>Cart</em>',
        cart_empty_title: 'Your cart is empty',
        cart_empty_text: 'Tap any piece to add it to your selection',
        cart_browse: 'Browse the collection',
        cart_items: 'Items',
        cart_total: 'Total',
        cart_note: '<i class="fas fa-info-circle"></i> Final total confirmed on WhatsApp. Delivery available across Iraq.',
        cart_send: '<i class="fab fa-whatsapp"></i> Send Order via WhatsApp',
        cart_clear: 'Clear cart',
        cart_cleared: 'Cart cleared',
        cart_confirm_clear: 'Remove all pieces from your cart?',

        hero_tag: 'Curated Collection · Since 2023',
        hero_headline: '<span class="hero-word">Quiet</span> <span class="hero-word"><em>luxury,</em></span> <span class="hero-word">loud</span> <span class="hero-word"><em>impressions.</em></span>',
        hero_lede: 'A curated edit of jewelry pieces — chosen with intention, designed for the woman who knows her own style, worn with quiet confidence.',
        hero_explore: 'Explore the collection',
        hero_chat: '<i class="fab fa-whatsapp"></i> Chat with us',
        scroll: 'Scroll',
        meta_pieces: 'Pieces',
        meta_authentic: 'Authentic',
        meta_iraq: 'Iraq',
        meta_delivery: 'Wide Delivery',

        ribbon_delivery: 'Delivery Available Across Iraq',
        ribbon_authentic: '<em>Authentic</em> Quality Pieces',
        ribbon_order: 'Order Direct on WhatsApp',

        about_label: 'The Maison',
        about_title: 'Selected with care,<br><em>worn with pride.</em>',
        about_lede: 'Aster Luxury is a curated fine jewelry boutique with one obsession: that beautiful pieces should feel as personal as they look. Every item in our collection is carefully selected for quality and character, then delivered directly to those who appreciate the difference.',
        feat1_title: 'Curated Selection',
        feat1_text: 'A small collection, chosen for craft and character.',
        feat2_title: 'Direct to You',
        feat2_text: 'No middlemen. Order direct, talk direct, save direct.',
        feat3_title: 'Iraq-Wide Delivery',
        feat3_text: 'Delivery available across all Iraqi governorates.',
        feat4_title: 'Personal Service',
        feat4_text: 'Every customer matters. Reach us directly on WhatsApp.',

        shop_label: 'The Collection',
        shop_title: 'Every piece,<br><em>a quiet statement.</em>',
        shop_lede_text: ' pieces, each with its own reference number. Tap any piece to see it up close, or order directly via WhatsApp.',
        empty_title: 'No pieces in this filter yet',
        view_all: 'View all pieces',

        callout_label: 'Personal Service',
        callout_title: 'Looking for something <em>specific?</em>',
        callout_text: "Our team is one message away. Share what you're looking for and we'll help you find your piece.",
        callout_open: '<i class="fab fa-whatsapp"></i> Open WhatsApp',

        footer_tag: 'Curated fine jewelry for the modern romantic.',
        footer_navigate: 'Navigate',
        footer_discover: 'Discover',
        footer_new_arrivals: 'New Arrivals',
        footer_reach: 'Reach Us',
        footer_delivery_note: 'Delivery available across Iraq',
        footer_made: 'Made with <i class="fas fa-gem"></i> for you',

        piece: 'Piece',
        modal_q1: 'Quality pieces, carefully selected',
        modal_q2: 'Delivery available across Iraq',
        modal_q3: '100% authentic, guaranteed',
        quantity: 'Quantity',
        add_to_cart: '<i class="fas fa-plus"></i> Add to Cart',
        order_now: '<i class="fab fa-whatsapp"></i> Order this piece now',

        view_detail: 'View detail',
        added_view: 'Added · view detail',
        in_cart: 'In cart',
        add_to_cart_short: 'Add to cart',
        favorite: 'Favorite',
        remove: 'Remove',
        decrease: 'Decrease',
        increase: 'Increase',
        close: 'Close',
        ref: 'Ref.',

        badge_limited: 'Limited',
        badge_exclusive: 'Exclusive',
        badge_namaya: 'Namaya',
        badge_new: 'New',
        badge_trending: 'Trending',
        badge_featured: 'Featured',

        fav_added: 'Added to favorites',
        fav_removed: 'Removed from favorites',
        fav_none: 'No favorites yet — tap the heart on any piece',
        fav_count: '{n} favorite piece{s}',
        qty_updated: 'Quantity updated · Ref. {ref}',
        added_cart: 'Added to cart · Ref. {ref}',
        pieces_count: '{n} piece{s}',
        search_result_name: 'Aster Piece — Ref. {ref}',

        wa_single: 'Hello Aster Luxury,\n\nI would like to order:\n\nReference: {ref}\nPrice: {price}\nQuantity: {qty}\n\nPlease share more details. Thank you!',
        wa_cart_intro: 'Hello Aster Luxury,\n\nI would like to order the following pieces:',
        wa_line: '{i}. Ref. {ref}\n   Quantity: {qty}\n   Price: {price}\n   Subtotal: {sub}',
        wa_cart_outro: '────────────────\nTotal pieces: {totalQty}\nEstimated total: {total}\n\nPlease confirm availability and delivery details. Thank you!'
    }
};

/* ==========================================================
   i18n RUNTIME
   ========================================================== */
const SUPPORTED_LANGS = ['ku', 'ar', 'en'];
const DEFAULT_LANG = 'ku'; // Kurdish Sorani by default on first visit

let __lang = (function () {
    try {
        const stored = localStorage.getItem('aster_lang');
        if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    } catch (e) { /* ignore */ }
    return DEFAULT_LANG;
})();

function getLang() { return __lang; }

function setLangStored(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    __lang = lang;
    try { localStorage.setItem('aster_lang', lang); } catch (e) { /* ignore */ }
}

/* Translate a key with optional {param} substitution.
   Special token {s} is an English-only plural suffix driven by params.n. */
function t(key, params) {
    const dict = I18N[__lang] || I18N.en;
    let str = dict[key];
    if (str == null) str = I18N.en[key];
    if (str == null) return key;

    if (params) {
        Object.keys(params).forEach((k) => {
            str = str.split('{' + k + '}').join(params[k]);
        });
    }
    // English plural suffix
    const plural = (__lang === 'en' && params && Number(params.n) !== 1) ? 's' : '';
    str = str.split('{s}').join(plural);
    return str;
}

/* Replace the "IQD" token in any price string with the localised currency. */
function localizePrice(str) {
    if (str == null) return str;
    return String(str).replace(/IQD/g, t('currency'));
}

/* Apply all static (markup) translations + document direction + fonts. */
function applyStaticI18n() {
    const dict = I18N[__lang] || I18N.en;
    const dir = dict.dir || 'ltr';

    document.documentElement.lang = __lang;
    document.documentElement.dir = dir;
    if (document.body) document.body.classList.toggle('rtl', dir === 'rtl');

    document.title = t('page_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta_desc'));

    // textContent nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });

    // innerHTML nodes (contain <em>, <br>, icons)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    // attribute translations: "attr:key;attr2:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
        el.getAttribute('data-i18n-attr').split(';').forEach((pair) => {
            const [attr, key] = pair.split(':').map((s) => s.trim());
            if (attr && key) el.setAttribute(attr, t(key));
        });
    });

    // language switcher current label
    const current = document.getElementById('lang-current');
    if (current) current.textContent = dict.lang_name;

    // mark active option
    document.querySelectorAll('.lang-option').forEach((opt) => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === __lang);
    });
}
