# A. 입력예시
# print(de_identify('970103-1234567'))
# print(de_identify('8611232345678'))

# B. 출력예시
# 970103*******
# 861123******* 

def de_identify(numbers):
    numbers = numbers.replace('-','')
    numbers = [numbers[:7], numbers[7:]]
    numbers[1] = '*******'
    numbers = ''.join(numbers)
    return numbers

print(de_identify('970103-1234567'))
print(de_identify('8611232345678'))