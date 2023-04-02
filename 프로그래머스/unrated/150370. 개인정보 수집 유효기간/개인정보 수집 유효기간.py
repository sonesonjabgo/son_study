def trans(value, trans_dict):
    # 입력받은 값을 날짜와 텀을 분리함
    privacy, term = value.split()
    privacy = list(map(int, privacy.split('.')))
    privacy[1] += trans_dict[term]
    
    if privacy[1] > 12:
        year, month = divmod(privacy[1], 12)
        if month == 0:
            privacy[0] += (year-1)
            privacy[1] = 12
        else:
            privacy[0] += year
            privacy[1] = month
        
    privacy[0] = str(privacy[0])
    
    if privacy[1] < 10:
        privacy[1] = '0' + str(privacy[1])
    else:
        privacy[1] = str(privacy[1])
        
    if privacy[2] < 10:
        privacy[2] = '0' + str(privacy[2])
    else:
        privacy[2] = str(privacy[2])
        
    return '.'.join(privacy)

def solution(today, terms, privacies):
    # temrs에 맞춰 privacies 값을 변화시키고
    # today를 기준으로 값이 넘어가는 경우에 answer에 그 인덱스를 저장한다.
    today = int(''.join(today.split('.')))
    # 비교를 쓰려면 일단 문자열을 비교할 수 있는 형태로 바꿔야 한다.
    # 해당 함수는 비교하는 데 사용하는 함수
    
    # terms는 딕셔너리로 바꿔서 사용
    term_dict = {}
    for term in terms:
        key, value = term.split()
        term_dict[key] = int(value)
    
    answer = []
    # 값을 바꾸는 것은 다른 함수를 만들어서 사용
    for idx in range(len(privacies)):
        date = trans(privacies[idx], term_dict)
        date = int(''.join(date.split('.')))
        if date <= today:
            answer.append(idx+1)
    
    return answer