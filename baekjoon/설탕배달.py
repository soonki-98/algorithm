n = int(input())
result = 1000000
for i in range(n):
    temp = 0
    for j in range(n):
        if (3 * i + 5 * j == n):
            temp = j
            print(i, j)
            break
    if result > i + temp:
        result = i + temp
print(result)
