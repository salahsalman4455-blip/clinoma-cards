import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==================== I. Renal Diseases ====================
  // topic: "Hematuria"
  {
    id: "q-r-h-1",
    chapterId: 1,
    type: "define",
    title: "Define Microscopic Hematuria",
    content: "Define \"Microscopic Hematuria\" in children.",
    answer: "It is defined as the presence of more than 5 RBCs per high power field (HPF) in the sediment from 10 ml of centrifuged, freshly voided urine.",
    isClinical: false,
    topic: "Hematuria"
  },
  {
    id: "q-r-h-2",
    chapterId: 1,
    type: "short-essay",
    title: "Gross Hematuria Causes",
    content: "Enumerate 4 common causes of \"Gross Hematuria\" in pediatric patients.",
    answer: "1. Urinary Tract Infection (UTI).\n2. Acute Post-Streptococcal Glomerulonephritis (APSGN).\n3. Trauma to the urinary tract.\n4. Urolithiasis / Hypercalciuria.",
    isClinical: false,
    topic: "Hematuria"
  },
  {
    id: "q-r-h-3",
    chapterId: 1,
    type: "short-essay",
    title: "Renal vs Lower Hematuria",
    content: "Enumerate 4 classic features that differentiate Renal (Glomerular) Hematuria from Urinary Tract (Lower) Hematuria.",
    answer: "1. Urine color is cola-colored or smoky in renal hematuria.\n2. RBCs are deformed or dysmorphic under microscopy in renal hematuria.\n3. Blood clots are completely absent in renal hematuria.\n4. Significant proteinuria (exceeding 100 mg/dL) is present in renal hematuria.",
    isClinical: true,
    topic: "Hematuria"
  },

  {
    id: "q-r-h-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Painless Gross Hematuria Case",
    content: "An 11-year-old child presents with painless gross hematuria. Urinalysis shows bright red urine with normal isomorphic RBCs and the presence of blood clots. Proteinuria is minimal (<100 mg/dL).\n\nQuestions:\n1. Is the source of hematuria glomerular or extra-glomerular?\n2. Enumerate 2 potential diagnostic causes for this presentation.",
    answer: "1. Extra-glomerular (Lower urinary tract).\n2. Urinary Tract Infection (UTI) and Urolithiasis (Urinary stones).",
    isClinical: true,
    topic: "Hematuria"
  },

  // topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  {
    id: "q-r-a-1",
    chapterId: 1,
    type: "define",
    title: "Define APSGN",
    content: "Define \"Acute Post-Streptococcal Glomerulonephritis (APSGN)\".",
    answer: "It is an acute, specific, self-limited glomerulonephritis due to prior streptococcal infection, characterized by the sudden onset of gross hematuria, mild to moderate edema, hypertension, and potential oliguria.",
    isClinical: false,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  },
  {
    id: "q-r-a-2",
    chapterId: 1,
    type: "short-essay",
    title: "Nephritic Syndrome Features",
    content: "Enumerate the 4 core clinical manifestations of the acute nephritic syndrome in APSGN.",
    answer: "1. Sudden onset of gross hematuria (smoky or cola-colored urine).\n2. Edema (mild to moderate, typically periorbital).\n3. Hypertension.\n4. Oliguria.",
    isClinical: false,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  },
  {
    id: "q-r-a-3",
    chapterId: 1,
    type: "short-essay",
    title: "Confirming APSGN",
    content: "Enumerate 4 essential laboratory investigations used to confirm the diagnosis of APSGN.",
    answer: "1. Urine analysis (detecting dysmorphic RBCs and RBC casts).\n2. Serum C3 complement level (characteristically reduced in the acute phase).\n3. Antistreptolysin O (ASO) titer (elevated after pharyngeal streptococcal infection).\n4. Renal function tests (elevated blood urea nitrogen and serum creatinine).",
    isClinical: false,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  },
  {
    id: "q-r-a-4",
    chapterId: 1,
    type: "short-essay",
    title: "Life-threatening APSGN Complications",
    content: "Enumerate 4 life-threatening acute complications (medical emergencies) of APSGN.",
    answer: "1. Hypertensive encephalopathy.\n2. Congestive heart failure / Acute pulmonary edema.\n3. Hyperkalemia.\n4. Rapidly progressive glomerulonephritis (RPGN).",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  },
  {
    id: "q-r-a-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Body Puffiness & Tea-colored Urine Case",
    content: "An 8-year-old girl develops generalized body puffiness, a severe headache, and passes tea-colored urine. Her blood pressure is 140/95 mmHg. Urinalysis reveals dysmorphic RBCs and RBC casts. Her serum C3 complement level is markedly depressed.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. Mention the calculated fluid restriction guideline for this patient during the oliguric phase.",
    answer: "1. Acute Post-Streptococcal Glomerulonephritis (APSGN).\n2. Fluid intake = Urine Output + 400 ml/m2 of body surface area.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  },

  // topic: "Nephrotic Syndrome"
  {
    id: "q-r-n-1",
    chapterId: 1,
    type: "define",
    title: "Define Nephrotic Syndrome",
    content: "Define \"Nephrotic Syndrome\" in children.",
    answer: "It is a primary pediatric glomerular disorder characterized by the triad of heavy proteinuria, hypoalbuminemia, and generalized edema, frequently accompanied by hyperlipidemia.",
    isClinical: false,
    topic: "Nephrotic Syndrome"
  },
  {
    id: "q-r-n-2",
    chapterId: 1,
    type: "short-essay",
    title: "Diagnostic Features of Nephrotic Syndrome",
    content: "Enumerate the 4 essential diagnostic laboratory and clinical features of Nephrotic Syndrome.",
    answer: "1. Heavy proteinuria (>40 mg/m2/hr or random spot protein/creatinine ratio >2).\n2. Hypoalbuminemia (serum albumin <2.5 g/dL).\n3. Generalized edema (anasarca).\n4. Hyperlipidemia (serum cholesterol >250 mg/dL).",
    isClinical: false,
    topic: "Nephrotic Syndrome"
  },
  {
    id: "q-r-n-3",
    chapterId: 1,
    type: "short-essay",
    title: "Nephrotic Syndrome Complications",
    content: "Enumerate 4 prominent complications associated with Nephrotic Syndrome in children.",
    answer: "1. Severe bacterial infections (such as Spontaneous Bacterial Peritonitis).\n2. Thromboembolic events (arterial or venous thrombosis).\n3. Hypovolemic shock (induced by aggressive diuresis or severe fluid shift).\n4. Acute renal failure.",
    isClinical: true,
    topic: "Nephrotic Syndrome"
  },
  {
    id: "q-r-n-4",
    chapterId: 1,
    type: "short-essay",
    title: "Biopsy Indications in Nephrotic Syndrome",
    content: "Enumerate 4 specific indications for performing a Renal Biopsy in a child with Nephrotic Syndrome.",
    answer: "1. Age of onset less than 1 year or greater than 10 years.\n2. Presence of persistent hypertension or gross hematuria.\n3. Structural renal insufficiency or low complement (C3) level.\n4. Steroid-resistant nephrotic syndrome (failure to respond after 4-6 weeks of prednisone).",
    isClinical: true,
    topic: "Nephrotic Syndrome"
  },
  {
    id: "q-r-n-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Eye & Limb Swelling Case",
    content: "A 4-year-old boy presents with progressive swelling around his eyes and lower limbs. Urinalysis reveals a frothy appearance with 4+ proteinuria. Laboratory values show a serum albumin of 1.7 g/dL and a serum cholesterol of 280 mg/dL. His blood pressure is normal.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. Mention the standard initial drug dose and duration used to induce remission.",
    answer: "1. Minimal Change Nephrotic Syndrome (MCNS).\n2. Oral Prednisone at 60 mg/m2/day (maximum 60 mg) divided into 2-3 doses for at least 4 consecutive weeks.",
    isClinical: true,
    topic: "Nephrotic Syndrome"
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
    topic: "Acute Kidney Injury (AKI)"
  },
  {
    id: "q-r-ki-2",
    chapterId: 1,
    type: "short-essay",
    title: "Prerenal AKI Causes",
    content: "Enumerate 4 common \"Prerenal\" causes of AKI in pediatric emergencies.",
    answer: "1. Severe dehydration (e.g., from vomiting and diarrhea).\n2. Massive hemorrhage (acute blood loss).\n3. Septic shock (severe fulminant sepsis causing renal hypoperfusion).\n4. Severe burns (plasma fluid losses).",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)"
  },
  {
    id: "q-r-ki-3",
    chapterId: 1,
    type: "short-essay",
    title: "Oliguric Phase Findings",
    content: "Enumerate 4 laboratory or clinical findings seen during the \"Oliguric Phase\" of advanced AKI.",
    answer: "1. Oliguria or anuria.\n2. Hyperkalemia (inducing cardiac arrhythmias).\n3. Metabolic acidosis (deep, rapid acidotic breathing).\n4. Uremic encephalopathy (confusion, convulsions, or coma).",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)"
  },

  {
    id: "q-r-ki-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Vomiting, Diarrhea & Anuria Case",
    content: "A 2-year-old infant with a 3-day history of severe vomiting and diarrhea presents with anuria for 14 hours, dry mucous membranes, and tachycardia. Laboratory testing reveals elevated serum blood urea nitrogen (BUN) and creatinine.\n\nQuestions:\n1. What type of Acute Kidney Injury is this?\n2. Enumerate 2 essential initial urinary indicators used to confirm this specific type.",
    answer: "1. Prerenal Acute Kidney Injury.\n2. Low urine sodium (<20 mEq/L) and a Fractional Excretion of Sodium (FENa) less than 1%.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)"
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
    topic: "Chronic Kidney Disease (CKD)"
  },
  {
    id: "q-r-c-2",
    chapterId: 1,
    type: "short-essay",
    title: "Symptomatology of CKD",
    content: "Enumerate 4 underlying clinical mechanisms or metabolic findings characteristically seen in CKD.",
    answer: "1. Accumulation of nitrogenous waste products (elevated BUN and creatinine).\n2. Metabolic acidosis (impaired net acid excretion).\n3. Hyperkalemia.\n4. Renal osteodystrophy (secondary hyperparathyroidism).",
    isClinical: false,
    topic: "Chronic Kidney Disease (CKD)"
  },
  {
    id: "q-r-c-3",
    chapterId: 1,
    type: "short-essay",
    title: "Complications of CKD",
    content: "Enumerate 4 core long-term complications of CKD that require targeted pharmacological interventions.",
    answer: "1. Renal osteodystrophy (high-turnover bone disease).\n2. Growth retardation (short stature).\n3. Normochromic normocytic anemia (erythropoietin deficiency).\n4. Hypertension (volume overload or excessive renin production).",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)"
  },

  {
    id: "q-r-c-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Growth Retardation & Pallor Case",
    content: "A 6-year-old boy with a history of chronic glomerulonephritis presents with short stature, severe pallor, and a bone deformity of the long legs. Lab work demonstrates chronic elevations of serum creatinine, hypocalcemia, hyperphosphatemia, and a hemoglobin level of 7.5 g/dL.\n\nQuestions:\n1. What is the cause of his severe pallor and low hemoglobin?\n2. Enumerate 2 management lines used to treat his specific bone disorder.",
    answer: "1. Anemia of CKD due to inadequate erythropoietin production by the failing kidneys.\n2. Low phosphorus diet and administration of oral phosphate binders followed by active Vitamin D supplementation.",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)"
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
    topic: "Croup"
  },
  {
    id: "q-c-cr-2",
    chapterId: 2,
    type: "short-essay",
    title: "Classic Croup Symptoms",
    content: "Enumerate the 4 classic clinical symptoms that define the presentation of Croup.",
    answer: "1. Barking cough.\n2. Inspiratory stridor.\n3. Hoarseness of voice.\n4. Respiratory distress (worse at night).",
    isClinical: false,
    topic: "Croup"
  },
  {
    id: "q-c-cr-3",
    chapterId: 2,
    type: "short-essay",
    title: "Croup Management Plan",
    content: "Enumerate 4 components of the therapeutic management plan for a child with Croup.",
    answer: "1. Supplemental humidified oxygen.\n2. Nebulized Epinephrine (L-epinephrine or racemic epinephrine) to reduce edema.\n3. A single dose of systemic Corticosteroids (oral or IM Dexamethasone).\n4. Keeping the patient nothing per mouth (NPO) and avoiding agitation.",
    isClinical: true,
    topic: "Croup"
  },
  {
    id: "q-c-cr-4",
    chapterId: 2,
    type: "short-essay",
    title: "Impending Respiratory Failure Signs",
    content: "Enumerate 4 clinical signs that indicate impending respiratory failure in a child with severe Croup.",
    answer: "1. Cyanosis.\n2. Pallor.\n3. Decreased level of consciousness / depressed sensorium.\n4. Decreased stridor or barking cough despite severe retractions (failing effort).",
    isClinical: true,
    topic: "Croup"
  },
  {
    id: "q-c-cr-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Stridor & Barking Cough Case",
    content: "A 2-year-old boy is brought to the emergency clinic at midnight with a barking cough and high-pitched noisy sounds heard on inspiration. On examination, he has low-grade fever and mild subcostal retractions, but remains alert.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What classic radiological sign is expected on a postero-anterior neck X-ray?",
    answer: "1. Acute Viral Croup.\n2. The Steeple Sign (uniform subglottic narrowing of the airway).",
    isClinical: true,
    topic: "Croup"
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
    topic: "Epiglottitis"
  },
  {
    id: "q-c-e-2",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottitis Clinical Picture",
    content: "Enumerate 4 classic clinical manifestations of Acute Epiglottitis.",
    answer: "1. Acute onset of high-grade fever and severe sore throat.\n2. Drooling of saliva (due to severe inability to swallow).\n3. Hyperextension of the neck (sniffing position to maintain airway).\n4. Severe, rapidly progressive respiratory distress without a barking cough.",
    isClinical: false,
    topic: "Epiglottitis"
  },
  {
    id: "q-c-e-3",
    chapterId: 2,
    type: "short-essay",
    title: "Contraindications in Epiglottitis",
    content: "Enumerate 4 critical clinical contraindications in the immediate management of suspected Epiglottitis.",
    answer: "1. Do not place the child in a supine position.\n2. Do not examine the oral cavity or throat using a tongue depressor (risk of sudden cardiac arrest).\n3. Do not perform agitating diagnostic tests (like phlebotomy) before securing the airway.\n4. Do not rely on corticosteroids or nebulized epinephrine, as they are ineffective.",
    isClinical: true,
    topic: "Epiglottitis"
  },
  {
    id: "q-c-e-4",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottitis Treatment Steps",
    content: "Enumerate the 4 components of the standard therapeutic intervention for confirmed Epiglottitis.",
    answer: "1. Immediate insertion of an artificial airway (endotracheal intubation) in the OR or ICU.\n2. Empiric intravenous antibiotic therapy (Vancomycin plus Ceftriaxone for 10 days).\n3. Supplemental oxygen delivery without mask agitation.\n4. Continuous monitoring of airway patency and direct visualization before extubation.",
    isClinical: true,
    topic: "Epiglottitis"
  },
  {
    id: "q-c-e-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Sore Throat & Drooling Case",
    content: "A 4-year-old unimmunized child presents with a sudden onset of high fever, severe respiratory distress, and is sitting leaning forward while drooling saliva. The clinician suspects an upper airway emergency.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What is the primary causative organism for this specific presentation?",
    answer: "1. Acute Epiglottitis.\n2. Hemophilus influenzae type b (Hib).",
    isClinical: true,
    topic: "Epiglottitis"
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
    topic: "Wheezy Chest and Foreign Body Aspiration"
  },
  {
    id: "q-c-w-2",
    chapterId: 2,
    type: "short-essay",
    title: "Recurrent Wheezing Causes",
    content: "Enumerate 4 common pediatric causes of \"Recurrent Wheezing\".",
    answer: "1. Bronchial asthma.\n2. Recurrent aspiration (e.g., in infants with GERD).\n3. Chronic chest infections.\n4. Bronchopulmonary dysplasia (BPD).",
    isClinical: false,
    topic: "Wheezy Chest and Foreign Body Aspiration"
  },
  {
    id: "q-c-w-3",
    chapterId: 2,
    type: "short-essay",
    title: "Foreign Body Aspiration Signs",
    content: "Enumerate 4 clinical signs or complications characteristic of Foreign Body Aspiration in a child.",
    answer: "1. History of sudden choking, coughing, or gagging while playing.\n2. Fixed, localized unilateral wheeze on auscultation.\n3. Unilaterally diminished breath sounds.\n4. Recurrent pneumonia or abscess localized in the exact same lung lobe.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration"
  },

  {
    id: "q-c-w-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Unilateral Diminished Air Entry Case",
    content: "A 3-year-old child is rushed to the ER with sudden violent coughing, choking, and localized respiratory distress. On chest auscultation, a fixed localized wheeze is heard over the right lung alongside diminished breath sounds on that side.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What is the definitive management choice for this condition?",
    answer: "1. Foreign Body Aspiration.\n2. Rigid bronchoscopic extraction of the foreign body.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration"
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
    topic: "Pneumonia"
  },
  {
    id: "q-c-p-2",
    chapterId: 2,
    type: "short-essay",
    title: "Physical Chest exam in Consolidation",
    content: "Enumerate 4 physical chest examination findings characteristic of localized lung consolidation in Pneumonia.",
    answer: "1. Diminished breath sounds over the affected field.\n2. Localized scattered crackles (crepitations).\n3. Bronchial breathing.\n4. Dullness on percussion.",
    isClinical: true,
    topic: "Pneumonia"
  },
  {
    id: "q-c-p-3",
    chapterId: 2,
    type: "short-essay",
    title: "Systemic Manifestations of Pneumonia",
    content: "Enumerate 4 non-respiratory systemic manifestations that can occur during childhood Pneumonia.",
    answer: "1. Gastrointestinal disturbances (vomiting, anorexia, diarrhea).\n2. Abdominal distention (due to paralytic ileus or swallowed air).\n3. Severe abdominal pain (mimicking acute surgical conditions in lower-lobe pneumonia).\n4. Neck rigidity or meningism (seen in right upper lobe pneumonia).",
    isClinical: false,
    topic: "Pneumonia"
  },
  {
    id: "q-c-p-4",
    chapterId: 2,
    type: "short-essay",
    title: "Pneumonia Hospitalization Criteria",
    content: "Enumerate 4 primary clinical criteria used to identify the need for Hospitalization in pediatric Pneumonia.",
    answer: "1. Age less than 6 months.\n2. Moderate to severe respiratory distress or hypoxemia (oxygen saturation <90% in room air).\n3. Toxic appearance or signs of clinical shock/severe dehydration.\n4. Inability to tolerate oral medications/fluids, or failure of oral antibiotic outpatient therapy.",
    isClinical: true,
    topic: "Pneumonia"
  },
  {
    id: "q-c-p-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Fast Breathing Infant Case",
    content: "A 10-month-old infant presents with a high fever, a severe productive cough, and a respiratory rate of 55 breaths/minute. On chest examination, localized bronchial breathing and crackles are heard over the right lung base.\n\nQuestions:\n1. Does this infant meet the WHO criteria for fast breathing (Tachypnea)?\n2. What is the first-line empiric oral antibiotic of choice for outpatient management?",
    answer: "1. Yes, tachypnea for infants aged 2-12 months is defined as a respiratory rate >50 breaths/minute.\n2. High-dose Amoxicillin (90 mg/kg/24 hr).",
    isClinical: true,
    topic: "Pneumonia"
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
    topic: "Bronchiolitis"
  },
  {
    id: "q-c-b-2",
    chapterId: 2,
    type: "short-essay",
    title: "Bronchiolitis Physical Signs",
    content: "Enumerate 4 standard clinical picture findings seen during a physical examination of an infant with Bronchiolitis.",
    answer: "1. Sharp, dry repetitive cough and tachypnea (RR 60-80/min).\n2. Hyperinflation of the chest with an increased anteroposterior diameter.\n3. Subcostal and intercostal retractions with diaphragmatic downward displacement of the liver.\n4. Widespread fine end-inspiratory consonating crackles and prolonged expiration with wheezing.",
    isClinical: true,
    topic: "Bronchiolitis"
  },
  {
    id: "q-c-b-3",
    chapterId: 2,
    type: "short-essay",
    title: "Bronchiolitis Complications",
    content: "Enumerate 4 complications that can result from severe Acute Bronchiolitis.",
    answer: "1. Apneic spells (especially in young infants <2 months old).\n2. Secondary bacterial infection or otitis media.\n3. Dehydration and electrolyte imbalance.\n4. Respiratory failure or cardiorespiratory collapse.",
    isClinical: true,
    topic: "Bronchiolitis"
  },
  {
    id: "q-c-b-4",
    chapterId: 2,
    type: "short-essay",
    title: "Hospitalized Bronchiolitis Treatment",
    content: "Enumerate 4 core treatment modalities for a hospitalized infant with Bronchiolitis.",
    answer: "1. Humidified supplemental oxygen therapy via nasal prongs.\n2. Parenteral fluid therapy to maintain hydration and electrolyte balance.\n3. Implementation of a single-dose trial of an inhaled bronchodilator.\n4. Avoidance of sedatives, antibiotics, and systemic steroids (unless specifically indicated).",
    isClinical: true,
    topic: "Bronchiolitis"
  },
  {
    id: "q-c-b-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Hyper-resonant Chest Infant Case",
    content: "A 5-month-old infant presents during winter with a 2-day history of rhinitis followed by a severe dry cough, tachypnea, and chest indrawing. Chest exam reveals a hyper-resonant percussion note and diffuse fine end-inspiratory crackles with wheezes.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What is the primary viral etiology responsible for roughly 50% of these cases?",
    answer: "1. Acute Bronchiolitis.\n2. Respiratory Syncytial Virus (RSV).",
    isClinical: true,
    topic: "Bronchiolitis"
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
    topic: "Bronchial Asthma"
  },
  {
    id: "q-c-a-2",
    chapterId: 2,
    type: "short-essay",
    title: "Asthma Environmental Triggers",
    content: "Enumerate 4 common environmental or physical triggers of childhood Asthma exacerbations.",
    answer: "1. Viral respiratory infections.\n2. Indoor/outdoor allergens (dust mites, pollens, animal dander).\n3. Air pollutants (tobacco smoke, strong chemical odors).\n4. Cold dry air or strenuous physical exercise.",
    isClinical: false,
    topic: "Bronchial Asthma"
  },
  {
    id: "q-c-a-3",
    chapterId: 2,
    type: "short-essay",
    title: "Status Asthmaticus Signs",
    content: "Enumerate 4 physical signs indicating a severe acute asthma attack (Status Asthmaticus).",
    answer: "1. Severe dyspnea with prolonged expiration and intense use of accessory muscles (SCM retraction).\n2. Cyanosis and thoracic hyperinflation.\n3. Tachycardia and pulsus paradoxus.\n4. Altered mental status ranging from agitation to somnolence.",
    isClinical: true,
    topic: "Bronchial Asthma"
  },
  {
    id: "q-c-a-4",
    chapterId: 2,
    type: "short-essay",
    title: "Rapid-acting Asthma Relievers",
    content: "Enumerate 4 rapid-acting pharmacological medications used as \"Quick Relievers\" during an acute asthma attack.",
    answer: "1. Inhaled Short-Acting Beta2-agonists (SABAs like nebulized Albuterol/Salbutamol).\n2. Inhaled Anticholinergics (Nebulized Ipratropium bromide).\n3. Systemic Corticosteroids (Oral Prednisolone or IV Dexamethasone).\n4. Intravenous Magnesium Sulphate (infused slowly over 15-30 minutes).",
    isClinical: true,
    topic: "Bronchial Asthma"
  },
  {
    id: "q-c-a-5",
    chapterId: 2,
    type: "problem-solving",
    title: "FEV1 Improvement Case",
    content: "A 6-year-old boy known to have recurrent wheezing presents to the emergency room with severe breathlessness and a tight cough after playing outdoors in cold weather. Spirometry demonstrates a low FEV1 that increases by 14% after an albuterol nebulizer treatment.\n\nQuestions:\n1. What is the clinical significance of the 14% increase in FEV1?\n2. Enumerate 2 structural thoracic complications this child is at risk of if the acute attack deteriorates suddenly.",
    answer: "1. It demonstrates a high degree of reversible airflow limitation, which is a hallmark diagnostic feature of bronchial asthma.\n2. Pneumothorax (air-leak) and segmental/subsegmental lung collapse.",
    isClinical: true,
    topic: "Bronchial Asthma"
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
    topic: "Topic Two: Prematurity and its Complications"
  },
  {
    id: "q-n-pr-2",
    chapterId: 3,
    type: "short-essay",
    title: "Preterm System handicaps",
    content: "Enumerate 4 major \"Physiological Handicaps\" resulting from the functional immaturity of organ systems in a premature infant.",
    answer: "1. Immature thermoregulatory mechanisms (due to a large surface area, lack of subcutaneous fat, and immature centers).\n2. Respiratory center immaturity combined with a structural deficiency of pulmonary surfactant.\n3. Hepatic immaturity causing impaired conjugation of bilirubin and deficiency of Vitamin K-dependent clotting factors.\n4. Renal immaturity leading to a low glomerular filtration rate (GFR) and inability to effectively concentrate urine.",
    isClinical: false,
    topic: "Topic Two: Prematurity and its Complications"
  },
  {
    id: "q-n-pr-3",
    chapterId: 3,
    type: "short-essay",
    title: "Preterm Sensory/CNS complications",
    content: "Enumerate 4 prominent \"Central Nervous System and Sensory\" complications that specifically affect preterm neonates.",
    answer: "1. Intraventricular Hemorrhage (IVH).\n2. Periventricular Leukomalacia (PVL).\n3. Retinopathy of Prematurity (ROP).\n4. Kernicterus (bilirubin encephalopathy developing at lower total bilirubin thresholds).",
    isClinical: true,
    topic: "Topic Two: Prematurity and its Complications"
  },
  {
    id: "q-n-pr-4",
    chapterId: 3,
    type: "short-essay",
    title: "Preterm Feeding Modalities",
    content: "Enumerate 4 basic elements required in the nutritional management and feeding protocol of a stable preterm infant in the NICU.",
    answer: "1. Utilization of maternal breast milk or specialized preterm formulas.\n2. Implementation of small-volume trophic feedings (minimal enteral nutrition) within 2-4 hours of life if stable to avoid hypoglycemia.\n3. Utilizing a nasogastric tube (gavage feeding) or dropper if the infant lacks coordinated suckling and swallowing reflexes.\n4. Careful monitoring of gastric residuals before each feed, ensuring increments do not exceed 20 mL/kg/24 hr.",
    isClinical: true,
    topic: "Topic Two: Prematurity and its Complications"
  },
  {
    id: "q-n-pr-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Underaged Translucent Creases Case",
    content: "A male infant is delivered via emergency cesarean section at 31 weeks of gestation due to severe maternal pre-eclampsia. His birth weight is 1300 grams. On admission to the NICU, he is weak, hypoactive, has thin translucent skin, and underdeveloped sole creases.\n\nQuestions:\n1. Classify this newborn based on his birth weight category.\n2. Enumerate 2 immediate respiratory or gastrointestinal complications this preterm infant is at high risk of developing in his first week of life.",
    answer: "1. Very Low Birth Weight (VLBW) infant (defined as a birth weight less than 1500 grams).\n2. Respiratory Distress Syndrome (RDS / Hyaline Membrane Disease) and Necrotizing Enterocolitis (NEC).",
    isClinical: true,
    topic: "Topic Two: Prematurity and its Complications"
  },

  // topic: "Topic Three: Physiological Jaundice and its differentiation from Pathological Jaundice"
  {
    id: "q-n-phy-1",
    chapterId: 3,
    type: "define",
    title: "Define Neonatal Jaundice",
    content: "Define \"Neonatal Jaundice\".",
    answer: "It is the yellowish discoloration of the skin, sclera, and mucous membranes in a newborn infant, caused by the systemic accumulation of bilirubin exceeding 1 mg/dL due to increased RBC turnover and immature conjugation.",
    isClinical: false,
    topic: "Topic Three: Physiological Jaundice and its differentiation from Pathological Jaundice"
  },
  {
    id: "q-n-phy-2",
    chapterId: 3,
    type: "short-essay",
    title: "Physiological Jaundice characteristics",
    content: "Enumerate 4 core clinical characteristics of \"Physiological Jaundice\" in a full-term infant.",
    answer: "1. It appears after the first 24 hours of life (typically on the second or third day).\n2. The total serum bilirubin level is mild and remains below 12 mg/dL.\n3. It reaches a peak at day 3 to 5, and resolves spontaneously within 7 days.\n4. The infant is completely healthy, active, feeds well, and exhibits no anemia or hepatosplenomegaly.",
    isClinical: false,
    topic: "Topic Three: Physiological Jaundice and its differentiation from Pathological Jaundice"
  },
  {
    id: "q-n-phy-3",
    chapterId: 3,
    type: "short-essay",
    title: "Clinical Signs of Pathological jaundice",
    content: "Enumerate 4 distinct clinical or laboratory warning signs that signify the presence of \"Pathological Jaundice\".",
    answer: "1. Jaundice that appears within the first 24 hours of life.\n2. Total serum bilirubin rising rapidly at a rate faster than 5 mg/dL/24 hours.\n3. Total serum bilirubin exceeding 12 mg/dL in a full-term infant or 14 mg/dL in a preterm infant.\n4. Jaundice that persists beyond 14 days of life, or is associated with a high direct-reacting (conjugated) bilirubin fraction.",
    isClinical: true,
    topic: "Topic Three: Physiological Jaundice and its differentiation from Pathological Jaundice"
  },
  {
    id: "q-n-phy-4",
    chapterId: 3,
    type: "short-essay",
    title: "Exaggerated Physiological Jaundice risk criteria",
    content: "Enumerate 4 common underlying clinical risk factors that can lead to an exaggerated or severe physiological jaundice.",
    answer: "1. Prematurity or near-term gestational age.\n2. Maternal diabetes mellitus.\n3. Polycythemia or significant cutaneous bruising/cephalohematoma.\n4. Excessive neonatal weight loss due to dehydration or caloric deprivation from delayed breastfeeding.",
    isClinical: true,
    topic: "Topic Three: Physiological Jaundice and its differentiation from Pathological Jaundice"
  },
  {
    id: "q-n-phy-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Breastfeeder Third Day Jaundice Case",
    content: "A full-term healthy infant develops mild jaundice on his third day of life. He is active, breastfeeds eagerly, and has completely normal stool and urine color. His serum bilirubin is checked and reveals a level of 9 mg/dL, which is entirely unconjugated.\n\nQuestions:\n1. What is the diagnostic classification of this jaundice?\n2. What is the expected course and recommended treatment line for this infant?",
    answer: "1. Physiological Jaundice.\n2. It will resolve spontaneously within 7 days; no treatment is required except clinical observation and ensuring adequate feeding.",
    isClinical: true,
    topic: "Topic Three: Physiological Jaundice and its differentiation from Pathological Jaundice"
  },

  // topic: "Topic Four: Pathological Jaundice (ABO incompatibility, Breast milk jaundice, Galactosemia, Biliary atresia Extrahepatic type)"
  {
    id: "q-n-pat-1",
    chapterId: 3,
    type: "short-essay",
    title: "ABO Incompatibility features",
    content: "Enumerate 4 characteristic \"Clinical Features\" of Pathological Jaundice caused specifically by ABO Incompatibility.",
    answer: "1. Early onset of jaundice developing within the first 24 hours of life.\n2. Presence of hemolytic anemia and active hemolysis.\n3. Significant elevation of toxic unconjugated bilirubin.\n4. Presence of a positive direct Coombs test result.",
    isClinical: true,
    topic: "Topic Four: Pathological Jaundice (ABO incompatibility, Breast milk jaundice, Galactosemia, Biliary atresia Extrahepatic type)"
  },
  {
    id: "q-n-pat-2",
    chapterId: 3,
    type: "short-essay",
    title: "Galactosemia Diagnostic features",
    content: "Enumerate 4 distinct \"Clinical Features\" that define the presentation of Galactosemia in a newborn.",
    answer: "1. Onset of severe pathological jaundice shortly after milk feeding is initiated.\n2. Severe vomiting and poor feeding.\n3. Marked hepatomegaly.\n4. Presence of hypoglycemia and reducing substances in the urine.",
    isClinical: true,
    topic: "Topic Four: Pathological Jaundice (ABO incompatibility, Breast milk jaundice, Galactosemia, Biliary atresia Extrahepatic type)"
  },
  {
    id: "q-n-pat-3",
    chapterId: 3,
    type: "short-essay",
    title: "Extrahepatic Biliary Atresia elements",
    content: "Enumerate 4 characteristic clinical or laboratory manifestations of Extrahepatic Biliary Atresia.",
    answer: "1. Persistent jaundice that continues or worsens beyond 2 weeks of age.\n2. Progressively pale, clay-colored, or acholic stools.\n3. Dark yellow urine that stains the diaper.\n4. Persistent conjugated (direct) hyperbilirubinemia accompanied by hepatomegaly.",
    isClinical: true,
    topic: "Topic Four: Pathological Jaundice (ABO incompatibility, Breast milk jaundice, Galactosemia, Biliary atresia Extrahepatic type)"
  },
  {
    id: "q-n-pat-4",
    chapterId: 3,
    type: "short-essay",
    title: "Breast Milk Jaundice criteria",
    content: "Enumerate the clinical presentation findings that distinguish \"Breast Milk Jaundice\" from other forms of pathological hyperbilirubinemia.",
    answer: "1. It typically appears later, during the first or second week of life.\n2. It presents as a mild, prolonged, but completely unconjugated hyperbilirubinemia.\n3. The infant is completely healthy, active, and gaining weight normally.\n4. Stool and urine maintain completely normal color, and breastfeeding should safely continue.",
    isClinical: false,
    topic: "Topic Four: Pathological Jaundice (ABO incompatibility, Breast milk jaundice, Galactosemia, Biliary atresia Extrahepatic type)"
  },
  {
    id: "q-n-pat-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Clay Stools Dark Urine Case",
    content: "A 3-week-old female infant presents with a history of persistent yellow skin. Her mother reports that the baby's stools are clay-colored and her urine is dark. On examination, she has a firm, enlarged liver. Laboratory analysis demonstrates severe conjugated hyperbilirubinemia.\n\nQuestions:\n1. What is the most likely diagnosis?\n2. What is the required definitive management, and what is its prognosis if delayed?",
    answer: "1. Extrahepatic Biliary Atresia.\n2. Early surgical intervention (Kasai portoenterostomy); delay significantly worsens the prognosis, leading to biliary cirrhosis.",
    isClinical: true,
    topic: "Topic Four: Pathological Jaundice (ABO incompatibility, Breast milk jaundice, Galactosemia, Biliary atresia Extrahepatic type)"
  },

  // topic: "Topic Five: Complications of Indirect Hyperbilirubinemia"
  {
    id: "q-n-comp-1",
    chapterId: 3,
    type: "define",
    title: "Define Kernicterus",
    content: "Define \"Kernicterus (Bilirubin Encephalopathy)\".",
    answer: "It is a severe neurological syndrome resulting from the structural deposition of unconjugated bilirubin in the basal ganglia and brainstem nuclei, leading to irreversible cell death and neural damage.",
    isClinical: false,
    topic: "Topic Five: Complications of Indirect Hyperbilirubinemia"
  },
  {
    id: "q-n-comp-2",
    chapterId: 3,
    type: "short-essay",
    title: "Predisposing Kernicterus factors",
    content: "Enumerate 4 predisposing clinical risk factors that facilitate the development of Kernicterus.",
    answer: "1. Severe, uncontrolled unconjugated hyperbilirubinemia.\n2. Severe hypoalbuminemia (decreasing bilirubin binding capacity).\n3. Disruption or increased permeability of the blood-brain barrier (caused by hypoxia, acidosis, or sepsis).\n4. Administration of drugs that compete for albumin binding sites (such as sulfonamides, salicylates, or heavy vitamin K3).",
    isClinical: true,
    topic: "Topic Five: Complications of Indirect Hyperbilirubinemia"
  },
  {
    id: "q-n-comp-3",
    chapterId: 3,
    type: "short-essay",
    title: "Kernicterus Phase 1 signs",
    content: "Enumerate 4 clinical signs seen during Phase 1 (the first 1-2 days) of the acute form of Kernicterus.",
    answer: "1. Poor sucking and feeding intolerance.\n2. Loss of the normal Moro reflex.\n3. Marked lethargy or stupor.\n4. Hypotonia accompanied by a high-pitched cry or seizures.",
    isClinical: true,
    topic: "Topic Five: Complications of Indirect Hyperbilirubinemia"
  },
  {
    id: "q-n-comp-4",
    chapterId: 3,
    type: "short-essay",
    title: "Kernicterus long-term manifestations",
    content: "Enumerate 4 prominent long-term manifestations that comprise the complete chronic neurological syndrome of Kernicterus by 3 years of age.",
    answer: "1. Bilateral choreoathetosis (extrapyramidal involuntary movements) and muscle rigidity.\n2. Mental deficiency / cognitive impairment.\n3. High-frequency sensorineural hearing loss.\n4. Squinting and defective upward movement of the eyes.",
    isClinical: true,
    topic: "Topic Five: Complications of Indirect Hyperbilirubinemia"
  },
  {
    id: "q-n-comp-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Opisthotonos High Bilirubin Case",
    content: "A 5-day-old term infant with a total serum bilirubin level of 34 mg/dL exhibits poor sucking, hypotonia, a high-pitched cry, and an episodic backwards arching of his neck and trunk (opisthotonos).\n\nQuestions:\n1. What severe complication has this infant developed?\n2. Enumerate 2 major therapeutic modalities used immediately to reduce indirect bilirubin levels below neurotoxic thresholds.",
    answer: "1. Bilirubin Encephalopathy / Acute Kernicterus.\n2. Intensive Phototherapy and immediate Exchange Transfusion.",
    isClinical: true,
    topic: "Topic Five: Complications of Indirect Hyperbilirubinemia"
  },

  // topic: "Topic Six: Neonatal Sepsis and its Clinical Sepsis Score"
  {
    id: "q-n-sep-1",
    chapterId: 3,
    type: "define",
    title: "Define Neonatal Sepsis",
    content: "Define \"Neonatal Sepsis (Septicemia)\".",
    answer: "It is a clinical syndrome of systemic illness characterized by signs of systemic infection and accompanied by documented bacteremia occurring within the first 4 weeks of life.",
    isClinical: false,
    topic: "Topic Six: Neonatal Sepsis and its Clinical Sepsis Score"
  },
  {
    id: "q-n-sep-2",
    chapterId: 3,
    type: "short-essay",
    title: "Maternal Sepsis risks",
    content: "Enumerate 4 critical \"Maternal Risk Factors\" strongly correlated with the development of early-onset Neonatal Sepsis.",
    answer: "1. Premature Rupture of Membranes (PROM) lasting longer than 24 hours.\n2. Maternal peripartum fever (temperature >=38°C) or documented chorioamnionitis.\n3. Active maternal urinary tract infection (UTI) or perineal colonization with E. coli/GBS.\n4. Foul-smelling, cloudy, or meconium-stained amniotic fluid.",
    isClinical: true,
    topic: "Topic Six: Neonatal Sepsis and its Clinical Sepsis Score"
  },
  {
    id: "q-n-sep-3",
    chapterId: 3,
    type: "short-essay",
    title: "Calculating Sepsis Score",
    content: "Enumerate the 7 clinical components/signs utilized to calculate the \"Clinical Sepsis Score\" (Sepsis is suspected if 3 or more are present).",
    answer: "1. Respiratory signs: Apnea, tachypnea, cyanosis, or respiratory distress.\n2. Cardiovascular signs: Bradycardia or tachycardia.\n3. Neuromuscular signs: Hypotonia or seizures.\n4. Circulatory signs: Poor skin color or poor peripheral circulation.\n5. Behavioral signs: Irritability, lethargy, or poor feeding.\n6. Gastrointestinal signs: Hepatosplenomegaly or abdominal distension.\n7. Metabolic signs: Fever or hypothermia.",
    isClinical: false,
    topic: "Topic Six: Neonatal Sepsis and its Clinical Sepsis Score"
  },
  {
    id: "q-n-sep-4",
    chapterId: 3,
    type: "short-essay",
    title: "Sepsis biomarkers Workup",
    content: "Enumerate 4 inflammatory laboratory biomarkers or findings included in a neonatal Sepsis Workup.",
    answer: "1. Neutropenia (a sign of severe sepsis) or neutrophilia.\n2. An elevated ratio of immature band cells to total neutrophils greater than 0.2.\n3. Marked thrombocytopenia (a late finding).\n4. Significantly elevated acute-phase reactants, specifically C-Reactive Protein (CRP) and ESR.",
    isClinical: true,
    topic: "Topic Six: Neonatal Sepsis and its Clinical Sepsis Score"
  },
  {
    id: "q-n-sep-5",
    chapterId: 3,
    type: "problem-solving",
    title: "NICU sudden temperature drop Case",
    content: "A 4-day-old preterm infant in the NICU exhibits a sudden onset of temperature instability (hypothermia of 35.4°C), poor feeding, new-onset apneic spells, and severe abdominal distention. The maternal history confirms a prolonged rupture of membranes lasting 30 hours.\n\nQuestions:\n1. Calculate the infant's clinical status based on the Clinical Sepsis Score parameters.\n2. Mention the diagnostic category if this infant features a highly suggestive clinical picture alongside a positive blood culture for Klebsiella.",
    answer: "1. The infant exhibits 4 positive signs (respiratory/apnea, behavioral/poor feeding, GI/distention, metabolic/hypothermia), strongly indicating sepsis as the score is >=3.\n2. Proven Neonatal Sepsis.",
    isClinical: true,
    topic: "Topic Six: Neonatal Sepsis and its Clinical Sepsis Score"
  },

  // ==================== IV. Emergency Section ====================
  // topic: "Topic One: Steps of Cardiopulmonary Resuscitation (CPR)"
  {
    id: "q-e-cpr-1",
    chapterId: 4,
    type: "define",
    title: "Define Cardiopulmonary Arrest",
    content: "Define \"Cardiopulmonary Arrest\" in children.",
    answer: "It is a sudden, unexpected cessation of systemic circulation and/or respiration in a pediatric patient who is unlikely to die and for whom the potential for clinical recovery is good.",
    isClinical: false,
    topic: "Topic One: Steps of Cardiopulmonary Resuscitation (CPR)"
  },
  {
    id: "q-e-cpr-2",
    chapterId: 4,
    type: "short-essay",
    title: "Early warning circulatory signs",
    content: "Enumerate 4 early warning signs of circulatory or respiratory decompensation (pre-arrest criteria).",
    answer: "1. Cyanosis and slow, irregular respiration.\n2. Bradycardia (impending cardiac arrest in children).\n3. Weak peripheral pulses and poor tissue perfusion.\n4. Decreased responsiveness, altered consciousness, or extreme restlessness.",
    isClinical: false,
    topic: "Topic One: Steps of Cardiopulmonary Resuscitation (CPR)"
  },
  {
    id: "q-e-cpr-3",
    chapterId: 4,
    type: "short-essay",
    title: "Basic Life Support features",
    content: "Enumerate 4 distinct components of the Basic Life Support (BLS) airway and ventilation protocols.",
    answer: "1. Opening the airway channel using the Triple Airway Maneuver.\n2. Visualizing and clearing the mouth or oropharynx via suction (avoiding blind finger sweeps).\n3. Inserting an appropriately sized oropharyngeal airway in an unconscious patient.\n4. Providing artificial ventilation using a bag-valve-mask device with 100% oxygen at 20 breaths/min.",
    isClinical: false,
    topic: "Topic One: Steps of Cardiopulmonary Resuscitation (CPR)"
  },
  {
    id: "q-e-cpr-4",
    chapterId: 4,
    type: "short-essay",
    title: "Advanced Life Support medications",
    content: "Enumerate 4 critical emergency medications administered during Advanced Life Support (ALS), including their indications or doses.",
    answer: "1. Intravenous fluid bolus (Normal Saline or Ringer's Lactate at 20 ml/kg over 10 minutes).\n2. Intravenous Adrenaline (0.1 ml/kg of a 1:10,000 diluted solution) for asystole.\n3. Intravenous Sodium Bicarbonate (1 ml/kg of an 8.4% solution) to correct severe metabolic acidosis.\n4. Defibrillation electrical doses (2 Joules/kg up to 8 Joules/kg) for ventricular fibrillation control.",
    isClinical: true,
    topic: "Topic One: Steps of Cardiopulmonary Resuscitation (CPR)"
  },
  {
    id: "q-e-cpr-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Unresponsive Pulseless infant Case",
    content: "A 10-month-old infant is brought into the resuscitation bay unresponsive, pulseless, and apneic. The resuscitation team leader institutes immediate basic life support maneuvers.\n\nQuestions:\n1. Mention the 3 specific physical maneuvers that comprise the \"Triple Airway Maneuver\" to open the airway.\n2. What is the correct site, technique, and ratio of chest compressions required if two healthcare rescuers are present?",
    answer: "1. Head tilt, Jaw thrust, and Mouth opening.\n2. Site is midsternum; technique is the two-thumb encircling method; compression-to-ventilation ratio is 15:2.",
    isClinical: true,
    topic: "Topic One: Steps of Cardiopulmonary Resuscitation (CPR)"
  },

  // topic: "Topic Two: Shock"
  {
    id: "q-e-sh-1",
    chapterId: 4,
    type: "define",
    title: "Define Circulatory Shock",
    content: "Define \"Circulatory Shock\".",
    answer: "It is the clinical state of systemic circulatory inadequacy characterized by a disruption of tissue perfusion, leading to inadequate delivery of oxygen and nutrients to cells and inadequate removal of metabolic waste products from end organs.",
    isClinical: false,
    topic: "Topic Two: Shock"
  },
  {
    id: "q-e-sh-2",
    chapterId: 4,
    type: "short-essay",
    title: "Emergency Shock classification",
    content: "Enumerate 4 prominent \"Types\" of shock categorized in pediatric emergency medicine.",
    answer: "1. Hypovolemic shock (e.g., from severe dehydration or hemorrhage).\n2. Septic shock (systemic inflammatory response due to fulminant infection).\n3. Cardiogenic shock (due to acute heart failure or myocarditis).\n4. Distributive shock (e.g., Anaphylactic shock or Neurogenic shock).",
    isClinical: false,
    topic: "Topic Two: Shock"
  },
  {
    id: "q-e-sh-3",
    chapterId: 4,
    type: "short-essay",
    title: "Compensated Shock vs Decompensated",
    content: "Enumerate 4 classic clinical findings that distinguish \"Compensated Shock\" from decompensated shock.",
    answer: "1. Marked tachycardia.\n2. Delayed capillary refill time (>2 seconds).\n3. Cold, pale, or mottled peripheries.\n4. Normal or near-normal systolic blood pressure.",
    isClinical: true,
    topic: "Topic Two: Shock"
  },
  {
    id: "q-e-sh-4",
    chapterId: 4,
    type: "short-essay",
    title: "Vasoactive Inotropes",
    content: "Enumerate 4 vasoactive inotropic medications utilized in fluid-refractory shock, including their primary clinical indications.",
    answer: "1. Epinephrine (Adrenaline): First-line agent for pediatric fluid-refractory cold septic shock or cardiogenic shock.\n2. Norepinephrine (Noradrenaline): First-line potent vasoconstrictor for warm distributive septic shock.\n3. Dobutamine: Strong inotrope indicated for low cardiac output states with a normal baseline blood pressure.\n4. Milrinone: Inodilator indicated for myocardial dysfunction, left ventricular failure, or post-cardiac surgery.",
    isClinical: true,
    topic: "Topic Two: Shock"
  },
  {
    id: "q-e-sh-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Bounding Peripheral Pulses Case",
    content: "A 3-year-old child presents with a severe toxic look, high fever, cold hands, bounding peripheral pulses, and a delayed capillary refill of 4 seconds. His systolic blood pressure has dropped significantly below the normal range for his age, and he is passing minimal urine.\n\nQuestions:\n1. Is this shock compensated or uncompensated?\n2. What is the immediate first-line preload fluid expansion protocol, including specific fluid type and initial dose?",
    answer: "1. Uncompensated shock (due to the drop in blood pressure and organ hypoperfusion).\n2. Intravenous bolus of an isotonic crystalloid (Normal Saline or Ringer's Lactate) at a dose of 20 ml/kg infused rapidly over 10-15 minutes.",
    isClinical: true,
    topic: "Topic Two: Shock"
  },

  // topic: "Topic Three: Coma"
  {
    id: "q-e-co-1",
    chapterId: 4,
    type: "define",
    title: "Define Coma",
    content: "Define \"Coma\".",
    answer: "It is a state of prolonged, sustained unconsciousness from which the pediatric patient cannot be aroused, failing to show any purposeful response even to deep painful external stimuli.",
    isClinical: false,
    topic: "Topic Three: Coma"
  },
  {
    id: "q-e-co-2",
    chapterId: 4,
    type: "short-essay",
    title: "Secondary Brain pathology Encephalopathies",
    content: "Enumerate 4 secondary brain lesions or encephalopathies that cause a secondary metabolic Coma.",
    answer: "1. Hypoxic encephalopathy (following cardiac arrest or severe shock).\n2. Diabetic Ketoacidosis (DKA) encephalopathy.\n3. Hypoglycemic coma.\n4. Uremic or hepatic encephalopathy (secondary to acute renal or hepatic failure).",
    isClinical: false,
    topic: "Topic Three: Coma"
  },
  {
    id: "q-e-co-3",
    chapterId: 4,
    type: "short-essay",
    title: "Urgent diagnostic Coma screens",
    content: "Enumerate 4 urgent diagnostic laboratory or screening investigations required for a child presenting in an unexplained coma.",
    answer: "1. Rapid blood glucose level (to rule out hypoglycemia or DKA).\n2. Arterial Blood Gases (ABG) and serum electrolytes.\n3. Renal function tests (blood urea nitrogen and creatinine) and liver enzymes.\n4. Urgent sepsis screening (CBC, CRP) and toxicological screening if suspected.",
    isClinical: false,
    topic: "Topic Three: Coma"
  },
  {
    id: "q-e-co-4",
    chapterId: 4,
    type: "short-essay",
    title: "Invasive intracranial pressure management",
    content: "Enumerate 4 standard non-specific medical measures implemented to control acute increased Intracranial Pressure (ICP) in a comatose child.",
    answer: "1. Head elevation to 30 degrees in a neutral midline position (to enhance venous drainage).\n2. Maintenance fluid restriction to approximately 70% of normal requirements.\n3. Administration of osmotic diuretics, specifically intravenous Mannitol (0.25-0.5 g/kg).\n4. Administration of loop diuretics (Lasix) and instituting controlled mechanical hyperventilation.",
    isClinical: true,
    topic: "Topic Three: Coma"
  },
  {
    id: "q-e-co-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Severe Head injury coma Case",
    content: "A 5-year-old child is brought to the resuscitation room completely unconscious following a severe head injury. On physical assessment, he does not respond to painful stimuli, breathes spontaneously, features a bulging anterior fontanel, and demonstrates asymmetric sluggish pupillary responses to light.\n\nQuestions:\n1. What does the presence of asymmetric pupillary responses and asymmetric motor signs indicate?\n2. Enumerate 2 gastrointestinal and eye/skin protective measures required in the daily management of this comatose child.",
    answer: "1. It indicates a lateralizing sign, suggesting a focal brain lesion or localized mass effect/hemorrhage.\n2. Administration of antacids to prevent stress ulcers, and applying protective eye drops/ointments to prevent corneal damage.",
    isClinical: true,
    topic: "Topic Three: Coma"
  },

  // topic: "Topic Four: Glasgow Coma Scale and its Advantages"
  {
    id: "q-e-gcs-1",
    chapterId: 4,
    type: "define",
    title: "Define Glasgow Coma Scale",
    content: "Define the \"Glasgow Coma Scale (GCS)\" and state its primary clinical purpose.",
    answer: "It is an objective, standardized neurological scale providing a numerical score from 3 to 15 based on three behavioral parameters (Eye opening, Verbal response, Motor response), utilized to rapidly assess the depth of altered consciousness and cerebral cortical function.",
    isClinical: false,
    topic: "Topic Four: Glasgow Coma Scale and its Advantages"
  },
  {
    id: "q-e-gcs-2",
    chapterId: 4,
    type: "short-essay",
    title: "GCS Advantages",
    content: "Enumerate 4 distinct \"Advantages\" of utilizing the Glasgow Coma Scale in pediatric emergency settings.",
    answer: "1. Objective and standardized: Eliminates subjective bias, providing a numerical score to easily track changes over time.\n2. Simple and quick: Can be rapidly applied at the bedside in emergency rooms, trauma bays, and PICUs.\n3. Widely accepted internationally: Allows clear, standardized communication regarding patient status between different medical providers.\n4. Strong predictive and triage value: A GCS score of 8 or less accurately identifies severe brain injury and dictates the immediate need for airway protection.",
    isClinical: false,
    topic: "Topic Four: Glasgow Coma Scale and its Advantages"
  },
  {
    id: "q-e-gcs-3",
    chapterId: 4,
    type: "short-essay",
    title: "GCS Disadvantages",
    content: "Enumerate 4 prominent \"Disadvantages or Limitations\" of the Glasgow Coma Scale.",
    answer: "1. Limited utility in young preverbal infants: The verbal component is highly difficult to score accurately in children who cannot talk.\n2. Confounded by medical interventions: Therapeutic sedation, endotracheal intubation, or neuromuscular blockade completely alter or mask true scores.\n3. Fails to evaluate brainstem function directly: Crucial indicators like pupillary reactivity, oculocephalic reflexes, and corneal responses are entirely excluded.\n4. Fails to identify the etiology: It solely measures the clinical level of consciousness, providing no diagnostic insight into the cause of coma.",
    isClinical: false,
    topic: "Topic Four: Glasgow Coma Scale and its Advantages"
  },

  {
    id: "q-e-gcs-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Fall assessment scoring Case",
    content: "A 3-year-old child is evaluated in the emergency room following a fall. On assessment, she opens her eyes only when spoken to (3 points), emits consolable crying when irritable (4 points), and withdraws her limb from a painful stimulus (4 points).\n\nQuestions:\n1. Calculate the total Glasgow Coma Scale score for this pediatric patient.\n2. Does this patient's score indicate an immediate, mandatory requirement for endotracheal intubation based on GCS guidelines?",
    answer: "1. Total GCS Score = 3 (Eye) + 4 (Verbal) + 4 (Motor) = 11.\n2. No, aggressive airway protection and intubation are indicated when the GCS score drops to 8 or less.",
    isClinical: true,
    topic: "Topic Four: Glasgow Coma Scale and its Advantages"
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
    id: "q-fm-pfm-5",
    chapterId: 5,
    type: "problem-solving",
    title: "A Holistic Care Approach Case",
    content: "A family physician reviews a patient's medical chart. Instead of focusing only on the patient's acute complaint of elevated blood pressure, the physician schedules a well-person visit to evaluate the patient's lifestyle, family dynamics, stress levels, and occupational environment.\n\nQuestions:\n1. What specific medical care approach is the family physician demonstrating here?\n2. Enumerate 2 non-clinical settings or networks that are evaluated under family-oriented care.",
    answer: "1. A holistic and patient-centered clinical approach.\n2. Family dynamics and living or working conditions.",
    isClinical: true,
    topic: "Principles of Family Medicine"
  },

  // topic: "The Family Physician (Five-Star Doctor)"
  {
    id: "q-fm-tfp-1",
    chapterId: 5,
    type: "define",
    title: "Define Family Physician Role",
    content: "Define the role of a \"Family Physician\".",
    answer: "A family physician is a medical doctor working at the front line of health care, responsible for providing comprehensive, continuous, and person-centered care (physical, psychological, and social) to individuals within the context of their families, and to families within the context of their communities.",
    isClinical: false,
    topic: "The Family Physician (Five-Star Doctor)"
  },
  {
    id: "q-fm-tfp-2",
    chapterId: 5,
    type: "short-essay",
    title: "WHO Five-Star Doctor Roles",
    content: "Enumerate the 5 roles that comprise the WHO definition of a \"Five-Star Doctor\".",
    answer: "1. Assesses and improves the quality of care (Care provider).\n2. Makes optimal use of new technologies in health care (Decision maker).\n3. Promotes healthy lifestyles (Health communicator).\n4. Recognizes individual and community health needs (Community leader).\n5. Works efficiently as a member of the health care team (Manager).",
    isClinical: false,
    topic: "The Family Physician (Five-Star Doctor)"
  },
  {
    id: "q-fm-tfp-3",
    chapterId: 5,
    type: "short-essay",
    title: "Family Physician Core Characteristics",
    content: "Enumerate 4 primary characteristics or functions a Family Physician must demonstrate in practice.",
    answer: "1. A strong sense of responsibility for the total and continuous care of individuals and families.\n2. Compassion, empathy, and a genuine interest in patients and their families.\n3. The ability to manage multiple medical problems occurring simultaneously.\n4. Skills necessary for the long-term management of chronic diseases and educating families.",
    isClinical: false,
    topic: "The Family Physician (Five-Star Doctor)"
  },
  {
    id: "q-fm-tfp-4",
    chapterId: 5,
    type: "short-essay",
    title: "Manager Role Responsibilities",
    content: "Enumerate 4 distinct responsibilities that define the \"Managerial Role\" of the family physician within a Family Health Center (FHC).",
    answer: "1. Responsibility for all technical and administrative activities within the center.\n2. Promoting intersectoral coordination between health, education, and social services.\n3. Ensuring the strict implementation of national health policies and health service programs.\n4. Investigating public complaints and ensuring appropriate responses to community needs.",
    isClinical: true,
    topic: "The Family Physician (Five-Star Doctor)"
  },
  {
    id: "q-fm-tfp-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Curative Care Role Case",
    content: "A family physician is organizing her morning practice. She reviews family health records, performs accurate general medical examinations, and selects drugs rationally from the Essential Drug List while arranging home visits for elderly immobile patients.\n\nQuestions:\n1. What specific role category of the family physician do these actions represent?\n2. Enumerate 2 specific chronic diseases prevalent in the primary care area that require continuous follow-up by the family health team.",
    answer: "1. The Curative Role.\n2. Hypertension and Diabetes Mellitus.",
    isClinical: true,
    topic: "The Family Physician (Five-Star Doctor)"
  },

  // topic: "RISE Approach in Prevention"
  {
    id: "q-fm-rise-1",
    chapterId: 5,
    type: "short-essay",
    title: "RISE Acronym Components",
    content: "Enumerate the 4 components represented by the acronym \"RISE\" framework in family medicine prevention.",
    answer: "1. R - Risk assessment.\n2. I - Immunization.\n3. S - Screening.\n4. E - Education.",
    isClinical: false,
    topic: "RISE Approach in Prevention"
  },
  {
    id: "q-fm-rise-2",
    chapterId: 5,
    type: "short-essay",
    title: "Risk Assessment Examples",
    content: "Enumerate 4 examples of the \"Risk Assessment (R)\" component at individual and family levels.",
    answer: "1. Identifying risk factors for chronic non-communicable diseases (like obesity or smoking).\n2. Evaluating genetic predispositions through detailed family history.\n3. Assessing emotional or psychosocial problems affecting family stability.\n4. Identifying environmental or occupational hazards in the household catchment area.",
    isClinical: false,
    topic: "RISE Approach in Prevention"
  },
  {
    id: "q-fm-rise-3",
    chapterId: 5,
    type: "short-essay",
    title: "Screening Target Diseases",
    content: "Enumerate 4 common diseases targeted under the \"Screening (S)\" or early detection component of primary care.",
    answer: "1. Hypertension.\n2. Diabetes Mellitus.\n3. Breast cancer (via annual clinical breast examination).\n4. Anemia.",
    isClinical: false,
    topic: "RISE Approach in Prevention"
  },

  {
    id: "q-fm-rise-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Ischemic Heart Risk Case",
    content: "A 45-year-old heavy smoker with a family history of premature ischemic heart disease visits the Family Health Center. The family physician checks his lipid profile, records his blood pressure, and schedules a counseling session regarding smoking cessation.\n\nQuestions:\n1. Mention the components of the RISE approach being utilized during this clinical encounter.\n2. What is the primary clinical goal of implementing the RISE framework for chronic conditions?",
    answer: "1. Risk assessment, Screening, and Education.\n2. To achieve early detection, promote healthy lifestyles, and delay or minimize the impact of chronic complications.",
    isClinical: true,
    topic: "RISE Approach in Prevention"
  },

  // topic: "Family Medicine Model vs. Specialist Care"
  {
    id: "q-fm-fmm-1",
    chapterId: 5,
    type: "short-essay",
    title: "Family Medicine vs Specialist Focus",
    content: "Enumerate 4 distinct features that differentiate the Family Medicine Model from the Specialist/Traditional Care Model regarding patient care and focus.",
    answer: "1. Family Medicine provides care within the context of the family, whereas Specialist care focuses regardless of family context.\n2. Family Medicine is patient-centered (recognizing values/needs), whereas Specialist care is problem-centered (focusing on a specific disease or complaint).\n3. Family Medicine places strong emphasis on a continuous, healing relationship, whereas Specialist care has limited appreciation of the physician-patient relationship.\n4. Family Medicine is individual, family, and community-oriented, whereas Specialist care is individual patient-oriented.",
    isClinical: false,
    topic: "Family Medicine Model vs. Specialist Care"
  },
  {
    id: "q-fm-fmm-2",
    chapterId: 5,
    type: "short-essay",
    title: "Organizational Model Differences",
    content: "Enumerate 4 organizational differences between the Traditional Model of Practice and the Family Medicine Model.",
    answer: "1. Traditional systems often disrupt relationships, whereas Family Medicine systems support continuous, healing relationships.\n2. Traditional care features a single physician model, whereas Family Medicine utilizes a multidisciplinary team approach.\n3. Traditional documentation uses paper-based records, whereas Family Medicine utilizes electronic health records.\n4. Traditional practice style is mostly reactive, whereas Family Medicine is both responsive and proactive.",
    isClinical: false,
    topic: "Family Medicine Model vs. Specialist Care"
  },
  {
    id: "q-fm-fmm-3",
    chapterId: 5,
    type: "short-essay",
    title: "Chronic Disease Management Features",
    content: "Enumerate 4 characteristics of chronic disease management under the Family Medicine Model.",
    answer: "1. Management is purposeful and structurally organized.\n2. Driven by integrated, practice-based, and evidence-based practice guidelines.\n3. Integrates preventive, curative, and rehabilitative primary care services.\n4. Utilizes continuous quality and safety measurements for service improvement.",
    isClinical: true,
    topic: "Family Medicine Model vs. Specialist Care"
  },

  {
    id: "q-fm-fmm-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Multidisciplinary Care Model Case",
    content: "A patient presents to a medical facility with multiple overlapping symptoms of poorly controlled type 2 diabetes, peripheral neuropathy, and signs of clinical depression. In this facility, a multidisciplinary healthcare team handles his care, utilizing integrated electronic health records to provide continuous tracking and proactive interventions.\n\nQuestions:\n1. Which healthcare model of practice does this system explicitly represent?\n2. What are the three dimensions integrated into the core process of family medicine?",
    answer: "1. The Family Medicine Model.\n2. Knowledge, Clinical skills, and a Unique care process.",
    isClinical: true,
    topic: "Family Medicine Model vs. Specialist Care"
  },

  // topic: "Family Health Team Composition"
  {
    id: "q-fm-fht-1",
    chapterId: 5,
    type: "short-essay",
    title: "Clinical Staff Members",
    content: "Enumerate 4 distinct members that comprise the \"Clinical Staff\" of the multidisciplinary Family Health Team.",
    answer: "1. Family Physicians.\n2. Nurses.\n3. Pharmacists.\n4. Laboratory Technicians / Assistants.",
    isClinical: false,
    topic: "Family Health Team Composition"
  },
  {
    id: "q-fm-fht-2",
    chapterId: 5,
    type: "short-essay",
    title: "Administrative and Support Staff",
    content: "Enumerate 4 distinct members that comprise the \"Administrative and Support Staff\" of a Family Health Team.",
    answer: "1. Medical Records Officer.\n2. Front Office Staff / Assistants.\n3. Births and Deaths Officer.\n4. Janitors and Guards (or Storage Room Officer).",
    isClinical: false,
    topic: "Family Health Team Composition"
  },
  {
    id: "q-fm-fht-3",
    chapterId: 5,
    type: "short-essay",
    title: "Leader Duties of Family Physician",
    content: "Enumerate 4 primary duties of the Family Physician acting as the leader of the Family Health Team.",
    answer: "1. Directing and coordinating all technical and clinical team activities.\n2. Supporting collaborative teamwork and multidisciplinary team building.\n3. Ensuring the integrated delivery of clinical, preventive, and administrative services.\n4. Supervising the field implementation of Primary Health Care (PHC) activities.",
    isClinical: false,
    topic: "Family Health Team Composition"
  },
  {
    id: "q-fm-fht-4",
    chapterId: 5,
    type: "short-essay",
    title: "Catchment Area Team Duties",
    content: "Enumerate 4 distinct responsibilities of the Family Health Team regarding family practice catchment area activities.",
    answer: "1. Managing a defined, registered roster of families within the community catchment area.\n2. Providing continuous and comprehensive primary care for all registered families.\n3. Creating, updating, and maintaining comprehensive family folders and health files.\n4. Implementing specific national priority healthcare programs (such as IMCI and Family Planning).",
    isClinical: true,
    topic: "Family Health Team Composition"
  },
  {
    id: "q-fm-fht-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Center Workload Meeting Case",
    content: "The manager of a Family Health Center holds a staff meeting to upgrade clinical outcomes. He notes that improving team performance requires structured job clarity, ongoing skills capacity-building, and communication channels.\n\nQuestions:\n1. Who is the designated leader responsible for directing this multidisciplinary healthcare team?\n2. Enumerate 2 essential factors that help in upgrading and improving Family Health Team clinical performance.",
    answer: "1. The Family Physician.\n2. Clearly defined job descriptions for each team member and regular team meetings for monitoring and problem-solving.",
    isClinical: true,
    topic: "Family Health Team Composition"
  },

  // topic: "Family Dynamics & CAPRS Framework"
  {
    id: "q-fm-fdc-1",
    chapterId: 5,
    type: "define",
    title: "Define Family Parameter",
    content: "Define the clinical parameter of a \"Family\" in family practice.",
    answer: "The family is the basic structural and functional unit of the community, consisting of two or more related persons living together in the same household for more than 6 months.",
    isClinical: false,
    topic: "Family Dynamics & CAPRS Framework"
  },
  {
    id: "q-fm-fdc-2",
    chapterId: 5,
    type: "short-essay",
    title: "CAPRS Framework Functions",
    content: "Enumerate the 5 functions of the family represented by the \"CAPRS\" framework.",
    answer: "1. C - Care.\n2. A - Affection.\n3. P - Providing status.\n4. R - Reproduction.\n5. S - Socialization.",
    isClinical: false,
    topic: "Family Dynamics & CAPRS Framework"
  },
  {
    id: "q-fm-fdc-3",
    chapterId: 5,
    type: "short-essay",
    title: "Biological Family Risk Factors",
    content: "Enumerate 4 distinct conditions or categories where family history explicitly contributes to patient risk (The Biologic Family risk factor).",
    answer: "1. Cancers (especially breast, colon, prostate, and ovarian).\n2. Cardiovascular diseases (Hypertension, atherosclerosis, coronary artery disease).\n3. Metabolic disorders (Diabetes Mellitus and Hyperlipidemia).\n4. Autoimmune or endocrinal disorders.",
    isClinical: true,
    topic: "Family Dynamics & CAPRS Framework"
  },
  {
    id: "q-fm-fdc-4",
    chapterId: 5,
    type: "short-essay",
    title: "Family as a Stress Source",
    content: "Enumerate 4 examples of \"Negative Roles\" the family can play as a source of stress or illness.",
    answer: "1. Vertical transmission of hereditary and genetic disorders.\n2. Horizontal spread of communicable / infectious diseases.\n3. Adoption or reinforcement of unhealthy lifestyle habits (such as smoking or poor diet).\n4. Exposure to family conflicts creating intense psychosocial and mental pressure.",
    isClinical: true,
    topic: "Family Dynamics & CAPRS Framework"
  },
  {
    id: "q-fm-fdc-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Genetic Risk Genogram Case",
    content: "A family physician is constructing a clinical file for a newly registered patient. To accurately evaluate hereditary and genetic risks for early disease screening, the physician uses a genogram to map out relatives related by blood.\n\nQuestions:\n1. Which specific family classification type is the physician evaluating to assess genetic risks?\n2. Mention the family function component from the CAPRS framework that deals with the provision of basic needs like food, shelter, and social support.",
    answer: "1. The Biologic Family.\n2. C - Care.",
    isClinical: true,
    topic: "Family Dynamics & CAPRS Framework"
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
    topic: "The Human Life Cycle Stages"
  },
  {
    id: "q-fm-hlc-2",
    chapterId: 5,
    type: "short-essay",
    title: "Preconception Health Needs",
    content: "Enumerate 4 primary health needs or clinical interventions focused during the \"Preconception\" stage.",
    answer: "1. Premarital clinical counseling.\n2. Comprehensive premarital medical examination.\n3. Inter-conception care and child spacing advice.\n4. Genetic counseling when structurally indicated.",
    isClinical: true,
    topic: "The Human Life Cycle Stages"
  },
  {
    id: "q-fm-hlc-3",
    chapterId: 5,
    type: "short-essay",
    title: "Pediatric Health Risks",
    content: "Enumerate 4 common pediatric health risks or nutritional deficiencies encountered during the \"Breast Dependence & Preschool Age\" stages.",
    answer: "1. Practical acute respiratory tract infections (ARI).\n2. Acute diarrheal diseases.\n3. Protein-energy malnutrition (such as Kwashiorkor or Marasmus).\n4. Micronutrient deficiencies (such as Rickets or Vitamin A deficiency).",
    isClinical: true,
    topic: "The Human Life Cycle Stages"
  },
  {
    id: "q-fm-hlc-4",
    chapterId: 5,
    type: "short-essay",
    title: "Adolescence Risk Factors",
    content: "Enumerate 4 classic behavioral or psychological risk factors characteristic of the \"Adolescence\" life cycle stage.",
    answer: "1. Psychological and emotional instability linked to puberty.\n2. Initiation of tobacco smoking or substance use.\n3. Onset of eating disorders (such as anorexia nervosa or obesity).\n4. Risk-taking behaviors, delinquency, or vulnerability to peer pressure.",
    isClinical: false,
    topic: "The Human Life Cycle Stages"
  },
  {
    id: "q-fm-hlc-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Maternal & Childhood Programs Case",
    content: "A family physician sets up a primary care schedule. He separates clinical programs into maternal care for fetal life, integrated childhood management (IMCI) for toddlers, and psychosocial counseling for individuals undergoing a gradual decline in functional abilities.\n\nQuestions:\n1. What is the clinical term used to describe the developmental stage of gradual physical decline and aging?\n2. Through which integrated public program are the needs of breast-dependent and preschool children managed in family practice?",
    answer: "1. Senescence.\n2. The IMCI (Integrated Management of Childhood Illness) program within maternal and child health (MCH) services.",
    isClinical: true,
    topic: "The Human Life Cycle Stages"
  },

  // topic: "Basic Benefit Package (BBP) & Levels of Care"
  {
    id: "q-fm-bbp-1",
    chapterId: 5,
    type: "define",
    title: "Define BBP",
    content: "Define the \"Basic Benefit Package (BBP)\" within the Universal Health Insurance System.",
    answer: "The BBP is a defined, integrated group of essential medical services delivered through primary health care to meet the priority health needs of the population, with particular emphasis on women, children, and vulnerable groups, financed to ensure equity, accessibility, and financial protection.",
    isClinical: false,
    topic: "Basic Benefit Package (BBP) & Levels of Care"
  },
  {
    id: "q-fm-bbp-2",
    chapterId: 5,
    type: "short-essay",
    title: "BBP Core Characteristics",
    content: "Enumerate 4 core characteristics or regulatory design benefits of the BBP.",
    answer: "1. Provides a clearly defined set of integrated curative, preventive, and public health services.\n2. Tailored explicitly to baseline population health needs, focusing on poor and low-income groups.\n3. Ensures cost-effectiveness, maximization of efficiency, and financial protection.\n4. Limits the duplication of services, unnecessary investigations, and multi-provider drug dispensing costs.",
    isClinical: false,
    topic: "Basic Benefit Package (BBP) & Levels of Care"
  },
  {
    id: "q-fm-bbp-3",
    chapterId: 5,
    type: "short-essay",
    title: "BBP Delivery Levels",
    content: "Enumerate the 3 levels of service delivery of the BBP under the Family Health Delivery Model.",
    answer: "1. Family Health Unit (FHU) level.\n2. Family Health Centre (FHC) level.\n3. Hospital Level (Specialist care).",
    isClinical: false,
    topic: "Basic Benefit Package (BBP) & Levels of Care"
  },

  {
    id: "q-fm-bbp-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Universal Insurance Roster Case",
    content: "A Universal Health Insurance administrator reviews center workloads. He notes that simple infections and vaccinations are sorted at the unit, deliveries and complex chemistries are routed to the health center, and emergency surgeries require direct secondary transfer.\n\nQuestions:\n1. What is the designated BBP service level responsible for specialist outpatient care, basic inpatient stays, and emergency surgery?\n2. Enumerate 2 basic laboratory investigations available at the Family Health Unit (FHU) level.",
    answer: "1. The Hospital Level.\n2. Hemoglobin (Hb) and Urine analysis (or blood glucose).",
    isClinical: true,
    topic: "Basic Benefit Package (BBP) & Levels of Care"
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
    topic: "Maternal & Women's Health in BBP"
  },
  {
    id: "q-fm-mwh-2",
    chapterId: 5,
    type: "short-essay",
    title: "Postnatal Care Components",
    content: "Enumerate 4 distinct components of \"Postnatal and Post-Abortive Care\" integrated into women's health services.",
    answer: "1. Clinical management and follow-up of the normal postpartum period.\n2. Timely identification and rapid hospital referral of complicated postpartum or post-abortive cases.\n3. Early detection of recurrent abortion risk and medical counseling of post-abortive women.\n4. Provision of intensive breastfeeding guidance and postpartum family planning counseling.",
    isClinical: true,
    topic: "Maternal & Women's Health in BBP"
  },
  {
    id: "q-fm-mwh-3",
    chapterId: 5,
    type: "short-essay",
    title: "Family Planning Interventions",
    content: "Enumerate 4 clinical services or contraceptive interventions provided under primary \"Family Planning\" (FP) services.",
    answer: "1. Community health education and contraceptive information campaigns.\n2. Provision and clinical insertion of modern contraceptive methods.\n3. Early identification and management of contraceptive side effects.\n4. Initial clinical workup and structured referral of complicated infertility cases.",
    isClinical: true,
    topic: "Maternal & Women's Health in BBP"
  },

  {
    id: "q-fm-mwh-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Antenatal Checkup Urgency Case",
    content: "A 26-year-old pregnant woman in her second trimester attends the Family Health Unit. The family physician checks her blood pressure to screen for pre-eclampsia, measures her hemoglobin for anemia, and administers a dose of Tetanus Toxoid vaccine.\n\nQuestions:\n1. Which specific component category of Women's Health Services is being delivered here?\n2. Where should this patient be immediately referred if she displays high-risk pregnancy markers or severe pre-eclampsia?",
    answer: "1. Antenatal Care (ANC).\n2. Referred to a Family Health Centre (FHC) or a secondary care Hospital.",
    isClinical: true,
    topic: "Maternal & Women's Health in BBP"
  },

  // topic: "Patient Education Principles"
  {
    id: "q-fm-pep-1",
    chapterId: 5,
    type: "define",
    title: "Define Patient Education",
    content: "Define \"Patient Education\" in family medicine.",
    answer: "Patient education is a continuous process of teaching and learning between health care providers and patients that aims to influence patient behaviour and produce positive changes in knowledge, attitudes, and skills required to maintain or improve health.",
    isClinical: false,
    topic: "Patient Education Principles"
  },
  {
    id: "q-fm-pep-2",
    chapterId: 5,
    type: "short-essay",
    title: "Patient Education Clinical Values",
    content: "Enumerate 4 primary clinical values or benefits of implementing effective Patient Education.",
    answer: "1. Significantly increases patient satisfaction with medical care and management plans.\n2. Promotes healthy behaviors and helps patients modify unhealthy habits.\n3. Reduces unnecessary health care utilization, avoidable office visits, and phone consultations.\n4. Decreases serious illness outcomes and complications, reducing hospitalization and emergency costs.",
    isClinical: false,
    topic: "Patient Education Principles"
  },
  {
    id: "q-fm-pep-3",
    chapterId: 5,
    type: "short-essay",
    title: "Educational Intervention Moments",
    content: "Enumerate 4 distinct moments or times within a single clinical encounter where patient education should actively take place.",
    answer: "1. During history taking: to assess baseline knowledge, identify habits, and correct initial misconceptions.\n2. During physical examination: to explain the specific purpose of examination maneuvers and findings.\n3. During diagnosis discussion: to clarify the condition and explain medical terminology in simple language.\n4. During treatment planning: to assess patient understanding, identify barriers to adherence, and ensure feasibility.",
    isClinical: true,
    topic: "Patient Education Principles"
  },
  {
    id: "q-fm-pep-4",
    chapterId: 5,
    type: "short-essay",
    title: "Core Educational Principles",
    content: "Enumerate the 4 core educational principles represented by Feedback, Reinforcement, Individualization, and Facilitation.",
    answer: "1. Feedback: Ensuring explicitly that the patient accurately understands the medical information provided.\n2. Reinforcement: Encouraging and rewarding clinical progress to support permanent behavior change.\n3. Individualization: Tailoring health messages according to the patient's unique characteristics and goals.\n4. Facilitation: Providing clear educational materials or skills training to help patients make informed decisions.",
    isClinical: false,
    topic: "Patient Education Principles"
  },
  {
    id: "q-fm-pep-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Clinic Education Outreach Case",
    content: "A family physician plans a practice reorganization. She integrates educational posters in the waiting room, trains nursing staff to run weight-loss and smoking cessation groups, and ensures family members are included when instructing a diabetic patient on insulin use.\n\nQuestions:\n1. What principle of patient education is highlighted by using posters, videos, and involving the entire healthcare team?\n2. Why is involving the family unit considered essential when educating elderly or pediatric patients?",
    answer: "1. Use of multiple educational channels.\n2. To ensure effective home care safety, accurate lifestyle modification, and strict treatment adherence.",
    isClinical: true,
    topic: "Patient Education Principles"
  },

  // topic: "Referral Letter Elements & Guidelines"
  {
    id: "q-fm-rle-1",
    chapterId: 5,
    type: "define",
    title: "Define Referral vs Consultation",
    content: "Define a \"Referral\" and differentiate it from a \"Consultation\".",
    answer: "Referral is the transferring of the responsibility of a patient to another physician for the care of a specific problem. Consultation is the practice of one physician asking another for an opinion or assistance regarding diagnosis and management, while retaining primary responsibility.",
    isClinical: false,
    topic: "Referral Letter Elements & Guidelines"
  },
  {
    id: "q-fm-rle-2",
    chapterId: 5,
    type: "short-essay",
    title: "Primary Referral Purposes",
    content: "Enumerate 4 valid reasons or purposes for making a formal referral to secondary care.",
    answer: "1. Inadequate diagnostic or therapeutic resources available within the family practice clinic setting.\n2. Need for expert confirmation of a complex provisional diagnosis or plan of management.\n3. Handling a clinical emergency that requires specialized inpatient or surgical intervention.\n4. Honoring a direct patient request for a second opinion to preserve the doctor-patient relationship.",
    isClinical: true,
    topic: "Referral Letter Elements & Guidelines"
  },
  {
    id: "q-fm-rle-3",
    chapterId: 5,
    type: "short-essay",
    title: "Referral Letter Standards",
    content: "Enumerate 4 general criteria that a high-quality Referral Letter must fulfill.",
    answer: "1. It must be concise and contain only essential, relevant data.\n2. Written using clear, simple, and legible language.\n3. Explicitly clarify and specify the reasons for referral and expectations from the specialist.\n4. Fully documented within the patient's family file and the center's referral register.",
    isClinical: false,
    topic: "Referral Letter Elements & Guidelines"
  },
  {
    id: "q-fm-rle-4",
    chapterId: 5,
    type: "short-essay",
    title: "Referral Letter Elements",
    content: "Enumerate 4 essential clinical \"Elements\" that must be written inside a standard Referral Letter.",
    answer: "1. Socio-demographic data (name, age, sex, family health record number).\n2. Main clinical complaint and brief present history of the illness.\n3. Relevant physical examination findings and matching primary investigation results.\n4. Current medications in use (including exact dosages) and documented drug allergies.",
    isClinical: false,
    topic: "Referral Letter Elements & Guidelines"
  },
  {
    id: "q-fm-rle-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Angina Urgency Referral Case",
    content: "A family physician evaluates a patient with signs of severe, progressive unstable angina. The physician identifies that the patient will suffer direct harm if not shifted immediately, fills out a concise emergency communication form, and coordinates the specialist feedback loop.\n\nQuestions:\n1. What type of referral classification does this emergent scenario represent?\n2. What are the core responsibilities of the receiving consultant specialist back to the referring family physician?",
    answer: "1. An Urgent Referral.\n2. Providing services in a timely manner, communicating findings in a timely matter, and notifying them when the patient is admitted or discharged.",
    isClinical: true,
    topic: "Referral Letter Elements & Guidelines"
  },

  // topic: "Anticipatory Care: Child Growth & Immunization"
  {
    id: "q-fm-aci-1",
    chapterId: 5,
    type: "define",
    title: "Define Anticipatory Care",
    content: "Define \"Anticipatory Care\" and differentiate between primary and secondary disease prevention lines.",
    answer: "Anticipatory care refers to all measures aiming to promote good health and prevent or delay diseases or their complications across different age groups. Primary prevention focuses on preventing disease development (vaccines/education), while secondary prevention focuses on early diagnosis and treatment (screening).",
    isClinical: false,
    topic: "Anticipatory Care: Child Growth & Immunization"
  },
  {
    id: "q-fm-aci-2",
    chapterId: 5,
    type: "short-essay",
    title: "Childhood Educational Guidance",
    content: "Enumerate 4 important health education messages delivered during childhood anticipatory care visits.",
    answer: "1. The vital importance of well-baby care and the exact timing for periodic visits.\n2. Promotion of exclusive breastfeeding and proper nutritional weaning techniques.\n3. Adherence to the national compulsory immunization schedule.\n4. Home accident prevention and early management of diarrhea using Oral Rehydration Therapy (ORT).",
    isClinical: true,
    topic: "Anticipatory Care: Child Growth & Immunization"
  },
  {
    id: "q-fm-aci-3",
    chapterId: 5,
    type: "short-essay",
    title: "False Vaccine Contraindications",
    content: "Enumerate 4 childhood conditions or medical histories that are falsely considered contraindications but are actually SAFE for immunization.",
    answer: "1. Prematurity (infants should be immunized at their usual chronological age).\n2. Mild recent acute infections, such as otitis media or mild fever.\n3. Documented history of penicillin allergy.\n4. Mild localized reactions to a previous vaccine dose.",
    isClinical: true,
    topic: "Anticipatory Care: Child Growth & Immunization"
  },
  {
    id: "q-fm-aci-4",
    chapterId: 5,
    type: "short-essay",
    title: "True Vaccine Contraindications",
    content: "Enumerate 4 true, absolute medical \"Contraindications\" to child immunization.",
    answer: "1. Documented history of a severe anaphylactic reaction to a previous vaccine component.\n2. Onset of a seizure or a high fever >40.5°C within 48 hours of a prior pertussis vaccine dose.\n3. True, severe egg allergy or neomycin allergy (specifically for the MMR vaccine).\n4. Severe immunocompromised state (absolute contraindication for live vaccines like OPV).",
    isClinical: true,
    topic: "Anticipatory Care: Child Growth & Immunization"
  },
  {
    id: "q-fm-aci-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Scheduled Vaccination Visit Case",
    content: "An infant is brought to the primary care unit on his scheduled vaccination day. The mother notes he has a mild runny nose and is breastfeeding normally. The provider notes a mild cough but no danger signs. The mother is worried the vaccine will harm him.\n\nQuestions:\n1. What are the two primary components evaluated during a child's periodic health examination?\n2. Should the clinician administer the scheduled vaccines or delay them due to the mild runny nose?",
    answer: "1. Growth and development monitoring, combined with a full clinical and laboratory examination.\n2. Administer the vaccines; mild recent infections without severe systemic symptoms are not true contraindications to immunization.",
    isClinical: true,
    topic: "Anticipatory Care: Child Growth & Immunization"
  },

  // topic: "Adolescent Psychosocial Health (HEEADSSS Framework)"
  {
    id: "q-fm-aph-1",
    chapterId: 5,
    type: "define",
    title: "Define Adolescence Parameters",
    content: "Define the parameters of \"Adolescence\" according to WHO age group classifications.",
    answer: "WHO defines 'Adolescents' as individuals in the 10-19 years age group, 'Youth' as the 15-24 year age group, and 'Young People' as covering the expanded age range of 10-24 years. It is a developmental phase rather than a fixed time period.",
    isClinical: false,
    topic: "Adolescent Psychosocial Health (HEEADSSS Framework)"
  },
  {
    id: "q-fm-aph-2",
    chapterId: 5,
    type: "short-essay",
    title: "HEEADSSS Framework Letters",
    content: "Enumerate the developmental stages represented by the letters in the adolescent \"HEEADSSS\" psychosocial interview tool.",
    answer: "1. Home environment.\n2. Eating and nutrition.\n3. Education and employment.\n4. Activities.\n5. Drugs / Substance use.\n6. Sexuality.\n7. Suicide / Depression.\n8. Safety.",
    isClinical: false,
    topic: "Adolescent Psychosocial Health (HEEADSSS Framework)"
  },
  {
    id: "q-fm-aph-3",
    chapterId: 5,
    type: "short-essay",
    title: "Adolescence Emergent Health Issues",
    content: "Enumerate 4 common physical or behavioral health problems that emerge during the adolescent phase.",
    answer: "1. Eating disorders (such as anorexia nervosa, overweight, and structural obesity).\n2. Behavioral and psychological disorders (such as severe depression or adjustment reactions).\n3. Risk-taking substance abuse and early tobacco smoking dependency.\n4. Vulnerability to physical, emotional, or sexual abuse and high rates of accidental injuries.",
    isClinical: true,
    topic: "Adolescent Psychosocial Health (HEEADSSS Framework)"
  },
  {
    id: "q-fm-aph-4",
    chapterId: 5,
    type: "short-essay",
    title: "Adolescedet Physical Exam Guidelines",
    content: "Enumerate 4 key clinical guidelines recommendations for conducting a physical examination on a teenage patient.",
    answer: "1. Strictly respect physical privacy, avoid unnecessary body exposure, and keep doors closed.\n2. Permit parents to remain inside the examination room only if the adolescent explicitly requests it.\n3. Utilize the examination as a good teaching tool to talk and explain their bodies, lowering anxiety.\n4. Do not perform pelvic or genital examinations routinely; reserve them for direct request, if sexually active, or if presenting with localized pain.",
    isClinical: true,
    topic: "Adolescent Psychosocial Health (HEEADSSS Framework)"
  },
  {
    id: "q-fm-aph-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Teenager Checkup Interview Case",
    content: "A 15-year-old high school student attends the clinic for a check-up. The family physician builds a comfortable rapport and asks tailored questions about who lives at home, school grades, mood changes from day to day, and the regular use of vehicle seatbelts.\n\nQuestions:\n1. What is the name of this specific psychosocial screening interview framework?\n2. According to global epidemiologic data, what are the most frequent causes of preventable mortality among adolescents?",
    answer: "1. The HEEADSSS interview framework.\n2. Accidents (mostly motor vehicle crashes, many related to drug or alcohol use), followed closely by homicide and suicide.",
    isClinical: true,
    topic: "Adolescent Psychosocial Health (HEEADSSS Framework)"
  },

  // topic: "IMCI General Danger Signs & Pneumonia Classification"
  {
    id: "q-fm-gds-1",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI General Danger Signs",
    content: "Enumerate the 4 \"General Danger Signs\" that must be checked in every sick child aged 2 months up to 5 years under IMCI guidelines.",
    answer: "1. Is the child unable to drink or breastfeed?\n2. Does the child vomit everything?\n3. Has the child had convulsions during this current illness?\n4. Is the child lethargic or unconscious?",
    isClinical: true,
    topic: "IMCI General Danger Signs & Pneumonia Classification"
  },
  {
    id: "q-fm-gds-2",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Cough Assessment Signs",
    content: "Enumerate the clinical signs that look for, count, or listen to when assessing a child presenting with a cough or difficult breathing under IMCI.",
    answer: "1. Counting the breaths in one full minute (while the child is calm).\n2. Looking for the presence of chest indrawing (subcostal/intercostal retractions).\n3. Looking and listening for the presence of stridor.\n4. Looking and listening for the presence of wheezing.",
    isClinical: true,
    topic: "IMCI General Danger Signs & Pneumonia Classification"
  },
  {
    id: "q-fm-gds-3",
    chapterId: 5,
    type: "short-essay",
    title: "IMCI Respiratory Color Bands",
    content: "Enumerate the clinical criteria and matching IMCI classifications for respiratory symptoms across the three color-coded bands.",
    answer: "1. SEVERE PNEUMONIA OR VERY SEVERE DISEASE (Red Band): Any general danger sign OR stridor in a calm child OR chest indrawing.\n2. PNEUMONIA (Yellow Band): Presence of fast breathing without severe signs.\n3. NO PNEUMONIA: COUGH OR COLD (Green Band): No signs of pneumonia or very severe disease.",
    isClinical: true,
    topic: "IMCI General Danger Signs & Pneumonia Classification"
  },

  {
    id: "q-fm-gds-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Infant Cough Assessment Case",
    content: "A 14-month-old sick child is brought to a primary care health unit with a cough. On initial assessment, he is alert, able to breastfeed, and does not vomit. The clinician counts his respiratory rate as 46 breaths per minute while calm, and notes the absence of stridor or chest indrawing.\n\nQuestions:\n1. What is the correct IMCI respiratory classification for this child?\n2. Mention the first-line oral antibiotic drug, including the standard treatment duration, indicated by this classification.",
    answer: "1. PNEUMONIA (due to fast breathing >40/min for his age bracket, without danger signs).\n2. Oral Amoxicillin administered for a duration of 5 days.",
    isClinical: true,
    topic: "IMCI General Danger Signs & Pneumonia Classification"
  },

  // topic: "IMCI Sick Young Infant (Up to 2 Months)"
  {
    id: "q-fm-syi-1",
    chapterId: 5,
    type: "short-essay",
    title: "Sick Young Infant Systemic Checks",
    content: "Enumerate 4 core clinical conditions that must be systematically checked in every sick young infant up to 2 months of age according to IMCI charts.",
    answer: "1. Checking for possible serious bacterial infection or local infection.\n2. Checking for significant jaundice.\n3. Checking for diarrhoea and dehydration status.\n4. Checking for feeding problems or low weight status.",
    isClinical: true,
    topic: "IMCI Sick Young Infant (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-2",
    chapterId: 5,
    type: "short-essay",
    title: "Possible Serious Bacterial Infection Signs",
    content: "Enumerate 4 clinical signs that classify a young infant under the critical category of \"POSSIBLE SERIOUS BACTERIAL INFECTION\" (Red Box).",
    answer: "1. Not able to feed or decreased spontaneous movements.\n2. Convulsions (current or history during illness) or a bulging fontanelle.\n3. Fast breathing (60 breaths per minute or more) or severe chest indrawing/nasal flaring/grunting.\n4. High fever (37.5°C or above) or low body temperature (less than 35.5°C).",
    isClinical: true,
    topic: "IMCI Sick Young Infant (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-3",
    chapterId: 5,
    type: "short-essay",
    title: "Prereferral Urgent Treatment Steps",
    content: "Enumerate 4 urgent pre-referral treatment steps required for a young infant classified with a Possible Serious Bacterial Infection.",
    answer: "1. Administration of the first dose of intramuscular antibiotics (Ampicillin plus Gentamicin).\n2. Immediate medical treatment of current convulsions if present (rectal sodium valproate).\n3. Instituting measures to prevent low blood sugar (glucose or expressed breastmilk).\n4. Advising the mother how to keep the young infant warm (prevent hypothermia) on the way to the hospital.",
    isClinical: true,
    topic: "IMCI Sick Young Infant (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-4",
    chapterId: 5,
    type: "short-essay",
    title: "Breastfeeding Attachment Indicators",
    content: "Enumerate 4 indicators looked for when assessing Breastfeeding positioning and attachment in a young infant.",
    answer: "1. Infant's chin touching the breast, and the mouth wide open.\n2. Lower lip turned outward, and more areola visible above than below the mouth.\n3. Infant's neck straight or bent slightly back, with the body close and turned towards the mother.\n4. Infant suckling effectively, characterized by slow, deep sucks followed by occasional pauses.",
    isClinical: true,
    topic: "IMCI Sick Young Infant (Up to 2 Months)"
  },
  {
    id: "q-fm-syi-5",
    chapterId: 5,
    type: "problem-solving",
    title: "Umbilical Redness Infant Case",
    content: "A 6-week-old young infant is brought to a clinic. On assessment, he has no fever or severe danger signs, but his umbilicus is noted to be red and draining small amounts of pus, without the redness extending to the surrounding skin.\n\nQuestions:\n1. What is the correct IMCI clinical classification for this infant's umbilical finding?\n2. Enumerate 2 home care training steps the mother must perform to treat this local infection at home.",
    answer: "1. LOCAL BACTERIAL INFECTION.\n2. Washing hands and gently washing off pus with soap and water, followed by painting the area with gentian violet twice daily.",
    isClinical: true,
    topic: "IMCI Sick Young Infant (Up to 2 Months)"
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
    topic: "Hematuria"
  },
  {
    id: "q-r2-h-2",
    chapterId: 1,
    type: "short-essay",
    title: "Upper Urinary Tract Hematuria Causes",
    content: "Enumerate 4 prominent structural or chemical \"Upper Urinary Tract\" causes of extra-glomerular hematuria.",
    answer: "1. Pyelonephritis or interstitial nephritis.\n2. Acute tubular necrosis (ATN).\n3. Vascular thrombosis or malformations.\n4. Crystalluria (Calcium, Oxalate, or Uric acid).",
    isClinical: true,
    topic: "Hematuria"
  },
  {
    id: "q-r2-h-3",
    chapterId: 1,
    type: "short-essay",
    title: "Initial Hematuria Evaluation",
    content: "Enumerate 4 specific indicators searched for during the initial evaluation of a child with hematuria.",
    answer: "1. Careful medical history (including family history of renal disease).\n2. Thorough physical examination for signs of edema or hypertension.\n3. Fresh urine sample analysis for casts, bacteria, and crystals.\n4. Abdominal ultrasound to look for stones, tumors, or anatomical malformations.",
    isClinical: true,
    topic: "Hematuria"
  },

  {
    id: "q-r2-h-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Glomerular Hematuria Case",
    content: "A 6-year-old boy is brought to the clinic with persistent microscopic hematuria. On checking his fresh urine sample, the lab reports more than 5 RBCs per high power field, a protein level exceeding 100 mg/dL, and the distinct presence of red blood cell casts. His blood pressure is elevated.\n\nQuestions:\n1. State the precise clinical site/source of this child's hematuria.\n2. Enumerate 2 multisystem diseases that can cause this specific type of hematuria in children.",
    answer: "1. Renal (Glomerular) source.\n2. Systemic Lupus Erythematosus (SLE) nephritis and Henoch-Schönlein Purpura (HSP) nephritis.",
    isClinical: true,
    topic: "Hematuria"
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
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  },
  {
    id: "q-r2-a-2",
    chapterId: 1,
    type: "short-essay",
    title: "APSGN Supportive Management",
    content: "Enumerate 4 general supportive measures or dietary modifications required during the management of acute APSGN.",
    answer: "1. Strict bed rest, specifically indicated during the oliguric phase of the illness.\n2. Careful fluid restriction calculated precisely based on the patient's urine output and body surface area.\n3. Dietary restriction of both protein and salt (sodium).\n4. Providing a high-carbohydrate diet to ensure adequate caloric intake.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  },
  {
    id: "q-r2-a-3",
    chapterId: 1,
    type: "short-essay",
    title: "APSGN Microscopic Features",
    content: "Enumerate 4 classic laboratory or diagnostic features seen on light, immunofluorescence, and electron microscopy in a kidney tissue affected by APSGN.",
    answer: "1. Symmetrically enlarged kidneys with all glomeruli appearing enlarged and relatively bloodless.\n2. Diffuse mesangial cell proliferation with an increase in mesangial matrix on light microscopy.\n3. Lumpy-bumpy deposits of immunoglobulin and complement on the GBM and in the mesangium on immunofluorescence.\n4. Electron-dense deposits or \"humps\" observed on the epithelial side of the GBM on electron microscopy.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
  },

  {
    id: "q-r2-a-5",
    chapterId: 1,
    type: "problem-solving",
    title: "APSGN Diagnostic Antibody Case",
    content: "A 10-year-old boy presents with sudden gross hematuria, mild ankle swelling, and oliguria. His serum C3 level is significantly reduced. The physician suspects APSGN but notes that the baseline Antistreptolysin O (ASOT) titer is normal.\n\nQuestions:\n1. What is the single best alternative antibody titer that should be requested to document a prior cutaneous/skin streptococcal infection?\n2. For how long does the serum C3 complement level typically remain depressed before returning to normal?",
    answer: "1. Deoxyribonuclease (DNase) B antigen titer.\n2. It returns to normal within 6 to 8 weeks after the onset of the disease.",
    isClinical: true,
    topic: "Acute Post-Streptococcal Glomerulonephritis (APSGN)"
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
    topic: "Nephrotic Syndrome"
  },
  {
    id: "q-r2-n-2",
    chapterId: 1,
    type: "short-essay",
    title: "Secondary Nephrotic Findings",
    content: "Enumerate 4 clinical or laboratory findings that suggest a secondary cause of Nephrotic Syndrome rather than a primary idiopathic minimal change disease.",
    answer: "1. Age of onset greater than 8 years.\n2. Persistent hypertension.\n3. Presence of gross hematuria or structural renal impairment.\n4. Persistently depressed serum C3 complement levels or presence of extra-renal symptoms (like arthritis).",
    isClinical: true,
    topic: "Nephrotic Syndrome"
  },
  {
    id: "q-r2-n-3",
    chapterId: 1,
    type: "short-essay",
    title: "Nephrotic Relapse Monitoring",
    content: "Enumerate 4 clinical monitoring parameters that must be tracked daily for a hospitalized child during an acute nephrotic relapse.",
    answer: "1. Assessment of 24-hour urinary protein excretion.\n2. Daily recording of body weight (to track fluid accumulation or loss).\n3. Continuous monitoring of blood pressure.\n4. Close tracking of total urine output and searching for early signs of clinical infection.",
    isClinical: true,
    topic: "Nephrotic Syndrome"
  },
  {
    id: "q-r2-n-4",
    chapterId: 1,
    type: "short-essay",
    title: "Susceptibility to Infections Factors",
    content: "Enumerate 4 underlying factors or causes that explain the increased susceptibility to bacterial infections in children during a nephrotic relapse.",
    answer: "1. Significant urinary losses of immunoglobulins and properdin factor B.\n2. Defective cell-mediated immunity and abnormal leukocytic function.\n3. Immunosuppressive or prolonged corticosteroid therapy.\n4. Accumulation of edema and ascites fluid acting as an excellent culture medium for bacteria.",
    isClinical: true,
    topic: "Nephrotic Syndrome"
  },
  {
    id: "q-r2-n-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Nephrotic Peritonitis Case",
    content: "A 5-year-old child known to have steroid-responsive nephrotic syndrome is brought to the hospital during a relapse. He has developed a high fever, severe abdominal pain, and abdominal tenderness. The physician suspects spontaneous bacterial peritonitis.\n\nQuestions:\n1. What is the single most common bacterial organism responsible for causing peritonitis in nephrotic children?\n2. Mention 2 factors that explain the increased risk of intravascular thrombosis in this patient.",
    answer: "1. Streptococcus pneumoniae (Gram-negative bacteria like E. coli can also be encountered).\n2. Increased prothrombotic factors (like fibrinogen and thrombocytosis) and decreased fibrinolytic factors due to urinary losses of antithrombin III.",
    isClinical: true,
    topic: "Nephrotic Syndrome"
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
    topic: "Acute Kidney Injury (AKI)"
  },
  {
    id: "q-r2-k-2",
    chapterId: 1,
    type: "short-essay",
    title: "Post-renal AKI obstructive causes",
    content: "Enumerate 4 structural post-renal obstructive causes that can induce bilateral urinary tract obstruction and cause AKI.",
    answer: "1. Posterior Urethral Valves (PUV) in male neonates.\n2. Bilateral ureterovesical or pelviureteric junction (PUJ) obstruction.\n3. Urolithiasis (Urinary stones blocks).\n4. Neurogenic bladder or hemorrhagic cystitis.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)"
  },
  {
    id: "q-r2-k-3",
    chapterId: 1,
    type: "short-essay",
    title: "AKI Phases differentiation",
    content: "Enumerate 4 clinical manifestations that differentiate the early oliguric phase of AKI from the advanced phase.",
    answer: "1. Early phase features simple oliguria, mild edema, and mild hypertension.\n2. Advanced phase features severe uremic encephalopathy (confusion, convulsions, or coma).\n3. Advanced phase features hyperkalemia leading to cardiac arrhythmias.\n4. Advanced phase features hypervolemia causing congestive heart failure and acute pulmonary edema.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)"
  },

  {
    id: "q-r2-k-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Intrinsic Renal AKI Case",
    content: "A critically ill 4-year-old child with a history of protracted systemic hypotension and prolonged exposure to known nephrotoxic medications develops acute renal failure. Urinalysis shows a low urine specific gravity (<1010), high urine sodium (>40 mEq/L), and a FENa greater than 2%.\n\nQuestions:\n1. What is the specific intrinsic renal diagnosis for this presentation?\n2. Enumerate 2 types of urine casts or cells characteristic of this intrinsic parenchymal condition.",
    answer: "1. Acute Tubular Necrosis (ATN).\n2. Granular casts and renal tubular epithelial cell casts.",
    isClinical: true,
    topic: "Acute Kidney Injury (AKI)"
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
    topic: "Chronic Kidney Disease (CKD)"
  },
  {
    id: "q-r2-c-2",
    chapterId: 1,
    type: "short-essay",
    title: "CKD Growth Retardation mechanisms",
    content: "Enumerate 4 distinct clinical or laboratory mechanisms that explain the development of Short Stature (Growth Retardation) in children with CKD.",
    answer: "1. Chronic inadequate caloric and nutritional intake.\n2. Severe chronic metabolic acidosis.\n3. Advanced renal osteodystrophy.\n4. Growth hormone resistance state (elevated GH but decreased insulin-like growth factor-I).",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)"
  },
  {
    id: "q-r2-c-3",
    chapterId: 1,
    type: "short-essay",
    title: "Renal Osteodystrophy features",
    content: "Enumerate 4 clinical or radiological features that characterize the presence of \"Renal Osteodystrophy\" in a child with advanced CKD.",
    answer: "1. Muscle weakness, bone pain, and skeletal fractures with minor trauma.\n2. Rachitic changes, and varus or valgus deformities of the long bones.\n3. Laboratory findings of hypocalcemia, hyperphosphatemia, and elevated parathyroid hormone (PTH) levels.\n4. Subperiosteal bone resorption with widening of the metaphysis on X-ray.",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)"
  },

  {
    id: "q-r2-c-5",
    chapterId: 1,
    type: "problem-solving",
    title: "Chronic Metabolic Acidosis Case",
    content: "A 7-year-old child with Stage 4 Chronic Kidney Disease presents to the clinic. Her laboratory parameters demonstrate a persistent serum bicarbonate level significantly below 22 mEq/L due to decreased net acid excretion by the failing kidneys.\n\nQuestions:\n1. What metabolic complication has this child developed?\n2. Mention 2 oral alkalinizing pharmacological agents utilized to manage this condition and maintain safe bicarbonate levels.",
    answer: "1. Chronic Metabolic Acidosis.\n2. Bicitra (sodium citrate) and Sodium Bicarbonate tablets.",
    isClinical: true,
    topic: "Chronic Kidney Disease (CKD)"
  },

  // ==================== II. Chest Diseases (Bank 2) ====================
  // topic: "Croup"
  {
    id: "q-c2-c-1",
    chapterId: 2,
    type: "short-essay",
    title: "Croup Differential Diagnosis",
    content: "Enumerate 4 prominent entities or disorders that must be included in the differential diagnosis of a child presenting with acute upper airway stridor and croupy symptoms.",
    answer: "1. Acute Epiglottitis.\n2. Acute Bacterial Tracheitis.\n3. Sudden Aspiration of a Foreign Body.\n4. Retropharyngeal or peritonsillar abscess.",
    isClinical: true,
    topic: "Croup"
  },
  {
    id: "q-c2-c-2",
    chapterId: 2,
    type: "short-essay",
    title: "Spasmodic Croup Differentiation",
    content: "Enumerate 4 clinical or historical features that explicitly differentiate \"Spasmodic Croup\" from acute viral laryngotracheobronchitis.",
    answer: "1. Spasmodic croup occurs suddenly at night with brief and less severe symptoms.\n2. There is a complete absence of a preceding viral prodrome (no runny nose or catarrh).\n3. The child is completely afebrile (no fever).\n4. Symptoms resolve rapidly within several hours.",
    isClinical: true,
    topic: "Croup"
  },
  {
    id: "q-c2-c-3",
    chapterId: 2,
    type: "short-essay",
    title: "Airway Obstruction Management Precautions",
    content: "Enumerate 4 guidelines or precautions regarding what to avoid during the clinical management of an inflammatory upper airway obstruction.",
    answer: "1. Avoid administration of physical sedation.\n2. Avoid using opiate derivatives.\n3. Avoid prescribing expectorants or antihistamines.\n4. Avoid direct visual inspection of the oral cavity using a tongue depressor if epiglottitis is suspected.",
    isClinical: true,
    topic: "Croup"
  },

  {
    id: "q-c2-c-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Severe Croup Emergency Case",
    content: "A 2-year-old child presents with progressive inspiratory stridor at rest, severe chest retractions, cyanosis, and a barking cough. The emergency physician establishes the diagnosis of severe croup.\n\nQuestions:\n1. What is the immediate clinical indication suggested by the presence of stridor at rest and cyanosis?\n2. Mention the precise dose and administration routes of the first-line corticosteroid indicated to treat this condition.",
    answer: "1. Severe airway obstruction indicating hospitalization and urgent medical intervention.\n2. A single dose of Dexamethasone administered at 0.6 mg/kg either intramuscularly (IM) or orally.",
    isClinical: true,
    topic: "Croup"
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
    topic: "Epiglottitis"
  },
  {
    id: "q-c2-e-2",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottitis Complications",
    content: "Enumerate 4 complications or associated systemic infections that can rarely occur during the course of acute Epiglottitis.",
    answer: "1. Pneumonia.\n2. Acute Bacterial Meningitis.\n3. Acute Otitis Media.\n4. Septic Arthritis.",
    isClinical: true,
    topic: "Epiglottitis"
  },
  {
    id: "q-c2-e-3",
    chapterId: 2,
    type: "short-essay",
    title: "Epiglottis Visualization parameters",
    content: "Enumerate 4 parameters or clinical settings required to safely perform a direct diagnostic visualization of the epiglottis.",
    answer: "1. Must be performed exclusively by a highly skilled doctor.\n2. Must be conducted only within an Operating Room (OR) or an Intensive Care Unit (ICU).\n3. Requires readiness for immediate endotracheal intubation or surgical airway backup.\n4. Visualization must reveal a swollen, cherry-red epiglottis via laryngoscopy.",
    isClinical: true,
    topic: "Epiglottitis"
  },

  {
    id: "q-c2-e-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Thumb Sign Epiglottitis Case",
    content: "A 3.5-year-old child presents with a sudden onset of high fever, severe sore throat, and a complete inability to swallow, causing continuous drooling of saliva. A lateral view radiograph of the neck is performed carefully.\n\nQuestions:\n1. What specific radiological sign is expected on the lateral neck film?\n2. When should the artificial endotracheal tube safely be removed from this patient?",
    answer: "1. The Thumb Sign (representing the edematous epiglottis).\n2. After a few days, when a repeat direct laryngoscopy shows that the inflammatory edema has completely subsided.",
    isClinical: true,
    topic: "Epiglottitis"
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
    topic: "Wheezy Chest and Foreign Body Aspiration"
  },
  {
    id: "q-c2-w-2",
    chapterId: 2,
    type: "short-essay",
    title: "Differentiating noisy breathing sounds",
    content: "Enumerate 4 noisy breathing sounds that must be differentiated from true wheezing, including their character or mechanism.",
    answer: "1. Snoring: Inspiratory irregular sound due to partial nose or nasopharyngeal obstruction.\n2. Stridor: Inspiratory continuous harsh sound due to partial larynx or trachea obstruction.\n3. Grunting: Early expiratory short sound due to forced expiration against a closed epiglottis.\n4. Rattling: Irregular sound due to partial obstruction of the trachea and major bronchi by secretions.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration"
  },
  {
    id: "q-c2-w-3",
    chapterId: 2,
    type: "short-essay",
    title: "Impacted Foreign Body complications",
    content: "Enumerate 4 long-term localized pulmonary complications that can result from an unrecognized or untreated impacted foreign body.",
    answer: "1. Recurrent pneumonia localized in the exact same lung lobe.\n2. Formation of a lung abscess.\n3. Development of localized bronchiectasis.\n4. Segmental or lobar lung collapse.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration"
  },

  {
    id: "q-c2-w-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Unilateral Diminished Sounds Case",
    content: "A 2-year-old boy is brought to the clinic due to recurrent chest issues. Physical exam reveals a fixed localized wheeze and unilaterally diminished breath sounds over the right lung field. Chest X-ray films are requested.\n\nQuestions:\n1. In what percentage of foreign body aspiration cases are radiographic findings completely positive/diagnostic?\n2. What specific view of chest radiography is most helpful to reveal obstructive emphysema or collapse?",
    answer: "1. Positive in only about 50% of cases.\n2. An expiratory chest radiograph film.",
    isClinical: true,
    topic: "Wheezy Chest and Foreign Body Aspiration"
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
    topic: "Pneumonia"
  },
  {
    id: "q-c2-p-2",
    chapterId: 2,
    type: "short-essay",
    title: "Pneumonia bacterial pathogens",
    content: "Enumerate 4 distinct bacterial pathogens responsible for causing community or neonatal pneumonia in children.",
    answer: "1. Streptococcus pneumoniae (Gram-positive).\n2. Staphylococcus aureus (associated with pneumatoceles and empyema).\n3. Haemophilus influenzae type b (Hib).\n4. Group B Streptococcus (predominantly in neonates).",
    isClinical: true,
    topic: "Pneumonia"
  },
  {
    id: "q-c2-p-3",
    chapterId: 2,
    type: "short-essay",
    title: "Pneumonia Diagnostic methods",
    content: "Enumerate 4 distinct diagnostic methods utilized to isolate or confirm the specific causative etiology of bacterial or viral pneumonia.",
    answer: "1. Blood culture isolation (though it fails to detect the organism in most patients).\n2. Polymerase Chain Reaction (PCR) on nasopharyngeal or throat swabs (preferred for rapid viral and mycoplasma detection).\n3. Bronchoalveolar Lavage (BAL) secretions culture via bronchoscopy (indicated in persistent or immunocompromised cases).\n4. Percutaneous lung aspiration guided by CT scan for culture and sensitivity.",
    isClinical: true,
    topic: "Pneumonia"
  },
  {
    id: "q-c2-p-4",
    chapterId: 2,
    type: "short-essay",
    title: "Pneumonia Mimicking conditions",
    content: "Enumerate 4 conditions or metabolic disorders that cause tachypnea and can clinically mimic pneumonia, requiring completely different management.",
    answer: "1. Diabetic Ketoacidosis (DKA) or other inborn errors causing deep metabolic acidosis.\n2. Acute Congestive Heart Failure (presents with tachypnea, crackles, and hepatomegaly).\n3. Acute Kidney Injury (AKI) presenting with fluid overload and hypervolemic heart failure.\n4. Central Nervous System insults (like intracranial hemorrhage causing central hyperventilation).",
    isClinical: true,
    topic: "Pneumonia"
  },
  {
    id: "q-c2-p-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Pneumonia Tachypnea Case",
    content: "A 3-year-old child presents with a high fever, cough, and tachypnea. On examination, his respiratory rate is 45 breaths/minute, and he displays subcostal and intercostal retractions. Chest X-ray confirms a right lower lobe pneumonia.\n\nQuestions:\n1. Does this child's respiratory rate meet the WHO definition of fast breathing for his age?\n2. Mention the specific inpatient intravenous antibiotic protocol if this child requires hospitalization.",
    answer: "1. Yes, fast breathing for children aged 1-5 years is defined as a respiratory rate >40 breaths/minute.\n2. Intravenous Ceftriaxone (or Cefotaxime), with Vancomycin added if Staphylococcal complications are suspected.",
    isClinical: true,
    topic: "Pneumonia"
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
    topic: "Bronchiolitis"
  },
  {
    id: "q-c2-b-2",
    chapterId: 2,
    type: "short-essay",
    title: "RSV Bronchiolitis Pathophysiology",
    content: "Enumerate 4 sequence steps that describe the detailed pathophysiology of RSV-induced Bronchiolitis.",
    answer: "1. RSV infection causes a structural loss of epithelial cilia and sloughing of epithelial cells in the small airways.\n2. Accumulation of desquamated airway cells, neutrophils, and lymphocytes within the airway lumen, causing mucosal edema.\n3. Partial or complete plugging of the bronchioles, leading to localized atelectasis of some units and over-distention of others.\n4. Development of a severe ventilation-perfusion mismatch, resulting in systemic hypoxemia.",
    isClinical: true,
    topic: "Bronchiolitis"
  },
  {
    id: "q-c2-b-3",
    chapterId: 2,
    type: "short-essay",
    title: "Bronchiolitis Admission parameters",
    content: "Enumerate 4 key clinical parameters that signify a severe presentation of Bronchiolitis requiring mandatory admission.",
    answer: "1. Severe respiratory distress accompanied by a respiratory rate of 60-80/min.\n2. Presence of central cyanosis or marked pallor.\n3. Development of clinical signs of severe dehydration.\n4. Appearance of dangerous apneic spells (especially in infants under 4 months of age).",
    isClinical: true,
    topic: "Bronchiolitis"
  },

  {
    id: "q-c2-b-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Bronchiolitis Supportive Fluids Case",
    content: "A 6-month-old infant is admitted to the hospital with respiratory distress, tachypnea, and a repetitive dry cough due to bronchiolitis. The mother asks about the utility of administering oral sedatives or systemic steroids to calm the infant's breathing.\n\nQuestions:\n1. State the clinical guidelines regarding the use of sedatives, steroids, or tracheostomy in this disease.\n2. What specific supportive fluid administration route is indicated if the infant is too distressed to feed orally?",
    answer: "1. They must be strictly avoided during the management of bronchiolitis.\n2. Parenteral fluid therapy with careful electrolyte and pH adjustment.",
    isClinical: true,
    topic: "Bronchiolitis"
  },

  // topic: "Bronchial Asthma"
  {
    id: "q-c2-a-1",
    chapterId: 2,
    type: "short-essay",
    title: "Childhood Asthma Risk Factors",
    content: "Enumerate 4 prominent historical risk factors associated with a higher prevalence or increased mortality of childhood Bronchial Asthma.",
    answer: "1. Positive family history of asthma or atopic disorders in parents.\n2. Maternal smoking during pregnancy or intense allergen exposure in infancy.\n3. Low birth weight (less than 2500 grams) or low maternal age at birth.\n4. Socioeconomic factors like poverty and severe urban overcrowding.",
    isClinical: true,
    topic: "Bronchial Asthma"
  },
  {
    id: "q-c2-a-2",
    chapterId: 2,
    type: "short-essay",
    title: "Acute Asthma Physical exam findings",
    content: "Enumerate 4 clinical signs or findings identifiable on a physical examination during an acute asthma exacerbation.",
    answer: "1. Continuous expiratory wheezing with prolonged expiration and use of accessory muscles.\n2. Cyanosis and thoracic hyperinflation (barrel chest appearance).\n3. Marked tachycardia and presence of pulsus paradoxus.\n4. Palpable liver and spleen due to severe diaphragmatic downward displacement from lung hyperinflation.",
    isClinical: true,
    topic: "Bronchial Asthma"
  },
  {
    id: "q-c2-a-3",
    chapterId: 2,
    type: "short-essay",
    title: "Asthma Spirometry guidelines",
    content: "Enumerate 4 diagnostic guidelines or physiological findings obtained via Spirometry (Pulmonary Function Tests) that characterize Asthma in children >5 years.",
    answer: "1. Demonstration of a low baseline Forced Expiratory Volume in 1 second (FEV1).\n2. Demonstration of a reduced FEV1/FVC ratio.\n3. An increase in FEV1 greater than 9% to 12% after the inhalation of a short-acting Beta2-agonist (reversibility).\n4. A morning-to-evening variation of daily peak expiratory flow (PEF) or FEV1 equal to or greater than 20%.",
    isClinical: true,
    topic: "Bronchial Asthma"
  },
  {
    id: "q-c2-a-4",
    chapterId: 2,
    type: "short-essay",
    title: "Asthma Long-Term Controllers",
    content: "Enumerate 4 distinct pharmacological agents used as \"Long-Term Controllers\" to prevent recurrences of asthma attacks.",
    answer: "1. Inhaled Corticosteroids (ICS) like Fluticasone or Beclomethasone (drugs of choice).\n2. Long-Acting Inhaled Beta2-agonists (LABAs) like Salmeterol or Formoterol.\n3. Oral Leukotriene receptor antagonists (such as Montelukast).\n4. Biological agents, specifically anti-IgE preparations (Omalizumab) for severe resistant cases.",
    isClinical: true,
    topic: "Bronchial Asthma"
  },
  {
    id: "q-c2-a-5",
    chapterId: 2,
    type: "problem-solving",
    title: "Status Asthmaticus Case",
    content: "A 7-year-old known asthmatic boy is admitted with an acute severe attack. He has received three consecutive doses of nebulized albuterol combined with ipratropium bromide over one hour, but continues to exhibit severe distress, accessory muscle retractions, and low oxygen saturation.\n\nQuestions:\n1. What is the clinical diagnosis for this severe, non-responsive state?\n2. Enumerate 2 adjunctive intravenous or inhalation pharmacological steps that should be implemented next.",
    answer: "1. Status Asthmaticus (Life-threatening Asthma).\n2. Administration of systemic corticosteroids and utilizing intravenous or inhaled Magnesium Sulphate.",
    isClinical: true,
    topic: "Bronchial Asthma"
  },

  // ==================== III. Neonatology Section (Bank 2) ====================
  // topic: "Transient Cutaneous Lesions"
  {
    id: "q-n2-t-1",
    chapterId: 3,
    type: "short-essay",
    title: "Transient Cutaneous Lesions Vasomotor",
    content: "Enumerate 4 distinct benign \"Transient Cutaneous Lesions\" seen in newborns that are directly related to vasomotor instability or peripheral circulatory sluggishness.",
    answer: "1. Acrocyanosis (harmless cyanosis of hands and feet when cool).\n2. Cutis Marmorata or mottling (circulatory response to transient skin temperature fluctuations).\n3. Harlequin color change (rare division of the body into red and pale halves when lying on the side).\n4. Transitory macular capillary hemangiomas (such as Salmon patch on the eyelids).",
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

  // topic: "Physiological Jaundice"
  {
    id: "q-n2-pj-1",
    chapterId: 3,
    type: "short-essay",
    title: "Bilirubin Metabolism sequence",
    content: "Enumerate 4 sequence steps that describe the normal physiology of Bilirubin Metabolism from production to excretion.",
    answer: "1. Breakdown of hemoglobin from senescent RBCs in reticuloendothelial cells forms water-insoluble unconjugated bilirubin.\n2. Unconjugated bilirubin binds to albumin in plasma and is transported to the liver membrane.\n3. Inside liver cells, unconjugated bilirubin is conjugated to water-soluble glucuronide forms by glucuronyl transferase (G.T.) enzyme.\n4. Conjugated bilirubin is secreted into bile ducts, enters the intestine, and is excreted via feces (as stercobilinogen) or urine (as urobilinogen).",
    isClinical: true,
    topic: "Physiological Jaundice"
  },
  {
    id: "q-n2-pj-2",
    chapterId: 3,
    type: "short-essay",
    title: "Preterm Physiological Jaundice properties",
    content: "Enumerate 4 specific properties or timelines that define \"Physiological Jaundice\" in a Preterm infant.",
    answer: "1. It appears later than in term infants, typically on the 4th to 6th day of life.\n2. The peak total serum bilirubin concentration characteristically remains below 14 mg/dL.\n3. It has a longer duration, disappearing within 10 to 14 days of life.\n4. The infant remains clinically asymptomatic and requires no medical treatment or investigations.",
    isClinical: true,
    topic: "Physiological Jaundice"
  },
  {
    id: "q-n2-pj-3",
    chapterId: 3,
    type: "short-essay",
    title: "Pathological Jaundice findings",
    content: "Enumerate 4 distinct historical, physical, or laboratory findings that classify neonatal jaundice as Pathological.",
    answer: "1. Onset of visible jaundice within the first 24 hours of life.\n2. A rapid rate of total serum bilirubin rise exceeding 5 mg/dL/day (or 0.5 mg/dL/hour).\n3. Jaundice persistence beyond 14 days of life in a full-term infant.\n4. Presence of an elevated direct-reacting (conjugated) bilirubin fraction (>20% of total) accompanied by clay-colored stools.",
    isClinical: true,
    topic: "Physiological Jaundice"
  },

  {
    id: "q-n2-pj-5",
    chapterId: 3,
    type: "problem-solving",
    title: "12-hour Neonatal Jaundice Case",
    content: "A 12-hour-old full-term newborn is noted by the nursery nurse to have distinct yellowish discoloration of her skin and sclera. The physician orders an urgent total and direct serum bilirubin level.\n\nQuestions:\n1. Is this infant's jaundice classified as physiological or pathological?\n2. Enumerate 2 non-immune hemolytic or enzymatic red blood cell defects that can cause early pathological jaundice.",
    answer: "1. Pathological Jaundice (because it appeared within the first 24 hours of life).\n2. Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency and Congenital Spherocytosis.",
    isClinical: true,
    topic: "Physiological Jaundice"
  },

  // topic: "Pathological Jaundice"
  {
    id: "q-n2-pa-1",
    chapterId: 3,
    type: "short-essay",
    title: "ABO Incompatibility diagnosis",
    content: "Enumerate 4 distinct clinical or laboratory findings that establish the diagnosis of Pathological Jaundice due to ABO Incompatibility.",
    answer: "1. Documented blood group combination of an O-type mother and an A-type or B-type infant.\n2. Rapid onset of visible jaundice developing within the first 24 hours of life.\n3. Urinalysis showing elevated unconjugated bilirubin accompanied by an increased reticulocyte count (10-15%).\n4. Demonstration of a weakly to moderately positive direct Coombs test result.",
    isClinical: true,
    topic: "Pathological Jaundice"
  },
  {
    id: "q-n2-pa-2",
    chapterId: 3,
    type: "short-essay",
    title: "Extrahepatic Biliary Atresia sequence",
    content: "Enumerate 4 sequence steps or features that define the management of an infant suspected of having Extrahepatic Biliary Atresia.",
    answer: "1. Immediate measurement of direct/conjugated bilirubin fractions when jaundice persists beyond 2 weeks.\n2. Performing diagnostic evaluations including liver function tests, abdominal ultrasound, and a liver biopsy.\n3. Performing an exploratory laparotomy and direct cholangiography to determine the exact site of obstruction.\n4. Carrying out the surgical hepatoportoenterostomy procedure of Kasai if no correctable lesion is found.",
    isClinical: true,
    topic: "Pathological Jaundice"
  },
  {
    id: "q-n2-pa-3",
    chapterId: 3,
    type: "short-essay",
    title: "Breast Milk Jaundice parameters",
    content: "Enumerate 4 clinical parameters that define \"Breast Milk Jaundice\" and ensure its safe prognosis.",
    answer: "1. It occurs in completely healthy, thriving breastfed infants after the first week of life.\n2. Driven by specific substances in breast milk that increase the enterohepatic circulation of bilirubin.\n3. Presents as a mild, prolonged, but completely unconjugated hyperbilirubinemia.\n4. Infant shows normal urine and stool color, and breastfeeding should safely continue.",
    isClinical: true,
    topic: "Pathological Jaundice"
  },

  {
    id: "q-n2-pa-5",
    chapterId: 3,
    type: "problem-solving",
    title: "Vomiting & Reducing Substances Case",
    content: "A 10-day-old infant presents with severe vomiting, poor feeding, hypoglycemia, and a sudden onset of dark, pathological jaundice. The clinician checks the urine and finds positive reducing substances, confirming an inherited enzyme deficiency.\n\nQuestions:\n1. What is the specific metabolic diagnosis for this infant?\n2. What is the mandatory dietary treatment line indicated for this condition?",
    answer: "1. Galactosaemia.\n2. Initiation of a completely lactose-free and galactose-free diet.",
    isClinical: true,
    topic: "Pathological Jaundice"
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
    content: "Enumerate 4 distinct clinical or neurological deficits seen during the 3rd year of life in a child surviving chronic Kernicterus.",
    answer: "1. Bilateral choreoathetosis and extrapyramidal movement disorders.\n2. High-frequency sensorineural hearing loss.\n3. Mental deficiency or cognitive impairment.\n4. Squinting and defective upward movement of the eyes.",
    isClinical: true,
    topic: "Complications of Indirect Hyperbilirubinemia"
  },
  {
    id: "q-n2-ci-4",
    chapterId: 3,
    type: "short-essay",
    title: "Phototherapy side effects",
    content: "Enumerate 4 distinct complications or physical side effects that can result from Phototherapy exposure.",
    answer: "1. Loose stools or increased diarrhea.\n2. Erythematous macular skin rash.\n3. Overheating and dehydration due to increased insensible water loss.\n4. Bronze Baby Syndrome (dark grayish-brown discoloration of the skin in infants with cholestasis).",
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
    content: "Enumerate 4 hematologic parameters or septic screen criteria used to support the diagnosis of Probable Neonatal Sepsis.",
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
  // topic: "Steps of Cardiopulmonary Resuscitation (CPR)"
  {
    id: "q-e2-c-1",
    chapterId: 4,
    type: "short-essay",
    title: "Pediatric Cardiopulmonary arrest situated causes",
    content: "Enumerate 4 acute non-pulmonary critical medical situations (cardiovascular or metabolic) that can lead to secondary cardiopulmonary arrest in children.",
    answer: "1. Hypovolemic shock (severe dehydration, massive hemorrhage, or extensive burns).\n2. Septic shock due to severe fulminant sepsis.\n3. Cardiogenic shock secondary to severe myocarditis or serious arrhythmias.\n4. Severe acid-base or electrolyte disturbances, or acute organ failure (renal/hepatic).",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)"
  },
  {
    id: "q-e2-c-2",
    chapterId: 4,
    type: "short-essay",
    title: "Cardiopulmonary arrest triggering procedures",
    content: "Enumerate 4 stressful medical procedures performed on critically ill children that can inadvertently trigger cardiopulmonary arrest if not preceded by pre-oxygenation.",
    answer: "1. Aggressive airway suctioning.\n2. Intensive chest physiotherapy.\n3. Endotracheal intubation maneuvers.\n4. Performing a lumbar puncture.",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)"
  },
  {
    id: "q-e2-c-3",
    chapterId: 4,
    type: "short-essay",
    title: "Cardiopulmonary Arrest diagnosis criteria",
    content: "Enumerate 4 explicit criteria or physical findings that establish the clinical diagnosis of complete Cardiopulmonary Arrest.",
    answer: "1. Respiratory: Complete absence of respiration (respiratory arrest).\n2. Cardiac: Complete absence of audible or palpable heartbeats (cardiac arrest).\n3. Circulatory: Pulselessness with no peripheral tissue perfusion.\n4. Central Nervous System: Complete unresponsiveness to painful external stimuli.",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)"
  },

  {
    id: "q-e2-c-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Pupillary reaction arrest Case",
    content: "A pediatric resuscitation is ongoing in the emergency unit. The team leader pauses compressions briefly every 5 minutes to evaluate the child's pupillary reactions to a light source.\n\nQuestions:\n1. What is the clinical significance of finding active, reactive pupils during a arrest evaluation?\n2. What do dilated, fixed unreactive pupils indicate in this setting?",
    answer: "1. It indicates that the brain tissue is still viable/intact, validating the continuation of resuscitation.\n2. It signifies brain death.",
    isClinical: true,
    topic: "Steps of Cardiopulmonary Resuscitation (CPR)"
  },

  // topic: "Shock"
  {
    id: "q-e2-s-1",
    chapterId: 4,
    type: "short-essay",
    title: "Obstructive Shock causes",
    content: "Enumerate 4 distinct clinical or structural causes that result in \"Obstructive Shock\" in children.",
    answer: "1. Tension pneumothorax or hemothorax.\n2. Cardiac tamponade secondary to severe pericardial effusion.\n3. Critical congenital obstructive heart lesions (critical aortic stenosis or coarctation).\n4. Massive pulmonary embolism.",
    isClinical: true,
    topic: "Shock"
  },
  {
    id: "q-e2-s-2",
    chapterId: 4,
    type: "short-essay",
    title: "Uncompensated Shock findings",
    content: "Enumerate 4 classic clinical findings that signify the transition from compensated shock to \"Uncompensated Shock\".",
    answer: "1. A significant, documented fall in systolic blood pressure (arterial hypotension).\n2. Development of severe systemic metabolic acidosis.\n3. Onset of profound oliguria or anuria.\n4. Progressive reduction in the level of consciousness (lethargy, stupor, or coma).",
    isClinical: true,
    topic: "Shock"
  },
  {
    id: "q-e2-s-3",
    chapterId: 4,
    type: "short-essay",
    title: "Severe Shock monitoring parameters",
    content: "Enumerate 4 distinct parameters or investigations monitored in late-stage or severe shock within a PICU.",
    answer: "1. Serial Arterial Blood Gases (ABGs) and serum lactic acid levels.\n2. Renal function tests and serum electrolytes.\n3. Coagulation profile and platelet count to screen for DIC.\n4. Invasive hemodynamic monitoring including Central Venous Pressure (CVP) and cardiac output.",
    isClinical: true,
    topic: "Shock"
  },

  {
    id: "q-e2-s-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Anaphylactic Distributive Shock Case",
    content: "A 12-year-old girl is rushed to the emergency department after an insect sting. She has an explosive generalized skin rash, severe wheezing, cold extremities, and a drop in blood pressure. The diagnosis of anaphylactic distributive shock is made.\n\nQuestions:\n1. What is the immediate first-line medication of choice for this condition, including its proper route?\n2. Enumerate 2 adjuvant intravenous drugs that should be administered next to manage this allergic shock.",
    answer: "1. Epinephrine (Adrenaline) administered subcutaneously (SC) or intravenously (IV).\n2. Hydrocortisone IV and an Antihistaminic IV agent.",
    isClinical: true,
    topic: "Shock"
  },

  // topic: "Coma"
  {
    id: "q-e2-co-1",
    chapterId: 4,
    type: "short-essay",
    title: "Secondary Systemic Coma encephalopathies",
    content: "Enumerate 4 secondary systemic or metabolic encephalopathies that cause a secondary brain lesion resulting in Coma.",
    answer: "1. Hypoxic encephalopathy secondary to severe prolonged shock or anemia.\n2. Endogenous encephalopathy due to severe dehydration and metabolic acidosis.\n3. Diabetic Ketoacidosis (DKA) or profound hypoglycemia.\n4. Acute organ failure encephalopathy (acute renal failure or acute hepatic failure).",
    isClinical: true,
    topic: "Coma"
  },
  {
    id: "q-e2-co-2",
    chapterId: 4,
    type: "short-essay",
    title: "Meningeal Irritation signs in coma",
    content: "Enumerate 4 clinical signs or physical markers that indicate the presence of Meningeal Irritation in a comatose child.",
    answer: "1. Neck rigidity (nuchal rigidity).\n2. Neck retraction.\n3. Positive Kernig's sign.\n4. Positive Brudzinski's sign.",
    isClinical: true,
    topic: "Coma"
  },
  {
    id: "q-e2-co-3",
    chapterId: 4,
    type: "short-essay",
    title: "Comatose patient preservation parameters",
    content: "Enumerate 4 critical nursing and medical care parameters implemented for the preservation of the gastrointestinal, skin, and eye health in a comatose patient.",
    answer: "1. Administration of antacids or H2 blockers to prevent stress ulcers.\n2. Use of laxatives to prevent chronic constipation.\n3. Routine instillation of protective eye drops and ointments to prevent corneal drying.\n4. Frequent changes of body position combined with skin care to prevent infection and bedsores.",
    isClinical: true,
    topic: "Coma"
  },

  {
    id: "q-e2-co-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Increased Intracranial Pressure Coma Case",
    content: "A 4-year-old child presents in a deep coma. Physical examination reveals a bulged anterior fontanel, hypertonia, hyperreflexia, and a sluggish pupillary response to light. The physician diagnoses acute increased intracranial pressure.\n\nQuestions:\n1. What is the initial physical positioning technique indicated to enhance cerebral venous return?\n2. Mention the primary osmotic diuretic drug, including its standard effective dose, used to reduce this pressure.",
    answer: "1. Head elevation to 30 degrees in a neutral midline position.\n2. Intravenous Mannitol administered at a dose ranging from 0.25 to 0.5 g/kg.",
    isClinical: true,
    topic: "Coma"
  },

  // topic: "Glasgow Coma Scale and its Advantages"
  {
    id: "q-e2-g-1",
    chapterId: 4,
    type: "short-essay",
    title: "Behavioral response GCS parameters",
    content: "Enumerate the 3 specific behavioral response parameters evaluated by the Glasgow Coma Scale, including the total maximum points for each.",
    answer: "1. Eye opening response (maximum total of 4 points).\n2. Verbal response (maximum total of 5 points).\n3. Motor response (maximum total of 6 points).",
    isClinical: true,
    topic: "Glasgow Coma Scale and its Advantages"
  },
  {
    id: "q-e2-g-2",
    chapterId: 4,
    type: "short-essay",
    title: "Pediatric GCS Verbal indicators",
    content: "Enumerate 4 specific behavioral indicators used to score the \"Verbal Response\" parameter specifically in non-verbal infants and young children.",
    answer: "1. Appropriate words, smiles, fixes, and follows objects (scores 5 points).\n2. Consolable crying when upset (scores 4 points).\n3. Persistent irritable crying (scores 3 points).\n4. Restless, agitated, or grunting behavior (scores 2 points).",
    isClinical: true,
    topic: "Glasgow Coma Scale and its Advantages"
  },
  {
    id: "q-e2-g-3",
    chapterId: 4,
    type: "short-essay",
    title: "GCS False Underestimation factors",
    content: "Enumerate 4 distinct clinical or pharmacological factors that act as limitations, falsely altering or underestimating a child's true GCS score.",
    answer: "1. Confounding use of therapeutic sedation or analgesics.\n2. Therapeutic neuromuscular blockade or chemical paralysis.\n3. Presence of an endotracheal tube (making verbal assessment impossible).\n4. Preverbal developmental stage or extreme young age of an infant.",
    isClinical: true,
    topic: "Glasgow Coma Scale and its Advantages"
  },

  {
    id: "q-e2-g-5",
    chapterId: 4,
    type: "problem-solving",
    title: "Infant Trauma GCS Calculation Case",
    content: "An 18-month-old infant is evaluated in the emergency ward following a head trauma. On serial neurological tracking, the clinician notes the infant opens his eyes only when a loud voice is used, emits persistent irritable crying, and localizes the site of a painful stimulus purposefully.\n\nQuestions:\n1. Calculate the infant's specific scores for Eye, Verbal, and Motor parameters.\n2. What is the total composite Glasgow Coma Scale score for this infant?",
    answer: "1. Eye opening to voice = 3; Verbal irritable crying = 3; Motor localizing pain = 5.\n2. Total GCS Score = 3 + 3 + 5 = 11.",
    isClinical: true,
    topic: "Glasgow Coma Scale and its Advantages"
  }
];
