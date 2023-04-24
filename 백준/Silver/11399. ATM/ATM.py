N = int(input())
data = list(map(int, input().split()))

data.sort()
rst = 0
for i in range(N):
    rst += sum(data[:i+1])

print(rst)