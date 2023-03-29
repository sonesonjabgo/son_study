def merge_sort(arr):
    global cnt
    # 요소가 하나가 남으면... 자르는 작업이 필요가 없음
    # 이미 정렬이 된 상태니까...
    if len(arr) == 1:
        return arr

    # 전체를 절반으로 나누어서 각각정렬 한뒤에 합친다.
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    # left와 right는 각각 정렬이 안된상태
    # merge_sort 함수를 이용해서 각각 정렬
    left = merge_sort(left)
    right = merge_sort(right)
    if left[-1] > right[-1]:
        cnt += 1

    merged_arr = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            merged_arr.append(left[i])
            i += 1
        else:
            merged_arr.append(right[j])
            j += 1

    merged_arr += left[i:]
    merged_arr += right[j:]

    return merged_arr

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    data = list(map(int, input().split()))
    cnt = 0
    data = merge_sort(data)
    # print(data)
    print(f'#{tc} {data[N//2]} {cnt}')