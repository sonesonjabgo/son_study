# 5-2를 위한 것

def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    try:
        divnum = a / b
        return divnum
    except:
        return '0으로 나눌 수 없습니다.'