N = int(input())
data = [list(map(int, input().split())) for _ in range(N)]

for i in range(1, N):
    for j in range(0, i+1):
        if j == 0: # 표의 제일 왼쪽
            data[i][0] += data[i-1][0]

        elif j == i: # 표의 제일 오른쪽
            data[i][j] += data[i-1][j-1]

        else: # 가운데 부분
            data[i][j] += max(data[i-1][j], data[i-1][j-1])

# print(data)
print(max(data[-1]))