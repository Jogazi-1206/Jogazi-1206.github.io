window.DB = {
    experience: [
        {
            id: 'crevisse',
            company: 'Crevisse Partners',
            role: '사업개발팀 인턴 (B2B SaaS)',
            summary: '신규 데이터 서비스 기획부터 개발, 배포, 전략 수립까지 End-to-End 수행.',
            tags: ['Python', 'SQL', 'Apps Script', 'Strategy'],
            
            // [New Structure]
            overview: {
                period: '2025.07 — 2025.12',
                team: 'Business Dev Team',
                role: 'Intern (Full-stack Support)'
            },
            keyResult: '🚀 14만 건 데이터 정제 파이프라인 구축 및 사내 업무 100% 자동화',
            catchphrase: '"기획부터 개발까지, B2B SaaS의 A to Z를 주도하다"',
            description_new: '신규 데이터 비즈니스의 런칭 과정을 함께하며, 기술적 문제 해결(Engineering)과 사업적 의사결정(Strategy)을 동시에 경험했습니다.',
            problemSolving: [
                {
                    title: 'DQM 개발',
                    keyword: '데이터 신뢰성 확보',
                    desc: '14만 건의 고객 데이터 정제를 위해 Python 파이프라인 아키텍처를 설계하고, TDD를 도입하여 10만 건 이상의 오류 데이터를 수정.'
                },
                {
                    title: 'DX 혁신',
                    keyword: '업무 자동화',
                    desc: 'Google Apps Script로 보안 웹앱을 구현하여, 수동으로 처리하던 스팸 신고 대응 프로세스를 100% 자동화.'
                },
                {
                    title: '데이터 분석',
                    keyword: 'Snowflake & Streamlit',
                    desc: 'Snowflake 기반 ELT 파이프라인을 구축하고, Streamlit으로 실시간 매출 대시보드를 개발하여 의사결정 데이터 제공.'
                }
            ],
            images: [] 
        },
        {
            id: 'sustinvest',
            company: 'Sustinvest',
            role: 'ESG 데이터 리서처 (인턴)',
            summary: '상장사 ESG 데이터 구축 및 업무 프로세스 효율화.',
            tags: ['Data Analysis', 'Web Crawling', 'ESG Research'],

            // [New Structure]
            overview: {
                period: '2025.04 — 2025.06',
                team: 'Research Team',
                role: 'Research Intern'
            },
            keyResult: '⚡ Python 크롤러 도입으로 단순 반복 업무 시간 80% 단축',
            catchphrase: '"데이터의 정합성을 지키며 프로세스를 혁신하다"',
            description_new: '150개 상장사의 ESG 데이터를 분석하고 검증하는 과정에서, 비효율적인 수작업 방식을 기술로 개선했습니다.',
            problemSolving: [
                {
                    title: 'DB 구축',
                    keyword: '정합성 확보',
                    desc: '150개사 대상 13,500건의 방대한 정량/정성 ESG 데이터베이스를 구축하며 데이터 무결성 검증 수행.'
                },
                {
                    title: '자동화',
                    keyword: 'Web Crawling',
                    desc: 'Python(Selenium) 웹 크롤러를 직접 설계 및 구현하여, 반복적인 인증서 수집 업무를 자동화하고 휴먼 에러 제거.'
                },
                {
                    title: '프로세스',
                    keyword: '매뉴얼 개선',
                    desc: '데이터 입력 오류 패턴을 분석하여 코드북 및 핸드북 개선안을 제안하고 팀 내 표준으로 채택됨.'
                }
            ],
            images: []
        },
    ],

    projects: [
        // 1. 야놀자 (Strategy)
        {
            id: 'yanolja',
            type: 'strategy',
            title: '인바운드 관광 AI 슈퍼앱 전략',
            category: '야놀자 리서치 공모전',
            summary: '파편화된 방한 관광 경험을 해결하기 위한 민관 협력(PPP) 기반의 AI 슈퍼앱 전략 수립.',
            tags: ['Strategy', 'Figma', 'Public-Private Partnership'],
            icon: '🌏',

            overview: {
                period: '2023.10 ~ 2023.11', 
                team: '팀 KHUPER (4명)',
                role: '전략 기획, UI/UX 디자인'
            },
            
            keyResult: '💡 공공(Visit Korea)과 민간(야놀자)의 강점을 결합한 "PPP 비즈니스 모델" 정립',
            
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
                    desc: '공공(Visit Korea)의 데이터 신뢰성과 민간(야놀자)의 기술/플랫폼을 결합하여, 하나의 앱에서 예약부터 MaaS(교통)까지 해결하는 협력 생태계 설계.'
                },
                {
                    title: '솔루션',
                    keyword: 'Barrier-Free UX',
                    desc: '외국인 전용 간편 결제, 알러지/비건을 위한 바코드 성분 번역, AI 맞춤 코스 추천 등 실질적 편의 기능을 Figma로 구체화하여 구현.'
                }
            ],
            
            // 이미지 설정
            images: [
                './images/yanolja_1.jpg', 
                './images/yanolja_2.jpg',
                './images/yanolja_3.jpg'
            ],
            
            link: "" 
        },

        // 2. 주식 예측 (Data)
        {
            id: 'stock-trading',
            type: 'data',
            title: '주식 예측 모델 개발',
            category: 'Personal Project',
            summary: '기술적 지표와 과거 데이터를 머신러닝으로 학습시켜 주가 등락을 예측하는 모델 개발.',
            tags: ['Machine Learning', 'Python', 'Feature Engineering'],
            icon: '📈',

            overview: {
                period: '2023.00 ~ 2023.00',
                team: '개인 프로젝트',
                role: 'Modeling & Analysis'
            },
            keyResult: '📊 테스트 데이터 기준 예측 정확도 60% 달성 및 핵심 지표 발굴',
            catchphrase: '"데이터로 주가의 흐름을 읽다: 머신러닝 예측 모델"',
            description_new: "단순한 감이 아닌, 과거 10년 치 데이터와 기술적 지표를 기반으로 주가 등락을 예측하는 분류 모델을 구축했습니다.",
            problemSolving: [
                {
                    title: 'Feature Eng',
                    keyword: '지표 생성',
                    desc: '이동평균선(MA), RSI, MACD 등 15가지 핵심 기술적 지표를 직접 계산하여 학습 데이터(Feature)로 가공.'
                },
                {
                    title: '모델링',
                    keyword: 'Scikit-learn',
                    desc: '과거 데이터를 학습하여 다음 날의 주가 등락(Up/Down)을 예측하는 분류 모델 구축 및 최적화.'
                },
                {
                    title: '검증',
                    keyword: 'TimeSeriesSplit',
                    desc: '시계열 데이터의 특성을 고려한 교차 검증(Cross Validation)을 수행하여 과적합 방지 및 신뢰성 확보.'
                }
            ],
            images: []
        },

        // 3. 리뷰 유용성 예측 (Data)
        {
            id: 'review-ai',
            type: 'data',
            title: '리뷰 유용성 예측 AI',
            category: '경영과학회 AI/OR (장려상)',
            summary: '딥러닝(CNN) 기반 배달 앱 리뷰 \'유용성\' 예측 모델 개발.',
            tags: ['Deep Learning', 'CNN', 'Python'],
            icon: '🤖',

            overview: {
                period: '2023.00 ~ 2023.00',
                team: '팀 프로젝트(3명)',
                role: 'AI Modeling'
            },
            keyResult: '🏆 경영과학회 AI/OR 공모전 [장려상] 수상',
            catchphrase: '"단순 평점을 넘어, 진짜 도움이 되는 리뷰를 찾아내다"',
            description_new: "기존의 최신순/평점순 정렬 방식의 한계를 극복하기 위해, 텍스트 내용을 기반으로 '유용성(Helpfulness)'을 예측하는 CNN 모델을 개발했습니다.",
            problemSolving: [
                {
                    title: '문제 정의',
                    keyword: '정보 비대칭',
                    desc: '고객에게 실질적인 도움이 되는 리뷰가 스팸성 리뷰에 묻히는 문제를 발견하고 해결책 모색.'
                },
                {
                    title: '모델링',
                    keyword: 'CNN Architecture',
                    desc: '한국어 리뷰 텍스트를 임베딩(Word2Vec)하고 CNN 알고리즘에 학습시켜 유용성 점수를 예측.'
                },
                {
                    title: '성과',
                    keyword: '성능 향상',
                    desc: '기존 머신러닝 모델 대비 정확도와 정밀도가 향상됨을 확인하며 AI의 비즈니스 적용 가능성 입증.'
                }
            ],
            images: []
        },

        // 4. 파인다이닝 분석 (Data/Strategy)
        {
            id: 'kmac',
            type: 'data',
            title: '파인다이닝 리뷰 분석',
            category: 'KMAC 경영혁신 공모전',
            summary: '리뷰 데이터 분석을 통해 소비자 특성별 세부 전략 도출.',
            tags: ['Data Analysis', 'NLP', 'Strategy'],
            icon: '🍽️',

            overview: {
                period: '2022.00 ~ 2022.00',
                team: '팀 프로젝트(3명)',
                role: 'Data Analysis & Strategy'
            },
            keyResult: '💡 텍스트 마이닝으로 고객 경험(CX)의 핵심 요인을 정량화',
            catchphrase: '"데이터로 증명한 맛과 분위기의 가치 차이"',
            description_new: "파인다이닝과 일반 식당의 리뷰 데이터를 비교 분석하여, 고객이 기대하는 경험의 차이를 규명하고 맞춤형 마케팅 전략을 제안했습니다.",
            problemSolving: [
                {
                    title: '분석',
                    keyword: 'BERTopic',
                    desc: '오픈소스 리뷰 데이터를 수집하고 토픽 모델링을 수행하여 각 그룹의 핵심 키워드(맛 vs 분위기/서비스) 추출.'
                },
                {
                    title: '세분화',
                    keyword: 'Clustering',
                    desc: '소비자를 성향에 따라 4개 군집으로 나누어, 타겟별로 차별화된 소구 포인트(Selling Point) 도출.'
                },
                {
                    title: '제안',
                    keyword: '맞춤 전략',
                    desc: '단순 할인이 아닌 경험 중심의 마케팅 전략을 수립하여 경영 혁신 아이디어로 제안.'
                }
            ],
            images: []
        },

        // 5. 소상공인 구독 모델 (Data/Consulting)
        {
            id: 'subscription',
            type: 'data',
            title: '소상공인 구독 모델 제안',
            category: '소상공인 컨설팅 (수상)',
            summary: '리뷰 데이터 군집 분석을 통해 오프라인 매장의 정기구독 수요 발굴.',
            tags: ['Python', 'Clustering', 'Consulting'],
            icon: '🏪',

            overview: {
                period: '2023.00 ~ 2023.00',
                team: '팀 프로젝트(4명)',
                role: 'Data Analysis'
            },
            keyResult: '🏆 소상공인 컨설팅 공모전 [수상] 및 실현 가능성 입증',
            catchphrase: '"오프라인 매장의 한계를 넘는 정기구독 비즈니스 모델"',
            description_new: "일회성 방문에 그치는 오프라인 매장의 한계를 극복하기 위해, 충성 고객을 확보할 수 있는 '데이터 기반 온-오프라인 연계 구독 모델'을 기획했습니다.",
            problemSolving: [
                {
                    title: '진단',
                    keyword: 'Pain Point',
                    desc: '텍스트 마이닝을 통해 소비자의 불만이 맛이 아닌 불규칙한 운영 시간에 있음을 발견.'
                },
                {
                    title: '검증',
                    keyword: '수요 예측',
                    desc: 'K-Means 군집 분석을 통해 정기 구독 서비스에 지불 용의가 있는 잠재 고객군을 정량적으로 파악.'
                },
                {
                    title: '솔루션',
                    keyword: 'BM 설계',
                    desc: '안정적인 매출 확보가 가능한 월 정기 구독 모델(멤버십)을 구체화하여 제안.'
                }
            ],
            images: []
        },

        // 6. 전기이륜차 마케팅 (Strategy)
        {
            id: 'lg-ensol',
            type: 'strategy',
            title: '전기이륜차 마케팅 전략',
            category: 'LG엔솔 BSS 공모전',
            summary: '전기이륜차 인식 개선을 위한 \'미니멀 모빌리티\' 브랜딩 전략.',
            tags: ['Marketing', 'Branding', 'Analysis'],
            icon: '🛵',

            overview: {
                period: '2023.00 ~ 2023.00',
                team: '팀 프로젝트(4명)',
                role: 'Marketer & Designer'
            },
            keyResult: '🎨 부정적 인식을 뒤집는 "미니멀 모빌리티" 리브랜딩 전략 수립',
            catchphrase: '"배달 오토바이에서 친환경 미니멀 모빌리티로"',
            description_new: "기존 오토바이의 '시끄럽고 위험하다'는 편견을 깨기 위해, 2030 세대의 미니멀 라이프 트렌드와 결합한 새로운 브랜드 이미지를 구축했습니다.",
            problemSolving: [
                {
                    title: '인사이트',
                    keyword: 'FGI & Survey',
                    desc: '설문조사를 통해 타겟 소비자가 친환경과 경제성(유지비 절감)에 높은 관심을 보임을 확인.'
                },
                {
                    title: '컨셉 도출',
                    keyword: 'Re-branding',
                    desc: "단순 운송 수단이 아닌, 스마트하고 가벼운 이동 경험을 제공하는 '미니멀 모빌리티'로 포지셔닝."
                },
                {
                    title: '실행',
                    keyword: 'Design Assets',
                    desc: 'Figma를 활용하여 직관적인 앱 UI와 감각적인 홍보 포스터 등 마케팅 에셋을 직접 제작하여 설득력 제고.'
                }
            ],
            images: []
        },

        // 7. 시니어 인재 매칭 (Strategy)
        {
            id: 'fastcampus',
            type: 'strategy',
            title: '시니어 인재 매칭 플랫폼',
            category: '패스트캠퍼스 AI 공모전',
            summary: 'AI 기반 시니어 인재 매칭 플랫폼 기획 및 합성 데이터 활용 방안.',
            tags: ['AI Planning', 'Social Impact', 'Synthetic Data'],
            icon: '👴',

            overview: {
                period: '2023.00 ~ 2023.00',
                team: '팀 프로젝트(3명)',
                role: 'Service Planner'
            },
            keyResult: '🤝 사회적 문제(은퇴/구인난)를 AI 기술로 해결하는 비즈니스 모델',
            catchphrase: '"경험의 가치를 잇다: AI 시니어-스타트업 매칭"',
            description_new: "대기업 은퇴 인력의 풍부한 경험과 전문 인력이 필요한 스타트업을 AI로 연결하여 두 가지 사회 문제를 동시에 해결하는 플랫폼을 기획했습니다.",
            problemSolving: [
                {
                    title: '기회 포착',
                    keyword: 'Social Needs',
                    desc: '시니어의 재취업 욕구와 초기 스타트업의 멘토링 니즈가 만나는 접점을 시장 기회로 포착.'
                },
                {
                    title: '솔루션',
                    keyword: 'AI Assessment',
                    desc: 'AI가 시니어의 가상 비즈니스 문제 해결 과정을 평가하여 최적의 기업과 매칭하는 알고리즘 설계.'
                },
                {
                    title: '기술 전략',
                    keyword: 'Synthetic Data',
                    desc: '초기 학습 데이터 부족 문제를 해결하기 위해 합성 데이터(Synthetic Data)를 활용하는 구체적인 방안 제시.'
                }
            ],
            images: []
        },

        // 8. BACS 학회 (School)
        {
            id: 'bacs',
            type: 'school',
            title: 'BACS 학회 활동',
            category: 'Academic Society',
            summary: '9기 부학회장 역임. 데이터 분석/머신러닝 커리큘럼 기획 및 기업 분석.',
            tags: ['Leadership', 'Data Analysis', 'Strategy'],
            icon: '🎓',

            overview: {
                period: '202X.XX ~ 202X.XX',
                team: '경영전략학회 BACS',
                role: '9기 부학회장 (Vice President)'
            },
            keyResult: '📚 학회 커리큘럼 리뉴얼 및 신입 기수 역대 최고 경쟁률 달성',
            catchphrase: '"데이터와 전략의 융합을 이끄는 리더십"',
            description_new: "부학회장으로서 조직을 운영하며, 경영 전략 프레임워크 학습뿐만 아니라 실질적인 데이터 분석 역량을 기를 수 있도록 커리큘럼을 고도화했습니다.",
            problemSolving: [
                {
                    title: '리더십',
                    keyword: 'Curriculum',
                    desc: '기존 이론 중심 학습에서 탈피, Python/SQL 세션을 신설하여 실무 지향적 학회로 체질 개선.'
                },
                {
                    title: '기업 분석',
                    keyword: 'Strategic Thinking',
                    desc: '이마트, 넷플릭스 등 주요 기업의 부진 원인을 MECE, 3C 등으로 분석하고 신사업 전략 제안.'
                },
                {
                    title: '데이터',
                    keyword: 'HR Analytics',
                    desc: '인사 데이터 불균형을 SMOTE로 해결하고, 직원 승진 여부를 93% 정확도로 예측하는 머신러닝 프로젝트 수행.'
                }
            ],
            images: []
        },

        // 9. 아카데미쿠스 (School)
        {
            id: 'academicus',
            type: 'school',
            title: '아카데미쿠스 공모전',
            category: 'Academic Contest (3등)',
            summary: 'CBDC 도입 시나리오 분석 및 보험 추천 솔루션 기획.',
            tags: ['Fintech', 'Scenario', 'Planning'],
            icon: '🥉',

            overview: {
                period: '2023.00 ~ 2023.00',
                team: '팀 프로젝트(5명)',
                role: 'Scenario Planner'
            },
            keyResult: '🥉 교내 학술 공모전 [3등] 수상',
            catchphrase: '"디지털 화폐(CBDC) 시대, 보험 산업의 기회를 찾다"',
            description_new: "가까운 미래에 도래할 CBDC(중앙은행 디지털 화폐) 환경을 가정하고, 결제 데이터의 투명성을 활용한 초개인화 보험 추천 모델을 제안했습니다.",
            problemSolving: [
                {
                    title: '시나리오',
                    keyword: 'Future Landscape',
                    desc: 'CBDC 완전 도입 시 발생할 금융 데이터의 흐름 변화를 시나리오 기법으로 예측.'
                },
                {
                    title: '솔루션',
                    keyword: 'Hyper-personalization',
                    desc: '마이데이터와 결제 내역을 결합하여, 고객 라이프스타일에 딱 맞는 보험을 실시간 추천하는 서비스 기획.'
                },
                {
                    title: '구체화',
                    keyword: 'Prototyping',
                    desc: '카카오페이손해보험을 타겟으로 설정하고, Figma로 직관적인 UI 프로토타입을 제작하여 설득력 확보.'
                }
            ],
            images: []
        },

        // 10. 교내 ESG 경진대회 (School)
        {
            id: 'esg-contest-school',
            type: 'school',
            title: '교내 ESG 경진대회',
            category: 'Academic Contest (우수상)',
            summary: '유학생들의 학교 적응을 돕기 위한 \'유학생 전담 또래 코칭\' 프로그램 제안.',
            tags: ['ESG', 'Idea', 'Campus'],
            icon: '🏫',

            overview: {
                period: '2023.00 ~ 2023.00',
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
