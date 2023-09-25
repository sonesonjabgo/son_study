import math

# 시간을 분 단위로 변환하는 함수
def dateToMinutes(date):
    h, m = map(int, date.split(':'))
    return h*60 + m

def solution(fees, records):
    answer = []

    # 기본 시간, 기본 요금, 단위 시간, 단위 요금 순
    dt, df, ut, uf = fees
    
    dic = dict()

    for r in records:
        # 시각(시:분) 차량번호, 내역
        time, number, history = r.split()
        number = int(number)
        
        if number in dic:
            dic[number].append([dateToMinutes(time), history]) # 이미 차량번호가 있으면 해당 value인 리스트에 시각과 내역을 배열로 묶어서 저장
        else:
            dic[number] = [[dateToMinutes(time), history]] # 시각과 내역을 배열로 묶어 저장
    
    rList = list(dic.items())
    rList.sort(key=lambda x : x[0])
    # [(0, [[360, 'IN'], [394, 'OUT'], [1139, 'IN']]), (148, [[479, 'IN'], [1149, 'OUT']]), (5961, [[334, 'IN'], [479, 'OUT'], [1379, 'IN'], [1380, 'OUT']])]
    for r in rList:
        t = 0 # 총 주차한 시간이 될 변수
        for rr in r[1]:
            if rr[1] == "IN":
                t -= rr[0] 
            else:
                t += rr[0]
        # 출차 시간에서 입차 시간을 빼는 식으로 주차시간을 구하기 때문
                
        if r[1][-1][1] == "IN": # 마지막 요소의 내역이 입차라면
            t += dateToMinutes('23:59')
            
        if t <= dt: # 기본 시간보다 작다면
            answer.append(df)
        else:
            answer.append(df + math.ceil((t-dt) / ut) * uf)  
            
    return answer
