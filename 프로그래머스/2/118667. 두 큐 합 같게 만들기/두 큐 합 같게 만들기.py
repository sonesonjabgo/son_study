from collections import deque

def changeNum(queueA, queueB):
    x = queueA.popleft()
    queueB.append(x)
    return x

def solution(queue1, queue2):
    queue1 = deque(queue1)
    queue2 = deque(queue2)
    sumA = sum(queue1)
    sumB = sum(queue2)
    allnum = sumA + sumB # 전체 요소의 합
    limit = len(queue1) * 4 - 1
    
    if allnum % 2 != 0:
        return -1
    
    count = 0
    while True:
        if sumA > sumB:
            tar = changeNum(queue1, queue2)
            count += 1
            sumA -= tar
            sumB += tar
            
        elif sumB > sumA:
            tar = changeNum(queue2, queue1)
            count += 1
            sumA += tar
            sumB -= tar
            
        else:
            break
        
        if count == limit:
            count = -1
            break
    
    return count