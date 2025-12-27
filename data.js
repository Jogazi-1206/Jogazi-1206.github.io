/**
 * 포트폴리오 데이터 (Content)
 * [업데이트 가이드]
 * 이제 프로젝트 내용을 더 구조적으로 보여줍니다.
 * 1. overview: 기간, 팀, 역할 정보를 객체로 넣으세요.
 * 2. keyResult: 핵심 성과(수상 등)를 적으세요.
 * 3. catchphrase: 프로젝트를 관통하는 한 줄 문구입니다.
 * 4. problemSolving: 문제-전략-실행 단계를 배열로 정리하세요.
 */

window.DB = {
    experience: [
        {
            id: 'crevisse',
            company: 'Crevisse Partners',
            role: '사업개발팀 인턴 (B2B SaaS)',
            period: '2025.07 — 2025.12',
            summary: '신규 데이터 서비스 기획부터 개발, 배포, 전략 수립까지 End-to-End 수행.',
            // Experience는 기존 HTML 방식 유지 (원하시면 위 구조로 변경 가능)
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">직무: 사업개발팀 인턴</h4>
                <p class="text-sm text-slate-600 mb-4">신규 데이터 서비스 기획부터 개발, 배포, 전략 수립까지 End-to-End 수행</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">주요 성과 (Key Achievements)</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>DQM 서비스 개발:</strong> 14만 건 고객 데이터 정제를 위한 파이프라인 아키텍처 설계 및 Python 구현 (10만 건 수정). TDD 도입으로 코드 신뢰성 확보.</li>
                    <li><strong>사내 업무 DX:</strong> Google Apps Script로 스팸 신고 대응 프로세스 100% 자동화 (보안 웹앱 구현).</li>
                    <li><strong>데이터 엔지니어링:</strong> Snowflake 도입 및 SQL 기반 ELT 파이프라인 구축, Streamlit 매출 대시보드 개발.</li>
                    <li><strong>전략 기획:</strong> SaaS 전환(V1→V2) 가격 정책 수립 및 AI 자동화 시장 리서치.</li>
                </ul>
            `,
            tags: ['Python', 'SQL', 'Apps Script', 'Strategy'],
            images: [] 
        },
        {
            id: 'sustinvest',
            company: 'Sustinvest',
            role: 'ESG 데이터 리서처 (인턴)',
            period: '2025.04 — 2025.06',
            summary: '상장사 ESG 데이터 구축 및 업무 프로세스 효율화.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">직무: ESG 데이터 리서처</h4>
                <p class="text-sm text-slate-600 mb-4">상장사 ESG 데이터 구축 및 업무 프로세스 효율화</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">주요 성과 (Key Achievements)</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>대규모 DB 구축:</strong> 150개사 대상 13,500건의 정량/정성 ESG 데이터베이스 구축 (정합성 확보).</li>
                    <li><strong>프로세스 개선:</strong> 빈출 키워드 분석을 통한 코드북/핸드북 개선안 제안 및 채택.</li>
                    <li><strong>업무 자동화:</strong> Python 웹 크롤러를 직접 설계/구현하여 반복적인 인증서 수집 업무 자동화.</li>
                </ul>
            `,
            tags: ['Data Analysis', 'Web Crawling', 'ESG Research'],
            images: []
        },
    ],
    projects: [
        // --- [NEW] 구조화된 데이터 예시 (야놀자 슈퍼앱) ---
        {
            id: 'yanolja',
            type: 'strategy',
            title: '관광 AI 슈퍼앱 기획',
            category: '야놀자 리서치 공모전',
            summary: '방한 관광객 페인포인트 분석 및 AI 기반 통합 여행 슈퍼앱 전략 수립.',
            
            // 1. Overview Bar
            overview: {
                period: '2023.00 ~ 2023.00', // 날짜 채워주세요
                team: '팀 프로젝트(4명)',
                role: 'PM, UX기획 (기여도 40%)'
            },
            
            // 2. Key Result (강조)
            keyResult: '🏆 야놀자 리서치 공모전 [장려상] 수상',
            
            // 3. Description (업그레이드)
            catchphrase: '"파편화된 한국 여행 경험을 잇는 AI 비서"',
            description_new: "외국인 관광객이 정보 탐색부터 결제까지 단절 없이 이용 가능한 '초개인화 슈퍼앱'을 제안했습니다.",
            
            // 4. Problem Solving (기존 Process 대체)
            problemSolving: [
                {
                    title: '문제 정의',
                    keyword: '파편화된 경험',
                    desc: '방한 관광객 인터뷰 결과, 앱 간 이동(지도↔결제) 시 45%가 불편을 느낌을 확인.'
                },
                {
                    title: '핵심 전략',
                    keyword: 'Seamless UX',
                    desc: "AI가 일정에 맞춰 숙소·티켓을 자동 추천하고, '인앱 원클릭 결제'가 가능한 통합 비즈니스 모델 설계."
                },
                {
                    title: '실행',
                    keyword: '설득력 강화',
                    desc: 'Figma로 사용자 시나리오(User Journey)를 시각화하여, 심사위원들로부터 "실현 가능성이 높다"는 호평 획득.'
                }
            ],
            
            tags: ['Strategy', 'Figma', 'App Planning'],
            icon: '🌏',
            images: [] // 이미지 경로 추가: ['./images/yanolja_figma.png']
        },

        // --- 기존 데이터들 (추후 위 형식을 참고해 업데이트하세요) ---
        {
            id: 'stock-trading',
            type: 'data',
            title: '주식 예측 모델',
            category: 'Personal Project',
            summary: '기술적 지표와 과거 데이터를 머신러닝으로 학습시켜 주가 등락을 예측하는 모델을 개발했습니다.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Overview</h4>
                <p class="text-sm text-slate-600 mb-4">데이터 기반의 객관적인 투자를 위해 과거 10년치 주가 데이터와 기술적 지표를 학습한 머신러닝 예측 모델입니다.</p>
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Key Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>Feature Engineering:</strong> 이동평균선(MA), RSI, MACD 등 15가지 핵심 기술적 지표를 생성하여 학습 데이터로 활용.</li>
                    <li><strong>모델링:</strong> Scikit-learn을 활용하여 과거 데이터를 학습하고, 다음 날의 주가 등락(Up/Down)을 예측하는 분류 모델 구축.</li>
                    <li><strong>검증:</strong> TimeSeriesSplit 교차 검증을 통해 과적합(Overfitting)을 방지하고 모델 신뢰성 확보.</li>
                </ul>
                <p class="text-sm text-brand-600 font-bold">성과: 테스트 데이터셋 기준 예측 정확도 60% 달성 및 주요 변수 중요도(Feature Importance) 도출.</p>
            `,
            tags: ['Machine Learning', 'Python', 'Feature Engineering'],
            icon: '📈',
            images: [
                'https://via.placeholder.com/600x300/f1f5f9/94a3b8?text=Feature+Importance+Chart',
                'https://via.placeholder.com/600x300/f1f5f9/94a3b8?text=Prediction+Accuracy+Result'
            ]
        },
        // ... (나머지 프로젝트들은 일단 기존 형식 유지) ...
        {
            id: 'review-ai',
            type: 'data',
            title: '리뷰 유용성 예측 AI 모델',
            category: '경영과학회 AI/OR (장려상)',
            summary: '딥러닝(CNN) 기반 배달 앱 리뷰 \'유용성\' 예측 모델 개발.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">주제: AI/OR을 이용한 경영 혁신</h4>
                <p class="text-sm text-slate-600 mb-4">딥러닝(CNN) 기반 배달 앱 리뷰 '유용성' 예측 모델 개발</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>문제 정의:</strong> 기존 정렬 방식(최신순/평점순)의 한계를 발견하고, 고객에게 진짜 도움이 되는 리뷰를 선별하는 모델 기획.</li>
                    <li><strong>모델링:</strong> '유용성'을 종속변수로 설정하고, CNN 모델을 직접 구축 및 학습. 기존 ML 모델 대비 성능(정확도, 정밀도) 향상 확인.</li>
                </ul>
                <p class="text-sm text-brand-600 font-bold">결과: 장려상 수상. AI 기술을 실제 비즈니스 문제 해결에 적용하는 역량 입증.</p>
            `,
            tags: ['Deep Learning', 'CNN', 'Python'],
            icon: '🤖',
            images: []
        },
        {
                id: 'kmac',
            type: 'data',
            title: '파인다이닝 리뷰 분석 전략',
            category: 'KMAC 경영혁신 공모전',
            summary: '파인다이닝 리뷰 데이터 분석을 통해 소비자 특성별 세부 전략을 도출했습니다.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">주제: 파인다이닝 레스토랑 리뷰 데이터 분석</h4>
                <p class="text-sm text-slate-600 mb-4">텍스트 마이닝을 통해 파인다이닝과 일반 식당의 고객 경험 차이를 분석하고 맞춤형 전략 제안</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                        <li><strong>데이터 분석:</strong> 오픈소스 리뷰 데이터 전처리 및 감성 분석 수행.</li>
                        <li><strong>토픽 모델링:</strong> BERTopic을 활용하여 각 그룹의 핵심 키워드(맛 vs. 분위기/경험) 도출.</li>
                        <li><strong>군집 분석:</strong> 소비자를 4개 군집으로 세분화하여 타겟별 차별화 전략 수립.</li>
                </ul>
            `,
            tags: ['Data Analysis', 'NLP', 'Strategy'],
            icon: '🍽️',
            images: []
        },
        {
            id: 'subscription',
            type: 'data',
            title: '소상공인 구독 모델 제안',
            category: '소상공인 컨설팅 (수상)',
            summary: '리뷰 데이터 군집 분석을 통해 오프라인 매장의 정기구독 수요를 발굴했습니다.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">주제: 소상공인 매출 증대 컨설팅</h4>
                <p class="text-sm text-slate-600 mb-4">오프라인 매장의 한계를 극복하기 위한 데이터 기반 '온라인 정기구독' 모델 제안</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>데이터 분석:</strong> 상권/검색 데이터 및 3개 채널 리뷰 텍스트 수집.</li>
                    <li><strong>인사이트 도출:</strong> 텍스트 마이닝으로 '맛'이 아닌 '운영 이슈'가 문제임을 규명하고, '정기구독' 잠재 수요 발견.</li>
                    <li><strong>타당성 검증:</strong> Python(KoNLPy, K-Means) 군집 분석을 통해 구독 서비스의 타겟 고객군과 수요를 정량적으로 입증.</li>
                </ul>
            `,
            tags: ['Python', 'Clustering', 'Consulting'],
            icon: '🏪',
            images: []
        },
        {
            id: 'lg-ensol',
            type: 'strategy',
            title: '전기이륜차 마케팅 전략',
            category: 'LG엔솔 BSS 공모전',
            summary: '전기이륜차 인식 개선을 위한 \'미니멀 모빌리티\' 브랜딩 및 마케팅 전략.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">주제: 전기이륜차 BSS 마케팅 전략</h4>
                <p class="text-sm text-slate-600 mb-4">전기이륜차의 부정적 인식 개선을 위한 '미니멀 모빌리티' 리브랜딩</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>인사이트 도출:</strong> 설문조사를 통해 소비자 니즈(친환경, 경제성) 및 기존 오토바이의 부정적 이미지 확인.</li>
                    <li><strong>컨셉 도출:</strong> '미니멀 모빌리티' 포지셔닝을 통해 B2B(직장인) 및 B2C(대학생) 타겟별 전략 수립.</li>
                    <li><strong>디자인:</strong> Figma로 앱, 포스터, 팜플렛 등 마케팅 에셋 직접 제작.</li>
                </ul>
            `,
            tags: ['Marketing', 'Branding', 'Analysis'],
            icon: '🛵',
            images: []
        },
            {
            id: 'fastcampus',
            type: 'strategy',
            title: '시니어 인재 매칭 플랫폼',
            category: '패스트캠퍼스 AI 공모전',
            summary: 'AI 기반 시니어 인재 매칭 플랫폼 기획 및 합성 데이터 활용 방안 제시.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">주제: 사회적 가치 창출 AI 비즈니스 혁신</h4>
                <p class="text-sm text-slate-600 mb-4">대기업 은퇴 인력과 스타트업을 연결하는 'AI 고문 매칭 플랫폼' 기획</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                        <li><strong>문제 정의:</strong> 시니어 재취업 난항과 스타트업 인재 부족이라는 두 가지 사회 문제의 접점 발견.</li>
                        <li><strong>솔루션 설계:</strong> AI가 가상 비즈니스 케이스 해결 과정을 평가하여 매칭하는 시스템 설계.</li>
                        <li><strong>기술 제안:</strong> 초기 데이터 부족 문제를 해결하기 위한 '합성 데이터(Synthetic Data)' 활용 방안 제시.</li>
                </ul>
            `,
            tags: ['AI Planning', 'Social Impact', 'Synthetic Data'],
            icon: '👴',
            images: []
        },
        {
            id: 'bacs',
            type: 'school',
            title: 'BACS 학회 활동',
            category: 'Academic Society',
            summary: '9기 부학회장 역임. 데이터 분석/머신러닝 커리큘럼 기획 및 기업 분석.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">역할: 2학기 부학회장 & 학회원</h4>
                <p class="text-sm text-slate-600 mb-4">경영전략 프레임워크 학습 및 데이터 분석 역량 강화를 위한 커리큘럼 기획/운영</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Key Projects</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>[전략] 이마트/메가커피/넷플릭스:</strong> MECE, 3C, 벤치마킹 등을 활용한 기업 부진 원인 분석 및 신사업 전략 제안.</li>
                    <li><strong>[데이터] HR 승진 예측 모델:</strong> SMOTE로 데이터 불균형 해결 후 머신러닝 모델 구축 (정확도 93%).</li>
                    <li><strong>[데이터] 신용카드 제안 예측:</strong> 고객 군집 분석을 통한 혜택별 수락률 분석 및 개인화 전략 도출.</li>
                </ul>
            `,
            tags: ['Leadership', 'Data Analysis', 'Strategy'],
            icon: '🎓',
            images: []
        },
        {
            id: 'academicus',
            type: 'school',
            title: '아카데미쿠스 (3등)',
            category: 'Academic Contest',
            summary: 'CBDC 도입 시나리오 분석 및 보험 추천 솔루션 기획.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">주제: 금융 패러다임 변화와 기업 대응</h4>
                <p class="text-sm text-slate-600 mb-4">CBDC 환경에서의 데이터 가시화를 활용한 보험 산업 혁신 모델 제안</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>시나리오 분석:</strong> CBDC 완전 도입 시나리오에서의 기회 요인 포착.</li>
                    <li><strong>솔루션 기획:</strong> 마이데이터와 결제 데이터를 결합한 초개인화 보험 추천 시스템 기획 (카카오페이손해보험 타겟).</li>
                    <li><strong>프로토타이핑:</strong> Figma를 활용하여 직관적인 UI/UX 프로토타입 제작.</li>
                </ul>
            `,
            tags: ['Fintech', 'Scenario', 'Planning'],
            icon: '🥉',
            images: []
        },
        {
            id: 'green-society',
            type: 'school',
            title: '리더스오브그린소사이어티',
            category: 'Academic Activity',
            summary: '산학연계 프로젝트: 친환경 소재 사용 정보 제공을 위한 마케팅 전략 기획.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">역할: 마케팅 전략 기획</h4>
                <p class="text-sm text-slate-600 mb-4">친환경 소재 사용 정보 제공을 위한 마케팅 전략 도출 및 실행 방안 기획</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>아이디어 기획:</strong> QR코드 확장 디자인 및 게이미피케이션 요소를 도입하여 소비자 참여 유도.</li>
                    <li><strong>협업 관리:</strong> 익명 피드백 시스템과 회의 문서 공유 프로세스 도입으로 커뮤니케이션 효율성 증대.</li>
                </ul>
            `,
            tags: ['Marketing', 'ESG', 'Project'],
            icon: '🌱',
            images: []
        },
        {
            id: 'esg-contest-school',
            type: 'school',
            title: '교내 ESG 경진대회',
            category: 'Academic Contest (우수상)',
            summary: '유학생들의 학교 적응을 돕기 위한 \'유학생 전담 또래 코칭\' 프로그램 제안.',
            description: `
                <h4 class="font-bold text-navy-900 mb-2 text-lg">역할: 사회(S) 부문 아이디어 제안</h4>
                <p class="text-sm text-slate-600 mb-4">유학생들의 학교 적응을 돕기 위한 '유학생 전담 또래 코칭' 프로그램 제안</p>
                
                <h4 class="font-bold text-navy-900 mb-2 text-lg">Process</h4>
                <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-4">
                    <li><strong>문제 정의:</strong> 유학생들의 학교 적응 어려움에 공감하고, 기존 또래 코칭 수업 내용을 바탕으로 해결책 모색.</li>
                    <li><strong>솔루션 도출:</strong> 실제 유학생 인터뷰를 통해 실용적인 니즈를 파악하고, 맞춤형 코칭 프로그램 기획.</li>
                </ul>
            `,
            tags: ['ESG', 'Idea', 'Campus'],
            icon: '🏫',
            images: []
        }
    ]
};
