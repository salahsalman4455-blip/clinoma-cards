import { Question } from '../types';

export const FAM_QUESTIONS: Question[] = [
  // Topic: Principles of Family Medicine
  {
    id: "q-fam-pr-1",
    chapterId: 7,
    type: "short-essay",
    title: "Principles of family medicine",
    content: "Case 1: A 45-year-old male patient who has been registered with the same family physician for 10 years presents for a routine check-up. The physician manages his Hypertension, screens him for Colon Cancer, evaluates his psychosocial stress at work, and coordinates his care with a cardiologist when needed.\n\nQuestion 1: Enumerate the four key elements of \"Continuity of Care\" as a core principle in family medicine demonstrated in managing this patient over his life course.\n\nQuestion 2: List the five core services or dimensions integrated within the comprehensive and holistic approach of family medicine.",
    answer: "Answer 1: 1. Mutual trust between patient and physician. 2. Long-term therapeutic relationship. 3. Effectiveness of care. 4. Continuity focused on the patient, not on isolated diseases.\n\nAnswer 2: 1. Health promotion. 2. Disease prevention. 3. Curative care. 4. Rehabilitation. 5. Physical, psychological, and social support.",
    isClinical: true,
    topic: "Principles of Family Medicine"
  },
  {
    id: "q-fam-pr-2",
    chapterId: 7,
    type: "short-essay",
    title: "Principles of family medicine - Coordinated Care",
    content: "Question 1: Enumerate the core actions a family physician takes to ensure effective \"Coordinated-Care\" when a patient referral to another specialty is necessary.",
    answer: "Answer 1:\n1. Ensure timely and appropriate referral.\n2. Inform patients about available services.\n3. Coordinate advice and follow-up care.\n4. Act as care managers across health and social services.",
    isClinical: true,
    topic: "Principles of Family Medicine"
  },

  // Topic: The Family Physician & RISE Framework
  {
    id: "q-fam-tm-1",
    chapterId: 7,
    type: "short-essay",
    title: "Family physician- family health team- family health model",
    content: "Case 2: A family physician is reviewing the monthly performance of the Family Health Center (FHC). He notices a conflict in the delegation of duties between the clinical nurse and the social worker, as well as a lack of proper documentation in the health records.\n\nQuestion 3: Enumerate the five core parameters of the family physician's role as a \"Five-Star Doctor\" summarized by the World Health Organization (WHO).\n\nQuestion 4: Enumerate four specific members who belong strictly to the \"Administrative and Support Staff\" category of the Family Health Team.",
    answer: "Answer 3:\n1. Assesses and improves the quality of care by responding to the patient's total health needs.\n2. Makes optimal use of new technologies in health care.\n3. Promotes healthy lifestyles.\n4. Recognizes individual and community health needs.\n5. Works efficiently as a member of the health care team.\n\nAnswer 4:\n1. Front Office Staff.\n2. Medical Records Officer.\n3. Births and Deaths Officer.\n4. Pharmacy Clerk or Storage Room Officer.",
    isClinical: true,
    topic: "The Family Physician & RISE Framework"
  },
  {
    id: "q-fam-tm-2",
    chapterId: 7,
    type: "short-essay",
    title: "Family Medicine Model vs. Traditional Model",
    content: "Question 2: List four conceptual differences that distinguish the \"Family Medicine Model\" from the \"Traditional Model of Practice\" regarding care style and organization.",
    answer: "Answer 2:\n1. Care is integrated, whereas in the traditional model it is often fragmented.\n2. Care is both responsive and proactive, compared to mostly reactive care.\n3. It utilizes a multidisciplinary healthcare team rather than a single physician model.\n4. It relies on evidence-based practice rather than solely experience-based practice.",
    isClinical: true,
    topic: "The Family Physician & RISE Framework"
  },

  // Topic: Basic Benefit Package & Level of Care
  {
    id: "q-fam-bbp-case5",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 5: Routine Vaccination Route",
    content: "A 9-month-old infant is brought by his mother for routine vaccination. The child is healthy, with normal growth and no danger signs.\n\nQuestions:\n1. At which level of care should this service be provided?\n2. Which BBP component does this belong to?",
    answer: "Answer:\n1/ Primary health care level \"FHU\"\n2/ Child health services (immunization & vitmains supplementation)",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fam-bbp-case6",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 6: Family Planning Method",
    content: "A 30-year-old woman with three children asks for information about contraception and wants to start a suitable family planning method.\n\nQuestions:\n1. Which BBP service is provided?\n2. Where this service should be delivered?",
    answer: "Answer:\n1/ Woman health services\n2/ At the primary health care at the FHU",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fam-bbp-case7",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 7: Routine Screening Service",
    content: "A 40-year-old woman comes for routine health check with no complaints.\n\nQuestions:\n1. What screening service should be offered?\n2. What action is taken if a suspicious lump is found?",
    answer: "Answer:\n1/ Breast & cervical cancer, Dm & HYN\n2/ Referral urgently to hospital",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fam-bbp-all",
    chapterId: 7,
    type: "short-essay",
    title: "Basic benefit package",
    content: "Case 3: A mother brings her infant to the clinic. The family physician is reviewing the components of the Basic Benefit Package (BBP) to verify which child clinical services and laboratory tests can be fully completed at the primary care facility.\n\nQuestion 5: Enumerate four essential laboratory investigations that are fully available at the level of the Family Health Unit (FHU) according to the BBP laboratory services guidelines.\n\nQuestion 6: List the three sequential levels of service delivery through which the Basic Benefit Package is implemented within the family health delivery model.",
    answer: "Answer 5:\n1. Blood glucose.\n2. Hemoglobin (Hb).\n3. Stool analysis.\n4. Urine analysis.\n\nAnswer 6:\n1. Family Health Unit (FHU).\n2. Family Health Centre (FHC).\n3. Hospital Level.",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },
  {
    id: "q-fam-bbp-ncd",
    chapterId: 7,
    type: "short-essay",
    title: "Basic Benefit Package (BBP) - NCDs",
    content: "Question 3: Enumerate four specific non-communicable diseases (NCDs) that are managed under the \"Health Services for All Age Groups\" within the BBP.",
    answer: "Answer 3:\n1. Hypertension.\n2. Diabetes mellitus.\n3. Ischemic heart disease.\n4. Rheumatic diseases.",
    isClinical: true,
    topic: "Basic Benefit Package & Level of Care"
  },

  // Topic: Family Dynamics & The Human Life Cycle
  {
    id: "q-fam-dyn-case2",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 2: Family Functions Scenario",
    content: "A child with a chronic illness receives emotional support, food, shelter, and help in school decisions from his parents.\n\nQuestions:\n1. Which family functions are illustrated in this scenario?\n2. Mention the mnemonic used to remember family functions.",
    answer: "Answer:\n1/ Care, Affection, Providing status\n2/ CAPRS",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-case3",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 3: Family Type and Health Implication",
    content: "A man lives with his wife and elderly mother in the same house for the past 2 years.\n\nQuestions:\n1. How would you classify this family type?\n2. Mention one health implication relevant to this family structure.",
    answer: "Answer:\n1/ Extending family\n2/ Decision making conflict, Burden of taking care of mother, In other hand, giving emotional support.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-case4",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 4: Family as Source of Illness",
    content: "Several members of one household are smokers, and a teenage boy recently started smoking.\n\nQuestions:\n1. How can the family act as a source of illness in this case?\n2. Identify one preventive role of the family physician.",
    answer: "Answer:\n1/ Sharing bad habits as smoking, Genetic predisposition, Spread of communicable disease.\n2/ Educate this family to quit smoking & stop doing it infront of the young family members.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-case11",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 11: Mrs. A Family Dynamics & Care",
    content: "A 35-year-old woman (Mrs. A) visits the Family Health Unit complaining of recurrent headaches and fatigue. She lives in an extended family with her husband, two children, and her mother-in-law. Recently, there has been ongoing conflict between her and her mother-in-law, causing emotional stress. Her husband is a heavy smoker, and her 12-year-old son has recently started experimenting with smoking. The family physician conducts a comprehensive assessment, exploring family dynamics, lifestyle factors, and psychosocial stressors. The physician provides counseling, addresses unhealthy behaviors, and decides to refer the patient to a neurologist for further evaluation of her headaches while continuing follow-up care.\n\nQuestions:\n1- How would you classify the type of family in this case?\n2- Identify TWO negative health influences related to family dynamics in this scenario?\n3- What elements of family dynamics are affecting the patient's health?\n4- What is the role of the family physician in managing patient at the primary care level?\n5- Mention TWO reasons for referring this patient to a specialist?\n6- After referral, what is the responsibility of the family physician to ensure continuity of care?",
    answer: "Answer:\n1- Extended family\n2- Family conflict (with mother-in-law) causes stress, headaches. Husband is a heavy smoker passive smoking + bad role modeling for children.\n3- Interpersonal conflict (tension with mother-in-law), Poor communication within family, Unhealthy lifestyle behaviors (smoking in household), Negative role modeling (father influencing child), Psychosocial stress contributing to headaches & fatigue.\n4- Comprehensive assessment: Biological (headache) + Psychological (stress). Counseling & health education: Address smoking habits + Stress management Encourage smoking cessation. Address family relationships and dynamics. Referral to neurologist for further evaluation + Follow-up and ongoing support.\n5- Uncertain diagnosis recurrent headaches need further evaluation to rule out secondary causes. Need for specialized investigations/management.\n6- Follow up the patient after the specialist visit, Review and integrate the specialist's report into the care plan, Coordinate ongoing management, Ensure adherence to treatment, Provide ongoing support and monitoring.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-case12",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 12: Ahmed & Mona Family Profile",
    content: "Ahmed 76 married to mona 70, they have 3 sons married and not live with them, Ahmed complains from uncontrolled hypertension. He suffers from dyspnea and chest pain but relieved by rest. He is referred for ECG & laboratory investigation.\n\nQuestions:\n1. What is the Type of the family?\n2. What is the Phase of the family?\n3. What is the Type of referral and cause?",
    answer: "Answer:\nWhat is the Type of the family?\nAnswer: Nuclear biologic family\nWhat is the Phase of the family?\nAnswer: family as launching center\nWhat is the Type of referral and cause?\nAnswer: Type: Elective. Cause: Confirmation of diagnosis, Lack of resources.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-case13",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 13: Mr. Khalid Ali Family Case",
    content: "Mr. Khalid Ali, 67 years old, illiterate. He lives with his wife, Huda who is 60 years old. His two sons are married, and both live with him. He has had hypertension and diabetes for 3 years and is taking medication for both. During his follow-up visit, you found him complaining of losing 3 kg in one month, sleeping problems, fatigue, not enjoying any activities and a generally slowing down than previous. He requested to be referred to an internal medicine physician. You try to explain his condition, but he is insisting on being referred. So, you refereed him.\n\nQuestions:\n1. Name the type of Khalid's family.\n2. Name the family stage for this family.\n3. Name the cause for referral and the type of referral.",
    answer: "Answer:\nName the type of Khalid's family:\nAnswer: Nuclear biologic family\nName the family stage for this family:\nAnswer: Aging family\nName the cause for referral and the type of referral:\nAnswer: Patient request. Elective type.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-case14",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 14: Mrs. Amira Ali Case",
    content: "Mrs. Amira Ali, 62 years old comes to you. She is illiterate. She lives with her husband, 65 years old. Her two sons are married, and both live away from them. She has hypertension and diabetes for 3 years on medication. She complains bony aches and felt down in the bathroom 2 days ago.\n\nQuestions:\n1. Name the type of Mrs Amira Family.\n2. Name the stage of this family.",
    answer: "Answer:\nName the type of Mrs Amira Family:\nAnswer: Nuclear family\nName the stage of this family:\nAnswer: Aging family",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-case15",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 15: Karma Family Stage & Caregiver Guidance",
    content: "Karma is a 77-year-old hypertensive female living with her husband (Mr. Hassan), who has end-stage lung cancer on palliative care. She has two sons and 3 grandchildren living with her. Her son (Maged) is concerned because she has poor appetite and recent weight loss.\n\nQuestions:\n1. Name the type and stage of this family.\n2. Enumerate two health education messages you would give Maged (as a caregiver) regarding his father's (Mr. Hassan's) care.",
    answer: "Answer:\nName the type and stage of this family:\nAnswer: Aging family stage, Extended biologic family type.\nEnumerate two health education messages you would give Maged (as a caregiver) regarding his father's (Mr. Hassan's) care.\nAnswer: Give medications regularly as prescribed, especially pain medications. Observe danger signs such as severe breathlessness, severe pain, inability to eat or drink, or confusion. Provide comfort care and emotional support. Maintain good nutrition and hydration as tolerated. Prevent bed sores by changing position regularly and keeping skin clean. Seek medical help if the condition worsens.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-dynamics",
    chapterId: 7,
    type: "short-essay",
    title: "family - Family dynamics",
    content: "Case 4: A 14-year-old adolescent is brought to the clinic. Genogram analysis reveals a strong family history of early-onset coronary artery disease. Recently, the family experienced a major crisis due to the sudden death of the father, causing profound emotional instability.\n\nQuestion 7: Enumerate the five main functional parameters of the family that represent its baseline societal obligations using the CAPRS framework.\n\nQuestion 8: List four chronic or metabolic diseases in which a detailed family history contributes directly to calculating the patient's individual risk database.",
    answer: "Answer 7:\n1. C - Care: Provision of basic needs such as food, shelter, and social support.\n2. A - Affection: Psychosocial support including love, warmth, and emotional security.\n3. P - Providing status: Helping family members determine future education, occupation, and social roles.\n4. R - Reproduction: Continuity of the family through legal marriage and childbearing.\n5. S - Socialization: Teaching social skills, norms, values, and acceptable behaviors.\n\nAnswer 8:\n1. Cancer (especially breast, colon, prostate, and ovarian).\n2. Hypertension.\n3. Diabetes Mellitus.\n4. Hyperlipidaemia or Coronary artery disease.",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },
  {
    id: "q-fam-dyn-preschool",
    chapterId: 7,
    type: "short-essay",
    title: "Family dynamics & Life Cycle - Preschool age",
    content: "Question 4: Enumerate three specific health risks or nutritional deficiencies that highly characterize the \"Preschool age & Breast dependence\" stage of the human life cycle.",
    answer: "Answer 4:\n1. Acute respiratory infections.\n2. Diarrheal diseases.\n3. Malnutrition (such as Protein-energy malnutrition, Rickets, or Vitamin A deficiency).",
    isClinical: true,
    topic: "Family Dynamics & The Human Life Cycle"
  },

  // Topic: Patient Education & Verbal Counseling
  {
    id: "q-fam-edu-case9",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 9: Patient Education Principles for a Smoker",
    content: "A 35 years old male patient comes to you. He is a heavy smoker. He complains cough and difficult breathing. You try to educate this patient to stop smoking.\n\nQuestion:\nList 5 principles of patient education you can use with this patient.",
    answer: "Answer:\na. Feedback: Ensure that the patient understands the information provided.\nb. Reinforcement: Encourage and reward progress to support behavior change.\nc. Individualization: Tailor education according to the patient's characteristics, needs, and specific health goals.\nd. Facilitation: Provide educational materials or skills training.\ne. Use of multiple educational channels.\nf. Assessment of patient knowledge: Identify gaps in knowledge and correct misunderstandings.",
    isClinical: true,
    topic: "Patient Education & Verbal Counseling"
  },
  {
    id: "q-fam-edu-case10",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 10: Diabetic Patient Education",
    content: "You are caring 62 years of patient who was diagnosed type diabetes 16 years ago. His history includes hypertension and clinical signs of early renal failure. He forgets taking his medications on time and reports that, \"My blood sugar never has been too good, and I don't think it ever will be\".\n\nQuestions:\nA. You plan to educate this patient how to control his blood sugar, mention three verbal instructions to give effective message.\nB- Enumerate three advantages of patient education.",
    answer: "Answer:\nA. Verbal instructions:\n1. Understand the patient's circumstances, fears, expectations, and readiness to change.\n2. Avoid medical jargon and use simple, clear language.\n3. Be specific and concise in explanations.\n4. Continuously assess understanding by asking for feedback and summarizing key points.\n5. Encourage patients to ask questions and actively participate in their care.\n\nB- Advantages of patient education:\na. Increased patient satisfaction\nb. Promotion of healthy behaviors\nc. Reduction of unnecessary health care utilization\nd. Reduction of serious illness outcomes\ne. Health promotion and mortality reduction",
    isClinical: true,
    topic: "Patient Education & Verbal Counseling"
  },
  {
    id: "q-fam-edu-asymptomatic",
    chapterId: 7,
    type: "short-essay",
    title: "Patient education - Asymptomatic Hypertension",
    content: "Case 5: A 50-year-old male patient with newly diagnosed asymptomatic Hypertension tells the family physician, \"I don't need to take my anti-hypertensive drugs daily; I will only take them on the days when I feel a headache\".\n\nQuestion 9: Enumerate four fundamental reasons/clinical advantages that outline the core importance of implementing effective patient education in family medicine.\n\nQuestion 10: List four essential behavioral or structural principles that must guide the delivery of high-quality patient education during a clinical consultation.",
    answer: "Answer 9:\n1. Increased patient satisfaction with medical care.\n2. Promotion of healthy behaviors and modification of unhealthy habits.\n3. Reduction of unnecessary health care utilization (avoidable office visits/phone calls).\n4. Reduction of serious illness outcomes, decrease in complications, and lowering hospitalization costs.\n\nAnswer 10:\n1. Feedback (ensuring the patient understands the information).\n2. Reinforcement (encouraging and rewarding progress).\n3. Individualization (tailoring education according to baseline needs/goals).\n4. Facilitation (providing printed materials or skills training).",
    isClinical: true,
    topic: "Patient Education & Verbal Counseling"
  },
  {
    id: "q-fam-edu-verbal",
    chapterId: 7,
    type: "short-essay",
    title: "Patient education - Verbal Instruction Practices",
    content: "Question 5: Enumerate four essential practices a physician should follow when delivering effective \"Verbal Instruction\" during a patient education encounter.",
    answer: "Answer 5:\n1. Understand the patient's circumstances, fears, expectations, and readiness to change.\n2. Avoid medical jargon and use simple, clear language.\n3. Be specific and concise in explanations.\n4. Continuously assess understanding by asking for feedback and summarizing key points.",
    isClinical: true,
    topic: "Patient Education & Verbal Counseling"
  },

  // Topic: Referral & Consultation Processes
  {
    id: "q-fam-ref-case16",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 16: Nasal Bleeding Referral",
    content: "A 10-year-old boy comes to you with uncontrolled sever nasal bleeding after trauma. You try to stop bleeding, but it doesn't. You refer the case to the nearest hospital.\n\nQuestions:\n1. Name the type of referral in this case?\n2. List four (4) causes of referral in general?",
    answer: "Answer:\n1. Type of referral: Urgent\n2. Causes of referral in general: Diagnosis: inadequate diagnostic resources. Managment: confirmation of diagnosis and managment plan. Patient request for referral. Physician is unsatisfied with patient prognosis.",
    isClinical: true,
    topic: "Referral & Consultation Processes"
  },
  {
    id: "q-fam-ref-ischemic",
    chapterId: 7,
    type: "short-essay",
    title: "Referral - Ischemic Heart Disease",
    content: "Case 6: A family physician is caring for a patient with progressive symptoms of ischemic heart disease that are no longer responding efficiently to medical management at the primary care setting. He decides to transfer the care of this specific problem to a cardiologist.\n\nQuestion 11: Enumerate five essential socio-demographic or clinical components that MUST be clearly documented inside a standard, structurally valid medical referral letter.\n\nQuestion 12: Clearly state the primary conceptual difference between a \"Referral\" and a \"Consultation\" within family medicine practice.",
    answer: "Answer 11:\n1. Socio-demographic data (name, age, sex, and family health record number).\n2. Type of referral (urgent or elective) and destination hospital/specialty.\n3. Main complaint, present history, and relevant past medical/surgical history.\n4. Relevant physical examination findings and matching investigations.\n5. Provisional diagnosis and explicit reasons/expectations for referral.\n\nAnswer 12:\n* Consultation is the practice of one physician asking another for an opinion or assistance regarding the diagnosis and management of a patient (while retaining primary responsibility).\nReferral is the formal process of transferring the actual clinical responsibility of a patient to another physician for the care of a specific health problem.",
    isClinical: true,
    topic: "Referral & Consultation Processes"
  },
  {
    id: "q-fam-ref-types",
    chapterId: 7,
    type: "short-essay",
    title: "Referral - Types and Lateral Referral Danger",
    content: "Question 6: Enumerate the three distinct types of referral in family practice, and briefly define the danger of a \"Lateral referral\".",
    answer: "Answer 6:\n* The three types are: Urgent, Elective, and Lateral referral.\n* Lateral referral: It occurs from specialist to specialist without the involvement of the original referring family physician, which compromises continuous patient care.",
    isClinical: true,
    topic: "Referral & Consultation Processes"
  },

  // Topic: Anticipatory Care & Immunization Guidelines
  {
    id: "q-fam-ant-case1",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 1: Adolescent Routine Checkup",
    content: "A 15-year-old male comes to his family physician for routine annual medical evaluation. He has no significant medical history and receives all childhood vaccinations as reported in his family record.\n\nQuestions:\na) Enumerate five health educational messages needed to this age group.\nb) List five screening tests needed for him.",
    answer: "Answer:\na) Health educational messages needed:\n1/ PERSONAL HYGIENE\n2/ DENTAL CARE\n3/ PEOPER NUTRION AND LOW FAT\n4/ WEAR HELMET IN RIDIDNG BIKE\n5/ REGULAR EXERCISE\nb) Screening tests needed:\n1/ BLOOD PRESSURE\n2/ HEMOGLOBIN PERCENT\n3/ LIPID PROFILE\n4/ DEPRESSION SCREENING\n5/ OBESITY",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },
  {
    id: "q-fam-ant-case17",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 17: Follow-Up Case 14-Year-Old Female & Sick Infant",
    content: "A mother presented to the family health clinic with her 14-year-old daughter for routine follow-up and her 13-month-old breastfed baby who had been sick for the past 2 days. There was no significant medical history, and all childhood vaccinations were up-to-date as per the family health record.\n\nQuestions:\n1. Enumerate 4 elements of the periodic health examination for this 14-year-old female.\n2. Enumerate 4 contraindications of vaccines.",
    answer: "Answer:\nEnumerate 4 elements of the periodic health examination for this 14-year-old female:\nAnswer: Data Base Building (medical history), Social history, Anticipatory guidance, family history, Occupational and environmental history (School).\nEnumerate 4 contraindications of vaccines:\nAnswer: Anaphylactic Reaction to vaccine, true egg Allergy, immuno Compromized, Neomycin Allergy.",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },
  {
    id: "q-fam-ant-adolescent",
    chapterId: 7,
    type: "short-essay",
    title: "Anticipatory care (1 & 2) - Adolescent Periodic Examination",
    content: "Case 7: A family physician is conducting a periodic health examination for an adolescent patient. The physician aims to implement systematic, evidence-based measures to promote good health, screen for underlying psychosocial risk factors using the HEEADSSS framework, and carefully verify vaccination histories and clinical baselines.\n\nQuestion 1: Enumerate the three distinct levels of disease prevention included under Anticipatory Care, along with the core definition or objective of each level.\n\nQuestion 2: Enumerate the six essential operational elements that a family physician must comprehensively evaluate to build a proper database during a periodic health examination.\n\nQuestion 3: Enumerate the specific clinical parameters that correspond to each letter of the HEEADSSS psychosocial assessment interview framework used during adolescent screening.\n\nQuestion 4: List four true clinical contraindications to implementing childhood immunizations in a family practice setting.",
    answer: "Answer 1:\n1. Primary Prevention: Prevention of disease development. This includes providing health education about conditions known to cause disease, and prophylaxis/vaccination.\n2. Secondary Prevention: Early diagnosis and treatment. This involves screening to detect undeclared disease in asymptomatic, apparently healthy populations, and case finding.\n3. Tertiary Prevention: Systematic, long-term monitoring of a patient to prevent or minimize the impact of disease complications.\n\nAnswer 2:\n1. Building the database.\n2. Medical history.\n3. Family history.\n4. Social history.\n5. Occupational and environmental history.\n6. Anticipatory guidance.\n\nAnswer 3:\n1. H - Home.\n2. E - Eating.\n3. E - Education.\n4. A - Activities.\n5. D - Drugs.\n6. S - Suicide/depression.\n7. S - Sex.\n8. S - Safety.\n\nAnswer 4:\n1. Anaphylactic reaction to a vaccine.\n2. Seizure or fever > 40.5°C within 48 hours of a pertussis vaccine.\n3. True Egg Allergy or Neomycin allergy (for MMR vaccine).\n4. Immunocompromised status of the patient (for OPV vaccine) OR untreated moderate to severe illness associated with fever.",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },
  {
    id: "q-fam-ant-domestic",
    chapterId: 7,
    type: "short-essay",
    title: "Anticipatory care (1 & 2) - Domestic Violence screening",
    content: "Question 7: Enumerate four common atypical or nonspecific clinical presentations that should raise a primary care physician's suspicion of Domestic Violence during anticipatory screening.",
    answer: "Answer 7:\n1. Depression.\n2. Fatigue.\n3. Unexplained abdominal or pelvic pain.\n4. Multiple somatic complaints that are frequently atypical.",
    isClinical: true,
    topic: "Anticipatory Care & Immunization Guidelines"
  },

  // Topic: Breastfeeding Management & Composition
  {
    id: "q-fam-bf-case18",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 18: Lady and Postpartum Baby Care",
    content: "A lady came to the primary health care unit of Shebin Elkom accompanied by her 2 month old baby.\n\nQuestions:\n1. What are the primary health care services which would be beneficial to this lady and her child?\n2. Regarding the nutrition of this lady and her child, what are the health education messages you would like to give her?",
    answer: "Answer:\nWhat are the primary health care services which would be beneficial to this lady and her child?\nAnswer: immunization, growth monitoring, post natal care, family planning.\nRegarding the nutrition of this lady and her child, what are the health education messages you would like to give her?\nAnswer: for child: Exclusive breatfeeding, feeding on demand. For mother: Blanced diet, hydration.",
    isClinical: true,
    topic: "Breastfeeding Management & Composition"
  },
  {
    id: "q-fam-bf-contraindications",
    chapterId: 7,
    type: "short-essay",
    title: "Breast feeding Postpartum Contraindications",
    content: "Case 8: A mother presents to the family medicine center for a postpartum consultation. The family physician systematically assesses her medical history to ensure there are no infectious, metabolic, or pharmacological conditions that would serve as an absolute or temporary contraindication to breastfeeding or feeding expressed breast milk.\n\nQuestion 5: Enumerate the four clinical scenarios where a mother must ABSOLUTELY NOT breastfeed and NOT feed expressed breast milk to her infant.\n\nQuestion 6: Enumerate three specific conditions under which a mother must TEMPORARILY NOT breastfeed and NOT feed expressed breast milk to her infant, where she must wait until a physician determines her milk is safe.\n\nQuestion 7: State the specific clinical scenario where a mother must TEMPORARILY NOT breastfeed but CAN still feed expressed breast milk to her infant, including the required precautions and the timeline for safely resuming direct breastfeeding.",
    answer: "Answer 5:\n1. Infant is diagnosed with classic galactosemia (a rare genetic metabolic disorder).\n2. Mother has HIV and is not on antiretroviral therapy (ART).\n3. Mother is using an illicit drug, such as opioids, PCP (phencyclidine), or cocaine.\n4. Mother has suspected or confirmed Ebola virus disease.\n\nAnswer 6:\n1. Mother is infected with untreated brucellosis.\n2. Mother is undergoing diagnostic imaging with radiopharmaceuticals.\n3. Mother has an active herpes simplex virus (HSV) infection with lesions present on the breast.\n\nAnswer 7:\n* The Condition: Mother has untreated, active tuberculosis.\nRequired Precautions: Airborne and contact precautions that may require temporary separation of the mother and infant, during which expressed breast milk should be given.\nTimeline for Resuming Breastfeeding: The mother may resume breastfeeding once she has been treated appropriately for 2 weeks and is documented to be no longer contagious.",
    isClinical: true,
    topic: "Breastfeeding Management & Composition"
  },
  {
    id: "q-fam-bf-benefits",
    chapterId: 7,
    type: "short-essay",
    title: "Breast feeding - Maternal Benefits",
    content: "Question 8: Enumerate four evidence-based medical benefits of breastfeeding specifically for the nursing mother.",
    answer: "Answer 8:\n1. Reduces the mother's risk of breast and ovarian cancer, type 2 diabetes, and high blood pressure.\n2. Reduces the risk of developing osteoporosis.\n3. Produces oxytocin, which helps contract the uterus back to its pre-pregnancy size.\n4. Lowers the chance of developing postpartum depression.",
    isClinical: true,
    topic: "Breastfeeding Management & Composition"
  },

  // Topic: IMCI Case Management & Care
  {
    id: "q-fam-imci-case8",
    chapterId: 7,
    type: "problem-solving",
    title: "Case 8: Child presents with diarrhea",
    content: "A 3-year-old child presents with diarrhea but no dehydration or danger signs.\n\nQuestions:\n1. Which program is used to manage this case?\n2. At which level of care?",
    answer: "Answer:\n1. Program: IMCI\n2. Level of care: FHU",
    isClinical: true,
    topic: "IMCI Case Management & Care"
  },
  {
    id: "q-fam-imci-young",
    chapterId: 7,
    type: "short-essay",
    title: "IMCI up to two months (Young Infant)",
    content: "Case 9: A 3-week-old young infant is brought to the primary care unit. The family physician utilizes the structured IMCI guidelines to screen the infant for clinical signs of a localized or systemic bacterial infection.\n\nCase 10: A mother brings her 10-day-old young infant to the family medicine center because she notes progressive yellowing of the skin. The physician checks the infant's age, sclera, and limbs to determine if the clinical presentation constitutes significant jaundice.\n\nQuestion 8: Enumerate the clinical signs that classify a young infant as having a \"LOCAL BACTERIAL INFECTION\" under the IMCI protocols.\n\nQuestion 9: Enumerate six critical clinical signs that categorize a young infant under \"POSSIBLE SERIOUS BACTERIAL INFECTION\", necessitating urgent pre-referral stabilization and hospital referral.\n\nQuestion 10: Enumerate the specific clinical signs and thresholds that classify a young infant under \"SIGNIFICANT JAUNDICE\" according to IMCI guidelines.",
    answer: "Answer 8: (Presence of any of the following signs):\n1. Pus draining from the ear.\n2. Pus draining from the eyes associated with redness and swelling.\n3. Umbilical redness extending to the skin OR red umbilicus or draining pus.\n4. Skin pustules.\n\nAnswer 9: (Presence of any of the following signs):\n1. Not able to feed OR shows less than normal clinical movements.\n2. Convulsions (presenting now or by history).\n3. Fast breathing (>= 60 breaths per minute)\n4. Severe chest indrawing, nasal flaring, grunting, or wheeze.\n5. Bulging fontanelle.\n6. High fever (>= 37.5°C or feels hot) OR low body temperature (less than 35.5°C or feels cold).\n\nAnswer 10: (Presence of any of the following parameters):\n1. Jaundice started in the first 24 hours of life.\n2. Deep jaundice seen clearly in the sclera.\n3. Jaundice extending directly to the palms and/or soles.\n4. The infant's chronological age is 2 weeks or more.",
    isClinical: true,
    topic: "IMCI Case Management & Care"
  },
  {
    id: "q-fam-imci-sick",
    chapterId: 7,
    type: "short-essay",
    title: "IMCI 2 months-5 years (Sick Child)",
    content: "Case 11: A 14-month-old child weighing 11 kg is brought to the clinic presenting with an acute cough. The child is calm, and the physician counts the respiratory rate over one full minute and evaluates the chest wall for any retractions.\n\nCase 12: A 2-year-old toddler presents with a 3-day history of frequent loose, watery stools. The child is restless and highly irritable, and the family physician performs an abdominal skin pinch test to determine the correct rehydration protocol.\n\nQuestion 11: Define the specific age-based respiratory thresholds used to classify \"Fast Breathing\" under IMCI guidelines for a child aged 2 months up to 11 months, and for a child aged 12 months up to 5 years.\n\nQuestion 12: Enumerate the clinical signs that explicitly classify a coughing child under \"SEVERE PNEUMONIA OR VERY SEVERE DISEASE\", requiring urgent pre-referral antibiotic delivery and hospital referral.\n\nQuestion 13: Enumerate the specific clinical signs used to classify a child under \"SOME DEHYDRATION\" according to the IMCI diarrhea assessment chart.\n\nQuestion 14: Enumerate the clinical parameters that define \"SEVERE DEHYDRATION\", and outline the four operational flowchart steps to manage this condition if intravenous (IV) fluid access is completely unavailable nearby.",
    answer: "Answer 11:\n1. For an infant aged 2 months up to 11 months: Fast breathing is defined as 50 breaths per minute or more.\n2. For a child aged 12 months up to 5 years: Fast breathing is defined as 40 breaths per minute or more.\n\nAnswer 12: (Presence of any of the following features):\n1. Any general danger sign (unable to drink/breastfeed, vomits everything, history of convulsions, lethargic or unconscious).\n2. Stridor present in a calm child.\n3. Chest indrawing.\n\nAnswer 13: (Requires at least two of the following clinical signs):\n1. Restless, irritable.\n2. Sunken eyes.\n3. Drinks eagerly, thirsty.\n4. Skin pinch goes back slowly.\n\nAnswer 14:\n* Clinical signs of Severe Dehydration (Requires two of the following): Lethargic or unconscious; sunken eyes; not able to drink or drinking poorly; skin pinch goes back very slowly (longer than 2 seconds).\n* Four operational flowchart steps if IV fluid is NOT available nearby (Plan C flowchart):\n1. Check if you are trained to use a naso-gastric (NG) tube for rehydration.\n2. If trained, start rehydration via the NG tube (or mouth) with ORS solution, giving 20 ml/kg/hour for 6 hours (total of 120 ml/kg).\n3. If not trained in NG tube rehydration, immediately check if the child can drink.\n4. If the child cannot drink, immediately refer URGENTLY to the hospital for IV or NG treatment.",
    isClinical: true,
    topic: "IMCI Case Management & Care"
  },
  {
    id: "q-fam-imci-feeding",
    chapterId: 7,
    type: "short-essay",
    title: "IMCI up to two months - Feeding Problem",
    content: "Question 9: Enumerate the clinical criteria or historical findings that classify a young infant as having a \"FEEDING PROBLEM\" under IMCI guidelines (assuming no severe classification is present).",
    answer: "Answer 9:\n1. Not well attached to the breast.\n2. Not suckling effectively.\n3. Less than 8 breastfeeds in 24 hours.\n4. Receives other foods or drinks.",
    isClinical: true,
    topic: "IMCI Case Management & Care"
  },
  {
    id: "q-fam-imci-wheezing-mgmt",
    chapterId: 7,
    type: "short-essay",
    title: "IMCI 2 months-5 years - Wheezing management",
    content: "Question 10: Enumerate the treatment protocol steps for a child presenting with \"Wheezing\" who has fast breathing but NO general danger signs and NO stridor, according to IMCI flowcharts.",
    answer: "Answer 10:\n1. Give a rapid-acting bronchodilator and reassess the child 30 minutes later.\n2. If fast breathing alone persists after reassessment, treat for PNEUMONIA and give oral salbutamol for 5 days.\n3. If there is no fast breathing after the bronchodilator, treat for NO PNEUMONIA: COUGH OR COLD and give oral salbutamol for 5 days.",
    isClinical: true,
    topic: "IMCI Case Management & Care"
  }
];
