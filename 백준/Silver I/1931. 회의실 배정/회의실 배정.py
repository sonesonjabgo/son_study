N = int(input())
data = [list(map(int, input().split())) for _ in range(N)]
data.sort(key=lambda x:x[0])
data.sort(key=lambda x:x[1])
# print(data)
start = data[0][0]
end = data[0][1]
cnt = 1
for i in range(1,N):
    if data[i][0] >= end:
        cnt += 1
        start = data[i][0]
        end = data[i][1]

print(cnt)