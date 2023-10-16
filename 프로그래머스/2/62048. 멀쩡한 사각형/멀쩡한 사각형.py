# 최대공약수 만큼 반복됨 - 최대공약수로 나눈 수 = 가로, 세로
 
def gcd(a, b): # 최대공약수 구하기 - 유클리드 호제법
    while b:
        a, b = b, a % b
    return a
 
 
def solution(w, h):
    x = gcd(w, h)
    return w * h - (w//x + h//x - 1)*x
    # 전체 사각형의 크기 - (멀쩡하지 않은 사각형의 개수)*최대공약수 = 멀쩡한 사각형의 개수
