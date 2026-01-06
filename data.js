window.DB = {
    experience: [
        {
            id: 'crevisse',
            company: 'Crevisse Partners',
            role: 'SaaS 사업개발 & 데이터 인턴',
            summary: '신규 비즈니스 전략 수립 및 사내 데이터 인프라 구축 총괄.',
            tags: ['Snowflake', 'Streamlit', 'SaaS Strategy', 'Salesforce'],
            
            overview: {
                period: '2025.07 — 2025.12',
                team: 'Business Dev Team',
                role: 'Intern (Full-stack Support)'
            },
            
            keyResult: '🚀 Spreadsheet → Snowflake 데이터 이관 및 실시간 매출 대시보드 구축',
            
            catchphrase: '"데이터 파이프라인 구축부터 신규 사업 전략까지, A to Z를 경험하다"',
            
            description_new: "SaaS 비즈니스의 성장을 위해 기술과 사업 양쪽에서 문제를 해결했습니다. 수동으로 관리되던 매출 데이터를 Snowflake로 이관하여 데이터 인프라를 구축했고, 신규 비즈니스 모델과 업무 자동화 프로젝트를 주도하여 매출과 효율을 동시에 잡았습니다.",
            
            problemSolving: [
                {
                    title: 'Data Ops',
                    keyword: 'Snowflake & Streamlit',
                    desc: '기존 구글 시트 기반의 매출 데이터를 Snowflake로 이관하여 대용량 처리 기반을 마련. Python Streamlit으로 실시간 매출 대시보드를 직접 개발하여, 데이터 집계 시간을 단축하고 휴먼 에러를 0%로 제거.'
                },
                {
                    title: 'SaaS Strategy',
                    keyword: 'Salesforce & Market Research',
                    desc: 'Salesforce 도입을 위한 PoC를 수행하여 젠데스크 데이터 마이그레이션 전략을 수립. 또한, 레거시 제품 고객의 전환 유도를 위해 글로벌 SaaS 선도 기업들의 GTM 전략을 벤치마킹하여 제안.'
                },
                {
                    title: 'Key Projects',
                    keyword: 'See Project Section',
                    desc: '회사의 신규 수익원이 된 [데이터 품질 관리(DQM) 솔루션]과 업무 시간을 90% 단축한 [KISA 스팸 신고 자동화] 프로젝트를 리딩했습니다. (상세 내용은 Project 섹션 참조)'
                }
            ],
            // [수정됨] 따옴표 누락 수정
            images: [] 
        },
        {
            id: 'sustinvest',
            company: 'Sustinvest',
            role: 'ESG 리서치 & 데이터 인턴',
            summary: '상장사 ESG 데이터 구축 자동화 및 산업별 전략 리서치 수행.',
            tags: ['ESG Analysis', 'Python', 'Web Crawling', 'Strategic Research'],

            overview: {
                period: '2025.04 — 2025.05',
                team: 'Research & Data 본부',
                role: 'Research Intern'
            },
            
            keyResult: '⚡ 13,500건 데이터 구축 및 Python 자동화, 전략 리서치 참여',
            
            catchphrase: '"단순 수집을 넘어, 프로세스를 혁신하고 인사이트를 더하다"',
            
            description_new: "초기엔 ESG 데이터 구축 업무로 시작했으나, 업무 효율화와 데이터 정합성 개선 성과를 인정받아 심화 과제(전략 리서치, 수출입은행 프로젝트)까지 수행 범위를 주도적으로 확장했습니다.",
            
            problemSolving: [
                {
                    title: '데이터 구축',
                    keyword: 'Data Integrity',
                    desc: '150개 상장사의 S/G 지표 13,500건을 전수 조사하고, DART 공시와 교차 검증하여 결함 없는 대규모 ESG 데이터베이스 구축.'
                },
                {
                    title: '업무 혁신',
                    keyword: 'Python & Codebook',
                    desc: '반복되는 인증서 수집 업무를 Python 크롤러로 자동화 설계하고, 지표별 빈출 키워드를 분석해 코드북(가이드라인)을 개선하여 팀 전체 효율성 증대.'
                },
                {
                    title: '전략 리서치',
                    keyword: 'Insight & Project',
                    desc: '역량을 인정받아 수출입은행 GP 선정 기준 수립, 4대 핵심 산업(배터리/조선 등) 벤치마킹 등 고난도 리서치 과제에 추가 투입되어 전략적 인사이트 제공.'
                }
            ],
            images: []
        }
    ], // [수정됨] experience 배열을 여기서 닫고 콤마(,)를 찍어야 합니다.

    projects: [
        // [New 1] 데이터 품질 관리 (DQM)
        {
            id: 'crevisse-dqm',
            type: 'data',
            title: '데이터 품질 관리(DQM) 솔루션',
            category: 'Crevisse Partners (매출 창출)',
            summary: '고객사 데이터 진단/정제/보고서 생성을 위한 Python 기반 DQM 솔루션 개발.',
            tags: ['Python', 'TDD', 'Product Management', 'Revenue Generation'],
            icon: '💎',

            overview: {
                period: '2025.08 ~ 2025.11',
                team: 'Business Dev',
                role: '기획, 개발, 고객 커뮤니케이션'
            },
            
            keyResult: '💰 신규 비즈니스 모델 발굴 및 솔루션 상용화로 실제 매출 발생',
            catchphrase: '"비전공자가 만든 상용 소프트웨어: 기획부터 개발, 수익 창출까지"',
            description_new: "고객사의 데이터 웨어하우스 도입 니즈를 포착하여, 선행 단계인 '데이터 품질 관리'를 신규 비즈니스 모델로 제안했습니다. 단순 컨설팅에 그치지 않고, 진단부터 정제, 보고서 생성까지 전 과정을 자동화하는 Python 솔루션을 직접 개발하여 납품했습니다.",
            
            problemSolving: [
                {
                    title: '기획', 
                    keyword: 'Biz Model',
                    desc: '국내외 선도 기업 리서치를 통해 6가지 핵심 진단 필드를 정의하고, [진단 → 자동 정제 → 외부 데이터 매칭]으로 이어지는 3단계 품질 관리 아키텍처 설계.'
                },
                {
                    title: '개발', 
                    keyword: 'Python & TDD',
                    desc: 'AI(Vibe Coding)를 활용해 개발하되, 비전공자의 한계를 극복하고자 100개 이상의 테스트 케이스(TDD)를 작성하여 코드의 무결성 검증. V1(개별 스크립트)에서 V2(통합 모듈)로 고도화.'
                },
                {
                    title: '성과', 
                    keyword: 'Report Automation',
                    desc: '20페이지 분량의 품질 진단 보고서 생성을 코드로 자동화하여 작업 시간을 획기적으로 단축. 성공적인 PoC를 통해 고객사 계약 체결 및 실제 매출 확보.'
                }
            ],
            images: ['./images/crevisse-dqm.jpg'] 
        },

        // [New 2] KISA 스팸 신고 자동화
        {
            id: 'crevisse-kisa',
            type: 'data',
            title: 'KISA 스팸 신고 대응 자동화',
            category: 'Crevisse Partners (업무 자동화)',
            summary: 'Google Apps Script와 Web App을 활용한 스팸 신고 처리 프로세스 100% 자동화.',
            tags: ['Google Apps Script', 'Web App', 'Automation', 'Process Innovation'],
            icon: '⚡',

            overview: {
                period: '2025.10 ~ 2025.12',
                team: 'Business Dev (개인 프로젝트)',
                role: '프로세스 설계 및 개발'
            },
            
            keyResult: '⚙️ 수동 소명 업무 제거 및 고객사 전용 소명 Web App 구축',
            catchphrase: '"반복되는 비효율을 코드로 삭제하다: 사내 DX 혁신"',
            description_new: "매주 반복되는 스팸 신고 처리 업무(메일 수신 → 고객사 전달 → 소명 취합 → 회신)의 비효율을 해결하기 위해 시작했습니다. 단순 스크립트를 넘어, 고객사가 직접 소명할 수 있는 웹 애플리케이션(UI)까지 구현하여 담당자의 개입을 0으로 만들었습니다.",
            
            problemSolving: [
                {
                    title: '설계', 
                    keyword: 'Pain Point',
                    desc: '메일 수신부터 고객사 안내까지 4단계의 수동 프로세스를 분석하여, 사람의 개입 없이 데이터가 흐를 수 있는 완전 자동화 파이프라인 설계.'
                },
                {
                    title: '개발', 
                    keyword: 'GAS & Parsing',
                    desc: 'Google Apps Script로 KISA 신고 메일을 파싱하여 DB에 적재하고, 매주 월요일 고객사별 내역을 API로 자동 발송하는 로직 구현.'
                },
                {
                    title: '구현', 
                    keyword: 'Web App UI',
                    desc: '고객사가 메일 회신 대신 직접 접속하여 소명 내용을 입력할 수 있는 [고객 전용 Web App]을 개발. 입력 데이터가 즉시 DB에 동기화되도록 하여 커뮤니케이션 비용 제로화.'
                }
            ],
            images: ['./images/crevisse-kisa.jpg'] 
        },

        // 3. 야놀자 (Strategy)
        {
            id: 'yanolja',
            type: 'strategy',
            title: '인바운드 관광 AI 슈퍼앱 전략',
            category: '야놀자 리서치 공모전',
            summary: '파편화된 방한 관광 경험을 해결하기 위한 민관 협력 기반의 AI 슈퍼앱 전략 수립.',
            tags: ['Strategy', 'Figma', 'Public-Private Partnership'],
            icon: '🌏',

            overview: {
                period: '2024.06 ~ 2024.07', 
                team: '팀 KHUPER (4명)',
                role: '전략 기획, UI/UX 디자인'
            },
            
            keyResult: '💡 공공과 민간의 강점을 결합한 "PPP 비즈니스 모델" 정립',
            catchphrase: '"인증·결제 장벽을 넘어, 한국 여행을 하나의 앱으로"',
            description_new: "방한 관광객이 겪는 가장 큰 어려움인 '본인 인증'과 '결제 시스템'의 장벽을 해결하기 위해, 공공 데이터와 민간 기술력을 결합한 통합 슈퍼앱 모델을 제안했습니다.",
            
            problemSolving: [
                {
                    title: 'Pain Point',
                    keyword: '디지털 경험의 단절',
                    desc: '시장 분석 결과, 외국인 관광객은 한국 전화번호 인증 불가로 예약/결제에 실패하고, 구글맵 대신 불친절한 로컬 앱을 써야 하는 "이중고"를 겪고 있음을 규명.'
                },
                {
                    title: '전략 수립',
                    keyword: 'PPP Ecosystem',
                    desc: '공공의 데이터 신뢰성과 민간의 기술/플랫폼을 결합하여, 하나의 앱에서 예약부터 MaaS까지 해결하는 협력 생태계 설계.'
                },
                {
                    title: '솔루션',
                    keyword: 'Barrier-Free UX',
                    desc: '외국인 전용 간편 결제, 알러지/비건을 위한 바코드 성분 번역, AI 맞춤 코스 추천 등 실질적 편의 기능을 Figma로 구체화하여 구현.'
                }
            ],
            images: [
                './images/yanolja_1.jpg', 
                './images/yanolja_2.jpg',
                './images/yanolja_3.jpg'
            ]
        },

        // 4. 주식 예측 (Data)
        {
            id: 'stock-trading',
            type: 'data',
            title: '주식 급등 예측 퀀트 모델',
            category: 'Personal Project',
            summary: '기술적 지표와 과거 데이터의 상관관계를 분석하여 주가 급등 시점을 포착하는 머신러닝 분류 모델 개발.',
            tags: ['Quant Trading', 'Machine Learning', 'Feature Importance'],
            icon: '📈',

            overview: {
                period: '2023.08 ~ 2023.11', 
                team: '개인 프로젝트',
                role: 'Quant Developer & Analyst'
            },
            
            keyResult: '📊 급등주 패턴을 학습한 "이진 분류 모델" 구축 및 핵심 변수 발굴',
            catchphrase: '"감이 아닌 데이터로 투자의 승률을 높이다"',
            description_new: "주식 시장의 수많은 보조 지표 중, 실제 '급등(Surge)'과 통계적 유의성이 높은 지표를 선별하기 위해 시작했습니다. 과거 데이터를 전수 조사하여 승리하는 패턴을 학습시키고, 상승 여부(1/0)를 예측하는 자동화 모델을 구현했습니다.",
            
            problemSolving: [
                {
                    title: '가설 수립',
                    keyword: 'Quant Indicators',
                    desc: '이동평균선, RSI, MACD, 볼린저밴드 등 다양한 기술적 지표를 선정하고, "특정 지표들의 시그널이 겹칠 때 주가가 급등한다"는 퀀트 가설 수립.'
                },
                {
                    title: '분석',
                    keyword: 'Feature Importance',
                    desc: '과거 급등 구간의 데이터를 역추적하여, 실제 주가 상승에 가장 큰 영향을 미친 "핵심 지표"가 무엇인지 통계적으로 규명.'
                },
                {
                    title: '모델링',
                    keyword: 'Binary Learning',
                    desc: '도출된 핵심 지표를 기반으로 상승(1)과 하락/보합(0)을 예측하는 머신러닝 분류 모델을 학습시키고, 지속적인 파라미터 튜닝으로 예측 정확도 고도화.'
                }
            ],
            images: [
                './images/stock-trading_1.jpg',
                './images/stock-trading_2.jpg',
                './images/stock-trading_3.jpg'
            ]
        },

        // 5. 리뷰 유용성 예측 (Data)
        {
            id: 'review-ai',
            type: 'data',
            title: '리뷰 유용성 예측 AI 모델',
            category: '경영과학회 AI/OR (장려상)',
            summary: '딥러닝(CNN)을 활용하여 배달 앱 리뷰의 실질적 도움 여부를 예측하는 모델 개발.',
            tags: ['Deep Learning', 'CNN', 'Python'],
            icon: '🤖',

            overview: {
                period: '2024.09 ~ 2024.11',
                team: '팀 프로젝트(3명)',
                role: 'Modeling & Logic Design'
            },
            
            keyResult: '🏆 경영과학회 장려상 | 정확도 0.76 달성 (ML 대비 15% 성능 향상)',
            catchphrase: '"단순 별점을 넘어, 진짜 도움이 되는 리뷰를 찾아내다"',
            description_new: "기존의 정렬 방식(최신순/별점순)이 스팸성 리뷰를 걸러내지 못한다는 문제에서 출발했습니다. 텍스트의 맥락과 파생 변수를 결합한 딥러닝 모델로 리뷰의 '유용성'을 예측했습니다.",
            
            problemSolving: [
                {
                    title: '문제 정의',
                    keyword: 'Filtering Failure',
                    desc: '기존 배달 앱의 최신순/별점순 정렬은 영양가 없는 짧은 글이나 스팸성 리뷰를 상단에 노출시켜, 사용자의 정보 탐색 비용을 높이는 문제 발견.'
                },
                {
                    title: '리서치',
                    keyword: 'Strategic Pivot',
                    desc: '초기 단순 텍스트 분류 시도 실패 후, 문헌 조사를 통해 리뷰의 가치를 판단하는 핵심 지표가 "유용성"임을 도출하고 예측 모델로 방향 전환.'
                },
                {
                    title: '모델링',
                    keyword: 'Hybrid CNN',
                    desc: '텍스트 임베딩을 CNN에 학습시키는 동시에, "가독성, 주관성, 감성 점수"라는 3가지 정량적 파생 변수를 결합하여 모델의 예측력을 극대화.'
                },
                {
                    title: '검증',
                    keyword: 'Quantitative Result',
                    desc: '동일 데이터셋 기준 머신러닝대비 정확도(+0.15)와 정밀도(+0.14)가 대폭 향상된 0.76을 기록하며 딥러닝 도입의 타당성 입증.'
                }
            ],
            images: [
                './images/review-ai_1.jpg',
                './images/review-ai_2.jpg',
                './images/review-ai_3.jpg'
            ]
        },

        // 6. 파인다이닝 분석 (Data)
        {
            id: 'kmac',
            type: 'data',
            title: '파인다이닝 리뷰 분석 전략',
            category: 'KMAC 경영혁신 공모전',
            summary: '리뷰 데이터의 텍스트 마이닝을 통해 파인다이닝의 핵심 성공 요인을 규명하고 차별화 전략 도출.',
            tags: ['Text Mining', 'BERTopic', 'Clustering'],
            icon: '🍽️',

            overview: {
                period: '2024.08 ~ 2024.10',
                team: '팀 프로젝트(2명)',
                role: 'Main Data Analyst (전처리, 모델링)'
            },
            
            keyResult: '💡 텍스트 마이닝으로 "맛"과 "분위기"의 가치 차이를 정량화하여 4가지 맞춤 전략 도출',
            catchphrase: '"경험을 팝니다: 파인다이닝과 일반 식당의 결정적 차이"',
            description_new: "초기 기획 단계에서 데이터 부족 문제를 발견하고 빠르게 주제를 전환하는 결단력을 발휘했습니다. 오픈 리뷰 데이터를 활용하여, 파인다이닝 소비자는 '맛'보다 '경험과 분위기'에 민감하다는 사실을 데이터로 증명했습니다.",
            
            problemSolving: [
                {
                    title: 'Agile Pivot',
                    keyword: '데이터 검증',
                    desc: '초기 주제(스타트업 평가)의 데이터 확보 불가능성을 빠르게 판단하고, 오픈 데이터 활용 전략으로 신속하게 선회하여 프로젝트 완주.'
                },
                {
                    title: '분석 기술',
                    keyword: 'BERTopic & NLP',
                    desc: '딥러닝 기반 토픽 모델링과 감성 분석을 수행하여, 일반 식당은 "맛/친절"이, 파인다이닝은 "분위기/경험"이 핵심 키워드임을 도출.'
                },
                {
                    title: '전략 도출',
                    keyword: 'Segmentation',
                    desc: '소비자 특성에 따라 4개의 군집으로 세분화하고, 각 타겟의 니즈(가성비 vs 가심비 등)에 맞춘 구체적인 마케팅 전략 수립.'
                }
            ],
            images: [
                './images/kmac_1.jpg',
                './images/kmac_2.jpg',
                './images/kmac_3.jpg'
            ]
        },

        // 7. 소상공인 구독 모델 (Data)
        {
            id: 'subscription',
            type: 'data',
            title: '소상공인 매출 증대 구독 전략',
            category: '소상공인 컨설팅 프로젝트',
            summary: '오프라인 상권의 한계를 극복하기 위해 리뷰 데이터를 분석하여 "정기 구독" 비즈니스 모델로 전환 제안.',
            tags: ['Text Mining', 'Clustering', 'Business Pivot'],
            icon: '🏪',

            overview: {
                period: '2023.10 ~ 2023.11',
                team: '팀 프로젝트(2명)',
                role: 'Data Analyst (데이터 분석 총괄)'
            },
            
            keyResult: '💡 "오프라인의 한계 극복": 텍스트 마이닝으로 잠재된 "구독 수요" 발견 및 BM 전환',
            catchphrase: '"죽은 상권의 건강 주스 가게, 데이터로 구독 경제를 입히다"',
            description_new: "유동인구가 적은 불리한 입지 조건으로 고전하던 건강 주스 매장의 매출 증대를 위해, 리뷰 텍스트 속에 숨겨진 '고객의 진짜 니즈'를 발굴하고 온라인 정기 구독 모델을 제안했습니다.",
            
            problemSolving: [
                {
                    title: '진단',
                    keyword: 'Location Risk',
                    desc: '상권 데이터 분석 결과, 타 밀집 지역 대비 유동인구가 현저히 적어 "오프라인 방문객 유치"만으로는 성장에 한계가 있음을 냉철하게 진단.'
                },
                {
                    title: '발굴',
                    keyword: 'Text Mining',
                    desc: '3개 채널의 고객 리뷰를 분석하여, 특정 메뉴(프룬주스)에 대한 충성도와 "매일 마시고 싶다(정기 구독)"는 반복된 잠재 니즈를 텍스트 마이닝으로 포착.'
                },
                {
                    title: '검증',
                    keyword: 'Clustering & Learning',
                    desc: '비전공자의 기술적 한계를 극복하기 위해 생성형 AI와 관련 강의로 군집 분석(Clustering)을 독학. 고객군을 정량적으로 분류하여 구독 서비스의 타당성을 입증.'
                }
            ],
            images: [
                './images/subscription_1.jpg',
                './images/subscription_2.jpg',
                './images/subscription_3.jpg'
            ]
        },

        // 8. 전기이륜차 마케팅 (Strategy)
        {
            id: 'lg-ensol',
            type: 'strategy',
            title: '전기이륜차 마케팅 전략',
            category: 'LG엔솔 BSS 공모전',
            summary: '전기이륜차 인식 개선을 위한 \'미니멀 모빌리티\' 리브랜딩 및 시각화.',
            tags: ['Marketing', 'Branding', 'Figma'],
            icon: '🛵',

            overview: {
                period: '2024.07 ~ 2024.08',
                team: '팀 프로젝트(2명)',
                role: 'Main PM, 전략 기획, 디자인(100%)'
            },
            
            keyResult: '🎨 "미니멀 모빌리티" 컨셉 도출 및 앱/홍보물 직접 제작',
            catchphrase: '"배달 오토바이의 편견을 깨다: 도심형 미니멀 모빌리티"',
            description_new: "전기이륜차의 부정적 이미지(배달/위험)를 탈피하기 위해, 2030 세대를 타겟으로 한 '미니멀 모빌리티'라는 새로운 포지셔닝을 제안하고 디자인까지 직접 수행했습니다.",
            
            problemSolving: [
                {
                    title: '데이터 분석',
                    keyword: 'Own Survey',
                    desc: '자체 설문조사를 직접 설계/수행하여, 소비자들이 전기이륜차를 기피하는 핵심 원인이 성능이 아닌 "배달용 오토바이"라는 낙인 효과임을 규명.'
                },
                {
                    title: '전략 수립',
                    keyword: 'Re-branding',
                    desc: '기존 오토바이의 문법을 버리고 "가볍고 스마트한 이동수단(Minimal Mobility)"으로 재정의. 타겟을 직장인(B2B/경제성)과 대학생(B2C/힙함)으로 이원화하여 공략.'
                },
                {
                    title: '실행',
                    keyword: 'Visual Making',
                    desc: '기획한 전략의 설득력을 높이기 위해 Figma를 활용하여 BSS 앱 UI, 홍보 포스터, 팜플렛 등 마케팅 에셋(Asset) 전체를 직접 제작 및 시각화.'
                }
            ],
            images: [
                './images/lg-ensol_1.jpg',
                './images/lg-ensol_2.jpg'
            ]
        },

        // 9. 시니어 인재 매칭 (Strategy)
        {
            id: 'fastcampus',
            type: 'strategy',
            title: '시니어 인재 매칭 플랫폼',
            category: '패스트캠퍼스 AI 공모전',
            summary: '대기업 은퇴 예정 인력을 스타트업 고문으로 매칭하는 AI 플랫폼 기획.',
            tags: ['AI Planning', 'Social Impact', 'Synthetic Data'],
            icon: '👴',

            overview: {
                period: '2024.11 ~ 2024.12',
                team: '팀 프로젝트(3명)',
                role: 'Service Planner (기획 총괄)'
            },
            
            keyResult: '🤝 은퇴 예정자의 노하우를 스타트업에 이식하는 "AI 고문 매칭" 및 역량 평가 모델 설계',
            catchphrase: '"단순 이력서 매칭을 넘어, 실전 해결 역량을 잇다"',
            description_new: "대기업 은퇴 예정자의 전문성이 사장되는 것을 막고, 경험이 절실한 초기 스타트업에 '경영 고문'으로 연결하는 상생 플랫폼입니다. AI가 생성한 '가상 비즈니스 케이스'를 통해 시니어의 실무 역량을 정량적으로 검증하는 프로세스를 설계했습니다.",
            
            problemSolving: [
                {
                    title: '문제 정의',
                    keyword: 'Black Box Hiring',
                    desc: '기존 재취업 시장은 이력서 위주의 단순 매칭으로, 스타트업이 요구하는 "실질적 문제 해결 능력"과 "조직 융화력"을 사전에 검증하기 어렵다는 구조적 한계 발견.'
                },
                {
                    title: '솔루션',
                    keyword: 'Virtual Biz Case',
                    desc: 'AI가 지원자의 전문 분야에 맞춰 생성한 "가상 비즈니스 시나리오"를 수행하게 하고, 해결 과정을 분석하여 단순 경력이 아닌 "현재의 실무 역량"을 점수화하는 평가 모델 구축.'
                },
                {
                    title: '기술 전략',
                    keyword: 'Synthetic Data',
                    desc: '서비스 초기 학습 데이터 부족(Cold Start) 문제를 해결하기 위해, 팔란티어 사례를 벤치마킹하여 "합성 데이터"로 다양한 비즈니스 케이스를 무한 생성하는 기술적 파이프라인 제안.'
                }
            ],
            images: [
                './images/fastcampus_1.jpg',
                './images/fastcampus_2.jpg',
                './images/fastcampus_3.jpg'
            ]
        },

        // 10. BACS 학회 (School)
        {
            id: 'bacs',
            type: 'school',
            title: '경영전략학회 BACS 활동',
            category: 'Academic Society',
            summary: '9기 부학회장 역임. 팀 프로젝트 중심의 전략 도출, 데이터 분석 수행.',
            tags: ['Leadership', 'Business Strategy', 'Data Analytics', 'Machine Learning'],
            icon: '🎓',

            overview: {
                period: '2024.03 ~ 2025.02',
                team: 'BACS',
                role: '부학회장'
            },
            
            keyResult: '🚀 관심사별 "팀 서브 세션" 신설 주도 및 외부 공모전 2회 참가',
            catchphrase: '"전략과 데이터를 아우르는 융합형 인재로 성장하다"',
            description_new: "경영 전략 수립부터 데이터 분석, 머신러닝 모델링까지 비즈니스와 기술을 폭넓게 학습했습니다. 특히 부학회장으로서 '팀 프로젝트 중심의 서브 세션'을 도입하여 학회의 실무 역량을 한 단계 끌어올렸습니다.",
            
            problemSolving: [
                {
                    title: '컨설팅 세션',
                    keyword: 'Logical Thinking',
                    desc: '이마트, 넷플릭스, 현대카드 등 실제 기업 사례를 리서치하여, 경영 전략 프레임워크에 맞춰 분석, 논리적인 전략 방향성을 도출.'
                },
                {
                    title: '데이터 분석',
                    keyword: 'Python & Stats',
                    desc: 'Python을 활용해 고객 데이터를 시각화하고, T-test 등 통계적 검정 기법을 적용하여 데이터 기반의 의사결정 근거 마련.'
                },
                {
                    title: 'ML & 딥러닝',
                    keyword: 'Predictive Modeling',
                    desc: 'HR 승진 예측(Random Forest, 정확도 93%) 및 신용카드 이탈률 분석프로젝트를 수행하고, CNN 등 딥러닝 모델을 학습하여 외부 공모전 활용.'
                },
                {
                    title: '리더십',
                    keyword: 'Operation & Planning',
                    desc: '부학회장으로서 기존 이론 중심 커리큘럼의 한계를 보완하기 위해 "관심사별 팀 서브 세션"을 신규 기획 및 도입하여 학회원들의 자발적 프로젝트 참여를 유도.'
                }
            ],
            images: [
                './images/bacs_1.jpg',
                './images/bacs_2.jpg'
            ]
        },

        // 11. 아카데미쿠스 (School)
        {
            id: 'academicus',
            type: 'school',
            title: 'CBDC 기반 보험 혁신 전략',
            category: '아카데미쿠스 학술 공모전 (3등)',
            summary: 'CBDC 완전 도입 시나리오 분석을 통해, 결제 데이터 기반의 초개인화 보험 추천 솔루션 제안.',
            tags: ['Fintech', 'CBDC', 'Data Strategy', 'Figma'],
            icon: '🥉',

            overview: {
                period: '2024.09 ~ 2024.11',
                team: '팀 프로젝트(4명)',
                role: 'Strategic Planning & UX Design'
            },
            
            keyResult: '🥉 교내 학술 공모전 3등 | CBDC 데이터 가시성을 활용한 "초개인화 보험 추천" BM 수립',
            catchphrase: '"금융의 미래 CBDC, 투명해진 결제 데이터로 보험의 사각지대를 없애다"',
            description_new: "중앙은행 디지털 화폐가 상용화될 미래 시나리오를 분석했습니다. 모든 결제 데이터가 투명해지는 변화 속에서, 정보 비대칭 문제를 겪는 보험 산업(카카오페이 손해보험)에 '데이터 기반 맞춤형 추천 솔루션'이라는 새로운 기회를 제안했습니다.",
            
            problemSolving: [
                {
                    title: '시나리오 분석',
                    keyword: 'Future Landscape',
                    desc: 'CBDC "완전 도입" 시나리오를 설정하고, 금융 흐름의 투명성이 가져올 변화를 예측. 결제 데이터의 가시화가 보험업계의 난제인 "정보 비대칭"을 해결할 핵심 열쇠임을 도출.'
                },
                {
                    title: '솔루션',
                    keyword: 'Hyper-personalization',
                    desc: '카카오페이 손해보험을 타겟으로, CBDC 결제 데이터와 마이데이터를 결합한 딥러닝 추천 알고리즘을 기획. 고객의 소비/지출 패턴을 분석해 최적의 보험 상품을 자동 매칭하는 시스템 설계.'
                },
                {
                    title: '구체화',
                    keyword: 'Figma UX',
                    desc: '금융 앱(토스)을 벤치마킹하여, 어려운 보험 상품을 직관적으로 보여주는 UI/UX를 Figma로 프로토타이핑하여 제안서의 설득력을 시각적으로 강화.'
                }
            ],
            images: [
                './images/academicus_1.jpg',
                './images/academicus_2.jpg',
                './images/academicus_3.jpg'
            ]
        },

        // 12. 교내 ESG 경진대회 (School)
        {
            id: 'esg-contest-school',
            type: 'school',
            title: '교내 ESG 경진대회',
            category: 'Academic Contest (우수상)',
            summary: '유학생들의 학교 적응을 돕기 위한 \'유학생 전담 또래 코칭\' 프로그램 제안.',
            tags: ['ESG', 'Idea', 'Campus'],
            icon: '🏫',

            overview: {
                period: '2023.10 ~ 2023.12',
                team: '팀 프로젝트(4명)',
                role: 'Idea Proposal'
            },
            keyResult: '🏅 교내 ESG 아이디어 경진대회 [우수상] 수상',
            catchphrase: '"글로벌 캠퍼스를 위한 따뜻한 연결고리"',
            description_new: "급증하는 외국인 유학생들이 언어와 문화 장벽으로 겪는 어려움을 해결하기 위해, 한국인 재학생과 1:1로 매칭되는 멘토링 시스템을 제안했습니다.",
            problemSolving: [
                {
                    title: '공감',
                    keyword: 'Interview',
                    desc: '실제 유학생 심층 인터뷰를 통해 학업적 어려움보다 정서적 고립감이 더 큰 문제임을 발견.'
                },
                {
                    title: '벤치마킹',
                    keyword: 'Peer Coaching',
                    desc: '기존의 학습 중심 튜터링과 달리, 생활 적응과 네트워킹에 초점을 맞춘 "전담 또래 코칭" 모델 설계.'
                },
                {
                    title: '기대효과',
                    keyword: 'Social Value',
                    desc: '유학생 중도 이탈률 감소 및 캠퍼스 다양성 증진이라는 사회적 가치(S) 창출 효과 제시.'
                }
            ],
            images: []
        }
    ]
};
