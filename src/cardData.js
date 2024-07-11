const flashcards = [{id: 1, front: <h1>accent</h1>, back: <p>강세, 말투</p>}, {
    id: 2,
    front: <h1>accept</h1>,
    back: <p>받아들이다, 수락하다</p>
}, {id: 3, front: <h1>access</h1>, back: <p>접근, 출입</p>}, {
    id: 4,
    front: <h1>account</h1>,
    back: <p>계정, 설명</p>
}, {id: 5, front: <h1>accuse</h1>, back: <p>비난하다, 고발하다</p>}, {
    id: 6,
    front: <h1>achieve</h1>,
    back: <p>달성하다, 이루다</p>
}, {id: 7, front: <h1>adapt</h1>, back: <p>적응하다, 조정하다</p>}, {
    id: 8,
    front: <h1>admire</h1>,
    back: <p>감탄하다, 존경하다</p>
}, {id: 9, front: <h1>admit</h1>, back: <p>인정하다, 입장을 허락하다</p>}, {
    id: 10,
    front: <h1>adopt</h1>,
    back: <p>채택하다, 입양하다</p>
}, {id: 11, front: <h1>advance</h1>, back: <p>진보, 발전</p>}, {
    id: 12,
    front: <h1>affair</h1>,
    back: <p>사건, 사안</p>
}, {id: 13, front: <h1>affect</h1>, back: <p>영향을 미치다</p>}, {
    id: 14,
    front: <h1>afford</h1>,
    back: <p>여유가 있다, 감당하다</p>
}, {id: 15, front: <h1>allow</h1>, back: <p>허락하다, 허용하다</p>}, {
    id: 16,
    front: <h1>alter</h1>,
    back: <p>변경하다, 수정하다</p>
}, {id: 17, front: <h1>amaze</h1>, back: <p>놀라게 하다, 경악케 하다</p>}, {
    id: 18,
    front: <h1>amount</h1>,
    back: <p>총액, 양</p>
}, {id: 19, front: <h1>amuse</h1>, back: <p>즐겁게 하다, 웃기다</p>}, {
    id: 20,
    front: <h1>analysis</h1>,
    back: <p>분석</p>
}, {id: 21, front: <h1>announce</h1>, back: <p>발표하다, 알리다</p>}, {
    id: 22,
    front: <h1>annoy</h1>,
    back: <p>괴롭히다, 짜증나게 하다</p>
}, {id: 23, front: <h1>annual</h1>, back: <p>연간의, 매년의</p>}, {
    id: 24,
    front: <h1>anxious</h1>,
    back: <p>걱정하는, 불안한</p>
}, {id: 25, front: <h1>appeal</h1>, back: <p>호소, 매력</p>}, {
    id: 26,
    front: <h1>appoint</h1>,
    back: <p>임명하다, 지정하다</p>
}, {id: 27, front: <h1>appreciate</h1>, back: <p>감사하다, 가치를 인정하다</p>}, {
    id: 28,
    front: <h1>approach</h1>,
    back: <p>접근, 접근 방법</p>
}, {id: 29, front: <h1>appropriate</h1>, back: <p>적절한, 도용하다</p>}, {
    id: 30,
    front: <h1>argue</h1>,
    back: <p>주장하다, 논쟁하다</p>
}, {id: 31, front: <h1>arrange</h1>, back: <p>정리하다, 계획하다</p>}, {
    id: 32,
    front: <h1>assess</h1>,
    back: <p>평가하다, 판단하다</p>
}, {id: 33, front: <h1>assign</h1>, back: <p>할당하다, 지정하다</p>}, {
    id: 34,
    front: <h1>associate</h1>,
    back: <p>연관시키다, 동료</p>
}, {id: 35, front: <h1>assume</h1>, back: <p>추정하다, 가정하다</p>}, {
    id: 36,
    front: <h1>atmosphere</h1>,
    back: <p>분위기, 대기</p>
}, {id: 37, front: <h1>attach</h1>, back: <p>붙이다, 첨부하다</p>}, {
    id: 38,
    front: <h1>attend</h1>,
    back: <p>참석하다, 돌보다</p>
}, {id: 39, front: <h1>avoid</h1>, back: <p>막다, 피하다</p>}, {
    id: 40,
    front: <h1>award</h1>,
    back: <p>상, 수여하다</p>
}, {id: 41, front: <h1>aware</h1>, back: <p>인식하고 있는, 알고 있는</p>}, {
    id: 42,
    front: <h1>awkward</h1>,
    back: <p>어색한, 서투른</p>
}, {id: 43, front: <h1>basis</h1>, back: <p>기초</p>}, {
    id: 44,
    front: <h1>belong</h1>,
    back: <p>속하다, 소유이다</p>
}, {id: 45, front: <h1>beneath</h1>, back: <p>아래에, 밑에</p>}, {
    id: 46,
    front: <h1>benefit</h1>,
    back: <p>혜택, 이익</p>
}, {id: 47, front: <h1>bitter</h1>, back: <p>쓴, 씁쓸한</p>}, {
    id: 48,
    front: <h1>blame</h1>,
    back: <p>비난하다, 나무라다</p>
}, {id: 49, front: <h1>bloom</h1>, back: <p>꽃이 피다, 번창하다</p>}, {
    id: 50,
    front: <h1>bother</h1>,
    back: <p>곤란하게 하다, 귀찮게 하다</p>
}, {id: 51, front: <h1>bounce</h1>, back: <p>튀다, 튀기다</p>}, {
    id: 52,
    front: <h1>breath</h1>,
    back: <p>숨, 호흡</p>
}, {id: 53, front: <h1>breathe</h1>, back: <p>숨을 쉬다, 호흡하다</p>}, {
    id: 54,
    front: <h1>brilliant</h1>,
    back: <p>빛나는, 뛰어난</p>
}, {id: 55, front: <h1>budget</h1>, back: <p>예산, 예상 비용</p>}, {
    id: 56,
    front: <h1>calculate</h1>,
    back: <p>계산하다</p>
}, {id: 57, front: <h1>capable</h1>, back: <p>능력 있는, 할 수 있는</p>}, {
    id: 58,
    front: <h1>capital</h1>,
    back: <p>수도, 자본</p>
}, {id: 59, front: <h1>career</h1>, back: <p>경력, 직업</p>}, {
    id: 60,
    front: <h1>century</h1>,
    back: <p>세기, 100년</p>
}, {id: 61, front: <h1>channel</h1>, back: <p>(방송) 채널, 경로</p>}, {
    id: 62,
    front: <h1>charge</h1>,
    back: <p>(요금을) 청구하다, 기소하다</p>
}, {id: 63, front: <h1>chase</h1>, back: <p>쫓다, 추적하다</p>}, {
    id: 64,
    front: <h1>chief</h1>,
    back: <p>주요한, 최고의</p>
}, {id: 65, front: <h1>circumstance</h1>, back: <p>상황, 환경</p>}, {
    id: 66,
    front: <h1>civil</h1>,
    back: <p>시민의, 민간의</p>
}, {id: 67, front: <h1>claim</h1>, back: <p>주장하다, 요구하다</p>}, {
    id: 68,
    front: <h1>client</h1>,
    back: <p>고객, 의뢰인</p>
}, {id: 69, front: <h1>climate</h1>, back: <p>기후, 분위기</p>}, {
    id: 70,
    front: <h1>combine</h1>,
    back: <p>결합하다, 합치다</p>
}, {id: 71, front: <h1>comfort</h1>, back: <p>위안, 편안함</p>}, {
    id: 72,
    front: <h1>command</h1>,
    back: <p>명령하다, 지휘하다</p>
}, {id: 73, front: <h1>commerce</h1>, back: <p>상업, 무역</p>}, {
    id: 74,
    front: <h1>committee</h1>,
    back: <p>위원회</p>
}, {id: 75, front: <h1>compare</h1>, back: <p>비교하다</p>}, {
    id: 76,
    front: <h1>complain</h1>,
    back: <p>불평하다, 항의하다</p>
}, {id: 77, front: <h1>complete</h1>, back: <p>완료하다, 완전한</p>}, {
    id: 78,
    front: <h1>complicate</h1>,
    back: <p>복잡하게 하다</p>
}, {id: 79, front: <h1>concentrate</h1>, back: <p>집중하다</p>}, {
    id: 80,
    front: <h1>concept</h1>,
    back: <p>개념</p>
}, {id: 81, front: <h1>concern</h1>, back: <p>걱정, 관심</p>}, {
    id: 82,
    front: <h1>confirm</h1>,
    back: <p>확인하다, 확정하다</p>
}, {id: 83, front: <h1>conflict</h1>, back: <p>충돌, 갈등</p>}, {
    id: 84,
    front: <h1>confuse</h1>,
    back: <p>혼란스럽게 하다, 혼동하다</p>
}, {id: 85, front: <h1>conscious</h1>, back: <p>의식하고 있는, 제정신인</p>}, {
    id: 86,
    front: <h1>constant</h1>,
    back: <p>지속적인, 불변의</p>
}, {id: 87, front: <h1>consume</h1>, back: <p>소비하다</p>}, {
    id: 88,
    front: <h1>contact</h1>,
    back: <p>연락하다, 접촉</p>
}, {id: 89, front: <h1>contain</h1>, back: <p>포함하다, 담고 있다</p>}, {
    id: 90,
    front: <h1>content</h1>,
    back: <p>내용, 만족하는</p>
}, {id: 91, front: <h1>context</h1>, back: <p>맥락, 문맥</p>}, {
    id: 92,
    front: <h1>contract</h1>,
    back: <p>계약하다, 수축하다</p>
}, {id: 93, front: <h1>contribute</h1>, back: <p>기여하다, 한 가지 원인이다</p>}, {
    id: 94,
    front: <h1>converse</h1>,
    back: <p>대화하다</p>
}, {id: 95, front: <h1>convince</h1>, back: <p>납득시키다, 확신시키다</p>}, {
    id: 96,
    front: <h1>council</h1>,
    back: <p>의회, 자문단</p>
}, {id: 97, front: <h1>county</h1>, back: <p>카운티(행정구역)</p>}, {
    id: 98,
    front: <h1>cruel</h1>,
    back: <p>잔인한, 무자비한</p>
}, {id: 99, front: <h1>current</h1>, back: <p>현재의, 흐름</p>}, {
    id: 100,
    front: <h1>debate</h1>,
    back: <p>토론하다</p>
}, {id: 101, front: <h1>decorate</h1>, back: <p>장식하다</p>}, {
    id: 102,
    front: <h1>define</h1>,
    back: <p>정의하다, 명확히 하다</p>
}, {id: 103, front: <h1>definite</h1>, back: <p>명확한, 분명한</p>}, {
    id: 104,
    front: <h1>delay</h1>,
    back: <p>미루다, 지체하다</p>
}, {id: 105, front: <h1>deliver</h1>, back: <p>배달하다, 연설하다</p>}, {
    id: 106,
    front: <h1>demand</h1>,
    back: <p>요구하다, 수요</p>
}, {id: 107, front: <h1>demonstrate</h1>, back: <p>증명하다, 시위하다</p>}, {
    id: 108,
    front: <h1>depend</h1>,
    back: <p>의존하다, 의지하다</p>
}, {id: 109, front: <h1>depress</h1>, back: <p>우울하게 하다, 떨어뜨리다</p>}, {
    id: 110,
    front: <h1>describe</h1>,
    back: <p>묘사하다, 설명하다</p>
}, {id: 111, front: <h1>deserve</h1>, back: <p>~할 만하다, 자격이 있다</p>}, {
    id: 112,
    front: <h1>desperate</h1>,
    back: <p>필사적인, 절망적인</p>
}, {id: 113, front: <h1>despite</h1>, back: <p>~에도 불구하고</p>}, {
    id: 114,
    front: <h1>detect</h1>,
    back: <p>감지하다, 발견하다</p>
}, {id: 115, front: <h1>determine</h1>, back: <p>결정하다, 확정하다</p>}, {
    id: 116,
    front: <h1>disappoint</h1>,
    back: <p>실망시키다</p>
}, {id: 117, front: <h1>discipline</h1>, back: <p>훈육, 규율</p>}, {
    id: 118,
    front: <h1>disgust</h1>,
    back: <p>역겨움, 혐오</p>
}, {id: 119, front: <h1>district</h1>, back: <p>지구, 지역</p>}, {
    id: 120,
    front: <h1>disturb</h1>,
    back: <p>방해하다, 혼란스럽게 하다</p>
}, {id: 121, front: <h1>document</h1>, back: <p>문서, 서류</p>}, {
    id: 122,
    front: <h1>domestic</h1>,
    back: <p>가정의, 국내의</p>
}, {id: 123, front: <h1>donate</h1>, back: <p>기부하다</p>}, {
    id: 124,
    front: <h1>ease</h1>,
    back: <p>쉬움, 편하게 해 주다</p>
}, {id: 125, front: <h1>effect</h1>, back: <p>효과, 영향</p>}, {
    id: 126,
    front: <h1>effort</h1>,
    back: <p>노력, 수고</p>
}, {id: 127, front: <h1>elect</h1>, back: <p>선출하다, 선거하다</p>}, {
    id: 128,
    front: <h1>embarrass</h1>,
    back: <p>당황하게 하다, 창피를 주다</p>
}, {id: 129, front: <h1>emphasize</h1>, back: <p>강조하다, 중시하다</p>}, {
    id: 130,
    front: <h1>employ</h1>,
    back: <p>고용하다, 사용하다</p>
}, {id: 131, front: <h1>engage</h1>, back: <p>관여하다, 종사하다</p>}, {
    id: 132,
    front: <h1>enormous</h1>,
    back: <p>거대한, 엄청난</p>
}, {id: 133, front: <h1>especial</h1>, back: <p>특별한</p>}, {
    id: 134,
    front: <h1>establish</h1>,
    back: <p>설립하다, 확립하다</p>
}, {id: 135, front: <h1>estimate</h1>, back: <p>추정하다, 견적을 내다</p>}, {
    id: 136,
    front: <h1>evidence</h1>,
    back: <p>증거, 증명</p>
}, {id: 137, front: <h1>except</h1>, back: <p>제외하고, ...을 제외하면</p>}, {
    id: 138,
    front: <h1>exhaust</h1>,
    back: <p>다 써버리다, 고갈시키다</p>
}, {id: 139, front: <h1>expand</h1>, back: <p>확장하다, 넓히다</p>}, {
    id: 140,
    front: <h1>expense</h1>,
    back: <p>비용, 경비</p>
}, {id: 141, front: <h1>experiment</h1>, back: <p>실험, 시험</p>}, {
    id: 142,
    front: <h1>expert</h1>,
    back: <p>전문가, 전문가의</p>
}, {id: 143, front: <h1>expose</h1>, back: <p>드러내다, 노출시키다</p>}, {
    id: 144,
    front: <h1>extend</h1>,
    back: <p>확장하다, 연장하다</p>
}, {id: 145, front: <h1>extreme</h1>, back: <p>극도의, 극심한</p>}, {
    id: 146,
    front: <h1>factory</h1>,
    back: <p>공장</p>
}, {id: 147, front: <h1>faint</h1>, back: <p>희미한, 기절하다</p>}, {
    id: 148,
    front: <h1>fascinate</h1>,
    back: <p>반하게 하다, 마음을 사로잡다</p>
}, {id: 149, front: <h1>feature</h1>, back: <p>특징, 이목구비</p>}, {
    id: 150,
    front: <h1>fever</h1>,
    back: <p>열, 열병</p>
}, {id: 151, front: <h1>finance</h1>, back: <p>재정, 자금</p>}, {
    id: 152,
    front: <h1>flame</h1>,
    back: <p>불꽃, 화염</p>
}, {id: 153, front: <h1>float</h1>, back: <p>떠다니다, 뜨다</p>}, {
    id: 154,
    front: <h1>flood</h1>,
    back: <p>홍수, 물에 잠기게 하다</p>
}, {id: 155, front: <h1>forgive</h1>, back: <p>용서하다</p>}, {
    id: 156,
    front: <h1>fortunate</h1>,
    back: <p>운이 좋은, 행운의</p>
}, {id: 157, front: <h1>fortune</h1>, back: <p>운, (많은) 재산</p>}, {
    id: 158,
    front: <h1>freeze</h1>,
    back: <p>얼다, 얼리다</p>
}, {id: 159, front: <h1>frustrate</h1>, back: <p>좌절시키다, 방해하다</p>}, {
    id: 160,
    front: <h1>function</h1>,
    back: <p>기능, 기능하다</p>
}, {id: 161, front: <h1>glance</h1>, back: <p>힐끗 보다, 힐끗 보기</p>}, {
    id: 162,
    front: <h1>gorgeous</h1>,
    back: <p>아주 멋진, 화려한</p>
}, {id: 163, front: <h1>govern</h1>, back: <p>지배하다, 통치하다</p>}, {
    id: 164,
    front: <h1>grace</h1>,
    back: <p>은혜, 우아함</p>
}, {id: 165, front: <h1>greet</h1>, back: <p>인사하다, 환영하다</p>}, {
    id: 166,
    front: <h1>guarantee</h1>,
    back: <p>보증하다, 보장하다</p>
}, {id: 167, front: <h1>guilt</h1>, back: <p>죄책감, 유죄</p>}, {
    id: 168,
    front: <h1>hesitate</h1>,
    back: <p>주저하다, 망설이다</p>
}, {id: 169, front: <h1>identity</h1>, back: <p>정체성, 신원</p>}, {
    id: 170,
    front: <h1>ignore</h1>,
    back: <p>무시하다, 무시</p>
}, {id: 171, front: <h1>illustrate</h1>, back: <p>삽화를 넣다, (예를 들어) 설명하다</p>}, {
    id: 172,
    front: <h1>immediate</h1>,
    back: <p>즉각적인, 당장의</p>
}, {id: 173, front: <h1>impress</h1>, back: <p>깊은 인상을 주다, 기억에 남기다</p>}, {
    id: 174,
    front: <h1>improve</h1>,
    back: <p>개선하다, 향상시키다</p>
}, {id: 175, front: <h1>include</h1>, back: <p>포함하다</p>}, {
    id: 176,
    front: <h1>income</h1>,
    back: <p>소득, 수입</p>
}, {id: 177, front: <h1>indeed</h1>, back: <p>사실로, 실제로</p>}, {
    id: 178,
    front: <h1>indicate</h1>,
    back: <p>나타내다, 가리키다</p>
}, {id: 179, front: <h1>individual</h1>, back: <p>개인, 개별의</p>}, {
    id: 180,
    front: <h1>influence</h1>,
    back: <p>영향, 영향을 미치다</p>
}, {id: 181, front: <h1>inform</h1>, back: <p>알리다, 정보를 주다</p>}, {
    id: 182,
    front: <h1>injure</h1>,
    back: <p>다치게 하다, 상처 입히다</p>
}, {id: 183, front: <h1>innocent</h1>, back: <p>죄 없는, 무죄의</p>}, {
    id: 184,
    front: <h1>insist</h1>,
    back: <p>주장하다, 단언하다</p>
}, {id: 185, front: <h1>inspect</h1>, back: <p>검사하다, 조사하다</p>}, {
    id: 186,
    front: <h1>instance</h1>,
    back: <p>예, 경우</p>
}, {id: 187, front: <h1>instant</h1>, back: <p>즉각적인, 순간</p>}, {
    id: 188,
    front: <h1>instead</h1>,
    back: <p>대신에</p>
}, {id: 189, front: <h1>instruct</h1>, back: <p>가르치다, 지시하다</p>}, {
    id: 190,
    front: <h1>instrument</h1>,
    back: <p>도구, 악기</p>
}, {id: 191, front: <h1>insure</h1>, back: <p>보장하다, 보험에 들다</p>}, {
    id: 192,
    front: <h1>intend</h1>,
    back: <p>의도하다, 계획하다</p>
}, {id: 193, front: <h1>intense</h1>, back: <p>강렬한, 격렬한</p>}, {
    id: 194,
    front: <h1>intent</h1>,
    back: <p>의도, 열중하는</p>
}, {id: 195, front: <h1>internal</h1>, back: <p>내부의, 내면의</p>}, {
    id: 196,
    front: <h1>interrupt</h1>,
    back: <p>중단시키다, 방해하다</p>
}, {id: 197, front: <h1>invest</h1>, back: <p>투자하다</p>}, {
    id: 198,
    front: <h1>investigate</h1>,
    back: <p>조사하다, 수사하다</p>
}, {id: 199, front: <h1>involve</h1>, back: <p>관련시키다, 포함하다</p>}, {
    id: 200,
    front: <h1>justice</h1>,
    back: <p>정의, 공평</p>
}, {id: 201, front: <h1>league</h1>, back: <p>연맹, (스포츠의) 리그</p>}, {
    id: 202,
    front: <h1>legal</h1>,
    back: <p>법적인, 합법적인</p>
}, {id: 203, front: <h1>local</h1>, back: <p>지역의, 현지의</p>}, {
    id: 204,
    front: <h1>locate</h1>,
    back: <p>찾아내다, 위치를 알아내다</p>
}, {id: 205, front: <h1>loose</h1>, back: <p>풀린, 느슨한</p>}, {
    id: 206,
    front: <h1>magazine</h1>,
    back: <p>잡지</p>
}, {id: 207, front: <h1>maintain</h1>, back: <p>유지하다, 보존하다</p>}, {
    id: 208,
    front: <h1>manufacture</h1>,
    back: <p>제조하다, 생산하다</p>
}, {id: 209, front: <h1>marvel</h1>, back: <p>경이로움, 놀라움</p>}, {
    id: 210,
    front: <h1>maximum</h1>,
    back: <p>최대의, 최고점</p>
}, {id: 211, front: <h1>measure</h1>, back: <p>측정하다, 조치</p>}, {
    id: 212,
    front: <h1>mention</h1>,
    back: <p>언급하다</p>
}, {id: 213, front: <h1>microwave</h1>, back: <p>전자레인지</p>}, {
    id: 214,
    front: <h1>minor</h1>,
    back: <p>작은, 중요하지 않은</p>
}, {id: 215, front: <h1>mission</h1>, back: <p>임무, 사명</p>}, {
    id: 216,
    front: <h1>moral</h1>,
    back: <p>도덕적인, 윤리적인</p>
}, {id: 217, front: <h1>moreover</h1>, back: <p>게다가, 더욱이</p>}, {
    id: 218,
    front: <h1>mount</h1>,
    back: <p>올라가다, 산</p>
}, {id: 219, front: <h1>necessary</h1>, back: <p>필요한, 필수적인</p>}, {
    id: 220,
    front: <h1>neither</h1>,
    back: <p>(둘 중) 어느 쪽도 ~ 아니다</p>
}, {id: 221, front: <h1>nerve</h1>, back: <p>신경, 긴장</p>}, {
    id: 222,
    front: <h1>notice</h1>,
    back: <p>알림, 주목하다</p>
}, {id: 223, front: <h1>nowhere</h1>, back: <p>아무 데도 ~ 없다</p>}, {
    id: 224,
    front: <h1>observe</h1>,
    back: <p>관찰하다, 준수하다</p>
}, {id: 225, front: <h1>obvious</h1>, back: <p>명백한, 분명한</p>}, {
    id: 226,
    front: <h1>occasion</h1>,
    back: <p>경우, 행사</p>
}, {id: 227, front: <h1>occur</h1>, back: <p>발생하다, 생각이 떠오르다</p>}, {
    id: 228,
    front: <h1>offer</h1>,
    back: <p>제공하다, 제안하다</p>
}, {id: 229, front: <h1>opinion</h1>, back: <p>의견, 견해</p>}, {
    id: 230,
    front: <h1>oppose</h1>,
    back: <p>반대하다, 대항하다</p>
}, {id: 231, front: <h1>otherwise</h1>, back: <p>그렇지 않으면, 다른 경우에는</p>}, {
    id: 232,
    front: <h1>ought</h1>,
    back: <p>~해야 한다, 틀림없이 ~할 것이다</p>
}, {id: 233, front: <h1>overall</h1>, back: <p>전반적인, 전체적으로</p>}, {
    id: 234,
    front: <h1>panic</h1>,
    back: <p>극심한 공포, 공황 상태</p>
}, {id: 235, front: <h1>paragraph</h1>, back: <p>단락, 문단</p>}, {
    id: 236,
    front: <h1>pardon</h1>,
    back: <p>용서, 사면</p>
}, {id: 237, front: <h1>particular</h1>, back: <p>특정한, 개별적인</p>}, {
    id: 238,
    front: <h1>pause</h1>,
    back: <p>일시정지, 중단</p>
}, {id: 239, front: <h1>perform</h1>, back: <p>수행하다, 공연하다</p>}, {
    id: 240,
    front: <h1>person</h1>,
    back: <p>사람, 인물</p>
}, {id: 241, front: <h1>plain</h1>, back: <p>명확한, 평범한</p>}, {
    id: 242,
    front: <h1>plane</h1>,
    back: <p>비행기, 평면</p>
}, {id: 243, front: <h1>plate</h1>, back: <p>접시, 판</p>}, {
    id: 244,
    front: <h1>poison</h1>,
    back: <p>독, 독약</p>
}, {id: 245, front: <h1>pole</h1>, back: <p>막대기, (양끝의) 극</p>}, {
    id: 246,
    front: <h1>policy</h1>,
    back: <p>정책, 방침</p>
}, {id: 247, front: <h1>polite</h1>, back: <p>공손한, 예의 바른</p>}, {
    id: 248,
    front: <h1>politics</h1>,
    back: <p>정치, 정치학</p>
}, {id: 249, front: <h1>pollute</h1>, back: <p>오염시키다, 더럽히다</p>}, {
    id: 250,
    front: <h1>possess</h1>,
    back: <p>소유하다, 사로잡다</p>
}, {id: 251, front: <h1>potential</h1>, back: <p>가능성이 있는, 잠재력</p>}, {
    id: 252,
    front: <h1>practical</h1>,
    back: <p>실용적인, 실제적인</p>
}, {id: 253, front: <h1>prefer</h1>, back: <p>선호하다, 더 좋아하다</p>}, {
    id: 254,
    front: <h1>pregnant</h1>,
    back: <p>임신한</p>
}, {id: 255, front: <h1>presence</h1>, back: <p>있음, 존재</p>}, {
    id: 256,
    front: <h1>pretend</h1>,
    back: <p>~하는 척하다, 가장하다</p>
}, {id: 257, front: <h1>prevent</h1>, back: <p>막다, 방지하다</p>}, {
    id: 258,
    front: <h1>previous</h1>,
    back: <p>이전의, 앞서는</p>
}, {id: 259, front: <h1>principle</h1>, back: <p>원칙, 원리</p>}, {
    id: 260,
    front: <h1>privacy</h1>,
    back: <p>개인정보, 사생활</p>
}, {id: 261, front: <h1>probable</h1>, back: <p>가능성 있는, 있음직한</p>}, {
    id: 262,
    front: <h1>proceed</h1>,
    back: <p>진행하다, 계속하다</p>
}, {id: 263, front: <h1>process</h1>, back: <p>과정, 처리</p>}, {
    id: 264,
    front: <h1>profession</h1>,
    back: <p>직업, 전문직</p>
}, {id: 265, front: <h1>progress</h1>, back: <p>진전, 진보</p>}, {
    id: 266,
    front: <h1>promote</h1>,
    back: <p>촉진하다, 승진시키다</p>
}, {id: 267, front: <h1>pronounce</h1>, back: <p>발음하다, 발표하다</p>}, {
    id: 268,
    front: <h1>proper</h1>,
    back: <p>적절한, 적당한</p>
}, {id: 269, front: <h1>property</h1>, back: <p>재산, 소유물</p>}, {
    id: 270,
    front: <h1>protect</h1>,
    back: <p>보호하다, 지키다</p>
}, {id: 271, front: <h1>protest</h1>, back: <p>항의하다, 시위하다</p>}, {
    id: 272,
    front: <h1>provide</h1>,
    back: <p>제공하다, 공급하다</p>
}, {id: 273, front: <h1>punish</h1>, back: <p>처벌하다, 벌주다</p>}, {
    id: 274,
    front: <h1>purchase</h1>,
    back: <p>구매하다, 구입하다</p>
}, {id: 275, front: <h1>purpose</h1>, back: <p>목적, 의도</p>}, {
    id: 276,
    front: <h1>quote</h1>,
    back: <p>인용하다, 견적을 내다</p>
}, {id: 277, front: <h1>rather</h1>, back: <p>오히려, 꽤</p>}, {
    id: 278,
    front: <h1>react</h1>,
    back: <p>반응하다</p>
}, {id: 279, front: <h1>recent</h1>, back: <p>최근의, 최신의</p>}, {
    id: 280,
    front: <h1>recognize</h1>,
    back: <p>인식하다, 알아보다</p>
}, {id: 281, front: <h1>recommend</h1>, back: <p>추천하다, 권하다</p>}, {
    id: 282,
    front: <h1>recover</h1>,
    back: <p>회복하다, 복구하다</p>
}, {id: 283, front: <h1>reduce</h1>, back: <p>줄이다, 감소하다</p>}, {
    id: 284,
    front: <h1>refer</h1>,
    back: <p>언급하다, 참조하다</p>
}, {id: 285, front: <h1>reflect</h1>, back: <p>반영하다, 생각하다</p>}, {
    id: 286,
    front: <h1>refuse</h1>,
    back: <p>거절하다, 거부하다</p>
}, {id: 287, front: <h1>regard</h1>, back: <p>간주하다, 관련이 있다</p>}, {
    id: 288,
    front: <h1>register</h1>,
    back: <p>등록하다, 기재하다</p>
}, {id: 289, front: <h1>relate</h1>, back: <p>관련시키다, 이야기하다</p>}, {
    id: 290,
    front: <h1>release</h1>,
    back: <p>석방하다, 발표하다</p>
}, {id: 291, front: <h1>relief</h1>, back: <p>완화, 안도</p>}, {
    id: 292,
    front: <h1>remark</h1>,
    back: <p>주목하다, 언급하다</p>
}, {id: 293, front: <h1>remove</h1>, back: <p>없애다, 옮기다</p>}, {
    id: 294,
    front: <h1>repair</h1>,
    back: <p>수리하다, 고치다</p>
}, {id: 295, front: <h1>replace</h1>, back: <p>대체하다, 제자리에 놓다</p>}, {
    id: 296,
    front: <h1>represent</h1>,
    back: <p>대표하다, 나타내다</p>
}, {id: 297, front: <h1>request</h1>, back: <p>요청하다, 신청하다</p>}, {
    id: 298,
    front: <h1>require</h1>,
    back: <p>요구하다, 필요로 하다</p>
}, {id: 299, front: <h1>reserve</h1>, back: <p>보존하다, 예약하다</p>}, {
    id: 300,
    front: <h1>resist</h1>,
    back: <p>저항하다, 대항하다</p>
}, {id: 301, front: <h1>resource</h1>, back: <p>자원, 수단</p>}, {
    id: 302,
    front: <h1>respond</h1>,
    back: <p>응답하다, 대응하다</p>
}, {id: 303, front: <h1>retire</h1>, back: <p>은퇴하다, 퇴직하다</p>}, {
    id: 304,
    front: <h1>scare</h1>,
    back: <p>겁주다, 겁먹게 하다</p>
}, {id: 305, front: <h1>secretary</h1>, back: <p>비서, 장관</p>}, {
    id: 306,
    front: <h1>section</h1>,
    back: <p>부분, 구역</p>
}, {id: 307, front: <h1>secure</h1>, back: <p>안전한, 보호하다</p>}, {
    id: 308,
    front: <h1>senior</h1>,
    back: <p>고위의, 연장자</p>
}, {id: 309, front: <h1>separate</h1>, back: <p>분리하다, 별개의</p>}, {
    id: 310,
    front: <h1>serious</h1>,
    back: <p>진지한, 심각한</p>
}, {id: 311, front: <h1>serve</h1>, back: <p>제공하다, 도움이 되다</p>}, {
    id: 312,
    front: <h1>session</h1>,
    back: <p>회의, (업무할동) 기간</p>
}, {id: 313, front: <h1>settle</h1>, back: <p>해결하다, 정착하다</p>}, {
    id: 314,
    front: <h1>shade</h1>,
    back: <p>그늘, 햇빛 가리개</p>
}, {id: 315, front: <h1>shake</h1>, back: <p>흔들다, 떨다</p>}, {
    id: 316,
    front: <h1>shame</h1>,
    back: <p>부끄러움, 수치</p>
}, {id: 317, front: <h1>shelter</h1>, back: <p>피난처, 보호하다</p>}, {
    id: 318,
    front: <h1>similar</h1>,
    back: <p>비슷한, 유사한</p>
}, {id: 319, front: <h1>since</h1>, back: <p>~한 이후로, 그때 이후로</p>}, {
    id: 320,
    front: <h1>situate</h1>,
    back: <p>설치하다, 위치를 정하다</p>
}, {id: 321, front: <h1>solid</h1>, back: <p>고체의, 탄탄한</p>}, {
    id: 322,
    front: <h1>somewhat</h1>,
    back: <p>다소, 어느 정도</p>
}, {id: 323, front: <h1>spare</h1>, back: <p>여분의, 할애하다</p>}, {
    id: 324,
    front: <h1>species</h1>,
    back: <p>종, 종류</p>
}, {id: 325, front: <h1>specific</h1>, back: <p>구체적인, 특정한</p>}, {
    id: 326,
    front: <h1>spoil</h1>,
    back: <p>망치다, 흥을 깨다</p>
}, {id: 327, front: <h1>stable</h1>, back: <p>안정된, 마구간</p>}, {
    id: 328,
    front: <h1>standard</h1>,
    back: <p>표준, 기준</p>
}, {id: 329, front: <h1>stare</h1>, back: <p>응시하다, 빤히 쳐다보다</p>}, {
    id: 330,
    front: <h1>state</h1>,
    back: <p>상태, 진술하다</p>
}, {id: 331, front: <h1>steady</h1>, back: <p>안정된, 꾸준한</p>}, {
    id: 332,
    front: <h1>strategy</h1>,
    back: <p>전략, 작전</p>
}, {id: 333, front: <h1>structure</h1>, back: <p>구조, 조직</p>}, {
    id: 334,
    front: <h1>suppose</h1>,
    back: <p>가정하다, 상상하다</p>
}, {id: 335, front: <h1>surround</h1>, back: <p>둘러싸다, 포위하다</p>}, {
    id: 336,
    front: <h1>survey</h1>,
    back: <p>설문조사, 조사하다</p>
}, {id: 337, front: <h1>suspect</h1>, back: <p>의심하다, 용의자</p>}, {
    id: 338,
    front: <h1>sweep</h1>,
    back: <p>쓸다, 휩쓸다</p>
}, {id: 339, front: <h1>temperature</h1>, back: <p>온도</p>}, {
    id: 340,
    front: <h1>tense</h1>,
    back: <p>긴장한, 시제</p>
}, {id: 341, front: <h1>theory</h1>, back: <p>이론</p>}, {
    id: 342,
    front: <h1>therefore</h1>,
    back: <p>그러므로, 따라서</p>
}, {id: 343, front: <h1>threat</h1>, back: <p>위협</p>}, {
    id: 344,
    front: <h1>throat</h1>,
    back: <p>목구멍</p>
}, {id: 345, front: <h1>through</h1>, back: <p>~을 통하여, ~ 내내</p>}, {
    id: 346,
    front: <h1>tough</h1>,
    back: <p>힘든, 튼튼한</p>
}, {id: 347, front: <h1>trace</h1>, back: <p>추적하다, 흔적</p>}, {
    id: 348,
    front: <h1>trade</h1>,
    back: <p>거래, 무역</p>
}, {id: 349, front: <h1>tradition</h1>, back: <p>전통</p>}, {
    id: 350,
    front: <h1>traffic</h1>,
    back: <p>교통, 교통량</p>
}, {id: 351, front: <h1>transfer</h1>, back: <p>옮기다, 이동하다</p>}, {
    id: 352,
    front: <h1>transport</h1>,
    back: <p>운송하다, 수송</p>
}, {id: 353, front: <h1>treat</h1>, back: <p>대하다, 치료하다</p>}, {
    id: 354,
    front: <h1>unite</h1>,
    back: <p>통합하다, 결합하다</p>
}, {id: 355, front: <h1>unless</h1>, back: <p>~하지 않는 한</p>}, {
    id: 356,
    front: <h1>until</h1>,
    back: <p>~까지, ~까지 계속하여</p>
}, {id: 357, front: <h1>upset</h1>, back: <p>속상하게 만들다, 기분 상한</p>}, {
    id: 358,
    front: <h1>various</h1>,
    back: <p>다양한</p>
}, {id: 359, front: <h1>vehicle</h1>, back: <p>차량, 탈것</p>}, {
    id: 360,
    front: <h1>version</h1>,
    back: <p>판, 다른 형태</p>
}, {id: 361, front: <h1>victim</h1>, back: <p>피해자</p>}, {
    id: 362,
    front: <h1>violent</h1>,
    back: <p>폭력적인</p>
}, {id: 363, front: <h1>volunteer</h1>, back: <p>자원봉사자, 자발적으로 하다</p>}, {
    id: 364,
    front: <h1>waste</h1>,
    back: <p>낭비하다, 폐기물</p>
}, {id: 365, front: <h1>weigh</h1>, back: <p>무게를 달다, 무게가 나가다</p>}, {
    id: 366,
    front: <h1>whether</h1>,
    back: <p>~인지 아닌지, ~이든 아니든</p>
}, {id: 367, front: <h1>while</h1>, back: <p>~하는 동안에, ~하는 반면에</p>}, {
    id: 368,
    front: <h1>whole</h1>,
    back: <p>전체의, 전체</p>
}, {id: 369, front: <h1>within</h1>, back: <p>~ 안에, 내부에서</p>}, {
    id: 370,
    front: <h1>without</h1>,
    back: <p>~없이, ~하지 않고</p>
}, {id: 371, front: <h1>wonder</h1>, back: <p>궁금해하다, 경이로움</p>}, {
    id: 372,
    front: <h1>wound</h1>,
    back: <p>상처, 부상을 입히다</p>
}];


export default flashcards;