// Language management
let currentLang = 'en';

const translations = {
    ur: {
        tagline: 'سوات ایگرو کیمیکلز - آپ کی فصل کا محافظ',
        formTitle: 'فصل کا انتخاب کریں',
        cropLabel: 'فصل',
        stageLabel: 'فصل کا مرحلہ',
        problemLabel: 'مسئلہ کی قسم',
        diseaseLabel: 'بیماری کی قسم',
        pestLabel: 'کیڑے کی قسم',
        deficiencyLabel: 'کمی کی قسم',
        submitBtn: 'مشورہ حاصل کریں',
        selectOption: 'منتخب کریں',
        cropGroup: 'فصلیں',
        vegGroup: 'سبزیاں',
        fruitGroup: 'پھل',
        resultTitle: 'آپ کی فصل کے لیے خصوصی مشورہ',
        crop: 'فصل:',
        stage: 'مرحلہ:',
        fungicides: '🛡️ فنگی سائیڈز (بیماریوں کا علاج)',
        insecticides: '🐛 کیڑے مار ادویات',
        weedicides: '🌿 جڑی بوٹی مار ادویات',
        micronutrients: '💎 مائیکرو نیوٹریئنٹس',
        fertilizers: '🌱 کھاد کی سفارشات',
        technicalName: 'تکنیکی نام:',
        sizes: 'دستیاب سائز:',
        dosage: '💊 مقدار:',
        timing: '⏰ وقت:',
        method: '🔧 طریقہ:',
        reason: '✅ کیوں بہترین:',
        interval: '🔄 دہرانے کا وقفہ:',
        note: '📌 نوٹ:',
        // Crops
        Wheat: 'گندم',
        Rice: 'چاول',
        Cotton: 'کپاس',
        Maize: 'مکئی',
        Sugarcane: 'گنا',
        Potato: 'آلو',
        Tomato: 'ٹماٹر',
        Onion: 'پیاز',
        Chili: 'مرچ',
        Cucumber: 'کھیرا',
        Apple: 'سیب',
        Pomegranate: 'انار',
        Grapes: 'انگور',
        Apricot: 'خوبانی',
        Almond: 'بادام',
        Peach: 'آڑو',
        Plum: 'آلوچہ',
        Cherry: 'چیری',
        Walnut: 'اخروٹ',
        Pistachio: 'پستہ',
        Date: 'کھجور',
        Melon: 'خربوزہ',
        // Stages
        Seedling: 'شروعاتی',
        Vegetative: 'نشوونما',
        Flowering: 'پھول آنا',
        Fruiting: 'پھل بننا',
        Maturity: 'پختگی',
        // Problem types
        Fungal: 'فنگل بیماری',
        Pest: 'کیڑے',
        Weed: 'جڑی بوٹی',
        Nutrient: 'غذائی کمی',
        General: 'عام دیکھ بھال',
        // Diseases
        'Leaf Spot': 'پتوں پر دھبے',
        Rust: 'زنگ',
        Blight: 'جھلسا',
        'Powdery Mildew': 'سفید پاؤڈر',
        'Root Rot': 'جڑ سڑن',
        // Pests
        Aphids: 'چپکے',
        Whitefly: 'سفید مکھی',
        Bollworm: 'ٹنڈے',
        Thrips: 'تھرپس',
        Mites: 'مائٹس',
        'Stem Borer': 'تنا سنڈی',
        // Nutrients
        Nitrogen: 'نائٹروجن',
        Phosphorus: 'فاسفورس',
        Potassium: 'پوٹاشیم',
        Iron: 'آئرن',
        Zinc: 'زنک',
        Boron: 'بوران',
        Calcium: 'کیلشیم'
    },
    en: {
        tagline: 'Your Crop\'s Protector',
        formTitle: 'Select Your Crop',
        cropLabel: 'Crop',
        stageLabel: 'Crop Stage',
        problemLabel: 'Problem Type',
        diseaseLabel: 'Disease Type',
        pestLabel: 'Pest Type',
        deficiencyLabel: 'Deficiency Type',
        submitBtn: 'Get Recommendation',
        selectOption: 'Select',
        cropGroup: 'Crops',
        vegGroup: 'Vegetables',
        fruitGroup: 'Fruits',
        resultTitle: 'Specialized Recommendation for Your Crop',
        crop: 'Crop:',
        stage: 'Stage:',
        fungicides: '🛡️ Fungicides (Disease Control)',
        insecticides: '🐛 Insecticides (Pest Control)',
        weedicides: '🌿 Weedicides (Weed Control)',
        micronutrients: '💎 Micronutrients',
        fertilizers: '🌱 Fertilizer Recommendations',
        technicalName: 'Technical Name:',
        sizes: 'Available Sizes:',
        dosage: '💊 Dosage:',
        timing: '⏰ Timing:',
        method: '🔧 Method:',
        reason: '✅ Why Best:',
        interval: '🔄 Repeat Interval:',
        note: '📌 Note:',
        // Crops
        Wheat: 'Wheat',
        Rice: 'Rice',
        Cotton: 'Cotton',
        Maize: 'Maize',
        Sugarcane: 'Sugarcane',
        Potato: 'Potato',
        Tomato: 'Tomato',
        Onion: 'Onion',
        Chili: 'Chili',
        Cucumber: 'Cucumber',
        Apple: 'Apple',
        Pomegranate: 'Pomegranate',
        Grapes: 'Grapes',
        Apricot: 'Apricot',
        Almond: 'Almond',
        Peach: 'Peach',
        Plum: 'Plum',
        Cherry: 'Cherry',
        Walnut: 'Walnut',
        Pistachio: 'Pistachio',
        Date: 'Date Palm',
        Melon: 'Melon',
        // Stages
        Seedling: 'Seedling',
        Vegetative: 'Vegetative',
        Flowering: 'Flowering',
        Fruiting: 'Fruiting',
        Maturity: 'Maturity',
        // Problem types
        Fungal: 'Fungal Disease',
        Pest: 'Pest',
        Weed: 'Weed',
        Nutrient: 'Nutrient Deficiency',
        General: 'General Care',
        // Diseases
        'Leaf Spot': 'Leaf Spot',
        Rust: 'Rust',
        Blight: 'Blight',
        'Powdery Mildew': 'Powdery Mildew',
        'Root Rot': 'Root Rot',
        // Pests
        Aphids: 'Aphids',
        Whitefly: 'Whitefly',
        Bollworm: 'Bollworm',
        Thrips: 'Thrips',
        Mites: 'Mites',
        'Stem Borer': 'Stem Borer',
        // Nutrients
        Nitrogen: 'Nitrogen',
        Phosphorus: 'Phosphorus',
        Potassium: 'Potassium',
        Iron: 'Iron',
        Zinc: 'Zinc',
        Boron: 'Boron',
        Calcium: 'Calcium'
    }
};

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update body class for direction and text display
    document.body.className = lang === 'ur' ? 'urdu-mode' : 'english-mode';
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang === 'ur' ? 'ur' : 'en';
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    
    updateTexts();
}

function updateTexts() {
    const t = translations[currentLang];
    
    // Update labels
    document.getElementById('tagline').textContent = t.tagline;
    document.getElementById('formTitle').textContent = t.formTitle;
    document.getElementById('cropLabel').textContent = t.cropLabel;
    document.getElementById('stageLabel').textContent = t.stageLabel;
    document.getElementById('problemLabel').textContent = t.problemLabel;
    document.getElementById('diseaseLabel').textContent = t.diseaseLabel;
    document.getElementById('pestLabel').textContent = t.pestLabel;
    document.getElementById('deficiencyLabel').textContent = t.deficiencyLabel;
    document.getElementById('submitBtn').textContent = t.submitBtn;
    
    // Update optgroup labels
    document.getElementById('cropGroup').label = t.cropGroup;
    document.getElementById('vegGroup').label = t.vegGroup;
    document.getElementById('fruitGroup').label = t.fruitGroup;
    
    // Update all select placeholders
    updateSelectOptions('crop', t);
    updateSelectOptions('cropStage', t);
    updateSelectOptions('problemType', t);
    updateSelectOptions('disease', t);
    updateSelectOptions('pest', t);
    updateSelectOptions('deficiency', t);
}

function updateSelectOptions(selectId, t) {
    const select = document.getElementById(selectId);
    const options = select.querySelectorAll('option');
    
    options.forEach(option => {
        const value = option.value;
        if (value === '') {
            option.textContent = t.selectOption;
        } else if (t[value]) {
            option.textContent = t[value];
        }
    });
}

// Show/hide conditional fields
document.getElementById('problemType').addEventListener('change', function() {
    const selectedValue = this.value;
    
    document.getElementById('diseaseGroup').style.display = 
        selectedValue === 'Fungal' ? 'flex' : 'none';
    
    document.getElementById('pestGroup').style.display = 
        selectedValue === 'Pest' ? 'flex' : 'none';
    
    document.getElementById('deficiencyGroup').style.display = 
        selectedValue === 'Nutrient' ? 'flex' : 'none';
});

function getRecommendation(event) {
    event.preventDefault();
    
    const crop = document.getElementById('crop').value;
    const stage = document.getElementById('cropStage').value;
    const problemType = document.getElementById('problemType').value;
    const disease = document.getElementById('disease').value;
    const pest = document.getElementById('pest').value;
    
    // Get selected deficiencies (if any)
    const deficiencies = Array.from(document.getElementById('deficiency').selectedOptions)
        .map(opt => opt.value);
    
    const recommendations = generateRecommendations(crop, stage, problemType, disease, pest, deficiencies);
    displayRecommendations(recommendations, crop, stage);
}

function generateRecommendations(crop, stage, problemType, disease, pest, deficiencies) {
    const rec = {
        fungicides: [],
        insecticides: [],
        weedicides: [],
        micronutrients: [],
        fertilizers: []
    };
    
    // FUNGAL DISEASE RECOMMENDATIONS
    if (problemType === 'Fungal' && disease) {
        if (disease === 'Leaf Spot') {
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'BAMBOOSA 56%SC'),
                dosage: '250-300 ml/acre',
                timing: currentLang === 'ur' ? 'علامات نظر آنے پر فوری' : 'Immediately upon symptoms',
                method: currentLang === 'ur' ? 'پتوں پر مکمل اسپرے' : 'Complete foliar spray',
                reason: currentLang === 'ur' ? 'Chlorothalonil + Azoxystrobin کا مرکب - دو طریقوں سے بیماری پر کام کرتا ہے، بہترین روک تھام' : 'Dual action of Chlorothalonil + Azoxystrobin provides excellent preventive and curative control',
                interval: currentLang === 'ur' ? '10-14 دن بعد دوبارہ' : 'Repeat after 10-14 days'
            });
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'COBOX 50WP'),
                dosage: '500-750 gm/acre',
                timing: currentLang === 'ur' ? 'بیماری کی ابتدا میں' : 'At disease onset',
                method: currentLang === 'ur' ? 'پتوں اور تنوں پر' : 'On leaves and stems',
                reason: currentLang === 'ur' ? 'Copper Oxychloride 50% - طاقتور حفاظتی فنگی سائیڈ، متعدد بیماریوں کے خلاف موثر' : 'High copper content provides broad-spectrum protective action',
                interval: currentLang === 'ur' ? '7-10 دن' : '7-10 days'
            });
        }
        else if (disease === 'Rust') {
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'NANOK 25%SC'),
                dosage: '200-250 ml/acre',
                timing: currentLang === 'ur' ? 'زنگ کی ابتدائی علامات پر' : 'At first rust symptoms',
                method: currentLang === 'ur' ? 'مکمل فصل پر اسپرے' : 'Complete crop spray',
                reason: currentLang === 'ur' ? 'Flutriafol + Azoxystrobin - زنگ کے خلاف سب سے موثر، طویل تحفظ' : 'Highly effective against rust with long-lasting systemic protection',
                interval: currentLang === 'ur' ? '14-21 دن' : '14-21 days'
            });
        }
        else if (disease === 'Blight') {
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'FANTIC M'),
                dosage: '500 gm/acre',
                timing: currentLang === 'ur' ? 'جھلسے کی علامات پر فوری' : 'Immediately at blight symptoms',
                method: currentLang === 'ur' ? 'پوری فصل پر' : 'Whole crop coverage',
                reason: currentLang === 'ur' ? 'Benalaxyl-M + Mancozeb - جھلسے کے لیے خاص فارمولیشن، تیز اور طویل اثر' : 'Specialized for blight with both contact and systemic action',
                interval: currentLang === 'ur' ? '7-10 دن' : '7-10 days'
            });
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'MIXTAN 60% SC'),
                dosage: '300-350 ml/acre',
                timing: currentLang === 'ur' ? 'ابتدائی مرحلے میں' : 'Early stage',
                method: currentLang === 'ur' ? 'کامل کوریج' : 'Complete coverage',
                reason: currentLang === 'ur' ? 'Dimethomorph + Chlorothalonil - Late blight اور Early blight دونوں کے خلاف' : 'Effective against both early and late blight',
                interval: currentLang === 'ur' ? '10-14 دن' : '10-14 days'
            });
        }
        else if (disease === 'Powdery Mildew') {
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'NETZSCHWEFEL STULLN DF'),
                dosage: '3-4 kg/acre',
                timing: currentLang === 'ur' ? 'سفید پاؤڈر نظر آتے ہی' : 'As soon as white powder appears',
                method: currentLang === 'ur' ? 'پتوں پر مکمل اسپرے' : 'Complete leaf spray',
                reason: currentLang === 'ur' ? 'Sulfur 80% - Powdery Mildew کے خلاف بہترین، فطری اور محفوظ' : 'Natural and highly effective against powdery mildew',
                interval: currentLang === 'ur' ? '7-10 دن' : '7-10 days'
            });
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'TOP GUARD 30%SC'),
                dosage: '200-250 ml/acre',
                timing: currentLang === 'ur' ? 'ابتدائی علامات' : 'Early symptoms',
                method: currentLang === 'ur' ? 'پوری فصل' : 'Whole crop',
                reason: currentLang === 'ur' ? 'Flutriafol + Tebuconazole - دوہرا Triazole action، بہترین علاج اور روک تھام' : 'Dual triazole provides excellent curative and preventive control',
                interval: currentLang === 'ur' ? '14-21 دن' : '14-21 days'
            });
        }
        else if (disease === 'Root Rot') {
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'DOMARK XL'),
                dosage: '150-200 ml/acre',
                timing: currentLang === 'ur' ? 'ابتدائی مرحلے میں' : 'Early stage',
                method: currentLang === 'ur' ? 'زمین میں پانی کے ساتھ' : 'Soil drench with irrigation',
                reason: currentLang === 'ur' ? 'Azoxystrobin + Tetraconazole - جڑوں میں جا کر بیماری ختم کرتا ہے' : 'Systemic action reaches roots to control rot',
                interval: currentLang === 'ur' ? '21-28 دن' : '21-28 days'
            });
        }
    }
    
    // PEST CONTROL RECOMMENDATIONS
    if (problemType === 'Pest' && pest) {
        if (pest === 'Aphids' || pest === 'Whitefly') {
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'ACITOX 20% W/V SL'),
                dosage: '200-250 ml/acre',
                timing: currentLang === 'ur' ? 'کیڑوں کی تعداد زیادہ ہونے پر' : 'When pest population increases',
                method: currentLang === 'ur' ? 'پتوں کی نچلی سطح پر اسپرے' : 'Spray on lower leaf surface',
                reason: currentLang === 'ur' ? 'Acetamiprid 20% - چپکے اور سفید مکھی کے لیے بہترین، تیز اثر، 20-25 دن تحفظ' : 'Excellent systemic action against sucking pests, 20-25 days protection',
                interval: currentLang === 'ur' ? '20-25 دن' : '20-25 days'
            });
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'DAZZ 18% OD'),
                dosage: '200-250 ml/acre',
                timing: currentLang === 'ur' ? 'چپکے/سفید مکھی کی شدت' : 'Heavy aphid/whitefly infestation',
                method: currentLang === 'ur' ? 'پوری فصل پر' : 'Whole crop',
                reason: currentLang === 'ur' ? 'Acetamiprid + Flonicamid - دوہری کارروائی، تیز نتائج، 25-30 دن تک موثر' : 'Dual mode of action provides fast knockdown and long residual',
                interval: currentLang === 'ur' ? '25-30 دن' : '25-30 days'
            });
        }
        else if (pest === 'Bollworm') {
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'EMAMECTIN BENZ. 1.9EC'),
                dosage: '350-400 ml/acre',
                timing: currentLang === 'ur' ? 'ٹنڈوں کی ابتدا' : 'At egg hatching',
                method: currentLang === 'ur' ? 'پھولوں اور پھلوں پر' : 'On flowers and bolls',
                reason: currentLang === 'ur' ? 'Emamectin Benzoate - ٹنڈوں کے خلاف سب سے طاقتور، فوری اثر، 15-20 دن تحفظ' : 'Most powerful against bollworms, immediate action, long protection',
                interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
            });
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'PIRAPROL 30% SC'),
                dosage: '80-100 ml/acre',
                timing: currentLang === 'ur' ? 'ٹنڈوں کی شدید موجودگی' : 'Heavy bollworm pressure',
                method: currentLang === 'ur' ? 'شام کے وقت' : 'Evening application',
                reason: currentLang === 'ur' ? 'Chlorfenapyr + Chlorantraniliprole - نئی نسل، مزاحمت توڑتا ہے' : 'New generation combination breaks resistance',
                interval: currentLang === 'ur' ? '18-21 دن' : '18-21 days'
            });
        }
        else if (pest === 'Thrips') {
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'ASTRIS GOLD 20% SC'),
                dosage: '80-100 ml/acre',
                timing: currentLang === 'ur' ? 'تھرپس کی ابتدا' : 'At thrips appearance',
                method: currentLang === 'ur' ? 'پتوں اور پھولوں پر' : 'On leaves and flowers',
                reason: currentLang === 'ur' ? 'Lufenuron + Lambda-cyhalothrin - تھرپس کے لیے بہترین مرکب، تیز اور دیرپا اثر' : 'Excellent combination for thrips with growth regulator + contact',
                interval: currentLang === 'ur' ? '12-15 دن' : '12-15 days'
            });
        }
        else if (pest === 'Mites') {
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'PROPARGITE'),
                dosage: '800 ml - 1 L/acre',
                timing: currentLang === 'ur' ? 'مائٹس کی موجودگی' : 'At mite presence',
                method: currentLang === 'ur' ? 'پتوں کی نچلی سطح' : 'Lower leaf surface',
                reason: currentLang === 'ur' ? 'Propargite 57% - مائٹس کے لیے مخصوص، تمام عمریں ختم کرتا ہے' : 'Specialized miticide, controls all life stages',
                interval: currentLang === 'ur' ? '10-15 دن' : '10-15 days'
            });
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'SPARLA 10.5%'),
                dosage: '400-500 ml/acre',
                timing: currentLang === 'ur' ? 'مائٹس کی شدت' : 'Heavy mite infestation',
                method: currentLang === 'ur' ? 'مکمل کوریج' : 'Complete coverage',
                reason: currentLang === 'ur' ? 'Pyridaben + Abamectin - دوہرا اثر، انڈوں سے لے کر بالغ تک' : 'Dual action controls eggs to adults',
                interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
            });
        }
        else if (pest === 'Stem Borer') {
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'CHLORPYRIFOS 40EC'),
                dosage: '800 ml - 1 L/acre',
                timing: currentLang === 'ur' ? 'Dead heart کی علامات' : 'At dead heart symptoms',
                method: currentLang === 'ur' ? 'تنے کی بنیاد پر' : 'At stem base',
                reason: currentLang === 'ur' ? 'Chlorpyrifos 40% - تنا سنڈی کے لیے موثر، اندر جا کر ختم کرتا ہے' : 'Penetrates stems to kill borers effectively',
                interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
            });
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'BOLTON 31%EC'),
                dosage: '350-400 ml/acre',
                timing: currentLang === 'ur' ? 'ابتدائی مرحلہ' : 'Early stage',
                method: currentLang === 'ur' ? 'پوری فصل' : 'Whole crop',
                reason: currentLang === 'ur' ? 'Chlorpyrifos + Cyhalothrin - دوہری کارروائی، زیادہ موثر' : 'Combination provides enhanced borer control',
                interval: currentLang === 'ur' ? '18-21 دن' : '18-21 days'
            });
        }
    }
    
    // FRUIT TREE PEST CONTROL
    if ((crop === 'Apple' || crop === 'Pomegranate' || crop === 'Grapes' || 
         crop === 'Apricot' || crop === 'Peach' || crop === 'Plum' || crop === 'Cherry') && 
        problemType === 'Pest') {
        
        // Common fruit pests
        if (!pest || pest === 'Aphids' || pest === 'Whitefly') {
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'ACITOX 20% W/V SL'),
                dosage: currentLang === 'ur' ? '200-250 ملی لیٹر فی ایکڑ' : '200-250 ml/acre',
                timing: currentLang === 'ur' ? 'کیڑوں کی شروعات میں' : 'At pest appearance',
                method: currentLang === 'ur' ? 'پتوں کی نچلی سطح پر' : 'Lower leaf surface',
                reason: currentLang === 'ur' ? 'پھلوں کے درختوں میں چوسنے والے کیڑوں کے خلاف موثر' : 'Effective against sucking pests in fruit trees',
                interval: currentLang === 'ur' ? '20-25 دن' : '20-25 days'
            });
        }
        
        if (pest === 'Mites' || crop === 'Grapes') {
            rec.insecticides.push({
                product: PRODUCTS.INSECTICIDES.find(p => p.name === 'PROPARGITE'),
                dosage: currentLang === 'ur' ? '800 ملی لیٹر - 1 لیٹر فی ایکڑ' : '800 ml - 1 L/acre',
                timing: currentLang === 'ur' ? 'مائٹس نظر آنے پر' : 'At mite presence',
                method: currentLang === 'ur' ? 'پتوں کی نچلی سطح' : 'Lower leaf surface',
                reason: currentLang === 'ur' ? 'انگور اور پھلوں میں مائٹس کنٹرول کے لیے خاص' : 'Specialized for mite control in grapes and fruits',
                interval: currentLang === 'ur' ? '10-15 دن' : '10-15 days'
            });
        }
    }
    
    // FRUIT DISEASE CONTROL
    if ((crop === 'Apple' || crop === 'Pomegranate' || crop === 'Grapes' || 
         crop === 'Apricot' || crop === 'Peach' || crop === 'Plum' || crop === 'Cherry') && 
        problemType === 'Fungal') {
        
        if (!disease || disease === 'Powdery Mildew') {
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'NETZSCHWEFEL STULLN DF'),
                dosage: currentLang === 'ur' ? '3-4 کلو فی ایکڑ' : '3-4 kg/acre',
                timing: currentLang === 'ur' ? 'بیماری کی شروعات' : 'At disease onset',
                method: currentLang === 'ur' ? 'پوری فصل پر' : 'Complete crop coverage',
                reason: currentLang === 'ur' ? 'Sulfur 80% - پھلوں میں پاؤڈری ملڈیو کے لیے بہترین' : 'Best for powdery mildew on fruits',
                interval: currentLang === 'ur' ? '7-10 دن' : '7-10 days'
            });
        }
        
        if (disease === 'Rust' || disease === 'Leaf Spot') {
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'NANOK 25%SC'),
                dosage: currentLang === 'ur' ? '200-250 ملی لیٹر فی ایکڑ' : '200-250 ml/acre',
                timing: currentLang === 'ur' ? 'ابتدائی علامات' : 'Early symptoms',
                method: currentLang === 'ur' ? 'مکمل اسپرے' : 'Complete spray',
                reason: currentLang === 'ur' ? 'پھلوں کے درختوں میں زنگ اور لیف سپاٹ کے لیے موثر' : 'Effective for rust and leaf spot in fruit trees',
                interval: currentLang === 'ur' ? '14-21 دن' : '14-21 days'
            });
        }
        
        if (disease === 'Blight' || crop === 'Pomegranate') {
            rec.fungicides.push({
                product: PRODUCTS.FUNGICIDES.find(p => p.name === 'COBOX 50WP'),
                dosage: currentLang === 'ur' ? '500-750 گرام فی ایکڑ' : '500-750 gm/acre',
                timing: currentLang === 'ur' ? 'بارش کے بعد' : 'After rain',
                method: currentLang === 'ur' ? 'پتوں اور پھلوں پر' : 'On leaves and fruits',
                reason: currentLang === 'ur' ? 'Copper 50% - انار میں بیکٹیریل بلائٹ کے لیے' : 'Copper for bacterial blight on pomegranate',
                interval: currentLang === 'ur' ? '10-14 دن' : '10-14 days'
            });
        }
    }
    
    // WEED CONTROL RECOMMENDATIONS  
    if (problemType === 'Weed') {
        if (crop === 'Wheat') {
            rec.weedicides.push({
                product: PRODUCTS.WEEDICIDES.find(p => p.name === 'PROTOKEY'),
                dosage: '125 ml/acre',
                timing: currentLang === 'ur' ? 'بیج کاری کے 30-35 دن بعد' : '30-35 days after sowing',
                method: currentLang === 'ur' ? 'چوڑے اور تنگ پتوں والی جڑی بوٹیوں پر' : 'Broad & narrow leaf weeds',
                reason: currentLang === 'ur' ? 'Clodinafop-Propargyl - گندم کے لیے محفوظ، Phalaris اور wild oat کے خلاف بہترین' : 'Safe for wheat, excellent against grassy weeds',
                note: currentLang === 'ur' ? 'صبح یا شام اسپرے کریں' : 'Spray in morning or evening'
            });
            rec.weedicides.push({
                product: PRODUCTS.WEEDICIDES.find(p => p.name === 'TRI-ULTRA 25% OD'),
                dosage: '400 ml/acre',
                timing: currentLang === 'ur' ? 'جڑی بوٹی 2-3 پتوں پر' : 'Weeds at 2-3 leaf stage',
                method: currentLang === 'ur' ? 'پوری فصل پر' : 'Broadcast',
                reason: currentLang === 'ur' ? 'Mesosulfuron + MCPA - چوڑے پتوں اور کچھ تنگ پتوں والی جڑی بوٹیاں' : 'Controls broad and some narrow leaf weeds',
                note: currentLang === 'ur' ? '200 لیٹر پانی فی ایکڑ' : '200L water per acre'
            });
        }
        else if (crop === 'Rice') {
            rec.weedicides.push({
                product: PRODUCTS.WEEDICIDES.find(p => p.name === 'BISPYRIBAC'),
                dosage: '100 gm/acre',
                timing: currentLang === 'ur' ? 'ٹرانسپلانٹ کے 15-20 دن بعد' : '15-20 days after transplanting',
                method: currentLang === 'ur' ? 'کھڑے پانی میں' : 'In standing water',
                reason: currentLang === 'ur' ? 'Bispyribac + Bensulfuron - چاول میں تمام قسم کی جڑی بوٹیاں کنٹرول' : 'Controls all types of rice weeds effectively',
                note: currentLang === 'ur' ? 'پانی 3-4 دن رکھیں' : 'Keep water for 3-4 days'
            });
        }
        else if (crop === 'Cotton' || crop === 'Maize') {
            rec.weedicides.push({
                product: PRODUCTS.WEEDICIDES.find(p => p.name === 'FULL CLEAR'),
                dosage: '1 L/acre',
                timing: currentLang === 'ur' ? 'بیج کاری کے فوراً بعد' : 'Immediately after sowing',
                method: currentLang === 'ur' ? 'زمین پر Pre-emergence' : 'Soil Pre-emergence',
                reason: currentLang === 'ur' ? 'Metolachlor + Pendimethalin - جڑی بوٹی نکلنے سے پہلے، 40-45 دن تحفظ' : 'Pre-emergence control, 40-45 days protection',
                note: currentLang === 'ur' ? 'نمی ضروری ہے' : 'Soil moisture required'
            });
            rec.weedicides.push({
                product: PRODUCTS.WEEDICIDES.find(p => p.name === 'S-METOLACHLOR 960 EC'),
                dosage: '800 ml/acre',
                timing: currentLang === 'ur' ? 'بیج کاری کے 2-3 دن اندر' : 'Within 2-3 days of sowing',
                method: currentLang === 'ur' ? 'Pre-emergence' : 'Pre-emergence',
                reason: currentLang === 'ur' ? 'S-Metolachlor - طاقتور pre-emergence، 35-40 دن کنٹرول' : 'Powerful pre-emergence with 35-40 days control',
                note: currentLang === 'ur' ? 'فصل پر نہ لگے' : 'Avoid crop contact'
            });
        }
        
        // General weedicide for all crops
        rec.weedicides.push({
            product: PRODUCTS.WEEDICIDES.find(p => p.name === 'GLYPHOSATE 48%SL'),
            dosage: '1-1.5 L/acre',
            timing: currentLang === 'ur' ? 'فصل سے پہلے یا قطاروں کے درمیان' : 'Before crop or between rows',
            method: currentLang === 'ur' ? 'ہری جڑی بوٹیوں پر' : 'On green weeds',
            reason: currentLang === 'ur' ? 'Glyphosate 48% - تمام قسم کی جڑی بوٹیاں ختم کرتا ہے، جڑ تک اثر' : 'Non-selective, kills all weeds including roots',
            note: currentLang === 'ur' ? 'احتیاط: فصل پر نہ لگے' : 'CAUTION: Avoid crop contact'
        });
    }
    
    // NUTRIENT DEFICIENCY RECOMMENDATIONS
    if (problemType === 'Nutrient' && deficiencies.length > 0) {
        deficiencies.forEach(def => {
            if (def === 'Nitrogen') {
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'SPEEDFOL - N 28-8-14'),
                    dosage: '1-1.5 kg/acre',
                    timing: currentLang === 'ur' ? 'نشوونما کے مرحلے میں' : 'Vegetative stage',
                    method: currentLang === 'ur' ? 'پانی میں حل کر کے اسپرے' : 'Foliar spray',
                    reason: currentLang === 'ur' ? 'اعلیٰ نائٹروجن 28% - پتوں کی پیلاہٹ فوری ختم، تیز نشوونما' : 'High N content for rapid greening and growth',
                    interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
                });
            }
            else if (def === 'Phosphorus') {
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'HI-PHOS (Liquid)'),
                    dosage: '1 L/acre',
                    timing: currentLang === 'ur' ? 'پھول آنے سے پہلے' : 'Before flowering',
                    method: currentLang === 'ur' ? 'پتوں پر اسپرے یا ڈرپ' : 'Foliar or drip',
                    reason: currentLang === 'ur' ? 'P=44% - سب سے زیادہ فاسفورس، جڑوں اور پھولوں کی نشوونما' : 'Highest P content for root and flower development',
                    interval: currentLang === 'ur' ? '20-25 دن' : '20-25 days'
                });
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'SPEEDFOL - P 12-40-14'),
                    dosage: '1 kg/acre',
                    timing: currentLang === 'ur' ? 'پھول اور پھل کے مرحلے' : 'Flowering and fruiting',
                    method: currentLang === 'ur' ? 'پتوں پر' : 'Foliar',
                    reason: currentLang === 'ur' ? 'P=40% - پھولوں کی تعداد بڑھاتا ہے، پھل مضبوط' : 'Increases flowering and fruit set',
                    interval: currentLang === 'ur' ? '20 دن' : '20 days'
                });
            }
            else if (def === 'Potassium') {
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'HI-K'),
                    dosage: '1 L/acre',
                    timing: currentLang === 'ur' ? 'پھل بننے کے مرحلے میں' : 'Fruiting stage',
                    method: currentLang === 'ur' ? 'پتوں پر یا ڈرپ' : 'Foliar or drip',
                    reason: currentLang === 'ur' ? 'K=49.8% - سب سے زیادہ پوٹاشیم، پھلوں کا سائز اور معیار بہتر' : 'Highest K for fruit size, quality and disease resistance',
                    interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
                });
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'SPEEDFOL - K 10-10-40'),
                    dosage: '1-1.5 kg/acre',
                    timing: currentLang === 'ur' ? 'پھل کی پختگی' : 'Fruit maturity',
                    method: currentLang === 'ur' ? 'پتوں پر' : 'Foliar',
                    reason: currentLang === 'ur' ? 'K=40% - پھل میٹھے اور رنگین، storage بہتر' : 'Improves fruit sweetness, color and shelf life',
                    interval: currentLang === 'ur' ? '15 دن' : '15 days'
                });
            }
            else if (def === 'Iron') {
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'ULTRASOL MICRO REXENE FEQ48'),
                    dosage: '500 gm - 1 kg/acre',
                    timing: currentLang === 'ur' ? 'پیلاہٹ نظر آتے ہی' : 'At chlorosis appearance',
                    method: currentLang === 'ur' ? 'ڈرپ یا پتوں پر' : 'Drip or foliar',
                    reason: currentLang === 'ur' ? 'Iron EDDHA 4.8% - سب سے موثر آئرن، فوری نتائج، قلمی مٹی میں بہترین' : 'Most effective chelated iron, works in alkaline soil',
                    interval: currentLang === 'ur' ? '20-30 دن' : '20-30 days'
                });
            }
            else if (def === 'Zinc') {
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'NUTRICIA ZN33'),
                    dosage: '500 ml - 1 L/acre',
                    timing: currentLang === 'ur' ? 'ابتدائی نشوونما' : 'Early growth',
                    method: currentLang === 'ur' ? 'پتوں پر اسپرے' : 'Foliar spray',
                    reason: currentLang === 'ur' ? 'Zinc 33% - سب سے زیادہ زنک، چھوٹے پتوں کا علاج، پیداوار بڑھاتا ہے' : 'Highest Zn content, cures little leaf, boosts yield',
                    interval: currentLang === 'ur' ? '20-25 دن' : '20-25 days'
                });
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'HEADLAND ZN 15%'),
                    dosage: '500 gm/acre',
                    timing: currentLang === 'ur' ? 'زنک کی کمی' : 'Zn deficiency',
                    method: currentLang === 'ur' ? 'پتوں پر' : 'Foliar',
                    reason: currentLang === 'ur' ? 'Zinc Chelate 15% - Chelated form تیزی سے جذب ہوتا ہے' : 'Chelated form for faster absorption',
                    interval: currentLang === 'ur' ? '20 دن' : '20 days'
                });
            }
            else if (def === 'Boron') {
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'MYCROBOR DF'),
                    dosage: '500 gm - 1 kg/acre',
                    timing: currentLang === 'ur' ? 'پھول آنے سے پہلے' : 'Before flowering',
                    method: currentLang === 'ur' ? 'زمین میں پانی کے ساتھ' : 'Soil application with water',
                    reason: currentLang === 'ur' ? 'Boron 20% - پھول اور پھل کی گرنا روکتا ہے، بیجوں کی تعداد بڑھاتا ہے' : 'Prevents flower drop, improves pollination and seed set',
                    interval: currentLang === 'ur' ? 'ایک بار فی سیزن' : 'Once per season'
                });
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'BORDOX SUPER 15%'),
                    dosage: '500 ml/acre',
                    timing: currentLang === 'ur' ? 'پھول کھلنے سے پہلے' : 'Pre-flowering',
                    method: currentLang === 'ur' ? 'پتوں پر' : 'Foliar',
                    reason: currentLang === 'ur' ? 'Boron 15% - تیز اثر، hollow stem اور deformed fruit روکتا ہے' : 'Quick action, prevents hollow stem and fruit deformities',
                    interval: currentLang === 'ur' ? '25-30 دن' : '25-30 days'
                });
            }
            else if (def === 'Calcium') {
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'NANOCAL'),
                    dosage: '1 L/acre',
                    timing: currentLang === 'ur' ? 'پھل بننے کے دوران' : 'During fruit development',
                    method: currentLang === 'ur' ? 'پتوں پر اسپرے' : 'Foliar spray',
                    reason: currentLang === 'ur' ? 'Calcium + Potash + Fulvic Acid - پھل مضبوط، blossom end rot روکتا ہے' : 'Strengthens fruit, prevents blossom end rot and cracking',
                    interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
                });
                rec.micronutrients.push({
                    product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'SILIKALZIUM'),
                    dosage: '500 ml - 1 L/acre',
                    timing: currentLang === 'ur' ? 'پھل کی نشوونما' : 'Fruit growth',
                    method: currentLang === 'ur' ? 'پتوں پر' : 'Foliar',
                    reason: currentLang === 'ur' ? 'Calcium 31.8% + Silicon 17.4% - پھل مضبوط، بیماریوں سے بچاؤ' : 'High Ca+Si strengthens cell walls, disease resistance',
                    interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
                });
            }
        });
    }
    
    // GENERAL FERTILIZER RECOMMENDATIONS based on crop and stage
    if (problemType === 'General' || stage) {
        if (crop === 'Tomato') {
            rec.fertilizers.push({
                product: PRODUCTS.FERTILIZER.find(p => p.name === 'ULTRASOL TOMATO 13-07-31'),
                dosage: '5-7 kg/acre',
                timing: currentLang === 'ur' ? 'پھل بننے سے پختگی تک' : 'Fruiting to maturity',
                method: currentLang === 'ur' ? 'ڈرپ یا پانی میں' : 'Drip or fertigation',
                reason: currentLang === 'ur' ? 'ٹماٹر کے لیے خاص فارمولیشن - NPK 13-07-31، پھلوں کی تعداد اور سائز بڑھاتا ہے' : 'Specially formulated for tomato, increases fruit number and size',
                interval: currentLang === 'ur' ? '10-15 دن' : '10-15 days'
            });
        }
        else if (crop === 'Cucumber') {
            rec.fertilizers.push({
                product: PRODUCTS.FERTILIZER.find(p => p.name === 'ULTRASOL CUCUMBER 15-08-26'),
                dosage: '5-7 kg/acre',
                timing: currentLang === 'ur' ? 'پھل بننے کا مرحلہ' : 'Fruiting stage',
                method: currentLang === 'ur' ? 'ڈرپ' : 'Drip irrigation',
                reason: currentLang === 'ur' ? 'کھیرے کے لیے خاص - NPK 15-08-26، پیداوار اور معیار بہتر' : 'Specially for cucumber, improves yield and quality',
                interval: currentLang === 'ur' ? '7-10 دن' : '7-10 days'
            });
        }
        else if (crop === 'Chili') {
            rec.fertilizers.push({
                product: PRODUCTS.FERTILIZER.find(p => p.name === 'ULTRASOL PEPPER 14-07-29'),
                dosage: '5-7 kg/acre',
                timing: currentLang === 'ur' ? 'پھل بننے سے پختگی' : 'Fruiting to maturity',
                method: currentLang === 'ur' ? 'ڈرپ یا fertigation' : 'Drip or fertigation',
                reason: currentLang === 'ur' ? 'مرچ کے لیے خاص - NPK 14-07-29، تیز رنگ اور معیار' : 'Specially for pepper/chili, enhances color and pungency',
                interval: currentLang === 'ur' ? '10-12 دن' : '10-12 days'
            });
        }
        
        // General NPK recommendations
        if (stage === 'Vegetative') {
            rec.fertilizers.push({
                product: PRODUCTS.FERTILIZER.find(p => p.name === 'NOVATEC CLASSIC'),
                dosage: currentLang === 'ur' ? '25 کلو فی ایکڑ' : '25 kg/acre',
                timing: currentLang === 'ur' ? 'نشوونما کے مرحلے میں' : 'Vegetative growth',
                method: currentLang === 'ur' ? 'زمین میں' : 'Soil application',
                reason: currentLang === 'ur' ? 'NPK 12-08-16 - متوازن کھاد، جڑیں اور پتے مضبوط' : 'Balanced NPK for strong roots and foliage',
                interval: currentLang === 'ur' ? '30-40 دن' : '30-40 days'
            });
        }
        else if (stage === 'Flowering' || stage === 'Fruiting') {
            rec.fertilizers.push({
                product: PRODUCTS.FERTILIZER.find(p => p.name === 'ULTRASOL SOP'),
                dosage: currentLang === 'ur' ? '10-15 کلو فی ایکڑ' : '10-15 kg/acre',
                timing: currentLang === 'ur' ? 'پھول اور پھل کے مرحلے' : 'Flowering and fruiting',
                method: currentLang === 'ur' ? 'ڈرپ یا پانی میں' : 'Drip or fertigation',
                reason: currentLang === 'ur' ? 'K 0-0-51+18(S) - اعلیٰ پوٹاشیم، پھلوں کا سائز اور میٹھاس بڑھاتا ہے' : 'High K+S for fruit quality, size and sweetness',
                interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
            });
        }
    }
    
    // FRUIT-SPECIFIC RECOMMENDATIONS
    if (crop === 'Apple' || crop === 'Pomegranate' || crop === 'Grapes' || 
        crop === 'Apricot' || crop === 'Peach' || crop === 'Plum' || crop === 'Cherry') {
        
        // Fruit fertilizer recommendations
        if (stage === 'Flowering') {
            rec.fertilizers.push({
                product: PRODUCTS.FERTILIZER.find(p => p.name === 'ULTRASOL MAGNUM FLEX 16-22-23'),
                dosage: currentLang === 'ur' ? '8-10 کلو فی ایکڑ' : '8-10 kg/acre',
                timing: currentLang === 'ur' ? 'پھول آنے کے وقت' : 'During flowering',
                method: currentLang === 'ur' ? 'ڈرپ' : 'Drip irrigation',
                reason: currentLang === 'ur' ? 'N=16%, P=22%, K=23% - پھولوں کی تعداد اور پھل لگنے کی شرح بڑھاتا ہے' : 'High P promotes flower formation and fruit set',
                interval: currentLang === 'ur' ? '12-15 دن' : '12-15 days'
            });
            
            rec.micronutrients.push({
                product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'MYCROBOR DF'),
                dosage: currentLang === 'ur' ? '500 گرام فی ایکڑ' : '500 gm/acre',
                timing: currentLang === 'ur' ? 'پھول کھلنے سے پہلے' : 'Pre-flowering',
                method: currentLang === 'ur' ? 'زمین میں پانی کے ساتھ' : 'Soil drench',
                reason: currentLang === 'ur' ? 'Boron 20% - پھل کی گرنا روکتا ہے، بیج بنتا ہے' : 'Prevents flower/fruit drop, improves pollination',
                interval: currentLang === 'ur' ? 'سیزن میں ایک بار' : 'Once per season'
            });
        }
        
        if (stage === 'Fruiting') {
            rec.fertilizers.push({
                product: PRODUCTS.FERTILIZER.find(p => p.name === 'ULTRASOL SOP'),
                dosage: currentLang === 'ur' ? '12-15 کلو فی ایکڑ' : '12-15 kg/acre',
                timing: currentLang === 'ur' ? 'پھل بڑھنے کے دوران' : 'Fruit development',
                method: currentLang === 'ur' ? 'ڈرپ' : 'Drip',
                reason: currentLang === 'ur' ? 'K 51% + S 18% - پھل میٹھا، رنگ اچھا، محفوظ رہتا ہے' : 'High K improves fruit sweetness, color and shelf life',
                interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
            });
            
            rec.micronutrients.push({
                product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'SILIKALZIUM'),
                dosage: currentLang === 'ur' ? '500 ملی لیٹر فی ایکڑ' : '500 ml/acre',
                timing: currentLang === 'ur' ? 'پھل کی نشوونما' : 'Fruit growth',
                method: currentLang === 'ur' ? 'پتوں پر اسپرے' : 'Foliar spray',
                reason: currentLang === 'ur' ? 'Ca 31.8% + Si 17.4% - پھل سخت، ٹوٹتا نہیں، زیادہ دن تازہ رہتا ہے' : 'Strengthens fruit skin, prevents cracking, improves storage',
                interval: currentLang === 'ur' ? '15-20 دن' : '15-20 days'
            });
        }
    }
    
    // Nut trees specific (Almond, Walnut, Pistachio)
    if (crop === 'Almond' || crop === 'Walnut' || crop === 'Pistachio') {
        if (stage === 'Flowering' || stage === 'Fruiting') {
            rec.micronutrients.push({
                product: PRODUCTS.MICRONUTRIENTS.find(p => p.name === 'NUTRICIA ZN33'),
                dosage: currentLang === 'ur' ? '1 لیٹر فی ایکڑ' : '1 L/acre',
                timing: currentLang === 'ur' ? 'پھول اور پھل کے مرحلے' : 'Flowering to fruiting',
                method: currentLang === 'ur' ? 'پتوں پر' : 'Foliar',
                reason: currentLang === 'ur' ? 'Zinc 33% - گری کا سائز بڑھاتا ہے، خالی گولے کم ہوتے ہیں' : 'Improves nut filling, reduces blanks',
                interval: currentLang === 'ur' ? '20-25 دن' : '20-25 days'
            });
        }
    }
    
    return rec;
}

function displayRecommendations(rec, crop, stage) {
    const resultsDiv = document.getElementById('results');
    const t = translations[currentLang];
    
    // Get translated names
    const cropName = t[crop] || crop;
    const stageName = t[stage] || stage;
    
    let html = `
        <div class="result-header">
            <div class="result-title">${t.resultTitle}</div>
            <div class="result-subtitle">${t.crop} ${cropName} | ${t.stage} ${stageName}</div>
        </div>
    `;
    
    // Display Fungicides
    if (rec.fungicides.length > 0) {
        html += `<div class="recommendation-card"><h3>${t.fungicides}</h3>`;
        rec.fungicides.forEach((item, i) => {
            html += formatProductCard(item, i + 1);
        });
        html += '</div>';
    }
    
    // Display Insecticides
    if (rec.insecticides.length > 0) {
        html += `<div class="recommendation-card"><h3>${t.insecticides}</h3>`;
        rec.insecticides.forEach((item, i) => {
            html += formatProductCard(item, i + 1);
        });
        html += '</div>';
    }
    
    // Display Weedicides
    if (rec.weedicides.length > 0) {
        html += `<div class="recommendation-card"><h3>${t.weedicides}</h3>`;
        rec.weedicides.forEach((item, i) => {
            html += formatProductCard(item, i + 1);
        });
        html += '</div>';
    }
    
    // Display Micronutrients
    if (rec.micronutrients.length > 0) {
        html += `<div class="recommendation-card"><h3>${t.micronutrients}</h3>`;
        rec.micronutrients.forEach((item, i) => {
            html += formatProductCard(item, i + 1);
        });
        html += '</div>';
    }
    
    // Display Fertilizers
    if (rec.fertilizers.length > 0) {
        html += `<div class="recommendation-card"><h3>${t.fertilizers}</h3>`;
        rec.fertilizers.forEach((item, i) => {
            html += formatProductCard(item, i + 1);
        });
        html += '</div>';
    }
    
    // Add application guide
    html += `
        <div class="application-guide">
            <h4>${currentLang === 'ur' ? '📋 اہم ہدایات' : '📋 Important Instructions'}</h4>
            <ul style="line-height: 2; margin-top: 0.5rem;">
                <li>${currentLang === 'ur' ? 'تمام ادویات صبح یا شام کے وقت استعمال کریں' : 'Apply all products in morning or evening'}</li>
                <li>${currentLang === 'ur' ? 'اسپرے کرتے وقت مناسب حفاظتی سامان استعمال کریں' : 'Use proper safety equipment while spraying'}</li>
                <li>${currentLang === 'ur' ? 'مختلف ادویات کو ایک ساتھ ملانے سے پہلے مطابقت چیک کریں' : 'Check compatibility before mixing different products'}</li>
                <li>${currentLang === 'ur' ? 'تجویز کردہ مقدار سے زیادہ استعمال نہ کریں' : 'Do not exceed recommended dosage'}</li>
                <li>${currentLang === 'ur' ? 'بارش سے پہلے اسپرے نہ کریں' : 'Do not spray before rain'}</li>
                <li>${currentLang === 'ur' ? 'پانی کی مناسب مقدار استعمال کریں (200 لیٹر فی ایکڑ)' : 'Use adequate water volume (200 liters per acre)'}</li>
            </ul>
        </div>

        <div class="warning-box">
            <h4>${currentLang === 'ur' ? '⚠️ احتیاطی تدابیر' : '⚠️ Safety Precautions'}</h4>
            <ul style="line-height: 2; margin-top: 0.5rem;">
                <li>${currentLang === 'ur' ? 'ادویات کو بچوں کی پہنچ سے دور رکھیں' : 'Keep products away from children'}</li>
                <li>${currentLang === 'ur' ? 'خالی ڈبے ضائع کرنے کی مناسب تدابیر اختیار کریں' : 'Dispose empty containers properly'}</li>
                <li>${currentLang === 'ur' ? 'اسپرے کے بعد ہاتھ اور چہرہ دھوئیں' : 'Wash hands and face after spraying'}</li>
                <li>${currentLang === 'ur' ? 'کھانے، پینے یا سگریٹ نوشی سے پہلے ہاتھ دھوئیں' : 'Wash hands before eating, drinking or smoking'}</li>
                <li>${currentLang === 'ur' ? 'فصل کی کٹائی سے پہلے مناسب وقفہ رکھیں' : 'Observe proper pre-harvest interval'}</li>
            </ul>
        </div>
    `;
    
    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

function formatProductCard(item, number) {
    const t = translations[currentLang];
    
    let html = `
        <div class="product-item">
            <div class="product-name">${number}. ${item.product.name}</div>
            <div class="product-details">
                <strong>${t.technicalName}</strong> ${item.product.technical}<br>
                <strong>${t.sizes}</strong> ${item.product.sizes.join(', ')}
            </div>
            
            <div class="dosage">
                <span class="dosage-label">${t.dosage}</span> ${item.dosage}
            </div>
            
            <div class="reason-box">
                <span class="reason-label">${t.reason}</span> ${item.reason}
            </div>
            
            <div class="product-details" style="margin-top: 0.8rem;">
                <strong>${t.timing}</strong> ${item.timing}<br>
                <strong>${t.method}</strong> ${item.method}
    `;
    
    if (item.interval) {
        html += `<br><strong>${t.interval}</strong> ${item.interval}`;
    }
    
    if (item.note) {
        html += `<br><strong>${t.note}</strong> ${item.note}`;
    }
    
    html += '</div></div>';
    return html;
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    updateTexts();
});
