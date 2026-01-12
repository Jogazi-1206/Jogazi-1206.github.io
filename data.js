/**
 * 포트폴리오 데이터 (Content)
 * [최종 수정 완료]
 * - 삭제된 프로젝트: 전기이륜차, 소상공인 구독, 리더스오브그린, 교내 ESG
 * - 남은 프로젝트: 핵심 역량(Data/Tech, Strategy) 위주의 고밀도 프로젝트 9개
 * - 키워드 한글화 적용
 */

window.DB = {
    experience: [
        // 1. 크레비스 파트너스
        {
            id: 'crevisse',
            company: 'Crevisse Partners',
            role: 'SaaS 사업개발 & 데이터 인턴',
            period: '2025.07 — 2025.12',
            summary: '사내 데이터 인프라 구축 및 고객 솔루션 개발로 매출/효율 동시 혁신.',
            tags: ['Snowflake', 'Streamlit', 'Salesforce', 'Python', 'SQL'],
            
            overview: {
                period: '2025.07 — 2025.12',
                team: 'Business Dev Team',
                role: 'Intern (Full-stack Support)'
            },
            
            keyResult: '🚀 신규 솔루션으로 매출 창출 & 데이터 리포팅 리소스 100% 절감',
            
            catchphrase: '"비즈니스 기회를 기술로 구현하여 실제 매출과 운영 효율을 모두 잡다"',
            
            description_new: "SaaS 사업개발팀에서 단순 업무 수행을 넘어, Python과 SQL을 활용해 사내 데이터 인프라를 직접 구축했습니다. 또한 고객사의 페인 포인트를 해결하는 솔루션(DQM, 자동화)을 기획/개발하여 회사의 신규 매출원까지 창출했습니다.",
            
            subProjects: [
                {
                    title: '1. 📊 클라우드 매출 데이터 대시보드 구축',
                    content: [
                        { step: '문제 정의', desc: '매출 데이터 대용량화로 인한 스프레드시트 연산 속도 저하 및 수기 입력 과정에서의 휴먼 에러 발생 위험 증가.' },
                        { step: '가설 수립', desc: '원천 데이터를 Snowflake로 중앙화하고 집계 과정을 코드로 자동화한다면, 데이터 정합성을 확보하고 리포팅 리소스를 제로화할 수 있을 것.' },
                        { step: '액션 및 검증', desc: 'Python으로 2년치 데이터 전처리 후 이관, SQL 기반 ELT 파이프라인 구축, Streamlit으로 실시간 웹 대시보드 개발 및 배포.' },
                        { step: '결과', desc: '수동 집계 프로세스 시스템화로 휴먼 에러율 원천 차단 및 실시간 데이터 조회 환경 구축.' }
                    ]
                },
                {
                    title: '2. ☁️ Salesforce 도입을 위한 PoC',
                    content: [
                        { step: '문제 정의', desc: '전체 CS 문의 중 50% 이상을 차지하는 단순 반복 문의로 인한 운영 리소스 낭비 해결을 위해 AI Agent 도입 검토.' },
                        { step: '데이터 분석', desc: 'Zendesk 티켓 이력 분석을 통해 AI 자동 응대가 가능한 문의 유형을 분류하고 학습 데이터 이관 시뮬레이션 수행.' },
                        { step: '기술 검증', desc: 'Salesforce Trial 환경 구축 및 Zendesk 데이터 이관 테스트 완료, Agentforce 학습을 위한 지식 데이터 구조화 전략 수립.' }
                    ]
                },
                {
                    title: '3. 🔎 전략 리서치',
                    content: [
                        { step: '레거시 전환', desc: '글로벌 선도 SaaS 기업 벤치마킹을 통해, v1 고객의 이탈을 방지하고 v2로 자연스럽게 이동시키기 위한 단계별 전환 시나리오 및 커뮤니케이션 전략 제안.' },
                        { step: '신규 시장 분석', desc: 'AI 업무 자동화 니즈 증가에 대응하기 위해 국내 솔루션 기업을 조사하고, 자사 개발 역량과 시장 내 기존 솔루션을 비교 분석하여 진입 전략 도출.' }
                    ]
                }
            ],
            images: [] 
        },
        // 2. 서스틴베스트
        {
            id: 'sustinvest',
            company: 'Sustinvest',
            role: 'ESG 데이터 리서처 (인턴)',
            period: '2025.04 — 2025.06',
            summary: '10,000건의 비정형 데이터를 정량화하고, 반복 수집 업무를 자동화.',
            tags: ['ESG Analysis', 'Python', 'Web Crawling', 'Strategic Research'],
            overview: { period: '2025.04 — 2025.06', team: 'Research & Data 본부', role: 'Research Intern' },
            keyResult: '⚡ 10,000건 데이터 구축 및 Python 자동화 프로토타입 구현',
            catchphrase: '"10,000건의 비정형 데이터를 정량화하고, 반복 수집 업무를 자동화하다"',
            description_new: "ESG 평가기관에서 상장사 데이터 구축 업무를 수행하며 데이터 정합성의 중요성을 체득했습니다. 특히 단순 반복되던 보고서 수집 업무에서 Python 크롤러 도입을 제안하고 프로토타입을 구현하여 팀 내 업무 효율화 가능성을 증명했습니다.",
            subProjects: [
                {
                    title: '🤖 SR 보고서 수집 자동화 및 키워드 매핑',
                    content: [
                        { step: '문제정의', desc: '평가 시즌마다 수백 개의 지속가능경영보고서와 인증서를 수동으로 다운로드하고 분류하는 과정에서 단순 반복 업무 과중.' },
                        { step: '액션', desc: 'Python을 활용하여, 1) 지속가능경영보고서 속 키워드별 매칭을 통한 스크립트 제작, 2) 홈페이지에서 인증서를 찾을 수 있는 크롤러 기능 프로토타입 설계.' },
                        { step: '결과', desc: '기존 수동 프로세스 대비 문서 수집 시간 단축 가능성 확인 및 팀 내 데이터 수집 가이드라인 개선 아이디어 제안.' }
                    ]
                },
                {
                    title: '📊 상장사 ESG 데이터 구축 및 클렌징',
                    content: [
                        { step: '업무 내용', desc: '100개 상장사의 90여개 ESG 정성 지표를 전수 조사하여 총 10,000건 이상의 ESG DB를 구축.' },
                        { step: '성과', desc: 'DART 공시와 보고서 간의 불일치 데이터를 교차 검증하여 결함률 0%를 목표로 정합성 확보. 대용량 데이터 핸들링 및 엑셀 데이터 관리 역량 강화.' }
                    ]
                },
                {
                    title: '🌍 GP 선정을 위한 글로벌 PE ESG 동향 리서치',
                    content: [
                        { step: '업무 내용', desc: '한국수출입은행의 프로젝트에 참여하여, 해외 주요 LP/GP의 ESG 투자 가이드라인 및 평가 모델을 조사.' },
                        { step: '성과', desc: '해외 선진 사례 벤치마킹을 통해 GP 선정 시 고려해야 할 핵심 ESG 평가지표 도출.' }
                    ]
                }
            ],
            images: []
        }
    ],

    projects: [
        // --- [Data & Tech] ---
        
        // 1. 데이터 품질 관리 (DQM)
        {
            id: 'crevisse-dqm',
            type: 'data-tech', 
            title: '데이터 품질 관리(DQM) 솔루션',
            category: 'Crevisse Partners (매출 창출)',
            summary: '고객사 데이터 진단/정제/보고서 생성을 위한 Python 기반 DQM 솔루션 개발.',
            tags: ['Python', 'TDD', 'Product Management', 'Revenue Generation'],
            icon: '💎',
            overview: { period: '2025.08 ~ 2025.11', team: 'Business Dev', role: '기획, 개발, 고객 커뮤니케이션' },
            keyResult: '💰 신규 SaaS 매출 창출 & 60만 건 데이터 처리/자동화',
            catchphrase: '"데이터 웨어하우스 도입의 병목, \'품질 관리 자동화\'로 뚫다"',
            description_new: "많은 고객사가 데이터 기반 의사결정을 위해 DW 도입을 원하지만, 원천 데이터의 오염(노이즈, 결측치) 문제로 인해 도입이 지연되는 현상을 발견했습니다. 이를 해결하기 위해 진단부터 정제, 리포팅까지의 전 과정을 자동화하는 Python 솔루션을 개발하여 신규 매출 파이프라인을 창출했습니다.",
            problemSolving: [
                { title: '1. 문제 정의', keyword: '데이터 오염', desc: '고객사는 DW 도입을 희망하나, 원천 데이터의 노이즈와 결측치 문제로 인해 적재하더라도 유의미한 분석이 불가능한 "효율 저하" 상황 진단.' },
                { title: '2. 가설 수립', keyword: '자동화 전략', desc: '복잡한 데이터 정제 과정을 표준화된 로직으로 자동화하여 패키지 솔루션으로 제공한다면, 고객의 DW 진입 장벽을 낮추면서도 단계적 계약을 유도할 수 있을 것.' },
                { title: '3. 액션 (설계)', keyword: '표준화', desc: '국내외 DQM 선도 기업을 벤치마킹하여, 이메일/주소 등 비즈니스 필수 6대 핵심 필드를 정의하고 [진단 → 자동 정제 → 리포팅]으로 이어지는 3단계 품질 관리 아키텍처 설계.' },
                { title: '4. 액션 (개발)', keyword: 'Python & TDD', desc: 'AI(Vibe Coding)를 활용해 개발하되, 로직 신뢰성을 위해 100개 이상의 엣지 케이스(TDD)를 통과하는 코드를 구현. 진단 결과를 시각화된 PDF 보고서로 자동 생성하는 기능 구현.' },
                { title: '5. 결과', keyword: '매출 & 임팩트', desc: '실제 계약 체결을 통해 회사의 새로운 SaaS 부가 서비스 모델로 안착. 데이터 60만 건 진단 및 10만 건 정제를 자동 수행하며 고객 세그먼테이션 효율 증대.' },
                { title: '6. 배운점', keyword: '핵심 배움', desc: '고도화된 AI 모델이 아니더라도, 고객의 가장 아픈 곳(Pain Point)을 긁어주는 솔루션이라면 충분히 비즈니스적으로 큰 임팩트를 낼 수 있음을 체득.' }
            ],
            images: ['./images/crevisse-dqm.jpg'] 
        },

        // 2. KISA 스팸 신고 자동화
        {
            id: 'crevisse-kisa',
            type: 'data-tech', 
            title: 'KISA 스팸 신고 대응 자동화',
            category: 'Crevisse Partners (업무 자동화)',
            summary: 'Google Apps Script와 Web App을 활용한 스팸 신고 처리 프로세스 100% 자동화.',
            tags: ['Google Apps Script', 'Web App', 'Automation', 'Process Innovation'],
            icon: '⚡',
            overview: { period: '2025.10 ~ 2025.12', team: 'Business Dev (개인 프로젝트)', role: '프로세스 설계 및 개발' },
            keyResult: '⚙️ 담당자 개입 0회: 4단계 수동 프로세스를 100% 자동화',
            catchphrase: '"매주 반복되던 비효율, 코드로 시스템을 만들어 삭제하다"',
            description_new: "매주 반복되는 스팸 신고 처리 업무(메일 수신 → 고객사 전달 → 소명 취합 → 회신)의 4단계 과정을 수동으로 반복하는 비효율을 해결했습니다. Web App과 Bot을 활용한 자동화 파이프라인을 구축하여 담당자의 개입을 0으로 만들었습니다.",
            problemSolving: [
                { title: '1. 문제 정의', keyword: '페인 포인트', desc: '신고 건수가 늘어날수록 업무 시간이 정비례해서 늘어나는 구조적 문제. 단순 복사/붙여넣기에 리소스가 낭비되고, 이메일 회신 대기 중 병목 발생.' },
                { title: '2. 가설 수립', keyword: '자동화 로직', desc: '신고 내역 입력을 기계가 대신하고(DB 저장), 고객사가 이메일 회신 대신 웹 화면에서 직접 소명하게 만든다면 전 과정을 자동화할 수 있을 것.' },
                { title: '3. 액션 (봇)', keyword: '파이프라인 & 웹앱', desc: 'Gmail, 스프레드시트, 드라이브를 연결하는 봇을 개발. 메일 수신 시 엑셀을 파싱하여 DB에 적재하고, 이메일 API로 고객사에게 자동 알림 발송.' },
                { title: '4. 액션 (앱)', keyword: '웹 앱 UI', desc: '고객사가 메일 회신 대신 직접 접속하여 소명 내용을 입력할 수 있는 [고객 전용 Web App]을 개발. 입력 데이터가 즉시 내부 DB와 동기화되도록 구현.' },
                { title: '5. 결과', keyword: '운영 리소스 제로', desc: '담당자의 수동 개입 횟수 0회 달성. 클릭 몇 번으로 소명을 완료하여 고객 만족도가 증대되었으며, 수기 작성 오타 및 누락 사고 원천 차단.' },
                { title: '6. 배운점', keyword: '시스템적 사고', desc: '거창한 솔루션 없이 기존 툴을 코드로 연결하여 강력한 시스템을 구축. 건수가 10건이든 1,000건이든 업무량이 늘어나지 않는 시스템적 사고의 중요성 체득.' }
            ],
            images: ['./images/crevisse-kisa.jpg'] 
        },

        // 3. 주식 예측 (Data)
        {
            id: 'stock-trading',
            type: 'data-tech', 
            title: '주식 급등 예측 퀀트 모델',
            category: 'Personal Project',
            summary: '기술적 지표와 과거 데이터의 상관관계를 분석하여 주가 급등 시점을 포착하는 머신러닝 분류 모델 개발.',
            tags: ['Quant Trading', 'Machine Learning', 'Feature Importance'],
            icon: '📈',
            overview: { period: '2023.08 ~ 2023.11', team: '개인 프로젝트', role: 'Quant Developer & Analyst' },
            keyResult: '📈 확신도 70% 이상 구간에서 승률 84.3% 달성 및 핵심 지표 발굴',
            catchphrase: '"감이 아닌 데이터로 투자의 승률을 높이다"',
            description_new: "개인 투자자의 뇌동매매를 방지하기 위해, 거시경제 지표와 기술적 분석을 결합한 퀀트 알고리즘을 설계했습니다. S&P500 10년 치 데이터를 머신러닝으로 학습시켜 객관적인 매수 시그널을 제공하는 모델을 구현했습니다.",
            problemSolving: [
                { title: '1. 문제 정의', keyword: '뇌동매매 방지', desc: '시장 급등락에 휘둘리는 개인 투자자의 문제를 해결하고자, 뉴스나 감이 아닌 객관적 데이터로 매수/매도 시점을 판단하는 정량적 기준 마련.' },
                { title: '2. 가설 수립', keyword: '비선형 패턴', desc: '인간이 발견하기 힘든 다양한 기술적 지표의 조합(비선형적 패턴)을 머신러닝이 학습한다면, 과거 급등 사례를 통해 현재의 상승 유망 종목을 필터링할 수 있을 것.' },
                { title: '3. 액션 (데이터)', keyword: '70만 건 데이터', desc: '미국 S&P500 상위 300개 기업의 10년 치 데이터(약 700,000개)를 수집. 이동평균 이격도, RSI, ATR 등 20여 가지 파생 변수를 생성하여 학습 데이터셋 구축.' },
                { title: '4. 액션 (모델링)', keyword: '이진 분류 학습', desc: '단순 등락이 아닌 "실질적 수익 구간(ATR 1.3배 상승)"을 타겟으로 라벨링하고, 랜덤 포레스트 알고리즘과 가중치 조정(Class Weight)을 통해 클래스 불균형 문제 해결.' },
                { title: '5. 결과', keyword: '승률 84.3%', desc: '모델 확신도 70% 이상 구간에서 승률 84.3%를 기록. 단순 골든크로스보다 변동성 비율(ATR Ratio)과 장기 추세 이격도가 더 중요한 지표임을 통계적으로 확인.' },
                { title: '6. 배운점', keyword: '정밀도 최적화', desc: '투자에서는 단순히 맞추는 것보다 "틀리지 않는 것"이 중요함을 깨닫고 정밀도(Precision)를 최적화. 실생활 문제를 데이터로 정의하고 해결하는 실행력 체득.' }
            ],
            images: ['./images/stock-trading_1.jpg', './images/stock-trading_2.jpg', './images/stock-trading_3.jpg']
        },

        // 4. 리뷰 유용성 예측 (Data)
        {
            id: 'review-ai',
            type: 'data-tech', 
            title: '리뷰 유용성 예측 AI 모델',
            category: '경영과학회 AI/OR (장려상)',
            summary: '딥러닝(CNN)을 활용하여 배달 앱 리뷰의 실질적 도움 여부를 예측하는 모델 개발.',
            tags: ['Deep Learning', 'CNN', 'Python'],
            icon: '🤖',
            overview: { period: '2024.09 ~ 2024.11', team: '팀 프로젝트(3명)', role: 'Modeling & Logic Design' },
            keyResult: '🏆 경영과학회 장려상 | 정확도 0.76 달성 (ML 대비 15% 성능 향상)',
            catchphrase: '"단순 별점을 넘어, 진짜 도움이 되는 리뷰를 찾아내다"',
            description_new: "기존 배달 앱의 단순 나열식 리뷰 시스템이 정보 탐색 효율을 떨어뜨린다는 문제에 착안했습니다. 텍스트의 맥락을 읽는 딥러닝(CNN) 모델을 도입하여 광고성 글을 걸러내고, 사용자에게 실질적 도움이 되는 '유용성'을 예측하는 알고리즘을 개발했습니다.",
            problemSolving: [
                { title: '1. 문제 정의', keyword: '정보 과부하', desc: '기존 리뷰 시스템(최신순/별점순)은 광고성 글이나 영양가 없는 리뷰를 걸러내지 못해 사용자의 정보 탐색 비용을 높이는 페인 포인트 발견.' },
                { title: '2. 가설 수립', keyword: '딥러닝 접근', desc: '단순 키워드 매칭을 넘어 글의 맥락(Context)과 가독성/주관성 같은 파생 변수를 결합하여 딥러닝으로 학습시킨다면, "유용성" 예측 정확도를 획기적으로 높일 수 있을 것.' },
                { title: '3. 액션 (전략)', keyword: '데이터 전략', desc: '초기 크롤링 데이터 품질 문제 발생 시 오픈 데이터셋으로 신속하게 피봇(Pivot)하여 리소스를 확보하고, 가독성/감성 점수 등 다차원 파생 변수를 설계하여 모델 입력값 고도화.' },
                { title: '4. 액션 (모델링)', keyword: '하이브리드 CNN', desc: '이미지 처리에 강한 CNN을 텍스트 분석에 응용하여 문장 내 단어들의 인접 패턴(맥락)을 학습시키고, 정량적 파생 변수와 결합한 하이브리드 모델 아키텍처 설계.' },
                { title: '5. 결과', keyword: '성능 향상', desc: '동일 데이터셋 기준 기존 머신러닝 모델 대비 정확도 0.15(+15%p), 정밀도 0.14 향상을 기록하며 딥러닝 도입의 유효성을 정량적으로 입증.' },
                { title: '6. 배운점', keyword: '실행력 & 성장', desc: '파이썬 비전공자로서 겪은 기술적 장벽을 두려움 없이 학습으로 돌파하며, 작은 문제라도 기술을 통해 직접 해결해보는 "실행력"의 가치를 체득.' }
            ],
            images: ['./images/review-ai_1.jpg', './images/review-ai_2.jpg', './images/review-ai_3.jpg']
        },

        // 5. 파인다이닝 분석 (Data)
        {
            id: 'kmac',
            type: 'data-tech', 
            title: '파인다이닝 리뷰 분석 전략',
            category: 'KMAC 경영혁신 공모전',
            summary: '리뷰 데이터의 텍스트 마이닝을 통해 파인다이닝의 핵심 성공 요인을 규명하고 차별화 전략 도출.',
            tags: ['Text Mining', 'BERTopic', 'Clustering'],
            icon: '🍽️',
            overview: { period: '2024.08 ~ 2024.10', team: '팀 프로젝트(2명)', role: 'Main Data Analyst (전처리, 모델링)' },
            keyResult: '💡 딥러닝 기반 텍스트 마이닝으로 "맛"과 "경험"의 가치 차이 규명 및 4대 전략 도출',
            catchphrase: '"경험을 팝니다: 파인다이닝과 일반 식당의 결정적 차이"',
            description_new: "포화 상태인 외식업 시장에서 파인다이닝만의 생존 전략을 찾기 위해, 딥러닝 모델로 리뷰 데이터를 분석했습니다. 고객의 니즈가 단순 미식이 아닌 '경험'에 있음을 데이터로 증명하고, 소비자 성향에 따른 4가지 맞춤형 운영 전략을 수립했습니다.",
            problemSolving: [
                { title: '1. 문제 정의', keyword: '수익성 악화', desc: '높은 가격에도 불구하고 낮은 이윤과 높은 폐업률을 보이는 파인다이닝 시장의 문제를 해결하고자, 실제 고객의 목소리(리뷰)에서 차별화된 성공 전략을 도출하는 것을 목표로 설정.' },
                { title: '2. 가설 수립', keyword: '경험 vs 맛', desc: '일반 식당은 "맛/가성비"가 중요하지만 파인다이닝은 "분위기/서비스" 등 미세한 경험 요소가 핵심일 것이며, 고객마다 원하는 경험(니즈)이 다를 것이라는 가설 수립.' },
                { title: '3. 액션 (분석)', keyword: 'BERTopic & NLP', desc: '오픈 리뷰 데이터 수만 건을 수집/전처리하고, 문맥을 파악하는 딥러닝 기반 토픽 모델링(BERTopic)을 활용하여 일반 식당과 파인다이닝의 핵심 리뷰 토픽을 비교 분석.' },
                { title: '4. 액션 (모델링)', keyword: '세분화', desc: '비지도 학습 기반의 군집 분석을 수행하여 리뷰 키워드와 감성 점수를 변수로 활용, 파인다이닝 소비자를 4가지 주요 페르소나(단순 미식, 과시형 등)로 세분화.' },
                { title: '5. 결과', keyword: '4대 전략', desc: '파인다이닝은 "조명/스토리텔링" 등 경험적 키워드가 감성 점수에 더 큰 영향을 미침을 확인. 도출된 4가지 고객 군집별로 CRM 관리, 체험형 이벤트 등 데이터 기반 맞춤 전략 제안.' },
                { title: '6. 배운점', keyword: '비정형 데이터', desc: '정형화된 매출 데이터보다 비정형 텍스트 데이터 속에 고객의 진짜 의도가 숨어있음을 발견하고, 이를 정량화하여 비즈니스 인사이트로 연결하는 분석 역량 체득.' }
            ],
            images: ['./images/kmac_1.jpg', './images/kmac_2.jpg', './images/kmac_3.jpg']
        },

        // --- [Strategy & Planning] ---
        
        // 6. 야놀자
        {
            id: 'yanolja',
            type: 'strategy-planning', 
            title: '인바운드 관광 AI 슈퍼앱 전략',
            category: '야놀자 리서치 공모전',
            summary: '파편화된 방한 관광 경험을 해결하기 위한 민관 협력 기반의 AI 슈퍼앱 전략 수립.',
            tags: ['Strategy', 'Figma', 'Public-Private Partnership'],
            icon: '🌏',
            overview: { period: '2024.06 ~ 2024.07', team: '팀 KHUPER (4명)', role: '전략 기획, UI/UX 디자인' },
            keyResult: '💡 공공과 민간의 강점을 결합한 "민관 협력 비즈니스 모델" 수립',
            catchphrase: '"파편화된 방한 관광, 결제부터 예약까지 하나의 앱으로 잇다"',
            description_new: "방한 관광객이 지도, 결제, 예약 등을 위해 평균 5~6개의 앱을 설치해야 하는 '디지털 파편화' 문제를 해결하고자 했습니다. 입국부터 출국까지의 모든 경험을 하나의 앱(Super App)으로 통합하고, 공공의 신뢰성과 민간의 기술력을 결합한 비즈니스 모델을 기획했습니다.",
            problemSolving: [
                { title: '1. 문제 정의', keyword: '디지털 파편화', desc: '관광객이 겪는 복잡한 인증 절차와 파편화된 앱 환경(지도/결제/예약 분절)이 소비를 가로막는 진입 장벽임을 정의하고, 단 하나의 앱으로 모든 경험을 해결하는 플랫폼 목표 설정.' },
                { title: '2. 솔루션', keyword: '초개인화', desc: 'AI 기반 개인화 코스 추천, 환전 없는 로컬 간편 결제 내재화, 카메라(OCR)를 이용한 할랄/비건/알러지 음식 성분 분석 등 식문화 장벽 해소 기능 기획.' },
                { title: '3. 비즈니스 모델', keyword: '민관 협력 모델', desc: '민간(야놀자)의 트랜잭션 기술/UI 역량과 공공(Visit Korea)의 관광 데이터/인프라를 결합한 협력 모델 수립. 결제 데이터를 활용한 타겟 마케팅 및 데이터 판매 BM 제시.' },
                { title: '4. 액션 (분석)', keyword: '시장 분석', desc: '야놀자 리서치 보고서와 학술 논문 등을 분석하여, 글로벌 트래블 테크의 핵심이 "초개인화"임을 도출하고 이를 전략 수립의 논리적 근거로 활용.' },
                { title: '5. 액션 (구현)', keyword: '피그마 프로토타이핑', desc: '기획한 슈퍼앱의 핵심 기능이 실제 환경에서 어떻게 구동될지 보여주는 User Flow를 설계하고, Figma로 시각화하여 서비스의 실현 가능성을 검증.' },
                { title: '6. 배운점', keyword: '전략의 본질', desc: '전략이란 거창한 문제를 푸는 것이 아니라, 치밀한 리서치를 통해 발견한 고객의 페인 포인트를 "어떻게 가장 쉽게 해결할지" 결정하는 과정임을 체득.' }
            ],
            images: ['./images/yanolja_1.jpg', './images/yanolja_2.jpg', './images/yanolja_3.jpg']
        },

        // 7. 시니어 인재 매칭
        {
            id: 'fastcampus',
            type: 'strategy-planning', 
            title: '시니어 인재 매칭 플랫폼',
            category: '패스트캠퍼스 AI 공모전',
            summary: '대기업 은퇴 예정 인력을 중소기업 고문으로 매칭하는 AI 플랫폼 기획.',
            tags: ['AI Planning', 'Social Impact', 'Synthetic Data'],
            icon: '👴',
            overview: { period: '2024.11 ~ 2024.12', team: '팀 프로젝트(3명)', role: 'Service Planner (기획 총괄)' },
            keyResult: '🤝 5060 전문 인력과 중소기업을 잇는 "AI 기반 역량 평가 및 매칭 솔루션" 기획',
            catchphrase: '"대기업의 인력 부담과 중소기업의 구인난, \'데이터\'로 연결하다"',
            description_new: "대기업의 고비용 인력 구조와 중소기업의 전문성 부재 문제를 동시에 해결하기 위한 B2B 매칭 플랫폼입니다. 단순 이력서 매칭을 넘어, 합성 데이터와 NLP를 활용한 '비즈니스 케이스 평가 모델'로 시니어의 실무 역량을 정량적으로 검증하는 솔루션을 설계했습니다.",
            problemSolving: [
                { title: '1. 문제 정의', keyword: '인력 미스매치', desc: '대기업(고비용 인력 부담), 중소기업(숙련 인재 구인난), 시니어(단순 노무직 이탈) 3자 간의 페인 포인트를 분석하여 노동 시장의 구조적 비효율 발견.' },
                { title: '2. 해결 방안', keyword: 'B2B SaaS', desc: '디지털 리터러시가 낮은 시니어를 대신해 기업 인사팀이 주도하는 B2B 모델 설계. 가상의 비즈니스 케이스 해결 과정을 통해 문제 해결력을 정량 평가하는 방식 도입.' },
                { title: '3. 핵심 기술 (AI)', keyword: '합성 데이터 & NLP', desc: '초기 학습 데이터 부족을 "합성 데이터(Mostly AI)" 생성으로 해결하고, 기업 상황에 맞는 맞춤형 문제를 생성/분석하는 NLP 모델을 설계하여 기술적 장벽 돌파.' },
                { title: '4. 핵심 기술 (매칭)', keyword: '하이브리드 추천', desc: '협업 필터링과 콘텐츠 기반 필터링을 결합한 "하이브리드 추천 시스템"을 설계하여, 직무 적합도뿐만 아니라 기업 문화 적합도까지 고려한 최적 매칭 구현.' },
                { title: '5. 서비스 프로세스', keyword: '파이프라인 설계', desc: '[AI 모델 구축 → 후보 선별 → 가상 케이스 평가 → 리포트 제공 → 면접]으로 이어지는 채용 연계 파이프라인을 정립하여 인건비 절감 및 선순환 구조 기대효과 제시.' },
                { title: '6. 배운점', keyword: '기술적 유연성', desc: '데이터 부족이라는 현실적 장벽을 신기술(합성 데이터)로 유연하게 해결하는 방법을 익히고, 두 가지 사회 문제를 엮어서 해결하는 새로운 접근 방식(System Thinking)을 체득.' }
            ],
            images: ['./images/fastcampus_1.jpg', './images/fastcampus_2.jpg', './images/fastcampus_3.jpg']
        },

        // 8. BACS 학회
        {
            id: 'bacs',
            type: 'strategy-planning', 
            title: '경영전략학회 BACS 활동',
            category: 'Academic Society',
            summary: '9기 부학회장 역임. 경영 전략 수립부터 데이터 분석, 머신러닝까지 폭넓은 실무 역량 배양.',
            tags: ['Business Strategy', 'Data Analytics', 'Machine Learning', 'Leadership'],
            icon: '🎓',
            overview: { period: '2024.03 ~ 2025.02', team: 'BACS 9기', role: '부학회장 (Vice President)' },
            keyResult: '🚀 HR 승진 예측 모델 정확도 93% 달성 및 프로젝트 중심 커리큘럼 도입',
            catchphrase: '"Business와 Tech를 잇는 융합형 인재로 성장하다"',
            description_new: "경영 전략 수립부터 데이터 분석, 머신러닝 모델링까지 비즈니스와 기술을 폭넓게 학습했습니다. 특히 부학회장으로서 기존 이론 중심 커리큘럼의 한계를 보완하기 위해 '프로젝트 중심의 커리큘럼'을 직접 기획하고 운영하였습니다.",
            problemSolving: [
                { title: '1. 전략 수립', keyword: '논리적 사고', desc: '이마트, 현대카드 등 실제 기업의 재무제표와 데이터를 분석하여 페인포인트의 근본 원인을 파악하고, 경영 전략 프레임워크에 맞춰 논리적인 턴어라운드 전략을 도출.' },
                { title: '2. 데이터 분석', keyword: '파이썬 & 통계', desc: 'Python EDA로 단순 평균 뒤에 숨겨진 행동 패턴을 시각화하고, T-test를 통해 프로모션 반응 집단 간의 차이가 통계적으로 유의미함을 입증.' },
                { title: '3. ML 모델링', keyword: '예측 모델링', desc: 'HR 승진 예측(Random Forest) 시 SMOTE로 불균형 데이터를 처리하여 정확도 93%를 달성하고, 소비 패턴 군집 분석을 통해 개인화된 보상 전략을 제안.' },
                { title: '4. 리더십', keyword: '커리큘럼 기획', desc: '부학회장으로서 이론 중심 학습의 한계를 극복하고자 "관심사별 팀 서브 세션"을 신규 기획 및 도입하여 학회원들의 자발적 프로젝트 참여와 실무 역량 강화를 주도.' }
            ],
            images: ['./images/bacs_1.jpg', './images/bacs_2.jpg']
        },

        // 9. CBDC 보험 혁신 (아카데미쿠스)
        {
            id: 'academicus',
            type: 'strategy-planning',
            title: 'CBDC 기반 보험 혁신 전략',
            category: '아카데미쿠스 학술 공모전 (3등)',
            summary: 'CBDC 완전 도입 시나리오 분석을 통해, 결제 데이터 기반의 초개인화 보험 추천 솔루션 제안.',
            tags: ['Fintech', 'CBDC', 'Data Strategy', 'Figma'],
            icon: '🥉',
            overview: { period: '2024.09 ~ 2024.11', team: '팀 프로젝트(4명)', role: 'Strategic Planning & UX Design' },
            keyResult: '🥉 교내 학술 공모전 3등 | CBDC 데이터 가시성을 활용한 "초개인화 보험 추천" BM 수립',
            catchphrase: '"투명해진 결제 데이터, 보험의 사각지대를 없애다"',
            description_new: "현금 없는 사회, CBDC가 완전 도입된다면 보험 산업은 어떻게 변할까? 라는 질문에서 시작했습니다. 모든 자금 흐름이 투명해지는 미래 시나리오를 분석하여, 정보 비대칭 문제를 해결하고 고객 리스크를 정밀하게 예측하는 카카오페이 손해보험의 신규 비즈니스 모델을 제안했습니다.",
            problemSolving: [
                { title: '1. 문제 정의', keyword: '정보 비대칭', desc: '기존 보험 시장은 고객 정보를 다 알지 못해 발생하는 "역선택" 문제와, 니즈가 없는 상품 권유로 인한 "높은 해지율" 문제에 직면해 있음을 포착.' },
                { title: '2. 가설 수립', keyword: '데이터 투명성', desc: 'CBDC 환경에서는 소득/지출 데이터가 투명해지므로, 이를 마이데이터와 결합하면 고객보다 더 정확하게 리스크를 예측하고 초개인화 상품을 추천할 수 있을 것.' },
                { title: '3. 액션 (전략)', keyword: '시나리오 분석', desc: 'CBDC "완전 도입" 시나리오를 가정하여, 모든 결제 데이터가 디지털화되는 환경이 보험업계의 난제(정보 부족)를 해결할 핵심 기회임을 분석하고 타겟 기업(카카오페이) 선정.' },
                { title: '4. 액션 (기획)', keyword: 'AI 추천 & UX', desc: '결제 로그 기반의 딥러닝 추천 알고리즘을 기획하고, 토스(Toss)를 벤치마킹하여 복잡한 보험 가입을 "상황 기반 카드 추천"으로 단순화한 모바일 앱 프로토타입(Figma) 제작.' },
                { title: '5. 결과', keyword: '논리적 사고', desc: '추상적인 미래 기술(CBDC)을 보험업계의 실질적인 비즈니스 모델로 구체화한 논리력을 인정받아 학술 공모전 3등 수상.' },
                { title: '6. 배운점', keyword: '거시적 안목', desc: '당장 눈앞의 기술뿐만 아니라, 5~10년 뒤 금융 인프라 변화가 기업에 미칠 리스크와 기회를 내다보는 거시적 안목과, 이를 고객 언어(UX)로 전달하는 것의 중요성을 체득.' }
            ],
            images: ['./images/academicus_1.jpg', './images/academicus_2.jpg', './images/academicus_3.jpg']
        }
    ]
};
