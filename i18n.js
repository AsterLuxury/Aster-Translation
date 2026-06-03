/* ==========================================================
   ASTER LUXURY — Internationalisation (i18n)
   Languages: Kurdish Badini (ku) · Arabic (ar) · English (en)
   Default language on first visit: Kurdish Badini
   ========================================================== */

const I18N = {
    /* ----------------------------------------------------------
       KURDISH — BADINI (Kurmanji, Arabic script)  ·  RTL
       Default language
    ---------------------------------------------------------- */
    ku: {
        dir: 'rtl',
        lang_name: 'کوردی (بادینی)',
        currency: 'دینار',
        page_title: 'ئاستەر لۆکشەری — خشڵێن نایاب و هەلبژارتی',
        meta_desc: 'ئاستەر لۆکشەری — خشڵێن نایاب و هەلبژارتی. ل دەرئ ساناهیا بێدەنگ و دیزاینەکێ هەمیشەیی دگەهنە ئێک.',

        nav_home: 'سەرەکی',
        nav_shop: 'فرۆشگە',
        nav_story: 'چیرۆک',
        nav_contact: 'پەیوەندی',

        search_label: 'گەڕیان',
        search_placeholder: "ب نموونە 'AL-015'، 'تایبەت'، یان '10,000'",
        search_try: 'ب نموونە:',
        search_no_match: 'هیچ ئەنجام نەهاتنە دیتن — ژمارەکا وەکی AL-015 بنڤیسە',

        chip_all: 'هەمی',
        chip_new: 'نوی',
        chip_trending: 'بەرچاڤ',
        chip_exclusive: 'تایبەت',
        chip_limited: 'سنووردار',
        chip_namaya: 'نەمایا',

        cart_eyebrow: 'هەلبژارتنا تە',
        cart_title: '<em>سەبەت</em>',
        cart_empty_title: 'سەبەتا تە ڤالایە',
        cart_empty_text: 'ل سەر هەر پارچەیەکێ بتکە دا بۆ هەلبژارتنا خۆ زێدە کەی',
        cart_browse: 'بەرهەمان ببینە',
        cart_items: 'دانە',
        cart_total: 'کۆی گشتی',
        cart_note: '<i class="fas fa-info-circle"></i> کۆیا داوی ل سەر واتساپ پشتراست دبیت. گەهاندن ل هەمی عێراقێ بەردەستە.',
        cart_send: '<i class="fab fa-whatsapp"></i> داخوازی ب رێ واتساپێ بشینە',
        cart_clear: 'سەبەتێ پاقژ بکە',
        cart_cleared: 'سەبەت هاتە پاقژکرن',
        cart_confirm_clear: 'هەمی پارچە ژ سەبەتا خۆ رابکەی؟',

        hero_tag: 'کۆلێکسیۆنا هەلبژارتی · ژ سالا 2023 ڤە',
        hero_headline: '<span class="hero-word">شکۆیا</span> <span class="hero-word"><em>بێدەنگ،</em></span> <span class="hero-word">کاریگەریا</span> <span class="hero-word"><em>بهێز.</em></span>',
        hero_lede: 'کۆمەکا هەلبژارتی ژ پارچەیێن خشڵان — ب نیەت هاتینە هەلبژارتن، بۆ وان ژنان هاتینە دیزاینکرن یێن ستایلا خۆ دزانن، و ب متمانەیەکا بێدەنگ تێنە لێکرن.',
        hero_explore: 'کۆلێکسیۆنێ ببینە',
        hero_chat: '<i class="fab fa-whatsapp"></i> دگەل مە بئاخڤە',
        scroll: 'بەرەڤ خوارێ',
        meta_pieces: 'دانە',
        meta_authentic: 'ڕەسەن',
        meta_iraq: 'عێراق',
        meta_delivery: 'گەهاندنا فرەه',

        ribbon_delivery: 'گەهاندن ل هەمی عێراقێ بەردەستە',
        ribbon_authentic: 'پارچەیێن <em>ڕەسەن</em> ب کوالیتی',
        ribbon_order: 'راستەوخۆ ل سەر واتساپ داخواز بکە',

        about_label: 'ماڵا مە',
        about_title: 'ب باشی هاتینە هەلبژارتن،<br><em>ب شانازی تێنە لێکرن.</em>',
        about_lede: 'ئاستەر لۆکشەری بوتیکەکێ خشڵێن نایابە یێ هەلبژارتی، ب ئێک ئارمانج: کو پارچەیێن جوان دڤێت هندە کەسانە بن چەند جوانن. هەر پارچەیەک ل کۆلێکسیۆنا مە ب باشی بۆ کوالیتی و کاراکتەری هاتیە هەلبژارتن، پاشی راستەوخۆ دگەهیتە وان یێن جیاوازیێ دزانن.',
        feat1_title: 'هەلبژارتنا تایبەت',
        feat1_text: 'کۆمەکا بچویک، بۆ دەستڤەهنگاڤتن و کاراکتەری هەلبژارتی.',
        feat2_title: 'راستەوخۆ بۆ تە',
        feat2_text: 'بێ ناڤبەینکار. راستەوخۆ داخواز بکە، راستەوخۆ بئاخڤە، راستەوخۆ پاشەکەفتنێ بکە.',
        feat3_title: 'گەهاندن بۆ هەمی عێراقێ',
        feat3_text: 'گەهاندن ل هەمی پارێزگەهێن عێراقێ بەردەستە.',
        feat4_title: 'خزمەتا کەسی',
        feat4_text: 'هەر کڕیارەک گرنگە. راستەوخۆ ل سەر واتساپ پەیوەندیێ دگەل مە بکە.',

        shop_label: 'کۆلێکسیۆن',
        shop_title: 'هەر پارچەیەک،<br><em>پەیامەکا بێدەنگ.</em>',
        shop_lede_text: ' پارچە، هەر ئێک ژمارا خۆ یا تایبەت هەی. ل سەر هەر پارچەیەکێ بتکە دا ژ نێزیک ڤە ببینی، یان راستەوخۆ ب رێ واتساپێ داخواز بکە.',
        empty_title: 'هێشتا هیچ پارچە د ڤی فلتەری دا نینن',
        view_all: 'هەمی پارچەیان ببینە',

        callout_label: 'خزمەتا کەسی',
        callout_title: 'ل دویڤ تشتەکێ <em>دیاری دگەڕی؟</em>',
        callout_text: 'تیپا مە تنێ ب ئێک پەیامێ دویرە. بێژە مە چ دڤێی و ئەم دێ هاریکاریا تە کەین دا پارچەیا خۆ بیبینی.',
        callout_open: '<i class="fab fa-whatsapp"></i> واتساپێ ڤەکە',

        footer_tag: 'خشڵێن نایاب و هەلبژارتی بۆ رۆمانسیێ هەردەمی.',
        footer_navigate: 'گەڕان',
        footer_discover: 'کەشف',
        footer_new_arrivals: 'نوی هاتی',
        footer_reach: 'پەیوەندی دگەل مە',
        footer_delivery_note: 'گەهاندن ل هەمی عێراقێ بەردەستە',
        footer_made: 'ب <i class="fas fa-gem"></i> بۆ تە هاتیە چێکرن',

        piece: 'پارچە',
        modal_q1: 'پارچەیێن ب کوالیتی، ب وردی هەلبژارتی',
        modal_q2: 'گەهاندن ل هەمی عێراقێ بەردەستە',
        modal_q3: '100% ڕەسەن، گەرەنتیکری',
        quantity: 'بڕ',
        add_to_cart: '<i class="fas fa-plus"></i> زێدەکرن بۆ سەبەتێ',
        order_now: '<i class="fab fa-whatsapp"></i> ڤێ پارچەیێ نوکە داخواز بکە',

        view_detail: 'وردەکاری ببینە',
        added_view: 'زێدەکر · وردەکاری ببینە',
        in_cart: 'د سەبەتێ دا',
        add_to_cart_short: 'زێدەکرن بۆ سەبەتێ',
        favorite: 'دلخواز',
        remove: 'رابکە',
        decrease: 'کێمکرن',
        increase: 'زێدەکرن',
        close: 'گرتن',
        ref: 'ژمارە',

        badge_limited: 'سنووردار',
        badge_exclusive: 'تایبەت',
        badge_namaya: 'نەمایا',
        badge_new: 'نوی',
        badge_trending: 'بەرچاڤ',
        badge_featured: 'تایبەتمەند',

        fav_added: 'زێدەکر بۆ دلخوازان',
        fav_removed: 'ژ دلخوازان رابوو',
        fav_none: 'هێشتا چ دلخواز نینن — ل دلێ هەر پارچەیەکێ بتکە',
        fav_count: '{n} پارچەیێن دلخواز',
        qty_updated: 'بڕ هاتە نویکرن · ژمارە {ref}',
        added_cart: 'زێدەکر بۆ سەبەتێ · ژمارە {ref}',
        pieces_count: '{n} پارچە',
        search_result_name: 'پارچەیا ئاستەر — ژمارە {ref}',

        wa_single: 'سلاڤ ئاستەر لۆکشەری،\n\nئەز دڤێم داخوازا ڤی بکەم:\n\nژمارە: {ref}\nبها: {price}\nبڕ: {qty}\n\nتکایە زێدەتر زانیاری بدە. سپاس!',
        wa_cart_intro: 'سلاڤ ئاستەر لۆکشەری،\n\nئەز دڤێم ڤان پارچەیان داخواز بکەم:',
        wa_line: '{i}. ژمارە {ref}\n   بڕ: {qty}\n   بها: {price}\n   کۆی بەشی: {sub}',
        wa_cart_outro: '────────────────\nکۆی پارچەیان: {totalQty}\nکۆی نزیکی: {total}\n\nتکایە بەردەستی و زانیاریێن گەهاندنێ پشتراست بکە. سپاس!'
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
const DEFAULT_LANG = 'ku'; // Kurdish Badini by default on first visit

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
