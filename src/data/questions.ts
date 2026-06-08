import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==================== I. Renal Diseases ====================
  // topic: "Hematuria"

  {
    id: "q-r-h-2",
    chapterId: 1,
    type: "short-essay",
    title: "Gross Hematuria Causes",
    content: "Enumerate 4 common causes of \"Gross Hematuria\" in children.",
    answer: "1. Urinary Tract Infection (UTI).\n2. Acute Post-Streptococcal Glomerulonephritis (APSGN).\n3. Trauma to the urinary tract.\n4. Urolithiasis / Hypercalciuria.",
    isClinical: false,
    topic: "Hematuria",
    explanation: "Most Common Pediatric Causes of Gross Hematuria:\n\n1. **UTI**: البكتيريا بتخرشم بطانة المثانة وتعمل نزيف بسيط مع حرقان البول.\n2. **APSGN**: أشهر سبب لو كانت هيماتوريا لونها كوكاكولا (Tea-colored) بعد دور لوز أو جلد بـ 10-21 يوم.\n3. **Trauma**: خبطة في البطن/الضهر أو إدخال القسطرة بعنف.\n4. **Urolithiasis / Hypercalciuria**: الكالسيوم لما يزيد في البول بيبخر ويعمل بلورات تجرح المجرى (الرمل بيجرح)."
  },
  {
    id: "q-r-h-3",
    chapterId: 1,
    type: "short-essay",
    title: "Renal vs Lower Hematuria",
    content: "Enumerate 4 classic differences between Renal (Glomerular) Hematuria and Urinary Tract (Lower) Hematuria.",
    answer: "1. Urine color is cola-colored or smoky in renal hematuria.\n2. RBCs are deformed or dysmorphic under microscopy in renal hematuria.\n3. Blood clots are completely absent in renal hematuria.\n4. Significant proteinuria (exceeding 100 mg/dL) is present in renal hematuria.",
    isClinical: true,
    topic: "Hematuria",
    explanation: "الفرق الجوهري بين مصدر الدم (من الكلية نفسها يعني من المصفاة Glomerulus) أو من السباكة التحتانية (Lower Tract):\n\n1. الـ **Color (اللون)**:\n- Glomerular: لون الكوكاكولا أو الشاي الغامق (Cola / Smoky) عشان الدم اتأكسد بالـ Acidic pH بتاع الأنابيب.\n- Lower: أحمر زاهي لسه طازة (Bright red / Fresh).\n\n2. الـ **RBCs under microscopy (شكل الخلايا)**:\n- Glomerular: متقطعة ومشوهة (Dysmorphic) عشان عافرت وتفعصت وهي بتعدي من المصفاة الضيقة.\n- Lower: خلايا سليمة وجميلة (Isomorphic) نازلة مستريحة.\n\n3. الـ **Blood Clots (الجلطات)**:\n- Glomerular: مستحيل تلاقي جلطات (No Clots) عشان الـ Urinary tract enzymes بتدوبها.\n- Lower: ممكن تلاقي خيوط تجلطات دم صريحة.\n\n4. الـ **Proteinuria (الزلال)**:\n- Glomerular: بيبهدل المكبس فينزل بروتين وزلال محترم (>100 mg/dL).\n- Lower: الزلال خفيف جداً أو شبه منعدم."
  },

  {
    id: "q-r-h-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Painless Gross Hematuria Case",
    content: "An 11-year-old child presents with painless gross hematuria. Urinalysis shows bright red urine with normal isomorphic RBCs and the presence of blood clots. Proteinuria is minimal (<100 mg/dL).\n\nQuestions:\n1. Is the source of hematuria glomerular or extra-glomerular?\n2. Enumerate 2 potential diagnostic causes for this presentation.",
    answer: "1. Extra-glomerular (Lower urinary tract).\n2. Urinary Tract Infection (UTI) and Urolithiasis (Urinary stones).",
    isClinical: true,
    topic: "Hematuria",
    explanation: "حل الكيسة دي بذكاء:\n\n1. الخلايا طالعة **Isomorphic** (سليمة مش معفصة) وفي **Blood Clots** ولون البول **Bright red**: دي كلها بصمات واضحة لـ **Extra-glomerular source** (برة الكلية، سباكة تحتانية).\n2. أشهر سببين يعملوا الدم ده هما:\n- **UTI**: التهاب شديد جرح المثانة.\n- **Urolithiasis**: حصوة رمت نفسها في الحالب أو المثانة وعمالة تجرح طوال الطريق."
  },

  // topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"

  {
    id: "q-r-a-2",
    chapterId: 1,
    type: "short-essay",
    title: "Nephritic Syndrome Features",
    content: "Enumerate the 4 core clinical findings of the acute nephritic syndrome in APSGN.",
    answer: "1. Sudden onset of gross hematuria (smoky or cola-colored urine).\n2. Edema (mild to moderate, typically periorbital).\n3. Hypertension.\n4. Oliguria.",
    isClinical: false,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "الرباعي المرعب للـ Nephritic Syndrome:\n\n1. **Hematuria (Smoky/Cola urine)**: نزل دم بسبب التهاب الأوعية الدموية وخراب مصفاة الكلية.\n2. **Edema (Mild-Moderate)**: بتبدأ تحت العين بالذات الصبح (Periorbital Puffiness) مش من فقد الزلال، ده بفعل احتباس المياه والملح (Salt and Water Retention).\n3. **Hypertension**: الكلية حابسة ملح وماية، فضغط وعاء الدم طار في العالي.\n4. **Oliguria**: الكلية شغالة بالقطارة ومصابة بقصور حاد مفاجئ."
  },
  {
    id: "q-r-a-3",
    chapterId: 1,
    type: "short-essay",
    title: "Confirming APSGN",
    content: "Enumerate 4 essential laboratory investigations to confirm the diagnosis of APSGN.",
    answer: "1. Urine analysis (detecting dysmorphic RBCs and RBC casts).\n2. Serum C3 complement level (characteristically reduced in the acute phase).\n3. Antistreptolysin O (ASO) titer (elevated after pharyngeal streptococcal infection).\n4. Renal function tests (elevated blood urea nitrogen and serum creatinine).",
    isClinical: false,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "إزاي تثبت إنها APSGN بالتحاليل؟ (خارطة طريق التأكيد):\n\n1. **Urine analysis**: عشان تدور على الدليل المادي (Dysmorphic RBCs & RBC Casts) اللي بيؤكد إن الالتهاب في الـ Glomerulus.\n2. **Serum C3 Complement**: المتمم المناعي واكل علقة في الحرب المناعية دي، فلازم تلاقيه **Markedly Depressed** (واطي جداً) في أول 6 - 8 أسابيع.\n3. **ASO Titer / Anti-DNase B**: بصمة الجريمة! بنقيس الأجسام المضادة للـ Streptococcal اللي خربت الدنيا بعد عدوى اللوز أو الجلد.\n4. **Renal Function Tests (BUN & Creatinine)**: بنطمن على كفاءة الفلترة وعشان نلقط أي فشل كلوي حاد بدري."
  },
  {
    id: "q-r-a-4",
    chapterId: 1,
    type: "short-essay",
    title: "Life-threatening APSGN Complications",
    content: "Enumerate 4 life-threatening acute complications (medical emergencies) of APSGN.",
    answer: "1. Hypertensive encephalopathy.\n2. Congestive heart failure / Acute pulmonary edema.\n3. Hyperkalemia.\n4. Rapidly progressive glomerulonephritis (RPGN).",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "مخاطر الـ APSGN اللي ممكن تودي في داهية في ثواني (الطوارئ):\n\n1. **Hypertensive Encephalopathy**: الضغط لما يعلى فجأة يعمل وذمة بالمخ وتشنجات وربما غيبوبة.\n2. **Acute Pulmonary Edema / HF**: احتباس السوائل بيبهدل عضلة القلب ويعمل رشح على الرئة، يخلي الطفل مش قادر ياخد نفسه وكأنه بيغرق في برة ماية.\n3. **Hyperkalemia**: البوتاسيوم بيعلى لأن الكلية مش بتصرف، وزيادة البوتاسيوم سم قاتل للقلب بيعمل Cardiac arrest.\n4. **RPGN (Rapidly Progressive Glomerulonephritis)**: تدهور صاروخي في وظائف الكلى مع تكوين أهلّة كلوية (Crescents) تدمر الفلاتر تماماً."
  },
  {
    id: "q-r-a-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Body Puffiness & Tea-colored Urine Case",
    content: "An 8-year-old girl develops generalized body puffiness, a severe headache, and passes tea-colored urine. Her blood pressure is 140/95 mmHg. Urinalysis reveals dysmorphic RBCs and RBC casts. Her serum C3 complement level is markedly depressed.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. Mention the calculated fluid restriction guideline for this patient during the oliguric phase.",
    answer: "1. Acute Post-Streptococcal Glomerulonephritis (APSGN).\n2. Fluid intake = Urine Output + 400 ml/m2 of body surface area.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "فك شفرة الكيسة الفورية:\n\n1. طفلة عندها نافوخ بيطير من الصداع (Severe Headache) وضغط عالي جدًا (140/95) وبول بلون الشاي (Tea-colored) وخلايا متفعصة (Dysmorphic RBCs & RBC Casts) مضافاً إليها نقص الـ C3: التشخيص **قضي الأمر** هو **APSGN**.\n2. ميزان السوائل الذهبي في فترة قلة البول (Oliguric Phase) لمنع الانفجار وضيق التنفس:\n**Fluid intake = Urine output + 400 mL/m²** (الـ 400 دي لتعويض الفقد غير المحسوس Insensible losses زي العرق والنفس)."
  },

  // topic: "Nephrotic Syndrome"

  {
    id: "q-r-n-2",
    chapterId: 1,
    type: "short-essay",
    title: "Diagnostic Features of Nephrotic Syndrome",
    content: "Enumerate the 4 essential diagnostic features of Nephrotic Syndrome.",
    answer: "1. Heavy proteinuria (>40 mg/m2/hr or random spot protein/creatinine ratio >2).\n2. Hypoalbuminemia (serum albumin <2.5 g/dL).\n3. Generalized edema (anasarca).\n4. Hyperlipidemia (serum cholesterol >250 mg/dL).",
    isClinical: false,
    topic: "Nephrotic Syndrome",
    explanation: "كارت التشخيص الأساسي للـ Nephrotic Syndrome (المأساة الرباعية للزلال):\n\n1. **Heavy Proteinuria (زلال فادح في البول)**: الكلية بتسرب الزلال بكميات مهولة أكثر من 40 mg/m²/hr أو النسبة في عينة عشوائية دقيقة > 2.\n2. **Hypoalbuminemia**: لأن الكبد مش ملاحق تصنيع هيدخل Serum Albumin إلى أقل من 2.5 g/dL.\n3. **Generalized Edema (Anasarca)**: لما الألبومين يقل، الـ Oncotic pressure في الأوعية ينهار، فالماوية تخرج للأنسجة وتنفخ الجسم كله (من جفون العين للرجلين للبطن).\n4. **Hyperlipidemia**: الكبد في محاولة بائسة لتعويض جفاف الألبومين بيصنع بروتينات تانية ويزود الـ Lipoproteins والـ Cholesterol عشوائياً في الدم (>250 mg/dL)."
  },
  {
    id: "q-r-n-3",
    chapterId: 1,
    type: "short-essay",
    title: "Nephrotic Syndrome Complications",
    content: "Enumerate 4 complications of Nephrotic Syndrome in children.",
    answer: "1. Severe bacterial infections (such as Spontaneous Bacterial Peritonitis).\n2. Thromboembolic events (arterial or venous thrombosis).\n3. Hypovolemic shock (induced by aggressive diuresis or severe fluid shift).\n4. Acute renal failure.",
    isClinical: true,
    topic: "Nephrotic Syndrome",
    explanation: "المضاعفات الخطيرة المترتبة على تسريب النفروتيك للبروتينات والـ Immunoglobulins:\n\n1. **Infections (بالذات SBP)**: الكلية بتسرب الـ Immunoglobulins والـ Complement في البول، فمناعة الطفل تقع والـ Streptococcus pneumoniae يعمل التهاب بريتوني تلقائي (SBP).\n2. **Thromboembolism (التجلطات)**: الكلية بتسرب مضادات التجلط الطبيعية (Antithrombin III)، والكبد بيصنع عوامل تجلط بزيادة والدم بيبقى لزوجته عالية (Hemoconcentration)، فتظهر الجلطات.\n3. **Hypovolemic Shock**: الماية هربانة برا الأوعية الدموية في الأنسجة، ولو عطينا مدرات بول بعنف من غير تعويض الألبومين، الـ Blood volume هينهار والطفل هيخش في صدمة هبوط الدورة الدموية.\n4. **Acute Renal Failure**: نتيجة للجفاف الحاد داخل الأوعية ورشح خلايا الأنابيب وكثرة إفراز الـ Casts."
  },
  {
    id: "q-r-n-4",
    chapterId: 1,
    type: "short-essay",
    title: "Biopsy Indications in Nephrotic Syndrome",
    content: "Enumerate 4 specific indications for performing a Renal Biopsy in a child with Nephrotic Syndrome.",
    answer: "1. Age of onset less than 1 year or greater than 10 years.\n2. Presence of persistent hypertension or gross hematuria.\n3. Structural renal insufficiency or low complement (C3) level.\n4. Steroid-resistant nephrotic syndrome (failure to respond after 4-6 weeks of prednisone).",
    isClinical: true,
    topic: "Nephrotic Syndrome",
    explanation: "أيمتى ناخد عينة كلوية (Renal Biopsy) في طفل النفروتيك؟ (لأن الأغلبية العظمى Minimal Change ومش محتاجين عينة):\n\n1. **العمر المريب**: لو الطفل أصغر من سنة (Congenital) أو أكبر من 10 سنين (غالباً مش Minimal change).\n2. **أعراض طارئة ومستمرة**: وجود ضغط عالي مستمر (Persistent Hypertension) أو هيماتوريا صريحة (Gross Hematuria).\n3. **خلل وراثي أو مناعي**: مستوى C3 واطي ومستمر في الواطي، أو قصور كلوية واضح من الأول.\n4. **مقاومة الكورتيزون (Steroid Resistance)**: فشل المريض في الاستجابة واختفاء زلال البول بعد 4 - 6 أسابيع من جرعة البريدنيزون الكاملة."
  },
  {
    id: "q-r-n-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Eye & Limb Swelling Case",
    content: "A 4-year-old boy presents with progressive swelling around his eyes and lower limbs. Urinalysis reveals a frothy appearance with 4+ proteinuria. Laboratory values show a serum albumin of 1.7 g/dL and a serum cholesterol of 280 mg/dL. His blood pressure is normal.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. Mention the primary pharmacological class used to induce remission, and define 'Steroid-Responsive' in this clinical scenario.",
    answer: "1. Minimal Change Nephrotic Syndrome (MCNS).\n2. Corticosteroids (specifically oral Prednisone). 'Steroid-Responsive' indicates that the patient achieves complete remission (protein-free urine for 3 consecutive days) within 4-6 weeks of starting steroid therapy.",
    isClinical: true,
    topic: "Nephrotic Syndrome",
    explanation: "كيسة النفروتيك الكلاسيكية جداً:\n\n1. التشخيص هو **Minimal Change Nephrotic Syndrome (MCNS)** لأن الطفل عمره 4 سنين وضغطه طبيعي وماعندوش دم في البول، بس مورم وعنده زلال فادح (4+) وألبومين واطي وكوليسترول عالي.\n2. العلاج السحري: **Corticosteroids** (دواء Prednisone الفموي).\n3. معنى **Steroid-Responsive**: يعني البول ينضف تماما من الزلال (Protein-free urine) لـ 3 أيام متتالية خلال أول 4 - 6 أسابيع من بدء العلاج بالكورتيزون."
  },

  // topic: "Acute Kidney Injury (AKI)"
  {
    id: "q-r-ki-1",
    chapterId: 1,
    type: "define",
    title: "Define AKI",
    content: "Define \"Acute Kidney Injury (AKI)\".",
    answer: "It is a rapid decline (within a few hours to days) in glomerular filtration rate (GFR) resulting in the disturbance of renal physiological functions, leading to the impairment of nitrogenous waste product excretion and loss of water, electrolyte, and acid-base regulation.",
    isClinical: false,
    topic: "Acute Kidney Injury (AKI)",
    explanation: "الـ AKI بتبسيط طبي:\n\nهي هبوط حاد وسريع وصادم (في ساعات أو أيام معدودة) لمعدل فلترة الكلية للدم (GFR). الكلية فجأة بتضرب فرامل، فتعجز عن تصريف الفضلات النيتروجينية (اليوريا والكرياتينين) وتبوظ موازين المية والأملاح والـ Acid-base في الجسم."
  },
  {
    id: "q-r-ki-2",
    chapterId: 1,
    type: "short-essay",
    title: "Prerenal AKI Causes",
    content: "Enumerate 4 common \"Prerenal\" causes of AKI in pediatric emergencies.",
    answer: "1. Severe dehydration (e.g., from vomiting and diarrhea).\n2. Massive hemorrhage (acute blood loss).\n3. Septic shock (severe fulminant sepsis causing renal hypoperfusion).\n4. Severe burns (plasma fluid losses).",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)",
    explanation: "الـ Prerenal هو مشكلة \"برة وجبل\" الكلية، يعني المية مقطوعة عن المحطة (Renal hypoperfusion). الكلية سليمة بس مفيش دم واصل لها عشان المريض ناشف:\n\n1. **Severe Dehydration (جفاف حاد)**: أشهر سبب للأطفال بسبب روتين النزلات المعوية العنيفة (إسهال وترجيع).\n2. **Massive Hemorrhage**: نزيف حاد أدى للانخفاض الشديد لحجم الدم.\n3. **Septic Shock**: البكتيريا في الدم عملت تمدد رهيب للأوعية وهبوط في الضغط فقل الدم الرايح للكلية.\n4. **Severe Burns**: الحروق الكبيرة بتسرب البلازما برة الجسم فتقل السوائل داخل الأوعية."
  },


  {
    id: "q-r-ki-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Vomiting, Diarrhea & Anuria Case",
    content: "A 2-year-old infant with a 3-day history of severe vomiting and diarrhea presents with anuria for 14 hours, dry mucous membranes, and tachycardia. Laboratory testing reveals elevated serum blood urea nitrogen (BUN) and creatinine.\n\nQuestions:\n1. What type of Acute Kidney Injury is this?\n2. Enumerate 2 essential initial urinary indicators used to confirm this specific type.",
    answer: "1. Prerenal Acute Kidney Injury.\n2. Low urine sodium (<20 mEq/L) and a Fractional Excretion of Sodium (FENa) less than 1%.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)",
    explanation: "قراءة تشخصية عميقة للكيسة:\n\n1. طفل عنده إسهال وترجيع (ناشف وجاف) وجاله انقطاع بول (Anuria) مع تسرع القلب (Tachycardia): الكلية بتحاول تحافظ على الماية اللي باقية بأي طريقة، فالتشخيص طبعاً **Prerenal AKI**.\n2. الإشارات التحليلية بالبول اللي بتثبت كفاءة أنابيب الكلية الكادحة لامتصاص الصوديوم والماء:\n- **Low Urine Sodium < 20 mEq/L** (الكلية بتمتص الصوديوم عشان تحبس سائل فالبول ينزل فاضي صوديوم).\n- **Fractional Excretion of Sodium (FENa) < 1%** (مؤشر ذهبي يؤكد أن الفرز الكلوي ممتاز والقصور بسبب قلة التروية فقط)."
  },

  // topic: "Chronic Kidney Disease (CKD)"
  {
    id: "q-r-c-1",
    chapterId: 1,
    type: "define",
    title: "Define CKD",
    content: "Define \"Chronic Kidney Disease (CKD)\" according to KDOQI criteria.",
    answer: "It is defined as structural or functional abnormalities of the kidney for more than 3 months with health implications, or a persistent decrease in Glomerular Filtration Rate (GFR) to less than 60 ml/min/1.73m2 for more than 3 months.",
    isClinical: false,
    topic: "Chronic Kidney Disease (CKD)",
    explanation: "تعريف قاطع للـ CKD:\n\nهو خراب بنيوي أو خلل وظيفي ممتد ومزمن في الكلية لفترة تتجاوز **3 أشهر**، يترتب عليه مشاكل صحية حقيقية، أو هبوط مستمر لمعدل الترشيح الكلوي (GFR) إلى **أقل من 60 ml/min/1.73m²** لذات الفترة."
  },
  {
    id: "q-r-c-2",
    chapterId: 1,
    type: "short-essay",
    title: "Symptomatology of CKD",
    content: "Enumerate 4 underlying clinical mechanisms or metabolic findings characteristically seen in CKD.",
    answer: "1. Accumulation of nitrogenous waste products (elevated BUN and creatinine).\n2. Metabolic acidosis (impaired net acid excretion).\n3. Hyperkalemia.\n4. Renal osteodystrophy (secondary hyperparathyroidism).",
    isClinical: false,
    topic: "Chronic Kidney Disease (CKD)",
    explanation: "المستنقع الأيضي لمرضى الكلية المزمنين (CKD):\n\n1. **Uremia (تراكم العوادم النيتروجينية)**: تراكم اليوريا والكرياتينين بيبهدل الخلايا ويعمل كسل وتقيؤ وهرش شديد.\n2. **Metabolic Acidosis**: الكلية عاجزة عن التخلص من أيونات الهيدروجين الحامضية وإعادة امتصاص البيكربونات.\n3. **Hyperkalemia**: الفلتر مش شغال، البوتاسيوم بيبدأ يتحبس ويدخل المريض في كوارث كهربية بالقلب.\n4. **Renal Osteodystrophy**: ندر عظام وتراكم فوسفور مع نقص فيتامين D النشط، يثير غضب الغدة الجار درقية (Secondary hyperparathyroidism) فتأكل العضم عشان توفر كالسيوم بالدم!"
  },
  {
    id: "q-r-c-3",
    chapterId: 1,
    type: "short-essay",
    title: "Complications of CKD",
    content: "Enumerate 4 core long-term complications of CKD that require targeted pharmacological interventions.",
    answer: "1. Renal osteodystrophy (high-turnover bone disease).\n2. Growth retardation (short stature).\n3. Normochromic normocytic anemia (erythropoietin deficiency).\n4. Hypertension (volume overload or excessive renin production).",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)",
    explanation: "أربع مشاكل تدميرية على المدى الطويل لمريض الـ CKD وعلاجها:\n\n1. **Renal Osteodystrophy**: اعتلال العظام بسب نقص Vit D النشط وحبس الفوسفات.\n2. **Growth Retardation**: قصر القامة وتأخر النمو بسبب الـ Acidosis واليوريميا وضعف هرمون النمو.\n3. **Pediatric Anemia**: أنيميا غريبة (Normochromic normocytic) بسبب غياب هرمون الـ **Erythropoietin** اللي المفروض الكلية بتفرزه لتحفيز نخاع العظام لتصنيع RBCs.\n4. **Hypertension**: الضغط بيولع بسبب زيادة محتوى الماء والملح أو تنشيط مبالغ للـ Renin-Angiotensin system."
  },

  {
    id: "q-r-c-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Growth Retardation & Pallor Case",
    content: "A 6-year-old boy with a history of chronic glomerulonephritis presents with short stature, severe pallor, and a bone deformity of the long legs. Lab work demonstrates chronic elevations of serum creatinine, hypocalcemia, hyperphosphatemia, and a hemoglobin level of 7.5 g/dL.\n\nQuestions:\n1. What is the cause of his severe pallor and low hemoglobin?\n2. Enumerate 2 management lines used to treat his specific bone disorder.",
    answer: "1. Anemia of CKD due to inadequate erythropoietin production by the failing kidneys.\n2. Low phosphorus diet and administration of oral phosphate binders followed by active Vitamin D supplementation.",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)",
    explanation: "تحليل كيسة الفشل الكلوي المزمن في الأطفال:\n\n1. طفل عنده فشل كلوية ومورم وعنده قصر قامة ونقص كالسيوم وزيادة فوسفات وأنيميا حادة (Hemoglobin 7.5): الأنيميا سببها الأساسي هو **فشل الكلى في إنتاج هرمون Erythropoietin**.\n2. خطة حماية العظام من التفتت والتشكل الغلط (Renal Osteodystrophy):\n- **منع الفوسفات**: تقليل الفوسفات في الغذاء وإعطاء رابطات فوسفات بالفم (Phosphate binders) مع الأكل لمنع امتصاصه.\n- **حقن فيتامين D النشط (Calcitriol)**: لتعويض عجز الكلى عن تنشيطه ولزيادة امتصاص الكالسيوم بالتالي هدوء الغدة الجار درقية."
  },
  {
    id: "q-r-ki-4",
    chapterId: 1,
    type: "short-essay",
    title: "Pediatric RIFLE (pRIFLE) Criteria",
    content: "Enumerate the 5 pRIFLE stages for Acute Kidney Injury (AKI) with their eGFR or Urine Output (UOP) criteria.",
    answer: "1. R - Risk: eGFR decreases by 25% OR UOP < 0.5 mL/kg/hour for 8 consecutive hours (Mild Decline).\n2. I - Injury: eGFR decreases by 50% OR UOP < 0.5 mL/kg/hour for 16 consecutive hours (Significant Decline).\n3. F - Failure: eGFR decreases by 75% OR UOP < 0.3 mL/kg/hour for 24 hours OR Anuria for 12 hours (Severe Decline).\n4. L - Loss: Persistent acute kidney failure requiring dialysis for > 4 weeks (Persistent Failure).\n5. E - ESRD: Persistent kidney failure requiring permanent renal replacement therapy (RRT) for > 3 months (End-Stage Disease).",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)",
    explanation: "معايير pRIFLE لتقدير شدة الـ AKI في الأطفال (افتكر الـ RIFLE يعني بندقية الصيد):\n\n1. **R (Risk) - خطورة**: GFR بيقل بـ 25% أو كمية البول لقطت أقل من 0.5 mL/kg/hr لـ 8 ساعات مستمرة.\n2. **I (Injury) - إصابة**: GFR بيقل بـ 50% أو كمية البول أقل من 0.5 mL/kg/hr لـ 16 ساعة مستمرة.\n3. **F (Failure) - فشل**: GFR بيقل بـ 75% أو كمية البول أقل من 0.3 mL/kg/hr لـ 24 ساعة أو انقطاع تام للبول (Anuria) لـ 12 ساعة.\n4. **L (Loss) - خسارة وظيفة**: استمرار الفشل الكلوية والاحتياج للغسيل أكثر من 4 أسابيع.\n5. **E (ESRD) - مرحلة الفشل النهائي**: نهاية المطاف، فقدان كامل للوظائف واحتياج مزمن للغسيل أو الزراعة لأكثر من 3 أشهر."
  },
  {
    id: "q-r-a-6",
    chapterId: 1,
    type: "short-essay",
    title: "Pharyngeal vs Cutaneous APSGN",
    content: "Enumerate 4 parameters distinguishing pharyngeal vs. cutaneous APSGN.",
    answer: "1. Nephritogenic Strains: Throat infection is usually caused by Type 4 or 12, whereas skin infection is caused by Type 49.\n2. Latent Period: 1-2 weeks after throat infection, compared to 2-3 weeks after skin infection.\n3. Seasonal Prevalence: Winter/Spring for throat infections, compared to Summer for skin infections.\n4. ASOT Titers: Characteristically elevated after throat infections, whereas ASOT titers may be normal after skin infections.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "لعبة الفروق الأربعة بين APSGN الحلقية وAPSGN الجلدية:\n\n1. **الجرثومة (Strain)**: عدوى الحلق بفعل سلالات 4 أو 12، بينما عدوى الجلد بفعل سلالة 49.\n2. **فترة الحضانة (Latent Period)**: بعد اللوز بنقعد 1-2 أسبوع وتبدأ أعراض الكلية، أما بعد التهاب الجلد بنقعد 2-3 أسابيع (طريق أطول للمناعة).\n3. **الموسم (Season)**: عدوى الحلق في البرد والشتا، أما الجلد والدمامل في الصيف والحر.\n4. **تحليل الـ ASOT**: بيكون مرتفع كلاسيكي جداً بعد اللوز، وممكن تلاقيه طبيعي خالص بعد التهاب الجلد (الجلد ما فيهوش إنزيمات تحفز ASOT كويس، فبنلجأ لتحليل Anti-DNase B بدالها)."
  },
  {
    id: "q-r-h-4",
    chapterId: 1,
    type: "short-essay",
    title: "Renal Biopsy Indications in Hematuria",
    content: "Enumerate 4 clinical indications for performing a Renal Biopsy in a child with hematuria.",
    answer: "1. Unexplained persistent or recurrent gross hematuria.\n2. Biopsy-confirmed or highly suspected Lupus Nephritis.\n3. Atypical Glomerulonephritis course (such as nephritic-nephrotic syndrome, or persistently low C3 complement levels beyond 6-8 weeks).\n4. Unexplained, progressive acute kidney injury or renal failure associated with hematuria.",
    isClinical: true,
    topic: "Hematuria",
    explanation: "لو جالك طفل بدم في البول (Hematuria)، أوقات لازم تعمل عينة كلوية فوراً:\n\n1. هيماتوريا صريحة مستمرة أو بتتكرر مش عارفين سببها بالتحاليل العادية.\n2. شك فوري في Lupus Nephritis (ذئبة حمراء هاجمت الكلى).\n3. مسار غريب وغير متوقع للـ Glomerulonephritis (زي زلال ونفروتيك مع بعض، أو C3 complement واطي وماركبش مكانه بعد 8 أسابيع).\n4. تدهور سريع وارتفاع صاروخي لوظائف الكلى (قصور كلوي غير مفسر) مصاحباً للدم."
  },
  {
    id: "q-r-c-4",
    chapterId: 1,
    type: "short-essay",
    title: "CKD 5-Stage GFR Classification",
    content: "Enumerate the 5 stages of Chronic Kidney Disease (CKD) based on GFR levels.",
    answer: "1. Stage 1: GFR is greater than or equal to 90 mL/min/1.73 m² (Normal or elevated filtration with kidney damage).\n2. Stage 2: GFR is 60 - 89 mL/min/1.73 m² (Mild functional renal impairment).\n3. Stage 3: GFR is 30 - 59 mL/min/1.73 m² (Stage 3a: GFR 45-59; Stage 3b: GFR 30-44; reflecting moderate renal failure).\n4. Stage 4: GFR is 15 - 29 mL/min/1.73 m² (Severe pre-terminal renal insufficiency).\n5. Stage 5: GFR is less than 15 mL/min/1.73 m² (End-Stage Renal Disease (ESRD) requiring dialysis or transplantation).",
    isClinical: false,
    topic: "Chronic Kidney Disease (CKD)",
    explanation: "التدريج الخماسي لمستويات الـ GFR لمرضى الكلية المزمنين:\n\n- **Stage 1 (الفلتر سليم بس في جرح)**: GFR عالي أكثر من 90 مل/دقيقة، بس في علامات تدمير كلوي (زي زلال بول).\n- **Stage 2 (تعب خفيف جداً)**: GFR بين 60 - 89 مل/دقيقة.\n- **Stage 3 (قصور متوسط المشاكل)**: GFR بين 30 - 59 مل/دقيقة (وبينقسم لـ 3a و 3b).\n- **Stage 4 (قصور حاد قبل النهائي)**: GFR بين 15 - 29 مل/دقيقة، مرحلة التجهيز للغسيل والقصور الشديد.\n- **Stage 5 (الفشل التام - ESRD)**: GFR أقل من 15 مل/دقيقة، الكلية هنا خرجت عن الخدمة ولازم غسيل أو زراعة كلية."
  },
  {
    id: "q-r-u-1",
    chapterId: 1,
    type: "define",
    title: "Define Pediatric UTI Classifications",
    content: "Define the three main clinical classifications of Urinary Tract Infections (UTIs) in children: Pyelonephritis, Cystitis, and Asymptomatic Bacteriuria.",
    answer: "1. Pyelonephritis (Acute Parenchymal Involvement): Characterized by fever, abdominal or flank pain, systemic symptoms (vomiting, irritability in infants), and carries a high risk of renal scarring.\n2. Cystitis (Bladder Involvement): Characterized by localized bladder symptoms (dysuria, urgency, frequency, suprapubic pain) in the absence of fever or renal scarring.\n3. Asymptomatic Bacteriuria: Characterized by a positive urine culture but a complete absence of clinical symptoms, presenting almost exclusively in girls and posing no risk of renal injury.",
    isClinical: false,
    topic: "Urinary Tract Infections (UTIs)",
    explanation: "التقسيم الثلاثي للـ UTI في أطفالنا وطرق تشخيصهم:\n\n1. **Pyelonephritis (حريق في الكبر الكلوية نفسه)**: سخونة مولعة، وجع بطن أو ضهر، رجفة وترجيع، مخاطرة شديدة لندبات الكلية (Renal Scarring).\n2. **Cystitis (التهاب محبوس بالمثانة)**: مفيش سخونية، بس في حرقان شديد في البول (Dysuria)، دخول حمام مستمر (Frequency)، وجع فوق العانة.\n3. **Asymptomatic Bacteriuria (بكتيريا مسالمة)**: بكتيريا نبتت في المزرعة بس البنت مفهاش أي حكة أو عرض، ودي غالباً في البنات الصغيرين ولا تضر الكلية ومش محتاجة تتدخل بمضادات."
  },
  {
    id: "q-r-u-2",
    chapterId: 1,
    type: "short-essay",
    title: "UTI Pathogens & Risk Factors",
    content: "Enumerate the most common UTI pathogen and 4 risk factors for UTIs in children.",
    answer: "Most Common Pathogen: Escherichia coli (E. coli), accounting for almost all infections.\n4 Distinct Risk Factors:\n1. Female gender (due to a shorter urethra) or being an uncircumcised male infant (increased periurethral colonization).\n2. Anatomical abnormalities such as Vesicoureteral Reflux (VUR) or posterior urethral valves.\n3. Pediatric behavioral habits or issues such as toilet training phase, poor hygiene, or wearing tight underwear.\n4. Intestinal or bladder dysfunction such as chronic constipation, pinworm infestation, neurogenic bladder, or prolonged voiding dysfunction.",
    isClinical: true,
    topic: "Urinary Tract Infections (UTIs)",
    explanation: "Most Common Pathogen$E. coli$: الراعي الرسمي للـ UTI في الأطفال.\n\n4 Distinct Risk Factors (The \"Inside & Outside\" Approach):\n\n1. الـ **Structural Defects** (مشاكل في السباكة من جوه):\n**Vesicoureteral Reflux (VUR)**: صمامات بتفوت، فالبول بيرد لفوق (Backward flow) للـ Kidney ويعمل Stasis.\n\n2. الـ **Outflow Obstruction** (سدة في المجرى):\n**Posterior Urethral Valves (PUV) / Chronic Constipation**: الـ PUV بيسد المجرى من جوه، والـ Constipation بيضغط على الـ Bladder من بره. النتيجة واحدة $\\rightarrow$ Incomplete emptying.\n\n3. الـ **Entry Shortcuts** (طريق مختصر ودخول سهل):\n**Female gender**: المسافة قصيرة جداً (Shorter urethra)، فالبكتيريا بتطلع Ascending بسرعة وسهولة.\n\n4. الـ **Local Colonization** (تجمع بكتيري على البوابة):\n**Uncircumcised males / Poor hygiene**: تراكم البكتيريا تحت الـ Foreskin عند الرضع، أو مسح البراز غلط (Back to front) عند البنات."
  },
  {
    id: "q-r-u-3",
    chapterId: 1,
    type: "short-essay",
    title: "UTI Imaging Guidelines & Indications",
    content: "Mention the gold-standard test used to confirm a Pediatric UTI, and enumerate 3 primary imaging investigations used in the evaluation of a child with their first febrile UTI along with their clinical indications.",
    answer: "Gold-Standard Test: Urine Culture (necessary for definitive UTI confirmation).\n3 Primary Imaging Investigations:\n1. Renal Ultrasonogram (RUS): Indicated in all infants and children with a first febrile UTI to rule out hydronephrosis, renal abscess, or anatomical anomalies.\n2. Voiding Cystourethrogram (VCUG): Indicated in infants <5 years with febrile UTI, children with a recurrence, or any male with UTI to identify Vesicoureteral Reflux (VUR - the most common finding).\n3. DMSA Renal Scanning: Indicated when acute pyelonephritis diagnosis is uncertain or to document and assess permanent renal scarring (typically 4-6 months post-infection).",
    isClinical: true,
    topic: "Urinary Tract Infections (UTIs)",
    explanation: "خارطة الأشعة والتحليل الذهبية للـ UTI لشغل عيادة الأطفال:\n\n- **التحليل الذهبي التأكيدي**: **Urine Culture (مزرعة بول)** من عينة نظيفة، مستحيل تشخص وتدي علاج نهائي لـ UTI بدونه.\n\nالـ 3 فحوصات بالأشعة بعد أول دور سخونة في مجرى البول:\n1. **أشعة تليفزيونية (Renal US)**: لكل طفل جاله UTI وسخونة، عشان نطمن على شكل الكلى ونستبعد أي تضخم أو خراج.\n2. **أشعة صبغية أثناء التبول (VCUG)**: دي الأشعة الأهم لاستبعاد الارتجاع (VUR). بنعملها لو السونار طلع مش مريح، أو لو طفل أصغر من 5 سنين جاله UTI حراري، أو لو المريض ولد.\n3. **مسح ذري كلوية (DMSA Scan)**: بنقيس بيه خلايا قشرة الكلى الباقية، ونعرف هل في ندبات أو جروح بالكلية بعد 4 - 6 شهور من الالتهاب الشديد."
  },
  {
    id: "q-r-u-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Infant Febrile UTI Case",
    content: "An uncircumcised 5-month-old male infant presents with high fever, irritability, poor feeding, and severe jaundice. A catheterized urine specimen shows significant leukocyturia. Urine culture confirms Escherichia coli UTI.\n\nQuestions:\n1. What is the specific clinical classification of this UTI?\n2. State the treatment protocol regarding route, broad-spectrum antibiotic choices, and duration of therapy.",
    answer: "1. Acute Pyelonephritis (parenchymal involvement with systemic symptoms in an infant).\n2. The patient must be treated with parenteral (intravenous) broad-spectrum antibiotics (such as Ceftriaxone, or Ampicillin combined with Gentamicin) for a total of 14 days, followed by daily oral antibiotic prophylaxis at one-third of the therapeutic dose once daily.",
    isClinical: true,
    topic: "Urinary Tract Infections (UTIs)",
    explanation: "طبيب الأطفال الناجح يحل الفخ ده كدا:\n\n1. طفل رضيع 5 شهور، عنده حرارة ورفض أكل وصفراء وصديد بالبول: ده كلاسيكي **Acute Pyelonephritis** (الـ UTI في الرضع دايماً بنعتبره فوق في الكلى ومعاه أعراض عامة).\n2. بروتوكول العلاج الحازم لمنع تليف الكلية:\n- **مستشفى ومضاد بالوريد**: لازم يتحجز ياخد مضاد حيوي واسع المجال بالوريد (زي Ceftriaxone أو Ampicillin+Gentamicin) لمدة **14 يوم كاملين**.\n- **وقاية مستمرة**: بعد الـ 14 يوم بنمشيه على جرعة طفيفة وقائية يومية بالليل (Prophylaxis) لحد ما نعمل أشعة الارتجاع ونطمن مفيش عيوب خلقية."
  },

  // ==================== II. Chest Diseases ====================
  // topic: "Croup"
  {
    id: "q-c-cr-1",
    chapterId: 2,
    type: "define",
    title: "Define Croup",
    content: "Define \"Croup (Laryngo-tracheo-bronchitis)\".",
    answer: "It is a viral infection of the glottic and subglottic regions, standing as the most common syndrome of inflammatory upper airway obstruction in young children.",
    isClinical: false,
    topic: "Croup",
    explanation: "الـ **Croup** (الكروب أو الخانوق) هو إصابة فيروسية حادة تصيب منطقة الأحبال الصوتية وما تحتها. يُعد السبب الأكثر شيوعاً لانسداد مجرى الهواء العلوي عند الرضع والأطفال الصغار."
  },
  {
    id: "q-c-cr-2",
    chapterId: 2,
    type: "short-essay",
    title: "Classic Croup Symptoms",
    content: "Enumerate the 4 classic symptoms of Croup.",
    answer: "1. Barking cough.\n2. Inspiratory stridor.\n3. Hoarseness of voice.\n4. Respiratory distress (worse at night).",
    isClinical: false,
    topic: "Croup",
    explanation: "أشهر 4 علامات سريرية تُميز مرض الخانوق (Croup):\n1. **Barking cough**: الكحة النباحية المميزة (مثل نباح السلب/الفقمة).\n2. **Inspiratory stridor**: صوت تزييق/شهيق خشن ومستمر عند التنفس.\n3. **Hoarseness of voice**: بحة واضحة بالصوت لتأثر الأحبال الصوتية.\n4. **Respiratory distress**: ضيق تنفس واضح يشتد ليلاً بسبب تورم مجرى الهواء."
  },
  {
    id: "q-c-cr-3",
    chapterId: 2,
    type: "short-essay",
    title: "Croup Management Plan",
    content: "Enumerate 4 components of the management of Croup.",
    answer: "1. Supplemental humidified oxygen.\n2. Nebulized Epinephrine (L-epinephrine or racemic epinephrine) to reduce edema.\n3. A single dose of systemic Corticosteroids (oral or IM Dexamethasone).\n4. Keeping the patient nothing per mouth (NPO) and avoiding agitation.",
    isClinical: true,
    topic: "Croup",
    explanation: "بروتوكول التعامل والسيطرة على الكروب حاد الأعراض:\n1. **Humidified O2**: أكسجين رطب مهدئ ومرطب.\n2. **Nebulized Epinephrine**: أدرينالين مستنشق لتقليص الأوعية وتقليل تورم مجرى الهواء العاجل.\n3. **Systemic Corticosteroid**: كورتيزون (مثل Dexamethasone فموي أو عضلي بجرعة واحدة) لقمع الالتهاب على المدى المتوسط.\n4. **Rest and NPO**: تجنب استفزاز وهلع الرضيع، وجعله صائماً (NPO) لو تنفسه سريع جداً تلافياً للشرقة والالتهاب الرئوي الكيميائي."
  },
  {
    id: "q-c-cr-4",
    chapterId: 2,
    type: "short-essay",
    title: "Impending Respiratory Failure Signs",
    content: "Enumerate 4 clinical signs that indicate impending respiratory failure in a child with severe Croup.",
    answer: "1. Cyanosis.\n2. Pallor.\n3. Decreased level of consciousness / depressed sensorium.\n4. Decreased stridor or barking cough despite severe retractions (failing effort).",
    isClinical: true,
    topic: "Croup",
    explanation: "علامات الخطر الكبرى للانهيار التنفسي الحاد في طفل الكروب (تستدعي تعاملاً وتنبيباً فورياً):\n1. زرقان مركزي للشفتين واللسان (**Cyanosis**).\n2. شحوب شديد وفقدان الحيوية واللون (**Pallor**).\n3. غياب أو هبوط مستوى الوعي والتركيز لتراكم CO2 ونقص الأكسجين.\n4. **الصمت الارتدادي**: اختفاء التزييق والكحة رغم الجهد العضلي العنيف للصدر، ده معناه تعب كامل للعضلات وانسداد وشيك لمجرى التنفس."
  },
  {
    id: "q-c-cr-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Stridor & Barking Cough Case",
    content: "A 2-year-old boy is brought to the emergency clinic at midnight with a barking cough and high-pitched noisy sounds heard on inspiration. On examination, he has low-grade fever and mild subcostal retractions, but remains alert.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What classic radiological sign is expected on a postero-anterior neck X-ray?",
    answer: "1. Acute Viral Croup.\n2. The Steeple Sign (uniform subglottic narrowing of the airway).",
    isClinical: true,
    topic: "Croup",
    explanation: "تحليل حالة طفل بنباح وصوت شهيق حاد في الليل مع نهجان خفيف:\n1. التشخيص الأقرب هو التهاب حنجرة وقصبة هوائية فيروسي (**Viral Croup**).\n2. العلامة الإشعاعية الفارقة هي **Steeple Sign** (علامة قبة المسجد أو برج الكنيسة) وتظهر كضيق متماثل لمنطقة ما تحت الأحبال اللسانية."
  },

  // topic: "Epiglottitis"
  {
    id: "q-c-e-1",
    chapterId: 2,
    type: "define",
    title: "Define Epiglottitis",
    content: "Define \"Acute Epiglottitis\".",
    answer: "It is a life-threatening, rapidly progressive bacterial infection of the epiglottis and surrounding structures, capable of causing complete airway obstruction.",
    isClinical: false,
    topic: "Epiglottitis",
    explanation: "الـ **Epiglottitis** (التهاب لسان المزمار) هو حالة بكتيرية شرسة مهددة للحياة، تسبب انسداداً تاماً وسريعاً بمجرى الهواء العلوي ولا تستجيب لجلسات الأدرينالين أو الكورتيزون."
  },
  {
    id: "q-c-e-2",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottitis Clinical Picture",
    content: "Enumerate 4 classic clinical findings of Acute Epiglottitis.",
    answer: "1. Acute onset of high-grade fever and severe sore throat.\n2. Drooling of saliva (due to severe inability to swallow).\n3. Hyperextension of the neck (sniffing position to maintain airway).\n4. Severe, rapidly progressive respiratory distress without a barking cough.",
    isClinical: false,
    topic: "Epiglottitis",
    explanation: "أهم 4 علامات سريرية ترفع الشك بالإصابة بالتهاب لسان المزمار:\n1. حرارة عالية نارية مفاجئة وسوء شديد بالحلق.\n2. سيلان اللعاب المستمر من الفم (**Drooling**) لعجز الطفل التام عن البلع لوجع الحلق والورم الشديد.\n3. وضعية الاستنشاق والشم (**Sniffing position**): الطفل بيميل لقدام ويمد رقبته لمحاولة سحب الأكسجين.\n4. صعوبة تنفس خانقة متدهورة بدون وجود كحة نباحية واضحة."
  },
  {
    id: "q-c-e-3",
    chapterId: 2,
    type: "short-essay",
    title: "Contraindications in Epiglottitis",
    content: "Enumerate 4 critical clinical contraindications in the immediate management of suspected Epiglottitis.",
    answer: "1. Do not place the child in a supine position.\n2. Do not examine the oral cavity or throat using a tongue depressor (risk of sudden cardiac arrest).\n3. Do not perform agitating diagnostic tests (like phlebotomy) before securing the airway.\n4. Do not rely on corticosteroids or nebulized epinephrine, as they are ineffective.",
    isClinical: true,
    topic: "Epiglottitis",
    explanation: "المحاذير والأخطاء الفادحة الممنوعة عند الشك بـ Epiglottitis لتلافي حدوث تقلص تشنجي (**Laryngospasm**) يغلق المجرى بالكامل فوراً:\n1. **No Supine**: يمنع منعاً باتاً استلقاء الطفل على ظهره.\n2. **No Tongue Depressor**: ممنوع إدخال خافض اللسان أو فحص الحلق عشوائياً.\n3. **No agitation**: تجنب أي إجراء يسبب هلع للطفل (مثل شك الإبر للمحاليل أو الدم) قبل التحكم في مجرى التنفس وصيانته بالطرق الطبية.\n4. عدم الاعتماد على جلسات الأدرينالين أو إعطاء الكورتيزون فقط لأن المشكلة انسداد ميكانيكي حاد بكتيري."
  },
  {
    id: "q-c-e-4",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottitis Treatment Steps",
    content: "Enumerate the 4 components of the standard therapeutic intervention for confirmed Epiglottitis.",
    answer: "1. Immediate insertion of an artificial airway (endotracheal intubation) in the OR or ICU.\n2. Empiric intravenous antibiotic therapy (Vancomycin plus Ceftriaxone for 10 days).\n3. Supplemental oxygen delivery without mask agitation.\n4. Continuous monitoring of airway patency and direct visualization before extubation.",
    isClinical: true,
    topic: "Epiglottitis",
    explanation: "روافد علاج حالة لسان المزمار المؤكدة:\n1. تأمين مجرى التنفس بتركيب أنبوب تنفس صناعي (**Intubation**) في غرفة العمليات أو العناية المركزة فوراً.\n2. مضادات بكتيرية وريدية فورية وقوية (**Ceftriaxone + Vancomycin** لمدة 10 أيام).\n3. دعم الأكسجين المستمر بدون استثارة أو هلع الطفل.\n4. المتابعة المستمرة وفحص الحنجرة المباشر للتأكد من هبوط الالتهاب تماماً قبل إزالة أنبوب التنفس."
  },
  {
    id: "q-c-e-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Sore Throat & Drooling Case",
    content: "A 4-year-old unimmunized child presents with a sudden onset of high fever, severe respiratory distress, and is sitting leaning forward while drooling saliva. The clinician suspects an upper airway emergency.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What is the primary causative organism for this specific presentation?",
    answer: "1. Acute Epiglottitis.\n2. Hemophilus influenzae type b (Hib).",
    isClinical: true,
    topic: "Epiglottitis",
    explanation: "تحليل حالة طفل 4 سنوات غير مطعم (Unimmunized) مريض بحرارة شديدة وصعوبة بلع وريالة مع الميل للأمام:\n1. التشخيص هو **Epiglottitis** (التهاب لسان المزمار حاد).\n2. الكائن المسبب والمشهور تاريخياً هو بكتيريا **Haemophilus influenzae type b (Hib)**."
  },

  // topic: "Wheezy Chest and Foreign Body Aspiration"
  {
    id: "q-c-w-1",
    chapterId: 2,
    type: "define",
    title: "Define Wheezing",
    content: "Define \"Wheezing\".",
    answer: "It is an expiratory continuous musical respiratory sound produced by turbulent airflow through partially obstructed small bronchi and bronchioles.",
    isClinical: false,
    topic: "Wheezy Chest and Foreign Body Aspiration",
    explanation: "الـ **Wheezing** (التزييق أو الصفير الرئوي) هو صوت تنفسي موسيقي تصفيري مسموع ومستمر أثناء **الزفير** (**Expiratory**)، وده بيكون نتيجة تدفق هواء سريع عبر شعب وهوائية صغيرة تضيق بسب الورم أو التشنج والبلغم."
  },
  {
    id: "q-c-w-2",
    chapterId: 2,
    type: "short-essay",
    title: "Recurrent Wheezing Causes",
    content: "Enumerate 4 common pediatric causes of \"Recurrent Wheezing\".",
    answer: "1. Bronchial asthma.\n2. Recurrent aspiration (e.g., in infants with GERD).\n3. Chronic chest infections.\n4. Bronchopulmonary dysplasia (BPD).",
    isClinical: false,
    topic: "Wheezy Chest and Foreign Body Aspiration",
    explanation: "أشهر 4 أسباب لتكرار تزييق الصدر بالرضع والأطفال:\n1. **Bronchial asthma**: حساسية الصدر أو الربو الشعبي.\n2. **Recurrent aspiration**: الشرقة المتكررة (مثل ارتجاع المرئ الشديد GERD).\n3. **Chronic chest infections**: التهابات الصدر المزمنة.\n4. **BPD (خلل التنسج القصب الرئوي)**: يحدث نتيجة التنفس الصناعي المطول بجرعات أكسجين عالية لحديثي الولادة والخدج."
  },
  {
    id: "q-c-w-3",
    chapterId: 2,
    type: "short-essay",
    title: "Foreign Body Aspiration Signs",
    content: "Enumerate 4 clinical signs or complications characteristic of Foreign Body Aspiration in a child.",
    answer: "1. History of sudden choking, coughing, or gagging while playing.\n2. Fixed, localized unilateral wheeze on auscultation.\n3. Unilaterally diminished breath sounds.\n4. Recurrent pneumonia or abscess localized in the exact same lung lobe.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration",
    explanation: "خصائص سريرية تدل على شرقة الطفل وابتلاعه لجسم غريب واستقراره بالرئتين:\n1. قصة شرقة وكحة مفاجئة عنيفة أثناء الأكل أو اللعب بالخرز والألعاب الصغيرة.\n2. وجود تزييق موضعي مستمر غير متحرك في جانب واحد من الصدر (**Fixed localized wheeze**).\n3. ضعف وخفوت مسموع لصوت الهواء والأنفاس في الرئة المصابة.\n4. تكرار الالتهاب الرئوي أو تشكل خراج ميكروبي في نفس فص الرئة بالضبط."
  },

  {
    id: "q-c-w-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Unilateral Diminished Air Entry Case",
    content: "A 3-year-old child is rushed to the ER with sudden violent coughing, choking, and localized respiratory distress. On chest auscultation, a fixed localized wheeze is heard over the right lung alongside diminished breath sounds on that side.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What is the definitive management choice for this condition?",
    answer: "1. Foreign Body Aspiration.\n2. Rigid bronchoscopic extraction of the foreign body.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration",
    explanation: "تحليل طفل 3 سنوات يعاني من كحة وشرقة مفاجئة مع نقص صوت الهواء وتزييق ثابت بالجهة اليمنى:\n1. التشخيص: شرقة والتهاب بجسم غريب (**Foreign Body Aspiration**).\n2. العلاج الفوري الحاسم: إخراج الجسم الغريب عبر مناظير الشعب الهوائية الصلبة والحديثة (**Rigid bronchoscopy**)."
  },

  // topic: "Pneumonia"
  {
    id: "q-c-p-1",
    chapterId: 2,
    type: "define",
    title: "Define Pneumonia",
    content: "Define \"Community-Acquired Pneumonia (CAP)\".",
    answer: "It is the presence of clinical signs and symptoms of inflammation of the lung parenchyma in a previously healthy child, caused by an infection acquired outside of a hospital setting.",
    isClinical: false,
    topic: "Pneumonia",
    explanation: "الـ **CAP** (الالتهاب الرئوي المكتسب من البيئة والمجتمع) هو التهاب صديدي ميكروبي يصيب نسيج الرئة والحويصلات الهوائية في طفل كان سليماً تماماً قبل التقاطه للعدوى خارج جدران المستشفيات."
  },
  {
    id: "q-c-p-2",
    chapterId: 2,
    type: "short-essay",
    title: "Physical Chest exam in Consolidation",
    content: "Enumerate 4 physical chest examination findings characteristic of localized lung consolidation in Pneumonia.",
    answer: "1. Diminished breath sounds over the affected field.\n2. Localized scattered crackles (crepitations).\n3. Bronchial breathing.\n4. Dullness on percussion.",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "أهم 4 علامات إكلينيكية تدل على التصلب والالتهاب الرئوي المتماسك (**Consolidation**):\n1. ضعف وصعوبة دخول الهواء وصوت التنفس بالمنطقة المصابة.\n2. سماع كراكلز وفرقعات ناعمة بالسمامع تعكس تعثر الخلايا والسوائل بالحويصلات.\n3. صوت تنفس مزماري أنبوبي (**Bronchial breathing**).\n4. مظهر مكتوم وصوت باهت عند النقر فوق موضع الالتهاب (**Dullness on percussion**)."
  },
  {
    id: "q-c-p-3",
    chapterId: 2,
    type: "short-essay",
    title: "Systemic Manifestations of Pneumonia",
    content: "Enumerate 4 non-respiratory systemic manifestations that can occur during childhood Pneumonia.",
    answer: "1. Gastrointestinal disturbances (vomiting, anorexia, diarrhea).\n2. Abdominal distention (due to paralytic ileus or swallowed air).\n3. Severe abdominal pain (mimicking acute surgical conditions in lower-lobe pneumonia).\n4. Neck rigidity or meningism (seen in right upper lobe pneumonia).",
    isClinical: false,
    topic: "Pneumonia",
    explanation: "أعراض عامة ومضللة للالتهاب الرئوي في الأطفال تنفي الشبهة المباشرة عن الرئة مخادعة للبطن والأعصاب:\n1. اضطراب الجهاز الهضمي والشهية وحدوث قيء متكرر وبراز غير منتظم.\n2. تمدد وانتفاخ البطن لكسل معوي مصاحب لمظاهر الرئة الملتهبة.\n3. وجع بطن صريح ومستمر يقلد التهاب الزائدة تماماً في التهاب الفصوص الرئوية السفلى.\n4. تصلب رقبي مع محاكاة الحمى الشوكية الكاذبة (**Meningism**) في التهاب الفص العلوي الأيمن."
  },
  {
    id: "q-c-p-4",
    chapterId: 2,
    type: "short-essay",
    title: "Pneumonia Hospitalization Criteria",
    content: "Enumerate 4 primary clinical criteria used to identify the need for Hospitalization in pediatric Pneumonia.",
    answer: "1. Age less than 6 months.\n2. Moderate to severe respiratory distress or hypoxemia (oxygen saturation <90% in room air).\n3. Toxic appearance or signs of clinical shock/severe dehydration.\n4. Inability to tolerate oral medications/fluids, or failure of oral antibiotic outpatient therapy.",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "معايير وقواعد حجز طفل الالتهاب الرئوي بالقسم الداخلي للمستشفى:\n1. الرضع وصغار السن الأصغر من عمر 6 أشهر.\n2. نهجان شديد أو هبوط نسبة تشبع الأكسجين لأقل من **90%** في ظروف هواء الغرفة.\n3. مظهر معتل صحياً وملمس مسمم (**Toxic appearance**) أو علامات جفاف وصدمة حادة.\n4. العجز التام عن بلع العلاج أو السوائل بالفم، أو فشل تلطيف الحرارة بعد تجربة العلاج والمضادات الفموية بالمنزل."
  },
  {
    id: "q-c-p-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Fast Breathing Infant Case",
    content: "A 10-month-old infant presents with a high fever, a severe productive cough, and a respiratory rate of 55 breaths/minute. On chest examination, localized bronchial breathing and crackles are heard over the right lung base.\n\nQuestions:\n1. Does this infant meet the WHO criteria for fast breathing (Tachypnea)?\n2. What is the first-line empiric oral antibiotic of choice for outpatient management?",
    answer: "1. Yes, tachypnea for infants aged 2-12 months is defined as a respiratory rate >50 breaths/minute.\n2. High-dose Amoxicillin (90 mg/kg/24 hr).",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "تحليل كيسة رضيع 10 أشهر يعاني من حرارة ونسم كحة ومعدل تنفس 55 نفس بالدقيقة:\n1. نعم، الطفل يعاني من نهجان معتمد (**Tachypnea**)؛ لأن المعايير لمن هم من عمر شهرين لسنة تشترط أن يكون النفس الطبيعي **أقل من 50 نفس بالدقيقة**.\n2. العلاج الفموي الكلاسيكي والأول للصغار هو شراب **Amoxicillin بجرعة هجومية مكسفة (90 mg/kg/day)**."
  },

  {
    id: "q-c-p-6",
    chapterId: 2,
    type: "problem-solving",
    title: "Atypical Infantile Pneumonia Case",
    content: "A 2-month-old infant is brought to the clinic with a history of progressive, loud, dry, repetitive, and disjointed \"staccato\" coughing fits and fast breathing over the past 2 weeks. The infant is completely afebrile, and the chest X-ray shows significant hyperinflation with mild bilateral interstitial infiltrates. The mother recalls the baby having red, swollen eyes with yellowish discharge at 2 weeks of age.\n\nQuestions:\n1. What is the most likely specific causative pathogen for this child's atypical pneumonia?\n2. Mention the drug of choice, route, and duration for treating this condition.",
    answer: "1. Chlamydia trachomatis (often transmitted perinatally, causing neonatal conjunctivitis followed by staccato cough, hyperinflation, and absence of fever in infants aged 1-3 months).\n2. Oral Erythromycin for 14 days, or oral Azithromycin for 5 days.",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "تحليل رضيع عمره شهران بكحة جافة متقطعة شبيهة بحبات الرشاش (**Staccato Cough**) وبدون أي سخونية، مع خلفية من التهاب صديدي بالعينين بعد الولادة مباشرة:\n1. الكائن المسبب هو **Chlamydia trachomatis** وتنتقل للطفل من رحم وقناة ولادة الأم المصابة.\n2. العلاج السحري والفعال هو شراب مضاد **Erythromycin** لمدة 14 يوماً أو **Azithromycin** لمدة 5 أيام."
  },
  {
    id: "q-c-p-7",
    chapterId: 2,
    type: "short-essay",
    title: "Staphylococcus aureus Pneumonia Complications",
    content: "Enumerate 4 complications or chest X-ray signs of Staphylococcus aureus pneumonia.",
    answer: "1. Development of pneumatoceles (multiple thin-walled, air-filled parenchymal cysts).\n2. Formation of a large pleural empyema.\n3. Development of single or multiple lung abscesses.\n4. Pyopneumothorax (coexisting air and pus in the pleural cavity).",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "مضاعفات الرئة المخربة للالتهاب الرئوي العنقودي السام (**Staphylococcus aureus**):\n1. كيسات هوائية مدمرة رقيقة الجدار بالرئة تسمى **Pneumatoceles**.\n2. تجمع صديدي مهول بالبلورا والقفص الصدري (**Pleural empyema**).\n3. خراج رئوي منخر بنسيج الحويصلات.\n4. تجمع هواء وصم صديد بالاسترواح الصدري البلوري الصديدي (**Pyopneumothorax**)."
  },


  // topic: "Bronchiolitis"
  {
    id: "q-c-b-1",
    chapterId: 2,
    type: "define",
    title: "Define Bronchiolitis",
    content: "Define \"Acute Bronchiolitis\".",
    answer: "It is the acute inflammatory obstruction of the small airways (bronchioles) by mucus, inflammatory cell infiltration, and desquamated epithelial cells, occurring predominantly during the first 2 years of life with a peak at 6 months of age.",
    isClinical: false,
    topic: "Bronchiolitis",
    explanation: "الـ **Bronchiolitis** هو التهاب وانسداد مخاطي خلوي صديدي حاد في صغار الشعيبات الرئوية، بيصيب تحديداً الكتاكيت والرضع تحت سن سنتين (ويبلغ ذروة تفشيه عند عمر 6 أشهر)."
  },
  {
    id: "q-c-b-2",
    chapterId: 2,
    type: "short-essay",
    title: "Bronchiolitis Physical Signs",
    content: "Enumerate 4 clinical findings during physical examination in Bronchiolitis.",
    answer: "1. Sharp, dry repetitive cough and tachypnea (RR 60-80/min).\n2. Hyperinflation of the chest with an increased anteroposterior diameter.\n3. Subcostal and intercostal retractions with diaphragmatic downward displacement of the liver.\n4. Widespread fine end-inspiratory consonating crackles and prolonged expiration with wheezing.",
    isClinical: true,
    topic: "Bronchiolitis",
    explanation: "أهم 4 مظاهر سريرية بفحص طفل يعاني من التهاب الشعيبات البرونكيوليتس:\n1. كحة جافة حادة وسريعة متكررة مع نهجان شديد وسريع يصل لـ 60-80 نفس بالدقيقة.\n2. تمدد وانتفاخ طولي لعرض الصدر (**Hyperinflation**) لحبس الصدر للهواء المنطلق.\n3. سحب عضلات عميق تحت وحول الضلوع ونزول ملمس كبد لأسفل بفعل كبس الحجاب الحاجز النازل.\n4. سماع أصوات تنهيد زفيري صفيري متصل مع فرقعات كراكلز ناعمة في آخر الشهيق."
  },
  {
    id: "q-c-b-3",
    chapterId: 2,
    type: "short-essay",
    title: "Bronchiolitis Complications",
    content: "Enumerate 4 complications that can result from severe Acute Bronchiolitis.",
    answer: "1. Apneic spells (especially in young infants <2 months old).\n2. Secondary bacterial infection or otitis media.\n3. Dehydration and electrolyte imbalance.\n4. Respiratory failure or cardiorespiratory collapse.",
    isClinical: true,
    topic: "Bronchiolitis",
    explanation: "مضاعفات التهاب الشعيبات الرئوية (Bronchiolitis):\n1. **Apneic spells**: نوبات توقف نفس مفاجئ تهدد صغار الأطفال (خاصة الرضع دون الـ شهرين).\n2. **Secondary infections**: التهابات أذن وسطى أو التهابات رئوية بكتيرية ثانوية.\n3. **Dehydration**: خلل أملاح وجفاف بسبب نقص وقدرة الطفل على الرضاعة بالفم لضيق تنفسه المستمر وتسارعه.\n4. **Respiratory Failure**: هبوط وتعب تنفسي كامل يستدعي التنفس الصناعي والمنعش."
  },
  {
    id: "q-c-b-4",
    chapterId: 2,
    type: "short-essay",
    title: "Hospitalized Bronchiolitis Treatment",
    content: "Enumerate 4 core treatment modalities for a hospitalized infant with Bronchiolitis.",
    answer: "1. Humidified supplemental oxygen therapy via nasal prongs.\n2. Parenteral fluid therapy to maintain hydration and electrolyte balance.\n3. Implementation of a single-dose trial of an inhaled bronchodilator.\n4. Antiviral Therapy (Ribavirin): The most important treatment modality for high-risk patients.\n5. Avoidance of sedatives, antibiotics, and systemic steroids.",
    isClinical: true,
    topic: "Bronchiolitis",
    explanation: "مرتكزات خطة علاج ومداواة رضيع البرونكيوليتس بالمستشفى:\n1. دعم الأكسجين الرطب المريح بخرطوم الأنف.\n2. محاليل تروية وريدية دقيقة لتفادي ودعم الجفاف الحاصل والامتناع عن الفم.\n3. تجربة جلسة تنفسية واحدة بجهاز استنشاق موسع شعب (تستكمل لو أظهرت تحسن فوري).\n4. شراب أو استنشاق **Ribavirin** (يُعطى لمرضى الخطورة الشديدة كعيوب القلب والخلل المناعي).\n5. تجنب المهدئات والمضادات والكورتيزون العشوائي الذي تنفيه الدراسات التفاعلية العلمية لعدم جدواه."
  },
  {
    id: "q-c-b-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Hyper-resonant Chest Infant Case",
    content: "A 5-month-old infant presents during winter with a 2-day history of rhinitis followed by a severe dry cough, tachypnea, and chest indrawing. Chest exam reveals a hyper-resonant percussion note and diffuse fine end-inspiratory crackles with wheezes.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What is the primary viral etiology responsible for roughly 50% of these cases?",
    answer: "1. Acute Bronchiolitis.\n2. Respiratory Syncytial Virus (RSV).",
    isClinical: true,
    topic: "Bronchiolitis",
    explanation: "تحليل حالة رضيع 5 أشهر مريض بكحة متسارعة ونهجان وصدر مفرط الرنين وقرقعات ناعمة شتاءً:\n1. التشخيص هو **Acute Bronchiolitis** (التهاب شعيبات حاد).\n2. الفيروس المتصدر بأكثر من 50-60% من هذه الحالات هو الفيروس المخلوي التنفسي (**RSV**)."
  },



  // topic: "Bronchial Asthma"
  {
    id: "q-c-a-1",
    chapterId: 2,
    type: "define",
    title: "Define Bronchial Asthma",
    content: "Define \"Bronchial Asthma\".",
    answer: "It is a chronic, diffuse obstructive inflammatory lung disease characterized by airway hyperreactivity to a variety of stimuli, airway inflammation, and a high degree of reversibility of the obstruction either spontaneously or with treatment.",
    isClinical: false,
    topic: "Bronchial Asthma",
    explanation: "الـ **Bronchial Asthma** هو مرض التهابي مزمن مفرط الحساسية متكرر وضيق بممرات وشعب التنفس، يقلب وينقبض في الصدر مع مثيرات ومهيجات عادية، ويتصف بوجود مرونة لارتجاع الضيق وزواله بالكامل إما تلقائياً أو مع العلاج وموسعات الشعب."
  },
  {
    id: "q-c-a-2",
    chapterId: 2,
    type: "short-essay",
    title: "Asthma Environmental Triggers",
    content: "Enumerate 4 common environmental or physical triggers of childhood Asthma exacerbations.",
    answer: "1. Viral respiratory infections.\n2. Indoor/outdoor allergens (dust mites, pollens, animal dander).\n3. Air pollutants (tobacco smoke, strong chemical odors).\n4. Cold dry air or strenuous physical exercise.",
    isClinical: false,
    topic: "Bronchial Asthma",
    explanation: "مهيجات مستفزة تفجر أزمات حساسية الصدر في الصغار:\n1. الالتهابات الفيروسية التنفسية (الزكام والبرد).\n2. الملوثات المنزلية والغبار من الأثاث والتراب، حبات الطلع بالخريف، وبر حيوانات المنزل.\n3. ملوثات بيئة العمل والغرف مثل تدخين السجائر السام، المذيبات والعطور شديدة الرائحة.\n4. الرياضة الفجائية العنيفة، أو استنشاق تيارات هوائية باردة جافة."
  },


  {
    id: "q-c-a-5",
    chapterId: 2,
    type: "problem-solving",
    title: "FEV1 Improvement Case",
    content: "A 6-year-old boy known to have recurrent wheezing presents to the emergency room with severe breathlessness and a tight cough after playing outdoors in cold weather. Spirometry demonstrates a low FEV1 that increases by 14% after an albuterol nebulizer treatment.\n\nQuestions:\n1. What is the clinical significance of the 14% increase in FEV1?\n2. Enumerate 2 structural thoracic complications this child is at risk of if the acute attack deteriorates suddenly.",
    answer: "1. It demonstrates a high degree of reversible airflow limitation, which is a hallmark diagnostic feature of bronchial asthma.\n2. Pneumothorax (air-leak) and segmental/subsegmental lung collapse.",
    isClinical: true,
    topic: "Bronchial Asthma",
    explanation: "تحليل كيسة طفل 6 سنوات تعرض لتيار بارد مع تدهور في الـ FEV1 تحسنت بـ 14% بعد جلسة البخاخ البسيطة:\n1. **Reversibility**: تحسن مؤشر FEV1 بأكثر من 9-12% يعتبر المعيار الإكلينيكي الذهبي الحاسم لإثبات إصابة الطفل بـ **Bronchial Asthma**.\n2. المضاعفات الطارئة في حال الهبوط هي: استرواح صدري وتجمع هواء بالبلورة (**Pneumothorax**)، وانخماص فصوص بالرئة (**Atelectasis**)."
  },

  // ==================== III. Neonatology Section ====================
  // topic: "Topic One: Transient Cutaneous Lesions"
  {
    id: "q-n-tc-1",
    chapterId: 3,
    type: "define",
    title: "Define Acrocyanosis",
    content: "Define \"Acrocyanosis\" in a newborn infant.",
    answer: "It is a benign, common, and transient neonatal condition characterized by a harmless cyanotic discoloration of the hands and feet due to peripheral circulatory sluggishness and vasomotor instability, especially when exposed to cool temperatures.",
    isClinical: false,
    topic: "Topic One: Transient Cutaneous Lesions"
  },
  {
    id: "q-n-tc-2",
    chapterId: 3,
    type: "short-essay",
    title: "Benign Cutaneous Lesions",
    content: "Enumerate 4 distinct benign \"Transient Cutaneous Lesions\" observed during a normal newborn skin examination.",
    answer: "1. Mongolian spots (blue macular pigmentation over the buttocks).\n2. Erythema toxicum (white papules on an erythematous base containing eosinophils).\n3. Milia of the face (tiny white pinpoint papules representing distended sebaceous glands on the nose).\n4. Salmon patch (transitory macular capillary hemangiomas on the eyelids or neck).",
    isClinical: false,
    topic: "Topic One: Transient Cutaneous Lesions"
  },
  {
    id: "q-n-tc-3",
    chapterId: 3,
    type: "short-essay",
    title: "Erythema Toxicum Features",
    content: "Enumerate 4 clinical features or properties that define \"Erythema Toxicum\" in neonates.",
    answer: "1. Develops 1 to 3 days after birth.\n2. Presents as small, white papules or vesiculopustules on an erythematous base.\n3. Lesions characteristically contain a high concentration of eosinophils on smear.\n4. Distributed primarily on the face, trunk, and extremities, resolving spontaneously within 1 week.",
    isClinical: false,
    topic: "Topic One: Transient Cutaneous Lesions"
  },

  {
    id: "q-n-tc-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Pinpoint Red Ring Papules Case",
    content: "A 2-day-old full-term healthy infant is noted by his mother to have an eruption of scattered small white bumps surrounded by a red ring across his chest and face. A skin scraping reveals the presence of numerous eosinophils. The infant is active and feeding well.",
    answer: "1. Erythema Toxicum.\n2. No treatment is required; it is a benign condition that resolves spontaneously within a week.",
    isClinical: true,
    topic: "Topic One: Transient Cutaneous Lesions"
  },

  // topic: "Topic Two: Prematurity and its Complications"
  {
    id: "q-n-pr-1",
    chapterId: 3,
    type: "define",
    title: "Define Premature Infant",
    content: "Define a \"Premature Infant\" according to the World Health Organization.",
    answer: "It is defined as any live-born infant delivered before 37 completed weeks of gestation (less than 37 weeks).",
    isClinical: false,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n-pr-2",
    chapterId: 3,
    type: "short-essay",
    title: "Preterm System handicaps",
    content: "Enumerate 4 major \"Physiological Handicaps\" resulting from the functional immaturity of organ systems in a premature infant.",
    answer: "1. Immature thermoregulatory mechanisms (due to a large surface area, lack of subcutaneous fat, and immature centers).\n2. Respiratory center immaturity combined with a structural deficiency of pulmonary surfactant.\n3. Hepatic immaturity causing impaired conjugation of bilirubin and deficiency of Vitamin K-dependent clotting factors.\n4. Renal immaturity leading to a low glomerular filtration rate (GFR) and inability to effectively concentrate urine.",
    isClinical: false,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n-pr-3",
    chapterId: 3,
    type: "short-essay",
    title: "Preterm Sensory/CNS complications",
    content: "Enumerate 4 prominent \"Central Nervous System and Sensory\" complications that specifically affect preterm neonates.",
    answer: "1. Intraventricular Hemorrhage (IVH).\n2. Periventricular Leukomalacia (PVL).\n3. Retinopathy of Prematurity (ROP).\n4. Kernicterus (bilirubin encephalopathy developing at lower total bilirubin thresholds).",
    isClinical: true,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n-pr-4",
    chapterId: 3,
    type: "short-essay",
    title: "Preterm Feeding Modalities",
    content: "Enumerate 4 feeding requirements for a stable preterm infant.",
    answer: "1. Utilization of maternal breast milk or specialized preterm formulas.\n2. Implementation of small-volume trophic feedings (minimal enteral nutrition) within 2-4 hours of life if stable to avoid hypoglycemia.\n3. Utilizing a nasogastric tube (gavage feeding) or dropper if the infant lacks coordinated suckling and swallowing reflexes.\n4. Careful monitoring of gastric residuals before each feed, ensuring increments do not exceed 20 mL/kg/24 hr.",
    isClinical: true,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n-pr-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Underaged Translucent Creases Case",
    content: "A male infant is delivered via emergency cesarean section at 31 weeks of gestation due to severe maternal pre-eclampsia. His birth weight is 1300 grams. On admission to the NICU, he is weak, hypoactive, has thin translucent skin, and underdeveloped sole creases.\n\nQuestions:\n1. Classify this newborn based on his birth weight category.\n2. Enumerate 2 immediate respiratory or gastrointestinal complications this preterm infant is at high risk of developing in his first week of life.",
    answer: "1. Very Low Birth Weight (VLBW) infant (defined as a birth weight less than 1500 grams).\n2. Respiratory Distress Syndrome (RDS / Hyaline Membrane Disease) and Necrotizing Enterocolitis (NEC).",
    isClinical: true,
    topic: "Prematurity and its Complications"
  },

  // topic: "Physiological Jaundice"
  {
    id: "q-n-phy-compare-term",
    chapterId: 3,
    type: "short-essay",
    title: "Compare Jaundice in Term Infants",
    content: "Compare between Physiological Jaundice and Pathological Jaundice in a Full-Term infant.",
    answer: "1. Physiological Jaundice:\n- Onset: Appears after 24 hours of age (typically on the 2nd or 3rd day).\n- Peak Serum Bilirubin: Mild level and remains Below 12 mg/dL.\n- Rate of Rise: Bilirubin rises slowly (<5 mg/dL/24 hours).\n- Duration: Resolves spontaneously within 7-10 days.\n- Clinical Status: Completely asymptomatic with normal stool/urine color and no active hemolysis.\n\n2. Pathological Jaundice:\n- Onset: Appears early, within the first 24 hours of life.\n- Peak Serum Bilirubin: Exceeds 12 mg/dL.\n- Rate of Rise: Rises rapidly at a rate >5 mg/dL/24 hours.\n- Duration: Persists beyond 14 days.\n- Clinical Status: Symptomatic (e.g., lethargy, poor sucking), has dark urine, clay-colored stools, or hepatosplenomegaly.",
    isClinical: true,
    topic: "Physiological Jaundice",
    explanation: "مقارنة دقيقة بين الصفراء الفسيولوجية والصفراء المرضية في الأطفال مكتملي النمو (Full-Term):\n\n1. **الصفراء الفسيولوجية (Physiological Jaundice)**:\n   - **وقت الظهور**: يوم 2 أو 3 بعد الولادة (بعد مرور 24 ساعة).\n   - **أعلى مستوى للصفراء**: يظل أقل من 12 مجم/ديسيلتر.\n   - **معدل الزيادة**: بطيء (أقل من 5 مجم/يوم).\n   - **المدة**: تختفي تلقائيًا خلال 7 إلى 10 أيام.\n   - **الحالة الإكلينيكية**: الطفل نشيط ويرضع بشكل طبيعي، والبول والبراز لونهما طبيعي.\n\n2. **الصفراء المرضية (Pathological Jaundice)**:\n   - **وقت الظهور**: مبكر جدًا خلال أول 24 ساعة من العمر.\n   - **أعلى مستوى للصفراء**: يتعدى 12 مجم/ديسيلتر.\n   - **معدل الزيادة**: سريع جدًا (أكثر من 5 مجم/يوم).\n   - **المدة**: تستمر لأكثر من 14 يومًا.\n   - **الحالة الإكلينيكية**: قد يصاحبها خمول، ضعف رضاعة، براز باهت (clay-colored)، بول غامق، أو تضخم بالكبد والطحال."
  },
  {
    id: "q-n-pat-compare-preterm",
    chapterId: 3,
    type: "short-essay",
    title: "Compare Jaundice in Preterm Infants",
    content: "Compare between Physiological Jaundice and Pathological Jaundice in a Preterm infant.",
    answer: "1. Physiological Jaundice:\n- Onset: Appears later, typically on the 4th to 6th day of life.\n- Peak Serum Bilirubin: Remains below 14-15 mg/dL.\n- Rate of Rise: Bilirubin rises slowly (<5 mg/dL/24 hours).\n- Duration: Resolves within 10 to 14 days of life.\n- Clinical Status: Infant is completely asymptomatic, active, and requires no medical therapy.\n\n2. Pathological Jaundice:\n- Onset: Appears in the first 24 hours of life.\n- Peak Serum Bilirubin: Exceeds 14-15 mg/dL.\n- Rate of Rise: Rises rapidly at a rate >5 mg/dL/24 hours.\n- Duration: Persists beyond 21 days of life.\n- Clinical Status: Often symptomatic and requires active monitoring, phototherapy, or exchange transfusion to prevent kernicterus.",
    isClinical: true,
    topic: "Pathological Jaundice",
    explanation: "مقارنة دقيقة بين الصفراء الفسيولوجية والصفراء المرضية في الأطفال المبتسرين (Preterm):\n\n1. **الصفراء الفسيولوجية (Physiological Jaundice)**:\n   - **وقت الظهور**: تظهر متأخرًا، عادة بين اليوم الـ 4 والـ 6 من العمر.\n   - **أعلى مستوى للصفراء**: يظل أقل من 14-15 مجم/ديسيلتر.\n   - **معدل الزيادة**: بطيء (أقل من 5 مجم/يوم).\n   - **المدة**: أطول، وتختفي تلقائيًا خلال 10 إلى 14 يومًا.\n   - **الحالة الإكلينيكية**: الطفل لا يعاني من أعراض ولا يحتاج لعلاج.\n\n2. **الصفراء المرضية (Pathological Jaundice)**:\n   - **وقت الظهور**: تظهر مبكرًا خلال أول 24 ساعة.\n   - **أعلى مستوى للصفراء**: يتعدى 14-15 مجم/ديسيلتر.\n   - **معدل الزيادة**: سريع (أكثر من 5 مجم/يوم).\n   - **المدة**: تستمر لأكثر من 21 يومًا.\n   - **الحالة الإكلينيكية**: يصاحبها خمول وضعف رضاعة وتحتاج تدخل علاجي سريع كالعلاج الضوئي (Phototherapy) لمنع ترسب البيليروبين في المخ (Kernicterus)."
  },

  // topic: "Complications of Indirect Hyperbilirubinemia"
  {
    id: "q-n-comp-1",
    chapterId: 3,
    type: "define",
    title: "Define Kernicterus",
    content: "Define \"Kernicterus (Bilirubin Encephalopathy)\".",
    answer: "It is a severe neurological syndrome resulting from the structural deposition of unconjugated bilirubin in the basal ganglia and brainstem nuclei, leading to irreversible cell death and neural damage.",
    isClinical: false,
    topic: "Complications of Indirect Hyperbilirubinemia",
    explanation: "التعريف الدقيق للـ Kernicterus (Bilirubin Encephalopathy):\nهو متلازمة عصبية خطيرة تنتج عن ترسب البيليروبين غير المباشر (غير المقترن Unconjugated) في خلايا المخ العميقة مثل النواة القاعدية (Basal ganglia) وجذع الدماغ (Brainstem nuclei)، مما يؤدي إلى تلف خلايا وتدمير دائم للأعصاب."
  },
  {
    id: "q-n-comp-preventable",
    chapterId: 3,
    type: "short-essay",
    title: "Preventable causes of Kernicterus",
    content: "Enumerate 6 preventable causes of Kernicterus.",
    answer: "1. Early discharge (<48 hr) with NO FOLLOW-UP.\n2. Failure to check bilirubin level in infants with early jaundice (<24 hr).\n3. Failure to recognize clinical risk factors for severe hyperbilirubinemia.\n4. Visual underestimation of the severity of jaundice.\n5. Lack of concern or professional delay in ordering measurements/phototherapy.\n6. Failure to respond to parental concern regarding jaundice severity.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia",
    explanation: "الأسباب التي يمكن تجنبها ومنعها لمنع حدوث الـ Kernicterus حسب المخطط:\n1. **الخروج المبكر**: خروج الطفل من المستشفى مبكراً (قبل 48 ساعة من الولادة) دون تحديد موعد للمتابعة.\n2. **تأخر فحص الصفراء**: عدم قياس نسبة الصفراء في حالات الصفراء المبكرة (التي تظهر في أول 24 ساعة).\n3. **عدم الانتباه لعلامات الخطورة**: الفشل في معرفة واستيعاب عوامل الخطورة التي تزيد فرصة حدوث الصفراء الشديدة.\n4. **التقدير البصري الخاطئ**: الاعتماد على العين لتخمين نسبة الصفراء بدلاً من القياس الكمي.\n5. **قلة الاهتمام أو تأخير العلاج**: التراخي من مقدم الخدمة في طلب الفحص أو بدء العلاج الضوئي.\n6. **تجاهل قلق الأهل**: عدم الاستماع لشكوى الأبوين بشأن زيادة صفار الطفل أو خموله."
  },
  {
    id: "q-n-comp-2",
    chapterId: 3,
    type: "short-essay",
    title: "Predisposing Kernicterus factors",
    content: "Enumerate 4 predisposing clinical risk factors that facilitate the development of Kernicterus.",
    answer: "1. Severe, uncontrolled unconjugated hyperbilirubinemia.\n2. Severe hypoalbuminemia (decreasing bilirubin binding capacity).\n3. Disruption or increased permeability of the blood-brain barrier (caused by hypoxia, acidosis, or sepsis).\n4. Administration of drugs that compete for albumin binding sites (such as sulfonamides, salicylates, or heavy vitamin K3).",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia",
    explanation: "عوامل الخطورة المهيئة لحدوث الـ Kernicterus وعمل ترسب البيليروبين في المخ:\n1. **ارتفاع بيليروبين الدم غير المباشر**: المستويات العالية وغير المستقرة من الـ Unconjugated Bilirubin.\n2. **نقص الألبومين الشديد (Hypoalbuminemia)**: يقلل من قدرة الدم على ربط ونقل البيليروبين في الدم.\n3. **زيادة نفاذية الحاجز الدموي الدماغي (BBB)**: بسبب حدوث عدوى عامة (Sepsis)، نقص الأكسجين (Hypoxia)، أو حموضة الدم (Acidosis).\n4. **أدوية منافسة**: تعاطي أدوية تزيح البيليروبين من على الألبومين (مثل Sulfonamides, Salicylates, Vitamin K3)."
  },
  {
    id: "q-n-comp-3",
    chapterId: 3,
    type: "short-essay",
    title: "Kernicterus Phase 1 signs",
    content: "Enumerate 4 clinical signs seen during Phase 1 (the first 1-2 days) of the acute form of Kernicterus.",
    answer: "1. Poor sucking and feeding intolerance.\n2. Loss of the normal Moro reflex.\n3. Marked lethargy or stupor.\n4. Hypotonia accompanied by a high-pitched cry or seizures.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia",
    explanation: "المظاهر الإكلينيكية للمرحلة الأولى (Phase 1) للـ Acute Kernicterus (تظهر في أول يوم أو يومين):\n1. **ضعف الرضاعة**: رفض الرضاعة وضعف المص (Poor sucking).\n2. **فقدان منعكس مورو**: غياب الـ Moro reflex الطبيعي.\n3. **خمول شديد**: فقدان النشاط (Lethargy or stupor).\n4. **ارتخاء حاد بالعضلات**: ارتخاء الجسم (Hypotonia) مصحوبًا بصرخة عالية النبرة (High-pitched cry) أو حدوث تشنجات."
  },
  {
    id: "q-n-comp-4",
    chapterId: 3,
    type: "short-essay",
    title: "Kernicterus long-term manifestations",
    content: "Enumerate 4 chronic neurological findings of Kernicterus by 3 years of age.",
    answer: "1. Bilateral choreoathetosis (extrapyramidal involuntary movements) and muscle rigidity.\n2. Mental deficiency / cognitive impairment.\n3. High-frequency sensorineural hearing loss.\n4. Squinting and defective upward movement of the eyes.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia",
    explanation: "الأعراض العصبية المزمنة للـ Kernicterus التي تتضح عند عمر 3 سنوات:\n1. **حركات لا إرادية ثنائية (Bilateral choreoathetosis)**: حركات عشوائية واهتزازية في الأطراف وتصلب العضلات.\n2. **تأخر عقلي**: ضعف القدرات المعرفية والعقلية (Mental deficiency).\n3. **فقدان السمع عصبي حسي**: فقدان القدرة الإدراكية للأصوات عالية التردد (High-frequency sensorineural hearing loss).\n4. **الحول وصعوبة حركة العين**: مشاكل بالرؤية وحركة العين لأعلى (Defective upward eye movement)."
  },
  {
    id: "q-n-comp-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Opisthotonos High Bilirubin Case",
    content: "A 5-day-old term infant with a total serum bilirubin level of 34 mg/dL exhibits poor sucking, hypotonia, a high-pitched cry, and an episodic backwards arching of his neck and trunk (opisthotonos).\n\nQuestions:\n1. What severe complication has this infant developed?\n2. Enumerate 2 major therapeutic modalities used immediately to reduce indirect bilirubin levels below neurotoxic thresholds.",
    answer: "1. Bilirubin Encephalopathy / Acute Kernicterus.\n2. Intensive Phototherapy and immediate Exchange Transfusion.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia",
    explanation: "تحليل الكيسة العصبية:\n1. طفل عنده 5 أيام، نسبة الصفراء 34 مجم/ديسيلتر (عالية جداً وفوق المسموح) وعنده مظاهر عصبية صريحة كارتخاء مع تقوس للخلف (Opisthotonos) وصرخة نبرتها عالية: التشخيص هو **Kernicterus / Acute Bilirubin Encephalopathy**.\n2. طرق التدخل العاجل لخفض النسبة المهولة وتجنب تدمير الدماغ:\n- **Phototherapy**: علاج ضوئي مكثف.\n- **Exchange Transfusion**: تغيير دم الطفل الفوري."
  },
 
  // topic: "Neonatal Sepsis"
  {
    id: "q-n-sep-1",
    chapterId: 3,
    type: "define",
    title: "Define Neonatal Sepsis",
    content: "Define \"Neonatal Sepsis (Septicemia)\".",
    answer: "It is a clinical syndrome of systemic illness characterized by signs of systemic infection and accompanied by documented bacteremia occurring within the first 4 weeks of life.",
    isClinical: false,
    topic: "Neonatal Sepsis",
    explanation: "التعريف الرسمي لتسمم الدم في حديثي الولادة (Neonatal Sepsis):\nهو متلازمة سريرية تتميز بوجود أعراض وعلامات عدوى بكتيرية عامة في الجسم، وتكون مصحوبة بمزرعة دم إيجابية (Bacteremia) تظهر خلال أول 4 أسابيع من عمر الطفل (الـ 28 يومًا الأولى)."
  },
  {
    id: "q-n-sep-css-define",
    chapterId: 3,
    type: "define",
    title: "Define Clinical Sepsis Score",
    content: "Define \"Clinical Sepsis Score\" and state its clinical diagnostic threshold.",
    answer: "It is a clinical scoring system used to suspect neonatal sepsis based on 7 categories of clinical signs (respiratory, cardiovascular, neuromuscular, circulatory, behavioral, gastrointestinal, and metabolic). Sepsis is strongly suspected if a newborn exhibits 3 or more of these clinical signs.",
    isClinical: false,
    topic: "Neonatal Sepsis",
    explanation: "تعريف الـ Clinical Sepsis Score وحدود الاشتباه الإكلينيكي:\nهو نظام تقييم سريري يُستخدم للاشتباه بحدوث تسمم الدم لدى حديثي الولادة بناءً على 7 علامات سريرية تغطي وظائف أجهزة الجسم (التنفس، القلب والدورة الدموية، الأعصاب، التروية، السلوك والرضاعة، الجهاز الهضمي، والتمثيل الغذائي). يُشتبه بشدة في إصابة الطفل بالتسمم عندما يسجل 3 علامات أو أكثر من هذه العلامات."
  },
  {
    id: "q-n-sep-2",
    chapterId: 3,
    type: "short-essay",
    title: "Maternal Sepsis risks",
    content: "Enumerate 4 critical \"Maternal Risk Factors\" strongly correlated with the development of early-onset Neonatal Sepsis.",
    answer: "1. Premature Rupture of Membranes (PROM) lasting longer than 24 hours.\n2. Maternal peripartum fever (temperature >=38°C) or documented chorioamnionitis.\n3. Active maternal urinary tract infection (UTI) or perineal colonization with E. coli/GBS.\n4. Foul-smelling, cloudy, or meconium-stained amniotic fluid.",
    isClinical: true,
    topic: "Neonatal Sepsis",
    explanation: "عوامل الخطورة المتعلقة بالأم (Maternal Risk Factors) التي تزيد خطر تسمم الدم بدري:\n1. **PROM > 24 hours**: انفجار جيب المياه قبل الولادة بأكثر من 24 ساعة، مما يسهل صعود البكتيريا للطفل.\n2. **Maternal Fever**: سخونية الأم أثناء الولادة (temperatue >= 38°C) أو التهاب السائل الأمنيوسي (Chorioamnionitis).\n3. **Maternal UTI**: وجود التهاب نشط في مجرى البول للأم أو استيطان بكتيريا GBS أو E. Coli بالمهبل.\n4. **Foul-smelling liquor**: نزول مياه الولادة برائحة كريهة أو معكرة بالبراز الجنيني (Meconium)."
  },
  {
    id: "q-n-sep-3",
    chapterId: 3,
    type: "short-essay",
    title: "Calculating Sepsis Score",
    content: "Enumerate the 7 clinical components/signs utilized to calculate the \"Clinical Sepsis Score\" (Sepsis is suspected if 3 or more are present).",
    answer: "1. Respiratory signs: Apnea, tachypnea, cyanosis, or respiratory distress.\n2. Cardiovascular signs: Bradycardia or tachycardia.\n3. Neuromuscular signs: Hypotonia or seizures.\n4. Circulatory signs: Poor skin color or poor peripheral circulation.\n5. Behavioral signs: Irritability, lethargy, or poor feeding.\n6. Gastrointestinal signs: Hepatosplenomegaly or abdominal distension.\n7. Metabolic signs: Fever or hypothermia.",
    isClinical: false,
    topic: "Neonatal Sepsis",
    explanation: "مكونات الـ Clinical Sepsis Score لتخمين احتمالية إصابة الطفل بتسمم الدم (يشتبه بالمرض عند وجود 3 علامات أو أكثر):\n1. **الجهاز التنفسي**: حدوث نوبات انقطاع نفس (Apnea) أو تنفس سريع (Tachypnea) أو زرقان.\n2. **جهاز الدوري**: تباطؤ أو تسارع ضربات القلب.\n3. **الجهاز العصبي العضلي**: ارتخاء شديد بالجسم أو تشنجات.\n4. **التروية والدورة اللمفاوية**: شحوب حاد بالجلد أو ضعف التدفق الدموي المحيطي.\n5. **السلوك والوعي**: تهيج الطفل، خموله الشديد، أو صعوبة الرضاعة.\n6. **الجهاز الهضمي**: وذمة وانتفاخ بالبطن أو تضخم الكبد والطحال.\n7. **التمثيل الغذائي**: ارتفاع الحرارة أو هبوطها (برودة الجسم)."
  },
  {
    id: "q-n-sep-4",
    chapterId: 3,
    type: "short-essay",
    title: "Sepsis biomarkers Workup",
    content: "Enumerate 4 inflammatory laboratory biomarkers or findings included in a neonatal Sepsis Workup.",
    answer: "1. Neutropenia (a sign of severe sepsis) or neutrophilia.\n2. An elevated ratio of immature band cells to total neutrophils greater than 0.2.\n3. Marked thrombocytopenia (a late finding).\n4. Significantly elevated acute-phase reactants, specifically C-Reactive Protein (CRP) and ESR.",
    isClinical: true,
    topic: "Neonatal Sepsis",
    explanation: "أهم العلامات والمؤشرات المعملية لالتهاب الدم (Sepsis workup):\n1. **Neutropenia/Neutrophilia**: نقص كرات الدم البيضاء المتعادلة (مؤشر خطير!) أو زيادتها.\n2. **I/T Ratio > 0.2**: زيادة الخلايا غير الناضجة (Band cells) بالنسبة للمتعادلة، تدل على استهلاك النخاع.\n3. **Thrombocytopenia**: نقص صفائح الدم (يحدث متأخرًا كدليل على انتشار الالتهاب).\n4. **CRP / ESR**: ارتفاع مؤشرات الالتهاب الحادة في الدم مثل البروتين التفاعلي C."
  },
  {
    id: "q-n-sep-5",
    chapterId: 3,
    type: "problem-solving",
    title: "NICU sudden temperature drop Case",
    content: "A 4-day-old preterm infant in the NICU exhibits a sudden onset of temperature instability (hypothermia of 35.4°C), poor feeding, new-onset apneic spells, and severe abdominal distention. The maternal history confirms a prolonged rupture of membranes lasting 30 hours.\n\nQuestions:\n1. Calculate the infant's clinical status based on the Clinical Sepsis Score parameters.\n2. Mention the diagnostic category if this infant features a highly suggestive clinical picture alongside a positive blood culture for Klebsiella.",
    answer: "1. The infant exhibits 4 positive signs (respiratory/apnea, behavioral/poor feeding, GI/distention, metabolic/hypothermia), strongly indicating sepsis as the score is >=3.\n2. Proven Neonatal Sepsis.",
    isClinical: true,
    topic: "Neonatal Sepsis",
    explanation: "تحليل كيسة تسمم الدم بالـ NICU:\n1. طفل مبتسر ظهرت عليه علامات انقطاع نفس وخمول وانتفاخ بطن وهبوط حرارة (4 علامات صريحة من الـ Sepsis Score)، مع تاريخ PROM 30 ساعة بالأم: نعم، الطفل يحتاج فوراً علاج مضاد حيوي تجريبي عاجل لأن نتيجته >= 3.\n2. لو كانت الأعراض مصحوبة بمزرعة دم إيجابية لبكتيريا الـ Klebsiella: يصنف كـ **Proven Neonatal Sepsis** (تسمم دم مؤكد معمليًا)."
  },

  // ==================== IV. Emergency Section ====================
  // topic: "Steps of Cardiopulmonary Resuscitation (CPR)"
  {
    id: "q-cpr-def",
    chapterId: 4,
    type: "define",
    title: "Definition & Brain Survival in CPR",
    content: "Define Cardiopulmonary Resuscitation (CPR) and state the critical timelines for brain and cardiovascular survival.",
    answer: "1. Definition: CPR is a sudden unexpected cessation of circulation and or respiration in a patient who is unlikely to die and whom the potentials for recovery are good.\n2. Survival Timelines: If successful resuscitative efforts are not performed within 5 minutes, brain or cardiovascular death will occur. Irreversible brain damage happens after about seven minutes.",
    isClinical: false,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)",
    explanation: "تعريف الـ **CPR**:\nهو انقطاع مفاجئ غير متوقع للدورة الدموية أو التنفس في مريض غير متوقع وفاته وفرص شفائه جيدة.\n\nالجدول الزمني الحرج:\n- إذا لم يتم الإنعاش خلال **5 دقائق**، يحدث موت للمخ أو القلب.\n- يحدث ضرر دائم غير قابل للإصلاح بخلايا المخ بعد **7 دقائق**."
  },
  {
    id: "q-cpr-levels",
    chapterId: 4,
    type: "short-essay",
    title: "Three Levels of CPR Support",
    content: "Enumerate the three types (levels) of Life Support in CPR and their corresponding alphabetic steps.",
    answer: "1. Basic Life Support (BLS): Steps A, B, and C.\n2. Advanced Life Support (ALS): Steps D, E, and F.\n3. Prolonged Life Support (PLS): Steps G, H, and I.",
    isClinical: false,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)",
    explanation: "مستويات الإنعاش الثلاثة:\n- **Basic Life Support (BLS)**: خطوات أ، ب، ج (A, B, C).\n- **Advanced Life Support (ALS)**: خطوات د، هـ، و (D, E, F).\n- **Prolonged Life Support (PLS)**: خطوات ز، ح، ط (G, H, I)."
  },
  {
    id: "q-cpr-bls-steps",
    chapterId: 4,
    type: "short-essay",
    title: "Basic Life Support (A, B, C) Steps",
    content: "Enumerate the clinical steps for A, B, and C in Basic Life Support (BLS).",
    answer: "A (Airway control):\n1. Open airway (triple airway maneuver).\n2. Clear airway (remove foreign bodies, suction mouth/oropharynx).\n3. Maintain patent airway (oropharyngeal airway, ETT).\n\nB (Breathing support):\n- Mouth-to-mouth, Bag and mask (20 breaths/min), or Bag and tube ventilation with O2.\n\nC (Circulation support):\n- Cardiac compression at midsternum (Freq ~100/min, Ratio of ventilation to compression 1:5).",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)",
    explanation: "خطوات الدعم الأساسي للحياة (BLS):\n\n**A: التحكم في مسار الهواء (Airway control)**\n1. فتح المجرى (Triple maneuver).\n2. تنظيف المجرى (شفط وإزالة أي أجسام غريبة).\n3. الحفاظ على المجرى مفتوحاً (Oropharyngeal airway أو أنبوبة حنجرية).\n\n**B: دعم التنفس (Breathing support)**\n- تنفس صناعي (من الفم للفم، أو بالماسك والأمبوباج بمعدل 20 نفس/دقيقة).\n\n**C: دعم الدورة الدموية (Circulation support)**\n- تدليك القلب عند نقطة منتصف عظمة القص (بسرعة 100 ضغطة/دقيقة، ونسبة 1 نفس لكل 5 ضغطات)."
  },
  {
    id: "q-cpr-comp-techs",
    chapterId: 4,
    type: "short-essay",
    title: "CPR Compression Techniques & Depths",
    content: "Enumerate the age-specific compression techniques and depths for Basic Life Support.",
    answer: "Techniques:\n- Newborns: Hand encircling technique.\n- Infants: Two fingers technique.\n- Young children: One hand technique.\n- Old children: Two hands technique.\n\nDepths:\n- Infant: 2 cm.\n- Young child: 3 cm.\n- Old child: 4 cm.",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)",
    explanation: "تقنيات وعمق ضغط الصدر حسب العمر:\n\n**التقنية:**\n- حديث الولادة: تطويق باليد (Hand encircling).\n- الرضع: إصبعين (Two fingers).\n- الأطفال الصغار: يد واحدة (One hand).\n- الأطفال الكبار: يدين (Two hands).\n\n**العمق:**\n- الرضع: 2 سم.\n- الأطفال الصغار: 3 سم.\n- الأطفال الكبار: 4 سم."
  },
  {
    id: "q-cpr-als-steps",
    chapterId: 4,
    type: "short-essay",
    title: "Advanced Life Support (D, E, F) Steps",
    content: "Enumerate the clinical steps for D, E, and F in Advanced Life Support (ALS).",
    answer: "D (Drugs I.V.):\n- Sodium bicarbonate (1-2 ml/kg), Adrenaline (0.1 ml/kg of 1:10,000 solution), and Fluids (20 ml/kg over 10 min).\n\nE (ECG monitoring):\n- Detect arrhythmias. In asystole: repeat adrenaline at 10 times the first dose.\n\nF (Fibrillation control):\n- Defibrillation (2 joules/kg, 4 joules/kg, then 8 joules/kg).",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)",
    explanation: "خطوات الدعم المتقدم للحياة (ALS):\n\n**D: الأدوية (Drugs)**\n- بيكربونات الصوديوم، وأدرينالين، وسوائل تعويضية (20 مل/كجم).\n\n**E: رسم القلب (ECG)**\n- مراقبة ضربات القلب، وفي حالة التوقف التام (Asystole) تكرر جرعة الأدرينالين بـ 10 أضعاف الجرعة الأولى.\n\n**F: التحكم في الرجفان (Fibrillation control)**\n- الصدمات الكهربائية (2 ثم 4 ثم 8 جول/كجم)."
  },
  {
    id: "q-cpr-pls-steps",
    chapterId: 4,
    type: "short-essay",
    title: "Prolonged Life Support (G, H, I) Steps",
    content: "Enumerate the clinical steps for G, H, and I in Prolonged Life Support (PLS).",
    answer: "G (Recognition and treatment):\n- Treatment of the causative disease according to etiology.\n\nH (Brain recovery):\n- Control of convulsive fits or acute increased intracranial pressure (ICP).\n\nI (Intensive care):\n- Multiple system support performed carefully in the PICU.",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)",
    explanation: "خطوات الدعم الممتد للحياة (PLS):\n\n**G: التشخيص والعلاج (Recognition and treatment)**\n- علاج المرض المسبب للارست.\n\n**H: تعافي المخ (Brain recovery)**\n- التحكم في التشنجات أو ارتفاع ضغط المخ.\n\n**I: الرعاية المركزة (Intensive care)**\n- دعم أجهزة الجسم المتعددة في العناية المركزة للأطفال."
  },
  {
    id: "q-cpr-arrest-warning",
    chapterId: 4,
    type: "short-essay",
    title: "Impending Arrest Warning Signs",
    content: "Enumerate the clinical warning signs of impending cardiac arrest.",
    answer: "1. Altered mental status.\n2. Decreasing respiratory effort.\n3. Rising CO2 level.\n4. Bradycardia.\n5. Hypotension.",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)",
    explanation: "علامات الإنذار بقرب توقف القلب:\n1. تغير الحالة الذهنية (Altered mental status).\n2. تناقص مجهود التنفس.\n3. ارتفاع نسبة ثاني أكسيد الكربون CO2.\n4. بطء ضربات القلب (Bradycardia).\n5. هبوط ضغط الدم (Hypotension)."
  },

  // topic: "Topic Two: Shock"
  {
    id: "q-e-sh-comp",
    chapterId: 4,
    type: "short-essay",
    title: "Comprehensive Overview of Shock",
    content: "Provide a comprehensive overview of Shock by defining the clinical state, enumerating its 6 primary types, and listing its life-threatening complications.",
    answer: "1. Definition: A clinical state of circulatory inadequacy due to disruption of tissue perfusion, leading to inadequate oxygen/nutrient supply and metabolite removal from end-organ cells.\n2. 6 Types of Shock:\n   - Septic shock.\n   - Hypovolemic shock (Severe dehydration, hemorrhage, or burns).\n   - Obstructive shock (Tension pneumothorax, tamponade, or vascular lesions).\n   - Cardiogenic shock (Acute heart failure or advanced shock).\n   - Kinetic/Distributive shock (Anaphylactic, Neurogenic, or Early Septic shock).\n   - Metabolic shock (Acute suprarenal failure).\n3. Complications of Untreated Shock: Acute Kidney Injury (AKI), Disseminated Intravascular Coagulation (DIC), Acute Respiratory Distress Syndrome (ARDS), Multiple Organ Dysfunction Syndrome (MODS), and eventually death.",
    isClinical: true,
    topic: "Topic Two: Shock",
    explanation: "نظرة دقيقة لمرض وعوارض الصدمة (**Shock**):\n1. **التعريف**: هبوط حاد وضعف تروية الخلايا لدم كافٍ، لعيب بالقلب أو قلة السوائل أو توسع الأوعية المفاجئ.\n2. **أنواعه الـ 6 الشهيرة**:\n   - الصدمة التسممية البكتيرية (**Septic**).\n   - صدمة نقص الحجم والسوائل (**Hypovolemic**).\n   - الصدمة الانسدادية الميكانيكية لمرور الدم (**Obstructive**).\n   - الصدمة هبوط وفشل عضلة القلب بمثابة المضخة (**Cardiogenic**).\n   - الصدمة التوزيعية بتدفق وممر الأوعية المتسع كالحساسية الحادة (**Distributive/Anaphylactic**).\n   - الصدمة التفاعلية الفتاكة نتيجة فشل الغدة القشرية فوق الكلوية (**Metabolic/Acute adrenal crisis**).\n3. **مضاعفاته الشرسة**: توقف الكلى وحموضة الصدر المهلكة وتخثر الدم المتكامل وتلف الأجهزة."
  },
  {
    id: "q-e-sh-1",
    chapterId: 4,
    type: "define",
    title: "Define Circulatory Shock",
    content: "Define \"Circulatory Shock\".",
    answer: "It is the clinical state of systemic circulatory inadequacy characterized by a disruption of tissue perfusion, leading to inadequate delivery of oxygen and nutrients to cells and inadequate removal of metabolic waste products from end organs.",
    isClinical: false,
    topic: "Topic Two: Shock",
    explanation: "تعريف الصدمة الوعائية (**Circulatory Shock**):\nهي حالة إكلينيكية حادة من الاعتلال الوعائي تتميز بقصور تروية الدم للأنسجة، لتفشل الأوعية تماماً في نقل الأكسجين والغذاء الخلايا، وعجزها كلياً عن غسيل وتنظيف الفضلات والمخلفات السامة لترسب بالأعضاء والجلد."
  },
  {
    id: "q-e-sh-2",
    chapterId: 4,
    type: "short-essay",
    title: "Emergency Shock classification",
    content: "Enumerate 4 prominent \"Types\" of shock categorized in pediatric emergency medicine.",
    answer: "1. Hypovolemic shock (e.g., from severe dehydration or hemorrhage).\n2. Septic shock (systemic inflammatory response due to fulminant infection).\n3. Cardiogenic shock (due to acute heart failure or myocarditis).\n4. Distributive shock (e.g., Anaphylactic shock or Neurogenic shock).",
    isClinical: false,
    topic: "Topic Two: Shock",
    explanation: "التصنيفات الأربعة الأكثر انتشاراً للصدمة لدى الطفولة بالعيادة:\n1. صدمة هبوط الحجم والسوائل (**Hypovolemic shock**) من إسهال مائي سام أو جفاف شديد أو نزيف حاد.\n2. الصدمة الإنتانية التسممية (**Septic shock**) بفعل سموم الميكروبات ورجس الدم.\n3. صدمة مضخة القلب المعتلة (**Cardiogenic shock**) لتأثر وبلاء عضلات البطينين.\n4. الصدمة التوزيعية الوعائية (**Distributive shock**) بفعل هبوط المقاومة كأعراض صدمة الحساسية العنيفة."
  },
  {
    id: "q-e-sh-3",
    chapterId: 4,
    type: "short-essay",
    title: "Compensated Shock vs Decompensated",
    content: "Enumerate 4 classic clinical findings that distinguish \"Compensated Shock\" from decompensated shock.",
    answer: "1. Marked tachycardia.\n2. Delayed capillary refill time (>2 seconds).\n3. Cold, pale, or mottled peripheries.\n4. Normal or near-normal systolic blood pressure.",
    isClinical: true,
    topic: "Topic Two: Shock",
    explanation: "كيف تفرق الصدمة المعوضة البسيطة (**Compensated**) عن مرحلة الصدمة المنهارة المهلكة (**Decompensated**):\nفي المرحلة المعوضة الأولى، يستميت الجسم لتأمين تدفق الدم بزيادة دقات القلب وتضييق الأوعية السطحية لحراسة ضغط الدم، فتجد ضربات قلب متسارعة، وتأخر زمن امتلاء الشعيرات الطرفية (**CRT > 2 seconds**)، وبرودة وتبرقش أطراف وجلد الطفل، ولكن يظل ضغط الدم الانقباضي سليماً طبيعياً تماماً."
  },
  {
    id: "q-e-sh-4",
    chapterId: 4,
    type: "short-essay",
    title: "Vasoactive Inotropes",
    content: "Enumerate 4 vasoactive inotropic medications in fluid-refractory shock with their indications.",
    answer: "1. Epinephrine (Adrenaline): First-line agent for pediatric fluid-refractory cold septic shock or cardiogenic shock.\n2. Norepinephrine (Noradrenaline): First-line potent vasoconstrictor for warm distributive septic shock.\n3. Dobutamine: Strong inotrope indicated for low cardiac output states with a normal baseline blood pressure.\n4. Milrinone: Inodilator indicated for myocardial dysfunction, left ventricular failure, or post-cardiac surgery.",
    isClinical: true,
    topic: "Topic Two: Shock",
    explanation: "الرافعات والمنشطات الوعائية الأربعة ودواعي العمل الدقيق بالقسم الداخلي بمشفى الأطفال:\n1. الـ **Epinephrine**: الرقم الأول لترميم وعلاج صدمة الصدر التسممية الباردة وهبوط قوة انقباض القلب.\n2. الـ **Norepinephrine**: أفضل مقبض للأوعية ورفع الضغط لإنقاذ الصدمة التسممية الدافئة متسعة الأوعية.\n3. الـ **Dobutamine**: مقوي كفاءة الانقباض وضبط حجم القذف الصدري والضغط معتدل البنية.\n4. الـ **Milrinone**: الموسع والداعم المجهد للأوعية لإنقاذ عمليات وتشوهات القلب المعتلة."
  },
  {
    id: "q-e-sh-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Bounding Peripheral Pulses Case",
    content: "A 3-year-old child presents with a severe toxic look, high fever, cold hands, bounding peripheral pulses, and a delayed capillary refill of 4 seconds. His systolic blood pressure has dropped significantly below the normal range for his age, and he is passing minimal urine.\n\nQuestions:\n1. Is this shock compensated or uncompensated?\n2. What is the immediate first-line preload fluid expansion protocol, including specific fluid type and initial dose?",
    answer: "1. Uncompensated shock (due to the drop in blood pressure and organ hypoperfusion).\n2. Intravenous bolus of an isotonic crystalloid (Normal Saline or Ringer's Lactate) at a dose of 20 ml/kg infused rapidly over 10-15 minutes.",
    isClinical: true,
    topic: "Topic Two: Shock",
    explanation: "تحليل طفل التسمم البكتيري وصدمة هبوط الضغط:\n1. الصدمة هنا غير معوضة (**Uncompensated**) بسبب هبوط ضغط اللمس والانقباض والاضطراب البولي بمرور العينات.\n2. علاج التروية الفوري الفارق هو حقن سوائل عضلية هجومية مكثفة من المحلول الفسيولوجي بمقدار **20 ml/kg** تتدفق سريعاً طوال 10-15 دقيقة فقط لدعم وضخ الشرايين."
  },

  // topic: "Topic Three: Coma"
  {
    id: "q-e-co-1",
    chapterId: 4,
    type: "define",
    title: "Define Coma",
    content: "Define \"Coma\".",
    answer: "Coma is a state of prolonged unconsciousness in which the child CANNOT BE AROUSED even with painful stimuli.",
    isClinical: false,
    topic: "Topic Three: Coma",
    explanation: "تعريف الغيبوبة الحادة (**Coma**):\nهي حالة سريرية مرجوة من الغياب التام لليقظة وعمل القشرة الدماغية واليقظة، حيث يظل الطفل في غفوة طويلة فاقداً للوعي كلياً ولا يستجيب لأعنف وأقوى المثيرات الحركية أو الحثية أو المنبهة الألمية."
  },
  {
    id: "q-e-co-2",
    chapterId: 4,
    type: "short-essay",
    title: "Secondary Brain pathology Encephalopathies",
    content: "Enumerate 4 secondary brain lesions or encephalopathies that cause a secondary metabolic Coma.",
    answer: "1. Hypoxic encephalopathy (following cardiac arrest or severe shock).\n2. Diabetic Ketoacidosis (DKA) encephalopathy.\n3. Hypoglycemic coma.\n4. Uremic or hepatic encephalopathy (secondary to acute renal or hepatic failure).",
    isClinical: false,
    topic: "Topic Three: Coma",
    explanation: "الاعتلالات اللمسية ومخ المخات التي تسبب غيبوبة استقلابية كيميائية ثانوية (Secondary metabolic coma):\n1. قصور خلايا الأكسجين بالدماغ المتتابع للتوقف التنفسي أو الصدمة العنيفة.\n2. الـ **DKA**: حموضة وعوارض غيبوبة السكر البولية العتيدة.\n3. هبوط وهفوة مستوى الجلوكوز بالدم للرضع والمصابين.\n4. غيبوبة الفشل الفطري للسموم بتسمم بولينا الكلى أو تلف الكبد الفيروسي والسمي."
  },
  {
    id: "q-e-co-3",
    chapterId: 4,
    type: "short-essay",
    title: "Urgent diagnostic Coma screens",
    content: "Enumerate 4 urgent laboratory/screening tests for unexplained coma.",
    answer: "1. Rapid blood glucose level (to rule out hypoglycemia or DKA).\n2. Arterial Blood Gases (ABG) and serum electrolytes.\n3. Renal function tests (blood urea nitrogen and creatinine) and liver enzymes.\n4. Urgent sepsis screening (CBC, CRP) and toxicological screening if suspected.",
    isClinical: false,
    topic: "Topic Three: Coma",
    explanation: "الشاشات والمحاور المخبرية الفورية العاجلة لحالات الغيبوبة غير معلنة الهوية بالاستقبال:\n1. قياس مستوى السكر العشوائي بالدم فوراً لإنقاذ هبوط السكر أو كشف تشنج السكري.\n2. غازات الدم والتروية الأيونية لدراسة توازن الدم والأملاح.\n3. فحص البول والدم لكشف اليوريا والوظائف الكظرية للتفتيش عن التدمير البوليني والكبدي.\n4. عينات ودراسات التسمم والسميات المحاطة بالاستنشاق والبلع."
  },
  {
    id: "q-e-co-4",
    chapterId: 4,
    type: "short-essay",
    title: "Invasive intracranial pressure management",
    content: "Enumerate 4 medical measures to control increased Intracranial Pressure (ICP) in coma.",
    answer: "1. Head elevation to 30 degrees in a neutral midline position (to enhance venous drainage).\n2. Maintenance fluid restriction to approximately 70% of normal requirements.\n3. Administration of osmotic diuretics, specifically intravenous Mannitol (0.25-0.5 g/kg).\n4. Administration of loop diuretics (Lasix) and instituting controlled mechanical hyperventilation.",
    isClinical: true,
    topic: "Topic Three: Coma",
    explanation: "كيف تعالج طبياً غيبوبة الضغط والورم المخي الزائد بالأدوية والوضعية (Increased ICP Control):\n1. رفع الرأس بمقدار 30 درجة بنمط خط منتصف الرقبة لتيسير التفريغ الوريدي وحماية القفص الصدري.\n2. كبس ودعم السوائل المحاطة إلى 70% فقط من المنسوب الطبيعي لمنع تجمع مياه الورم بالرأس.\n3. استخدام وتدفق حقن الوريد المدرة المجهدة بالأسموزية **Mannitol** بجرعة دقيقة لدفع السوائل خارج مخه.\n4. إضافة حقن مدر بول الأشرطة (لازكس) لرفع التفريغ البولي وحس التهوية التناغمية بجهاز النفس الصناعي."
  },
  {
    id: "q-e-co-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Severe Head injury coma Case",
    content: "A 5-year-old child is brought to the resuscitation room completely unconscious following a severe head injury. On physical assessment, he does not respond to painful stimuli, breathes spontaneously, features a bulging anterior fontanel, and demonstrates asymmetric sluggish pupillary responses to light.\n\nQuestions:\n1. What does the presence of asymmetric pupillary responses and asymmetric motor signs indicate?\n2. Enumerate 2 gastrointestinal and eye/skin protective measures required in the daily management of this comatose child.",
    answer: "1. It indicates a lateralizing sign, suggesting a focal brain lesion or localized mass effect/hemorrhage.\n2. Administration of antacids to prevent stress ulcers, and applying protective eye drops/ointments to prevent corneal damage.",
    isClinical: true,
    topic: "Topic Three: Coma",
    explanation: "تحليل وتتبع إصابات الرأس وصعوبة التناغم العصبي للطفل:\n1. غياب وحرارة التفاعل الحدقي وعدم التناسق للعينين والحركة ده معناه **Lateralizing sign** إشارة لوجود نزيف بؤري ضاغط أو ورم وحجم دموي متراكم بجهحة حركية دون الأخرى تستدعي أشعة مقطعية عاجلة.\n2. أهم ركائز اعتناء التمريض هي ترطيب قرنية العين بقطرات ومرهم واقٍ من الجفاف المستمر وحصار حموضة المعدة بأمبولات واقية لمنع النزيف التقرحي."
  },

  // topic: "Topic Four: Glasgow Coma Scale and its Advantages"
  {
    id: "q-e-gcs-1",
    chapterId: 4,
    type: "define",
    title: "GCS Purpose & Score Range",
    content: "Define the purpose of the Glasgow Coma Scale (GCS) and state the total score range.",
    answer: "1. Purpose: To assess the level of consciousness and neurological function in children with altered mental status. It provides a rapid assessment of cerebral cortical function.\n2. Score Range: The total GCS score ranges from 3 to 15 points.",
    isClinical: false,
    topic: "Topic Four: Glasgow Coma Scale and its Advantages",
    explanation: "الغرض من مقياس غلاكسو للوعي (GCS):\n1. الهدف: تقييم مستوى الوعي والوظائف العصبية للأطفال الذين يعانون من تغير في الحالة الذهنية. يوفر تقييماً سريعاً لوظائف قشرة المخ.\n2. المدى: يتراوح مجموع النقاط من **3 (الأدنى)** إلى **15 (الأقصى)**."
  },
  {
    id: "q-e-gcs-2",
    chapterId: 4,
    type: "short-essay",
    title: "Advantages of GCS",
    content: "Enumerate the 5 primary advantages of using the Glasgow Coma Scale according to the clinical guidelines.",
    answer: "1. Objective & standardized: Provides a reliable numerical score to track consciousness over time.\n2. Simple and quick: Easily applied at the bedside in emergency situations.\n3. Widely accepted: Used internationally across trauma, PICU, and emergency settings.\n4. Predictive value: Patients with a GCS score of 8 or less indicate severe brain injury requiring aggressive management.\n5. Communication tool: Allows clinicians to communicate patient status clearly and unambiguously.",
    isClinical: false,
    topic: "Topic Four: Glasgow Coma Scale and its Advantages",
    explanation: "مميزات مقياس غلاكسو (GCS Advantages):\n1. **موضوعي وموحد**: يوفر درجة رقمية موثوقة لتتبع الوعي.\n2. **بسيط وسريع**: يسهل تطبيقه بجانب السرير في الحالات الطارئة.\n3. **مقبول عالمياً**: يستخدم في كل وحدات الطوارئ والرعاية دولياً.\n4. **له قيمة تنبؤية**: الدرجة **8 أو أقل** تشير إلى إصابة حادة وتحتاج تدخل سريع.\n5. **أداة تواصل**: تمكن الأطباء من وصف حالة المريض بوضوح وبدون لبس."
  },
  {
    id: "q-e-gcs-scoring",
    chapterId: 4,
    type: "short-essay",
    title: "Scale Components & Points",
    content: "Enumerate the three components of the GCS and the maximum points for each.",
    answer: "1. Eye Opening: Total points 4.\n2. Verbal Response: Total points 5.\n3. Motor Response: Total points 6.",
    isClinical: false,
    topic: "Topic Four: Glasgow Coma Scale and its Advantages",
    explanation: "مكونات مقياس غلاكسو ونقاطها:\n1. فتح العين: 4 نقاط.\n2. الاستجابة اللفظية: 5 نقاط.\n3. الاستجابة الحركية: 6 نقاط."
  },
  {
    id: "q-e-gcs-5",
    chapterId: 4,
    type: "problem-solving",
    title: "GCS Calculation & Triage Case",
    content: "A 3-year-old child is evaluated following a fall. She opens her eyes only when spoken to, emits consolable crying when irritable, and withdraws her limb from painful stimulus.\n\nQuestions:\n1. Calculate the total GCS score.\n2. Does this score indicate severe brain injury requiring aggressive management (score ≤ 8)?",
    answer: "1. Total GCS Score: Eye (3) + Verbal (4) + Motor (4) = 11.\n2. No, severe brain injury is indicated by a score of 8 or less.",
    isClinical: true,
    topic: "Topic Four: Glasgow Coma Scale and its Advantages",
    explanation: "حساب وعي الطفلة:\n1. المجموع: العين (3) + اللفظي (4) + الحركي (4) = **11**.\n2. التقييم: الدرجة **ليست** ضمن نطاق الإصابة الحادة (8 أو أقل)، لذا لا تتطلب تداخلاً جراحياً أو تنبياً إجبارياً حالياً."
  },

  // ==================== V. Family medicine ====================
  // topic: "Principles of Family Medicine"
  {
    id: "q-fm-pfm-1",
    chapterId: 5,
    type: "define",
    title: "Define Family Medicine",
    content: "Define \"Family Medicine\" according to the American Academy of Family Physicians (AAFP).",
    answer: "It is the medical specialty which provides continuing and comprehensive health care for the individual and the family. It integrates the biological, clinical, and behavioral sciences, and its scope encompasses all ages, sexes, organ systems, and every disease entity.",
    isClinical: false,
    topic: "Principles of Family Medicine"
  },
  {
    id: "q-fm-pfm-2",
    chapterId: 5,
    type: "short-essay",
    title: "Core Principles of Family Medicine",
    content: "Enumerate the 4 core principles of Family Medicine.",
    answer: "1. Continuity of care.\n2. Comprehensiveness.\n3. Coordination and Collaboration.\n4. Prevention and Community-oriented care.",
    isClinical: false,
    topic: "Principles of Family Medicine"
  },
  {
    id: "q-fm-pfm-3",
    chapterId: 5,
    type: "short-essay",
    title: "Continuity of Care Elements",
    content: "Enumerate 4 key elements or features that characterize the \"Continuity of Care\".",
    answer: "1. It is person-centered rather than disease-centered.\n2. Based on a long-term relationship extending across multiple episodes of illness.\n3. Built upon mutual trust between the patient and the family physician.\n4. Spans the entire life course, from intrauterine life to terminal care.",
    isClinical: false,
    topic: "Principles of Family Medicine"
  },
  {
    id: "q-fm-pfm-4",
    chapterId: 5,
    type: "define",
    title: "Unique Clinical Discipline",
    content: "Define family medicine as a unique clinical discipline.",
    answer: "Family medicine is a unique clinical discipline distinguished by its process of care, not merely by its content. At the center of this process lies the patient-physician relationship, with the patient viewed within the context of the family and the community.",
    isClinical: false,
    topic: "Principles of Family Medicine"
  },
  {
    id: "q-fm-pfm-6",
    chapterId: 5,
    type: "define",
    title: "Olesen Definition",
    content: "Provide the Olesen Definition (2006) of the family physician.",
    answer: "The family physician is the specialist trained to work at the front line of the health care system and to take the initial steps in providing care for any health problem a patient may have.",
    isClinical: false,
    topic: "Principles of Family Medicine"
  },

  {
    id: "q-fm-pfm-5",
    chapterId: 5,
    type: "problem-solving",
    title: "A Holistic Care Approach Case",
    content: "A family physician reviews a patient's medical chart. Instead of focusing only on the patient's acute complaint of elevated blood pressure, the physician schedules a well-person visit to evaluate the patient's lifestyle, family dynamics, stress levels, and occupational environment.\n\nQuestions:\n1. What specific medical care approach is the family physician demonstrating here?\n2. Enumerate 2 non-clinical settings or networks that are evaluated under family-oriented care.",
    answer: "1. A holistic and patient-centered clinical approach.\n2. Family dynamics and living or working conditions.",
    isClinical: true,
    topic: "Principles of Family Medicine"
  },
  {
    id: "q-fm-pfm-7",
    chapterId: 5,
    type: "short-essay",
    title: "Scope of Family Practice Care",
    content: "Enumerate 4 scope items of family practice care as outlined in the text.",
    answer: "1. Diagnosis of health problems.\n2. Management of acute and chronic conditions.\n3. Health promotion.\n4. Disease prevention.",
    isClinical: false,
    topic: "Principles of Family Medicine"
  },

  // topic: "The Family Physician & RISE Framework"
  {
    id: "q-fm-tfp-1",
    chapterId: 5,
    type: "define",
    title: "Define Family Physician Role",
    content: "Define the role of a \"Family Physician\".",
    answer: "A family physician is a medical doctor working at the front line of health care, responsible for providing comprehensive, continuous, and person-centered care (physical, psychological, and social) to individuals within the context of their families, and to families within the context of their communities.",
    isClinical: false,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fm-tfp-2",
    chapterId: 5,
    type: "short-essay",
    title: "WHO Five-Star Doctor Roles",
    content: "Enumerate the 5 roles that comprise the WHO definition of a \"Five-Star Doctor\".",
    answer: "1. Assesses and improves the quality of care (Care provider).\n2. Makes optimal use of new technologies in health care (Decision maker).\n3. Promotes healthy lifestyles (Health communicator).\n4. Recognizes individual and community health needs (Community leader).\n5. Works efficiently as a member of the health care team (Manager).",
    isClinical: false,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fm-tfp-3",
    chapterId: 5,
    type: "short-essay",
    title: "Family Physician Core Characteristics",
    content: "Enumerate 4 primary characteristics or functions a Family Physician must demonstrate in practice.",
    answer: "1. A strong sense of responsibility for the total and continuous care of individuals and families.\n2. Compassion, empathy, and a genuine interest in patients and their families.\n3. The ability to manage multiple medical problems occurring simultaneously.\n4. Skills necessary for the long-term management of chronic diseases and educating families.",
    isClinical: false,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fm-tfp-4",
    chapterId: 5,
    type: "short-essay",
    title: "Manager Role Responsibilities",
    content: "Enumerate 4 distinct responsibilities that define the \"Managerial Role\" of the family physician within a Family Health Center (FHC).",
    answer: "1. Responsibility for all technical and administrative activities within the center.\n2. Promoting intersectoral coordination between health, education, and social services.\n3. Ensuring the strict implementation of national health policies and health service programs.\n4. Investigating public complaints and ensuring appropriate responses to community needs.",
    isClinical: true,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fm-tfp-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Curative Care Role Case",
    content: "A family physician is organizing her morning practice. She reviews family health records, performs accurate general medical examinations, and selects drugs rationally from the Essential Drug List while arranging home visits for elderly immobile patients.\n\nQuestions:\n1. What specific role category of the family physician do these actions represent?\n2. Enumerate 2 specific chronic diseases prevalent in the primary care area that require continuous follow-up by the family health team.",
    answer: "1. The Curative Role.\n2. Hypertension and Diabetes Mellitus.",
    isClinical: true,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fm-tfp-7",
    chapterId: 5,
    type: "short-essay",
    title: "Curative Role Responsibilities",
    content: "Enumerate 4 clinical responsibilities included under the curative role of the family physician.",
    answer: "1. Accurate general medical examination of all family members.\n2. Proper completion and maintenance of family health records.\n3. Treatment of common health problems prevalent in the catchment area.\n4. Rational use of drugs, particularly from the Essential Drug List.",
    isClinical: false,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fm-tfp-8",
    chapterId: 5,
    type: "short-essay",
    title: "Intersectoral Coordination Areas",
    content: "Mention the 4 areas of intersectoral coordination that a family physician promotes in their managerial role.",
    answer: "1. Education.\n2. Agriculture.\n3. Social services.\n4. National health policies.",
    isClinical: false,
    topic: "The Family Physician & RISE Framework"
  },  // topic: "The Family Physician & RISE Framework"
  {
    id: "q-fm-rise-1",
    chapterId: 5,
    type: "short-essay",
    title: "RISE Acronym Components",
    content: "Enumerate the 4 components represented by the acronym \"RISE\" framework in family medicine prevention.",
    answer: "1. R - Risk assessment.\n2. I - Immunization.\n3. S - Screening.\n4. E - Education.",
    isClinical: false,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fm-rise-2",
    chapterId: 5,
    type: "short-essay",
    title: "Risk Assessment Examples",
    content: "Enumerate 4 examples of the \"Risk Assessment (R)\" component at individual and family levels.",
    answer: "1. Identifying risk factors for chronic non-communicable diseases (like obesity or smoking).\n2. Evaluating genetic predispositions through detailed family history.\n3. Assessing emotional or psychosocial problems affecting family stability.\n4. Identifying environmental or occupational hazards in the household catchment area.",
    isClinical: false,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fm-rise-3",
    chapterId: 5,
    type: "short-essay",
    title: "Screening Target Diseases",
    content: "Enumerate 4 common diseases targeted under the \"Screening (S)\" or early detection component of primary care.",
    answer: "1. Hypertension.\n2. Diabetes Mellitus.\n3. Breast cancer (via annual clinical breast examination).\n4. Anemia.",
    isClinical: false,
    topic: "The Family Physician & RISE Framework"
  },
 
  {
    id: "q-fm-rise-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Ischemic Heart Risk Case",
    content: "A 45-year-old heavy smoker with a family history of premature ischemic heart disease visits the Family Health Center. The family physician checks his lipid profile, records his blood pressure, and schedules a counseling session regarding smoking cessation.\n\nQuestions:\n1. Mention the components of the RISE approach being utilized during this clinical encounter.\n2. What is the primary clinical goal of implementing the RISE framework for chronic conditions?",
    answer: "1. Risk assessment, Screening, and Education.\n2. To achieve early detection, promote healthy lifestyles, and delay or minimize the impact of chronic complications.",
    isClinical: true,
    topic: "The Family Physician & RISE Framework"
  },

  // topic: "Comparative Medical Models"
  {
    id: "q-fm-fmm-1",
    chapterId: 5,
    type: "short-essay",
    title: "Family Medicine vs Specialist Focus",
    content: "Enumerate 4 distinct features that differentiate the Family Medicine Model from the Specialist/Traditional Care Model regarding patient care and focus.",
    answer: "1. Family Medicine provides care within the context of the family, whereas Specialist care focuses regardless of family context.\n2. Family Medicine is patient-centered (recognizing values/needs), whereas Specialist care is problem-centered (focusing on a specific disease or complaint).\n3. Family Medicine places strong emphasis on a continuous, healing relationship, whereas Specialist care has limited appreciation of the physician-patient relationship.\n4. Family Medicine is individual, family, and community-oriented, whereas Specialist care is individual patient-oriented.",
    isClinical: false,
    topic: "Comparative Medical Models"
  },
  {
    id: "q-fm-fmm-2",
    chapterId: 5,
    type: "short-essay",
    title: "Organizational Model Differences",
    content: "Enumerate 4 organizational differences between the Traditional Model of Practice and the Family Medicine Model.",
    answer: "1. Traditional systems often disrupt relationships, whereas Family Medicine systems support continuous, healing relationships.\n2. Traditional care features a single physician model, whereas Family Medicine utilizes a multidisciplinary team approach.\n3. Traditional documentation uses paper-based records, whereas Family Medicine utilizes electronic health records.\n4. Traditional practice style is mostly reactive, whereas Family Medicine is both responsive and proactive.",
    isClinical: false,
    topic: "Comparative Medical Models"
  },
  {
    id: "q-fm-fmm-3",
    chapterId: 5,
    type: "short-essay",
    title: "Chronic Disease Management Features",
    content: "Enumerate 4 characteristics of chronic disease management under the Family Medicine Model.",
    answer: "1. Management is purposeful and structurally organized.\n2. Driven by integrated, practice-based, and evidence-based practice guidelines.\n3. Integrates preventive, curative, and rehabilitative primary care services.\n4. Utilizes continuous quality and safety measurements for service improvement.",
    isClinical: true,
    topic: "Comparative Medical Models"
  },
 
  {
    id: "q-fm-fmm-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Multidisciplinary Care Model Case",
    content: "A patient presents to a medical facility with multiple overlapping symptoms of poorly controlled type 2 diabetes, peripheral neuropathy, and signs of clinical depression. In this facility, a multidisciplinary healthcare team handles his care, utilizing integrated electronic health records to provide continuous tracking and proactive interventions.\n\nQuestions:\n1. Which healthcare model of practice does this system explicitly represent?\n2. What are the three dimensions integrated into the core process of family medicine?",
    answer: "1. The Family Medicine Model.\n2. Knowledge, Clinical skills, and a Unique care process.",
    isClinical: true,
    topic: "Comparative Medical Models"
  },

  // topic: "Family Health Team & PHC Services"
  {
    id: "q-fm-fht-1",
    chapterId: 5,
    type: "short-essay",
    title: "Clinical Staff Members",
    content: "Enumerate 4 distinct members that comprise the \"Clinical Staff\" of the multidisciplinary Family Health Team.",
    answer: "1. Family Physicians.\n2. Nurses.\n3. Pharmacists.\n4. Laboratory Technicians / Assistants.",
    isClinical: false,
    topic: "Family Health Team & PHC Services"
  },
  {
    id: "q-fm-fht-2",
    chapterId: 5,
    type: "short-essay",
    title: "Administrative and Support Staff",
    content: "Enumerate 4 distinct members that comprise the \"Administrative and Support Staff\" of a Family Health Team.",
    answer: "1. Medical Records Officer.\n2. Front Office Staff / Assistants.\n3. Births and Deaths Officer.\n4. Janitors and Guards (or Storage Room Officer).",
    isClinical: false,
    topic: "Family Health Team & PHC Services"
  },
  {
    id: "q-fm-fht-3",
    chapterId: 5,
    type: "short-essay",
    title: "Leader Duties of Family Physician",
    content: "Enumerate 4 primary duties of the Family Physician acting as the leader of the Family Health Team.",
    answer: "1. Directing and coordinating all technical and clinical team activities.\n2. Supporting collaborative teamwork and multidisciplinary team building.\n3. Ensuring the integrated delivery of clinical, preventive, and administrative services.\n4. Supervising the field implementation of Primary Health Care (PHC) activities.",
    isClinical: false,
    topic: "Family Health Team & PHC Services"
  },
  {
    id: "q-fm-fht-4",
    chapterId: 5,
    type: "short-essay",
    title: "Catchment Area Team Duties",
    content: "Enumerate 4 distinct responsibilities of the Family Health Team regarding family practice catchment area activities.",
    answer: "1. Managing a defined, registered roster of families within the community catchment area.\n2. Providing continuous and comprehensive primary care for all registered families.\n3. Creating, updating, and maintaining comprehensive family folders and health files.\n4. Implementing specific national priority healthcare programs (such as IMCI and Family Planning).",
    isClinical: true,
    topic: "Family Health Team & PHC Services"
  },
  {
    id: "q-fm-fht-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Center Workload Meeting Case",
    content: "The manager of a Family Health Center holds a staff meeting to upgrade clinical outcomes. He notes that improving team performance requires structured job clarity, ongoing skills capacity-building, and communication channels.\n\nQuestions:\n1. Who is the designated leader responsible for directing this multidisciplinary healthcare team?\n2. Enumerate 2 essential factors that help in upgrading and improving Family Health Team clinical performance.",
    answer: "1. The Family Physician.\n2. Clearly defined job descriptions for each team member and regular team meetings for monitoring and problem-solving.",
    isClinical: true,
    topic: "Family Health Team & PHC Services"
  },
  {
    id: "q-fm-fht-6",
    chapterId: 5,
    type: "short-essay",
    title: "Upgrading Team Performance",
    content: "List the factors that help in upgrading and improving Family Health Team performance.",
    answer: "1. Clearly defined job descriptions.\n2. Regular training and capacity-building.\n3. Regular team meetings for planning/monitoring.\n4. Incentives (financial and non-financial).\n5. An effective system of communication.",
    isClinical: false,
    topic: "Family Health Team & PHC Services"
  },
  {
    id: "q-fm-fht-7",
    chapterId: 5,
    type: "short-essay",
    title: "Chronic Conditions Management",
    content: "Enumerate 4 chronic conditions followed up and managed by the Family Health Team.",
    answer: "1. Hypertension.\n2. Diabetes Mellitus (DM).\n3. Tuberculosis (TB) cases receiving DOTS.\n4. Priority national programs such as IMCI and Family Planning.",
    isClinical: true,
    topic: "Family Health Team & PHC Services"
  },

  // topic: "PHC Services at FHU/FHC"
  {
    id: "q-fm-phc-1",
    chapterId: 5,
    type: "short-essay",
    title: "Core PHC Services",
    content: "Enumerate 4 core services delivered by the Family Health Team at the FHU/FHC.",
    answer: "1. Creating and maintaining family folders.\n2. Providing bio-psycho-social care throughout all stages of the human life cycle.\n3. Conducting initial examinations for all family members.\n4. Early detection of health problems through periodic examinations and screening tests.",
    isClinical: false,
    topic: "Family Health Team & PHC Services"
  },

  // topic: "Family Dynamics & The Human Life Cycle"
  {
    id: "q-fm-fdc-1",
    chapterId: 5,
    type: "define",
    title: "Define Family Parameter",
    content: "Define the clinical parameter of a \"Family\" in family practice.",
    answer: "The family is the basic structural and functional unit of the community, consisting of two or more related persons living together in the same household for more than 6 months.",
    isClinical: false,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-fdc-2",
    chapterId: 5,
    type: "short-essay",
    title: "CAPRS Framework Functions",
    content: "Enumerate the 5 functions of the family represented by the \"CAPRS\" framework.",
    answer: "1. C - Care.\n2. A - Affection.\n3. P - Providing status.\n4. R - Reproduction.\n5. S - Socialization.",
    isClinical: false,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-fdc-3",
    chapterId: 5,
    type: "short-essay",
    title: "Biological Family Risk Factors",
    content: "Enumerate 4 distinct conditions or categories where family history explicitly contributes to patient risk (The Biologic Family risk factor).",
    answer: "1. Cancers (especially breast, colon, prostate, and ovarian).\n2. Cardiovascular diseases (Hypertension, atherosclerosis, coronary artery disease).\n3. Metabolic disorders (Diabetes Mellitus and Hyperlipidemia).\n4. Autoimmune/endocrinal disorders, or infections (such as tuberculosis or hepatitis B).",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-fdc-4",
    chapterId: 5,
    type: "short-essay",
    title: "Family as a Stress Source",
    content: "Enumerate 4 examples of \"Negative Roles\" the family can play as a source of stress or illness.",
    answer: "1. Vertical transmission of hereditary and genetic disorders.\n2. Horizontal spread of communicable / infectious diseases.\n3. Adoption or reinforcement of unhealthy lifestyle habits (such as smoking or poor diet).\n4. Exposure to family conflicts creating intense psychosocial and mental pressure.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-fdc-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Genetic Risk Genogram Case",
    content: "A family physician is constructing a clinical file for a newly registered patient. To accurately evaluate hereditary and genetic risks for early disease screening, the physician uses a genogram to map out relatives related by blood.\n\nQuestions:\n1. Which specific family classification type is the physician evaluating to assess genetic risks?\n2. Mention the family function component from the CAPRS framework that deals with the provision of basic needs like food, shelter, and social support.",
    answer: "1. The Biologic Family.\n2. C - Care.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-fdc-6",
    chapterId: 5,
    type: "define",
    title: "Define Household Family",
    content: "Define \"Household Family\" and state its clinical importance.",
    answer: "Definition: Individuals living together in the same home, regardless of biological relationship.\nClinical Importance: It highlights shared environmental factors (e.g., infections, allergens, stressors) and helps tailor management involving household routines.",
    isClinical: false,
    topic: "Family Dynamics & The Human Life Cycle"
  },

  // topic: "Stressful Life Events in Families"
  {
    id: "q-fm-sle-1",
    chapterId: 5,
    type: "short-essay",
    title: "Stressful Life Events Classification",
    content: "Classify the stressful life events that affect family dynamics.",
    answer: "1. Severe stress events: Death, divorce, marital separation, legal problems.\n2. Moderate stress events: Illness, job problems, outstanding achievements.\n3. Mild stress events: Change of residence, changes in sleep or eating habits, holidays.",
    isClinical: false,
    topic: "Family Dynamics & The Human Life Cycle"
  },

  // topic: "The Human Life Cycle Stages"
  {
    id: "q-fm-hlc-1",
    chapterId: 5,
    type: "short-essay",
    title: "Initial Life Cycle Stages",
    content: "Enumerate 4 initial stages of the Human Life Cycle along with their respective transitional events.",
    answer: "1. Preconception stage -> Transitional event: Conception.\n2. Fetal life stage -> Transitional event: Birth.\n3. Breast dependence stage -> Transitional event: Weaning.\n4. Preschool age stage -> Transitional event: School entry.",
    isClinical: false,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-hlc-2",
    chapterId: 5,
    type: "short-essay",
    title: "Preconception Health Needs",
    content: "Enumerate 4 primary health needs or clinical interventions focused during the \"Preconception\" stage.",
    answer: "1. Premarital clinical counseling.\n2. Comprehensive premarital medical examination.\n3. Inter-conception care and child spacing advice.\n4. Genetic counseling when structurally indicated.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-hlc-3",
    chapterId: 5,
    type: "short-essay",
    title: "Pediatric Health Risks",
    content: "Enumerate 4 common pediatric health risks or nutritional deficiencies encountered during the \"Breast Dependence & Preschool Age\" stages.",
    answer: "1. Practical acute respiratory tract infections (ARI).\n2. Acute diarrheal diseases.\n3. Protein-energy malnutrition (such as Kwashiorkor or Marasmus).\n4. Micronutrient deficiencies (such as Rickets or Vitamin A deficiency).",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-hlc-4",
    chapterId: 5,
    type: "short-essay",
    title: "Adolescence Risk Factors",
    content: "Enumerate 4 classic behavioral or psychological risk factors characteristic of the \"Adolescence\" life cycle stage.",
    answer: "1. Psychological and emotional instability linked to puberty.\n2. Initiation of tobacco smoking or substance use.\n3. Onset of eating disorders (such as anorexia nervosa or obesity).\n4. Risk-taking behaviors, delinquency, or vulnerability to peer pressure.",
    isClinical: false,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fm-hlc-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Maternal & Childhood Programs Case",
    content: "A family physician sets up a primary care schedule. He separates clinical programs into maternal care for fetal life, integrated childhood management (IMCI) for toddlers, and psychosocial counseling for individuals undergoing a gradual decline in functional abilities.\n\nQuestions:\n1. What is the clinical term used to describe the developmental stage of gradual physical decline and aging?\n2. Through which integrated public program are the needs of breast-dependent and preschool children managed in family practice?",
    answer: "1. Senescence.\n2. The IMCI (Integrated Management of Childhood Illness) program within maternal and child health (MCH) services.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },

  // topic: "Basic Benefit Package & Level of Care"
  {
    id: "q-fm-bbp-1",
    chapterId: 5,
    type: "define",
    title: "Define BBP",
    content: "Define the \"Basic Benefit Package (BBP)\" within the Universal Health Insurance System.",
    answer: "The BBP is a defined, integrated group of essential medical services delivered through primary health care to meet the priority health needs of the population, with particular emphasis on women, children, and vulnerable groups, financed to ensure equity, accessibility, and financial protection.",
    isClinical: false,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fm-bbp-2",
    chapterId: 5,
    type: "short-essay",
    title: "BBP Core Characteristics",
    content: "Enumerate 4 core characteristics or regulatory design benefits of the BBP.",
    answer: "1. Provides a clearly defined set of integrated curative, preventive, and public health services.\n2. Tailored explicitly to baseline population health needs, focusing on poor and low-income groups.\n3. Ensures cost-effectiveness, maximization of efficiency, and financial protection.\n4. Limits the duplication of services, unnecessary investigations, and multi-provider drug dispensing costs.",
    isClinical: false,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fm-bbp-3",
    chapterId: 5,
    type: "short-essay",
    title: "BBP Delivery Levels",
    content: "Enumerate the 3 levels of service delivery of the BBP under the Family Health Delivery Model.",
    answer: "1. Family Health Unit (FHU) level.\n2. Family Health Centre (FHC) level.\n3. Hospital Level (Specialist care).",
    isClinical: false,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fm-bbp-4",
    chapterId: 5,
    type: "short-essay",
    title: "Laboratory Investigations at FHU",
    content: "Enumerate the laboratory investigations available specifically at the Family Health Unit (FHU) level.",
    answer: "Blood glucose, Blood group and Rh factor, Erythrocyte sedimentation rate (ESR), Hemoglobin (Hb), Pregnancy test, Stool analysis, and Urine analysis.",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },

  {
    id: "q-fm-bbp-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Universal Insurance Roster Case",
    content: "A Universal Health Insurance administrator reviews center workloads. He notes that simple infections and vaccinations are sorted at the unit, deliveries and complex chemistries are routed to the health center, and emergency surgeries require direct secondary transfer.\n\nQuestions:\n1. What is the designated BBP service level responsible for specialist outpatient care, basic inpatient stays, and emergency surgery?\n2. Enumerate 2 basic laboratory investigations available at the Family Health Unit (FHU) level.",
    answer: "1. The Hospital Level.\n2. Hemoglobin (Hb) and Urine analysis (or blood glucose).",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fm-bbp-6",
    chapterId: 5,
    type: "short-essay",
    title: "FHC vs FHU Investigations",
    content: "Enumerate 4 specific laboratory investigations available at the Family Health Centre (FHC) level that are not available at the FHU level.",
    answer: "1. Anti-streptolysin O titer (ASOT).\n2. Complete blood count (CBC).\n3. Culture and sensitivity testing.\n4. Blood chemistry including liver and kidney function tests.",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },

  // topic: "Maternal & Women's Health in BBP"
  {
    id: "q-fm-mwh-1",
    chapterId: 5,
    type: "short-essay",
    title: "ANC Screening Elements",
    content: "Enumerate 4 core elements or screening interventions performed during routine primary \"Antenatal Care\" (ANC).",
    answer: "1. Clinical management and tracking of normal pregnancy progression.\n2. Administration of Tetanus Toxoid (TT) immunization.\n3. Routine screening for pre-eclampsia (hypertension) and gestational diabetes mellitus.\n4. Screening for maternal iron-deficiency anemia, urinary tract infections, and thyroid disorders.",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fm-mwh-2",
    chapterId: 5,
    type: "short-essay",
    title: "Postnatal Care Components",
    content: "Enumerate 4 distinct components of \"Postnatal and Post-Abortive Care\" integrated into women's health services.",
    answer: "1. Clinical management and follow-up of the normal postpartum period.\n2. Timely identification and rapid hospital referral of complicated postpartum or post-abortive cases.\n3. Early detection of recurrent abortion risk and medical counseling of post-abortive women.\n4. Provision of intensive breastfeeding guidance and postpartum family planning counseling.",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fm-mwh-3",
    chapterId: 5,
    type: "short-essay",
    title: "Family Planning Interventions",
    content: "Enumerate 4 clinical services or contraceptive interventions provided under primary \"Family Planning\" (FP) services.",
    answer: "1. Community health education and contraceptive information campaigns.\n2. Provision and clinical insertion of modern contraceptive methods.\n3. Early identification and management of contraceptive side effects.\n4. Initial clinical workup and structured referral of complicated infertility cases.",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },

  {
    id: "q-fm-mwh-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Antenatal Checkup Urgency Case",
    content: "A 26-year-old pregnant woman in her second trimester attends the Family Health Unit. The family physician checks her blood pressure to screen for pre-eclampsia, measures her hemoglobin for anemia, and administers a dose of Tetanus Toxoid vaccine.\n\nQuestions:\n1. Which specific component category of Women's Health Services is being delivered here?\n2. Where should this patient be immediately referred if she displays high-risk pregnancy markers or severe pre-eclampsia?",
    answer: "1. Antenatal Care (ANC).\n2. Referred to a Family Health Centre (FHC) or a secondary care Hospital.",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },

  // topic: "Patient Education & Verbal Counseling"
  {
    id: "q-fm-pep-1",
    chapterId: 5,
    type: "define",
    title: "Define Patient Education",
    content: "Define \"Patient Education\" in family medicine.",
    answer: "Patient education is a continuous process of teaching and learning between health care providers and patients that aims to influence patient behaviour and produce positive changes in knowledge, attitudes, and skills required to maintain or improve health.",
    isClinical: false,
    topic: "Patient Education & Verbal Counseling"
  },
  {
    id: "q-fm-pep-2",
    chapterId: 5,
    type: "short-essay",
    title: "Patient Education Clinical Values",
    content: "Enumerate 4 primary clinical values or benefits of implementing effective Patient Education.",
    answer: "1. Significantly increases patient satisfaction with medical care and management plans.\n2. Promotes healthy behaviors and helps patients modify unhealthy habits.\n3. Reduces unnecessary health care utilization, avoidable office visits, and phone consultations.\n4. Decreases serious illness outcomes and complications, reducing hospitalization and emergency costs.",
    isClinical: false,
    topic: "Patient Education & Verbal Counseling"
  },
  {
    id: "q-fm-pep-3",
    chapterId: 5,
    type: "short-essay",
    title: "Educational Intervention Moments",
    content: "Enumerate 4 distinct moments or times within a single clinical encounter where patient education should actively take place.",
    answer: "1. During history taking: to assess baseline knowledge, identify habits, and correct initial misconceptions.\n2. During physical examination: to explain the specific purpose of examination maneuvers and findings.\n3. During diagnosis discussion: to clarify the condition and explain medical terminology in simple language.\n4. During treatment planning: to assess patient understanding, identify barriers to adherence, and ensure feasibility.",
    isClinical: true,
    topic: "Patient Education & Verbal Counseling"
  },
  {
    id: "q-fm-pep-4",
    chapterId: 5,
    type: "short-essay",
    title: "Core Educational Principles",
    content: "Enumerate the 4 core educational principles represented by Feedback, Reinforcement, Individualization, and Facilitation.",
    answer: "1. Feedback: Ensuring explicitly that the patient accurately understands the medical information provided.\n2. Reinforcement: Encouraging and rewarding clinical progress to support permanent behavior change.\n3. Individualization: Tailoring health messages according to the patient's unique characteristics and goals.\n4. Facilitation: Providing clear educational materials or skills training to help patients make informed decisions.",
    isClinical: false,
    topic: "Patient Education & Verbal Counseling"
  },
  {
    id: "q-fm-pep-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Clinic Education Outreach Case",
    content: "A family physician plans a practice reorganization. She integrates educational posters in the waiting room, trains nursing staff to run weight-loss and smoking cessation groups, and ensures family members are included when instructing a diabetic patient on insulin use.\n\nQuestions:\n1. What principle of patient education is highlighted by using posters, videos, and involving the entire healthcare team?\n2. Why is involving the family unit considered essential when educating elderly or pediatric patients?",
    answer: "1. Use of multiple educational channels.\n2. To ensure effective home care safety, accurate lifestyle modification, and strict treatment adherence.",
    isClinical: true,
    topic: "Patient Education & Verbal Counseling"
  },
  {
    id: "q-fm-pep-6",
    chapterId: 5,
    type: "short-essay",
    title: "Verbal Instruction Guidelines",
    content: "Mention 4 guidelines the physician must follow to deliver effective verbal instruction.",
    answer: "1. Understand the patient's circumstances/fears.\n2. Avoid medical jargon.\n3. Be specific and concise.\n4. Continuously assess understanding by asking for feedback.",
    isClinical: false,
    topic: "Patient Education & Verbal Counseling"
  },

  // topic: "Referral & Consultation Processes"
  {
    id: "q-fm-rle-1",
    chapterId: 5,
    type: "define",
    title: "Define Referral vs Consultation",
    content: "Define a \"Referral\" and differentiate it from a \"Consultation\".",
    answer: "Referral is the transferring of the responsibility of a patient to another physician for the care of a specific problem. Consultation is the practice of one physician asking another for an opinion or assistance regarding diagnosis and management, while retaining primary responsibility.",
    isClinical: false,
    topic: "Referral & Consultation Processes"
  },
  {
    id: "q-fm-rle-2",
    chapterId: 5,
    type: "short-essay",
    title: "Primary Referral Purposes",
    content: "Enumerate 4 valid reasons or purposes for making a formal referral to secondary care.",
    answer: "1. Inadequate diagnostic or therapeutic resources available within the family practice clinic setting.\n2. Need for expert confirmation of a complex provisional diagnosis or plan of management.\n3. Handling a clinical emergency that requires specialized inpatient or surgical intervention.\n4. Honoring a direct patient request for a second opinion to preserve the doctor-patient relationship.",
    isClinical: true,
    topic: "Referral & Consultation Processes"
  },
  {
    id: "q-fm-rle-3",
    chapterId: 5,
    type: "short-essay",
    title: "Referral Letter Standards",
    content: "Enumerate 4 general criteria that a high-quality Referral Letter must fulfill.",
    answer: "1. It must be concise and contain only essential, relevant data.\n2. Written using clear, simple, and legible language.\n3. Explicitly clarify and specify the reasons for referral and expectations from the specialist.\n4. Fully documented within the patient's family file and the center's referral register.",
    isClinical: false,
    topic: "Referral & Consultation Processes"
  },
  {
    id: "q-fm-rle-4",
    chapterId: 5,
    type: "short-essay",
    title: "Referral Letter Elements",
    content: "Enumerate 4 essential clinical \"Elements\" that must be written inside a standard Referral Letter.",
    answer: "1. Socio-demographic data (name, age, sex, family health record number).\n2. Main clinical complaint and brief present history of the illness.\n3. Relevant physical examination findings and matching primary investigation results.\n4. Current medications in use (including exact dosages) and documented drug allergies.",
    isClinical: false,
    topic: "Referral & Consultation Processes"
  },
  {
    id: "q-fm-rle-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Angina Urgency Referral Case",
    content: "A family physician evaluates a patient with signs of severe, progressive unstable angina. The physician identifies that the patient will suffer direct harm if not shifted immediately, fills out a concise emergency communication form, and coordinates the specialist feedback loop.\n\nQuestions:\n1. What type of referral classification does this emergent scenario represent?\n2. Enumerate 4 core responsibilities of the receiving consultant specialist back to the referring family physician.",
    answer: "1. An Urgent Referral.\n2. The responsibilities are:\n   - Provide services in a timely manner depending on the urgency of the condition.\n   - Communicate findings in a timely manner to the referring physician.\n   - Notify the referring physician when the patient has been admitted to the hospital.\n   - Avoid lateral referral (specialist to specialist) without involving the family physician.",
    isClinical: true,
    topic: "Referral & Consultation Processes"
  },

  // topic: "Anticipatory Care & Immunization Guidelines"
  {
    id: "q-fm-aci-1",
    chapterId: 5,
    type: "define",
    title: "Define Anticipatory Care",
    content: "Define \"Anticipatory Care\" and differentiate between primary and secondary disease prevention lines.",
    answer: "Anticipatory care refers to all measures aiming to promote good health and prevent or delay diseases or their complications across different age groups. Primary prevention focuses on preventing disease development (vaccines/education), while secondary prevention focuses on early diagnosis and treatment (screening).",
    isClinical: false,
    topic: "Anticipatory Care & Immunization Guidelines"
  },
  {
    id: "q-fm-aci-2",
    chapterId: 5,
    type: "short-essay",
    title: "Childhood Educational Guidance",
    content: "Enumerate 4 important health education messages delivered during childhood anticipatory care visits.",
    answer: "1. The vital importance of well-baby care and the exact timing for periodic visits.\n2. Promotion of exclusive breastfeeding and proper nutritional weaning techniques.\n3. Adherence to the national compulsory immunization schedule.\n4. Home accident prevention and early management of diarrhea using Oral Rehydration Therapy (ORT).",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },
  {
    id: "q-fm-aci-3",
    chapterId: 5,
    type: "short-essay",
    title: "False Vaccine Contraindications",
    content: "Enumerate 4 childhood conditions or medical histories that are falsely considered contraindications but are actually SAFE for immunization.",
    answer: "1. Prematurity (infants should be immunized at their usual chronological age).\n2. Mild recent acute infections, such as otitis media or mild fever.\n3. Documented history of penicillin allergy.\n4. Mild localized reactions to a previous vaccine dose.",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },
  {
    id: "q-fm-aci-4",
    chapterId: 5,
    type: "short-essay",
    title: "True Vaccine Contraindications",
    content: "Enumerate 4 true, absolute medical \"Contraindications\" to child immunization.",
    answer: "1. Documented history of a severe anaphylactic reaction to a previous vaccine component.\n2. Onset of a seizure or a high fever >40.5°C within 48 hours of a prior pertussis vaccine dose.\n3. True, severe egg allergy or neomycin allergy (specifically for the MMR vaccine).\n4. Severe immunocompromised state (absolute contraindication for live vaccines like OPV).",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },
  {
    id: "q-fm-aci-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Scheduled Vaccination Visit Case",
    content: "An infant is brought to the primary care unit on his scheduled vaccination day. The mother notes he has a mild runny nose and is breastfeeding normally. The provider notes a mild cough but no danger signs. The mother is worried the vaccine will harm him.\n\nQuestions:\n1. What are the two primary components evaluated during a child's periodic health examination?\n2. Should the clinician administer the scheduled vaccines or delay them due to the mild runny nose?",
    answer: "1. Growth and development monitoring, combined with a full clinical and laboratory examination.\n2. Administer the vaccines; mild recent infections without severe systemic symptoms are not true contraindications to immunization.",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },
  {
    id: "q-fm-aci-6",
    chapterId: 5,
    type: "short-essay",
    title: "Preschool Nutritional Care Interventions",
    content: "Enumerate the 4 main direct interventions and roles of the family physician for nutritional care in preschool children.",
    answer: "1. Growth monitoring and early detection and correction of malnutrition.\n2. Nutrition education including promotion of breastfeeding and proper weaning.\n3. Nutrient supplementation including vitamin A, vitamin D, and iron.\n4. Referral of the malnourished child when needed.",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },

  // topic: "Adolescent Psychosocial Health & HEADSSS Interview"
  {
    id: "q-fm-aph-1",
    chapterId: 5,
    type: "define",
    title: "Define Adolescence Parameters",
    content: "Define the parameters of \"Adolescence\" according to WHO age group classifications.",
    answer: "WHO defines 'Adolescents' as individuals in the 10-19 years age group, 'Youth' as the 15-24 year age group, and 'Young People' as covering the expanded age range of 10-24 years. It is a developmental phase rather than a fixed time period.",
    isClinical: false,
    topic: "Adolescent Psychosocial Health & HEADSSS Interview"
  },
  {
    id: "q-fm-aph-2",
    chapterId: 5,
    type: "short-essay",
    title: "HEEADSSS Framework Letters",
    content: "Enumerate the developmental stages represented by the letters in the adolescent \"HEEADSSS\" psychosocial interview tool.",
    answer: "1. Home environment.\n2. Eating and nutrition.\n3. Education and employment.\n4. Activities.\n5. Drugs / Substance use.\n6. Sexuality.\n7. Suicide / Depression.\n8. Safety.",
    isClinical: false,
    topic: "Adolescent Psychosocial Health & HEADSSS Interview"
  },
  {
    id: "q-fm-aph-3",
    chapterId: 5,
    type: "short-essay",
    title: "Adolescence Emergent Health Issues",
    content: "Enumerate 4 common physical or behavioral health problems that emerge during the adolescent phase.",
    answer: "1. Eating disorders (such as anorexia nervosa, overweight, and structural obesity).\n2. Behavioral and psychological disorders (such as severe depression or adjustment reactions).\n3. Risk-taking substance abuse and early tobacco smoking dependency.\n4. Dermatological problems (such as acne), or vulnerability to abuse and accidental injuries.",
    isClinical: true,
    topic: "Adolescent Psychosocial Health & HEADSSS Interview"
  },
  {
    id: "q-fm-aph-4",
    chapterId: 5,
    type: "short-essay",
    title: "Adolescedet Physical Exam Guidelines",
    content: "Enumerate 4 key clinical guidelines recommendations for conducting a physical examination on a teenage patient.",
    answer: "1. Strictly respect physical privacy, avoid unnecessary body exposure, and keep doors closed.\n2. Permit parents to remain inside the examination room only if the adolescent explicitly requests it.\n3. Utilize the examination as a good teaching tool to talk and explain their bodies, lowering anxiety.\n4. Do not perform pelvic or genital examinations routinely; reserve them for direct request, if sexually active, or if presenting with localized pain.",
    isClinical: true,
    topic: "Adolescent Psychosocial Health & HEADSSS Interview"
  },
  {
    id: "q-fm-aph-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Teenager Checkup Interview Case",
    content: "A 15-year-old high school student attends the clinic for a check-up. The family physician builds a comfortable rapport and asks tailored questions about who lives at home, school grades, mood changes from day to day, and the regular use of vehicle seatbelts.\n\nQuestions:\n1. What is the name of this specific psychosocial screening interview framework?\n2. According to global epidemiologic data, what are the most frequent causes of preventable mortality among adolescents?",
    answer: "1. The HEEADSSS interview framework.\n2. Accidents (mostly motor vehicle crashes, many related to drug or alcohol use), followed closely by homicide and suicide.",
    isClinical: true,
    topic: "Adolescent Psychosocial Health & HEADSSS Interview"
  },
  {
    id: "q-fm-aph-6",
    chapterId: 5,
    type: "short-essay",
    title: "Five Premises of Adolescent Care",
    content: "Mention the 5 clinical premises useful when communicating with and caring for adolescents.",
    answer: "1. Explain Facts (clear understanding of illness).\n2. Explore Fears (worries about body image/identity).\n3. Address any Fables (misinformation).\n4. Explore relationship with Family.\n5. Ask how the adolescent views the Future.",
    isClinical: true,
    topic: "Adolescent Psychosocial Health & HEADSSS Interview"
  },
  {
    id: "q-fm-aph-7",
    chapterId: 5,
    type: "short-essay",
    title: "HEADSSS Safety Component Evaluation",
    content: "Enumerate 4 separate risk behaviors or issues evaluated under the \"Safety\" component of the HEADSSS adolescent interview.",
    answer: "1. Regular use of a bicycle helmet or seatbelt.\n2. History of serious injury.\n3. Riding with a driver who was drunk or high.\n4. Presence of violence at home, school, or neighborhood.",
    isClinical: true,
    topic: "Adolescent Psychosocial Health & HEADSSS Interview"
  },

  // topic: "IMCI Case Management Overview"
  {
    id: "q-fm-gds-1",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI General Danger Signs",
    content: "Enumerate the 4 \"General Danger Signs\" that must be checked in every sick child aged 2 months up to 5 years under IMCI guidelines.",
    answer: "1. Is the child unable to drink or breastfeed?\n2. Does the child vomit everything?\n3. Has the child had convulsions during this current illness?\n4. Is the child lethargic or unconscious?",
    isClinical: true,
    topic: "IMCI Case Management Overview"
  },
  {
    id: "q-fm-gds-2",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Cough Assessment Signs",
    content: "Enumerate the clinical signs that look for, count, or listen to when assessing a child presenting with a cough or difficult breathing under IMCI.",
    answer: "1. Counting the breaths in one full minute (while the child is calm).\n2. Looking for the presence of chest indrawing (subcostal/intercostal retractions).\n3. Looking and listening for the presence of stridor.\n4. Looking and listening for the presence of wheezing.",
    isClinical: true,
    topic: "IMCI Case Management Overview"
  },
  {
    id: "q-fm-gds-3",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Respiratory Color Bands",
    content: "Enumerate the clinical criteria and matching IMCI classifications for respiratory symptoms across the three color-coded bands.",
    answer: "1. SEVERE PNEUMONIA OR VERY SEVERE DISEASE (Red Band): Any general danger sign OR stridor in a calm child OR chest indrawing.\n2. PNEUMONIA (Yellow Band): Presence of fast breathing without severe signs.\n3. NO PNEUMONIA: COUGH OR COLD (Green Band): No signs of pneumonia or very severe disease.",
    isClinical: true,
    topic: "IMCI Case Management Overview"
  },
  {
    id: "q-fm-gds-4",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Sequential Steps",
    content: "List the sequential steps involved in the IMCI case management process.",
    answer: "1. Assess all sick infants and children.\n2. Classify each health condition using color-coded charts.\n3. Treat.\n4. Counsel caregivers.\n5. Provide follow-up care.",
    isClinical: false,
    topic: "IMCI Case Management Overview"
  },
  {
    id: "q-fm-gds-6",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Color-Coded Definition",
    content: "Explain what the 3 color-coded classifications represent in IMCI.",
    answer: "1. RED: Very serious condition requiring urgent pre-referral treatment and hospital referral.\n2. YELLOW: Serious condition needing specific treatment and advice within the clinic.\n3. GREEN: Less serious condition needing home treatment and advice.",
    isClinical: false,
    topic: "IMCI Case Management Overview"
  },

  {
    id: "q-fm-gds-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Infant Cough Assessment Case",
    content: "A 14-month-old sick child is brought to a primary care health unit with a cough. On initial assessment, he is alert, able to breastfeed, and does not vomit. The clinician counts his respiratory rate as 46 breaths per minute while calm, and notes the absence of stridor or chest indrawing.\n\nQuestions:\n1. What is the correct IMCI respiratory classification for this child?\n2. Mention the first-line oral antibiotic drug, including the standard treatment duration, indicated by this classification.",
    answer: "1. PNEUMONIA (due to fast breathing >40/min for his age bracket, without danger signs).\n2. Oral Amoxicillin administered for a duration of 5 days.",
    isClinical: true,
    topic: "IMCI Case Management Overview"
  },
  {
    id: "q-fm-gds-7",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Barriers to Care",
    content: "Enumerate 4 socioeconomic or resource factors that cause poor health or act as barriers to care as described in the IMCI introduction.",
    answer: "1. Poor access to health facilities due to poor roads or transportation costs.\n2. Lack of access to education, particularly for the mother.\n3. Food insecurity due to poverty.\n4. Lack of basic resources like clean water and sanitary toilets.",
    isClinical: false,
    topic: "IMCI Case Management Overview"
  },

  // topic: "IMCI Young Infant Care (Up to 2 Months)"
  {
    id: "q-fm-syi-1",
    chapterId: 5,
    type: "short-essay",
    title: "Assessment of sick Young Infant",
    content: "List the 5 primary conditions that must be assessed in every sick young infant up to 2 months old.",
    answer: "1. Possible bacterial infection.\n2. Significant jaundice.\n3. Diarrhoea.\n4. Feeding problem or low weight.\n5. Young infant's immunization status.",
    isClinical: true,
    topic: "IMCI Young Infant Care (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-2",
    chapterId: 5,
    type: "short-essay",
    title: "Possible Serious Bacterial Infection Signs",
    content: "Enumerate 4 clinical signs that classify a young infant under the critical category of \"POSSIBLE SERIOUS BACTERIAL INFECTION\" (Red Box).",
    answer: "1. Not able to feed or decreased spontaneous movements.\n2. Convulsions (current or history during illness) or a bulging fontanelle.\n3. Fast breathing (60 breaths per minute or more) or severe chest indrawing/nasal flaring/grunting.\n4. High fever (37.5°C or above) or low body temperature (less than 35.5°C).",
    isClinical: true,
    topic: "IMCI Young Infant Care (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-3",
    chapterId: 5,
    type: "short-essay",
    title: "Prereferral Urgent Treatment Steps",
    content: "Enumerate 4 urgent pre-referral treatment steps required for a young infant classified with a Possible Serious Bacterial Infection.",
    answer: "1. Administration of the first dose of intramuscular antibiotics (Ampicillin plus Gentamicin).\n2. Immediate medical treatment of current convulsions if present (rectal sodium valproate).\n3. Instituting measures to prevent low blood sugar (glucose or expressed breastmilk).\n4. Advising the mother how to keep the young infant warm (prevent hypothermia) on the way to the hospital.",
    isClinical: true,
    topic: "IMCI Young Infant Care (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-4",
    chapterId: 5,
    type: "short-essay",
    title: "Breastfeeding Attachment Indicators",
    content: "Enumerate 4 indicators looked for when assessing Breastfeeding positioning and attachment in a young infant.",
    answer: "1. Infant's chin touching the breast, and the mouth wide open.\n2. Lower lip turned outward, and more areola visible above than below the mouth.\n3. Infant's neck straight or bent slightly back, with the body close and turned towards the mother.\n4. Infant suckling effectively, characterized by slow, deep sucks followed by occasional pauses.",
    isClinical: true,
    topic: "IMCI Young Infant Care (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Umbilical Redness Infant Case",
    content: "A 6-week-old young infant is brought to a clinic. On assessment, he has no fever or severe danger signs, but his umbilicus is noted to be red and draining small amounts of pus, without the redness extending to the surrounding skin.\n\nQuestions:\n1. What is the correct IMCI clinical classification for this infant's umbilical finding?\n2. Enumerate 2 home care training steps the mother must perform to treat this local infection at home.",
    answer: "1. LOCAL BACTERIAL INFECTION.\n2. Washing hands and gently washing off pus with soap and water, followed by painting the area with gentian violet twice daily.",
    isClinical: true,
    topic: "IMCI Young Infant Care (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-6",
    chapterId: 5,
    type: "define",
    title: "Local Bacterial Infection in Young Infants",
    content: "Define \"Local Bacterial Infection\" in a young infant and photocopy/enumerate 4 clinical signs that confirm this classification.",
    answer: "Definition: A localized bacterial infection in an infant up to 2 months old that does not exhibit systemic danger signs or systemic bacterial spread.\nClinical Signs of confirmation:\n1. Pus draining from the ear.\n2. Pus draining from the eyes associated with redness and swelling.\n3. Umbilical redness extending to the skin.\n4. Skin pustules or a red umbilicus/draining pus.",
    isClinical: true,
    topic: "IMCI Young Infant Care (Up to 2 Months)"
  },

  // topic: "IMCI Treatment: Antibiotics & Wheezing Management"
  {
    id: "q-fm-im-1",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Oral Antibiotics",
    content: "List the recommended IMCI first-line and second-line oral antibiotic treatments for Pneumonia/Acute Ear Infection, and for Dysentery.",
    answer: "1. Pneumonia or Acute Ear Infection:\n   - First-line: Amoxicillin\n   - Second-line: Cotrimoxazole\n2. Dysentery:\n   - First-line: Cotrimoxazole\n   - Second-line: Ampicillin (given for 5 days).",
    isClinical: true,
    topic: "IMCI Treatment: Antibiotics & Wheezing Management"
  },
  {
    id: "q-fm-im-2",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Wheezing Management",
    content: "Explain the IMCI management strategy for: 1) A child with wheezing and a general danger sign or stridor; and 2) A child with wheezing and NO danger signs/stridor but presenting with fast breathing or chest indrawing.",
    answer: "1. Wheezing with a general danger sign or stridor: Give one dose of a rapid-acting bronchodilator (such as nebulized salbutamol or MDI with spacer) and refer urgently to the hospital.\n2. Wheezing with NO danger signs or stridor, but presenting with fast breathing or chest indrawing: Give a rapid-acting bronchodilator and reassess the child 30 minutes later. If chest indrawing persists, treat for severe pneumonia (refer). If fast breathing alone persists, treat for pneumonia and give oral salbutamol for 5 days. If no fast breathing is present, treat for no pneumonia and give oral salbutamol for 5 days.",
    isClinical: true,
    topic: "IMCI Treatment: Antibiotics & Wheezing Management"
  },
  {
    id: "q-fm-im-3",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Hypoglycemia Prevention",
    content: "Mention the instructions and recipe to treat a child to prevent low blood sugar in the clinic.",
    answer: "If able to swallow, give expressed breastmilk or sugar water. To make sugar water: Dissolve 4 level teaspoons of sugar (20 grams) in a 200-ml cup of clean water. If unable to swallow, give 50 ml of milk or sugar water by nasogastric tube.",
    isClinical: true,
    topic: "IMCI Treatment: Antibiotics & Wheezing Management"
  },

  // topic: "IMCI Management of Diarrhoea and Dehydration"
  {
    id: "q-fm-dd-1",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Dehydration Signs",
    content: "List the 4 clinical signs evaluated in IMCI to classify dehydration in a child with diarrhea.",
    answer: "1. General condition (lethargic/unconscious vs restless/irritable).\n2. Sunken eyes.\n3. Fluid offering response (not able to drink/poorly vs drinking eagerly/thirsty).\n4. Abdominal skin pinch test.",
    isClinical: true,
    topic: "IMCI Management of Diarrhoea and Dehydration"
  },
  {
    id: "q-fm-dd-2",
    chapterId: 5,
    type: "problem-solving",
    title: "IMCI Some Dehydration Case",
    content: "A 3-year-old child presents with watery diarrhea. On exam, the child is restless and irritable, has sunken eyes, and drinks eagerly/thirsty when offered fluid. The skin pinch goes back slowly.\n\nQuestions:\n1. Classify the dehydration status.\n2. Identify the required IMCI treatment plan.",
    answer: "1. Classification: Some Dehydration (due to presence of two signs: restless/irritable, sunken eyes, and drinking eagerly).\n2. Treatment: Plan B (Treat Some Dehydration with ORS over a 4-hour period in the clinic, give Zinc Syrup for 14 days, and advise on when to return immediately).",
    isClinical: true,
    topic: "IMCI Management of Diarrhoea and Dehydration"
  },
  {
    id: "q-fm-dd-3",
    chapterId: 5,
    type: "problem-solving",
    title: "Severe Dehydration Plan C Case",
    content: "A 14-month-old child presents with a 3-day history of loose stools. On clinical evaluation, the child is lethargic, has sunken eyes, and is not able to drink fluid when offered. The abdominal skin pinch goes back very slowly (longer than 2 seconds).\n\nQuestions:\n1. Classify the dehydration status.\n2. Mention the immediate clinical management required according to IMCI.",
    answer: "1. Classification: Severe Dehydration (classified because two or more signs are present: lethargic, sunken eyes, and not able to drink).\n2. Management: Initiate Plan C (Treat Severe Dehydration Quickly). Start intravenous (IV) fluids immediately with Ringer's Lactate or Normal Saline. For a child of this age (over 12 months), give 30 ml/kg in the first 30 minutes, followed by 70 ml/kg over the next 2.5 hours. If IV is unavailable nearby, implement nasogastric tube rehydration or refer urgently.",
    isClinical: true,
    topic: "IMCI Management of Diarrhoea and Dehydration"
  },

  // topic: "Breastfeeding Management & Composition"
  {
    id: "q-fm-bm-1",
    chapterId: 5,
    type: "short-essay",
    title: "Maternal Benefits of Breastfeeding",
    content: "Enumerate 4 health benefits of breastfeeding for the lactating mother.",
    answer: "1. Reduces risk of breast and ovarian cancer.\n2. Lowers risk of type 2 diabetes and hypertension.\n3. Reduces risk of developing osteoporosis.\n4. Produces oxytocin to help contract the uterus back to its pre-pregnancy size.",
    isClinical: false,
    topic: "Breastfeeding Management & Composition"
  },
  {
    id: "q-fm-bm-2",
    chapterId: 5,
    type: "short-essay",
    title: "Fore-milk vs Hind-milk",
    content: "Differentiate between \"Fore-milk\" and \"Hind-milk\" in mature breast milk.",
    answer: "Fore-milk: Found at the beginning of the feeding; contains water, vitamins, and protein to keep the infant hydrated.\nHind-milk: Occurs after the initial release of milk; contains higher levels of fat and is necessary for proper weight gain.",
    isClinical: false,
    topic: "Breastfeeding Management & Composition"
  },
  {
    id: "q-fm-bm-3",
    chapterId: 5,
    type: "short-essay",
    title: "Breastfeeding Contraindications",
    content: "List 3 absolute contraindications where a mother must NOT breastfeed or feed expressed breast milk.",
    answer: "1. Infant diagnosed with classic galactosemia.\n2. Mother has HIV and is not on antiretroviral therapy (ART).\n3. Mother is using an illicit drug (such as opioids, PCP, or cocaine).",
    isClinical: true,
    topic: "Breastfeeding Management & Composition"
  },
  {
    id: "q-fm-bm-4",
    chapterId: 5,
    type: "define",
    title: "Define Colostrum and Protective Properties",
    content: "Define \"Colostrum\" and enumerate 4 of its unique protective properties or clinical advantages.",
    answer: "Definition: The initial breast milk produced during days 1–4 postpartum, which is yellowish or creamy in color and thicker than later milk.\nClinical Advantages:\n1. Antibody-rich (protects against infection and allergy).\n2. Rich in white cells (protects against infection).\n3. Purgative property (clears meconium and helps prevent jaundice).\n4. Contains growth factors (helps the intestine mature and prevents intolerance).",
    isClinical: true,
    topic: "Breastfeeding Management & Composition"
  },

  // ==================== I. Renal Diseases (Bank 2) ====================
  // topic: "Hematuria"
  {
    id: "q-r2-h-1",
    chapterId: 1,
    type: "define",
    title: "Define Glomerular Hematuria",
    content: "Define \"Glomerular Hematuria\".",
    answer: "It is blood in the urine that originates from the nephron (specifically the glomerulus, convoluted, or collecting tubules), characterized by dysmorphic RBCs and smoky or cola-colored urine.",
    isClinical: false,
    topic: "Hematuria",
    explanation: "الـ **Glomerular Hematuria** يعني الدم جاي من مصفاة الكلية نفسها (Glomerulus). بنعرفه بوجود خلايا دم حمراء مشوهة ومفعصة (**Dysmorphic RBCs**) لأنها عافرت عشان تعدي من المصفاة الضيقة، مع وجود **RBC Casts** ولون البول الكوكاكولا الفاتح أو الغامق (**Smoky / Cola-colored**) نتيجة أكسدة الهيموجلوبين بالـ Acidic pH في الأنابيب الكلوية."
  },
  {
    id: "q-r2-h-2",
    chapterId: 1,
    type: "short-essay",
    title: "Upper Urinary Tract Hematuria Causes",
    content: "Enumerate 4 prominent structural or chemical \"Upper Urinary Tract\" causes of extra-glomerular hematuria.",
    answer: "1. Pyelonephritis or interstitial nephritis.\n2. Acute tubular necrosis (ATN).\n3. Vascular thrombosis or malformations.\n4. Crystalluria (Calcium, Oxalate, or Uric acid).",
    isClinical: true,
    topic: "Hematuria",
    explanation: "الـ **Extra-glomerular Hematuria** اللي مصدرها فوق (Upper Tract) يعني الكلية أو الحالب بس بعيد عن الفلاتر:\n1. **Pyelonephritis**: التهاب صديدي في حوض الكلية بيعمل جرح ونزيف بسيط.\n2. **ATN (Acute Tubular Necrosis)**: تلف خلايا الأنابيب بسبب نقص الدم أو الأدوية بيكشف الأوعية الدموية.\n3. **Renal Vein Thrombosis**: جلطة في وريد الكلية بتزود الضغط بشكل رهيب فتعمل نزيف طارئ.\n4. **Crystalluria**: بلورات الكالسيوم أو الأوكسالات بتجرح جدار الأنابيب الكلوية وهي نازلة (زي الرمل الحامي)."
  },
  {
    id: "q-r2-h-3",
    chapterId: 1,
    type: "short-essay",
    title: "Initial Hematuria Evaluation",
    content: "Enumerate 4 specific indicators searched for during the initial evaluation of a child with hematuria.",
    answer: "1. Careful medical history (including family history of renal disease).\n2. Thorough physical examination for signs of edema or hypertension.\n3. Fresh urine sample analysis for casts, bacteria, and crystals.\n4. Abdominal ultrasound to look for stones, tumors, or anatomical malformations.",
    isClinical: true,
    topic: "Hematuria",
    explanation: "خطوات فك اللغز عند طفل جاي بهيماتوريا:\n1. **History**: بنسأل عن تاريخ العيلة المرضي (Polycystic kidneys, Deafness, Alport).\n2. **Physical Exam**: بنقيس الضغط (Hypertension) وبنشوف الورم (Edema) ومغص الكلية.\n3. **Urinalysis**: بندور على زلال (Proteinuria)، خلايا مفعصة (Dysmorphic RBCs)، أو RBC Casts.\n4. **Abdominal US**: سونار للبطن والمسالك لاستبعاد الحصوات والأورام (زي Wilms' Tumor) والعيوب الخلقية."
  },

  {
    id: "q-r2-h-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Glomerular Hematuria Case",
    content: "A 6-year-old boy is brought to the clinic with persistent microscopic hematuria. On checking his fresh urine sample, the lab reports more than 5 RBCs per high power field, a protein level exceeding 100 mg/dL, and the distinct presence of red blood cell casts. His blood pressure is elevated.\n\nQuestions:\n1. State the precise clinical site/source of this child's hematuria.\n2. Enumerate 2 multisystem diseases that can cause this specific type of hematuria in children.",
    answer: "1. Renal (Glomerular) source.\n2. Systemic Lupus Erythematosus (SLE) nephritis and Henoch-Schönlein Purpura (HSP) nephritis.",
    isClinical: true,
    topic: "Hematuria",
    explanation: "لما نلاقي **RBC casts** وزلال محترم مع ضغط عالي، يبقى الإدانة كاملة والدم جاي صراحة من الـ **Glomerular origin** (الفلتر نفسه). أشهر مرضين جهازين (Systemic) بيخربوا الفلاتر في الأطفال هما:\n- **SLE Nephritis** (ذئبة حمراء هاجمت الكلى، بالذات في البنات).\n- **HSP Nephritis** (التهاب وعائي مع طفح جلدي مميز ووجع مفاصل وبطن)."
  },

  // topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  {
    id: "q-r2-a-1",
    chapterId: 1,
    type: "short-essay",
    title: "APSGN Pathophysiology",
    content: "Enumerate 4 essential pathophysiology steps that explain the development of edema and oliguria in a patient with APSGN.",
    answer: "1. Deposition of streptococcal immune complexes (subepithelial humps) in the Glomerular Basement Membrane (GBM).\n2. Proliferation of mesangial and endothelial cells leading to compression of glomerular capillaries.\n3. Decreased glomerular blood flow resulting directly in fluid retention and oliguria.\n4. Activation of the juxtaglomerular apparatus and the renin-angiotensin system, causing severe hypervolemia and edema.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "خطوات تكوين الورم وقلة البول في الـ **APSGN**:\n1. الأجسام المضادة بتمسك في الـ Streptococcal Antigens وتترسب تحت الخلايا (تسمى **Subepithelial Humps**).\n2. الجسم بيثور ويعمل التهاب خلايا الميزانجيوم والبطانة (**Mesangial proliferation**)، فتقفل كابلات الدم بالفلاتر.\n3. GFR بيقع الأرض (**GFR drops**)، فالكلية متصرفش السوائل ويحصل **Oliguria**.\n4. نقص الفلترة مع استثارة الـ RAAS بيحبس السوائل والصوديوم في الدم، فينفخ المريض ويطير الضغط في السماء."
  },
  {
    id: "q-r2-a-2",
    chapterId: 1,
    type: "short-essay",
    title: "APSGN Supportive Management",
    content: "Enumerate 4 general supportive measures or dietary modifications required during the management of acute APSGN.",
    answer: "1. Strict bed rest, specifically indicated during the oliguric phase of the illness.\n2. Careful fluid restriction calculated precisely based on the patient's urine output and body surface area.\n3. Dietary restriction of both protein and salt (sodium).\n4. Providing a high-carbohydrate diet to ensure adequate caloric intake.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "بروتوكول الرعاية في الـ **APSGN** (لأن المرض Self-limiting ومالوش دوا مباشر):\n1. **Bed rest**: يرتاح تماماً في السرير في فترة قلة البول عشان يحمي القلب والضغط.\n2. **Fluid restriction**: بنقفل المحبس ونحسب السوائل بالملي (Urine + Insensible losses) عشان نمنع الرشح الرئوي.\n3. **Diet restriction**: ممنوع الملح تماماً (Salt restriction) عشان نتحكم في الضغط والورم، وتقليل البروتين لو اليوريا عالية جداً.\n4. **High-carbohydrate diet**: نشويات عالية عشان تدي طاقة للطفل وتمنع تكسير عضلاته (Catabolism) اللي بيزود اليوريا والبوتاسيوم."
  },
  {
    id: "q-r2-a-3",
    chapterId: 1,
    type: "short-essay",
    title: "APSGN Microscopic Features",
    content: "Enumerate 4 classic laboratory or diagnostic features seen on light, immunofluorescence, and electron microscopy in a kidney tissue affected by APSGN.",
    answer: "1. Symmetrically enlarged kidneys with all glomeruli appearing enlarged and relatively bloodless.\n2. Diffuse mesangial cell proliferation with an increase in mesangial matrix on light microscopy.\n3. Lumpy-bumpy deposits of immunoglobulin and complement on the GBM and in the mesangium on immunofluorescence.\n4. Electron-dense deposits or \"humps\" observed on the epithelial side of the GBM on electron microscopy.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "الـ **APSGN** تحت عين الميكروسكوب:\n1. بالـ **Light Microscope**: الكلى بتظهر متضخمة لكنها باهتة وخالية من الدم لأن الفلاتر مخنوقة بالخلايا الملتهبة (**Hypercellular & bloodless glomeruli**).\n2. بالـ **Immunofluorescence**: ترسيبات مناعية غير منتظمة تدي شكل النجوم أو السماء الليلية المرصعة (**Lumpy-bumpy appearance**).\n3. بالـ **Electron Microscope**: ترسيبات عملاقة زي سنام الجمل (**Subepithelial Humps**) على غشاء الفلتر."
  },

  {
    id: "q-r2-a-5",
    chapterId: 1,
    type: "problem-solving",
    title: "APSGN Diagnostic Antibody Case",
    content: "A 10-year-old boy presents with sudden gross hematuria, mild ankle swelling, and oliguria. His serum C3 level is significantly reduced. The physician suspects APSGN but notes that the baseline Antistreptolysin O (ASOT) titer is normal.\n\nQuestions:\n1. What is the single best alternative antibody titer that should be requested to document a prior cutaneous/skin streptococcal infection?\n2. For how long does the serum C3 complement level typically remain depressed before returning to normal?",
    answer: "1. Deoxyribonuclease (DNase) B antigen titer.\n2. It returns to normal within 6 to 8 weeks after the onset of the disease.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "1. في حالات عدوى الجلد (Strep. Pyoderma or Impetigo)، الـ **ASOT** ممكن يطلع طبيعي خالص لأن إنزيمات الجلد بتدمر الـ Streptolysin O قبل ما يحفز الأجسام المضادة. البديل الذهبي والذكي هنا هو الـ **Anti-DNase B** (أو Antistreptodornase B).\n2. مستوى الـ **Serum C3** المتمم المناعي بيوطى جداً نتيجة فناءه في المعركة، ولازم يرجع لطبيعته خلال **6 لـ 8 أسابيع**. لو فضل واطي بعد كدا، فكر فوراً في Membranoproliferative GN (MPGN) أو Lupus!"
  },

  // topic: "Nephrotic Syndrome"
  {
    id: "q-r2-n-1",
    chapterId: 1,
    type: "define",
    title: "Define Minimal Change Nephrotic Syndrome (MCNS)",
    content: "Define \"Minimal Change Nephrotic Syndrome (MCNS)\".",
    answer: "It is the most common histological type of idiopathic nephrotic syndrome in children, characterized by normal-appearing glomeruli under light microscopy, negative immunofluorescence, and complete effacement of epithelial cell foot processes under electron microscopy.",
    isClinical: false,
    topic: "Nephrotic Syndrome",
    explanation: "الـ **MCNS** هو أشهر نوع نفروتيك في الأطفال. تحت الـ **Light Microscope** الفلاتر بتظهر طبيعية وسليمة بنسبة 100% (علشان كدا اسمه Minimal Change)، وحتى الـ **Immunofluorescence** بيطلع سلبي تماماً.\nالـ Diagnosis الصريح بيبان بس بالـ **Electron Microscope**: بنلاقي دمار وتناغم كامل لأقدام الخلايا (**Effacement of foot processes**) اللي كانت مانعة تسريب زلال الألبومين."
  },
  {
    id: "q-r2-n-2",
    chapterId: 1,
    type: "short-essay",
    title: "Secondary Nephrotic Findings",
    content: "Enumerate 4 clinical or laboratory findings that suggest a secondary cause of Nephrotic Syndrome rather than a primary idiopathic minimal change disease.",
    answer: "1. Age of onset greater than 8 years.\n2. Persistent hypertension.\n3. Presence of gross hematuria or structural renal impairment.\n4. Persistently depressed serum C3 complement levels or presence of extra-renal symptoms (like arthritis).",
    isClinical: true,
    topic: "Nephrotic Syndrome",
    explanation: "علامات خطر بتصرخ إن النفروتيك ده مش **Minimal Change** البسيط المحبوب، وإن في سبب تاني (Secondary Non-MCNS):\n1. **العمر الغريب**: طفل أصغر من سنة أو أكبر من 8 - 10 سنين.\n2. **Persistent Hypertension**: ضغط عالي مستمر ومستعصي.\n3. **Gross hematuria**: دم صريح ولون كوكاكولا في البول.\n4. **Low Serum C3**: متمم مناعي واطي مش راضي يرفع (يفكرنا بالـ MPGN أو Lupus)."
  },
  {
    id: "q-r2-n-3",
    chapterId: 1,
    type: "short-essay",
    title: "Nephrotic Relapse Monitoring",
    content: "Enumerate 4 clinical monitoring parameters that must be tracked daily for a hospitalized child during an acute nephrotic relapse.",
    answer: "1. Assessment of 24-hour urinary protein excretion.\n2. Daily recording of body weight (to track fluid accumulation or loss).\n3. Continuous monitoring of blood pressure.\n4. Close tracking of total urine output and searching for early signs of clinical infection.",
    isClinical: true,
    topic: "Nephrotic Syndrome",
    explanation: "في عنبر الأطفال، عينك في عنكبوت على مريض انتكاسة النفروتيك:\n1. **Urinary protein**: بنقيس الزلال يومياً بالتجربة لمعرفة بدابة الاستجابة للكورتيزون.\n2. **Daily weight**: الميزان بنفس اللبس والظروف الصبح لقط فوري لمروق أو تراكم السوائل.\n3. **Blood Pressure**: هبوط فجائي قد يعني Hypovolemic shock، وارتفاعه قد يكون من الكورتيزون الحاد.\n4. **Infections checking**: قياس الحرارة وملاحظة وجع البطن أو الرشح لاستباق صدمة التسمم وموت المناعة."
  },
  {
    id: "q-r2-n-4",
    chapterId: 1,
    type: "short-essay",
    title: "Susceptibility to Infections Factors",
    content: "Enumerate 4 underlying factors or causes that explain the increased susceptibility to bacterial infections in children during a nephrotic relapse.",
    answer: "1. Significant urinary losses of immunoglobulins and properdin factor B.\n2. Defective cell-mediated immunity and abnormal leukocytic function.\n3. Immunosuppressive or prolonged corticosteroid therapy.\n4. Accumulation of edema and ascites fluid acting as an excellent culture medium for bacteria.",
    isClinical: true,
    topic: "Nephrotic Syndrome",
    explanation: "ليه طفل انتكاسة النفروتيك مناعته في الأرض ومعرض للموت من الالتهابات؟\n1. بيفقد الأجسام المضادة المناعية بالبول (**Urinary loss of IgG & properdin factor B**).\n2. كفاءة الخلايا المناعية والـ chemotaxis تعبانة بسبب اليوريميا ونقص الغذاء.\n3. العلاج بـ **Corticosteroids** بجرعات عالية بيقفل جهاز المناعة الباقي.\n4. تراكم مياه الرشح والـ **Ascites** في البطن بتعتبر بيئة غذاء ذهبية (Culture medium) تعشقها بكتيريا الـ Pneumococcus وتعمل Spontaneous Bacterial Peritonitis (SBP)."
  },
  {
    id: "q-r2-n-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Nephrotic Peritonitis Case",
    content: "A 5-year-old child known to have steroid-responsive nephrotic syndrome is brought to the hospital during a relapse. He has developed a high fever, severe abdominal pain, and abdominal tenderness. The physician suspects spontaneous bacterial peritonitis.\n\nQuestions:\n1. What is the single most common bacterial organism responsible for causing peritonitis in nephrotic children?\n2. Mention 2 factors that explain the increased risk of intravascular thrombosis in this patient.",
    answer: "1. Streptococcus pneumoniae (Gram-negative bacteria like E. coli can also be encountered).\n2. Increased prothrombotic factors (like fibrinogen and thrombocytosis) and decreased fibrinolytic factors due to urinary losses of antithrombin III.",
    isClinical: true,
    topic: "Nephrotic Syndrome",
    explanation: "1. أشهر ميكروب بشع يهاجم بطن طفل النفروتيك ويعمل التهاب بريتوني حاد (**SBP**) هو **Streptococcus pneumoniae** (تليها الـ E. coli).\n2. الجلطات (**Thrombosis**) مرعبة في النفروتيك لسببين:\n- الكلية بتسرب مضاد الجلطات الطبيعي **Antithrombin III** في البول فتسهل التجلط.\n- الكبد بيصنع فايبرينوجين عشوائي بزيادة مع وجود جفاف مية بالدم (**Hemoconcentration**) بسبب هروب المياه للأنسجة."
  },

  // topic: "Acute Kidney Injury (AKI)"
  {
    id: "q-r2-k-1",
    chapterId: 1,
    type: "short-essay",
    title: "Intrinsic Renal AKI Causes",
    content: "Enumerate 4 distinct \"Intrinsic Renal\" parenchymal causes that lead to Acute Kidney Injury in children.",
    answer: "1. Acute post-infectious or post-streptococcal glomerulonephritis.\n2. Hemolytic-Uremic Syndrome (HUS).\n3. Acute Tubular Necrosis (ATN) induced by prolonged ischemia or nephrotoxic medications.\n4. Acute interstitial nephritis or renal vein thrombosis.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)",
    explanation: "الـ **Intrinsic AKI** يعني الكارثة والضربة حلت داخل لحم الكلية وجدرانها الفلترية نفسها:\n1. **Severe APSGN** (التهاب حاد دمر جدران المصفاة الكلوية).\n2. **HUS (Hemolytic Uremic Syndrome)**: جلطات ميكروسكوبية خربت شرايين الكلية ودمرت خلايا الدم والصفائح.\n3. **ATN (Acute Tubular Necrosis)**: موت خلايا أنابيب الكلية بسبب سموم الأدوية (Aminoglycosides) أو انقطاع الدم الطويل.\n4. **Acute Interstitial Nephritis**: حساسية مناعية حادة من أدوية محددة ترسبت في جدار النسيج الكلوي."
  },
  {
    id: "q-r2-k-2",
    chapterId: 1,
    type: "short-essay",
    title: "Post-renal AKI obstructive causes",
    content: "Enumerate 4 structural post-renal obstructive causes that can induce bilateral urinary tract obstruction and cause AKI.",
    answer: "1. Posterior Urethral Valves (PUV) in male neonates.\n2. Bilateral ureterovesical or pelviureteric junction (PUJ) obstruction.\n3. Urolithiasis (Urinary stones blocks).\n4. Neurogenic bladder or hemorrhagic cystitis.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)",
    explanation: "الـ **Post-renal AKI** يعني المواتير سليمة والسباكة سليمة، بس الصرف مسدود في السكة برة الكليتين (Obstrucive uropathy) ولازم السدة تكون ثنائية (**Bilateral**) أو في مخرج المثانة عشان تبوظ وظائف الكلى:\n1. **PUV (Posterior Urethral Valves)**: أشهر سبب لخناق المجرى في الصبيان حديثي الولادة.\n2. **Bilateral Kidneys Stones / PUJ obstruction**: حصوة سدت الحالبين معاً أو عيب خلقي في مخرج الحالبين.\n3. **Neurogenic Bladder**: مثانة مشلولة عصبياً خازنة السائل وترده لفوق.\n4. **Hemorrhagic Cystitis**: نزيف وتجلط دموي في عنق المثانة خانق المجرى تماماً."
  },
  {
    id: "q-r2-k-3",
    chapterId: 1,
    type: "short-essay",
    title: "AKI Phases differentiation",
    content: "Enumerate 4 clinical manifestations that differentiate the early oliguric phase of AKI from the advanced phase.",
    answer: "1. Early phase features simple oliguria, mild edema, and mild hypertension.\n2. Advanced phase features severe uremic encephalopathy (confusion, convulsions, or coma).\n3. Advanced phase features hyperkalemia leading to cardiac arrhythmias.\n4. Advanced phase features hypervolemia causing congestive heart failure and acute pulmonary edema.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)",
    explanation: "الفرق بين البداية الهادئة والنهاية العنيفة للـ **AKI**:\n- **Oliguric Phase (البسيطة)**: مجرد قلة بول شوية ورم طفيف على العين وضغط منضبط.\n- **Advanced Phase (المرعبة)**: uremic toxins تطلع للمخ وتعمل غيبوبة وتشنجات (**Uremic Encephalopathy**)، البوتاسيوم يعلى فيلخبط كهربة القلب والـ T wave ومستعد يوقف النبض فجأة، وحجم المياه يتراكم لدرجة فشل القلب الحاد ورشح الرئة الخانق (**Pulmonary Edema**)."
  },
  {
    id: "q-r2-k-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Intrinsic Renal AKI Case",
    content: "A critically ill 4-year-old child with a history of protracted systemic hypotension and prolonged exposure to known nephrotoxic medications develops acute renal failure. Urinalysis shows a low urine specific gravity (<1010), high urine sodium (>40 mEq/L), and a FENa greater than 2%.\n\nQuestions:\n1. What is the specific intrinsic renal diagnosis for this presentation?\n2. Enumerate 2 types of urine casts or cells characteristic of this intrinsic parenchymal condition.",
    answer: "1. Acute Tubular Necrosis (ATN).\n2. Granular casts and renal tubular epithelial cell casts.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)",
    explanation: "قراءة تحليلية فذة للكيسة:\n1. طفل ضغطه واطى لفترة طويلة وتعرض لأدوية سامة للكلى واستجابته الكلوية صفر مع **FENa > 2%** و **Urine Sodium > 40 mEq/L**: دي بصمة **ATN** (موت خلايا الأنابيب) لأن الأنابيب تالفة ومش عارفة تمتص صوديوم فبتسربه في البول بكميات مهولة.\n2. النسيج التالف المتساقط من جدران الأنابيب بينزل في البول على شكل اسطوانات طينية وحبيبية مميزة جداً تسمى **Muddy brown granular casts** و **Renal tubular epithelial cell casts**."
  },

  // topic: "Chronic Kidney Disease (CKD)"
  {
    id: "q-r2-c-1",
    chapterId: 1,
    type: "short-essay",
    title: "Congenital CKD causes",
    content: "Enumerate 4 distinct structural or congenital causes that are responsible for Chronic Kidney Disease in children younger than 5 years of age.",
    answer: "1. Congenital renal hypoplasia or dysplasia.\n2. Severe reflux nephropathy.\n3. Congenital obstructive uropathy (e.g., posterior urethral valves).\n4. Congenital nephrotic syndrome or polycystic kidney disease.",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)",
    explanation: "في الأطفال اللي أصغر من 5 سنين، الفشل الكلوي المزمن (**CKD**) مبيبقاش من التهابات، بيكون بنسبة 90% عيوب خلقية في التكوين أو السباكة:\n1. **Renal Hypoplasia/Dysplasia**: الكلية مولودة حجمها قزم أو متكيسة غير ناضجة.\n2. **Reflux Nephropathy**: صمام وحالب مفوت عمال يرجع البول للكلية بضغط عالي وجرح النسيج.\n3. **Posterior Urethral Valves (PUV)**: انسداد مخرج المثانة حجز البول لفوق فدمر الفلاتر على مدار شهور.\n4. **Congenital PKD**: مرض الكلي المتعددة الأكياس الوراثي."
  },
  {
    id: "q-r2-c-2",
    chapterId: 1,
    type: "short-essay",
    title: "CKD Growth Retardation mechanisms",
    content: "Enumerate 4 distinct clinical or laboratory mechanisms that explain the development of Short Stature (Growth Retardation) in children with CKD.",
    answer: "1. Chronic inadequate caloric and nutritional intake.\n2. Severe chronic metabolic acidosis.\n3. Advanced renal osteodystrophy.\n4. Growth hormone resistance state (elevated GH but decreased insulin-like growth factor-I).",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)",
    explanation: "ليه طفل الفشل الكلوي المزمن بيكون قزم ومش بيكبر؟\n1. **Caloric intake**: الشهية ميتة بسبب سموم اليوريا والترجيع الدائم.\n2. **Metabolic Acidosis**: حموضة الدم المزمنة بتسحب الكالسيوم والمعادن من العضم وتدمر بروتينات البناء.\n3. **Renal Osteodystrophy**: تفتت وتشوه العظام بسبب خلل هرمون الغدة الجار درقية.\n4. **Growth Hormone Resistance**: هرمون النمو سليم وبيفرز، لكن المستقبلات في الأنسجة معطلة باليوريا ومفيش إنتاج كافي للـ IGF-1 البنائي."
  },
  {
    id: "q-r2-c-3",
    chapterId: 1,
    type: "short-essay",
    title: "Renal Osteodystrophy features",
    content: "Enumerate 4 clinical, laboratory, or radiological features that characterize the presence of \"Renal Osteodystrophy\" in a child with advanced CKD.",
    answer: "1. Muscle weakness, bone pain, and skeletal fractures with minor trauma.\n2. Rachitic changes, and varus or valgus deformities of the long bones.\n3. Laboratory findings of hypocalcemia, hyperphosphatemia, and elevated parathyroid hormone (PTH) levels.\n4. Subperiosteal bone resorption with widening of the metaphysis on X-ray.",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)",
    explanation: "الـ **Renal Osteodystrophy** (العظام المتفحمة كلوياً):\n- **Clinical**: الطفل بيعاني من وجع شديد في العظم وضغف عضلات، وسهل يتكسر من خبطة تافهة، ورجله بتتقوس وتقرب لبعضها (Knock knees / Genu valgum).\n- **Labs**: نقص حاد في كالسيوم الدم (**Hypocalcemia**) مع تراكم الفوسفات عاجز التصريف (**Hyperphosphatemia**)، واستفزاز هرمون الـ **PTH** ليتجاوز أرقامه الطبيعية بأضعاف.\n- **X-Ray**: تأكل العظام تحت القشرة في الأصابع (**Subperiosteal resorption**)."
  },
  {
    id: "q-r2-u-1",
    chapterId: 1,
    type: "short-essay",
    title: "UTI Prevalence & Gender Shifts",
    content: "Enumerate the prevalence rates of Urinary Tract Infections (UTIs) in pediatric girls and boys, and specify how the male-to-female ratio shifts in the first year of life versus beyond 1-2 years.",
    answer: "1. Overall Prevalence: UTIs occur in 3-5% of girls and 1% of boys.\n2. In Girls: First UTI often occurs by age 5, peaking during infancy and the toilet training phase. Recurrence is high, at 60-80% within 18 months.\n3. In Boys: Most UTIs occur during the first year of life, with uncircumcised boys having a significantly higher risk.\n4. Ratio Shifts: In the first year of life, there is a male-to-female ratio of 2.8-5.4:1 (higher prevalence in males). Beyond 1-2 years, there is a distinct female preponderance with a ratio of 1:10 (males to females).",
    isClinical: false,
    topic: "Urinary Tract Infections (UTIs)",
    explanation: "لعبة انتشار الـ UTI بالأعمار والنوع:\n- **الرضع في السنة الأولى**: الأولاد غير المختونين (Uncircumcised) بيكتسحوا الإصابات بنسبة رهيبة (من 3 لـ 5 مرات أكثر من البنات) بسبب تراكم البكتيريا تحت القلفة.\n- **بعد سن سنة أو سنتين**: تنعكس الآية تماماً وتتفوق البنات باكتساح كاسح (بنسبة 10 بنات لكل ولد واحد) بسبب قصر المجرى البولي (Shorter urethra) وقرب فتحة البول من المخرج الخلفي بالتالي زحف الـ E. coli السريع."
  },

  {
    id: "q-r2-u-2",
    chapterId: 1,
    type: "short-essay",
    title: "Cystitis vs Pyelonephritis Differentiation",
    content: "Enumerate 4 distinct clinical or pathological differences that help distinguish acute Cystitis (bladder involvement) from acute Pyelonephritis (kidney parenchyma involvement) in children.",
    answer: "1. Fever & Systemic Symptoms: Pyelonephritis is characterized by high fever, malaise, vomiting, or jaundice (in infants), whereas Cystitis features NO fever or mild low-grade fever with localized symptoms.\n2. Localized Pain: Pyelonephritis causes abdominal or flank/back pain, whereas Cystitis causes suprapubic pain.\n3. Voiding Symptoms: Cystitis is dominated by severe dysuria, extreme urgency, urinary frequency, and incontinence, which are less localized in infants with pyelonephritis.\n4. Long-term Sequelae: Pyelonephritis carries a significant risk of permanent renal scarring, whereas Cystitis does NOT cause renal scarring or permanent renal injury.",
    isClinical: true,
    topic: "Urinary Tract Infections (UTIs)",
    explanation: "الفرق السريري الخطير بين التهاب المثانة البسيط والتهاب الكلية العنيف:\n- **Location**: الـ **Cystitis** محصورة تحت بوجع فوق العانة وحرقان بول رهيب ودخول متكرر، ومفيش سخخونية (No systemic features).\n- **Pyelonephritis**: تسمم حراري عام، سخونية، قشعريرة، وجع في الضهر أو الخواصر، وفي الرضع صفراء وترفض الرضاعة.\n- **Complications**: الـ Cystitis لا تضر النسيج أبداً، أما الـ Pyelonephritis بتعمل بؤر تليف وجروح بالـ Kidney تسبب ضغط وضياع لوظائف الكلى بالمستقبل (Renal Scarring)."
  },
  {
    id: "q-r2-u-3",
    chapterId: 1,
    type: "short-essay",
    title: "UTI Treatment & Antibiotic Prophylaxis",
    content: "Enumerate the therapeutic protocols for young children with acute uncomplicated cystitis versus those requiring prophylaxis against UTI recurrence.",
    answer: "1. Acute Cystitis Treatment: Administer Trimethoprim-sulfamethoxazole or Nitrofurantoin for 3-5 days. Amoxicillin (50 mg/kg/24 hr) is another option.\n2. Preventive Prophylaxis Indication: Initiated to prevent reinfection in children with recurrent UTIs or high-grade Vesicoureteral Reflux (VUR).\n3. Prophylaxis Regimen: Administer Sulfamethoxazole-trimethoprim or Nitrofurantoin once daily at bedtime.\n4. Prophylaxis Dosage: The dose is calculated exactly as one-third (1/3) of the standard therapeutic dose.",
    isClinical: true,
    topic: "Urinary Tract Infections (UTIs)",
    explanation: "1. علاج الـ **Cystitis** بسيط ومقتضب: بنمشي الطفل على مضاد عن طريق الفم لمدة 3 - 5 أيام (زي الـ Septrin / TMP-SMX أو الـ Nitrofurantoin المتمركز بالبول).\n2. بروتوكول الوقاية الـ **Prophylaxis**: لو الطفل عنده ارتجاع صمامات عالي (VUR) أو أدوار متكررة، بنعطيه جرعة وقائية واحدة بالليل يومياً بجرعة **ثلث الجرعة العلاجية** لتأمين الطريق ومنع مستعمرات البكتيريا من الصعود مجدداً للكلية."
  },
  {
    id: "q-r2-u-5",
    chapterId: 1,
    type: "problem-solving",
    title: "UTI with Suspected Renal Abscess Case",
    content: "An 8-year-old girl with a history of recurrent febrile UTIs presents with high fever, persistent left-sided flank pain, and significant abdominal tenderness despite being on oral antibiotics for 48 hours. Her CBC reveals a marked leukocytosis of 24,000/mm³ with neutrophilia. An abdominal ultrasound is ordered.\n\nQuestions:\n1. What severe localized complication of pyelonephritis is most likely in this child?\n2. Mention the diagnostic imaging gold-standard for confirming this complication, and its medical/surgical management.",
    answer: "1. Renal Abscess (marked by high fever, localized flank pain, high WBC >20,000, and non-response to standard therapy).\n2. Confirmation is obtained via Abdominal CT or MRI. Management involves administering high-dose parenteral broad-spectrum antibiotics and undertaking surgical or percutaneous drainage if there is an obstruction or non-resolution.",
    isClinical: true,
    topic: "Urinary Tract Infections (UTIs)",
    explanation: "طفلة جالها دور التهاب كلى ومستجابتش للمضاد في أول 48 ساعة، وحرارتها طارت ووجع الخصر زاد وكرات الدم تجاوزت 24,000:\n1. الشك الفوري هو تكون **Renal Abscess** (خراج بداخل الكلية حبس الصديد والحرارة ومنع المضاد السطحي من العمل).\n2. الفحص الذهبي: **Abdominal CT / MRI** بالصبغة.\n3. الحل: حجز بـ **IV antibiotics** بجرعات قصوى، وفي حال كان الخراج كبير أو سادد الطريق بيتم سحبه بإبرة تحت السونار (Percutaneous drainage)."
  },
  {
    id: "q-r2-a-6",
    chapterId: 1,
    type: "short-essay",
    title: "Renal Biopsy Indications in APSGN",
    content: "Enumerate 4 clinical or laboratory indications for performing a Renal Biopsy in a child suspected of having Acute Post-Streptococcal Glomerulonephritis (APSGN).",
    answer: "1. Presentation with Acute Kidney Injury (AKI) or Rapidly Progressive Glomerulonephritis (RPGN).\n2. Presence of heavy, nephrotic-range proteinuria.\n3. Absence of any streptococcal evidence (normal ASO/ASOT and normal DNase B titers) in a patient with nephritic features.\n4. Persistently low serum C3 complement levels, or persistent hematuria and diminished renal function, extending beyond 2 months (6-8 weeks) from onset.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)",
    explanation: "طبيعي الـ APSGN بتتحسن لوحدها ومبنعملش عينة، لكن أيمتى بنضطر لجرعة العينة الكلوية (Renal Biopsy) لاستبعاد الخطر؟\n1. لو الطفل دخل في فشل كلوي صاروخي ومصاحب بـ **AKI or RPGN**.\n2. لو كمية تسريب الزلال فظيعة ووصلت للـ **Nephrotic range**.\n3. لو مفيش أي دليل على Strep infection بالتحاليل (لا ASOT ولا Anti-DNase B).\n4. لو المتمم الـ **C3** فضل منخفض لأكثر من 8 أسابيع (الشك بيتحول لأمراض مناعية مزمنة)."
  },
  {
    id: "q-r2-h-4",
    chapterId: 1,
    type: "short-essay",
    title: "Microscopic vs Gross Hematuria",
    content: "Enumerate 4 parameters that distinguish Microscopic Hematuria from Gross (Macroscopic) Hematuria in children.",
    answer: "1. Visual Appearance: Microscopic hematuria is completely invisible to the naked eye (normal urine color), whereas gross hematuria causes a visually obvious red, brown, cola, or smoky urine color.\n2. Quantitation: Microscopic hematuria is quantified as >= 3 RBCs per high-power field (HPF) on 2-3 consecutive centrifuged urine samples, whereas gross hematuria is immediately visually apparent.\n3. Clinical Detection: Microscopic hematuria is usually asymptomatic and discovered incidentally, whereas gross hematuria presents with clear visible symptoms.\n4. Diagnostic Urgency: Gross hematuria requires immediate, systematic diagnostic and clinical evaluation, whereas microscopic hematuria is monitored with serial urinalysis first.",
    isClinical: false,
    topic: "Hematuria",
    explanation: "الفرق بين الهيماتوريا الظاهرة والمستترة:\n- **Gross Hematuria (دم صريح)**: البول لونه أحمر زاهي أو شاي غامق وظاهر بوضوح للعين من أول لحظة، ودي حالة طارئة تقلق الأهل ولازم تقييم فوري.\n- **Microscopic Hematuria (دم مجهري)**: البول لونه طبيعي وأصفر وصافي خالص، والدم مستتر لا يُرى إلا تحت الميكروسكوب (بشرط تكرار وجود حمر كرات دم >= 3 RBC/HPF في عينتين متتاليتين)، ودي غالباً بتكتشف صدفة وبنبذل معاها هدوء وتحليل متكرر لاستبعاد الأسباب العابرة."
  },
  {
    id: "q-r2-n-6",
    chapterId: 1,
    type: "short-essay",
    title: "Standard Steroid Regimen in MCNS",
    content: "Enumerate the two main therapeutic phases (Induction and Maintenance Taper) of the curative Standard Corticosteroid Therapy (Prednisone) for Minimal Change Nephrotic Syndrome (MCNS) in children, including dosages and durations.",
    answer: "1. Induction Phase dosage: Prednisone at a dose of 60 mg/m²/day (maximum 60 mg/day) administered daily.\n2. Induction Phase duration: Maintained for 4 consecutive weeks to induce complete remission.\n3. Maintenance Taper Phase dosage: Prednisone at a dose of 40 mg/m²/day administered on alternate days.\n4. Maintenance Taper Phase duration: Maintained for 4 weeks (as per bank question update), followed by a gradual taper to avoid adrenal suppression.",
    isClinical: true,
    topic: "Nephrotic Syndrome",
    explanation: "أهم بروتوكول في طب الأطفال؛ كورس الكورتيزون الذهبي لإنقاذ النفروتيك MCNS:\n1. **Phase 1: Induction (جرعة الهجوم)**: بنمشي على جرعة **60 mg/m²/day** (الحد الأقصى 60 مجم باليوم) متوزعة يومياً بانتظام لمدة **4 أسابيع كاملين**.\n2. **Phase 2: Tapering/Maintenance (الانسحاب التدريجي)**: بنقلب الجرعة لـ **40 mg/m²** بس يوم آه ويوم لا (**Alternate days**) لمدة **4 أسابيع** (تبعاً لنسخة البنك المحدثة) ثم نسحبه ببطء لحماية الغدة الكظرية من الخمول الكلي للإنتاج الطبيعي."
  },

  // ==================== II. Chest Diseases (Bank 2) ====================
  // topic: "Croup"
  {
    id: "q-c2-c-1",
    chapterId: 2,
    type: "short-essay",
    title: "Croup Differential Diagnosis",
    content: "Enumerate 4 differential diagnoses for a child with acute upper airway stridor and croupy symptoms.",
    answer: "1. Acute Epiglottitis.\n2. Acute Bacterial Tracheitis.\n3. Sudden Aspiration of a Foreign Body.\n4. Retropharyngeal or peritonsillar abscess.",
    isClinical: true,
    topic: "Croup",
    explanation: "مش كل طفل بيكح كحة نباحية وعنده تزييق حاد في التنفس (**Stridor**) يبقى مجرد Croup بسيط! لازم نستبعد التشخيصات الفارقة الخطيرة دي:\n1. **Acute Epiglottitis**: التهاب لسان المزمار البكتيري، طوارئ مهددة للحياة.\n2. **Bacterial Tracheitis**: صديد والتهاب بكتيري حاد في القصبة الهوائية.\n3. **Foreign Body Aspiration**: بلع جسم غريب فجأة وسد مجرى الهواء.\n4. **Retropharyngeal Abscess**: خراج خلف البلعوم خانق الطريق."
  },
  {
    id: "q-c2-c-2",
    chapterId: 2,
    type: "short-essay",
    title: "Spasmodic Croup Differentiation",
    content: "Enumerate 4 clinical or historical features that explicitly differentiate \"Spasmodic Croup\" from acute viral laryngotracheobronchitis.",
    answer: "1. Spasmodic croup occurs suddenly at night with brief and less severe symptoms.\n2. There is a complete absence of a preceding viral prodrome (no runny nose or catarrh).\n3. The child is completely afebrile (no fever).\n4. Symptoms resolve rapidly within several hours.",
    isClinical: true,
    topic: "Croup",
    explanation: "إزاي تفرق الـ **Spasmodic Croup** (الكروب اللعبي/التقلصي) عن الـ **Viral Croup** (الالتهابي الفيروسي):\n- **Spasmodic Croup**: بيحصل فجأة في نص الليل، الطفل بيبدأ يكح كحة نباحية ويتخنق، بدون أي مقدمات برد أو رشح (**No viral prodrome**)، ومفيش سخونية نهائي (**Afebrile**)، والأهم إنه بيتحسن بسرعة جداً في خلال ساعات مجرد ما يتعرض لهواء بارد أو رطب.\n- **Viral Croup**: بيبدأ بـ Prodrome (رشح ورشحان وسخونية بسيطة) ويزيد بالتدريج على كذا يوم."
  },
  {
    id: "q-c2-c-3",
    chapterId: 2,
    type: "short-essay",
    title: "Airway Obstruction Management Precautions",
    content: "Enumerate 4 guidelines or precautions regarding what to avoid during the clinical management of an inflammatory upper airway obstruction.",
    answer: "1. Avoid administration of physical sedation.\n2. Avoid using opiate derivatives.\n3. Avoid prescribing expectorants or antihistamines.\n4. Avoid direct visual inspection of the oral cavity using a tongue depressor if epiglottitis is suspected.",
    isClinical: true,
    topic: "Croup",
    explanation: "محاذير ذهبية ممنوع تعملها مع أي طفل يعاني من انسداد في مجرى التنفس العلوي:\n1. **No Sedation**: ممنوع تدي مهدئات نهائياً لأنك هتقفل الـ Respiratory drive ويموت الطفل اختناقاً.\n2. **No Opiates**: ممنوع مشتقات الأفيون لنفس السبب (بتموت التنفس).\n3. **No Expectorants/Antihistamines**: ممنوع أدوية الكحة أو مضادات الهيستامين لأنها بتنشف الإفرازات وتعمل سدادات مخاطية صعبة (**Mucous plugs**).\n4. **No Tongue Depressor**: أوعى تلمس زور العيان بخافض اللسان لو شاكك في **Epiglottitis**؛ لأن ده ممكن يستثير رفلكس تشنجي (**Laryngospasm**) يقفل مجرى الهواء للأبد فوراً!"
  },

  {
    id: "q-c2-c-4",
    chapterId: 2,
    type: "short-essay",
    title: "Epinephrine Observation in Acute Croup",
    content: "Enumerate the required observation time course and the critical clinical rationale for monitoring a child with moderate to severe croup after they receive nebulized L-Epinephrine in the emergency department.",
    answer: "1. Required Observation Time Course: The child must be observed closely in the emergency department or clinic for at least 2 consecutive hours.\n2. Critical Clinical Rationale: Nebulized Epinephrine is a temporary vasoconstrictive agent. Once its vasoactive effects wear off (typically within 2 hours), the patient is at a high risk of developing severe recurrence of airway edema and rebound symptoms, requiring re-treatment or immediate hospitalization.",
    isClinical: true,
    topic: "Croup",
    explanation: "ليه بنراقب الطفل لمدة **ساعتين على الأقل** في الطوارئ بعد جلسة الـ **L-Epinephrine** المستنشق؟\n- الـ L-Epinephrine بيشتغل كـ Vasoconstrictor مؤقت بيلمس الأوعية الملتهبة ويريح الورم فوراً. لكن بمجرد ما مفعوله يخلص (في حدود ساعتين)، بيحصل حاجة اسمها **Rebound edema**، يعني الورم بيرجع تاني وبقوة! لو روحنا الطفل بدري ممكن يحصله اختناق مفاجئ في البيت يهدد حياته. الملاحظة بتأمن إن التأثير زال بأمان وبدون ارتداد للأعراض."
  },

  {
    id: "q-c2-c-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Severe Croup Emergency Case",
    content: "A 2-year-old child presents with progressive inspiratory stridor at rest, severe chest retractions, cyanosis, and a barking cough. The emergency physician establishes the diagnosis of severe croup.\n\nQuestions:\n1. What is the immediate clinical indication suggested by the presence of stridor at rest and cyanosis?\n2. Mention the precise dose and administration routes of the first-line corticosteroid indicated to treat this condition.",
    answer: "1. Severe airway obstruction indicating hospitalization and urgent medical intervention.\n2. A single dose of Dexamethasone administered at 0.6 mg/kg either intramuscularly (IM) or orally.",
    isClinical: true,
    topic: "Croup",
    explanation: "قراءة عيادية ذكية لحالة الكروب العنيف:\n1. وجود **Stridor at rest** مع زرقان (**Cyanosis**) ده معناه انسداد شديد في مجرى الهواء ومؤشر خطر يستدعي حجز فوري بالمستشفى للإنقاذ.\n2. العلاج السحري والذهبي لتقليل ورم الحنجرة هو: حقنة **Dexamethasone** بجرعة واحدة صريحة بمقدار **0.6 mg/kg** وتؤخذ إما بالفم (لو الطفل مش بيرجع) أو كـ **IM injection**."
  },

  // topic: "Epiglottitis"
  {
    id: "q-c2-e-1",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottitis vs Viral Croup",
    content: "Enumerate 4 primary differences that clinically distinguish Acute Epiglottitis from classic Viral Croup.",
    answer: "1. Epiglottitis presents with a very high-grade fever, while croup features a low-grade fever.\n2. Severe drooling of saliva is a hallmark of epiglottitis, but is completely absent in croup.\n3. A barking cough is characteristically rare or absent in epiglottitis, but defines croup.\n4. Epiglottitis peaks in older children (2-7 years), while croup affects younger infants.",
    isClinical: true,
    topic: "Epiglottitis",
    explanation: "الفرق السريري الحاسم بين **Epiglottitis** (التهاب لسان المزمار) والـ **Croup** الفيروسي:\n- **Epiglottitis**: حرارة نارية عالية جداً، سيلان لعاب مستمر (**Severe drooling**) لعدم القدرة على البلع نهائياً بسبب الورم، كحة مخنوقة وصامتة وليست نباحية، وبيصيب سن أكبر شوية (من 2 لـ 7 سنين)، وهي طوارئ من الدرجة الأولى.\n- **Croup**: حرارة بسيطة، كحة نباحية واضحة (**Barking cough**)، ومفيش ريالة أو سيلان لعاب لعجز البلع."
  },
  {
    id: "q-c2-e-2",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottitis Complications",
    content: "Enumerate 4 complications or associated systemic infections that can rarely occur during the course of acute Epiglottitis.",
    answer: "1. Pneumonia.\n2. Acute Bacterial Meningitis.\n3. Acute Otitis Media.\n4. Septic Arthritis.",
    isClinical: true,
    topic: "Epiglottitis",
    explanation: "مضاعفات الـ **Epiglottitis**: بما إن الكائن المسبب هو بكتيريا عنيفة (غالباً *H. influenzae b*)، فممكن تنتشر في الدم وتسبب مضاعفات خطيرة في أماكن تانية:\n1. **Pneumonia**: التهاب رئوي حاد.\n2. **Acute Meningitis**: التهاب السحايا الغشائي في المخ.\n3. **Septic Arthritis**: التهاب مفاصل صديدي.\n4. **Otitis Media**: التهاب الأذن الوسطى الحاد."
  },
  {
    id: "q-c2-e-3",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottis Visualization parameters",
    content: "Enumerate 4 parameters or clinical settings required to safely perform a direct diagnostic visualization of the epiglottis.",
    answer: "1. Must be performed exclusively by a highly skilled doctor.\n2. Must be conducted only within an Operating Room (OR) or an Intensive Care Unit (ICU).\n3. Requires readiness for immediate endotracheal intubation or surgical airway backup.\n4. Visualization must reveal a swollen, cherry-red epiglottis via laryngoscopy.",
    isClinical: true,
    topic: "Epiglottitis",
    explanation: "شروط فحص لسان المزمار بأمان لتجنب إغلاق المجرى الهوائي التام:\n1. يتم الفحص بواسطة **طبيب خبير جداً**.\n2. في **غرفة العمليات (OR)** أو **العناية المركزة (ICU)** حصراً.\n3. الجاهزية الكاملة للتنبيب الرغامي السريع (**Intubation**) أو شق حنجري طارئ.\n4. الفحص بيظهر لسان مزمار منتفخ وبلون أحمر كرزي مميز جداً (**Cherry-red epiglottis**)."
  },

  {
    id: "q-c2-e-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Thumb Sign Epiglottitis Case",
    content: "A 3.5-year-old child presents with a sudden onset of high fever, severe sore throat, and a complete inability to swallow, causing continuous drooling of saliva. A lateral view radiograph of the neck is performed carefully.\n\nQuestions:\n1. What specific radiological sign is expected on the lateral neck film?\n2. When should the artificial endotracheal tube safely be removed from this patient?",
    answer: "1. The Thumb Sign (representing the edematous epiglottis).\n2. After a few days, when a repeat direct laryngoscopy shows that the inflammatory edema has completely subsided.",
    isClinical: true,
    topic: "Epiglottitis",
    explanation: "قراءة حالة طفل 3.5 سنوات يعاني من ريالة وسخونية شديدة وصعوبة بلع:\n1. **Thumb Sign**: أهم علامة في الأشعة الجانبية للرقبة (**Lateral Neck X-ray**)، تظهر لسان المزمار المتورم كأنه بصمة إبهام تسد المجرى الهوائي.\n2. **Extubation**: بيتم شيل الأنبوب الحنجري بعد أيام لما الفحص المباشر (**Direct laryngoscopy**) يأكد زوال التورم والالتهاب تماماً."
  },

  // topic: "Wheezy Chest and Foreign Body Aspiration"
  {
    id: "q-c2-w-1",
    chapterId: 2,
    type: "short-essay",
    title: "Acute Wheezing causes",
    content: "Enumerate 4 acute medical conditions that can cause a sudden onset of \"Acute Wheezing\" in infants and young children.",
    answer: "1. Acute Viral Bronchiolitis.\n2. Severe bacterial bronchopneumonia.\n3. Sudden Foreign Body Aspiration.\n4. First acute episode of bronchial asthma.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration",
    explanation: "أسباب تزييق الصدر الحاد (**Acute Wheezing**) في الأطفال الرضع:\n1. **Viral Bronchiolitis**: التهاب الشعيرات الهوائية الفيروسي (السبب الأشهر للرضع).\n2. **Bronchial Asthma**: الأزمة الربوية أو الربو الشعبي الحاد.\n3. **Foreign Body Aspiration**: جسم غريب دخل مجرى الهواء فجأة.\n4. **Severe Bronchopneumonia**: التهاب رئوي بكتيري حاد وشديد يسبب ضيق وتشنج شعبي."
  },
  {
    id: "q-c2-w-2",
    chapterId: 2,
    type: "short-essay",
    title: "Differentiating noisy breathing sounds",
    content: "Enumerate 4 noisy breathing sounds that must be differentiated from true wheezing, including their character or mechanism.",
    answer: "1. Snoring: Inspiratory irregular sound due to partial nose or nasopharyngeal obstruction.\n2. Stridor: Inspiratory continuous harsh sound due to partial larynx or trachea obstruction.\n3. Grunting: Early expiratory short sound due to forced expiration against a closed epiglottis.\n4. Rattling: Irregular sound due to partial obstruction of the trachea and major bronchi by secretions.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration",
    explanation: "الفرق بين أصوات التنفس غير الطبيعية في الأطفال:\n- **Snoring (الشخير)**: صوت ملخبط أثناء الشهيق بسبب انسداد الأنف أو البلعوم الأنفي.\n- **Stridor (التزييق الحنجري)**: صوت مستمر حاد في الشهيق بسبب ضيق الحنجرة أو القصبة الهوائية.\n- **Grunting (الأنين)**: زفرة قصيرة في بداية الزفير بسبب محاولة الزفير ضد مزمار مغلق لحماية الحويصلات.\n- **Rattling (الخرخرة)**: ناتجة عن تجمع الإفرازات والمخاط في القصبة الهوائية والشعب الهوائية الكبيرة."
  },
  {
    id: "q-c2-w-3",
    chapterId: 2,
    type: "short-essay",
    title: "Impacted Foreign Body complications",
    content: "Enumerate 4 long-term localized pulmonary complications that can result from an unrecognized or untreated impacted foreign body.",
    answer: "1. Recurrent pneumonia localized in the exact same lung lobe.\n2. Formation of a lung abscess.\n3. Development of localized bronchiectasis.\n4. Segmental or lobar lung collapse.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration",
    explanation: "مخاطر ترك جسم غريب يستقر في الرئة دون تدفق أو إزالة:\n1. **Recurrent pneumonia**: التهاب رئوي متكرر في نفس الفص والمنطقة بالضبط.\n2. **Lung Abscess**: خراج صديدي متجمع حول الجسم الغريب.\n3. **Bronchiectasis**: تمدد وتلف دائم في جدران الشعب الهوائية.\n4. **Lung collapse**: انخماص كامل في فص الرئة المسدود تماماً (**Atelectasis**)."
  },

  {
    id: "q-c2-w-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Unilateral Diminished Sounds Case",
    content: "A 2-year-old boy is brought to the clinic due to recurrent chest issues. Physical exam reveals a fixed localized wheeze and unilaterally diminished breath sounds over the right lung field. Chest X-ray films are requested.\n\nQuestions:\n1. In what percentage of foreign body aspiration cases are radiographic findings completely positive/diagnostic?\n2. What specific view of chest radiography is most helpful to reveal obstructive emphysema or collapse?",
    answer: "1. Positive in only about 50% of cases.\n2. An expiratory chest radiograph film.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration",
    explanation: "تحليل كيسة طفل سنتين يعاني من تزييق في جانب واحد (**Fixed localized wheeze**) ونقص أصوات التنفس في الرئة اليمين:\n1. نسبة وضوح الشرقة في الأشعة العادية هي **50% فقط**؛ لأن معظم الأجسام الغريبة المبتلعة بتكون غير ظليلة للأشعة (**Radiolucent** مثل البلاستيك أو الأكل).\n2. الأشعة الأفضل هي **Expiratory Chest X-ray** (أشعة أثناء الزفير)؛ لأنها بتظهر احتباس الهواء وتضخم الرئة المسدودة (**Obstructive emphysema**) لعدم قدرة الهواء على الخروج منها."
  },

  // topic: "Pneumonia"
  {
    id: "q-c2-p-1",
    chapterId: 2,
    type: "define",
    title: "Define HAP and VAP",
    content: "Define \"Hospital-Acquired Pneumonia (HAP)\" and \"Ventilator-Associated Pneumonia (VAP)\".",
    answer: "Hospital-Acquired Pneumonia is a lung parenchyma inflammation that presents clinically after 2 days (48 hours) of hospital admission. Ventilator-Associated Pneumonia is a specific type of HAP that presents more than 48 hours after undergoing endotracheal intubation.",
    isClinical: false,
    topic: "Pneumonia",
    explanation: "الفرق الزمني والشروطي لتعريف عدوى المستشفيات الرئوية:\n- **HAP (الالتهاب الرئوي المكتسب من المستشفى)**: التهاب رئوي يحصل بعد مرور **48 ساعة على الأقل** من دخول الطفل للمستشفى لأي سبب تاني.\n- **VAP (الالتهاب الرئوي المصاحب للتنفس الصناعي)**: نوع خاص من الـ HAP بيحصل بعد **48 ساعة على الأقل** من تركيب الأنبوب الحنجري وجهاز التنفس الصناعي (**Intubation**)."
  },
  {
    id: "q-c2-p-2",
    chapterId: 2,
    type: "short-essay",
    title: "Pneumonia bacterial pathogens",
    content: "Enumerate 4 distinct bacterial pathogens responsible for causing community or neonatal pneumonia in children.",
    answer: "1. Streptococcus pneumoniae (Gram-positive).\n2. Staphylococcus aureus (associated with pneumatoceles and empyema).\n3. Haemophilus influenzae type b (Hib).\n4. Group B Streptococcus (predominantly in neonates).",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "البكتيريا الأشهر المسببة للالتهاب الرئوي في الأطفال:\n1. **Streptococcus pneumoniae (المكورات الرئوية)**: السبب البكتيري الرئيسي الأكثر انتشاراً في الأطفال بعد فترة حديثي الولادة.\n2. **Staphylococcus aureus (المكورات العنقودية العنيفة)**: مشهورة بعمل تجمعات هوائية (**Pneumatoceles**) وصديد بالبلورا (**Empyema**).\n3. **Haemophilus influenzae type b (الهيموفيلس)**.\n4. **Group B Streptococcus (GBS)**: رأس الحية والسبب الأول للالتهابات الرئوية في حديثي الولادة والأيام الأولى."
  },
  {
    id: "q-c2-p-3",
    chapterId: 2,
    type: "short-essay",
    title: "Pneumonia Diagnostic methods",
    content: "Enumerate 4 distinct diagnostic methods utilized to isolate or confirm the specific causative etiology of bacterial or viral pneumonia.",
    answer: "1. Blood culture isolation (though it fails to detect the organism in most patients).\n2. Polymerase Chain Reaction (PCR) on nasopharyngeal or throat swabs (preferred for rapid viral and mycoplasma detection).\n3. Bronchoalveolar Lavage (BAL) secretions culture via bronchoscopy (indicated in persistent or immunocompromised cases).\n4. Percutaneous lung aspiration guided by CT scan for culture and sensitivity.",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "طرق التعرف بدقة على الميكروب المسبب لالتهاب الرئة:\n1. **Blood Culture**: مزرعة دم (رغم إن نتيجتها إيجابية في نسبة قليلة فقط).\n2. **PCR Swab**: فحص الـ PCR من المسحات الأنف بلعومية (سريع ودقيق للفيروسات والميكوبلازما).\n3. **BAL (غسيل القصبات)**: سحب إفرازات الرئة عبر المنظار للشعب الهوائية (**Bronchoscopy**).\n4. **Lung Aspiration**: سحب عينة مباشرة من الرئة بإبرة دقيقة بتوجيه الأشعة المقطعية في الحالات الشرسة والمقاومة للمضادات."
  },
  {
    id: "q-c2-p-4",
    chapterId: 2,
    type: "short-essay",
    title: "Pneumonia Mimicking conditions",
    content: "Enumerate 4 conditions or metabolic disorders that cause tachypnea and can clinically mimic pneumonia, requiring completely different management.",
    answer: "1. Diabetic Ketoacidosis (DKA) or other inborn errors causing deep metabolic acidosis.\n2. Acute Congestive Heart Failure (presents with tachypnea, crackles, and hepatomegaly).\n3. Acute Kidney Injury (AKI) presenting with fluid overload and hypervolemic heart failure.\n4. Central Nervous System insults (like intracranial hemorrhage causing central hyperventilation).",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "حالات خطيرة تسبب تنفس سريع جداً تخدع الطبيب وتظنها التهاباً رئوياً:\n1. **DKA (حموضة الدم لمرض السكري)**: تسبب تنفس سريع وعميق جداً (**Kussmaul breathing**) لطرد ثنائي أكسيد الكربون.\n2. **Heart Failure (هبوط القلب الحاد)**: الطفل بيتنفس سريع وعنده رشح مياه في الرئة وكبد متضخم.\n3. **AKI (الفشل الكلوي الحاد)**: تسبب احتباس شديد للسوائل ورشح الرئة.\n4. **CNS Insult (أمراض المخ الحادة)**: مثل نزيف المخ الذي يستثير مركز التنفس مسبباً زيادة تهوية مركزية (**Central hyperventilation**)."
  },
  {
    id: "q-c2-p-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Pneumonia Tachypnea Case",
    content: "A 3-year-old child presents with a high fever, cough, and tachypnea. On examination, his respiratory rate is 45 breaths/minute, and he displays subcostal and intercostal retractions. Chest X-ray confirms a right lower lobe pneumonia.\n\nQuestions:\n1. Does this child's respiratory rate meet the WHO definition of fast breathing for his age?\n2. Mention the specific inpatient intravenous antibiotic protocol if this child requires hospitalization.",
    answer: "1. Yes, fast breathing for children aged 1-5 years is defined as a respiratory rate >40 breaths/minute.\n2. Intravenous Ceftriaxone (or Cefotaxime), with Vancomycin added if Staphylococcal complications are suspected.",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "تحليل كيسة طفل 3 سنوات بنهجان 45 نفس في الدقيقة:\n1. **Tachypnea Definition**: نعم، الطفل عنده نهجان معتمد؛ لأن المعدل الطبيعي حسب منظمة الصحة العالمية لمن هم بين سن سنة لـ 5 سنوات هو **أقل من 40**. لو وصل 40 فأكثر فهو نهجان (**Fast Breathing**).\n2. **Inpatient Treatment**: المضاد الوريدي الأول هو الجيل الثالث من السيفالوسبورينات (**IV Ceftriaxone / Cefotaxime**)، وبنضيف **Vancomycin** لو شاكين في عدوى عنقودية عنيفة أو صديد."
  },

  {
    id: "q-c2-p-6",
    chapterId: 2,
    type: "problem-solving",
    title: "Clinical vs Radiological Recovery in CAP",
    content: "A 3-year-old child is treated for acute uncomplicated Community-Acquired Pneumonia (CAP) with oral amoxicillin. After 72 hours, his fever resolves, his respiratory rate normalizes, and his appetite returns. However, a chest X-ray repeated by an anxious primary care doctor still reveals persistent infiltration in the left lower lobe.\n\nQuestions:\n1. What is the standard clinical guideline regarding this clinical vs. radiological recovery discrepancy in childhood CAP?\n2. How long can uncomplicated CAP radiographic abnormalities normally persist on a chest X-ray?",
    answer: "1. Clinical recovery typically occurs within 48 to 72 hours, but radiological abnormalities on X-ray can persist and clear much more slowly. A repeat X-ray is NOT indicated if the child has clinically recovered, and treating asymptomatic, resolving radiographic anomalies with prolonged or repeated courses of antibiotics must be strictly avoided.\n2. Uncomplicated CAP radiographic abnormalities can normally persist on a chest X-ray for up to 3 to 6 months.",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "الفجوة الزمنية بين الشفاء السريري والشفاء الإشعاعي للالتهاب الرئوي:\n1. **Clinical vs X-Ray**: الطفل بيتحسن سريرياً ويفوق وتنزل حرارته في غضون 48-72 ساعة من العلاج، لكن تظل الأشعة مليانة بقع والتهاب وتتحسن ببطء شديد. **ممنوع تماماً** تعيد الأشعة طالما الطفل اتحسن وصحته كويسة، وممنوع تزود كورس المضاد لمجرد تنظيف فلوح الأشعة.\n2. **Duration**: البقع الالتهابية في الأشعة ممكن تاخد من **3 إلى 6 أشهر** لحد ما تصفى تماماً في الحالات البسيطة ولا تدل على فشل العلاج."
  },
  {
    id: "q-c2-p-7",
    chapterId: 2,
    type: "short-essay",
    title: "Mycoplasma Pneumoniae Clinical Clues",
    content: "Enumerate 2 common host age and onset patterns of Mycoplasma pneumoniae (atypical) pneumonia in children, and 3 high-yield extrapulmonary clinical manifestations that point specifically to this pathogen.",
    answer: "Age and Onset Patterns:\n1. Classically affects older children (>5 years of age) and adolescents.\n2. Characterized by an insidious onset with preceding constitutional symptoms (headache, malaise, low-grade fever) and a persistent, dry, hacking cough.\nExtrapulmonary clinical manifestations:\n1. Autoimmune hemolytic anemia.\n2. Splenomegaly.\n3. Erythema multiforme (or other nonspecific skin rashes).",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "خصائص وعلامات الـ **Mycoplasma pneumoniae** (الالتهاب الرئوي اللا نموذجي):\n- **Age & Onset**: بتصيب عادةً الأطفال الكبار والأولاد بالمدرسة (أكبر من 5 سنوات)، وبتبدأ ببطء شديد وتدريجي بوجع دماغ وهمدان مع كحة جافة ومستمرة ومزعجة (**Dry hacking cough**).\n- **Extrapulmonary signs (مظاهر خارج الرئة مهمة للتشخيص)**:\n  1. أنيميا تكسيرية ذاتية مناعية (**Autoimmune hemolytic anemia**).\n  2. تضخم الطحال (**Splenomegaly**).\n  3. طفح جلدي احمراري مميز (**Erythema multiforme**)."
  },
  {
    id: "q-c2-p-8",
    chapterId: 2,
    type: "short-essay",
    title: "Pediatric COVID-19 Pneumonia Protocol",
    content: "Enumerate the 4 progressive pharmacological interventions or steps recommended for pediatric COVID-19 pneumonia management based on disease severity and oxygen requirements according to standard protocols.",
    answer: "1. Intravenous IV Remdesivir (approved for children, especially those aged 12-17 years with moderate to severe disease).\n2. Systemic Dexamethasone (indicated when there are increasing oxygen needs or a transition to mechanical ventilation).\n3. Intravenous Tocilizumab (IL-6 inhibitor) if the patient fails to respond to corticosteroids within 24 hours (indicated for ages 2-11 years).\n4. Prophylactic Anticoagulation (indicated for all adolescents and children aged >=12 years who are hospitalized).",
    isClinical: true,
    topic: "Pneumonia",
    explanation: "بروتوكول علاج الالتهاب الرئوي الشديد المصاحب لـ كورونا (COVID-19) بالأطفال:\n1. **Remdesivir**: مضاد الفيروسات الوريدي المعتمد للموجات المتوسطة والشديدة.\n2. **Dexamethasone**: كورتيزون منشط لجهاز المناعة المتضارب، يُعطى فور زيادة الحاجة للأكسجين والتنفس الصناعي.\n3. **Tocilizumab**: مضاد للإنترلوكين-6 (IL-6 inhibitor) للتحكم في عاصفة السيتوكين لو لم يستجب للكورتيزون في أول 24 ساعة.\n4. **Prophylactic Anticoagulation**: مانع للتجلط وقائي لجميع المراهقين المحجوزين بالمستشفى لوجود خطر كبير للتجلطات الرئوية."
  },

  // topic: "Bronchiolitis"
  {
    id: "q-c2-b-1",
    chapterId: 2,
    type: "short-essay",
    title: "Bronchiolitis Viral pathogens",
    content: "Enumerate 4 viral pathogens other than RSV that can be responsible for causing Acute Bronchiolitis in infants.",
    answer: "1. Parainfluenza virus.\n2. Adenovirus.\n3. Rhinovirus.\n4. Herpes virus.",
    isClinical: true,
    topic: "Bronchiolitis",
    explanation: "الفيروسات الأخرى المسببة لالتهاب الشعب الهوائية الحاد (**Bronchiolitis**):\nالمسبب الأول هو فيروس التنفسي المخلوي (**RSV**)، لكن في فيروسات تانية منافسة بتعمل نفس الصورة السريرية تماماً:\n1. **Parainfluenza virus**.\n2. **Adenovirus** (بيعمل التهاب شرس وممكن يسيب تليفات).\n3. **Rhinovirus** (فيروس البرد الشائع).\n4. **Herpes virus**."
  },
  {
    id: "q-c2-b-2",
    chapterId: 2,
    type: "short-essay",
    title: "RSV Bronchiolitis Pathophysiology",
    content: "Enumerate 4 sequence steps that describe the detailed pathophysiology of RSV-induced Bronchiolitis.",
    answer: "1. RSV infection causes a structural loss of epithelial cilia and sloughing of epithelial cells in the small airways.\n2. Accumulation of desquamated airway cells, neutrophils, and lymphocytes within the airway lumen, causing mucosal edema.\n3. Partial or complete plugging of the bronchioles, leading to localized atelectasis of some units and over-distention of others.\n4. Development of a severe ventilation-perfusion mismatch, resulting in systemic hypoxemia.",
    isClinical: true,
    topic: "Bronchiolitis",
    explanation: "التسلسل المرضي لغزو فيروس الـ RSV لشعب الرئة الرضيعة:\n1. الفيروس بيدمر أهداب الخلايا المبطنة للصبيبيات الهوائية (**Ciliated epithelium**) فتتساقط داخل المجرى.\n2. تجمع الخلايا الميتة المتساقطة مع كرات ليمفاوية ومخاط غليظ مع ورم في جدار الشعبة الهوائية.\n3. انسداد جزئي أو كلي للصبيبات الهوائية، الجزئي يحبس الهواء ويكبر الصدر والكامل ينفث فيموت خلايا الرئة المجاورة (**Atelectasis**).\n4. اضطراب التبادل الغازي والتهوية والتروية الكلية (**V/Q mismatch**)، وبالتالي نقص حاد ومستمر في أكسجين الدم وموت الخلايا."
  },
  {
    id: "q-c2-b-3",
    chapterId: 2,
    type: "short-essay",
    title: "Bronchiolitis Admission parameters",
    content: "Enumerate 4 key clinical parameters that signify a severe presentation of Bronchiolitis requiring mandatory admission.",
    answer: "1. Severe respiratory distress accompanied by a respiratory rate of 60-80/min.\n2. Presence of central cyanosis or marked pallor.\n3. Development of clinical signs of severe dehydration.\n4. Appearance of dangerous apneic spells (especially in infants under 4 months of age).",
    isClinical: true,
    topic: "Bronchiolitis",
    explanation: "مؤشرات الخطر الحتمية لحجز طفل البرونكيوليتس بالعناية أو الجناح:\n1. النهجان الشديد بمعدل يتجاوز **60 إلى 80 نفس/الدقيقة** بالدقيقة مع سحب ضلعي شديد.\n2. وجود زرقان مركزي (**Central cyanosis**) في اللسان والشفتين.\n3. علامات جفاف واضحة (**Severe dehydration**) بسبب عجزه عن الرضاعة لشدة ضيق تنفسه.\n4. نوبات توقف تنفس مفاجئة (**Apneic spells**)، خاصة في الرضع الأصغر من عمر 4 أشهر."
  },

  {
    id: "q-c2-b-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Bronchiolitis Supportive Fluids Case",
    content: "A 6-month-old infant is admitted to the hospital with respiratory distress, tachypnea, and a repetitive dry cough due to bronchiolitis. The mother asks about the utility of administering oral sedatives or systemic steroids to calm the infant's breathing.\n\nQuestions:\n1. State the clinical guidelines regarding the use of sedatives, steroids, or tracheostomy in this disease.\n2. What specific supportive fluid administration route is indicated if the infant is too distressed to feed orally?",
    answer: "1. They must be strictly avoided during the management of bronchiolitis.\n2. Parenteral fluid therapy with careful electrolyte and pH adjustment.",
    isClinical: true,
    topic: "Bronchiolitis",
    explanation: "تحليل كيسة رضيع 6 أشهر يعاني من Bronchiolitis:\n1. **الممنوعات الثلاث الصارمة**: يمنع منعاً باتاً إعطاء المهدئات السلوكية (بتموت التنفس)، والكورتيزون (ملوش أي قيمة ومثبت علمياً عدم جدواه في البرونكيوليتس)، وشق الحنجرة (الانسداد تحت الحنجرة بكثير).\n2. **الإنقاذ بالسوائل**: لو الطفل مش عارف يرضع من ضيق النفس وسرعته، بنمنع الرضاعة بالفم منعاً للشرقة والالتهاب الرئوي الكيميائي، ونحوله فوراً محاليل وريدية دقيقة (**IV fluids**)."
  },

  // topic: "Bronchial Asthma"

  {
    id: "q-c2-a-2",
    chapterId: 2,
    type: "short-essay",
    title: "Acute Asthma Physical exam findings",
    content: "Enumerate 4 physical examination findings of an acute asthma exacerbation.",
    answer: "1. Continuous expiratory wheezing with prolonged expiration and use of accessory muscles.\n2. Cyanosis and thoracic hyperinflation (barrel chest appearance).\n3. Marked tachycardia and presence of pulsus paradoxus.\n4. Palpable liver and spleen due to severe diaphragmatic downward displacement from lung hyperinflation.",
    isClinical: true,
    topic: "Bronchial Asthma",
    explanation: "أربعة علامات مذهلة في فحص طفل الأزمة الربوية الحادة:\n1. تزييق زفيري مستمر مع زفير ومجهود عضلي مساعد (**Accessory muscles**).\n2. انتفاخ الصدر وبروزه للخارج كشكل البرميل (**Chest Hyperinflation**) ونقص الأكسجين والزرقان.\n3. تسارع ضربات القلب وحدوث الـ **Pulsus paradoxus** (هبوط ضغط الدم الانقباضي أكثر من 10 ملم مع الشهيق).\n4. نزول الكبد والطحال لأسفل لدرجة تجعلها محسوسة في البطن ليس لتضخم المخرجات، بل بسبب هبوط الحجاب الحاجز لأسفل بفعل انتفاخ الرئتين الشديد بالهواء المحبوس."
  },
  {
    id: "q-c2-a-3",
    chapterId: 2,
    type: "short-essay",
    title: "Asthma Spirometry guidelines",
    content: "Enumerate 4 diagnostic guidelines or physiological findings obtained via Spirometry (Pulmonary Function Tests) that characterize Asthma in children >5 years.",
    answer: "1. Demonstration of a low baseline Forced Expiratory Volume in 1 second (FEV1).\n2. Demonstration of a reduced FEV1/FVC ratio.\n3. An increase in FEV1 greater than 9% to 12% after the inhalation of a short-acting Beta2-agonist (reversibility).\n4. A morning-to-evening variation of daily peak expiratory flow (PEF) or FEV1 equal to or greater than 20%.",
    isClinical: true,
    topic: "Bronchial Asthma",
    explanation: "تشخيص الربو باختبارات وظائف الرئة (السلاسل الذهبية للمار فما فوق 5 سنوات):\n1. انخفاض نسبة حجم الهواء المطرود في أول ثانية للزفير (**FEV1**).\n2. انخفاض نسبة الـ **FEV1 / FVC ratio** عن المعدلات الطبيعية.\n3. **Reversibility (الارتجاع والفعالية)**: تحسن الـ FEV1 بمقدار يتجاوز **9-12%** بعد استنشاق بخاخ موسع الشعب سريع المفعول (سالبوتامول).\n4. تغير قراءات جهاز قياس التدفق ذروي الأداء (**PEF**) من الصباح لليل بفرق يعادل أو يتجاوز **20%**."
  },
  {
    id: "q-c2-a-4",
    chapterId: 2,
    type: "short-essay",
    title: "Asthma Comorbidities, Onset Types, and Abdominal Pain",
    content: "Answer the following questions regarding bronchial asthma clinical presentation and comorbidities:\n1. Enumerate 3 major comorbid conditions commonly associated with asthma in children that make its management more difficult.\n2. Distinguish the triggers/causes associated with an \"acute episode\" of asthma versus an \"insidious onset\" of asthma.\n3. State the precise clinical reason why a child might experience abdominal pain during an acute asthma exacerbation.",
    answer: "1. Rhinitis, Sinusitis, and Gastroesophageal reflux.\n2. Acute episodes: Caused by exposure to irritants (e.g., cold air, noxious fumes). Insidious onset: Occurs following viral respiratory infections.\n3. Abdominal pain is due to the strenuous, hyperactive use of abdominal muscles and the diaphragm to assist in respiration.",
    isClinical: true,
    topic: "Bronchial Asthma",
    explanation: "تحليل تفصيلي لمظاهر الربو الشعبي الإكلينيكية ومصاحبات المرض:\n1. **المصاحبات المرضية (Comorbid conditions)** الثلاثة الأشهر التي تزيد من صعوبة السيطرة على الربو هي: التهاب الأنف (**Rhinitis**)، التهاب الجيوب الأنفية (**Sinusitis**)، والارتجاع المريئي (**Gastroesophageal reflux**).\n2. **بداية الأزمة (Onset)**: النوبات الحادة الفجائية (**Acute episodes**) تفجرها مهيجات مباشرة كالتعرض للهواء البارد أو الأبخرة السامة، بينما البداية التدريجية المتسللة (**Insidious onset**) تحدث عادةً تلو الإصابة بالالتهابات التنفسية الفيروسية.\n3. **ألم البطن (Abdominal pain)**: خلال النوبة الشديدة، يشتكي الطفل من آلام بالبطن نتيجة الإجهاد العضلي العنيف والاستخدام المستمر والشديد لعضلات البطن والحجاب الحاجز كمساعدات للتنفس (**Accessory muscles**)."
  },
  {
    id: "q-c2-a-5",
    chapterId: 2,
    type: "short-essay",
    title: "Asthma Laboratory Findings, Sputum, and Chest X-ray Role",
    content: "Regarding diagnostic workups and investigations for childhood bronchial asthma, address the following:\n1. Specify the characteristic blood CBC and sputum findings (including specific cell counts and details) seen in asthma patients.\n2. In spirometry (Pulmonary Function Tests), what specific FEV1 percentage decline is diagnostic of asthma during an exercise challenge test?\n3. State the precise clinical role and indication of performing a Chest X-ray (CXR) in a pediatric patient with suspected asthma.",
    answer: "1. CBC: Eosinophilia (more than 250-400 cell/mm3) and usually elevated serum IgE levels. Sputum: White, tenacious sputum showing eosinophilia and granules from disrupted cells.\n2. A worsening of FEV1 by >= 15% after an exercise challenge test.\n3. Chest X-ray is required only to exclude other possible alternative diagnoses or complications (such as pneumothorax or collapse), not to diagnose asthma itself.",
    isClinical: true,
    topic: "Bronchial Asthma",
    explanation: "الفحوصات المخبرية ودور الأشعة السينية في تشخيص الربو:\n1. **صورة الدم والبلغم (CBC & Sputum)**: يظهر في تحليل الدم زيادة خلايا الإيوزينوفيل (**Eosinophilia > 250-400 cell/mm3**) مع ارتفاع مستوى الأجسام المضادة الـ **IgE**. بينما نجد البلغم بلون أبيض ولزج (**white & tenacious**) ويتميز إجهرائياً بوجود خلايا الإيوزينوفيل وحبيبات دقيقة ناتجة عن الخلايا الممزقة.\n2. **اختبار المجهود الرياضي (Exercise Challenge Test)**: انخفاض أو تدهور كفاءة زفير الرئة الـ **FEV1 بمقدار يعادل أو يزيد عن 15%** بعد بذل مجهود بدني رياضي يعتبر محدداً ممتازاً للربو.\n3. **دور الأشعة السينية للصدر (CXR)**: الأشعة السينية **ليست لتشخيص الربو** بل تُطلب فقط لاستبعاد التشخيصات البديلة الأخرى أو كشف حدوث مضاعفات طارئة (**only to exclude other diagnoses or complications**)."
  },
  {
    id: "q-c2-a-6",
    chapterId: 2,
    type: "problem-solving",
    title: "Arterial Blood Gas Evolution in Asthma",
    content: "A 7-year-old child with severe acute asthma exacerbation is managed in the pediatric hospital. Serial Arterial Blood Gas (ABG) monitoring is requested.\n1. Describe the characteristic evolution of PCO2 from the early stages of an asthma attack to the late, worsening stage of airway obstruction.\n2. What are the typical expected changes in PO2 and arterial pH as severe obstruction progresses to a critical stage?",
    answer: "1. PCO2 is usually low in the early stages (due to hyperventilation), but becomes high (hypercapnia) as the airway obstruction worsens and the child fatigues.\n2. PO2 is typically low (hypoxemia). The arterial pH remains normal in early/moderate stages but progresses to clinical acidosis in late, severe obstruction.",
    isClinical: true,
    topic: "Bronchial Asthma",
    explanation: "دراسة وتحليل غازات الدم الشرياني (ABG) وتطوراتها الخطيرة لدى مرضى الربو:\n1. **غاز ثاني أكسيد الكربون (PCO2)**: في بداية النوبة والانسداد الخفيف، يكون الـ PCO2 **منخفضاً (Hypocapnia)** نتيجة سرعة غسيل وتدفق الأنفاس المتسارعة بالخوف والمجهود، ولكن يرتفع الـ PCO2 ويتراكم بشدة (**Hypercapnia**) عندما يسوء الانسداد وتتعب عضلات تنفس الطفل وهو مؤشر فتاك لفشل التنفس الوشيك.\n2. **غاز الأكسجين والحموضة (PO2 & pH)**: يكون ضغط الأكسجين الـ **PO2 منخفضاً** طوال مراحل الاعتدال والشدة. أما درجة حموضة الدم الـ **pH فتظل طبيعية** في المراحل الأولى والمتوسطة، لتنحدر فجأة لحموضة بالدم (**late acidosis**) في المراحل المتأخرة والحرجة جداً."
  },



  // ==================== III. Neonatology Section (Bank 2) ====================
  // topic: "Transient Cutaneous Lesions"
  {
    id: "q-n2-t-1",
    chapterId: 3,
    type: "short-essay",
    title: "Transient Cutaneous Lesions Vasomotor",
    content: "Enumerate 3 distinct benign \"Transient Cutaneous Lesions\" seen in newborns that are directly related to vasomotor instability or peripheral circulatory sluggishness.",
    answer: "1. Acrocyanosis (harmless cyanosis of hands and feet when cool).\n2. Cutis Marmorata or mottling (circulatory response to transient skin temperature fluctuations).\n3. Harlequin color change (rare division of the body into red and pale halves when lying on the side).",
    isClinical: true,
    topic: "Transient Cutaneous Lesions"
  },
  {
    id: "q-n2-t-2",
    chapterId: 3,
    type: "short-essay",
    title: "Mongolian Spots characteristics",
    content: "Enumerate 4 clinical or structural characteristics of \"Mongolian Spots\" in newborns.",
    answer: "1. Present as blue, well-demarcated areas of skin pigmentation.\n2. Most commonly located over the buttocks, back, or extremities.\n3. Seen in more than 50% of normal newborn infants.\n4. They possess no pathological significance and characteristically tend to disappear completely within the first year.",
    isClinical: true,
    topic: "Transient Cutaneous Lesions"
  },
  {
    id: "q-n2-t-3",
    chapterId: 3,
    type: "short-essay",
    title: "Milia facial properties",
    content: "Enumerate 4 distinctive properties that define \"Milia\" of the face in a newborn.",
    answer: "1. Caused by temporarily distended sebaceous glands.\n2. Present as tiny, white, pinpoint papules.\n3. Distributed predominantly across the newborn's nose and chin.\n4. They require no medical treatment and disappear spontaneously within 2 to 3 weeks of life.",
    isClinical: true,
    topic: "Transient Cutaneous Lesions"
  },

  {
    id: "q-n2-t-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Benign Bumps & Spots Case",
    content: "A 3-day-old full-term healthy infant is found to have tiny white pinpoint bumps across his nose and chin, along with a blue spot over his lower buttocks. The mother is anxious about skin diseases.\n\nQuestions:\n1. Name the two distinct transient cutaneous lesions demonstrated by this infant.\n2. What management instruction should the family physician give to the anxious mother?",
    answer: "1. Milia (on the face) and a Mongolian Spot (on the buttocks).\n2. Reassurance only; both are benign, normal, and will disappear spontaneously without treatment.",
    isClinical: true,
    topic: "Transient Cutaneous Lesions"
  },

  // topic: "Prematurity and its Complications"
  {
    id: "q-n2-p-1",
    chapterId: 3,
    type: "short-essay",
    title: "Fetal Causes of Premature birth",
    content: "Enumerate 4 distinct \"Fetal Causes\" or pregnancy complications that predispose to premature birth.",
    answer: "1. Fetal distress during labor.\n2. Severe congenital fetal anomalies.\n3. Multiple gestations (twins or triplets).\n4. Nonimmune hydrops fetalis or severe erythroblastosis.",
    isClinical: true,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n2-p-2",
    chapterId: 3,
    type: "short-essay",
    title: "Premature Renal Functions Immaturity",
    content: "Enumerate 4 clinical or laboratory criteria that describe the \"Renal Functions Immaturity\" in a premature newborn.",
    answer: "1. Preterm kidneys are structurally less able to concentrate urine efficiently.\n2. Demonstration of a significantly low baseline Glomerular Filtration Rate (GFR).\n3. Low clearance rates of both chloride and urea.\n4. Impaired capacity to handle acute fluid or electrolyte overloads.",
    isClinical: true,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n2-p-3",
    chapterId: 3,
    type: "short-essay",
    title: "Premature GI & Metabolic complications",
    content: "Enumerate 4 distinct \"Gastrointestinal and Metabolic\" complications that frequently occur in premature infants.",
    answer: "1. Difficulties with oral feeding due to absent suckling/swallowing coordination.\n2. Development of Necrotizing Enterocolitis (NEC).\n3. High risk of severe neonatal hypoglycemia.\n4. High risk of early-onset neonatal hypocalcemia.",
    isClinical: true,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n2-p-4",
    chapterId: 3,
    type: "short-essay",
    title: "Preterm Immunization guidelines",
    content: "Enumerate 4 core parameters regarding the \"Immunization of Preterm Infants\" chronological age guidelines and precautions.",
    answer: "1. Obligatory vaccines must be given in full standard doses at their chronological postnatal age (not postconceptual age).\n2. Oral Polio Vaccine (OPV) is strictly contraindicated in the hospital ward; Inactivated Polio Vaccine (IPV) must be used.\n3. If the preterm infant remains hospitalized at the time of vaccination, acellular DPT should be administered.\n4. In infants with documented brain instability, the pertussis component is strictly contraindicated.",
    isClinical: true,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n2-p-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Preterm Bloody Stools Case",
    content: "A premature infant born at 29 weeks of gestation is being managed in the NICU. On day 5 of life, the nurse reports that the infant has developed an increased respiratory effort, abdominal distention, and passes stools contaminated with gross blood. Plain abdominal radiographs confirm pneumatosis intestinalis.\n\nQuestions:\n1. What major gastrointestinal emergency has this preterm infant developed?\n2. Enumerate 2 initial medical management steps required immediately for this condition.",
    answer: "1. Neonatal Necrotizing Enterocolitis (NEC).\n2. Complete cessation of oral feeding (keeping the baby NPO) with nasogastric decompression, and starting broad-spectrum intravenous antibiotics.",
    isClinical: true,
    topic: "Prematurity and its Complications"
  },
  {
    id: "q-n2-p-6",
    chapterId: 3,
    type: "define",
    title: "Define prematurity",
    content: "Define \"Prematurity\" according to the World Health Organization (WHO).",
    answer: "Prematurity is defined as any live-born infant delivered before 37 completed weeks of gestation (less than 37 completed weeks).",
    isClinical: false,
    topic: "Prematurity and its Complications",
    explanation: "التعريف الرسمي للـ Prematurity حسب منظمة الصحة العالمية:\n- **Premature Infant**: هو أي طفل يولد حيًا قبل إتمام **37 أسبوعًا** من الحمل (أي < 37 completed weeks)."
  },
  {
    id: "q-n2-p-7",
    chapterId: 3,
    type: "short-essay",
    title: "Maternal causes of prematurity",
    content: "Enumerate 4 distinct \"Maternal Causes\" (pregnancy-related or non-pregnancy related) that predispose to prematurity.",
    answer: "1. Extreme maternal age (<20 or >40 years).\n2. Pregnancy-related complications (e.g., pre-eclampsia, placenta previa, abruptio placentae, chorioamnionitis, incompetent os, or PROM).\n3. Chronic maternal illnesses (e.g., Diabetes Mellitus, heart/renal diseases, or active infections).\n4. Maternal trauma or substance/drug abuse.",
    isClinical: true,
    topic: "Prematurity and its Complications",
    explanation: "الأسباب المتعلقة بالأم (Maternal Causes) التي تؤدي لولادة طفل مبتسر:\n1. **العمر**: أقل من 20 سنة أو أكثر من 40 سنة.\n2. **مضاعفات الحمل**: زي تسمم الحمل (Pre-eclampsia)، انفصال المشيمة (Abruption)، المشيمة المنزاحة (Placenta previa)، التهاب السائل الأمنيوسي (Chorioamnionitis) أو اتساع عنق الرحم (Incompetent os)، وتدلي الغشاء الأمينوسي المبكر (SROM/PROM).\n3. **أمراض مزمنة**: زي مرض السكر (DM)، أمراض القلب أو الكلى، والعدوى.\n4. **أخرى**: التعرض لتروما أو إساءة استخدام العقاقير (Drug abuse)."
  },
  {
    id: "q-n2-p-8",
    chapterId: 3,
    type: "short-essay",
    title: "Lines of feeding",
    content: "Enumerate the clinical methods or \"Lines of feeding\" utilized for premature infants based on their neurological and physical development.",
    answer: "1. Suck and Swallow method (via breast or bottle) for infants with coordinated reflexes.\n2. Swallow only method (via dropper or spoon) for infants who can swallow but lack strong sucking coordination.\n3. Gavage feeding / Nasogastric (NG) tube or Intravenous Fluids (IVF) for infants who have neither coordinated sucking nor swallowing reflexes.",
    isClinical: true,
    topic: "Prematurity and its Complications",
    explanation: "طرق ومستويات تغذية الأطفال المبتسرين حسب تطورهم العصبي والفسيولوجي:\n1. **Suck/Swallow** (الرضاعة الطبيعية أو الببرونة): للطفل المستقر اللي عنده المنعكسات دي شغالة ومنسقة.\n2. **Swallow only** (بالقطارة أو الملعقة Dropper/Spoon): للطفل اللي بيقدر يبلع بس معندهوش قدرة يمص بقوة.\n3. **Neither NG tube/IVF** (الأنبوب الأنفي المعدي أو المحاليل الوريدية): للطفل اللي مش بيقدر يمص ولا يبلع، أو حالته غير مستقرة لمنع حدوث مضاعفات كالاختناق أو الـ NEC."
  },



  // topic: "Complications of Indirect Hyperbilirubinemia"
  {
    id: "q-n2-ci-1",
    chapterId: 3,
    type: "short-essay",
    title: "Free Bilirubin Kernicterus factors",
    content: "Enumerate 4 distinct systemic or clinical factors that increase the concentration of \"Free Bilirubin\" or disrupt the blood-brain barrier, predisposing to Kernicterus.",
    answer: "1. Severe unconjugated hyperbilirubinemia exceeding safe thresholds.\n2. Significant hypoalbuminemia.\n3. Systemic neonatal acidosis or severe hypoxia.\n4. Neonatal sepsis or overwhelming infection.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia"
  },
  {
    id: "q-n2-ci-2",
    chapterId: 3,
    type: "short-essay",
    title: "Acute Kernicterus Phase 2 signs",
    content: "Enumerate 4 clinical signs characteristic of Phase 2 (middle of the first week) of the acute form of Kernicterus.",
    answer: "1. Marked hypertonia of the extensor muscles.\n2. Opisthotonos (severe backward arching of the spine).\n3. Retrocollis (backward arching of the neck).\n4. Development of a high fever and a bulging anterior fontanel.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia"
  },
  {
    id: "q-n2-ci-3",
    chapterId: 3,
    type: "short-essay",
    title: "Chronic Kernicterus neurological deficits",
    content: "Enumerate 4 clinical/neurological deficits in chronic Kernicterus by year 3.",
    answer: "1. Bilateral choreoathetosis and extrapyramidal movement disorders.\n2. High-frequency sensorineural hearing loss.\n3. Mental deficiency or cognitive impairment.\n4. Squinting and defective upward movement of the eyes.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia"
  },
  {
    id: "q-n2-ci-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Rh incompatibility Hypertonia Case",
    content: "A 3-day-old infant with severe Rh incompatibility demonstrates poor sucking, loss of the Moro reflex, hypotonia, and intermittent seizures. His total serum bilirubin is 28 mg/dL and is entirely unconjugated.\n\nQuestions:\n1. What specific phase of Acute Kernicterus do these neurological signs represent?\n2. Mention the specific calculation parameter used to execute an emergency Exchange Transfusion for this infant.",
    answer: "1. Phase 1 (early manifestations of acute bilirubin encephalopathy).\n2. Infusion of a volume equal to two blood volumes of the infant (2 x 85 mL/kg) using fresh, compatible blood.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia"
  },

  // topic: "Neonatal Sepsis"
  {
    id: "q-n2-s-1",
    chapterId: 3,
    type: "short-essay",
    title: "Neonatal Sepsis Risk Factors",
    content: "Enumerate 4 distinct \"Neonatal or Obstetric Risk Factors\" that are strongly correlated with an increased risk of Neonatal Sepsis.",
    answer: "1. Prematurity (the single most important risk factor).\n2. Premature Rupture of Membranes (PROM) lasting longer than 24 hours.\n3. Maternal peripartum fever (>=38°C) or documented chorioamnionitis.\n4. Cloudy, foul-smelling, or meconium-stained amniotic fluid.",
    isClinical: true,
    topic: "Neonatal Sepsis"
  },
  {
    id: "q-n2-s-2",
    chapterId: 3,
    type: "short-essay",
    title: "Early-Onset Sepsis criteria",
    content: "Enumerate 4 clinical criteria or organ system manifestations that define the presentation of \"Early-Onset Sepsis\".",
    answer: "1. Manifestations are present at birth or within the first week (usually <3 days) of life.\n2. Presents as a rapid, fulminant multi-system illness.\n3. Organisms are typically acquired during the intrapartum period from the maternal genital tract.\n4. Strongly associated with a history of maternal obstetric complications.",
    isClinical: true,
    topic: "Neonatal Sepsis"
  },
  {
    id: "q-n2-s-3",
    chapterId: 3,
    type: "short-essay",
    title: "Neonatal Sepsis screen criteria",
    content: "Enumerate 4 septic screen / hematologic criteria for Neonatal Sepsis.",
    answer: "1. Marked neutropenia (a strong indicator of severe sepsis).\n2. An elevated ratio of immature band cells to total neutrophils greater than 0.2.\n3. Total platelet count showing significant thrombocytopenia (late finding).\n4. Highly elevated acute-phase reactants, specifically C-Reactive Protein (CRP) and ESR.",
    isClinical: true,
    topic: "Neonatal Sepsis"
  },

  {
    id: "q-n2-s-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Sepsis Score threshold Case",
    content: "A 10-day-old term infant is brought to the clinic. The nurse scores the infant using the Clinical Sepsis Score criteria. The infant demonstrates: 1) poor feeding and lethargy, 2) cold clammy skin with poor peripheral circulation, and 3) marked abdominal distension with vomiting.\n\nQuestions:\n1. Based on the Clinical Sepsis Score, does this infant require immediate empiric antibiotic therapy for suspected sepsis?\n2. Mention the standard empiric intravenous antibiotic combination initially used to treat neonatal sepsis.",
    answer: "1. Yes, the infant demonstrates 3 positive clinical score parameters (behavioral, circulatory, and gastrointestinal signs), which meets the threshold (score >=3) for high clinical suspicion.\n2. Ampicillin plus an Aminoglycoside (such as Gentamicin), or Ceftriaxone.",
    isClinical: true,
    topic: "Neonatal Sepsis"
  },

  // ==================== IV. Emergency Section (Bank 2) ====================


  // topic: "Shock"
  {
    id: "q-e2-s-1",
    chapterId: 4,
    type: "short-essay",
    title: "Obstructive Shock causes",
    content: "Enumerate 4 distinct clinical or structural causes that result in \"Obstructive Shock\" in children.",
    answer: "1. Tension pneumothorax or hemothorax.\n2. Cardiac tamponade secondary to severe pericardial effusion.\n3. Critical congenital obstructive heart lesions (critical aortic stenosis or coarctation).\n4. Massive pulmonary embolism.",
    isClinical: true,
    topic: "Shock",
    explanation: "أشهر مسببات حدوث الصدمة الانسدادية الميكانيكية الـ **Obstructive shock** في طب الأطفال:\n1. استرواح الصدر المتوتر وضيق الهواء الحبيس بالبلورة الضاغط على الأوردة الحامية للقلب.\n2. تجمع سوائل والتهاب تام بعضلة غلاف القلب الخانق للراحة الحجرية للبطينين (**Cardiac tamponade**).\n3. العيوب الخلقية لانسداد ممر هبوط الشريان الأورطي للدم للبدن كالتضيقات الصارمة بالصمام.\n4. جلطات الشرايين الرئوية العملاقة السدودة لمسار التبادل الغازي."
  },
  {
    id: "q-e2-s-2",
    chapterId: 4,
    type: "short-essay",
    title: "Uncompensated Shock findings",
    content: "Enumerate 4 classic clinical findings that signify the transition from compensated shock to \"Uncompensated Shock\".",
    answer: "1. A significant, documented fall in systolic blood pressure (arterial hypotension).\n2. Development of severe systemic metabolic acidosis.\n3. Onset of profound oliguria or anuria.\n4. Progressive reduction in the level of consciousness (lethargy, stupor, or coma).",
    isClinical: true,
    topic: "Shock",
    explanation: "علامات ومؤشرات عبور الصدمة المعوضة البسيطة وانزلاقها للمرحلة غير المعوضة الوشيكة للتلف والوفاة:\n1. هبوط حاد وصدمة بمستويات قياس ضغط الدم الشرياني الانقباضي.\n2. انفجار وحموضة تروية الدم العميقة بتنامي معايير الـ Lactic acid.\n3. تراجع شديد للبول ليصبح شحيحاً أو منعدماً كلياً لعجر الدم عن كلى المريض.\n4. التدهور الملحوظ بمستويات تيقظ وتركيز عقل الطفل بمظهر ذابل تائه أو غيبوبة."
  },
  {
    id: "q-e2-s-3",
    chapterId: 4,
    type: "short-essay",
    title: "Severe Shock monitoring parameters",
    content: "Enumerate 4 parameters monitored in severe shock.",
    answer: "1. Serial Arterial Blood Gases (ABGs) and serum lactic acid levels.\n2. Renal function tests and serum electrolytes.\n3. Coagulation profile and platelet count to screen for DIC.\n4. Invasive hemodynamic monitoring including Central Venous Pressure (CVP) and cardiac output.",
    isClinical: true,
    topic: "Shock",
    explanation: "المعايير المراقبة والمقاسة بدقة بالغة بمرضى الصدمة الصعبة بالعناية المركزة (PICU Monitor):\n1. الغازات الشريانية وتنامي حمض اللاكتيك المتنفس عن تدهور خلايا الأعضاء.\n2. مراقبة وظائف وفحوصات كلى الطفولة الكرياتينين والأملاح بالتروية والتحليل.\n3. عمل ومتابعة اختبارات تخثر الدم والسيولة لشكوى الـ DIC السامة.\n4. وخذ ومتابعة ضغط الدم والضغط الوريدي المركزي المسمى **CVP** لقياس حجم تروية الدم."
  },

  {
    id: "q-e2-s-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Anaphylactic Distributive Shock Case",
    content: "A 12-year-old girl is rushed to the emergency department after an insect sting. She has an explosive generalized skin rash, severe wheezing, cold extremities, and a drop in blood pressure. The diagnosis of anaphylactic distributive shock is made.\n\nQuestions:\n1. What is the immediate first-line medication of choice for this condition, including its proper route?\n2. Enumerate 2 adjuvant intravenous drugs that should be administered next to manage this allergic shock.",
    answer: "1. Epinephrine (Adrenaline) administered subcutaneously (SC) or intravenously (IV).\n2. Hydrocortisone IV and an Antihistaminic IV agent.",
    isClinical: true,
    topic: "Shock",
    explanation: "تحليل طفلة الحساسية المنهارة صدمة الحشرات والحقن:\n1. مضاد الإنقاذ الأول والقاتل لتهيج شرايين الحساسية هو هرمون الـ **Epinephrine** بحقن خارجي دقيق بالعضل أو الوريد.\n2. الأدوية المساعدة اللاحقة لترويض التفاعل والالتهاب الوعائي هي حقن الكورتيزون الوريدية ومضادات الهيستامين الحادة."
  },

  // topic: "Coma"
  {
    id: "q-e2-co-1",
    chapterId: 4,
    type: "short-essay",
    title: "Secondary Systemic Coma encephalopathies",
    content: "Enumerate 4 secondary metabolic encephalopathies causing Coma.",
    answer: "1. Hypoxic encephalopathy secondary to severe prolonged shock or anemia.\n2. Endogenous encephalopathy due to severe dehydration and metabolic acidosis.\n3. Diabetic Ketoacidosis (DKA) or profound hypoglycemia.\n4. Acute organ failure encephalopathy (acute renal failure or acute hepatic failure).",
    isClinical: true,
    topic: "Coma",
    explanation: "غيبوبة الضعيات الاستقلابية الناتجة عن بلايا أزمة وظائف البدن خارج الدماغ وعلاجها:\n1. تلف خلايا الأكسيجين بسبب الصدمة الطويلة والأورام المنتفية بالتهوية.\n2. غيبوبة الجفاف والتركيز المتضاعف لحموضة الدم بالأيونات الخاطئة.\n3. صدمة غيبوبة كيتونات السكر أو تلف التروية الشحومية السكرية.\n4. غيبوبة تراكم السموم البوليلية للفشل العضلي الكبدي والكلوي المتكامل."
  },
  {
    id: "q-e2-co-2",
    chapterId: 4,
    type: "short-essay",
    title: "Meningeal Irritation signs in coma",
    content: "Enumerate 4 signs of Meningeal Irritation.",
    answer: "1. Neck rigidity (nuchal rigidity).\n2. Neck retraction.\n3. Positive Kernig's sign.\n4. Positive Brudzinski's sign.",
    isClinical: true,
    topic: "Coma",
    explanation: "أهم 4 علامات إكلينيكية تكشف تهيج الأغشية السحائية الكامنة للمخ بغيبوبة الطفل:\n1. تيبس وصلابة عضلات الرقبة لمقاومة الانحناء الأمامي (**Nuchal rigidity**).\n2. التقهقر الرقبي مع تقوس الظهر الخلفي.\n3. علامة **Kernig** الإيجابية للوجع عند فرد ركبة الفخذ القائم.\n4. علامة **Brudzinski** بانقباض الركبتين تلقائياً عند ثني الرقبة للأمام."
  },
  {
    id: "q-e2-co-3",
    chapterId: 4,
    type: "short-essay",
    title: "Comatose patient preservation parameters",
    content: "Enumerate 4 nursing/medical care parameters for a comatose patient.",
    answer: "1. Administration of antacids or H2 blockers to prevent stress ulcers.\n2. Use of laxatives to prevent chronic constipation.\n3. Routine instillation of protective eye drops and ointments to prevent corneal drying.\n4. Frequent changes of body position combined with skin care to prevent infection and bedsores.",
    isClinical: true,
    topic: "Coma",
    explanation: "شؤون وأولويات تمريض ومعالجة مريض الغيبوبة الطويلة لحمايته من البلاء والتقرح:\n1. تنشيط ودعم المعدة وحمايتها من أشرار قرح التوتر المدمية بأمبولات واقية حاسمة.\n2. استخدام الملينات والمساندات لمنع تيبس الفضلات وعرقلة الأمعاء.\n3. تروية وترطيب القرنية لحماية عينه المغمضة الضعيفة بقطرات ومراهم جيل دموع صناعية متلاحقة.\n4. تقليب مستمر دوري للبدن والجلد مع العناية بمظهر الجسم تفادياً لالتقاط تقرحات الفراش الخبيثة."
  },

  {
    id: "q-e2-co-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Increased Intracranial Pressure Coma Case",
    content: "A 4-year-old child presents in a deep coma. Physical examination reveals a bulged anterior fontanel, hypertonia, hyperreflexia, and a sluggish pupillary response to light. The physician diagnoses acute increased intracranial pressure.\n\nQuestions:\n1. What is the initial physical positioning technique indicated to enhance cerebral venous return?\n2. Mention the primary osmotic diuretic drug, including its standard effective dose, used to reduce this pressure.",
    answer: "1. Head elevation to 30 degrees in a neutral midline position.\n2. Intravenous Mannitol administered at a dose ranging from 0.25 to 0.5 g/kg.",
    isClinical: true,
    topic: "Coma",
    explanation: "تتبع علاج حالات الرأس وارتفاع الضغط للمخ الـ ICP بالفحص والدواء:\n1. طريقة التموضع المثالية بالوسادة هي توجيه رفع الرأس بزاوية 30 درجة لراحة وتسهيل الجريان الدموي الهابط.\n2. العلاج الأسموزي المقبول لسحب المياه والورم خارج كبسولة الرأس هو حقن الوريد المدر الكيميائي **Mannitol** بتركيز فاعل وبجرعة 0.25 إلى 0.5 g/kg."
  },

  // topic: "Glasgow Coma Scale and its Advantages"
  {
    id: "q-e2-g-1",
    chapterId: 4,
    type: "short-essay",
    title: "GCS Detailed Components",
    content: "Enumerate the points breakdown for each component of the Glasgow Coma Scale (Eye, Verbal, Motor).",
    answer: "1. Eye Opening (Total 4): Spontaneous (4), To voice (3), To pain (2), None (1).\n2. Verbal Response (Total 5): Oriented/appropriate (5), Confused/consolable (4), Inappropriate words/irritable (3), Incomprehensible/restless (2), None (1).\n3. Motor Response (Total 6): Obeys (6), Localizes pain (5), Withdraws (4), Flexion (3), Extension (2), None (1).",
    isClinical: true,
    topic: "Glasgow Coma Scale and its Advantages",
    explanation: "تفاصيل نقاط مقياس غلاكسو للوعي:\n1. **فتح العين (4 نقاط)**: تلقائي (4)، للصوت (3)، للألم (2)، لا يوجد (1).\n2. **الاستجابة اللفظية (5 نقاط)**: طبيعية (5)، مرتبك (4)، كلمات غير مناسبة (3)، أصوات غير مفهومة (2)، لا يوجد (1).\n3. **الاستجابة الحركية (6 نقاط)**: يطيع الأوامر (6)، يحدد مكان الألم (5)، ينسحب من الألم (4)، انثناء (3)، انبساط (2)، لا يوجد (1)."
  },
  {
    id: "q-e2-g-2",
    chapterId: 4,
    type: "short-essay",
    title: "Pediatric GCS Verbal Scoring",
    content: "Describe the scoring for the Verbal Response specifically for infants and young children.",
    answer: "1. Appropriate words, smiles, fixes, and follows: 5 points.\n2. Consolable crying: 4 points.\n3. Persistent irritable crying: 3 points.\n4. Restless, agitated: 2 points.\n5. None: 1 point.",
    isClinical: true,
    topic: "Glasgow Coma Scale and its Advantages",
    explanation: "تقييم النطق للرضع وصغار الأطفال:\n1. كلمات مناسبة، ابتسام، تثبيت النظر والمتابعة: 5 نقاط.\n2. بكاء يمكن تهدئته: 4 نقاط.\n3. بكاء مستمر غير هادئ: 3 نقاط.\n4. قلق وتوتر: 2 نقطة.\n5. لا يوجد: 1 نقطة."
  },

  {
    id: "q-e2-g-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Infant GCS Scoring Case",
    content: "An 18-month-old infant following head trauma opens his eyes to voice, emits persistent irritable crying, and localizes the painful stimulus.\n\nQuestions:\n1. Calculate the Eye, Verbal, and Motor scores.\n2. What is the total composite GCS score?",
    answer: "1. Eye (3) + Verbal (3) + Motor (5).\n2. Total GCS Score = 11.",
    isClinical: true,
    topic: "Glasgow Coma Scale and its Advantages",
    explanation: "حساب وعي الرضيع:\n1. النقاط: العين للصوت (3) + اللفظي بكاء مستمر (3) + الحركي تحديد الألم (5).\n2. المجموع النهائي: **11**."
  },

  // topic: "Shock"
  {
    id: "q-e3-sh-1",
    chapterId: 4,
    type: "problem-solving",
    title: "Cardiogenic Shock in Myocarditis Case",
    content: "An 8-year-old boy diagnosed with severe acute viral myocarditis presents to the emergency room in severe shock. On examination, he is tachycardic, has a raised jugular venous pressure (JVP), an audible gallop rhythm on cardiac auscultation, wet lung crepitations on breathing, and a tender, enlarged liver.\n\nQuestions:\n1. What is the specific type of shock this patient is presenting with?\n2. What is the physiological goal of contractility augmentation, and which vasoactive drug is indicated if his baseline blood pressure is still within normal limits?",
    answer: "1. Cardiogenic shock (as defined by myocardial dysfunction and signs of pump failure under cardiorespiratory assessment).\n2. Goal & Drug: The goal is to support and improve myocardial contractility and stroke volume. The indicated drug for low cardiac output with a normal baseline blood pressure is Dobutamine (administered at 5 - 20 mcg/kg/min IV).",
    isClinical: true,
    topic: "Shock",
    explanation: "تحليل ومواجهة حالة صدمة عضلة القلب المعتلة بفيروسات الصدر للرضع:\n1. التشخيص الدقيق هو صدمة القلب المباشرة (**Cardiogenic shock**) بالاستناد لأمارات هبوط المضخة والضخ مع ارتفاع وريد الرقبة الـ JVP وتورم الكبد بفعل الاحتقان الرئوي والكبدي العنيف.\n2. الواسم السحري لحث انقباض وتأمين مخرجات الضربات للدم بدون هدم ضغط شرايينه هو منبع أمبولات الـ **Dobutamine** بجرعة وريدية تتراوح بين 5 - 20 mcg/kg/min."
  },
  {
    id: "q-e3-sh-2",
    chapterId: 4,
    type: "short-essay",
    title: "Clinical Grading of Shock",
    content: "Enumerate the 4 progressive \"Clinical Grades\" of shock, including their core definitions and clinical features according to pediatric shock grading.",
    answer: "1. Grade I (Early Shock): Characterized by peripheral tissue hypoperfusion, marked tachycardia, and signs of poor capillary refill with preserved central blood pressure.\n2. Grade II (Established Shock): Characterized by arterial hypotension, poor peripheral perfusion, and systemic hypotension.\n3. Grade III (Advanced Shock): Characterized by vital organ hypoperfusion and the clinical onset of Multiple Organ System Failure (MOSF).\n4. Grade IV (Irreversible Shock): Characterized by irreversible systemic cellular damage, profound refractory metabolic acidosis, and eventual death.",
    isClinical: true,
    topic: "Shock",
    explanation: "المراحل السريرية المتتابعة الأربعة لتفاقم صدمة الطفولة الصدرية وحصادها:\n1. الدرجة الأولى الـ **Grade I (المعوضة)**: تتميز بنبض سريع وتضيق أوعية الجلد لامتلاء ال CRT والمحافظة الكاملة لخط ضغط البدن الانقباضي سليماً.\n2. الدرجة الثانية الـ **Grade II (المتأسسة)**: انهيار الضغط وهبوطه الواضح مع فقد التروية الجلدية للأطراف.\n3. الدرجة الثالثة الـ **Grade III (المتقدمة)**: تعطل تروية ونبض الكلى والأعضاء وإصابتها بالعجز والقصور لتبدأ علامات تدمير كفاءة الأجهزة.\n4. الدرجة الرابعة الـ **Grade IV (المخربة المهلكة)**: تلف وعطب دائم للخلايا وفساد كيميائي بالحموضة لا يرجع منه الطفل ولو تدفقت المحاليل والمساندات المذكورة لتنتهي السطور بالوفاة."
  },
  {
    id: "q-e3-sh-3",
    chapterId: 4,
    type: "short-essay",
    title: "Pediatric Circulatory Compensation Limits",
    content: "Explain the formula for oxygen delivery (DO2), how cardiac output is calculated, and explain why pediatric patients are at high risk of sudden deterioration when compensating in shock.",
    answer: "1. Oxygen Delivery (DO2) Formula: DO2 = Cardiac Output (CO) x Oxygen Content of blood.\n2. Cardiac Output Calculation: CO = Heart Rate (HR) x Stroke Volume (SV).\n3. Compensation Risk: Children compensate for circulatory inadequacy by significantly increasing their Heart Rate and Systemic Vascular Resistance (SVR). However, due to an immature and non-compliant myocardium, they cannot significantly increase their Stroke Volume. Therefore, when maximum tachycardia and constriction margins are exhausted, they suffer high risk of sudden, catastrophic circulatory collapse.",
    isClinical: true,
    topic: "Shock",
    explanation: "القواعد الفسيولوجية المفسرة للانهيار الوعائي المفاجئ والقاتل بقلب شرايين الأطفال:\n1. قانون تروية الأكسجين للبدن ومخرج الضخ القلبي يتمثل تالياً: الضخ القلبي = ضربات السهم القلبي بالدقيقة (Heart Rate) مضروبة بقيمة حجم الضرب المنفث بكل نبضة (Stroke Volume).\n2. لغز الطفولة يكمن في قصور عضلات بطين الطفل الصغير عن التمدد والضخ اللين الكافي لحجم الضرب الواحد، فيعيش معتمداً على زيادة ضربات القلب وتسارع التنفس للدفاع والتعويض الصامت. فحينما يبلغ هذا التسارع الشرس حدوده العظمى للتعب العضلي، يسقط الطفل دفعة واحدة بانهيار دوري فجائي وقاتل بلا مقدمات هبوطية لينة تدريجية."
  },
  {
    id: "q-e3-sh-4",
    chapterId: 4,
    type: "short-essay",
    title: "MOSF Manifestations in Shock",
    content: "Enumerate the affected organ systems and their clinical/laboratory manifestations in Multiple Organ System Failure (MOSF) following untreated advanced shock.",
    answer: "1. Kidneys: Acute renal failure characterized by oliguria and metabolic acidosis.\n2. Lungs: ARDS (Acute Respiratory Distress Syndrome).\n3. Brain: Hypoxic Ischemic Encephalopathy characterized by distress, convulsions, or coma.\n4. GIT: Ischemia, stress ulcers, hemorrhage, or dynamic ileus.\n5. Blood System: DIC (Disseminated Intravascular Coagulation) and thrombocytopenia.\n6. Heart: Myocardial ischemia and serious ventricular arrhythmias.\n7. Liver: Acute hepatic failure.\n8. Metabolic: Severe progressive lactic acidosis and electrolyte disturbances.",
    isClinical: true,
    topic: "Shock",
    explanation: "تلف وتفتيت الغزو الميكروبي لصدمات الدم وتدمير أجهزة الجسم الـ MOSF:\n1. كليتا الطفل: قصور تام وبولينا واحتباس وعطب للأملاح وحامض الفوسفور.\n2. الصدر: حموضة ورشح وتلف حويصلات الرئة ARDS.\n3. المخ والدماغ: غيبوبة وتائه وهياج وتشنجات عضلية مستثارة.\n4. الجهاز الهضمي والبطن: احتقان وكسل معوي وتقرح مدمٍ بالمعدة.\n5. تماسك الدم وسيولته: صدمة التخثر المنتثر بالدم الـ DIC ونفاد صفائح التجلط الحامية للشرايين وموت خلايا الكبد التامة بالسم."
  },

  // topic: "Coma"
  {
    id: "q-e3-co-1",
    chapterId: 4,
    type: "short-essay",
    title: "Clinical Grading of Coma",
    content: "Enumerate the 4 clinical grades of Coma, including their defining arousal states and behavioral reactions to painful stimuli.",
    answer: "1. Grade I (Stupor): The comatose patient can be aroused for only a short period of time (less than a minute).\n2. Grade II (Light Coma): The patient cannot be aroused by painful stimuli, but responds to pain with purposeful withdrawal movements.\n3. Grade III (Deep Coma): There is absolutely no motor response to painful stimuli, but the patient continues to breathe spontaneously.\n4. Grade IV (Deep Coma with Apnea): There is no response to painful stimuli accompanied by apnea. Brain death occurs within 5 minutes if mechanical ventilation is not instituted.",
    isClinical: true,
    topic: "Coma",
    explanation: "التصنيفات والدرجات الإكلينيكية الأربعة لغيبوبة طوكيو والطب السريري (Coma Grading):\n1. المرتبة الأولى **Grade I (الوهن العضلي/Stupor)**: يمكن إيقاظ وتنبيه عقل الطفل البائس لفترة وجيزة جداً تقل عن الـ دقيقة واحدة فقط ليرتد نائماً.\n2. المرتبة الثانية **Grade II (الغيبوبة الخفيفة)**: لا فواق بالنداء أو الصوت، ولكنه يحرك ذراعه أو قدمه بدفاع وتكتيك هادف هارب للتخلص من وخز الألم.\n3. المرتبة الثالثة **Grade III (الغيبوبة العميقة)**: غياب واختفاء كلي لأي حركة عضلية مدافعة للألم أو وخز الحقن، ولكنه لا يزال يحافظ على الأنفاس وحركة صدره رغماً عن الغياب.\n4. المرتبة الرابعة **Grade IV (الوفاة الدماغية الكلية/Deep Coma with Apnea)**: غياب تام وصامت عن اللفظ والحركة مع توقف الأنفاس وتسطح الصدر لتحدث الوفاة السريرية والنهائية خلال 5 دقائق لو حجب التهوية الاصطناعية الميكانيكية الرعائية."
  },
  {
    id: "q-e3-co-2",
    chapterId: 4,
    type: "short-essay",
    title: "Coma Causes: Primary vs Secondary Brain Lesions",
    content: "Explain the structural difference between Primary and Secondary Brain Lesions causing pediatric coma, and Enumerate 4 causes of Primary Brain Lesions.",
    answer: "1. Structural Difference: Primary brain lesions arise from direct structural pathology, infections, or trauma within the central nervous system itself. Secondary brain lesions (encephalopathies) arise from systemic or metabolic disturbances outside the brain (like hypoxia, metabolic acidosis, organ failures, or poisonings) that secondarily impair cerebral cortical function.\n2. Causes of Primary Brain Lesions:\n   - Intracranial infections (e.g., meningitis, encephalitis, or brain abscess).\n   - Intracranial hemorrhage (traumatic or non-traumatic such as Hemophilia, DIC, ITP, aneurysmal rupture, A-V malformation).\n   - Cerebral infarction.\n   - Status epilepticus.\n   - Brain tumors.",
    isClinical: true,
    topic: "Coma",
    explanation: "التمييز بين مسببات إصابة خلايا الوعي الدماغية الأولية المباشرة والثانوية السهمية الاستقلابية:\n1. **العلة الهيكلية الأولية**: تنشأ من غزو بكتيري أو جلطة وتدمير أو ضرب ورض ميكانيكي بخلية وجهاز عصب الرأس بذاته كالتهاب السحايا ونزيف الدماغ والأورام والجلطات الصريحة.\n2. **العلة الثانوية الكيميائية**: تحدث لمخ سليم تماماً تأذى ثانوياً بتسمم وأبخرة وخلل توازن أملاح وغازات الجسم الخارجي كغيبوبة تسمم البولينا، وحموضة الديايبتك كيتوأسيدوسيس DKA، وخسارة أكسجين الصدمات الخانقة."
  },
  {
    id: "q-e3-co-3",
    chapterId: 4,
    type: "short-essay",
    title: "Extrapolating Brainstem Level of Dysfunction",
    content: "Describe how to clinically differentiate between Cortical vs. Brain Stem level of dysfunction in a comatose pediatric patient, and mention 3 reflexes evaluated to make this determination.",
    answer: "1. Differential Method: The level of dysfunction is determined by testing basic brainstem reflexes. In cortical lesions, brainstem reflexes are completely INTACT, whereas in structural brainstem lesions, these reflexes are either SLUGGISH OR completely LOST.\n2. Three Evaluated Reflexes:\n   - Pupillary reaction to light.\n   - Corneal reflex.\n   - Oculocephalic reflex (Doll's eyes response).",
    isClinical: true,
    topic: "Coma",
    explanation: "فن وملاحظات التفريق الإكلينيكي العصبي بين عيوب قشرة مخ وجذع الدماغ بغيبوبة الأطفال:\n1. المسار الفعلي: يتم عبر فحص ورصد ردود الأفعال العصبية والانعكاسات الحيوية بجذع الدماغ. فإذا كانت انعكاسات الحدقة وجريان الدموع وحركة بؤبؤ العين سليمة فالعيب معزول بقشرة الدماغ العليا، بينما لو غابت وخمد تفاعلها فالوهن مقيم بجذع المخ العصبي المهلك.\n2. الانعكاسات الثلاثة المستخدمة بالعيادة بالتفصيل للحكم:\n   - انعكاس وقدرة فحص انكماش قزحية حدقة العين للضوء الحاد.\n   - رد الفعل اللمسي لقرنيات وجفن الرمش للرعش.\n   - انعكاس Doll's eyes حركية حنجرة المخ الحركي عند تدوير الرأس."
  }
];
